import { ArrowDown, ArrowUp, ArrowUpRight } from "lucide-react";

export default function ProjectStory() {
  return (
    <>
      <a className="discover-project" href="#proyecto">
        Descubre el proyecto <ArrowDown size={15} />
      </a>
      <div className="hero-spacer" aria-hidden="true" />
      <main
        className="project-story"
        id="proyecto"
        aria-label="El proyecto ORBIS"
      >
        <section
          className="story-section story-intro"
          aria-labelledby="story-title"
        >
          <span className="story-eyebrow">01 / La idea</span>
          <h2 id="story-title">
            Otra forma de
            <br />
            <em>escuchar.</em>
          </h2>
          <p className="story-lead">
            ¿Y si una canción pudiera convertirse en un objeto que cambia
            delante de ti?
          </p>
          <p>
            ORBIS nace de esa pregunta: traducir el sonido en una forma
            orgánica. Una esfera que permite explorar la relación entre lo que
            escuchamos y lo que vemos, conectando música, programación y diseño
            tridimensional.
          </p>
          <div className="story-tags">
            <span>Audio reactivo</span>
            <span>Geometría 3D</span>
            <span>Diseño interactivo</span>
          </div>
        </section>
        <section className="story-section" aria-labelledby="origin-title">
          <span className="story-eyebrow">02 / El origen</span>
          <h2 id="origin-title">
            Ver una mezcla.
            <br />
            <em>Explorar su equilibrio.</em>
          </h2>
          <p>
            El proyecto original se planteó como una herramienta de
            visualización por frecuencias, con posibles aplicaciones en
            educación, performance y mezcla musical. La intención era hacer
            visible el comportamiento del audio a través de la geometría.
          </p>
          <p>
            Nació como proyecto final de Desarrollo de Aplicaciones
            Multiplataforma, en el curso 2024/2025. El repositorio documenta un
            prototipo alpha, su investigación técnica y sus conceptos visuales.
          </p>
          <a
            className="story-link"
            href="https://github.com/CODIGOAFRX/ORBIS#readme"
            target="_blank"
            rel="noreferrer"
          >
            Leer la documentación original <ArrowUpRight size={16} />
          </a>
        </section>
        <section className="story-section" aria-labelledby="system-title">
          <span className="story-eyebrow">03 / Dentro del sistema</span>
          <h2 id="system-title">
            Del audio
            <br />
            <em>a la geometría.</em>
          </h2>
          <ol className="story-pipeline">
            <li>
              <span>01</span>
              <div>
                <h3>Escuchar</h3>
                <p>
                  Python recibe el audio y obtiene su energía, frecuencia
                  dominante y distribución por bandas mediante análisis
                  espectral.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Traducir</h3>
                <p>
                  Esos parámetros se convierten en datos JSON. El enlace con
                  Blender calcula balances entre graves, medios y agudos y
                  actualiza los controles de la escena.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Dar forma</h3>
                <p>
                  Geometry Nodes transforma los datos en cambios de la malla. El
                  reto es conectar dos lenguajes: una señal que evoluciona en el
                  tiempo y un objeto que responde a ella.
                </p>
              </div>
            </li>
          </ol>
          <div className="story-tags">
            <span>Python</span>
            <span>FFT / RMS</span>
            <span>JSON</span>
            <span>Blender</span>
            <span>Geometry Nodes</span>
          </div>
          <a
            className="story-link"
            href="https://github.com/CODIGOAFRX/ORBIS/blob/main/orbis_live_blender/orbis_live_link.py"
            target="_blank"
            rel="noreferrer"
          >
            Explorar el enlace con Blender <ArrowUpRight size={16} />
          </a>
        </section>
        <section className="story-section" aria-labelledby="web-title">
          <span className="story-eyebrow">04 / ORBIS 2</span>
          <h2 id="web-title">
            La experiencia,
            <br />
            <em>ahora en tu navegador.</em>
          </h2>
          <p className="story-lead">
            La esfera que te acompaña es una reinterpretación web del proyecto.
          </p>
          <p>
            Esta versión explora su lado más expresivo: una superficie cromada
            que se deforma con tu música. Puedes cargar un archivo, probar la
            demo y ajustar el material o la respuesta mientras recorres la
            página.
          </p>
          <p>
            React organiza la interfaz, Web Audio analiza la señal y Three.js
            dibuja la malla en tiempo real. El audio se procesa en tu
            dispositivo. La deformación conserva el volumen de la figura y
            combina las bandas del sonido con ondas suaves.
          </p>
          <p>
            El resultado es una experiencia audiovisual para explorar y
            disfrutar. Sus medidores son orientativos: esta adaptación no evalúa
            la calidad de una mezcla.
          </p>
          <div className="story-tags">
            <span>React</span>
            <span>TypeScript</span>
            <span>Three.js</span>
            <span>Web Audio</span>
          </div>
        </section>
        <section className="story-section" aria-labelledby="process-title">
          <span className="story-eyebrow">05 / Diseño y desarrollo</span>
          <h2 id="process-title">
            Una idea que se
            <br />
            <em>construye probando.</em>
          </h2>
          <p>
            ORBIS reúne análisis de sonido, integración entre herramientas,
            programación gráfica y diseño de interacción. Pasar de un prototipo
            de escritorio a una experiencia web permite compartir esa
            exploración sin instalar el entorno original.
          </p>
          <p>
            La adaptación web se ha desarrollado con asistencia de inteligencia
            artificial para implementar, revisar y probar distintas soluciones.
            La dirección creativa, la selección del comportamiento visual y las
            decisiones de producto forman parte de un proceso de iteración
            guiado por Pedro Gómez.
          </p>
          <p>
            El objetivo de esta página es mostrar tanto el resultado como el
            recorrido: convertir una intuición visual en un sistema que puedes
            tocar, escuchar y poner a prueba.
          </p>
        </section>
        <footer className="story-section story-credits">
          <span className="story-eyebrow">06 / Créditos y código</span>
          <h2>
            Detrás de
            <br />
            <em>la esfera.</em>
          </h2>
          <dl>
            <div>
              <dt>Proyecto original</dt>
              <dd>
                Pedro Jesús Gómez Pérez
                <br />
                David Erik García Arenas
              </dd>
            </div>
            <div>
              <dt>Formación</dt>
              <dd>
                DAM · MEDAC Nevada
                <br />
                Curso 2024/2025
              </dd>
            </div>
            <div>
              <dt>Adaptación web y dirección</dt>
              <dd>Pedro Gómez</dd>
            </div>
          </dl>
          <div className="story-end-links">
            <a
              className="story-link"
              href="https://github.com/CODIGOAFRX/ORBIS"
              target="_blank"
              rel="noreferrer"
            >
              GitHub · ORBIS original <ArrowUpRight size={16} />
            </a>
            <a
              className="story-link"
              href="https://github.com/CODIGOAFRX/portfolio/tree/main/proyecto/orbis-2/source"
              target="_blank"
              rel="noreferrer"
            >
              Código de esta versión <ArrowUpRight size={16} />
            </a>
            <a className="story-link" href="#inicio">
              Volver al visualizador <ArrowUp size={16} />
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
