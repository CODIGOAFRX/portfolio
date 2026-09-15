import JSZip from 'jszip';
import DOMPurify from 'dompurify';
import type { Block, Course, Lesson, Question } from './model';

// External authoring-tool JSON is heterogeneous; only explicit content fields are read.
type Data = Record<string, any>;
const MAX_FILE = 250 * 1024 * 1024;
const MAX_TOTAL = 600 * 1024 * 1024;
export const escape = (s: unknown) => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
export function clean(value: unknown): string {
  return DOMPurify.sanitize(typeof value === 'string' ? value : '', {
    ALLOWED_TAGS: ['p','div','span','strong','b','em','i','u','s','sub','sup','br','h1','h2','h3','h4','h5','h6','ul','ol','li','blockquote','table','thead','tbody','tr','th','td','a','code','pre'],
    ALLOWED_ATTR: ['href','colspan','rowspan'],
  }).replace(/href="(?!https?:|mailto:)[^"]*"/gi, '');
}
export function plain(value: unknown): string {
  const doc = new DOMParser().parseFromString(clean(value), 'text/html');
  return doc.body.textContent?.trim() ?? '';
}
function html(value: unknown): Block[] { const h = clean(value); return plain(h) ? [{kind:'html',html:h}] : []; }
function heading(value: unknown): Block[] { return plain(value) ? html(`<h3>${escape(plain(value))}</h3>`) : []; }

export function decodeRise(source: string): Data {
  // Parse the JSONP payload as data. Never execute JavaScript from a package.
  const match = source.match(/__jsonp\(\s*"[^"]+"\s*,\s*"([A-Za-z0-9+/=\r\n]+)"\s*\)/);
  if (!match) throw new Error('Esta versión de Rise no tiene un formato de datos compatible.');
  return JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(match[1]), c => c.charCodeAt(0))));
}

function question(q: Data): Question {
  const answers: Data[] = Array.isArray(q.answers) ? q.answers : [];
  const correctIds = new Set([...(Array.isArray(q.corrects) ? q.corrects : []), q.correct]);
  const matching = q.type === 'MATCHING';
  const fill = q.type === 'FILL_IN_THE_BLANK';
  const right = answers.filter(a => a.correct === true || correctIds.has(a.id) || correctIds.has(a.title));
  return {
    title: clean(q.title), type: q.type,
    options: fill ? [] : answers.map(a => clean(a.title)),
    // Rotate definitions so matching exercises do not reveal the solution in row order.
    matches: matching ? answers.map((_, i) => clean(answers[(i + 1) % answers.length].matchTitle)) : undefined,
    solution: matching ? answers.map(a => `${plain(a.title)} → ${plain(a.matchTitle)}`)
      : (fill ? answers : right).map(a => plain(a.title)),
    feedback: [...new Set([
      clean(q.feedback),
      plain(q.feedbackCorrect) ? `<strong>Respuesta correcta:</strong> ${clean(q.feedbackCorrect)}` : '',
      plain(q.feedbackIncorrect) ? `<strong>Respuesta incorrecta:</strong> ${clean(q.feedbackIncorrect)}` : '',
      ...answers.filter(a=>plain(a.feedback)).map(a=>`<strong>${escape(plain(a.title))}:</strong> ${clean(a.feedback)}`),
    ].filter(Boolean))],
  };
}

function relative(path: string, base: string): string | null {
  if (/^(?:[a-z]+:|\/\/)/i.test(path)) return null;
  try { path = decodeURIComponent(path.split(/[?#]/)[0]); } catch { return null; }
  const out: string[] = path.startsWith('/') ? [] : base.split('/').filter(Boolean);
  for (const part of path.replaceAll('\\','/').split('/')) {
    if (part === '..') { if (!out.length) return null; out.pop(); }
    else if (part && part !== '.') out.push(part);
  }
  return out.join('/');
}

export async function extract(file: File, progress: (message: string) => void): Promise<Course> {
  if (file.size > MAX_FILE) throw new Error('El ZIP supera el límite de 250 MB. Exporta el curso por bloques.');
  progress('Abriendo el paquete…');
  let zip: JSZip;
  try { zip = await JSZip.loadAsync(await file.arrayBuffer()); }
  catch { throw new Error('No se ha podido abrir el ZIP. Comprueba que no está dañado ni protegido con contraseña.'); }
  const entries = Object.values(zip.files).filter(e => !e.dir);
  if (entries.length > 15000) throw new Error('El paquete contiene demasiados archivos (máximo 15.000).');
  let size = 0;
  for (const entry of entries) {
    const n = (entry as unknown as {_data?: {uncompressedSize: number}})._data?.uncompressedSize ?? 0;
    if (n > MAX_FILE) throw new Error('Hay un archivo descomprimido demasiado grande en el paquete.');
    size += n;
  }
  if (size > MAX_TOTAL) throw new Error('El contenido descomprimido supera los 600 MB permitidos.');
  const manifestFile = entries.find(e => /(^|\/)imsmanifest\.xml$/i.test(e.name));
  if (!manifestFile) throw new Error('No encontramos imsmanifest.xml. Selecciona el ZIP publicado como SCORM, sin descomprimir.');
  const manifest = new DOMParser().parseFromString(await manifestFile.async('string'), 'text/xml');
  if (manifest.querySelector('parsererror')) throw new Error('El manifiesto SCORM contiene XML inválido.');
  const root = manifestFile.name.slice(0, -'imsmanifest.xml'.length);
  const warnings: string[] = [];
  const warn = (s: string) => { if (!warnings.includes(s)) warnings.push(s); };
  const cache = new Map<string, Promise<Block[]>>();
  const image = async (key: unknown, base: string, alt = ''): Promise<Block[]> => {
    if (typeof key !== 'string' || !key) return [];
    const name = relative(key, base);
    if (!name || !zip.file(name)) { warn(`Imagen no recuperada: ${key}`); return [{kind:'note',text:`Imagen no disponible: ${alt || key}`}]; }
    if (!/\.(png|jpe?g|webp|gif|bmp)$/i.test(name)) { warn(`Formato de imagen pendiente: ${name}`); return []; }
    if (!cache.has(name)) cache.set(name, (async () => {
      const blob = new Blob([await zip.file(name)!.async('arraybuffer')]);
      const url = URL.createObjectURL(blob);
      try {
        const img = new Image(); img.src = url; await img.decode();
        if (img.naturalWidth * img.naturalHeight > 50_000_000) throw new Error('Imagen demasiado grande');
        const scale = Math.min(1, 1500 / Math.max(img.naturalWidth, img.naturalHeight));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(img.naturalWidth * scale)); canvas.height = Math.max(1, Math.round(img.naturalHeight * scale));
        const ctx = canvas.getContext('2d')!; ctx.fillStyle = '#fff'; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.drawImage(img,0,0,canvas.width,canvas.height);
        return [{kind:'image',src:canvas.toDataURL('image/jpeg',0.88),alt}] as Block[];
      } catch { warn(`No se pudo leer la imagen: ${name}`); return [{kind:'note',text:`Imagen no recuperada: ${alt || key}`}] as Block[]; }
      finally { URL.revokeObjectURL(url); }
    })());
    return (await cache.get(name)!).map(b => b.kind === 'image' ? {...b,alt} : b);
  };
  const media = async (m: Data | undefined, base: string): Promise<Block[]> => {
    if (!m) return [];
    const blocks: Block[] = [];
    if (m.image) {
      const candidates = m.image.useCrushedKey ? [m.image.crushedKey,m.image.key] : [m.image.key,m.image.crushedKey];
      const key = candidates.find(k=>typeof k==='string' && zip.file(relative(k,base) || '')) || candidates.find(Boolean);
      blocks.push(...await image(key, base, plain(m.image.alt || m.image.altText)));
    }
    for (const type of ['audio','video']) if (m[type]) {
      const transcript = m[type].transcript;
      blocks.push({kind:'note',text:`${type === 'audio' ? 'Audio' : 'Vídeo'}${transcript ? ' · Transcripción incluida a continuación.' : ' · Recurso disponible en el curso original.'}`});
      blocks.push(...html(transcript));
      warn(`${type === 'audio' ? 'Audio' : 'Vídeo'}: ${transcript ? 'se ha incluido la transcripción; el PDF no reproduce el recurso.' : 'sin transcripción recuperable; consulta el curso original.'}`);
    }
    return blocks;
  };
  const riseFile = entries.find(e => e.name.startsWith(root) && /(^|\/)runtime-data\.js$/i.test(e.name));
  const course: Course = { title: plain(manifest.querySelector('organization > title')?.textContent) || file.name.replace(/\.zip$/i,''), description:'', format:'SCORM HTML', lessons:[], warnings, filename:file.name, sourceBlocks:0 };
  if (riseFile) {
    progress('Leyendo las lecciones de Rise…');
    const data = decodeRise(await riseFile.async('string'));
    const c = data.course;
    if (!c || !Array.isArray(c.lessons)) throw new Error('Los datos de Rise no contienen lecciones reconocibles.');
    course.title = plain(c.title) || course.title; course.description = clean(c.description); course.format = 'Articulate Rise';
    const assetBase = riseFile.name.slice(0, riseFile.name.lastIndexOf('/') + 1) + 'assets/';
    for (const [li, l] of c.lessons.entries()) {
      if (l.deleted) continue;
      progress(`Recuperando lección ${li + 1} de ${c.lessons.length}…`);
      const lesson: Lesson = {id:String(l.id || li),title:plain(l.title) || `Lección ${li+1}`,blocks:html(l.description),questions:[],sourceBlocks:0};
      for (const b of (l.items || []) as Data[]) {
        lesson.sourceBlocks++;
        if (b.type === 'divider') continue;
        if (b.type === 'knowledgeCheck') { lesson.questions.push(...(b.items || []).map(question)); continue; }
        if (Array.isArray(b.answers)) { lesson.questions.push(question(b)); continue; }
        const known = ['text','list','image','interactive','multimedia'].includes(b.type);
        const interactive = ['accordion','tabs','flashcard','process','timeline','labeledgraphic','buttons'].includes(b.variant);
        if (!known || b.type === 'interactive' && !interactive) warn(`${lesson.title}: bloque «${b.variant || b.type}» recuperado parcialmente; revisa el curso original.`);
        let items: Data[] = Array.isArray(b.items) ? b.items : [b];
        if (b.variant === 'process') items = [...items.filter(i=>i.type==='intro'),...items.filter(i=>i.type!=='intro' && i.type!=='summary'),...items.filter(i=>i.type==='summary')];
        if (b.type === 'list') {
          const tag = b.variant === 'numbered' ? 'ol' : 'ul';
          lesson.blocks.push(...html(`<${tag}>${items.map(i=>`<li>${clean(i.paragraph || i.title)}</li>`).join('')}</${tag}>`)); continue;
        }
        for (const i of items) {
          if (i.isHidden) continue;
          lesson.blocks.push(...heading(i.heading || i.title));
          if (i.front) lesson.blocks.push(...heading(i.front.description), ...await media(i.front.media, assetBase));
          lesson.blocks.push(...html(i.paragraph),...html(i.description));
          if (i.back) lesson.blocks.push(...html(i.back.description), ...await media(i.back.media, assetBase));
          lesson.blocks.push(...await media(i.media, assetBase));
          // Audio captions can duplicate the transcript verbatim.
          if (plain(i.caption) !== plain(i.media?.audio?.transcript) || !plain(i.caption)) lesson.blocks.push(...html(i.caption));
          if (i.media?.embed || i.url || b.variant === 'embed' || b.variant === 'attachment') {
            warn(`${lesson.title}: recurso externo o adjunto; consulta el curso original.`);
            lesson.blocks.push({kind:'note',text:'Recurso externo o adjunto disponible en el curso original.'});
          }
        }
      }
      course.lessons.push(lesson);
    }
  } else {
    progress('Recuperando páginas HTML…');
    warn('Extracción HTML: las páginas construidas con JavaScript y las actividades pueden requerir un adaptador específico. Revisa el resultado.');
    const resources = new Map([...manifest.getElementsByTagNameNS('*','resource')].map(r=>[r.getAttribute('identifier'),r.getAttribute('href')]));
    const pages = new Map<string,string>();
    for (const item of manifest.getElementsByTagNameNS('*','item')) {
      const href = resources.get(item.getAttribute('identifierref'));
      const path = href ? relative(href,root) : null;
      if (path) pages.set(path,item.querySelector('title')?.textContent || 'Lección');
    }
    if (!pages.size) for (const [id,href] of resources) { const path = href ? relative(href,root) : null; if(path) pages.set(path,id || 'Lección'); }
    for (const [path,title] of pages) {
      if (!/\.html?$/i.test(path) || !zip.file(path)) {warn(`Recurso no recuperado: ${path}`);continue;}
      const doc = new DOMParser().parseFromString(await zip.file(path)!.async('string'),'text/html');
      doc.querySelectorAll('script,style,nav,button,form,iframe,object,embed,noscript').forEach(n=>n.remove());
      const lesson: Lesson = {id:path,title:plain(title),blocks:[],questions:[],sourceBlocks:1};
      const main = doc.querySelector('main,article,[role=main]') || doc.body;
      // Walk DOM in source order; images are resolved locally, never loaded from remote URLs.
      const walk = async (node: Node) => {
        if (node.nodeType === Node.TEXT_NODE) { if(node.textContent?.trim()) lesson.blocks.push(...html(escape(node.textContent))); return; }
        if (!(node instanceof Element)) return;
        if (node.tagName === 'IMG') { lesson.blocks.push(...await image(node.getAttribute('src'),path.slice(0,path.lastIndexOf('/')+1),node.getAttribute('alt') || '')); return; }
        if (!node.querySelector('img')) { lesson.blocks.push(...html(node.outerHTML)); return; }
        for (const child of node.childNodes) await walk(child);
      };
      for (const node of main.childNodes) await walk(node);
      if (!lesson.blocks.length) warn(`${title}: página sin contenido estático recuperable.`);
      course.lessons.push(lesson);
    }
  }
  course.sourceBlocks = course.lessons.reduce((n,l)=>n+l.sourceBlocks,0);
  if (!course.lessons.some(l=>l.blocks.length || l.questions.length)) throw new Error('El paquete es válido, pero no hemos podido extraer su contenido. Esta herramienta admite Rise con runtime-data.js y páginas HTML estáticas; este curso necesita otro adaptador.');
  return course;
}
