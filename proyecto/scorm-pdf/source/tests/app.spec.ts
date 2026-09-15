import { test, expect } from '@playwright/test';
import JSZip from 'jszip';
import fs from 'node:fs/promises';

const realZip = process.env.SCORM_FIXTURE;
async function fixture(files:Record<string,string>) {
  const zip=new JSZip();for(const [name,value] of Object.entries(files))zip.file(name,value);
  return {name:'test.zip',mimeType:'application/zip',buffer:await zip.generateAsync({type:'nodebuffer'})};
}
const manifest='<manifest><organizations><organization><title>Curso de prueba</title><item identifierref="r"><title>Lección uno</title></item></organization></organizations><resources><resource identifier="r" href="lesson.html"/></resources></manifest>';

test('carga, errores, HTML seguro, selección y controles',async({page})=>{
  await page.goto('/');await expect(page.getByText('Arrastra tu archivo SCORM')).toBeVisible();
  await page.screenshot({path:'tmp/landing.png',fullPage:true});
  await page.locator('#file').setInputFiles({name:'roto.zip',mimeType:'application/zip',buffer:Buffer.from('broken')});
  await expect(page.getByRole('status')).toContainText('No se ha podido abrir');
  await page.locator('#file').setInputFiles(await fixture({'hello.txt':'no scorm'}));
  await expect(page.getByRole('status')).toContainText('imsmanifest.xml');
  await page.locator('#file').setInputFiles(await fixture({'imsmanifest.xml':manifest,'lesson.html':'<main><h1>Texto de prueba</h1><script>window.pwned=1</script><p onclick="window.pwned=1">Contenido seguro</p><table><tr><th>Indicador</th><th>Meta</th></tr><tr><td>Ventas</td><td>10%</td></tr></table><a href="javascript:alert(1)">Enlace</a></main>'}));
  await expect(page.locator('#preview')).toContainText('Contenido seguro');
  await expect(page.locator('#preview table')).toBeVisible();
  expect(await page.evaluate(()=>('pwned' in window))).toBe(false);
  expect(await page.locator('#preview [onclick], #preview [href^="javascript:"]').count()).toBe(0);
  await page.locator('#select-all').click();await expect(page.locator('#download')).toBeDisabled();
  await page.locator('#select-all').click();await expect(page.locator('#download')).toBeEnabled();
  await page.locator('#pdf-title').fill('Título personalizado');await expect(page.locator('#preview .paper-cover h1')).toHaveText('Título personalizado');
  const download=page.waitForEvent('download');await page.locator('#download').click();const result=await download;await result.saveAs('tmp/html-test.pdf');
  expect(result.suggestedFilename()).toBe('Título personalizado.pdf');
  await page.locator('#reset').click();await expect(page.locator('#upload-section')).toBeVisible();
  await page.setViewportSize({width:390,height:844});await page.screenshot({path:'tmp/mobile.png',fullPage:true});
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});

test('Rise real: contenido, secuencia, anexos y descarga',async({page})=>{
  test.skip(!realZip,'Define SCORM_FIXTURE para validar el paquete real.');
  const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('/');await page.locator('#file').setInputFiles(realZip!);
  await expect(page.locator('#course-name')).toContainText('ADGD073PO');
  await expect(page.locator('#stats')).toHaveText('6 lecciones · 18 imágenes · 27 preguntas');
  const preview=page.locator('#preview');await expect(preview).toContainText('Un indicador también debe ser oportuno');
  await expect(preview).toContainText('Metas específicas y medibles');
  const text=await preview.innerText();expect(text.indexOf('Fijación de objetivos')).toBeLessThan(text.indexOf('Resumen del ciclo'));
  await expect(preview).not.toContainText('Anexo · Soluciones');
  expect(await page.locator('#preview img').count()).toBe(18);
  await page.screenshot({path:'tmp/course.png',fullPage:true});
  await page.locator('#images').uncheck();expect(await page.locator('#preview img').count()).toBe(0);await page.locator('#images').check();
  await page.locator('#solutions').check();await expect(preview).toContainText('Anexo · Soluciones');
  const download=page.waitForEvent('download');await page.locator('#download').click();const result=await download;await result.saveAs('tmp/course.pdf');
  expect((await fs.stat('tmp/course.pdf')).size).toBeGreaterThan(100000);
  await page.locator('#questions').uncheck();await expect(preview).not.toContainText('Anexo · Actividades');await expect(preview).not.toContainText('Anexo · Soluciones');await expect(page.locator('#solutions')).toBeDisabled();
  await page.setViewportSize({width:390,height:844});await page.screenshot({path:'tmp/mobile-course.png',fullPage:true});
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  expect(errors).toEqual([]);
});
