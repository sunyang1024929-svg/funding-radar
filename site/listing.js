export const LIST_BATCH_SIZE = 12;

export function getVisibleRecords(records, visibleCount) {
  return records.slice(0, visibleCount);
}

export function getNextVisibleCount(visibleCount, totalCount, batchSize = LIST_BATCH_SIZE) {
  return Math.min(visibleCount + batchSize, totalCount);
}
