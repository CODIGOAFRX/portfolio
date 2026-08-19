import test from 'node:test';
import assert from 'node:assert/strict';
import { canonicalJobUrl, normalizeJob } from '../worker/src/index.js';

const baseJob = {
    sourceId: 'source:1',
    source: 'LinkedIn',
    title: 'Junior Java Developer',
    company: 'Example',
    location: 'Madrid',
    workMode: 'Híbrido',
    url: 'https://www.linkedin.com/comm/jobs/view/123456/?trackingId=test',
    fitScore: 88,
    priority: 'high',
    gaps: []
};

test('hybrid roles outside Andalucía are capped at 10 percent', () => {
    const job = normalizeJob(baseJob);
    assert.equal(job.fitScore, 10);
    assert.equal(job.priority, 'low');
    assert.match(job.gaps, /fuera de Andalucía/);
});

test('hybrid roles in Granada keep their technical score', () => {
    const job = normalizeJob({ ...baseJob, location: 'Granada' });
    assert.equal(job.fitScore, 88);
});

test('remote roles in Madrid are not penalized', () => {
    const job = normalizeJob({ ...baseJob, workMode: 'Remoto' });
    assert.equal(job.fitScore, 88);
});

test('offers without a valid direct link are rejected', () => {
    assert.equal(normalizeJob({ ...baseJob, url: null }), null);
});

test('LinkedIn tracking links are stored as stable canonical links', () => {
    assert.equal(canonicalJobUrl(baseJob.url), 'https://www.linkedin.com/jobs/view/123456/');
});
