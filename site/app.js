const state = {
  records: [],
  market: "China",
  search: "",
  industry: "",
  period: "all",
};

const elements = {
  search: document.querySelector("#search-input"),
  industry: document.querySelector("#industry-filter"),
  period: document.querySelector("#period-filter"),
  marketButtons: [...document.querySelectorAll(".market-button")],
  records: document.querySelector("#records"),
  summary: document.querySelector("#result-summary"),
  updatedAt: document.querySelector("#updated-at"),
  empty: document.querySelector("#empty-state"),
  error: document.querySelector("#error-state"),
};

function formatDate(value) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(`${value}T12:00:00`));
}

function formatUpdatedAt(value) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Shanghai",
  }).format(new Date(value));
}

function matchesPeriod(record) {
  if (state.period === "all") return true;

  const newestDate = state.records.reduce(
    (latest, item) => (item.financingDate > latest ? item.financingDate : latest),
    "",
  );
  const latest = new Date(`${newestDate}T12:00:00`);
  const boundary = new Date(latest);
  boundary.setDate(boundary.getDate() - Number(state.period));
  return new Date(`${record.financingDate}T12:00:00`) >= boundary;
}

function filteredRecords() {
  const query = state.search.trim().toLocaleLowerCase("zh-CN");
  return state.records.filter((record) => {
    const text = [
      record.companyName,
      record.industry,
      record.round,
      record.sourceName,
    ].join(" ").toLocaleLowerCase("zh-CN");
    return record.market === state.market
      && (!query || text.includes(query))
      && (!state.industry || record.industry === state.industry)
      && matchesPeriod(record);
  });
}

function render() {
  const records = filteredRecords();
  elements.records.replaceChildren();
  elements.empty.hidden = records.length > 0;
  elements.summary.textContent = `${state.market === "China" ? "中国公司" : "全球公司"} · ${records.length} 条融资记录`;

  for (const [index, record] of records.entries()) {
    const row = document.createElement("article");
    row.className = "record";
    row.style.setProperty("--delay", `${index * 38}ms`);
    const website = record.website.startsWith("http")
      ? `<a class="website-link" href="${record.website}" target="_blank" rel="noreferrer">企业官网 ↗</a>`
      : `<span>${record.website}</span>`;
    row.innerHTML = `
      <div class="company">
        <h2>${record.companyName}</h2>
        <p>${record.industry}</p>
        <p class="company-summary">${record.companySummary}</p>
      </div>
      <time datetime="${record.financingDate}">${formatDate(record.financingDate)}</time>
      <div class="amount">
        <strong>${record.amountText}</strong>
        <span>${record.round} · ${record.cnyAmountText}</span>
      </div>
      <div class="links">
        <a href="${record.sourceUrl}" target="_blank" rel="noreferrer">
          <span>${record.sourceName}</span><b>↗</b>
        </a>
        ${website}
        <span class="contact">${record.contact}</span>
      </div>
    `;
    elements.records.append(row);
  }
}

function populateIndustries(records) {
  const industries = [...new Set(records.map((record) => record.industry))].sort((a, b) =>
    a.localeCompare(b, "zh-CN"),
  );
  for (const industry of industries) {
    const option = document.createElement("option");
    option.value = industry;
    option.textContent = industry;
    elements.industry.append(option);
  }
}

function setupEvents() {
  elements.search.addEventListener("input", (event) => {
    state.search = event.target.value;
    render();
  });
  elements.industry.addEventListener("change", (event) => {
    state.industry = event.target.value;
    render();
  });
  elements.period.addEventListener("change", (event) => {
    state.period = event.target.value;
    render();
  });
  for (const button of elements.marketButtons) {
    button.addEventListener("click", () => {
      state.market = button.dataset.market;
      elements.marketButtons.forEach((item) =>
        item.classList.toggle("is-active", item === button),
      );
      render();
    });
  }
}

async function initialize() {
  try {
    const dataset = window.FUNDING_DATA || await loadFundingDataset();
    state.records = dataset.records;
    elements.updatedAt.textContent = `更新于 ${formatUpdatedAt(dataset.generatedAt)}（北京时间）`;
    populateIndustries(state.records);
    setupEvents();
    render();
  } catch {
    elements.error.hidden = false;
    elements.summary.textContent = "数据加载失败";
  }
}

async function loadFundingDataset() {
  const response = await fetch("./data/funding.json", { cache: "no-store" });
  if (!response.ok) throw new Error("Funding data could not be loaded");
  return response.json();
}

initialize();
