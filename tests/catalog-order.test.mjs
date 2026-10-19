import assert from 'node:assert/strict';
import test from 'node:test';
import { latestCatalogItems } from '../lib/catalog-order.mjs';

test('latestCatalogItems returns the latest four public catalog records across types and experts', () => {
  const catalog = [
    { id: 'old-free-gold', expert: 'goldmaster', paid: false, publishedAt: '2024-01-10T00:00:00.000Z' },
    { id: 'invalid-date', expert: 'ggotge', paid: true, publishedAt: 'not-a-date' },
    { id: 'new-paid-ggotge', expert: 'ggotge', paid: true, publishedAt: '2025-03-04T00:00:00.000Z' },
    { id: 'new-free-gold', expert: 'goldmaster', paid: false, publishedAt: '2025-06-12T00:00:00.000Z' },
    { id: 'mid-paid-gold', expert: 'goldmaster', paid: true, publishedAt: '2025-01-01T00:00:00.000Z' },
    { id: 'new-free-ggotge', expert: 'ggotge', paid: false, publishedAt: '2025-05-01T00:00:00.000Z' },
  ];

  assert.deepEqual(
    latestCatalogItems(catalog).map(video => video.id),
    ['new-free-gold', 'new-free-ggotge', 'new-paid-ggotge', 'mid-paid-gold'],
  );
  assert.deepEqual(catalog.map(video => video.id), [
    'old-free-gold', 'invalid-date', 'new-paid-ggotge', 'new-free-gold', 'mid-paid-gold', 'new-free-ggotge',
  ]);
});

test('latestCatalogItems gives invalid dates epoch order and preserves ties in input order', () => {
  const catalog = [
    { id: 'same-first', publishedAt: '2025-01-01' },
    { id: 'invalid-first', publishedAt: 'invalid' },
    { id: 'same-second', publishedAt: '2025-01-01T00:00:00.000Z' },
    { id: 'missing-date' },
    { id: 'invalid-second', publishedAt: '2025-99-99' },
  ];

  assert.deepEqual(
    latestCatalogItems(catalog).map(video => video.id),
    ['same-first', 'same-second', 'invalid-first', 'missing-date'],
  );
});
