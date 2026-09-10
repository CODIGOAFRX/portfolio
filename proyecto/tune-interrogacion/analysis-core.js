/* Tune? 0.4 — AGPL-3.0-or-later. Source and notices: ./source.html */
(function (scope) {
  const RATE = 44100;
  // Tempo stage: 22050 Hz, 1024-sample frames, 220-sample hop (~100 frames per second), a
  // log-spaced filter bank and SuperFlux onsets (Böck & Widmer 2013), then generalised
  // autocorrelation with harmonic enhancement (Percival & Tzanetakis 2014) and dynamic-programming
  // beat tracking (Ellis 2007). The same chain librosa and madmom use, written out to stay offline.
  const TEMPO = { window: 1024, hop: 220, bands: 42, low: 30, high: 10500, minBpm: 40, maxBpm: 210, tightness: 100, seconds: 12 };
  const pitch = { C:0,'C#':1,Db:1,D:2,'D#':3,Eb:3,E:4,F:5,'F#':6,Gb:6,G:7,'G#':8,Ab:8,A:9,'A#':10,Bb:10,B:11 };
  const keyIndex = r => Number.isInteger(pitch[r.key]) && ['major','minor'].includes(r.scale) ? pitch[r.key] + (r.scale==='minor'?12:0) : -1;
  const relative = key => key<0 ? -1 : key<12 ? (key+9)%12+12 : (key%12+3)%12;
  const release = object => { if(object)for(const v of Object.values(object))if(v && typeof v.delete==='function')v.delete(); };
  // Producers write round numbers: 149.9 measured is 150 intended.
  const snapTempo = bpm => Number.isFinite(bpm) && bpm > 0 ? Math.round(bpm) : null;
  // Low-pass before decimating; the distributed WASM build has no libsamplerate backend.
  function downsample(samples) {
    const kernel=new Float64Array(63);let norm=0;
    for(let k=0;k<63;k++){const x=k-31;const sinc=x===0?.45:Math.sin(2*Math.PI*.225*x)/(Math.PI*x);kernel[k]=sinc*(.42-.5*Math.cos(2*Math.PI*k/62)+.08*Math.cos(4*Math.PI*k/62));norm+=kernel[k];}
    for(let k=0;k<63;k++)kernel[k]/=norm;
    const output=new Float32Array(Math.floor(samples.length/2));
    for(let i=0;i<output.length;i++){let value=0;for(let k=0;k<63;k++){const j=2*i+k-31;if(j>=0&&j<samples.length)value+=samples[j]*kernel[k];}output[i]=value;}
    return output;
  }
  const tables = new Map();
  function twiddles(n) {
    let table=tables.get(n);
    if(!table) {
      const cos=new Float64Array(n/2),sin=new Float64Array(n/2),reversed=new Uint32Array(n);
      for(let k=0;k<n/2;k++){cos[k]=Math.cos(-2*Math.PI*k/n);sin[k]=Math.sin(-2*Math.PI*k/n);}
      for(let i=1,j=0;i<n;i++){let bit=n>>1;for(;j&bit;bit>>=1)j^=bit;j^=bit;reversed[i]=j;}
      table={cos,sin,reversed};tables.set(n,table);
    }
    return table;
  }
  function fft(re,im) {
    const n=re.length,{cos,sin,reversed}=twiddles(n);
    for(let i=1;i<n;i++){const j=reversed[i];if(i<j){let x=re[i];re[i]=re[j];re[j]=x;x=im[i];im[i]=im[j];im[j]=x;}}
    for(let length=2;length<=n;length<<=1) {
      const half=length>>1,stride=n/length;
      for(let start=0;start<n;start+=length)for(let k=0;k<half;k++) {
        const wr=cos[k*stride],wi=sin[k*stride],a=start+k,b=a+half;
        const vr=re[b]*wr-im[b]*wi,vi=re[b]*wi+im[b]*wr;
        re[b]=re[a]-vr;im[b]=im[a]-vi;re[a]+=vr;im[a]+=vi;
      }
    }
  }
  // Triangular filters spaced logarithmically: one onset band per roughly a third of an octave.
  function filterBank(size,rate) {
    const edges=new Float64Array(TEMPO.bands+2),bank=[];
    for(let k=0;k<TEMPO.bands+2;k++)edges[k]=TEMPO.low*Math.pow(TEMPO.high/TEMPO.low,k/(TEMPO.bands+1))*size/rate;
    for(let b=0;b<TEMPO.bands;b++) {
      const start=Math.max(1,Math.floor(edges[b])),end=Math.min(size/2-1,Math.ceil(edges[b+2])),centre=edges[b+1];
      const weights=new Float64Array(Math.max(0,end-start+1));
      for(let k=start;k<=end;k++) {
        const rise=(k-edges[b])/Math.max(1e-9,centre-edges[b]),fall=(edges[b+2]-k)/Math.max(1e-9,edges[b+2]-centre);
        weights[k-start]=Math.max(0,Math.min(rise,fall));
      }
      bank.push({start,weights});
    }
    return bank;
  }
  // SuperFlux: positive log-magnitude change against a frequency-smoothed previous frame, so
  // vibrato and slow swells do not register as onsets. Local mean removal follows Ellis.
  function onsetEnvelope(signal,rate) {
    const size=TEMPO.window,hop=TEMPO.hop,bands=TEMPO.bands,fps=rate/hop;
    const frames=Math.floor((signal.length-size)/hop)+1;
    if(!(frames>=16))return {envelope:new Float64Array(0),fps};
    let peak=0;
    for(let i=0;i<signal.length;i++){const value=Math.abs(signal[i]);if(value>peak)peak=value;}
    const gain=peak>1e-7?1/peak:0,window=new Float64Array(size);
    for(let i=0;i<size;i++)window[i]=.5-.5*Math.cos(2*Math.PI*i/size);
    const bank=filterBank(size,rate),spectrum=new Float64Array(frames*bands);
    const re=new Float64Array(size),im=new Float64Array(size);
    const even=new Float64Array(size/2),odd=new Float64Array(size/2);
    const collect=(magnitude,t)=>{
      for(let b=0;b<bands;b++) {
        const filter=bank[b];let sum=0;
        for(let i=0;i<filter.weights.length;i++)sum+=magnitude[filter.start+i]*filter.weights[i];
        spectrum[t*bands+b]=Math.log(1+20*sum);
      }
    };
    // Two real frames ride one complex transform: pack the second into the imaginary part and undo
    // the interleaving from the conjugate symmetry. Halves the transforms this stage has to run.
    for(let t=0;t<frames;t+=2) {
      const paired=t+1<frames;
      for(let i=0;i<size;i++){re[i]=signal[t*hop+i]*window[i]*gain;im[i]=paired?signal[(t+1)*hop+i]*window[i]*gain:0;}
      fft(re,im);
      for(let k=1;k<size/2;k++) {
        const mirror=size-k,first=(re[k]+re[mirror])/2,firstImaginary=(im[k]-im[mirror])/2;
        const second=(im[k]+im[mirror])/2,secondImaginary=(re[mirror]-re[k])/2;
        even[k]=Math.sqrt(first*first+firstImaginary*firstImaginary);
        odd[k]=Math.sqrt(second*second+secondImaginary*secondImaginary);
      }
      collect(even,t);
      if(paired)collect(odd,t+1);
    }
    const flux=new Float64Array(frames);
    for(let t=1;t<frames;t++) {
      let sum=0;
      for(let b=0;b<bands;b++) {
        const previous=(t-1)*bands+b;
        let reference=spectrum[previous];
        if(b>0)reference=Math.max(reference,spectrum[previous-1]);
        if(b<bands-1)reference=Math.max(reference,spectrum[previous+1]);
        const rise=spectrum[t*bands+b]-reference;
        if(rise>0)sum+=rise;
      }
      flux[t]=sum;
    }
    const span=Math.max(1,Math.round(fps*.35)),running=new Float64Array(frames+1);
    for(let t=0;t<frames;t++)running[t+1]=running[t]+flux[t];
    const envelope=new Float64Array(frames);
    for(let t=0;t<frames;t++) {
      const from=Math.max(0,t-span),to=Math.min(frames,t+span+1);
      envelope[t]=Math.max(0,flux[t]-(running[to]-running[from])/(to-from));
    }
    let mean=0;for(let t=0;t<frames;t++)mean+=envelope[t];mean/=frames;
    let deviation=0;for(let t=0;t<frames;t++)deviation+=(envelope[t]-mean)**2;
    deviation=Math.sqrt(deviation/frames);
    if(deviation>1e-12)for(let t=0;t<frames;t++)envelope[t]/=deviation;
    return {envelope,fps};
  }
  // Generalised autocorrelation (p=0.5) averaged over overlapping windows: sharper lag peaks than
  // plain autocorrelation, and tolerant of a performance that drifts.
  function tempoCurve(envelope,fps) {
    const minLag=Math.max(2,Math.floor(60*fps/TEMPO.maxBpm)),longest=Math.ceil(60*fps/TEMPO.minBpm);
    const reach=Math.min(envelope.length-1,longest*4);
    if(reach<minLag*4)return null;
    const frames=Math.min(envelope.length,Math.round(fps*TEMPO.seconds)),step=Math.max(1,Math.round(frames/2));
    let size=2;while(size<frames*2)size<<=1;
    const correlation=new Float64Array(reach+1),re=new Float64Array(size),im=new Float64Array(size);
    let windows=0;
    for(let start=0;start===0||start+frames<=envelope.length;start+=step) {
      const length=Math.min(frames,envelope.length-start);
      if(length<minLag*4)break;
      re.fill(0);im.fill(0);
      let mean=0;for(let i=0;i<length;i++)mean+=envelope[start+i];mean/=length;
      for(let i=0;i<length;i++)re[i]=envelope[start+i]-mean;
      fft(re,im);
      for(let k=0;k<size;k++){re[k]=Math.sqrt(re[k]*re[k]+im[k]*im[k]);im[k]=0;}
      fft(re,im);
      const zero=re[0];
      if(zero>1e-9){for(let lag=0;lag<=reach&&lag<length;lag++)correlation[lag]+=re[lag]/zero*length/(length-lag);windows++;}
    }
    if(!windows)return null;
    for(let lag=0;lag<=reach;lag++)correlation[lag]/=windows;
    const maxLag=Math.min(longest,reach),band=Array.from(correlation.subarray(minLag,maxLag+1)).sort((a,b)=>a-b);
    return {correlation,minLag,maxLag,fps,baseline:band[Math.floor(band.length/2)]};
  }
  // Lag peaks can be one bin wide, and a beat lag doubled rarely lands on the bin its own peak
  // occupies. Read every lag as a peak with a +-3% tempo tolerance: its height above the local
  // floor for clarity, its mass for comparing one metrical level against another.
  function around(curve,lag,collect) {
    const centre=Math.round(lag),radius=Math.max(1,Math.round(lag*.03));
    let value=0;
    for(let i=centre-radius;i<=centre+radius;i++)
      if(i>=1&&i<curve.correlation.length)value=collect(value,Math.max(0,curve.correlation[i]-curve.baseline));
    return value;
  }
  const strength=(curve,lag)=>around(curve,lag,(a,b)=>a+b);
  const clearest=(curve,lag)=>around(curve,lag,(a,b)=>Math.max(a,b));
  // Tempo perception clusters around two beats per second. This never decides a tempo on its own,
  // only which of several readings of the same evidence is the one being counted.
  const prior=bpm=>Math.exp(-.5*(Math.log2(bpm/125)/.9)**2);
  // A beat lag is corroborated by its own multiples, so a bar-length peak cannot outrank the beat.
  // Each multiple is capped by the lag's own evidence: half a bar borrows nothing from the bar it
  // sits inside unless something is actually playing there.
  function tempoCandidates(curve) {
    const {correlation,minLag,maxLag,fps,baseline}=curve,enhanced=new Float64Array(maxLag+2),found=[];
    for(let lag=minLag;lag<=maxLag;lag++) {
      const own=Math.max(0,correlation[lag]-baseline);
      enhanced[lag]=own+.5*Math.min(own,clearest(curve,lag*2))+.25*Math.min(own,clearest(curve,lag*4));
    }
    for(let lag=minLag+1;lag<maxLag;lag++) {
      if(enhanced[lag]<=enhanced[lag-1]||enhanced[lag]<enhanced[lag+1])continue;
      const left=enhanced[lag-1],centre=enhanced[lag],right=enhanced[lag+1],divisor=left-2*centre+right;
      const shift=divisor===0?0:Math.max(-.5,Math.min(.5,.5*(left-right)/divisor));
      const period=lag+shift,bpm=60*fps/period;
      found.push({period,bpm,support:strength(curve,period),score:centre*prior(bpm)});
    }
    found.sort((a,b)=>b.score-a.score);
    return found.slice(0,6);
  }
  // Metrical level. Ranking already weighs a lag against its own multiples, so this only ever
  // moves up: a pattern that repeats every two bars correlates best at the bar, and reporting the
  // bar as the tempo is the half-time answer nobody wants.
  function chooseLevel(curve,period,external) {
    const evidence=lag=>strength(curve,lag)*prior(60*curve.fps/lag);
    const ranked=evidence(period),mass=strength(curve,period);
    let chosen=period;
    for(const factor of [.5,.25]) {
      const faster=period*factor;
      if(60*curve.fps/faster>TEMPO.maxBpm)continue;
      const agreed=external>0&&Math.abs(60*curve.fps/faster/external-1)<=.04;
      // Either the faster pulse is the better reading once counting habits are weighed, or the raw
      // evidence for it outweighs the slower one outright, which means the slower one was only
      // every other beat of it. An unaccented click track is decided by the second test alone.
      if(evidence(faster)>=ranked*(agreed?.5:1)||strength(curve,faster)>=mass*1.05)chosen=Math.min(chosen,faster);
    }
    return chosen;
  }
  // Ellis 2007: maximise onset strength along a path whose spacing stays close to the period.
  function trackBeats(envelope,period) {
    const n=envelope.length,shortest=Math.max(1,Math.round(period/2)),longest=Math.round(period*2);
    if(n<period*4||longest<=shortest)return [];
    const width=longest-shortest+1,transition=new Float64Array(width);
    for(let i=0;i<width;i++)transition[i]=-TEMPO.tightness*Math.log((shortest+i)/period)**2;
    const cumulative=new Float64Array(n),previous=new Int32Array(n);
    for(let t=0;t<n;t++) {
      let best=-Infinity,index=-1;
      for(let i=0;i<width;i++) {
        const from=t-shortest-i;
        if(from<0)break;
        const value=cumulative[from]+transition[i];
        if(value>best){best=value;index=from;}
      }
      cumulative[t]=envelope[t]+(index<0?0:best);
      previous[t]=index;
    }
    let tail=-1,top=-Infinity;
    for(let t=Math.max(0,n-Math.round(period*2));t<n;t++)if(cumulative[t]>top){top=cumulative[t];tail=t;}
    const beats=[];
    for(let t=tail;t>=0;t=previous[t]){beats.push(t);if(previous[t]<0)break;}
    return beats.reverse();
  }
  // Median of long spans between beats: frame quantisation and single misplaced beats cancel out.
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
  function trackTempo(signal,rate,external) {
    const {envelope,fps}=onsetEnvelope(signal,rate);
    if(!envelope.length)return null;
    const curve=tempoCurve(envelope,fps);
    if(!curve)return null;
    const candidates=tempoCandidates(curve);
    if(!candidates.length)return null;
    const period=chooseLevel(curve,candidates[0].period,external);
    const clarity=clearest(curve,period);
    const beats=trackBeats(envelope,period).map(frame=>frame/fps);
    const base=60*fps/period;
    return {bpm:beats.length>=8?refineTempo(base,beats):base,clarity,beats:beats.length};
  }
  // Broadband level variation separates stationary noise from anything performed.
  function transientVariation(samples) {
    const hop=441,levels=[];
    let energy=0;
    for(let i=0;i<samples.length;i++){energy+=samples[i]*samples[i];if((i+1)%hop===0){levels.push(Math.sqrt(energy/hop));energy=0;}}
    if(!levels.length)return 0;
    const mean=levels.reduce((a,b)=>a+b,0)/levels.length;
    return Math.sqrt(levels.reduce((a,b)=>a+(b-mean)**2,0)/levels.length)/(mean+1e-12);
  }
  // Distinguish broadband noise and an isolated sinusoid from harmonic music.
  function spectralCheck(e,samples) {
    let flatness=0,pure=0,count=0;
    const chroma=new Float64Array(12);
    for(let f=1;f<=5;f++) {
      const start=Math.floor((samples.length-4096)*f/6);
      const input=e.arrayToVector(samples.subarray(start,start+4096));let windowed,spectrum;
      try {
        windowed=e.Windowing(input);spectrum=e.Spectrum(windowed.frame);
        const values=e.vectorToArray(spectrum.spectrum);let sum=0,log=0,max=0,index=0;
        for(let k=1;k<values.length;k++){const p=values[k]*values[k];sum+=p;log+=Math.log(p+1e-20);if(p>max){max=p;index=k;}}
        if(sum<1e-10)continue;
        // Count supported pitch classes, interpolating FFT peaks to avoid bin rounding.
        // A kick, a single note or a two-note interval cannot establish major/minor.
        for(let k=2;k<values.length-1;k++) {
          const power=values[k]*values[k];
          if(power<max*.02||values[k]<=values[k-1]||values[k]<values[k+1])continue;
          const left=Math.log(values[k-1]+1e-20),center=Math.log(values[k]+1e-20),right=Math.log(values[k+1]+1e-20);
          const denominator=left-2*center+right;
          const shift=denominator===0?0:Math.max(-.5,Math.min(.5,.5*(left-right)/denominator));
          const frequency=(k+shift)*RATE/4096;
          if(frequency<60||frequency>3500)continue;
          const note=Math.round(69+12*Math.log2(frequency/440));
          chroma[(note%12+12)%12]+=power/sum;
        }
        const bins=values.length-1;
        flatness+=Math.exp(log/bins)/(sum/bins);
        let peakEnergy=0;for(let k=Math.max(1,index-3);k<=Math.min(values.length-1,index+3);k++)peakEnergy+=values[k]*values[k];
        if(peakEnergy/sum>.97)pure++;
        count++;
      }finally{input.delete();release(windowed);release(spectrum);}
    }
    const total=chroma.reduce((a,b)=>a+b,0);
    const pitchClasses=Array.from(chroma).filter(x=>x>total*.06).length;
    return {noise:count>0&&flatness/count>.25,singlePitch:count>0&&pure/count>.8,insufficientHarmony:pitchClasses<3};
  }
  // Second opinion from Essentia's multifeature tracker. It never vetoes a tempo; it only settles
  // which metrical level is the beat, and a failure inside it must not lose the whole analysis.
  function externalTempo(e,samples) {
    let input,rhythm;
    try {
      input=e.arrayToVector(samples);
      rhythm=e.RhythmExtractor2013(input,TEMPO.maxBpm,'multifeature',TEMPO.minBpm);
      const ticks=rhythm.ticks.size()?Array.from(e.vectorToArray(rhythm.ticks)):[];
      const confidence=Number.isFinite(rhythm.confidence)?rhythm.confidence:0;
      const bpm=ticks.length>=8?refineTempo(rhythm.bpm,ticks):Number.isFinite(rhythm.bpm)&&rhythm.bpm>0?rhythm.bpm:null;
      return bpm>0?{bpm,confidence}:null;
    }catch(error){return null;}
    finally{if(input)input.delete();release(rhythm);}
  }
  function analyze(e,samples,rate,onProgress=()=>{}) {
    if(!(samples instanceof Float32Array)||rate!==RATE||samples.length<RATE*6||samples.length>RATE*180)throw Error('Expected 6–180 seconds of 44100 Hz PCM');
    let energy=0;const waveform=new Array(180).fill(0);
    for(let i=0;i<samples.length;i++){
      const x=samples[i];if(!Number.isFinite(x))throw Error('Invalid audio sample');
      energy+=x*x;const bucket=Math.floor(i*180/samples.length);waveform[bucket]=Math.max(waveform[bucket],Math.abs(x));
    }
    const result={engine:'tune-0.4.0 / essentia',bpm:null,preciseBpm:null,rhythmStrength:0,pulseClarity:0,tempoAmbiguous:false,key:-1,alternateKey:-1,keyAmbiguous:false,keyFit:0,seconds:samples.length/RATE,rhythmSeconds:Math.min(120,samples.length/RATE),waveform};
    if(energy/samples.length<1e-10)return result;
    const spectral=spectralCheck(e,samples);
    if(spectral.singlePitch)return result;
    const rhythmSpan=samples.subarray(0,RATE*120);
    if(spectral.noise&&transientVariation(rhythmSpan)<.2)return result;
    onProgress('rhythm');
    // RhythmExtractor2013 requires 44.1 kHz. Never feed it downsampled audio.
    const external=externalTempo(e,rhythmSpan);
    result.rhythmStrength=external?external.confidence:0;
    const half=downsample(samples);
    const own=trackTempo(half.subarray(0,Math.floor(RATE/2*120)),RATE/2,external&&external.confidence>=1.2?external.bpm:null);
    result.pulseClarity=own?own.clarity:0;
    let bpm=own&&own.clarity>=.06?own.bpm:null;
    if(!bpm&&external)bpm=external.bpm;
    const agreement=bpm!==null&&external!==null&&Math.abs(external.bpm/bpm-1)<=.04;
    result.preciseBpm=bpm;
    result.bpm=snapTempo(bpm);
    // Ambiguous only when nothing corroborates the reading: the second opinion disagrees on the
    // level and the periodicity itself is faint. A correct answer should not be hedged.
    result.tempoAmbiguous=result.bpm!==null&&!(agreement&&external.confidence>=1.5)&&result.pulseClarity<.18;
    if(spectral.noise||spectral.singlePitch||spectral.insufficientHarmony)return result;
    onProgress('key');
    const tonalInput=e.arrayToVector(half);
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
  scope.TuneAnalysis={analyze,refineTempo,keyIndex,downsample,spectralCheck,transientVariation,snapTempo,fft,onsetEnvelope,tempoCurve,tempoCandidates,chooseLevel,trackBeats,trackTempo};
})(globalThis);
