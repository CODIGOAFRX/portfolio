import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  Upload,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Repeat2,
  X,
  SlidersHorizontal,
  Check,
  Info,
} from "lucide-react";
import Orb, { defaults, type Settings } from "./Orb";
import { AudioEngine } from "./audio";
import { silence } from "./analysis";

const palette = [
  { color: "#ffffff", name: "Cromo" },
  { color: "#dba58e", name: "Cobre" },
  { color: "#8ba9d8", name: "Azul" },
  { color: "#b6a0db", name: "Violeta" },
  { color: "#99c4ad", name: "Jade" },
];
const presets: { name: string; settings: Settings }[] = [
  { name: "Cromo", settings: defaults },
  {
    name: "Nácar",
    settings: { ...defaults, material: "pearl", color: "#ffffff" },
  },
  {
    name: "Trama",
    settings: { ...defaults, material: "wire", color: "#526477" },
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
  onChange: (v: number) => void;
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
      />
    </label>
  );
}
export default function App() {
  const [engine] = useState(() => new AudioEngine());
  const [settings, setSettings] = useState<Settings>({ ...defaults });
  const [preset, setPreset] = useState("Cromo");
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
  const [fullscreen, setFullscreen] = useState(false);
  const [drag, setDrag] = useState(false);
  const [adjusting, setAdjusting] = useState(false);
  const input = useRef<HTMLInputElement>(null),
    root = useRef<HTMLDivElement>(null);
  const help = useRef<HTMLDialogElement>(null),
    settingsButton = useRef<HTMLButtonElement>(null),
    closeSettings = useRef<HTMLButtonElement>(null);
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
    const tick = setInterval(() => {
      setPosition(audio.currentTime || 0);
      setLevels({ ...engine.levels });
    }, 100);
    return () => {
      clearInterval(tick);
      audio.removeEventListener("loadedmetadata", ready);
      audio.removeEventListener("error", failed);
      audio.removeEventListener("playing", play);
      audio.removeEventListener("pause", pause);
      audio.removeEventListener("ended", pause);
      engine.dispose();
    };
  }, [engine]);
  useEffect(() => {
    const change = () => setFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", change);
    return () => document.removeEventListener("fullscreenchange", change);
  }, []);
  useEffect(() => {
    if (adjusting) closeSettings.current?.focus();
  }, [adjusting]);
  const closeAdjustments = () => {
    setAdjusting(false);
    settingsButton.current?.focus();
  };
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
        "El navegador no ha iniciado el audio. Vuelve a intentarlo o carga otro archivo.",
      );
    }
  };
  const toggleFullscreen = async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else if (root.current?.requestFullscreen) {
        await root.current.requestFullscreen();
      } else {
        setError(
          "Este navegador no admite pantalla completa. El lienzo ya ocupa toda la ventana.",
        );
      }
    } catch {
      setError(
        "No se ha podido activar la pantalla completa. Puedes seguir usando el lienzo en esta ventana.",
      );
    }
  };
  useEffect(() => {
    const keyboard = (e: KeyboardEvent) => {
      if (help.current?.open) return;
      if (e.key === "Escape" && adjusting) {
        closeAdjustments();
        return;
      }
      if (
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
  const demo = () =>
    load(`${import.meta.env.BASE_URL}demo.wav`, "Órbita nocturna · demo");
  const patch = (value: Partial<Settings>) => {
    setSettings((s) => ({ ...s, ...value }));
    setPreset("Personalizado");
  };
  const setGain = (value: number) => {
    setVolume(value);
    engine.setVolume(value);
  };
  return (
    <div
      ref={root}
      className={`app theme-${settings.background}`}
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
      <main className="canvas-stage" aria-label="Visualizador">
        <Orb engine={engine} settings={settings} />
      </main>
      <header className="identity">
        <h1>
          ORBIS<span>2</span>
        </h1>
        <p>El sonido toma forma.</p>
        <div className="file-actions">
          <button onClick={() => input.current?.click()}>
            <Upload size={14} />
            Subir archivo
          </button>
          <span>/</span>
          <button onClick={demo}>Probar demo</button>
        </div>
      </header>
      <a className="back-link" href="https://www.pedrogomez.dev/">
        <ArrowLeft size={14} />
        <span>Portfolio</span>
      </a>
      <div className="session-status">
        <i className={playing ? "active" : ""} />
        {loading
          ? "Preparando audio"
          : playing
            ? "Reproduciendo"
            : track
              ? "En pausa"
              : "Escucha. Observa."}
      </div>
      {adjusting && (
        <section id="settings" className="settings-sheet" aria-label="Ajustes">
          <div className="sheet-heading">
            <h2>Ajustes</h2>
            <span>Hazlo tuyo.</span>
            <button
              ref={closeSettings}
              className="icon-button"
              onClick={closeAdjustments}
              aria-label="Cerrar ajustes"
            >
              <X size={18} />
            </button>
          </div>
          <div className="settings-columns">
            <div className="settings-group">
              <h3>Apariencia</h3>
              <div className="presets">
                {presets.map((p) => (
                  <button
                    key={p.name}
                    aria-label={`Estilo ${p.name}`}
                    aria-pressed={preset === p.name}
                    onClick={() => {
                      setSettings({
                        ...p.settings,
                        background: settings.background,
                      });
                      setPreset(p.name);
                    }}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
              <label className="select-field">
                Material
                <select
                  aria-label="Material"
                  value={settings.material}
                  onChange={(e) =>
                    patch({ material: e.target.value as Settings["material"] })
                  }
                >
                  <option value="metal">Cromado</option>
                  <option value="pearl">Nácar</option>
                  <option value="wire">Malla</option>
                </select>
              </label>
              <div className="color-field">
                <span>Color</span>
                <div className="colors">
                  {palette.map((p) => (
                    <button
                      key={p.name}
                      title={p.name}
                      aria-label={`Color ${p.name}`}
                      aria-pressed={settings.color === p.color}
                      style={{ background: p.color }}
                      onClick={() => patch({ color: p.color })}
                    >
                      {settings.color === p.color && <Check size={12} />}
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
              <label className="select-field">
                Fondo
                <select
                  aria-label="Fondo"
                  value={settings.background}
                  onChange={(e) =>
                    patch({
                      background: e.target.value as Settings["background"],
                    })
                  }
                >
                  <option value="light">Blanco</option>
                  <option value="dark">Oscuro</option>
                </select>
              </label>
            </div>
            <div className="settings-group">
              <h3>Movimiento</h3>
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
                label="Fluidez"
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
            </div>
            <div className="settings-group">
              <h3>Sonido</h3>
              <div className="bands">
                {(
                  [
                    { key: "low", name: "Graves" },
                    { key: "mid", name: "Medios" },
                    { key: "high", name: "Agudos" },
                  ] as const
                ).map((b) => (
                  <div className="band" key={b.key}>
                    <span>{b.name}</span>
                    <div
                      className="meter"
                      role="meter"
                      aria-label={b.name}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={Math.round(levels[b.key] * 100)}
                    >
                      <i style={{ width: `${levels[b.key] * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="quiet-note">
                Tu audio se queda en tu dispositivo.
                <br />
                La forma cambia. El volumen se conserva.
              </p>
              <button
                className="reset-button"
                onClick={() => {
                  setSettings({ ...defaults });
                  setPreset("Cromo");
                }}
              >
                <RotateCcw size={13} />
                Restablecer ajustes
              </button>
            </div>
          </div>
        </section>
      )}
      <footer className="player">
        <div className="track-info">
          <strong title={track}>{track || "Sin archivo"}</strong>
          <span>
            {loading
              ? "Preparando…"
              : track
                ? "Audio local"
                : "Sube una canción o prueba la demo"}
          </span>
        </div>
        <div className="transport">
          <button
            className="play-button"
            disabled={!track || loading || mediaError}
            onClick={() => void togglePlay()}
            aria-label={playing ? "Pausar" : "Reproducir"}
          >
            {playing ? (
              <Pause size={17} fill="currentColor" />
            ) : (
              <Play size={17} fill="currentColor" />
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
            <RotateCcw size={16} />
          </button>
          <span className="time">{clock(position)}</span>
          <input
            className="seek"
            aria-label="Posición de reproducción"
            type="range"
            min="0"
            max={duration || 1}
            step=".1"
            value={Math.min(position, duration || 1)}
            disabled={!duration}
            onChange={(e) => {
              engine.element.currentTime = Number(e.target.value);
              setPosition(Number(e.target.value));
            }}
          />
          <span className="time">{clock(duration)}</span>
        </div>
        <div className="player-tools">
          <button
            className="icon-button loop"
            aria-label="Repetir pista"
            aria-pressed={loop}
            onClick={() => {
              engine.element.loop = !loop;
              setLoop(!loop);
            }}
          >
            <Repeat2 size={17} />
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
              {volume ? <Volume2 size={17} /> : <VolumeX size={17} />}
            </button>
            <input
              aria-label="Volumen"
              type="range"
              min="0"
              max="1"
              step=".01"
              value={volume}
              onChange={(e) => setGain(Number(e.target.value))}
            />
          </div>
          <span className="tool-divider" />
          <button
            ref={settingsButton}
            className="settings-button"
            aria-expanded={adjusting}
            aria-controls="settings"
            onClick={() => {
              if (adjusting) closeAdjustments();
              else setAdjusting(true);
            }}
          >
            <SlidersHorizontal size={16} />
            <span>Ajustes</span>
          </button>
          <button
            className="icon-button help-button"
            onClick={() => help.current?.showModal()}
            aria-label="Cómo se mueve"
          >
            <Info size={16} />
          </button>
          <button
            className="icon-button fullscreen"
            onClick={() => void toggleFullscreen()}
            aria-label={
              fullscreen ? "Salir de pantalla completa" : "Pantalla completa"
            }
          >
            {fullscreen ? <Minimize size={17} /> : <Maximize size={17} />}
          </button>
        </div>
      </footer>
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
          <button
            className="icon-button"
            aria-label="Cerrar aviso"
            onClick={() => setError("")}
          >
            <X size={17} />
          </button>
        </div>
      )}
      {drag && (
        <div className="drop-overlay">
          <Upload size={32} />
          <p>Suelta el audio.</p>
        </div>
      )}
      <dialog
        ref={help}
        className="help-modal"
        aria-labelledby="help-title"
        onClick={(e) => {
          if (e.target === help.current) help.current.close();
        }}
      >
        <div className="help-content">
          <button
            className="icon-button"
            onClick={() => help.current?.close()}
            aria-label="Cerrar explicación"
          >
            <X size={18} />
          </button>
          <h2 id="help-title">Sonido en movimiento.</h2>
          <p>
            Los graves ensanchan y aplastan toda la esfera. Los agudos la
            estiran en vertical y la estrechan. Los medios añaden una ondulación
            suave. En silencio vuelve a ser redonda. El volumen de la figura se
            conserva: lo que cambia es su proporción.
          </p>
          <p>
            En Ajustes puedes cambiar el material, el color, el fondo y la
            respuesta al sonido. Silenciar la escucha no detiene la
            visualización.
          </p>
          <p>
            Espacio: reproducir o pausar · F: pantalla completa · Esc: cerrar.
          </p>
          <small>
            La compatibilidad de los formatos depende del navegador. La demo es
            una composición sintetizada. Los medidores son orientativos.
            <br />
            <br />
            Basado en ORBIS, de Pedro Jesús Gómez Pérez y David Erik García
            Arenas.
          </small>
        </div>
      </dialog>
    </div>
  );
}
