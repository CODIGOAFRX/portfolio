/* Tune? 0.4 — AGPL-3.0-or-later. Local audio only. See source.html. */
var exports = {};
let essentia;
let initializationError;
try {
  importScripts('./vendor/essentia-wasm.umd.js', './vendor/essentia.js-core.min.js', './analysis-core.js');
  essentia = new Essentia(exports.EssentiaWASM);
} catch (error) {
  initializationError = error;
  console.error('Tune: engine initialization failed', error);
}
self.onmessage = ({ data }) => {
  const id = data?.id;
  if (initializationError) {
    self.postMessage({ id, error: 'No se pudo cargar el motor de audio. Comprueba la conexión, recarga la página y vuelve a intentarlo.', code: 'ENGINE_INIT' });
    return;
  }
  try {
    const result = TuneAnalysis.analyze(essentia, data.samples, data.sampleRate,
      phase => self.postMessage({ id, phase }));
    self.postMessage({ id, result });
  } catch (error) {
    console.error('Tune: analysis failed', error);
    self.postMessage({ id, error: 'No se pudo analizar este audio. Prueba con un fragmento más corto en WAV o MP3.', code: 'ANALYSIS_FAILED' });
  }
};
