import fs from "node:fs/promises";
import path from "node:path";
import { Workbook, SpreadsheetFile } from "@oai/artifact-tool";

import { normalizeRecords, splitByMarket } from "../src/funding.js";

const root = path.resolve(import.meta.dirname, "..");
const sourcePath = path.join(root, "data", "funding-records.json");
const outputPath = path.join(root, "近期融资公司追踪.xlsx");

const rawRecords = JSON.parse(await fs.readFile(sourcePath, "utf8"));
const { china, global } = splitByMarket(normalizeRecords(rawRecords));
const workbook = new Workbook({ sheets: [] });

function toRows(records) {
  return records.map((record) => [
    record.companyName,
    record.industry,
    new Date(`${record.financingDate}T08:00:00Z`),
    record.amountText,
    record.round,
    record.currency,
    record.cnyAmount,
    record.sourceName,
    record.sourceUrl,
    new Date(record.fetchedAt.replace("+08:00", "Z")),
    record.verification,
  ]);
}

function addFundingSheet(name, records, marketLabel) {
  const sheet = workbook.worksheets.add(name);
  const headers = [
    "公司名称",
    "所在行业",
    "最新融资时间",
    "融资规模",
    "融资轮次",
    "原始币种",
    "人民币换算金额（万元）",
    "来源网站",
    "来源链接",
    "抓取时间",
    "核验状态",
  ];

  sheet.getRange("A1:K1").merge();
  sheet.getRange("A1").values = [[`${marketLabel}近期融资公司追踪`]];
  sheet.getRange("A2:K2").merge();
  sheet.getRange("A2").values = [[
    "仅收录公开报道的股权融资、战略融资与可明确归属公司的融资事件；人民币换算按 1 美元 = 7.20 元估算。",
  ]];
  sheet.getRange("A4:K4").values = [headers];
  sheet.getRange(`A5:K${records.length + 4}`).values = toRows(records);

  sheet.getRange("A1:K1").format = {
    fill: "#123A5A",
    font: { bold: true, color: "#FFFFFF", size: 15 },
    horizontalAlignment: "left",
    verticalAlignment: "center",
  };
  sheet.getRange("A2:K2").format = {
    fill: "#EAF2F8",
    font: { color: "#36566F", italic: true, size: 10 },
    wrapText: true,
  };
  sheet.getRange("A4:K4").format = {
    fill: "#1F6F8B",
    font: { bold: true, color: "#FFFFFF" },
    horizontalAlignment: "center",
    verticalAlignment: "center",
  };
  sheet.getRange(`A5:K${records.length + 4}`).format = {
    verticalAlignment: "center",
  };
  sheet.getRange(`C5:C${records.length + 4}`).format.numberFormat = "yyyy-mm-dd";
  sheet.getRange(`G5:G${records.length + 4}`).format.numberFormat = "#,##0";
  sheet.getRange(`J5:J${records.length + 4}`).format.numberFormat = "yyyy-mm-dd hh:mm";

  for (const column of ["I"]) {
    sheet.getRange(`${column}5:${column}${records.length + 4}`).format.font = {
      color: "#0563C1",
      underline: true,
    };
  }

  const widths = {
    A: 20, B: 25, C: 15, D: 20, E: 14, F: 12, G: 24, H: 18, I: 55, J: 22, K: 12,
  };
  for (const [column, width] of Object.entries(widths)) {
    sheet.getRange(`${column}:${column}`).format.columnWidth = width;
  }
  sheet.getRange("1:1").format.rowHeight = 26;
  sheet.getRange("2:2").format.rowHeight = 32;
  sheet.getRange("4:4").format.rowHeight = 22;
  sheet.freezePanes.freezeRows(4);
  sheet.getRange(`A4:K${records.length + 4}`).format.autofitRows();
  return sheet;
}

addFundingSheet("中国公司", china, "中国公司");
addFundingSheet("全球公司", global, "全球公司");

const log = workbook.worksheets.add("运行日志");
log.getRange("A1:D1").values = [["运行时间", "中国公司数量", "全球公司数量", "说明"]];
log.getRange("A2:D2").values = [[new Date(), china.length, global.length, "首版数据由公开新闻检索汇总，后续由每日任务去重更新。"]];
log.getRange("A1:D1").format = {
  fill: "#123A5A",
  font: { bold: true, color: "#FFFFFF" },
};
log.getRange("A2").format.numberFormat = "yyyy-mm-dd hh:mm";
log.getRange("A:A").format.columnWidth = 22;
log.getRange("B:C").format.columnWidth = 16;
log.getRange("D:D").format.columnWidth = 58;
log.freezePanes.freezeRows(1);

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(outputPath);
await import("./build-site-data.mjs");
console.log(outputPath);
