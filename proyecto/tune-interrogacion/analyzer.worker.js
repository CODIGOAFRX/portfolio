/* Tune? 0.2 — audio stays in this worker. See source.html for source and notices. */
// The web-only distribution assumes document; this distribution supports worker environments.
var exports={};
importScripts('./vendor/essentia-wasm.umd.js','./vendor/essentia.js-core.min.js','./analysis-core.js');
const ready=Promise.resolve(new Essentia(exports.EssentiaWASM));
self.onmessage = async ({ data }) => {
  try {
    const essentia=await ready;
    const result=TuneAnalysis.analyze(essentia,data.samples,data.sampleRate);
    self.postMessage({ result });
  } catch {
    self.postMessage({ error: 'No se pudo analizar este audio. Recarga la página y prueba con un fragmento más corto en WAV o MP3.' });
  }
};
