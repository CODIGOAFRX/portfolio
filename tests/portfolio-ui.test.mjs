import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const read = (file) => readFileSync(new URL(`../${file}`, import.meta.url), 'utf8');
const index = read('index.html');
const script = read('script.js');
const styles = read('styles.css');

test('the public interfaces do not contain arrow glyphs that iOS can render as emoji', () => {
    const visibleInterface = [index, script, read('login.html'), read('admin.js')].join('\n');
    assert.doesNotMatch(visibleInterface, /[\u2190-\u2199\u21b4-\u21b5\u2b06-\u2b07\u279c-\u27a4]/u);
});

test('the globe is a fixed page-level layer instead of a hero-only decoration', () => {
    const heroMarkup = index.match(/<section id="hero"[\s\S]*?<\/section>/)?.[0] ?? '';

    assert.match(index, /<nav[\s\S]*?<\/nav>\s*<div class="page-globe"[\s\S]*?<main>/);
    assert.doesNotMatch(heroMarkup, /page-globe|scroll-globe/);
    assert.match(styles, /\.page-globe\s*{[\s\S]*?position:\s*fixed;/);
    assert.match(styles, /\.content-wrapper\s*{[\s\S]*?z-index:\s*2;/);
});

test('the globe supports scroll growth, dark contrast and continuous autonomous rotation', () => {
    assert.match(script, /targetScale = mix\(startSize \/ maximumSize, 1, growProgress\)/);
    assert.match(script, /targetTheme = overDarkSection \? 1 : 0/);
    assert.match(script, /const automaticRotationSpeed = 0\.0001/);
    assert.match(script, /const automatic = !reducedMotion;/);
    assert.match(script, /automaticRotation \+= deltaTime \* automaticRotationSpeed/);
    assert.doesNotMatch(script, /automaticRotation \+= deltaTime[^;]*contactProgress/);
    assert.match(script, /globeShell\.dataset\.phase = phase/);
});

test('the intro and the network transition follow the scroll position and never play on their own', () => {
    for (const file of ['intro.js', 'net.js']) {
        const source = read(file);
        assert.doesNotMatch(source, /setTimeout|setInterval|\.animate\(/, `${file} must not start timed animations`);
        assert.match(source, /getBoundingClientRect\(\)/, `${file} must read the scroll position`);
    }
    assert.match(index, /<section id="red" class="net"/);
    assert.doesNotMatch(index, /galaxy/);
    assert.match(index, /<script src="net\.js\?v=[^"]+" defer><\/script>/);
});
