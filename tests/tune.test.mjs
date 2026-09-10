import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { loadEngine, music, groove, patterns } from './helpers/tune-engine.mjs';
import { prepareSamples, validateFile, tempoLabel, camelotLabel } from '../proyecto/tune-interrogacion/audio-input.js';

const { engine, analysis } = loadEngine();
const rate = 44100;
const audioBuffer = channels => ({ sampleRate: rate, numberOfChannels: channels.length, length: channels[0].length, duration: channels[0].length / rate, getChannelData: i => channels[i] });
const ownTempo = pcm => analysis.trackTempo(analysis.downsample(pcm), rate / 2, null);

test('known tempos retain their actual beat rate, including slow and fast music', () => {
  for (const bpm of [60, 70, 100, 120, 157, 174, 200]) {
    const actual = analysis.analyze(engine, music({ bpm }), rate);
    assert.equal(actual.bpm, bpm, `${bpm} BPM detected as ${actual.bpm}`);
  }
  assert.equal(tempoLabel(70), '70');
  assert.equal(tempoLabel(119.94), '119.9');
});

// Arrangements, not metronomes: sixteenth hats, snares on the backbeat and syncopated kicks are
// what pull a tempo reading to half or double the written one.
test('written drum patterns report the quarter note, not the bar or the subdivision', () => {
  for (const [name, bpm] of [['trap', 130], ['trap', 150], ['trap', 157], ['trap', 168], ['boombap', 90], ['boombap', 96], ['house', 124], ['house', 128], ['halftime', 75], ['halftime', 140]]) {
    const actual = ownTempo(groove({ bpm, pattern: patterns[name] }));
    assert.ok(actual, `${name} at ${bpm} BPM produced no pulse at all`);
    assert.equal(analysis.snapTempo(actual.bpm), bpm, `${name} at ${bpm} BPM detected as ${actual.bpm.toFixed(2)}`);
  }
  // A twelve second excerpt carries a quarter of the evidence and must still land on the beat.
  const short = ownTempo(groove({ bpm: 150, pattern: patterns.trap, seconds: 12 }));
  assert.equal(analysis.snapTempo(short.bpm), 150);
});

test('tempo is reported as the round number a producer would have written', () => {
  assert.equal(analysis.snapTempo(149.9), 150);
  assert.equal(analysis.snapTempo(148.32), 148);
  assert.equal(analysis.snapTempo(0), null);
  assert.equal(analysis.snapTempo(null), null);
  const actual = analysis.analyze(engine, music({ bpm: 149.7 }), rate);
  assert.equal(actual.bpm, 150);
  assert.ok(Math.abs(actual.preciseBpm - 149.7) < .5, `measured ${actual.preciseBpm}`);
});

test('all 24 major and minor fixture transpositions have the expected key', () => {
  for (const minor of [false, true]) for (let root = 0; root < 12; root++) {
    const actual = analysis.analyze(engine, music({ minor, root }), rate);
    assert.equal(actual.key, root + (minor ? 12 : 0), `${root} ${minor ? 'minor' : 'major'} detected as ${actual.key}`);
  }
});

test('silence, stationary noise and pure tones do not fabricate musical results', () => {
  let seed = 12345;
  const noise = Float32Array.from({ length: rate * 8 }, () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return (seed / 2 ** 32 - .5) * .4; });
  const tone = Float32Array.from({ length: rate * 8 }, (_, i) => .3 * Math.sin(2 * Math.PI * 440 * i / rate));
  for (const [name, pcm] of [['silence', new Float32Array(rate * 8)], ['noise', noise], ['tone', tone]]) {
    const actual = analysis.analyze(engine, pcm, rate);
    assert.equal(actual.key, -1, name);
    assert.equal(actual.bpm, null, name);
  }
});

test('a percussion-only fixture retains tempo without inventing a major/minor key', () => {
  const actual = analysis.analyze(engine, music({ chords: false }), rate);
  assert.equal(actual.key, -1);
  assert.ok(Math.abs(actual.bpm - 120) < .5);
});

test('input handles phase cancellation, leading silence and bounded excerpts', () => {
  const mono = music({ seconds: 8 });
  const stereo = prepareSamples(audioBuffer([mono, mono.map(x => -x)]));
  assert.equal(stereo.phaseFallback, true);
  assert.deepEqual(stereo.samples, mono);
  const padded = new Float32Array(rate * 210); padded.set(mono, rate * 20);
  const prepared = prepareSamples(audioBuffer([padded]));
  assert.ok(prepared.offsetSeconds >= 19 && prepared.offsetSeconds <= 20);
  assert.equal(prepared.samples.length, rate * 180);
});

test('invalid audio is rejected before native DSP; input limits and Camelot are explicit', () => {
  assert.throws(() => validateFile({ name: 'x.exe', size: 100 }));
  assert.throws(() => validateFile({ name: 'x.wav', size: 51 * 1024 * 1024 }));
  assert.throws(() => prepareSamples(audioBuffer([new Float32Array(rate * 2)])));
  assert.throws(() => analysis.analyze(engine, new Float32Array(rate * 6), 48000));
  const invalid = new Float32Array(rate * 6); invalid[100] = NaN;
  assert.throws(() => analysis.analyze(engine, invalid, rate));
  assert.equal(camelotLabel(0), '8B'); assert.equal(camelotLabel(21), '8A');
});

test('the legacy binding exception applies only to the exact worker path', () => {
  const config = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url)));
  const policies = path => config.headers.filter(rule => rule.source.includes('(') ? new RegExp('^' + rule.source + '$').test(path) : rule.source === path).flatMap(rule => rule.headers).filter(h => h.key === 'Content-Security-Policy');
  for (const path of ['/', '/admin', '/api/admin', '/proyecto/tune-interrogacion/', '/proyecto/tune-interrogacion/app.js', '/proyecto/tune-interrogacion/analyzerXworkerXjs', '/proyecto/tune-interrogacion/vendor/essentia-wasm.umd.js']) {
    const headers = policies(path); assert.equal(headers.length, 1); assert.ok(!headers[0].value.includes("'unsafe-eval'"));
  }
  const worker = policies('/proyecto/tune-interrogacion/analyzer.worker.js');
  assert.equal(worker.length, 1); assert.ok(worker[0].value.includes("'unsafe-eval'"));
});
