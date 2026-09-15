import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Upload,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Repeat2,
  ArrowLeft,
  X,
  SlidersHorizontal,
  AudioLines,
  Check,
  ChevronDown,
} from "lucide-react";
import Orb, { defaults, type Settings } from "./Orb";
import { AudioEngine } from "./audio";
import { silence } from "./analysis";

const palette = [
  { color: "#dba58e", name: "Cobre" },
  { color: "#c4d0df", name: "Plata" },
  { color: "#8ba9d8", name: "Azul" },
  { color: "#b6a0db", name: "Violeta" },
  { color: "#99c4ad", name: "Jade" },
];
const presets: { name: string; label: string; settings: Settings }[] = [
  { name: "Órbita", label: "Metal · orgánico", settings: defaults },
  {
    name: "Nácar",
    label: "Suave · luminoso",
    settings: {
      ...defaults,
      color: "#c4d0df",
      material: "pearl",
      smoothing: 0.8,
      movement: 0.2,
    },
  },
  {
    name: "Trama",
    label: "Malla · eléctrica",
    settings: {
      ...defaults,
      color: "#8ba9d8",
      material: "wire",
      sensitivity: 1.6,
      movement: 0.6,
    },
  },
];
const clock = (n: number) =>
  `${Math.floor(n / 60)}:${String(Math.floor(n % 60)).padStart(2, "0")}`;

function Slider({
  label,
  value,
  min = 0,
  max = 1,
  step = 0.01,
  text,
  onChange,
}: {
  label: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  text: string;
  onChange: (n: number) => void;
}) {
  return (
    <label className="slider-field">
      <span>
        {label}
        <output>{text}</output>
      </span>
      <input
        aria-label={label}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={
          {
            "--progress": `${((value - min) / (max - min)) * 100}%`,
          } as React.CSSProperties
        }
      />
    </label>
  );
}

export default function App() {
  const [engine] = useState(() => new AudioEngine());
  const [settings, setSettings] = useState<Settings>(defaults);
  const [preset, setPreset] = useState("Órbita");
  const [track, setTrack] = useState("");
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [volume, setVolume] = useState(0.65);
  const [loop, setLoop] = useState(false);
  const [levels, setLevels] = useState(silence());
  const [error, setError] = useState("");
  const [mediaError, setMediaError] = useState(false);
  const [immersive, setImmersive] = useState(false);
  const [drag, setDrag] = useState(false);
  const [help, setHelp] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const root = useRef<HTMLDivElement>(null);
  const helpClose = useRef<HTMLButtonElement>(null);
  const helpTrigger = useRef<HTMLButtonElement>(null);
  const previousVolume = useRef(0.65);

  useEffect(() => {
    const audio = engine.element;
    const ready = () => {
      setLoading(false);
      setDuration(Number.isFinite(audio.duration) ? audio.duration : 0);
    };
    const failed = () => {
      setLoading(false);
      setPlaying(false);
      setDuration(0);
      setMediaError(true);
      setError(
        "No se ha podido reproducir este archivo. Prueba con un MP3 o WAV válido.",
      );
    };
    const play = () => setPlaying(true),
      pause = () => setPlaying(false);
    audio.addEventListener("loadedmetadata", ready);
    audio.addEventListener("error", failed);
    audio.addEventListener("playing", play);
    audio.addEventListener("pause", pause);
    audio.addEventListener("ended", pause);
    const tick = window.setInterval(() => {
      setPosition(audio.currentTime || 0);
      setLevels({ ...engine.levels });
    }, 100);
    return () => {
      window.clearInterval(tick);
      audio.removeEventListener("loadedmetadata", ready);
      audio.removeEventListener("error", failed);
      audio.removeEventListener("playing", play);
      audio.removeEventListener("pause", pause);
      audio.removeEventListener("ended", pause);
      engine.dispose();
    };
  }, [engine]);

  useEffect(() => {
    const change = () => {
      if (!document.fullscreenElement) setImmersive(false);
    };
    document.addEventListener("fullscreenchange", change);
    return () => document.removeEventListener("fullscreenchange", change);
  }, []);
  useEffect(() => {
    if (help) helpClose.current?.focus();
  }, [help]);

  const togglePlay = async () => {
    if (!track || loading || mediaError) return;
    if (!engine.element.paused) {
      engine.pause();
      return;
    }
    try {
      await engine.play();
    } catch {
      setError(
        "El navegador no ha iniciado el audio. Comprueba el archivo o vuelve a cargarlo.",
      );
    }
  };
  const toggleFullscreen = async () => {
    if (immersive) {
      if (document.fullscreenElement) await document.exitFullscreen();
      setImmersive(false);
    } else {
      setImmersive(true);
      try {
        await root.current?.requestFullscreen?.();
      } catch {
        /* Immersive layout remains available when fullscreen is unsupported. */
      }
    }
  };
  useEffect(() => {
    const keyboard = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setHelp(false);
        if (!document.fullscreenElement) setImmersive(false);
      }
      if (
        help ||
        e.ctrlKey ||
        e.metaKey ||
        e.altKey ||
        (e.target as HTMLElement).closest("button,input,select,a,textarea")
      )
        return;
      if (e.code === "Space") {
        e.preventDefault();
        void togglePlay();
      }
      if (e.key.toLowerCase() === "f") {
        e.preventDefault();
        void toggleFullscreen();
      }
    };
    window.addEventListener("keydown", keyboard);
    return () => window.removeEventListener("keydown", keyboard);
  });

  function load(source: File | string, name: string) {
    setError("");
    setMediaError(false);
    setLoading(true);
    setPlaying(false);
    setPosition(0);
    setDuration(0);
    setTrack(name);
    engine.load(source);
  }
  function loadFile(file?: File) {
    if (!file) return;
    if (
      !file.type.startsWith("audio/") &&
      !/\.(mp3|wav|ogg|m4a|aac|flac|aif|aiff|opus|webm)$/i.test(file.name)
    ) {
      setError("Selecciona un archivo de audio: MP3, WAV, FLAC, OGG o M4A.");
      return;
    }
    load(file, file.name);
  }
  const patch = (value: Partial<Settings>) => {
    setSettings((s) => ({ ...s, ...value }));
    setPreset("Personalizado");
  };
  const setGain = (value: number) => {
    setVolume(value);
    engine.setVolume(value);
  };
  const closeHelp = () => {
    setHelp(false);
    helpTrigger.current?.focus();
  };
  const db =
    levels.rms > 0.0001 ? `${(20 * Math.log10(levels.rms)).toFixed(1)}` : "−∞";

  return (
    <div
      className={`app ${immersive ? "immersive" : ""}`}
      ref={root}
      onDragOver={(e) => {
        e.preventDefault();
        if (e.dataTransfer.types.includes("Files")) setDrag(true);
      }}
      onDragLeave={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setDrag(false);
      }}
      onDrop={(e) => {
        e.preventDefault();
        setDrag(false);
        loadFile(e.dataTransfer.files[0]);
      }}
    >
      <header className="topbar">
        <a className="portfolio" href="https://www.pedrogomez.dev/">
          <ArrowLeft size={15} /> Pedro Gómez
          <span className="breadcrumb"> / Herramientas</span>
        </a>
        <div className="top-right">
          <span className="edition">EXPERIMENTO AUDIOVISUAL / 002</span>
          <a
            href="https://github.com/CODIGOAFRX/ORBIS"
            target="_blank"
            rel="noreferrer"
            aria-label="Ver el proyecto ORBIS original en GitHub"
          >
            <ArrowUpRight size={19} />
          </a>
        </div>
      </header>
      <main>
        <div className="heading">
          <div className="brand">
            <h1>
              ORBIS<span>2</span>
            </h1>
            <div className="brand-line" />
            <p>
              El sonido
              <br />
              <em>toma forma.</em>
            </p>
          </div>
          <button
            ref={helpTrigger}
            className="text-button"
            onClick={() => setHelp(true)}
          >
            Cómo se mueve <ArrowUpRight size={16} />
          </button>
        </div>
        <div className="workspace">
          <section className="stage" aria-label="Visualizador">
            <div className="stage-top">
              <span className="eyebrow">01 / VISUALIZACIÓN EN VIVO</span>
              <span className={`status ${playing ? "active" : ""}`}>
                <i />
                {playing ? "REPRODUCIENDO" : track ? "EN PAUSA" : "EN ESPERA"}
              </span>
            </div>
            <div className="orb-area">
              <div className="axis horizontal" />
              <div className="axis vertical" />
              <div className="orbit-ring" />
              <Orb engine={engine} settings={settings} />
              <div className="coordinate coord-top">AGUDOS / TENSIÓN</div>
              <div className="coordinate coord-left">
                GRAVES
                <br />
                EXPANSIÓN
              </div>
              <div className="coordinate coord-bottom">SONIDO → GEOMETRÍA</div>
            </div>
            <div className="stage-bottom">
              <div className="stage-caption">
                <span className="small-cross">+</span>
                <div>
                  <b>{preset}</b>
                  <span>
                    {settings.material === "metal"
                      ? "Superficie metálica"
                      : settings.material === "pearl"
                        ? "Superficie nacarada"
                        : "Malla de frecuencias"}
                  </span>
                </div>
              </div>
              <button
                className="icon-button fullscreen"
                onClick={() => void toggleFullscreen()}
                aria-label={
                  immersive ? "Salir de pantalla completa" : "Pantalla completa"
                }
                title="Pantalla completa (F)"
              >
                {immersive ? <Minimize size={19} /> : <Maximize size={19} />}
              </button>
            </div>
            <div className="audio-player">
              <div className="track-row">
                <span className="track-symbol">
                  <AudioLines size={21} />
                </span>
                <div className="track-info">
                  <strong>
                    {track || "Tu próxima canción, en otra dimensión."}
                  </strong>
                  <span>
                    {loading ? (
                      "Preparando audio…"
                    ) : track ? (
                      "Audio local · listo para escuchar"
                    ) : (
                      <button
                        className="quick-demo"
                        onClick={() =>
                          load(
                            `${import.meta.env.BASE_URL}demo.wav`,
                            "Órbita nocturna · demo sintetizada",
                          )
                        }
                      >
                        Probar demo sin cargar un archivo <Play size={10} />
                      </button>
                    )}
                  </span>
                </div>
                <button
                  className="icon-button"
                  onClick={() => input.current?.click()}
                  aria-label="Cargar otro audio"
                  title="Cargar audio"
                >
                  <Upload size={18} />
                </button>
              </div>
              <div className="transport">
                <button
                  className="play-button"
                  disabled={!track || loading || mediaError}
                  onClick={() => void togglePlay()}
                  aria-label={playing ? "Pausar" : "Reproducir"}
                >
                  {playing ? (
                    <Pause size={21} fill="currentColor" />
                  ) : (
                    <Play size={21} fill="currentColor" />
                  )}
                </button>
                <button
                  className="icon-button restart"
                  disabled={!duration}
                  onClick={() => {
                    engine.element.currentTime = 0;
                    setPosition(0);
                  }}
                  aria-label="Volver al inicio"
                >
                  <RotateCcw size={17} />
                </button>
                <span className="time">{clock(position)}</span>
                <input
                  className="seek"
                  aria-label="Posición de reproducción"
                  type="range"
                  min="0"
                  max={duration || 1}
                  step="0.1"
                  value={Math.min(position, duration || 1)}
                  disabled={!duration}
                  onChange={(e) => {
                    engine.element.currentTime = Number(e.target.value);
                    setPosition(Number(e.target.value));
                  }}
                  style={
                    {
                      "--progress": `${duration ? (position / duration) * 100 : 0}%`,
                    } as React.CSSProperties
                  }
                />
                <span className="time">{clock(duration)}</span>
                <button
                  className={`icon-button loop ${loop ? "selected" : ""}`}
                  aria-label="Repetir pista"
                  aria-pressed={loop}
                  onClick={() => {
                    engine.element.loop = !loop;
                    setLoop(!loop);
                  }}
                >
                  <Repeat2 size={18} />
                </button>
                <div className="volume">
                  <button
                    className="icon-button"
                    aria-label={volume ? "Silenciar" : "Activar sonido"}
                    onClick={() => {
                      if (volume) {
                        previousVolume.current = volume;
                        setGain(0);
                      } else setGain(previousVolume.current || 0.65);
                    }}
                  >
                    {volume ? <Volume2 size={18} /> : <VolumeX size={18} />}
                  </button>
                  <input
                    aria-label="Volumen"
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={(e) => setGain(Number(e.target.value))}
                    style={
                      {
                        "--progress": `${volume * 100}%`,
                      } as React.CSSProperties
                    }
                  />
                </div>
              </div>
            </div>
          </section>
          <aside className="panel" aria-label="Controles del visualizador">
            <div className="panel-heading">
              <span className="eyebrow">02 / TU SESIÓN</span>
              <SlidersHorizontal size={16} />
            </div>
            <button
              className="upload-zone"
              onClick={() => input.current?.click()}
            >
              <Upload size={21} />
              <strong>Arrastra tu audio aquí</strong>
              <span>o selecciona un archivo</span>
              <small>MP3, WAV, FLAC, OGG, M4A*</small>
            </button>
            <button
              className="demo-button"
              onClick={() =>
                load(
                  `${import.meta.env.BASE_URL}demo.wav`,
                  "Órbita nocturna · demo sintetizada",
                )
              }
            >
              <Play size={14} /> Probar con una demo <span>0:32</span>
            </button>
            <div className="section-heading">
              <h2>Apariencia</h2>
              <span>01—03</span>
            </div>
            <div className="presets">
              {presets.map((p, i) => (
                <button
                  className={preset === p.name ? "chosen" : ""}
                  key={p.name}
                  onClick={() => {
                    setSettings({ ...p.settings });
                    setPreset(p.name);
                  }}
                  aria-pressed={preset === p.name}
                >
                  <span className={`preset-orb orb-${i}`} />
                  <span>{p.name}</span>
                </button>
              ))}
            </div>
            <label className="select-field">
              Material
              <div>
                <select
                  aria-label="Material"
                  value={settings.material}
                  onChange={(e) =>
                    patch({ material: e.target.value as Settings["material"] })
                  }
                >
                  <option value="metal">Metal líquido</option>
                  <option value="pearl">Nácar</option>
                  <option value="wire">Malla</option>
                </select>
                <ChevronDown size={14} />
              </div>
            </label>
            <div className="color-field">
              <span>Color</span>
              <div className="colors">
                {palette.map((p) => (
                  <button
                    key={p.name}
                    aria-label={p.name}
                    aria-pressed={settings.color === p.color}
                    title={p.name}
                    style={{ background: p.color }}
                    onClick={() => patch({ color: p.color })}
                  >
                    {settings.color === p.color && <Check size={14} />}
                  </button>
                ))}
                <input
                  type="color"
                  aria-label="Color personalizado"
                  value={settings.color}
                  onChange={(e) => patch({ color: e.target.value })}
                />
              </div>
            </div>
            <div className="section-heading motion-title">
              <h2>Respuesta al sonido</h2>
            </div>
            <Slider
              label="Sensibilidad"
              min={0.2}
              max={3}
              step={0.1}
              value={settings.sensitivity}
              text={`${settings.sensitivity.toFixed(1)}×`}
              onChange={(sensitivity) => patch({ sensitivity })}
            />
            <Slider
              label="Movimiento"
              value={settings.movement}
              text={`${Math.round(settings.movement * 100)}%`}
              onChange={(movement) => patch({ movement })}
            />
            <Slider
              label="Suavizado"
              value={settings.smoothing}
              text={`${Math.round(settings.smoothing * 100)}%`}
              onChange={(smoothing) => patch({ smoothing })}
            />
            <button
              className="reset-button"
              onClick={() => {
                setSettings({ ...defaults });
                setPreset("Órbita");
              }}
            >
              <RotateCcw size={13} /> Restablecer ajustes
            </button>
          </aside>
        </div>
        <section className="analysis" aria-label="Análisis espectral">
          <div className="analysis-title">
            <span className="eyebrow">03 / HUELLA SONORA</span>
            <span>Análisis en tiempo real</span>
          </div>
          {(
            [
              { key: "low", name: "Graves", range: "20 — 250 Hz" },
              { key: "mid", name: "Medios", range: "250 Hz — 2 kHz" },
              { key: "high", name: "Agudos", range: "2 — 20 kHz" },
            ] as const
          ).map((b) => (
            <div className={`band band-${b.key}`} key={b.key}>
              <div>
                <b>{b.name}</b>
                <span>{b.range}</span>
                <output aria-label={`Energía de ${b.name.toLowerCase()}`}>
                  {Math.round(levels[b.key] * 100)}%
                </output>
              </div>
              <div
                className="meter"
                role="meter"
                aria-label={b.name}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(levels[b.key] * 100)}
              >
                <i
                  style={{ width: `${Math.min(100, levels[b.key] * 100)}%` }}
                />
              </div>
            </div>
          ))}
          <div className="rms">
            <span>Nivel RMS</span>
            <strong>
              {db} <small>dBFS</small>
            </strong>
          </div>
        </section>
        <footer>
          <span>
            ORBIS 2 <span className="footer-dot">/</span> Un experimento de
            Pedro Gómez
          </span>
          <span>Tu audio se queda en tu dispositivo.</span>
          <a
            href="https://github.com/CODIGOAFRX/ORBIS"
            target="_blank"
            rel="noreferrer"
          >
            El origen de ORBIS <ArrowUpRight size={13} />
          </a>
        </footer>
      </main>
      <input
        ref={input}
        type="file"
        accept="audio/*,.mp3,.wav,.flac,.ogg,.m4a"
        hidden
        onChange={(e) => {
          loadFile(e.target.files?.[0]);
          e.target.value = "";
        }}
      />
      {error && (
        <div className="error-toast" role="alert">
          <span>{error}</span>
          <button aria-label="Cerrar aviso" onClick={() => setError("")}>
            <X size={18} />
          </button>
        </div>
      )}
      {drag && (
        <div className="drop-overlay">
          <Upload size={40} />
          <h2>Suelta el audio.</h2>
          <p>Vamos a darle forma.</p>
        </div>
      )}
      {help && (
        <div
          className="modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeHelp();
          }}
        >
          <section
            className="help-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="help-title"
            onKeyDown={(e) => {
              if (e.key === "Tab") {
                e.preventDefault();
                helpClose.current?.focus();
              }
              if (e.key === "Escape") closeHelp();
            }}
          >
            <button
              className="icon-button"
              ref={helpClose}
              onClick={closeHelp}
              aria-label="Cerrar explicación"
            >
              <X size={20} />
            </button>
            <span className="eyebrow">EL LENGUAJE DE ORBIS</span>
            <h2 id="help-title">Escuchar con los ojos.</h2>
            <p>La esfera responde al sonido que estás reproduciendo.</p>
            <dl>
              <dt>Graves · expansión</dt>
              <dd>Ensanchan la esfera y la comprimen verticalmente.</dd>
              <dt>Medios · relieve</dt>
              <dd>Crean ondulaciones sobre la superficie.</dd>
              <dt>Agudos · tensión</dt>
              <dd>Estrechan la esfera y la estiran hacia arriba.</dd>
            </dl>
            <p>
              La energía general hace que pulse. Sensibilidad amplifica la
              deformación; Suavizado hace las transiciones más lentas.
              Movimiento controla el giro y el desplazamiento de las ondas.
            </p>
            <p className="help-note">
              Espacio: reproducir o pausar · F: pantalla completa · Esc: salir.
              <br />* La compatibilidad de formatos depende del navegador. La
              demo es una composición sintetizada para este prototipo. Los
              medidores son orientativos, no una evaluación de la calidad de
              mezcla.
            </p>
            <p className="credits">
              Basado en ORBIS, de Pedro Jesús Gómez Pérez y David Erik García
              Arenas.
            </p>
          </section>
        </div>
      )}
    </div>
  );
}
