# 近期融资公司追踪

`近期融资公司追踪.xlsx` 与 GitHub Pages 网站均由 `data/funding-records.json` 生成。Excel 包含 `中国公司`、`全球公司` 和 `运行日志` 三个工作表；网站位于 `site/`。

## 更新方式

1. 将核验后的融资事件加入 `data/funding-records.json`。
2. 记录 `companyName`、`industry`、`financingDate`、`amountText`、`round`、`market`、`sourceName`、`sourceUrl` 与 `fetchedAt`。
3. 使用工作区提供的 Node 运行 `scripts/build-workbook.mjs`，重建 Excel。

去重键为“公司名称 + 融资日期 + 市场”；若同一事件有更晚抓取时间，会保留更新后的记录。美元金额按 1 美元 = 7.20 元换算为人民币万元。

## 发布 GitHub Pages

1. 将本仓库推送至 GitHub 的 `main` 分支。
2. 在 GitHub 仓库的 `Settings` → `Pages` 中，将 `Source` 设为 `GitHub Actions`。
3. 推送后，`.github/workflows/deploy-pages.yml` 会测试、生成网站数据并发布 `site/`。

工作流在每日 UTC 10:00 运行，对应北京时间每日 18:00。
