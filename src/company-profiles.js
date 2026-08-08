const PROFILES = {
  "矩阵起源": {
    companySummary: "企业级 AI 基础设施公司，围绕数据管理与 AI 计算场景提供技术产品。",
    website: "https://www.matrixorigin.cn/",
    contact: "商务联系：官网联系页",
  },
  "为光能源": {
    companySummary: "西安为光能源科技有限公司，面向算力中心、电动交通、新型配网和储能等场景，围绕固态变压器（SST）等新型电力电子装备提供能源互联网解决方案。",
    website: "https://www.weiguangenergy.com/portal/about/index.html",
    contact: "服务热线：400-868-6988；地址：陕西省西安市高新区毕原二路3号先导院南区5-6号楼；公众号：WGenergy；在线留言：官网联系页面。",
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
  "可灵 AI": {
    companySummary: "AI 视频大模型产品，面向内容创作和商业化视频生成场景提供服务。",
    website: "https://klingai.com/",
    contact: "商务联系：官网联系页",
  },
  "RoboParty（萝博派对）": {
    companySummary: "上海萝博派对科技有限公司，专注全栈开源双足人形机器人；其公开项目覆盖机器人结构、电气、训练和部署。",
    website: "https://github.com/Roboparty",
    contact: "未见公开商务电话或邮箱；开源技术交流 QQ 群：546376843；官方 GitHub：github.com/Roboparty。",
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
