/**
 * Return the newest catalog items without mutating the source array.
 * Invalid or missing publication dates sort as epoch (0); equal dates retain input order.
 *
 * @template {{ publishedAt?: unknown }} T
 * @param {readonly T[]} items
 * @param {number} [limit=4]
 * @returns {T[]}
 */
export function latestCatalogItems(items, limit = 4) {
  if (!Array.isArray(items) || limit <= 0) return [];

  return items
    .map((item, index) => ({
      item,
      index,
      publishedAt: parsePublishedAt(item?.publishedAt),
    }))
    .sort((left, right) => right.publishedAt - left.publishedAt || left.index - right.index)
    .slice(0, limit)
    .map(({ item }) => item);
}

function parsePublishedAt(value) {
  const timestamp = typeof value === 'string' ? Date.parse(value) : Number.NaN;
  return Number.isNaN(timestamp) ? 0 : timestamp;
}
