import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { renderAdminPage } from '../lib/admin-page.js';

test('the private dashboard exposes useful filters and explicit status tabs', () => {
    const html = renderAdminPage();

    assert.match(html, /id="job-priority"/);
    assert.match(html, /id="job-source"/);
    assert.match(html, /role="tab" aria-selected="true" data-status="pending"/);
    assert.match(html, /id="clear-filters"/);
});

test('opening an offer never marks it as applied automatically', async () => {
    const script = await readFile(new URL('../admin.js', import.meta.url), 'utf8');

    assert.doesNotMatch(script, /markAppliedAfterOpening/);
    assert.match(script, /'Marcar solicitada'/);
    assert.match(script, /'Abrir oferta'/);
});
