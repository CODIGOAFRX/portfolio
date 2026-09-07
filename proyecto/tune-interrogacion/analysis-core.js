/* Tune? 0.2 — AGPL-3.0-or-later. Source and notices: ./source.html */
(function (scope) {
  const RATE = 44100;
  const pitch = { C:0,'C#':1,Db:1,D:2,'D#':3,Eb:3,E:4,F:5,'F#':6,Gb:6,G:7,'G#':8,Ab:8,A:9,'A#':10,Bb:10,B:11 };
  const keyIndex = r => Number.isInteger(pitch[r.key]) && ['major','minor'].includes(r.scale) ? pitch[r.key] + (r.scale==='minor'?12:0) : -1;
  const relative = key => key<0 ? -1 : key<12 ? (key+9)%12+12 : (key%12+3)%12;
  const release = object => { if(object)for(const v of Object.values(object))if(v && typeof v.delete==='function')v.delete(); };
  // Low-pass before decimating; the distributed WASM build has no libsamplerate backend.
  function downsample(samples) {
    const kernel=new Float64Array(63);let norm=0;
    for(let k=0;k<63;k++){const x=k-31;const sinc=x===0?.45:Math.sin(2*Math.PI*.225*x)/(Math.PI*x);kernel[k]=sinc*(.42-.5*Math.cos(2*Math.PI*k/62)+.08*Math.cos(4*Math.PI*k/62));norm+=kernel[k];}
    for(let k=0;k<63;k++)kernel[k]/=norm;
    const output=new Float32Array(Math.floor(samples.length/2));
    for(let i=0;i<output.length;i++){let value=0;for(let k=0;k<63;k++){const j=2*i+k-31;if(j>=0&&j<samples.length)value+=samples[j]*kernel[k];}output[i]=value;}
    return output;
  }
  function refineTempo(bpm, ticks) {
    if(!Number.isFinite(bpm) || bpm<=0) return null;
    const span = Math.min(32,Math.floor((ticks.length-1)/2));
    if(span<8) return bpm;
    const values=[];
    for(let i=span;i<ticks.length;i++) {
      const candidate=60*span/(ticks[i]-ticks[i-span]);
      if(Number.isFinite(candidate) && Math.abs(candidate/bpm-1)<.12)values.push(candidate);
    }
    values.sort((a,b)=>a-b);
    return values.length ? values[Math.floor(values.length/2)] : bpm;
  }
  // Distinguish broadband noise and an isolated sinusoid from harmonic music.
  function spectralCheck(e,samples) {
    let flatness=0,pure=0,count=0;
    for(let f=1;f<=5;f++) {
      const start=Math.floor((samples.length-4096)*f/6);
      const input=e.arrayToVector(samples.subarray(start,start+4096));let windowed,spectrum;
      try {
        windowed=e.Windowing(input);spectrum=e.Spectrum(windowed.frame);
        const values=e.vectorToArray(spectrum.spectrum);let sum=0,log=0,max=0,index=0;
        for(let k=1;k<values.length;k++){const p=values[k]*values[k];sum+=p;log+=Math.log(p+1e-20);if(p>max){max=p;index=k;}}
        if(sum<1e-10)continue;
        const bins=values.length-1;
        flatness+=Math.exp(log/bins)/(sum/bins);
        let peakEnergy=0;for(let k=Math.max(1,index-3);k<=Math.min(values.length-1,index+3);k++)peakEnergy+=values[k]*values[k];
        if(peakEnergy/sum>.97)pure++;
        count++;
      }finally{input.delete();release(windowed);release(spectrum);}
    }
    return {noise:count>0&&flatness/count>.25,singlePitch:count>0&&pure/count>.8};
  }
  function analyze(e,samples,rate) {
    if(!(samples instanceof Float32Array)||rate!==RATE||samples.length<RATE*6||samples.length>RATE*180)throw Error('Expected 6–180 seconds of 44100 Hz PCM');
    let energy=0;const waveform=new Array(180).fill(0);
    for(let i=0;i<samples.length;i++){
      const x=samples[i];if(!Number.isFinite(x))throw Error('Invalid audio sample');
      energy+=x*x;const bucket=Math.floor(i*180/samples.length);waveform[bucket]=Math.max(waveform[bucket],Math.abs(x));
    }
    const result={engine:'essentia-0.2.0',bpm:null,rhythmStrength:0,key:-1,alternateKey:-1,keyAmbiguous:false,keyFit:0,seconds:samples.length/RATE,rhythmSeconds:Math.min(120,samples.length/RATE),waveform};
    if(energy/samples.length<1e-10)return result;
    const spectral=spectralCheck(e,samples);
    if(spectral.noise||spectral.singlePitch)return result;
    // RhythmExtractor2013 requires 44.1 kHz. Never feed it downsampled audio.
    const rhythmInput=e.arrayToVector(samples.subarray(0,RATE*120));let rhythm;
    try {
      rhythm=e.RhythmExtractor2013(rhythmInput,208,'multifeature',90);
      const ticks=rhythm.ticks.size()?Array.from(e.vectorToArray(rhythm.ticks)):[];
      result.bpm=ticks.length>=8 ? refineTempo(rhythm.bpm,ticks) : null;
      result.rhythmStrength=Number.isFinite(rhythm.confidence)?rhythm.confidence:0;
    }finally{rhythmInput.delete();release(rhythm);}
    const tonalInput=e.arrayToVector(downsample(samples));
    try {
      const params=[true,4096,4096,36,3500,60,25,.2];
      const primary=e.KeyExtractor(tonalInput,...params,'edma',22050);
      const check=e.KeyExtractor(tonalInput,...params,'bgate',22050);
      const key=keyIndex(primary),other=keyIndex(check);
      if(key>=0&&Number.isFinite(primary.strength)&&primary.strength>=.5){
        result.key=key;result.keyFit=primary.strength;
        result.keyAmbiguous=other!==key||primary.strength<.6;
        result.alternateKey=other!==key&&other>=0 ? other : relative(key);
        // The minor-only profile is used ONLY to expose a competing reading, never to force the answer to minor.
        if(key<12&&other!==key){
          const minor=e.KeyExtractor(tonalInput,...params,'edmm',22050);
          const minorKey=keyIndex(minor);
          if(minorKey===relative(key))result.alternateKey=minorKey;
        }
      }
    }finally{tonalInput.delete();}
    return result;
  }
  scope.TuneAnalysis={analyze,refineTempo,keyIndex,downsample};
})(globalThis);
