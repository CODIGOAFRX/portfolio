import './style.css';
import { extract, escape } from './extract';
import { previewHtml } from './document';
import type { Course, ExportOptions } from './model';

const app = document.querySelector<HTMLDivElement>('#app')!;
let course: Course | null = null;
let busy = false;
let options: ExportOptions = {title:'',images:true,questions:true,solutions:false,cover:true,selected:new Set()};
app.innerHTML = `
<header><a class="brand" href="https://www.pedrogomez.dev/">Pedro Gómez.</a><span class="header-label">HERRAMIENTAS / 01</span><a class="portfolio-link" href="https://www.pedrogomez.dev/">Portfolio ↗</a></header>
<main><section class="intro"><div><p class="eyebrow">DEL CURSO AL PAPEL</p><h1>SCORM <span class="arrow">→</span> PDF<span class="period">.</span></h1><p class="lede">Tu curso, listo para leer.<br>Convierte un SCORM en un temario claro y ordenado.</p></div><p class="privacy"><span class="privacy-dot"></span> Solo en tu navegador.<br><span>Tus archivos se quedan contigo.</span></p></section>
<section id="upload-section"><label class="dropzone" id="dropzone" for="file"><span class="file-icon" aria-hidden="true">↓</span><strong>Arrastra tu archivo SCORM</strong><span>o <span class="underlined">selecciona un ZIP</span> de tu equipo</span><small>Rise y SCORM con contenido HTML · Hasta 250 MB</small><input type="file" id="file" accept=".zip,application/zip"></label>
<div class="steps"><p><span>01</span> Sube tu curso</p><p><span>02</span> Revisa el contenido</p><p><span>03</span> Descarga tu PDF</p></div></section>
<div id="status" role="status" aria-live="polite"></div>
<section id="workspace" hidden><div class="course-bar"><div><p class="eyebrow" id="format"></p><h2 id="course-name"></h2><p id="stats"></p></div><button class="text-button" id="reset">Cambiar archivo ↗</button></div>
<div class="editor"><aside><div class="aside-section"><div class="section-label"><h3>Contenido</h3><button id="select-all" class="text-button">Ninguna</button></div><div id="lessons"></div></div>
<div class="aside-section"><h3>Tu documento</h3><label class="field-label" for="pdf-title">Título del PDF</label><textarea id="pdf-title" rows="3" maxlength="240"></textarea><label class="option"><input type="checkbox" id="cover" checked> Portada e introducción</label><label class="option"><input type="checkbox" id="images" checked> Incluir imágenes</label><label class="option"><input type="checkbox" id="questions" checked> Actividades en un anexo</label><label class="option sub-option"><input type="checkbox" id="solutions"> Añadir soluciones</label></div>
<button class="primary" id="download">Descargar PDF <span>↓</span></button><p class="download-note">A4 · Texto seleccionable · Páginas numeradas</p><div id="warnings"></div></aside>
<div class="preview-column"><div class="preview-bar"><span>VISTA PREVIA DEL CONTENIDO</span><span>La paginación se aplica al exportar</span></div><article class="paper" id="preview" aria-label="Vista previa del temario"></article></div></div></section>
<section class="about"><h2>El contenido, sin los clics.</h2><p>Las pestañas, tarjetas y desplegables se convierten en apartados de lectura. Revisa las notas de conversión para identificar recursos que necesitan el curso original.</p></section></main>
<footer><span>SCORM → PDF</span><span>Una herramienta de Pedro Gómez.</span><span>Hecho para simplificar.</span></footer>`;
const $ = <T extends HTMLElement = HTMLElement>(id:string) => document.getElementById(id) as T;
const status = (text:string,error=false) => { $('status').textContent=text; $('status').className=text ? `status ${error?'error':''}` : ''; };
function updatePreview() {
  if(!course)return;
  $('preview').innerHTML=options.selected.size ? previewHtml(course,options) : '<div class="empty"><h2>Elige qué quieres incluir.</h2><p>Selecciona al menos una lección para preparar el PDF.</p></div>';
  $('download').toggleAttribute('disabled',!options.selected.size || busy);
  $('select-all').textContent=options.selected.size===course.lessons.length?'Ninguna':'Todas';
  $<HTMLInputElement>('solutions').disabled=!options.questions;
}
function showCourse() {
  if(!course)return;
  $('upload-section').hidden=true; $('workspace').hidden=false;
  $('course-name').textContent=course.title; $('format').textContent=`${course.format} / ARCHIVO RECUPERADO`;
  const images=course.lessons.flatMap(l=>l.blocks).filter(b=>b.kind==='image').length;
  const questions=course.lessons.reduce((n,l)=>n+l.questions.length,0);
  $('stats').textContent=`${course.lessons.length} lecciones · ${images} imágenes · ${questions} preguntas`;
  $('lessons').innerHTML=course.lessons.map((l,i)=>`<label class="lesson"><input type="checkbox" value="${escape(l.id)}" checked><span class="lesson-number">${String(i+1).padStart(2,'0')}</span><span>${escape(l.title)}<small>${l.questions.length ? `${l.questions.length} preguntas` : `${l.blocks.length} bloques de lectura`}</small></span></label>`).join('');
  $<HTMLTextAreaElement>('pdf-title').value=course.title;
  $('warnings').innerHTML=course.warnings.length ? `<details><summary>${course.warnings.length} ${course.warnings.length===1?'nota':'notas'} de conversión</summary><ul>${course.warnings.map(w=>`<li>${escape(w)}</li>`).join('')}</ul></details>` : '<p class="all-good">Contenido recuperado. Revisa la vista previa antes de exportar.</p>';
  updatePreview();
}
async function load(file?:File) {
  if(!file || busy)return;
  busy=true; $('dropzone').classList.add('loading'); $('dropzone').setAttribute('aria-busy','true');
  try {course=await extract(file,m=>status(m));options={title:course.title,images:true,questions:true,solutions:false,cover:true,selected:new Set(course.lessons.map(l=>l.id))};
    for(const key of ['images','questions','solutions','cover'] as const) $<HTMLInputElement>(key).checked=options[key];
    status('');showCourse();
  } catch(e) {status(e instanceof Error?e.message:'No se ha podido leer el archivo.',true);}
  finally {busy=false;$('dropzone').classList.remove('loading');$('dropzone').removeAttribute('aria-busy');$<HTMLInputElement>('file').value='';updatePreview();}
}
$('file').addEventListener('change',e=>load((e.target as HTMLInputElement).files?.[0]));
for (const name of ['dragenter','dragover']) $('dropzone').addEventListener(name,e=>{e.preventDefault();$('dropzone').classList.add('dragging');});
for (const name of ['dragleave','drop']) $('dropzone').addEventListener(name,e=>{e.preventDefault();$('dropzone').classList.remove('dragging');});
$('dropzone').addEventListener('drop',e=>load((e as DragEvent).dataTransfer?.files[0]));
$('reset').addEventListener('click',()=>{if(busy)return;course=null;$('workspace').hidden=true;$('upload-section').hidden=false;$('preview').innerHTML='';status('');$<HTMLInputElement>('file').focus();});
$('lessons').addEventListener('change',e=>{const input=e.target as HTMLInputElement;if(input.checked)options.selected.add(input.value);else options.selected.delete(input.value);updatePreview();});
$('select-all').addEventListener('click',()=>{if(!course)return;const all=options.selected.size!==course.lessons.length;options.selected=new Set(all?course.lessons.map(l=>l.id):[]);$('lessons').querySelectorAll('input').forEach(i=>i.checked=all);updatePreview();});
let titleTimer: ReturnType<typeof setTimeout>;
$('pdf-title').addEventListener('input',()=>{options.title=$<HTMLTextAreaElement>('pdf-title').value;clearTimeout(titleTimer);titleTimer=setTimeout(updatePreview,200);});
for(const key of ['images','questions','solutions','cover'] as const) $(key).addEventListener('change',()=>{options[key]=$<HTMLInputElement>(key).checked;updatePreview();});
$('download').addEventListener('click',async()=>{
  if(!course || busy || !options.selected.size)return;
  busy=true;const snapshot={...options,selected:new Set(options.selected)};const current=course;
  $('download').textContent='Preparando PDF…';updatePreview();$('reset').setAttribute('disabled','');status('Preparando el documento. Los cursos largos pueden tardar unos segundos…');
  try {
    const {generatePdf}=await import('./pdf');const blob=await generatePdf(current,snapshot);
    const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=(snapshot.title.trim()||current.title).replace(/[<>:"/\\|?*\x00-\x1F]/g,'-').slice(0,160)+'.pdf';a.click();setTimeout(()=>URL.revokeObjectURL(url),60000);status('PDF preparado. La descarga está lista.');
  }catch(e){console.error(e);status('No se pudo generar el PDF. Prueba a excluir imágenes o reducir las lecciones seleccionadas.',true);}
  finally{busy=false;$('download').innerHTML='Descargar PDF <span>↓</span>';$('reset').removeAttribute('disabled');updatePreview();}
});
