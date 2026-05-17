# 恋爱倾向画像系统 — 学术知识库

> 本文档为项目"恋爱倾向画像系统"提供心理学理论基础、量表编制规范和产品设计参考。所有内容来自公开学术研究，用于指导题目编写、维度设计和评分逻辑。

---

## 目录

1. [理论框架一：Lee 爱情风格六分法](#1-lee-爱情风格六分法)
2. [理论框架二：成人依恋理论](#2-成人依恋理论)
3. [理论框架三：社会性开放倾向](#3-社会性开放倾向)
4. [理论框架四：关系承诺与投资模型](#4-关系承诺与投资模型)
5. [理论框架五：冲突沟通风格](#5-冲突沟通风格)
6. [中文量表修订参考](#6-中文量表修订参考)
7. [量表编制方法论](#7-量表编制方法论)
8. [人格测评网站 UX 设计参考](#8-人格测评网站-ux-设计参考)
9. [本项目的维度与类型映射方案](#9-本项目的维度与类型映射方案)
10. [理论框架六：Sternberg 爱情三角理论与 RELIC (2024)](#10-sternberg-爱情三角理论与-relic-2024)
11. [当代青年恋爱趋势 (2024–2025)](#11-当代青年恋爱趋势-20242025)
12. [2024–2025 中国大学生婚恋观调查报告](#12-20242025-中国大学生婚恋观调查报告)
13. [最新关系科学前沿 (2024–2025)](#13-最新关系科学前沿-20242025)

---

## 1. Lee 爱情风格六分法

### 来源
- **John Alan Lee** (1973) — *The Colors of Love: An Exploration of the Ways of Loving*
- **Hendrick & Hendrick** (1986) — *A Theory and Method of Love*, Journal of Personality and Social Psychology, 50(2), 392–402
- **Hendrick, Hendrick & Dicke** (1998) — Love Attitudes Scale: Short Form, *Journal of Social and Personal Relationships*, 15, 147–159

### 六种爱情风格

| 风格 | 英文 | 类型 | 核心特征 |
|------|------|------|----------|
| **激情型** | Eros | 基本型 | 强烈身体吸引、理想化伴侣、一见钟情倾向、追求深度融合 |
| **游戏型** | Ludus | 基本型 | 回避承诺、享受多样性、情感抽离、关系被视为愉悦消遣 |
| **陪伴型** | Storge | 基本型 | 友谊渐进式、安静的温情、共享兴趣、先友后爱 |
| **理智型** | Pragma | 复合型(Ludus+Storge) | 清单式择偶、实用标准筛选（学历/家庭/职业）、理性计算 |
| **依赖型** | Mania | 复合型(Eros+Ludus) | 占有欲强、情绪极端（狂喜↔绝望）、嫉妒心重、强烈需要回应 |
| **奉献型** | Agape | 复合型(Eros+Storge) | 利他无条件付出、不期待回报、自我牺牲、罕见 |

### 研究关键发现
- **Eros + Agape** → 正向预测关系满意度、亲密度、承诺
- **Ludus** → 负向预测关系质量
- **Mania** → 正向预测激情但也预测冲突和矛盾
- **性别差异**：男性 Ludus/Pragma 略高，女性 Storge/Agape 略高
- **伴侣相似性**：Eros/Ludus/Storge/Agape 在伴侣间显著相似，Pragma/Mania 不显著

### LAS 量表简版结构
- 原版 42 题 (每维度 7 题)
- 简版 18–24 题 (每维度 3–4 题)
- 5 点李克特量表 (1 = 非常不同意, 5 = 非常同意)

---

## 2. 成人依恋理论

### 来源
- **Hazan & Shaver** (1987) — Romantic love conceptualized as an attachment process, *JPSP*, 52(3), 511–524
- **Brennan, Clark & Shaver** (1998) — Self-report measurement of adult attachment, *Attachment Theory and Close Relationships*, Guilford
- **Bartholomew & Horowitz** (1991) — Attachment styles among young adults, *JPSP*, 61(2), 226–244

### ECR 量表双维度模型

| 维度 | 高分组特征 |
|------|-----------|
| **依恋焦虑** | 害怕被抛弃/拒绝、过度需要确认、分离恐惧、情绪波动 |
| **依恋回避** | 抗拒亲密、情感独立、不愿依赖他人、对浪漫关系悲观 |

### 四种依恋类型

| | 低回避 | 高回避 |
|------|---------|---------|
| **低焦虑** | **安全型** — 亲密与独立平衡 | **疏离型** — 否认亲密需求、强制自立 |
| **高焦虑** | **迷恋型** — 渴望亲密、嫉妒心重 | **恐惧型** — 既怕亲密又怕被拒 |

### 与 Lee 爱情风格的关系 (Levy & Davis, 1988)
- 安全型 ↔ Eros
- 回避型 ↔ Ludus（负向关联 Eros）
- 焦虑型 ↔ Mania
- 疏离型 ↔ Pragma（独立因子）

### ECR 量表参数
- 36 题 (焦虑 18 + 回避 18)
- 7 点量表
- Cronbach's α: 焦虑 = 0.91, 回避 = 0.94
- 短版 ECR-S: 12 题 (每维度 6 题)

---

## 3. 社会性开放倾向

### 来源
- **Simpson & Gangestad** (1991) — Individual differences in sociosexuality, *JPSP*, 60(6), 870–883
- **Webster & Bryan** (2007) — Sociosexual attitudes and behaviors: Why two factors are better than one, *JRP*, 41(2)

### 定义
**Sociosexuality**: 个体在缺乏情感亲密时对性关系的接受程度的个体差异。

### 两极

| 保守型 (Restricted) | 开放型 (Unrestricted) |
|---------------------|----------------------|
| 需要情感亲密才进入性关系 | 接受无情感投入的性关系 |
| 偏好忠诚、善良、负责任的伴侣 | 偏好外表吸引力、高社会地位伴侣 |
| 高宜人性、尽责性 | 高外向性、自恋 |

### 双因子结构
- **行为因子**：过去/预期的性伴侣数量
- **态度因子**：对随意性关系的态度与幻想

### 注意
本项目只保留与**恋爱态度**相关的部分（如对承诺的态度、择偶偏好），不涉及露骨性行为内容。将此维度转化为"关系观中的保守-开放性"。

---

## 4. 关系承诺与投资模型

### 来源
- **Rusbult** (1980) — Commitment and satisfaction in romantic associations, *JESP*, 16, 172–186
- **Rusbult, Martz & Agnew** (1998) — The Investment Model Scale, *Personal Relationships*, 5, 357–391
- **Le & Agnew** (2003) — Meta-analysis of the Investment Model, *Personal Relationships*, 10, 37–57

### 核心公式

```
承诺 = 满意度 + 投资规模 − 替代选择质量
```

### 三个预测因子

| 因子 | 定义 | 与承诺的相关 |
|------|------|-------------|
| **满意度** | 关系收获减期望水平的差距 | r = 0.68 |
| **投资规模** | 已投入且不可转移的资源（时间、情感、社交圈、共同财产） | r = 0.46 |
| **替代选择质量** | 最好的替代方案（其他伴侣/单身/事业等） | r = −0.48 |

### 四种关系维护行为
1. **顺应行为** (Accommodation) — 伴侣犯错时抑制破坏冲动
2. **牺牲意愿** (Willingness to Sacrifice) — 放弃个人利益
3. **认知互依** (Cognitive Interdependence) — 自我与他人的边界模糊（"我们"思维）
4. **感知优越性** (Perceived Superiority) — 贬低替代选项

### 本项目的应用
将此模型转化为"关系观"维度：**计划型**（高投资、长视距）、**自由型**（敏感替代选择）、**稳定型**（高满意度+高投资）、**探索型**（低投资+开放替代选择）。

---

## 5. 冲突沟通风格

### 来源
- **Rusbult** (1987) — EVLN 模型
- **Gottman** (1994, 2015) — 婚姻冲突研究

### Rusbult EVLN 模型

| | 建设性 | 破坏性 |
|------|--------|--------|
| **主动** | **表达 (Voice)** — 讨论、寻求建议、积极解决 | **离开 (Exit)** — 威胁离开、言语伤害 |
| **被动** | **忠诚 (Loyalty)** — 默默等待改善、维护伴侣 | **忽视 (Neglect)** — 回避讨论、冷暴力 |

### Gottman 四种冲突风格

| 风格 | 特征 | 健康程度 |
|------|------|----------|
| **易变型** (Volatile) | 频繁热烈辩论、高情绪高温情 | ✅ 健康（需 5:1 正负比） |
| **验证型** (Validating) | 礼貌讨论、共情妥协、冷静沟通 | ✅ 健康 |
| **回避型** (Avoidant) | 避免冲突、各自独立解决问题 | ✅ 健康（需双方共识） |
| **敌对型** (Hostile) | 防御、轻蔑、攻击、冷暴力 | ❌ 破坏性 |

### 四大破坏性沟通模式 (四骑士)
1. **批评** — 攻击人格而非行为
2. **轻蔑** — 傲慢、嘲讽、翻白眼（#1 离婚预测因子）
3. **防御** — 推卸、反诉、受害者姿态
4. **筑墙** — 心理/生理性退场

### 本项目的应用
将沟通偏好分为维度两端：**问题解决导向** ↔ **情绪回避导向**，测量个体在关系冲突中更倾向于主动沟通还是被动回避。

---

## 6. 中文量表修订参考

### ECR 中文版
- **李同归 & 加藤和生** (2006) — 发表于《心理学报》, 38(3), 399-406
  - 样本：371 名中国大学生
  - 良好内部一致性、重测信度（4 周间隔）、构想效度和效标效度
  - 被引 911 次，是国内 ECR 研究的基础文献
- **金艳 & 唐日新** (2007) — ECR-R 中文版
  - 焦虑 α = 0.94, 回避 α = 0.89
  - 与 SCL-90 效标效度 0.60–0.75

### LAS 中文版
- **曹慧、史占彪、张建新** (2007) — LAS-R 修订版 (23 题)
  - 原版 42 题拟合差
  - LAS-R: α = 0.45 (Ludus) ～ 0.80 (Agape)
  - Ludus 在中国文化中信度普遍偏低
- **齐齐哈尔版** (2008) — 1009 名大学生，22 题
  - α = 0.706 ～ 0.818
  - 6 因子结构在中国样本中得到验证

### 文化差异要点
- 中国样本中 Ludus（游戏型）信度偏低，可能与集体主义文化对随意恋爱的抑制有关
- 中国大学生的依恋回避得分通常高于西方样本
- "害怕型"（恐惧型依恋）在中国大学生中比例较高

---

## 7. 量表编制方法论

### 基本流程
1. 理论基础与研究目的明确
2. 编制或修订量表初稿
3. 专家评估（内容效度）
4. 预试（人数 = 分量表题数 × 3–5 倍）
5. 项目分析 (CR值、题总相关)
6. 因素分析（EFA + CFA）
7. 信度分析（Cronbach's α ≥ 0.70）
8. 效度分析（内容、效标、结构）

### 题目编写规范

| 原则 | 说明 |
|------|------|
| 用陈述句不用问句 | "我感到……" 而非 "你是否……？" |
| 第一人称单数 | "我觉得""我认为" |
| 避免术语和缩写 | 确保各教育水平被试都能理解 |
| 一个题目只测一个构念 | 避免双管问题 (double-barreled) |
| 题目具体不笼统 | 避免抽象表达 |
| 避免双重否定 | 增加认知负荷，降低信度 |
| 维度内题目 ≥ 4 题 | 保证信度下限 |

### 反向题使用规范
- **作用**：减少反应偏差（默认同意、极端反应）
- **风险**：降低信度、增加认知负荷、可能产生独立方法因子
- **建议**：保量但不超量（建议反向题占总题量 15%–25%）
- **必须**：计分前反向重编码 (1→5, 2→4, 4→2, 5→1)

### 李克特量表要点
- **5 点量表**（最经典）：非常不同意 / 不同意 / 一般 / 同意 / 非常同意
- 计分：1–5 分
- 每点建议标注文字（不只是两端）
- 保留中点给持中性态度的被试

### 信度要求
| α 值 | 评价 |
|------|------|
| > 0.90 | 优秀 |
| 0.80–0.90 | 良好 |
| 0.70–0.80 | 可接受 |
| < 0.70 | 需修订 |

---

## 8. 人格测评网站 UX 设计参考

### 题目流程
- **一题一屏**（非整页滚动）：减少疲劳、提高完成率
- **进度条常显**："第 12/32 题"
- **按钮防抖**：点"下一题"后立即禁用
- **状态持久化**：答案增量存储，支持断点续填

### 结果页结构（参考 16personalities 模式）
1. **Hero 区** — 类型名称 + 一句话定义 + 大插图
2. **维度分解** — 雷达图（4–6 轴）+ 维度百分比条
3. **深度解读** — 优势/盲点/适合相处方式 卡片式布局
4. **社交层** — 分享按钮 + 重新测试

### 雷达图最佳实践
| 决策 | 推荐方案 |
|------|----------|
| 轴数 | 4–8 轴（6 轴最佳） |
| 刻度 | 统一 0–100 归一化 |
| 填充 | 半透明 fill + 渐变阴影 |
| 动画 | 生长/淡入动画 |
| 响应式 | 移动端 100% 宽度 |

### 设计原则
- 渐进式信息披露（滚动加载，不一屏全出）
- 中性非评判语言（无"好/坏/异常"）
- 免责声明显著（"不构成诊断"）
- 移动优先（卡片式垂直堆叠）
- 分享感强（鼓励社交传播）

---

## 9. 本项目的维度与类型映射方案

### 维度设计（8 个）

| 维度 | 理论基础 | 测量内容 |
|------|----------|----------|
| **激情投入** | Eros (Lee) + 激情 (Sternberg) | 一见钟情倾向、理想化伴侣、情感强度 |
| **游戏心态** | Ludus (Lee) | 回避承诺、享受多选择、情感抽离 |
| **陪伴亲厚** | Storge (Lee) | 友谊式爱情、渐进亲密、共享兴趣 |
| **理性规划** | Pragma (Lee) + 投资模型 (Rusbult) | 清单式择偶、实用标准、长期规划 |
| **依恋焦虑** | 依恋焦虑 (ECR) | 害怕被弃、需要确认、关系不安 |
| **依恋回避** | 依恋回避 (ECR) | 抗拒亲密、情感独立、自我保护 |
| **奉献利他** | Agape (Lee) | 无条件付出、自我牺牲、伴侣优先 |
| **沟通开放** | 冲突处理 (Gottman + Rusbult) | 问题讨论意愿、情绪表达、冲突态度 |

### 结果类型设计（8 种）

| 类型 | 配套维度组合 |
|------|------------|
| **热烈投入型** | 高激情 + 低回避 + 高奉献 |
| **稳定陪伴型** | 高陪伴 + 低焦虑 + 低游戏 |
| **理性规划型** | 高理性 + 低焦虑 + 中回避 |
| **慢热观察型** | 高回避 + 高陪伴（但低激情） |
| **高敏依恋型** | 高焦虑 + 高激情 + 低回避 |
| **自由探索型** | 高游戏 + 低焦虑 + 高回避 |
| **回避独立型** | 高回避 + 低焦虑 + 低奉献 |
| **矛盾拉扯型** | 高焦虑 + 高回避 + 高游戏 |

### 混合型判定规则
- 当第一名维度得分与第二名差距 ≤ 5 分时，判定为混合型
- 混合型示例："稳定陪伴 × 慢热观察 混合倾向"

### 一致性评分规则
1. 极端一致回答（全部选"一般"或全部选同一极值）→ 低一致性警告
2. 反向题与正向题冲突（同一维度的正反题得分模式矛盾）→ 中等一致性警告
3. 维度内方差过大 → 提示"该维度回答不稳定"

### 计分流程
```
原始答案 (1-5)
  → reverse=true: 反向计分 (6 - score)
  → 维度聚合 (求和)
  → 归一化至 0-100: (维度总分 - 最低可能分) / (最高可能分 - 最低可能分) × 100
  → 维度得分向量匹配类型模板
  → 输出主类型 + 次类型 + 各维度百分比
  → 计算一致性分数 (0-100)
```

---

## 10. Sternberg 爱情三角理论与 RELIC (2024)

### 来源
- **Sternberg** (1986) — A triangular theory of love, *Psychological Review*, 93(2), 119–135
- **Sternberg & Sternberg** (2024) — A RELIC theory of love, *Theory & Psychology*, 34, 671–698

### 经典三角理论

| 成分 | 定义 | 生理/行为表现 |
|------|------|-------------|
| **亲密 (Intimacy)** | 情感联结、理解、分享、支持 | 温暖感、信任感、自我暴露 |
| **激情 (Passion)** | 浪漫吸引、身体渴望、驱力 | 心跳加速、思念、性吸引 |
| **承诺 (Commitment)** | 短期决定去爱 + 长期决定维系 | 排他性、投入规划、共同愿景 |

### 七种爱情类型（三成分组合）

| 类型 | 亲密 | 激情 | 承诺 | 示例 |
|------|------|------|------|------|
| 喜欢 | ✅ | | | 友谊 |
| 迷恋 | | ✅ | | 一见钟情、crush |
| 空洞之爱 | | | ✅ | 包办婚姻初期 |
| 浪漫之爱 | ✅ | ✅ | | 热恋期 |
| 伴侣之爱 | ✅ | | ✅ | 多年老夫老妻 |
| 愚昧之爱 | | ✅ | ✅ | 闪婚 |
| 完美之爱 | ✅ | ✅ | ✅ | 理想关系 |

### RELIC 理论（2024 年重大更新）

Sternberg 本人在 2024 年提出 RELIC (Real Love In Context) 理论，将三角理论嵌入更广泛的生态系统：

- **内系统 (Endosystem)**：传统三角理论（人际层面）+ 爱情故事理论（个人内部层面）
- **外系统 (Ecosystem)**：借鉴 Bronfenbrenner 生态模型，将爱置于五层嵌套环境系统
  - 微系统（伴侣互动）
  - 中系统（朋友家庭关系）
  - 外系统（社会环境）
  - 宏系统（文化价值观）
  - 时间系统（生命周期阶段）
- **核心洞见**：爱情不是脱离环境的孤立构念，必须在文化-社会-时间脉络中理解
- **三角爱情量表 (TLS)** 已在 25 个国家验证跨文化适用性

### 对本项目的启发
- 在结果解读中融入"关系发展阶段"的考量（如：慢热型的陪伴式爱情是另一种成熟的爱的形态）
- 避免把"只有三成分全满才是最好的爱"作为隐含预设
- Langlais et al. (2024) 用三角理论定义 **situationship**：亲密+激情但无承诺 → 这正是当代大学生的典型困境

---

## 11. 当代青年恋爱趋势 (2024–2025)

### 来源
- Hinge D.A.T.E. Report (2025) — 全球约 30,000 名用户
- Rosier (JMU, 2025) — Gen Z 依恋与社交媒体研究
- Copenhaver & Whitaker (2025) — "just talking" 标签质性研究

### 核心趋势

#### 1. Situationship 的普遍性与困境
- **67% 的 Gen Z** 在过去一年内至少经历一次 situationship
- 年轻人**渴望长期有意义的亲密关系**，但被非承诺文化（situationship、talking phase、app 文化）困住
- "just talking" 标签既提供自由，也充当**抵御深层承诺的保护盾**

#### 2. "有意图的约会" (Intentional Dating) — 反制运动
- Gen Z 开始拒绝暧昧不清，追求**提前设定边界、坦诚表达需求**
- Micro-mance：小而有意义的日常关怀（分享 meme、歌单、内部笑话）取代宏大浪漫
- Future-proofing：从第一天就开始对齐财务观、价值观、生活目标

#### 3. 社交媒体的双重影响
- **68% 的年轻人**承认发关系内容是图点赞/评论验证
- **"选择过载"**：使用多个交友 app 的人结束关系的概率高 41%
- TikTok 流行心理学（"orange peel theory"、 "bare minimum boyfriend"）将复杂关系动力学简化为病毒式测试
- **"Getting the ick"** 成为 Gen Z 因小事突然终止关系的 TikTok 式理由

#### 4. 沟通鸿沟
- Gen Z 比 Millennials **更害怕开启深度对话**（高 36%）
- **95% 的 Gen Z 害怕被拒绝**，56% 表示这种恐惧阻碍他们追求关系
- 性别误判：42% Gen Z 女性认为男性不想深度对话，但 **65% Gen Z 男性表示他们想**
- COVID 封锁后遗症：Gen Z 比 Millennials 对与新人交谈更紧张（高 47%）

#### 5. AI 介入约会
- 58% Gen Z 男性使用 AI 帮助搭讪
- 仅 34% 用户对 AI 代写消息感到舒适 → 外包脆弱性 vs. 渴望真实

#### 6. 依恋回避的流行
- Dr. Jennie Rosier (2025) 发现**疏离型依恋模式已渗透 Gen Z 约会文化**
- 约会 app 提供**策划好的低风险互动**，强化回避倾向
- 建议将**依恋素养**纳入大学生恋爱教育

### 对本项目的启发
- 题目中适度融入当代场景（如"长时间不回消息"、"同时和多人保持联系"）
- 结果解释中关注"对亲密的渴望 vs. 对承诺的恐惧"这一核心张力
- 语言风格要切中当代年轻人的真实困惑，而非说教

---

## 12. 2024–2025 中国大学生婚恋观调查报告

### 来源
- 中国科学院心理研究所 (2025.04) — 《2024年成年人与在校大学生婚育观调查报告》
- 样本：全国 31 省 55,781 名大学生 + 7,355 名成年人
- 计迎春、赵猛、韦熠 (2025) — 《中国婚姻制度变迁的日常生活逻辑》，《妇女研究论丛》

### 关键数据

| 指标 | 比例 |
|------|------|
| 认为"婚姻不重要"的大学生 | **51.8%** |
| 认为"子女不重要"的大学生 | **59.4%** |
| 认为"爱情不重要"的大学生 | **45.4%** |
| 接受"结婚但不生孩子" | **70.0%** |
| 接受"生孩子但不结婚" | **11.0%** |
| 目前无伴侣 | **69.6%** |
| 有伴侣 | **30.4%** |
| 单身中"非常希望脱单" | 男 21.9% vs 女 7.2% |
| 单身中"完全不想脱单" | 11.1% |

### 核心发现

1. **性别差距巨大**：女性婚育意愿显著低于男性
   - 认为"婚姻不重要"的性别差：**37.6%**（女 > 男）
   - 根源：**"母职惩罚"恐惧**（生育后职业晋升受阻）、**互联网性别对立事件放大恐婚**

2. **"婚恋松紧带"模式**（计迎春等，2025）：
   - 恋爱未必走向婚姻，但婚姻以爱情为前提
   - "**恋爱成为一种以情绪价值为标签的奢侈品**"——进入和维系恋爱关系难度上升
   - "先立业后成家"成为两性共识

3. **家庭背景影响链**：
   - 父母婚姻不幸福 → 子女婚育意愿降低
   - 父母文化程度高 → 子女倾向推迟/放弃生育

4. **恋爱与心理健康**：
   - 无恋人的男生抑郁风险（4.2%）> 有恋人者（2.1%）
   - 单身大学生中 12.2%"非常希望脱单"，46.6%"比较希望"

### 对本项目的启发
- 题目语言需关注当代"不主动、不拒绝、不负责"的回避型恋爱文化
- 结果解读中不对"婚育意愿低"做价值评判
- 理解"先立业后成家"已经是中国年轻人的主流叙事
- 性别差异是真实存在的结构性特征，题目中需平衡表达

---

## 13. 最新关系科学前沿 (2024–2025)

### A. 人际神经同步 (INS) — 爱情在大脑中的证据

- **伴侣面对失败时，happy反馈 > angry反馈**能提升情绪同步和合作表现（He et al., 2025, *Biological Psychology*）
- **满意度匹配的伴侣**共看情感视频时前额叶神经同步更高（Heng et al., 2025, *NeuroSci*）
- **面对面沟通 > 视频通话**：浪漫伴侣在面对面时的前额叶 INS 显著高于视频（Wu et al., 2025, *Social Cognitive and Affective Neuroscience*）
- 2024 年元分析（17 项研究，1149 对）确认伴侣前额叶-颞叶-顶叶 INS 稳健存在

### B. 依恋与共情准确性 — "爱在翻译中丢失"

- **回避型个体不能准确感知伴侣的正面情绪**：在爱情对话中，回避者会错过伴侣的温暖和亲密信号，不是因为悲观，而是无法追踪伴侣正面感受的波动（Gauvin et al., 2024, *PSPB*）
- **安全型依恋 → 更高的皮质醇共振**：安全者对自己伴侣的压力反应生理同步更强 → 双刃剑：促进共情但也增加过度共情压力风险（Gallistl et al., 2025, *Scientific Reports*）

### C. 嫉妒 → 矛盾

- 嫉妒（自身 + 感知伴侣嫉妒）→ 关系矛盾心理增加
- 路径：嫉妒 → 同时高估伴侣配偶价值 + 信任降低 → 矛盾（Đurić et al., 2025, *Emotion*）

### D. 微笑同步 — 关系健康的行为生物标记

- 非困扰伴侣的笑容同步水平显著高于寻求治疗的伴侣
- 发生在更短的时间窗内（Machluf-Ruttner et al., 2025, *Emotion*）

### E. 关系满意度的网络分析 — "绘制爱情地图"

- 510 名女性 + 300 名男性网络分析（Schulz et al., 2025, *Frontiers in Psychology*）
- 关系满意度的**非冗余预测因子**：不安全依恋（负）、信任（正）、互惠性（正）、性满意度（正）
- **男性和女性的网络结构大体相似**——挑战性别差异预设

### F. 关系中的自主性

- **日常自主感**（做真实的自己）中介了依恋不安全 → 低关系满意度
- 自主性 ≠ 独立，而是基于真实自我价值的行动（Genesse et al., 2025, *JMFT*）

### G. "五种爱语"受挑战

- 2025 年预注册研究（499 人）：不足一半的人有明确的"主要爱语"
- 对爱语的满意度并不比对其他爱的行为的满意度更强地预测关系质量
- **语言肯定、鼓励个人成长、困难时陪伴、负责任**才是最强预测因子

### H. Love and Rejection Messages Theory (LRMT, 2025)

- Marici (2025, *Frontiers in Psychology*) 基于 12 年 300+ 对濒临离婚伴侣的临床经验
- 提出**日常爱与拒绝的信息交换**是塑造浪漫关系的基本单元

### I. 超越 Alpha/Beta：向量兼容性模型

- 2025 年预印本（400 对伴侣）：用大五人格 + 依恋 + 权力动态预测 R² = 0.52
- **特质互补** × 文化背景 × 依恋安全共同预测伴侣满意度，而非任何单一特质

### 对本项目的启发
- 结果卡片中加入"自主性"维度——好的恋爱不是失去自我
- 中文量表中 Ludus 信度低 → 用更含蓄的方式测量"游戏心态"（如"同时和多个人保持联系"而非直接的"享受多样性"）
- 强调"回避型个体可能错过爱的信号"——这一发现对用户的自我觉察有价值
- 网络分析的发现（信任 + 互惠性）可融入结果文案

---

## 参考来源

1. Lee, J. A. (1973). *The Colors of Love: An Exploration of the Ways of Loving*. New Press.
2. Hendrick, C., & Hendrick, S. (1986). A theory and method of love. *Journal of Personality and Social Psychology, 50*(2), 392–402.
3. Hendrick, C., Hendrick, S., & Dicke, A. (1998). The Love Attitudes Scale: Short form. *Journal of Social and Personal Relationships, 15*, 147–159.
4. Hazan, C., & Shaver, P. R. (1987). Romantic love conceptualized as an attachment process. *Journal of Personality and Social Psychology, 52*(3), 511–524.
5. Brennan, K. A., Clark, C. L., & Shaver, P. R. (1998). Self-report measurement of adult attachment. In J. A. Simpson & W. S. Rholes (Eds.), *Attachment Theory and Close Relationships* (pp. 46–76). Guilford Press.
6. Bartholomew, K., & Horowitz, L. M. (1991). Attachment styles among young adults. *Journal of Personality and Social Psychology, 61*(2), 226–244.
7. Simpson, J. A., & Gangestad, S. W. (1991). Individual differences in sociosexuality. *Journal of Personality and Social Psychology, 60*(6), 870–883.
8. Rusbult, C. E. (1980). Commitment and satisfaction in romantic associations. *Journal of Experimental Social Psychology, 16*, 172–186.
9. Rusbult, C. E., Martz, J. M., & Agnew, C. R. (1998). The Investment Model Scale. *Personal Relationships, 5*, 357–391.
10. Le, B., & Agnew, C. R. (2003). Commitment and its theorized determinants: A meta-analysis of the Investment Model. *Personal Relationships, 10*, 37–57.
11. Gottman, J. M. (1994). *What Predicts Divorce?* Lawrence Erlbaum Associates.
12. 李同归, & 加藤和生. (2006). 成人依恋的测量：亲密关系经历量表（ECR）中文版. *心理学报, 38*(3), 399–406.
13. 曹慧, 史占彪, & 张建新. (2007). 爱情观量表在中国学生群体中的修订. *中国临床心理学杂志, 15*(5), 459–462.
14. Levy, M. B., & Davis, K. E. (1988). Lovestyles and attachment styles compared. *Journal of Social and Personal Relationships, 5*, 439–471.
15. Sternberg, R. J. (1986). A triangular theory of love. *Psychological Review, 93*(2), 119–135.
16. Sternberg, R. J., & Sternberg, K. (2024). A RELIC theory of love. *Theory & Psychology, 34*, 671–698.
17. Langlais, M. et al. (2024). Defining and describing situationships. *Sexuality & Culture*.
18. Rosier, J. (2025). Gen Z dating & dismissive attachment. James Madison University.
19. Gauvin, S. et al. (2024). Love lost in translation: Avoidant individuals inaccurately perceive their partners' positive emotions. *Personality and Social Psychology Bulletin*.
20. Schulz, S. et al. (2025). Mapping love: A personality-centered network analysis of relationship satisfaction. *Frontiers in Psychology*.
21. Đurić, M. et al. (2025). Mixed signals: Romantic jealousy and ambivalence in relationships. *Emotion*.
22. Machluf-Ruttner, R. et al. (2025). Smile synchrony in nondistressed and therapy-seeking couples. *Emotion*.
23. Genesse, D. et al. (2025). Being me while loving you: The role of autonomy. *Journal of Marital and Family Therapy*.
24. Flicker, S. et al. (2025). Revisiting the Five Love Languages framework. *Journal of Marital and Family Therapy*.
25. Marici, M. (2025). Love and Rejection Messages Theory. *Frontiers in Psychology*.
26. 中国科学院心理研究所 (2025). 2024年成年人与在校大学生婚育观调查报告. 《心理健康蓝皮书》.
27. 计迎春, 赵猛, & 韦熠. (2025). 中国婚姻制度变迁的日常生活逻辑. 《妇女研究论丛》(6).
28. He, Z. et al. (2025). Smile when life is stranded: Positive feedback promotes romantic couples' cooperation and neural synchrony. *Biological Psychology*.
29. Wu, X. et al. (2025). Love in the time of Zoom: How intimacy modulates brain and behavior synchrony. *Social Cognitive and Affective Neuroscience*.
30. Gallistl, M. et al. (2025). Securely stressed: Association between attachment and empathic stress. *Scientific Reports*.
