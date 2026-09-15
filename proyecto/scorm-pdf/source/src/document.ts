import { escape, plain } from './extract';
import type { Course, ExportOptions, Question, Block } from './model';

export function blockHtml(block: Block, images: boolean): string {
  if (block.kind === 'html') return block.html;
  if (block.kind === 'note') return `<blockquote>${escape(block.text)}</blockquote>`;
  return images ? `<figure><img src="${block.src}" alt="${escape(block.alt)}">${block.alt ? `<figcaption>${escape(block.alt)}</figcaption>` : ''}</figure>` : '';
}
export function questionHtml(q: Question, index: number): string {
  return `<h3>${index}. ${escape(plain(q.title))}</h3>${q.type === 'MULTIPLE_RESPONSE' ? '<p><em>Selecciona todas las respuestas correctas.</em></p>' : ''}${q.options.length ? `<ol type="a">${q.options.map(o=>`<li>${o}</li>`).join('')}</ol>` : '<p>Respuesta: __________________________________</p>'}${q.matches ? `<p><em>Relaciona los conceptos anteriores con estas definiciones:</em></p><ul>${q.matches.map(v=>`<li>${v}</li>`).join('')}</ul>` : ''}`;
}
export function documentSections(course: Course, options: ExportOptions): {title: string;html: string; kind: string}[] {
  const lessons = course.lessons.filter(l=>options.selected.has(l.id));
  const sections = lessons.filter(l=>l.blocks.length).map(l=>({title:l.title,html:l.blocks.map(b=>blockHtml(b,options.images)).join(''),kind:'lesson'}));
  const questions = lessons.flatMap(l=>l.questions.map(q=>({q,lesson:l.title})));
  if (options.questions && questions.length) {
    sections.push({title:'Anexo · Actividades',kind:'questions',html:questions.map(({q,lesson},i)=>`<p class="origin">${escape(lesson)}</p>${questionHtml(q,i+1)}`).join('')});
    if (options.solutions) sections.push({title:'Anexo · Soluciones',kind:'solutions',html:questions.map(({q},i)=>`<h3>${i+1}. ${escape(plain(q.title))}</h3>${q.solution.length ? `<ul>${q.solution.map(s=>`<li>${escape(s)}</li>`).join('')}</ul>` : '<p>Solución no recuperada. Consulta el curso original.</p>'}${q.feedback.map(f=>`<p>${f}</p>`).join('')}`).join('')});
  }
  if (course.warnings.length) sections.push({title:'Notas de conversión',kind:'notes',html:`<p>Documento reconstruido a partir de ${escape(course.filename)}. Las interacciones se presentan como contenido estático.</p><ul>${course.warnings.map(w=>`<li>${escape(w)}</li>`).join('')}</ul>`});
  return sections;
}
export function previewHtml(course: Course, options: ExportOptions): string {
  const sections = documentSections(course,options);
  return `${options.cover ? `<section class="paper-cover"><p class="eyebrow">TEMARIO DEL CURSO</p><h1>${escape(options.title || course.title)}</h1><div>${course.description}</div><p class="cover-meta">${options.selected.size} lecciones seleccionadas · ${escape(course.format)}</p></section>` : `<h1>${escape(options.title || course.title)}</h1>`}<section class="paper-index"><h2>Índice</h2><ol>${sections.map(s=>`<li>${escape(s.title)}</li>`).join('')}</ol></section>${sections.map(s=>`<section class="paper-section"><h2>${escape(s.title)}</h2>${s.html}</section>`).join('')}`;
}
