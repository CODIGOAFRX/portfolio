/* Tune? 0.3 — AGPL-3.0-or-later. See source.html. */
import { RATE, validateFile, prepareSamples, keyNames, keyLabel, camelotLabel, tempoLabel, timeLabel } from './audio-input.js';
const $ = id => document.getElementById(id);
let job = null;
let audioURL = '';
let result = null;
let sequence = 0;
const message = text => { $('announcement').textContent = text; };

function busy(value, phase = 'Preparando el audio…') {
  $('audio-file').disabled = value;
  $('select-audio').hidden = value;
  $('cancel').hidden = !value;
  $('glyph').classList.toggle('pulsing', value);
  $('results').setAttribute('aria-busy', String(value));
  $('upload-title').textContent = value ? phase : 'Suelta aquí tu beat';
  $('status').textContent = value ? phase : result ? 'Analizado' : 'Esperando audio';
  $('status').classList.toggle('ready', !!result && !value);
  if (!value) $('upload-subtitle').textContent = 'o selecciónalo desde tu dispositivo';
}

function clearResult() {
  result = null;
  $('player').pause(); $('player').removeAttribute('src'); $('player').load();
  if (audioURL) URL.revokeObjectURL(audioURL);
  audioURL = '';
  for (const id of ['key','bpm','camelot','key-reading']) $(id).textContent = '—';
  $('scale').textContent = '';
  $('key-note').textContent = 'La nota que lo une todo';
  $('tempo-note').textContent = 'El ritmo de tu siguiente idea';
  $('filename').textContent = 'Ningún archivo seleccionado';
  $('duration').textContent = '00:00';
  $('details').hidden = true;
  $('waveform').replaceChildren();
  const line = document.createElement('div'); line.className = 'wave-line';
  const label = document.createElement('span'); label.textContent = 'Todo empieza con un sonido.';
  $('waveform').append(line, label);
}

// Every asynchronous stage is cancellable and bounded. Late decode results are ignored.
function bounded(promise, signal, timeout, text) {
  return new Promise((resolve, reject) => {
    const abort = () => finish(reject, new DOMException('Cancelado', 'AbortError'));
    const timer = setTimeout(() => finish(reject, Error(text)), timeout);
    function finish(fn, value) { clearTimeout(timer); signal.removeEventListener('abort', abort); fn(value); }
    signal.addEventListener('abort', abort, { once: true });
    if (signal.aborted) abort();
    Promise.resolve(promise).then(v => finish(resolve, v), e => finish(reject, e));
  });
}

function analyze(samples, current) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(new URL('./analyzer.worker.js?v=0.3.0', import.meta.url));
    current.worker = worker;
    worker.onmessage = ({ data }) => {
      if (data.id !== current.id || job !== current) return;
      if (data.phase) {
        const text = data.phase === 'rhythm' ? 'Midiendo el tempo…' : 'Buscando la tonalidad…';
        busy(true, text); message(text); return;
      }
      if (data.error) reject(Error(data.error));
      else if (data.result) resolve(data.result);
      else reject(Error('El motor devolvió una respuesta incompleta.'));
    };
    worker.onerror = () => reject(Error('No se pudo iniciar el analizador. Recarga la página y vuelve a intentarlo.'));
    worker.onmessageerror = () => reject(Error('No se pudo leer la respuesta del analizador.'));
    worker.postMessage({ id: current.id, samples, sampleRate: RATE }, [samples.buffer]);
  });
}

function selectTempo(factor) {
  if (!result?.bpm) return;
  const bpm = result.bpm * factor;
  $('bpm').textContent = tempoLabel(bpm);
  $('tempo-note').textContent = factor === 1 ? (result.tempoAmbiguous ? 'Lectura rítmica ambigua' : 'Tempo estimado') : 'Interpretación elegida por ti';
  for (const [id, value] of [['half-tempo', .5], ['original-tempo', 1], ['double-tempo', 2]]) $(id).setAttribute('aria-pressed', String(value === factor));
  message(`${keyLabel(result.key)}. ${tempoLabel(bpm)} BPM.`);
}

function display(analysis, prepared, file) {
  result = analysis;
  const key = result.key;
  $('key').textContent = key >= 0 ? keyNames[key % 12] : '—';
  $('scale').textContent = key >= 0 ? key < 12 ? 'mayor' : 'menor' : '';
  $('key-note').textContent = key >= 0 ? keyLabel(key) : 'No hay una tonalidad clara';
  $('camelot').textContent = camelotLabel(key);
  $('key-reading').textContent = key < 0 ? 'Sin determinar' : result.keyAmbiguous ? 'Ambigua' : 'Orientativa';
  $('tempo-note').textContent = 'No hay un pulso claro';
  $('filename').textContent = file.name; $('filename').title = file.name;
  $('duration').textContent = timeLabel(prepared.duration);
  $('detail-title').textContent = result.keyAmbiguous ? 'Hay más de una lectura tonal posible.' : 'Escucha el resultado con contexto.';
  $('detail-text').textContent = key < 0 ? 'El audio puede ser percusivo, monofónico o tonalmente ambiguo.' : result.keyAmbiguous ? `Lectura principal: ${keyLabel(key)}. Alternativa: ${keyLabel(result.alternateKey)}.` : `Lectura tonal orientativa: ${keyLabel(key)}.`;
  if (result.bpm) $('detail-text').textContent += ' El pulso puede sentirse a la mitad o al doble; compara las interpretaciones escuchando el audio.';
  $('analysis-note').textContent = `Fragmento desde ${timeLabel(prepared.offsetSeconds)} · Tonalidad: ${timeLabel(result.seconds)} · Tempo: ${timeLabel(result.rhythmSeconds)}. Las estimaciones pueden variar con el arreglo y los cambios de tono.${prepared.phaseFallback ? ' Se ha usado un canal para evitar cancelación de fase.' : ''}`;
  $('tempo-options').hidden = !result.bpm;
  for (const [id, factor] of [['half-tempo', .5], ['original-tempo', 1], ['double-tempo', 2]]) {
    $(id).textContent = `${tempoLabel(result.bpm * factor)} BPM${factor === 1 ? ' · detectado' : ''}`;
  }
  if (result.bpm) selectTempo(1);
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg'); svg.setAttribute('viewBox', '0 0 540 88'); svg.setAttribute('role', 'img');
  const title = document.createElementNS(ns, 'title'); title.textContent = 'Amplitud del fragmento analizado'; svg.append(title);
  result.waveform.forEach((amplitude, i) => {
    const line = document.createElementNS(ns, 'line'); const height = Math.max(1, Math.min(1, amplitude) * 40);
    for (const [name, value] of Object.entries({ x1: i * 3 + 1, x2: i * 3 + 1, y1: 44 - height, y2: 44 + height, stroke: 'currentColor', 'stroke-width': 1.6 })) line.setAttribute(name, value);
    svg.append(line);
  });
  $('waveform').replaceChildren(svg);
  audioURL = URL.createObjectURL(file); $('player').src = audioURL;
  $('details').hidden = false;
  message(`Análisis terminado. ${keyLabel(key)}. ${result.bpm ? `${tempoLabel(result.bpm)} BPM` : 'Tempo sin determinar'}.`);
}

async function openFile(file) {
  if (!file) return;
  try { validateFile(file); } catch (error) { $('error').textContent = error.message; $('error').hidden = false; return; }
  job?.controller.abort(); job?.worker?.terminate();
  const current = { id: ++sequence, controller: new AbortController(), worker: null };
  job = current;
  clearResult(); $('error').hidden = true; busy(true); message('Preparando audio');
  $('upload-subtitle').textContent = file.name;
  try {
    const Offline = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    if (!Offline) throw Error('Este navegador no admite el análisis de audio. Prueba con un navegador actualizado.');
    const bytes = await bounded(file.arrayBuffer(), current.controller.signal, 15000, 'No se pudo leer el archivo.');
    let decoded;
    try { decoded = await bounded(new Offline(1, 1, RATE).decodeAudioData(bytes), current.controller.signal, 45000, 'El audio tarda demasiado en abrirse. Prueba un fragmento más corto.'); }
    catch (error) {
      if (error.name === 'EncodingError' || error.name === 'NotSupportedError') throw Error('Tu navegador no puede decodificar este archivo. Expórtalo como WAV o MP3 y vuelve a intentarlo.');
      throw error;
    }
    if (job !== current) return;
    const prepared = prepareSamples(decoded); decoded = null;
    busy(true, 'Iniciando el analizador…');
    const analysis = await bounded(analyze(prepared.samples, current), current.controller.signal, 180000, 'El análisis ha tardado demasiado. Prueba con un fragmento más corto.');
    if (job === current) display(analysis, prepared, file);
  } catch (error) {
    if (job === current && error.name !== 'AbortError') { $('error').textContent = error.message; $('error').hidden = false; }
  } finally {
    current.worker?.terminate();
    if (job === current) { job = null; busy(false); }
  }
}

$('select-audio').onclick = () => $('audio-file').click();
$('audio-file').onchange = event => { openFile(event.target.files[0]); event.target.value = ''; };
$('cancel').onclick = () => {
  job?.controller.abort(); job?.worker?.terminate(); job = null;
  clearResult(); busy(false); message('Análisis cancelado. Puedes seleccionar otro archivo.');
};
for (const [id, factor] of [['half-tempo', .5], ['original-tempo', 1], ['double-tempo', 2]]) $(id).onclick = () => selectTempo(factor);
$('dropzone').ondragover = event => { event.preventDefault(); if (!job) $('dropzone').classList.add('dragging'); };
$('dropzone').ondragleave = () => $('dropzone').classList.remove('dragging');
$('dropzone').ondrop = event => {
  event.preventDefault(); $('dropzone').classList.remove('dragging');
  if (job) return;
  if (event.dataTransfer.files.length === 1) openFile(event.dataTransfer.files[0]);
  else { $('error').textContent = 'Selecciona un solo archivo cada vez.'; $('error').hidden = false; }
};
window.addEventListener('pagehide', () => { job?.controller.abort(); job?.worker?.terminate(); if (audioURL) URL.revokeObjectURL(audioURL); });
