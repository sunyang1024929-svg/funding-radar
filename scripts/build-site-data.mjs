import fs from "node:fs/promises";
import path from "node:path";

import {
  createPublicDataset,
  serializeBrowserDataset,
} from "../src/site-data.js";

const root = path.resolve(import.meta.dirname, "..");
const inputPath = path.join(root, "data", "funding-records.json");
const outputDir = path.join(root, "site", "data");
const outputPath = path.join(outputDir, "funding.json");
const browserOutputPath = path.join(outputDir, "funding.js");
const records = JSON.parse(await fs.readFile(inputPath, "utf8"));
const dataset = createPublicDataset(records);

await fs.mkdir(outputDir, { recursive: true });
await fs.writeFile(
  outputPath,
  `${JSON.stringify(dataset, null, 2)}\n`,
  "utf8",
);
await fs.writeFile(browserOutputPath, serializeBrowserDataset(dataset), "utf8");

console.log(outputPath);
