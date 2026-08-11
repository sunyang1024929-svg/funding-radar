const PROFILES = {
  "矩阵起源": {
    companySummary: "矩阵起源专注 AI 原生数据基础设施，提供多模态数据处理、数据库与企业级 AI 数据底座产品及解决方案。其产品面向企业在结构化、非结构化和向量数据之间建立统一的数据管理与计算能力，为模型训练、知识检索和 AI 应用部署提供底层支撑。",
    website: "https://matrixorigin.cn/",
    contact: "商务邮箱：contact@matrixorigin.cn。",
  },
  "为光能源": {
    companySummary: "西安为光能源科技有限公司聚焦固态变压器（SST）等新型电力电子装备及能源互联网解决方案。公司瞄准算力中心、电动交通、新型配网和储能等高功率密度场景，通过电能变换、控制和系统集成提升供配电效率与灵活性。",
    website: "https://www.weiguangenergy.com/",
    contact: "服务热线：400-868-6988；商务邮箱（官网公开）：wangjuan0509@foxmail.com；地址：陕西省西安市高新区毕原二路3号先导院南区5-6号楼；公众号：WGenergy；在线留言：官网联系页。",
  },
  "飞捷科思": {
    companySummary: "飞捷科思以高精度实时物理仿真引擎为核心，研发面向具身智能和人形机器人的物理智能技术与产品。其能力重点在于让机器人在虚拟环境中完成动力学、接触和运动策略验证，以缩短从算法训练到真实机器部署的迭代周期。",
    website: "https://fysics.net/",
    contact: "电话：021-60197571；商务邮箱：fysics@fysics.ai；官网联系页：https://fysics.net/contact.html。",
  },
  "蓝凌星通": {
    companySummary: "蓝凌星通是蓝牙卫星系统服务商，利用低轨卫星为蓝牙终端提供低成本、低功耗的物联网连接和行业监测方案。其目标是把现有蓝牙终端延伸到传统地面网络覆盖不足的区域，服务户外、物流、资产追踪和行业监测等场景。",
    website: "https://www.bluelinksatcom.com/",
    contact: "电话：400-8818-251；商务邮箱：market@bluelinksatcom.com。",
  },
  "协鑫光电": {
    companySummary: "协鑫光电主要从事大面积钙钛矿光伏组件的研发、生产及商业化应用。公司围绕钙钛矿材料、组件制备、封装可靠性和量产工艺推进技术迭代，面向下一代高效率光伏组件及其应用市场。",
    website: "https://www.gcl-perovskite.com/",
    contact: "官网公开电话：86-0512-57562287；官网联系页：https://www.gcl-power.com/contact.html。",
  },
  "西湖心辰": {
    companySummary: "西湖心辰是一家生成式 AI 公司，研发西湖大模型及面向创作与企业场景的 AI 原生应用。公司将大模型能力用于内容生成、智能交互和行业工作流，强调模型能力与实际产品体验、企业落地场景的结合。",
    website: "https://xinchenai.com/",
    contact: "电话：400-8126-618；邮箱：support@xinchenai.com；地址：浙江省杭州市西湖区智强路428号云创镓谷6号楼6楼604室。",
  },
  "月之暗面（Kimi）": {
    companySummary: "月之暗面是一家大模型创业公司，推出 Kimi 等面向个人与企业的 AI 产品。其产品以长上下文理解、资料阅读、信息整理和多轮对话为主要能力，覆盖个人效率工具与企业级 AI 应用需求。",
    website: "https://www.moonshot.cn/",
    contact: "产品/售后：support@moonshot.cn；媒体：pr@kimi.com；投资者联系：ir@kimi.com；企业微信客服：微信公众号「月之暗面Kimi」菜单“联系我们”。",
  },
  "Horizon3.ai": {
    companySummary: "Horizon3.ai 是一家网络安全公司，提供以攻击路径验证为核心的安全测试与风险评估产品。其 NodeZero 平台通过自动化模拟攻击帮助安全团队识别可被实际利用的薄弱点，并将风险发现与修复优先级连接起来。",
    website: "https://www.horizon3.ai/",
    contact: "通用咨询：info@horizon3.ai；电话：+1 650-445-4457；媒体：press@horizon3.ai；官网联系页：https://horizon3.ai/contact-us/。",
  },
  Zenity: {
    companySummary: "Zenity 专注 AI Agent 安全，帮助企业识别和管控生成式 AI、低代码工具及智能体带来的数据与权限风险。其产品面向企业安全团队提供资产发现、策略治理和持续监控能力，支持在不阻断业务创新的前提下部署 AI 应用。",
    website: "https://www.zenity.io/",
    contact: "商务邮箱：hello@zenity.io；官网联系页：https://zenity.io/company/contact。",
  },
  Lumilens: {
    companySummary: "Lumilens 为 AI 基础设施提供规模扩展和规模内互连的下一代光子互连产品。公司面向高性能计算和大规模训练集群，尝试以更高带宽、更低功耗的光互连缓解 GPU、交换网络和数据中心内部通信的瓶颈。",
    website: "https://lumilens.com/",
    contact: "官网未公开列出商务邮箱或电话；可通过官网产品/新闻页面关注后续联系入口。",
  },
  "Valar Atomics": {
    companySummary: "Valar Atomics 面向重工业供能、数据中心电力、氢能和清洁燃料场景研发高温气冷堆核能系统。公司重点探索能够规模化制造的先进核能设备，以为高温工业过程和持续增长的算力负荷提供稳定的零碳能源。",
    website: "https://valaratomics.com/",
    contact: "官网提供“Contact us”联系入口；未检索到公开商务邮箱或电话。",
  },
  OLIX: {
    companySummary: "OLIX 为前沿 AI 推理构建从芯片、激光器到互连网络的一体化基础设施。公司聚焦计算、光电器件和高速互连的协同设计，目标是提升大模型推理集群的吞吐、能效与扩展能力。",
    website: "https://olix.com/",
    contact: "媒体/商务邮箱：press@olix.com；公关联系人：olix@strandpartners.com。",
  },
  "幺正量子": {
    companySummary: "幺正量子是一家离子阱量子计算企业，提供量子计算系统、设备器件、云服务和行业解决方案。公司围绕离子阱硬件、量子控制、算法与行业应用推进全栈研发，服务科研、教育和量子计算产业化需求。",
    website: "https://www.unitqc.com/",
    contact: "商务邮箱：business@unitqc.com；电话：15391985489；地址：安徽省合肥市高新区望江西路900号中安创谷科技园一期B1栋1-2层。",
  },
  "恺望数据": {
    companySummary: "恺望数据为车企、自动驾驶及 AI 企业提供一站式数据解决方案和自动化数据生产能力。其服务覆盖数据采集、清洗、标注、质检和管理，重点支持自动驾驶、具身智能与大模型训练中的规模化高质量数据供给。",
    website: "https://admin.d.konvery.com/",
    contact: "官方产品平台：https://admin.d.konvery.com/；官网未公开完整商务电话或邮箱，可通过平台申请试用或联系。",
  },
  "求是光谱": {
    companySummary: "求是光谱从事多光谱成像芯片、光谱应用方案及光谱大数据研发，为智能终端、汽车电子、医疗和环境监测等场景提供产品与服务。公司将光谱感知能力嵌入硬件和软件方案，用于物质识别、成分分析和复杂环境下的智能检测。",
    website: "https://www.qsspec.com/",
    contact: "电话：0431-88882290；商务联系人：冯硕，18343025432，fengshuo@qsspec.com；展会公开邮箱：hanying@qsspec.com。",
  },
  "熵简科技": {
    companySummary: "熵简科技是面向金融资管行业的数字基础设施与数据智能服务商，提供另类数据、知识图谱和全域数据中台等能力。公司自主研发大数据分析引擎，帮助金融机构处理多源异构数据、构建标准化 API，并支持投研、风险管理和业务决策工作流。",
    website: "https://www.valuesimplex.com/",
    contact: "官网提供业务咨询入口；暂未检索到可交叉确认的公开商务电话或邮箱。",
  },
  "灏存科技": {
    companySummary: "灏存科技从事人工智能穿戴型肢体动作识别软硬件技术研发，应用于 VR/AR/MR、电影工业和人形机器人运动感知场景。公司以穿戴式传感、人体动作捕捉和算法识别为核心，使虚拟交互、数字内容生产和机器人训练获得更细粒度的运动数据。",
    website: "https://www.hexacercle.com/",
    contact: "商务合作：+86 13349933396；邮箱：mike@hexacercle.com；武汉总部：武汉东湖高新区关东街道华工园三路湖北青创园4栋801。",
  },
  "飞声": {
    companySummary: "飞声专注 AI 助听器与听力辅助产品，结合声学处理、语音增强和智能交互能力改善听障场景的佩戴体验。公司面向消费级与医疗级场景推进产品化，强调清晰拾音、降噪和更自然的听觉补偿。",
    website: "https://www.flysounds.cn/zh/",
    contact: "电话：15828225541；商务邮箱：jory@flysounds.com；地址：深圳市龙华区龙华街道清湖社区大和路356号金鼎盛科创园A栋18楼。",
  },
  "诺因智能": {
    companySummary: "诺因智能聚焦家庭场景具身智能，围绕折叠双臂机器人及相关感知、执行和交互系统推进产品研发。公司目标是让机器人进入真实家庭环境，承担陪伴互动、整理和基础协作等任务。",
    website: "https://knowinai.com/",
    contact: "招聘邮箱：HR@knowin.ai；联系电话：17610340223；媒介合作：media@knowin.ai；官方联系页：https://knowinai.com/。",
  },
  ElevTalk: {
    companySummary: "ElevTalk 是面向职场英语表达的 AI 语音与写作辅助工具，帮助用户把日常输入转成更自然、专业的英文表达。产品定位于全球化工作场景，覆盖 Slack、邮件、LinkedIn 等沟通渠道。",
    website: "https://www.elevtalk.com/",
    contact: "支持邮箱：support@elevtalk.com；官网联系页：https://www.elevtalk.com/。",
  },
  "Noiz AI": {
    companySummary: "Noiz AI 提供文本转语音、声音克隆和语音设计能力，面向内容创作、配音、本地化和开发者 API 场景。其产品强调情感控制、低延迟生成和多语言语音输出，服务全球化音频工作流。",
    website: "https://noiz.ai/",
    contact: "邮箱：contact@noiz.ai；官网联系页：https://noiz.ai/。",
  },
  "亿兰科": {
    companySummary: "亿兰科专注工商业模块化光储系统和电力电子设备，围绕 PCS、混合逆变器、光储一体机与微电网管理系统开展研发和交付。公司产品服务工商业储能、分布式光伏和海外终端市场。",
    website: "https://www.elecod.cn/",
    contact: "电话：0755-23050802；商务邮箱：marketing@elecod.com；人力邮箱：hr@elecod.com；官网联系页：https://www.elecod.cn/aboutus.html。",
  },
  "橡木果机器人": {
    companySummary: "橡木果机器人专注通用具身操作，围绕触觉感知、操作基座模型和机器人执行能力构建底层技术栈。公司强调自下而上的“本能驱动”路线，目标是让机器人在真实物理环境中稳定完成操作任务。",
    website: "未找到已核验官网",
    contact: "未找到公开商务联系方式",
  },
  "霍德生物": {
    companySummary: "霍德生物工程有限公司聚焦细胞治疗和再生医学相关技术与产品，围绕研发、工艺和临床转化推进管线建设。公司在公开页面中长期披露研发动态与产品进展，面向生物医药产业化需求。",
    website: "https://www.hopstem.com/",
    contact: "电话：0571-88197776；邮箱：info@hopstem.com；官网联系页：https://www.hopstem.com/。",
  },
  "星环聚能": {
    companySummary: "星环聚能专注可控核聚变相关技术和工程化系统，推动聚变能装备研发及商业化路径。公司面向清洁能源、长期稳定供能和能源转型场景，持续扩展实验和产业化能力。",
    website: "https://startorus.cn/",
    contact: "电话：029-86041002；邮箱：business@startorus.cn；公司地址：上海市嘉定区澄浏公路52号39幢2楼JT109869室；官网联系页：https://startorus.cn/。",
  },
  "奇算光启": {
    companySummary: "奇算光启专注 AI 光计算芯片和光计算系统研发，试图用全光计算与集成光子技术突破传统电子芯片能效瓶颈。公司面向大模型和高性能计算底座，强调算力密度、功耗和系统扩展能力。",
    website: "未找到已核验官网",
    contact: "未找到公开商务联系方式",
  },
  "深度细胞": {
    companySummary: "深度细胞聚焦 AI 制药与虚拟细胞建模，围绕单细胞分析、疾病机理和药物研发加速构建算法平台。公司目标是把细胞级计算能力用于新药发现和生物医学研究。",
    website: "未找到已核验官网",
    contact: "未找到公开商务联系方式",
  },
  "可灵 AI": {
    companySummary: "可灵 AI 是面向视频生成与创作的 AI 大模型产品，支持文本、图片等输入驱动的视频内容生成和编辑。产品服务广告创意、影视内容、社交媒体和商业化营销等场景，重点提升视频生成的一致性、可控性和创作效率。",
    website: "https://klingai.com/",
    contact: "商务联系：官网联系页",
  },
  "RoboParty（萝博派对）": {
    companySummary: "RoboParty 专注低成本、高性能双足人形机器人研发，并通过全栈开源建设机器人开发生态。公司公开机器人结构、电气、训练和部署等技术资料，希望降低研究者与开发者进入人形机器人研发的门槛，并推动软硬件协同迭代。",
    website: "https://roboparty.com/",
    contact: "商务邮箱：contact@roboparty.com；开源技术交流 QQ 群：1078670917；官方 GitHub：https://github.com/Roboparty。",
  },
  "鸿鹄航空": {
    companySummary: "青岛鸿鹄航空科技有限公司专注航空温控产品与服务，是海尔生物医疗控股子公司。公司围绕航空装备温度控制和相关系统服务开展产品研发，服务航空运行与专业运输等对环境控制要求较高的场景。",
    website: "https://www.hbtempconaviation.com/",
    contact: "电话：+86-400-863-0863；邮箱：aviation@haierbiomedical.com；地址：青岛市高新区丰源路280号。",
  },
  "元育生物": {
    companySummary: "元育生物是微藻生物合成企业，开发可持续微藻基原料并提供定制化应用解决方案。公司以微藻培养、代谢调控和生物制造为技术基础，探索在食品营养、功能原料、日化与绿色消费品等领域的产业化应用。",
    website: "https://www.protoga.com/",
    contact: "珠海：0756-8699334；北京：010-67866793；海外 BD：bd@protoga.com；国内销售：sales@protoga.com；地址：广东省珠海市香洲区南屏镇科技工业园屏北一路30号1栋2楼。",
  },
  "昉擎科技": {
    companySummary: "昉擎科技是新一代智能计算系统企业，基于分离式架构和 4D Memory 理论，自主研发芯片、硬件系统与软件栈。公司重点解决 AI 计算系统的通用性、扩展性与工程化部署问题；本轮融资主要用于自研芯片和系统研发、规模化量产、软件生态建设及人才引进。",
  },
  "主动科技": {
    companySummary: "主动科技是一家侵入式脑机接口技术研发与产业化企业，核心产品为“天枢”运动脑机接口。公开报道显示，公司成立于 2026 年 2 月，正推进高通道脑机系统、微纳加工平台与临床试验，目标是推动侵入式脑机接口从实验室验证走向医疗器械产业化。",
  },
  "璨辰科技": {
    companySummary: "璨辰科技聚焦系统级虚拟器官时空动态演化模型研发，构建从分子、细胞、组织到器官的全尺度 AI 数字孪生平台。其方案服务于新药临床前评价、发育毒性评估与疾病机制研究，并通过“仿真—湿实验—临床前验证”的数据闭环提升模型的产业转化价值。",
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
