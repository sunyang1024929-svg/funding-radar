import test from "node:test";
import assert from "node:assert/strict";

import {
  deduplicateRecords,
  convertToCny,
  splitByMarket,
} from "../src/funding.js";
import { createPublicDataset } from "../src/site-data.js";

test("deduplicateRecords keeps the most recently fetched version of one funding event", () => {
  const records = [
    {
      companyName: "示例科技",
      financingDate: "2026-08-05",
      sourceUrl: "https://example.com/first",
      fetchedAt: "2026-08-06T18:00:00+08:00",
    },
    {
      companyName: "示例科技",
      financingDate: "2026-08-05",
      sourceUrl: "https://example.com/second",
      fetchedAt: "2026-08-07T18:00:00+08:00",
    },
  ];

  assert.deepEqual(deduplicateRecords(records), [records[1]]);
});

test("convertToCny converts disclosed USD amounts to ten-thousand CNY", () => {
  assert.equal(convertToCny(2, "USD", { USD: 7.2 }), 1440);
});

test("splitByMarket places Chinese companies before global companies", () => {
  const china = { companyName: "中国公司", market: "China" };
  const global = { companyName: "Global Co", market: "Global" };

  assert.deepEqual(splitByMarket([global, china]), {
    china: [china],
    global: [global],
  });
});

test("createPublicDataset puts China records first and exposes readable CNY amounts", () => {
  const dataset = createPublicDataset([
    {
      companyName: "Global Co",
      industry: "Security",
      financingDate: "2026-08-03",
      amountText: "$2M",
      amount: 2,
      currency: "USD",
      round: "Seed",
      market: "Global",
      sourceName: "Source",
      sourceUrl: "https://example.com/global",
      verification: "Verified",
      fetchedAt: "2026-08-07T11:30:00+08:00",
    },
    {
      companyName: "中国公司",
      industry: "人工智能",
      financingDate: "2026-08-06",
      amountText: "3.3 亿元人民币",
      amount: 330,
      currency: "CNY",
      round: "天使轮",
      market: "China",
      sourceName: "来源",
      sourceUrl: "https://example.com/china",
      verification: "已核验",
      fetchedAt: "2026-08-07T11:30:00+08:00",
    },
  ]);

  assert.deepEqual(dataset.records.map((record) => record.companyName), ["中国公司", "Global Co"]);
  assert.equal(dataset.records[0].cnyAmountText, "33,000 万元");
});
