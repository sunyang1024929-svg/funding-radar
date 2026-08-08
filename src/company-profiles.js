const PROFILES = {
  "矩阵起源": {
    companySummary: "企业级 AI 基础设施公司，围绕数据管理与 AI 计算场景提供技术产品。",
    website: "https://www.matrixorigin.cn/",
    contact: "商务联系：官网联系页",
  },
  "西湖心辰": {
    companySummary: "生成式 AI 公司，聚焦多模态大模型与 AI 原生应用研发。",
    website: "https://www.westlake.ai/",
    contact: "商务联系：官网联系页",
  },
  "月之暗面（Kimi）": {
    companySummary: "大模型创业公司，推出 Kimi 等面向个人与企业的 AI 产品。",
    website: "https://www.moonshot.cn/",
    contact: "商务联系：官网联系页",
  },
  "Horizon3.ai": {
    companySummary: "网络安全公司，提供以攻击路径验证为核心的安全测试与风险评估产品。",
    website: "https://www.horizon3.ai/",
    contact: "商务联系：官网联系页",
  },
  Zenity: {
    companySummary: "AI Agent 安全公司，帮助企业识别和管控生成式 AI 与智能体的安全风险。",
    website: "https://www.zenity.io/",
    contact: "商务联系：官网联系页",
  },
  "幺正量子": {
    companySummary: "量子计算技术公司，面向量子软硬件与产业化应用开展研发。",
  },
  "恺望数据": {
    companySummary: "AI 数据服务公司，为具身智能等场景提供数据采集、处理与训练支持。",
  },
  "求是光谱": {
    companySummary: "光谱检测技术公司，面向工业与科研场景提供光谱相关产品和解决方案。",
  },
  "熵简科技": {
    companySummary: "企业级技术服务公司，聚焦数据智能与软件产品研发。",
  },
  "灏存科技": {
    companySummary: "硬科技企业，公开报道披露其近期完成 A+ 轮融资。",
  },
};

export function enrichCompanyRecord(record) {
  const profile = PROFILES[record.companyName] || {};
  return {
    ...record,
    companySummary:
      record.companySummary
      || profile.companySummary
      || `${record.companyName} 是一家专注于${record.industry}的企业。`,
    website: record.website || profile.website || "未找到已核验官网",
    contact: record.contact || profile.contact || "未找到公开商务联系方式",
  };
}
