import { analyze, silence, type Bands } from "./analysis";

export class AudioEngine {
  readonly element = new Audio();
  private context?: AudioContext;
  private analyser?: AnalyserNode;
  private gain?: GainNode;
  private frequency = new Float32Array(2048);
  private signal = new Float32Array(4096);
  private objectUrl?: string;
  private volume = 0.65;
  private revision = 0;
  levels: Bands = silence();
  constructor() {
    this.element.preload = "metadata";
  }
  async initialize() {
    if (!this.context) {
      this.context = new AudioContext();
      this.analyser = this.context.createAnalyser();
      this.analyser.fftSize = 4096;
      this.analyser.smoothingTimeConstant = 0;
      this.gain = this.context.createGain();
      this.gain.gain.value = this.volume;
      this.context
        .createMediaElementSource(this.element)
        .connect(this.analyser);
      this.analyser.connect(this.gain).connect(this.context.destination);
    }
    if (this.context.state !== "running") await this.context.resume();
  }
  load(source: File | string) {
    this.revision++;
    this.element.pause();
    if (this.objectUrl) URL.revokeObjectURL(this.objectUrl);
    this.objectUrl =
      typeof source === "string" ? undefined : URL.createObjectURL(source);
    this.element.src = typeof source === "string" ? source : this.objectUrl!;
    this.levels = silence();
    this.element.load();
  }
  async play() {
    const revision = this.revision;
    await this.initialize();
    if (revision !== this.revision) return;
    try {
      await this.element.play();
    } catch (error) {
      if (
        revision === this.revision &&
        !(error instanceof DOMException && error.name === "AbortError")
      )
        throw error;
    }
  }
  pause() {
    this.element.pause();
  }
  setVolume(value: number) {
    this.volume = value;
    if (this.gain && this.context)
      this.gain.gain.setTargetAtTime(value, this.context.currentTime, 0.025);
  }
  sample(dt: number, smoothing: number): Bands {
    let target = silence();
    if (
      this.analyser &&
      this.context &&
      !this.element.paused &&
      !this.element.ended
    ) {
      this.analyser.getFloatFrequencyData(this.frequency);
      this.analyser.getFloatTimeDomainData(this.signal);
      target = analyze(
        this.frequency,
        this.signal,
        this.context.sampleRate,
        this.analyser.fftSize,
      );
    }
    for (const key of ["low", "mid", "high", "rms"] as const) {
      const speed =
        target[key] > this.levels[key]
          ? 0.025 + smoothing * 0.12
          : 0.06 + smoothing * 0.35;
      this.levels[key] +=
        (target[key] - this.levels[key]) * (1 - Math.exp(-dt / speed));
    }
    this.levels.dominant = target.dominant;
    return this.levels;
  }
  dispose() {
    this.element.pause();
    this.element.removeAttribute("src");
    this.element.load();
    if (this.objectUrl) URL.revokeObjectURL(this.objectUrl);
    void this.context?.close();
  }
}
