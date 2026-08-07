export const FX_RATES_TO_CNY = {
  USD: 7.2,
  EUR: 7.85,
  GBP: 9.15,
  CNY: 1,
};

export function deduplicateRecords(records) {
  const byEvent = new Map();

  for (const record of records) {
    const key = `${record.companyName}|${record.financingDate}|${record.market}`;
    const existing = byEvent.get(key);

    if (!existing || new Date(record.fetchedAt) > new Date(existing.fetchedAt)) {
      byEvent.set(key, record);
    }
  }

  return [...byEvent.values()];
}

export function convertToCny(amount, currency, rates = FX_RATES_TO_CNY) {
  if (amount === null || amount === undefined || !rates[currency]) {
    return null;
  }

  // Input amounts are stored in millions; workbook output is in ten-thousand CNY.
  return amount * rates[currency] * 100;
}

export function splitByMarket(records) {
  const china = [];
  const global = [];

  for (const record of records) {
    (record.market === "China" ? china : global).push(record);
  }

  const newestFirst = (a, b) => b.financingDate.localeCompare(a.financingDate);
  china.sort(newestFirst);
  global.sort(newestFirst);

  return { china, global };
}

export function normalizeRecords(records) {
  return deduplicateRecords(records).map((record) => ({
    ...record,
    cnyAmount: convertToCny(record.amount, record.currency),
  }));
}
