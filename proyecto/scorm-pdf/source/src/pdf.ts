import pdfMake from 'pdfmake/build/pdfmake';
import fonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake';
import type { Content, TDocumentDefinitions } from 'pdfmake/interfaces';
import { documentSections } from './document';
import { plain } from './extract';
import type { Course, ExportOptions } from './model';

pdfMake.vfs = fonts;
export async function generatePdf(course: Course, options: ExportOptions): Promise<Blob> {
  const title = options.title.trim() || course.title;
  const convert = (html: string): Content[] => {
    // html-to-pdfmake supports images directly, but not semantic figure wrappers.
    const safe = html.replace(/<\/?figure[^>]*>/g,'').replace(/<figcaption[^>]*>/g,'<p>').replace(/<\/figcaption>/g,'</p>');
    const content = htmlToPdfmake(safe, {defaultStyles:{
      h1:{fontSize:22,bold:true,margin:[0,12,0,8]}, h2:{fontSize:18,bold:true,margin:[0,14,0,8]}, h3:{fontSize:12,bold:true,margin:[0,14,0,6]},
      p:{margin:[0,0,0,8]},li:{margin:[0,0,0,4]},ul:{margin:[0,2,0,9]},ol:{margin:[0,2,0,9]},
      blockquote:{color:'#666666',italics:true,margin:[12,8,0,12]},a:{color:'#333333',decoration:'underline'},
    }});
    const result = Array.isArray(content) ? content : [content];
    const normalize = (node: any) => {
      if (!node || typeof node !== 'object') return;
      if (node.image) {delete node.width;delete node.height;node.fit=[475,290];node.margin=[0,8,0,12];}
      if (Array.isArray(node.style) && node.style.some((s:string)=>/^html-h[1-6]$/.test(s))) {node.headlineLevel=3;node.unbreakable=true;}
      if (node.table) {node.layout='lightHorizontalLines';node.table.dontBreakRows=false;}
      for (const value of Object.values(node)) if(Array.isArray(value)) value.forEach(normalize); else if(value && typeof value==='object') normalize(value);
    };
    result.forEach(normalize); return result;
  };
  const sections = documentSections(course,options);
  const content: Content[] = [];
  if (options.cover) content.push(
    {text:'TEMARIO DEL CURSO',fontSize:9,characterSpacing:2,color:'#666666',margin:[0,55,0,26]},
    {text:title,fontSize:30,bold:true,lineHeight:1.1,margin:[0,0,0,28]},
    ...convert(course.description),
    {text:`${options.selected.size} lecciones seleccionadas · ${course.format}`,fontSize:9,color:'#666666',margin:[0,28,0,0]},
  );
  content.push({toc:{title:{text:'Índice',fontSize:24,bold:true,margin:[0,0,0,22]},textStyle:{fontSize:11},numberStyle:{fontSize:11},textMargin:[0,0,0,10]},...(options.cover?{pageBreak:'before' as const}:{})});
  if (!options.cover) content.push({text:title,fontSize:12,margin:[0,0,0,18]});
  sections.forEach(s=>content.push({text:s.title,fontSize:23,bold:true,pageBreak:'before',margin:[0,0,0,18],tocItem:true},...convert(s.html)));
  const definition: TDocumentDefinitions = {
    info:{title,author:'',subject:'Temario recuperado de un paquete SCORM',creator:'SCORM → PDF'},
    pageSize:'A4',pageMargins:[58,56,58,55],defaultStyle:{font:'Roboto',fontSize:10.5,lineHeight:1.25,color:'#222222'},
    content,
    footer:(page,total)=>({columns:[{text:plain(title).slice(0,78),width:'*'},{text:`${page} / ${total}`,width:55,alignment:'right'}],fontSize:8,color:'#777777',margin:[58,20,58,0]}),
    pageBreakBefore:(node)=>!!(node.headlineLevel && (node.startPosition?.top ?? 0)>680),
  };
  return new Promise((resolve,reject)=>{
    try {
      // All fonts and images are local. The synchronous stream API lets us catch
      // layout errors instead of leaving the download button waiting forever.
      const stream=pdfMake.createPdf(definition).getStream();
      const chunks: Uint8Array<ArrayBuffer>[]=[];
      stream.on('data',(chunk:Uint8Array)=>chunks.push(new Uint8Array(chunk)));
      stream.on('error',reject);
      stream.on('end',()=>resolve(new Blob(chunks,{type:'application/pdf'})));
      stream.end();
    }catch(e){reject(e);}
  });
}
