import { normalizeRecords, splitByMarket } from "./funding.js";
import { enrichCompanyRecord } from "./company-profiles.js";

function formatCnyAmount(amount) {
  if (amount === null || amount === undefined) {
    return "未披露";
  }

  return `${new Intl.NumberFormat("zh-CN", {
    maximumFractionDigits: 0,
  }).format(amount)} 万元`;
}

export function createPublicDataset(records, generatedAt = new Date().toISOString()) {
  const normalized = normalizeRecords(records).map(enrichCompanyRecord);
  const { china, global } = splitByMarket(normalized);

  return {
    generatedAt,
    records: [...china, ...global].map((record) => ({
      companyName: record.companyName,
      industry: record.industry,
      financingDate: record.financingDate,
      amountText: record.amountText,
      round: record.round,
      market: record.market,
      sourceName: record.sourceName,
      sourceUrl: record.sourceUrl,
      verification: record.verification,
      cnyAmount: record.cnyAmount,
      cnyAmountText: formatCnyAmount(record.cnyAmount),
      companySummary: record.companySummary,
      website: record.website,
      contact: record.contact,
    })),
  };
}
