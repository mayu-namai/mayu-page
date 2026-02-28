// =============================
// サイトデータ定義ファイル
// ここを編集して自分の情報に書き換えてください
// =============================

export const profile = {
  name: "山田 真由",
  nameEn: "Mayu Yamada",
  position: "博士後期課程",
  affiliation: "〇〇大学大学院 情報科学研究科",
  lab: "知能システム研究室",
  email: "m.yamada@example.ac.jp",
  googleScholar: "https://scholar.google.com/",
  researchGate: "",
  github: "https://github.com/",
  twitter: "",
  bio: "自然言語処理と機械学習を専門とする研究者です。特に大規模言語モデルの解釈可能性と、多言語処理における課題に取り組んでいます。",
  interests: ["自然言語処理", "機械学習", "大規模言語モデル", "多言語処理"],
};

export type Publication = {
  title: string;
  titleEn?: string;
  authors: string[];
  venue: string;
  year: number;
  type: "journal" | "conference" | "preprint" | "workshop";
  doi?: string;
  arxiv?: string;
  pdf?: string;
  note?: string;
};

export const publications: Publication[] = [
  {
    title: "大規模言語モデルにおける注意機構の解釈可能性分析",
    titleEn: "Interpretability Analysis of Attention Mechanisms in Large Language Models",
    authors: ["山田 真由", "田中 一郎", "鈴木 花子"],
    venue: "情報処理学会論文誌",
    year: 2025,
    type: "journal",
    doi: "https://doi.org/10.xxxx/ipsj.2025.001",
    note: "査読あり",
  },
  {
    title: "多言語テキスト分類のためのクロスリンガル転移学習",
    authors: ["山田 真由", "Smith, J.", "田中 一郎"],
    venue: "ACL 2024",
    year: 2024,
    type: "conference",
    arxiv: "https://arxiv.org/abs/2024.00000",
    note: "Oral Presentation",
  },
  {
    title: "低リソース言語における事前学習モデルの適応手法",
    authors: ["山田 真由", "鈴木 花子"],
    venue: "言語処理学会第30回年次大会 (NLP2024)",
    year: 2024,
    type: "conference",
    note: "優秀賞受賞",
  },
  {
    title: "プロンプトエンジニアリングを用いた質問応答システムの改善",
    authors: ["山田 真由", "佐藤 次郎"],
    venue: "NLP ワークショップ 2023",
    year: 2023,
    type: "workshop",
  },
];

export type Research = {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  link?: string;
};

export const researches: Research[] = [
  {
    title: "大規模言語モデルの解釈可能性",
    description:
      "LLM の内部表現や注意機構を分析し、モデルがどのように推論・判断しているかを明らかにする研究です。モデルの信頼性向上とデバッグに貢献することを目指しています。",
    keywords: ["LLM", "Interpretability", "Attention", "Probing"],
  },
  {
    title: "多言語・低リソース NLP",
    description:
      "資源が少ない言語に対して高性能な NLP モデルを構築する手法を研究しています。言語間の知識転移や、少量データでの効率的な学習手法に注力しています。",
    keywords: ["Multilingual", "Cross-lingual Transfer", "Low-resource NLP"],
  },
  {
    title: "対話システムの評価・改善",
    description:
      "大規模言語モデルを用いた対話システムの品質評価指標の設計と、プロンプトやファインチューニングによる応答品質の改善を研究しています。",
    keywords: ["Dialogue Systems", "Evaluation Metrics", "RLHF"],
  },
];

export type CareerItem = {
  period: string;
  title: string;
  organization: string;
  description?: string;
  type: "education" | "work" | "award";
};

export const careers: CareerItem[] = [
  {
    period: "2023年4月 ‒ 現在",
    title: "博士後期課程",
    organization: "〇〇大学大学院 情報科学研究科",
    description: "指導教員: 田中 一郎 教授",
    type: "education",
  },
  {
    period: "2021年4月 ‒ 2023年3月",
    title: "博士前期課程",
    organization: "〇〇大学大学院 情報科学研究科",
    type: "education",
  },
  {
    period: "2017年4月 ‒ 2021年3月",
    title: "学士課程 情報科学部",
    organization: "〇〇大学",
    type: "education",
  },
  {
    period: "2024年6月",
    title: "優秀発表賞",
    organization: "言語処理学会 第30回年次大会",
    type: "award",
  },
  {
    period: "2023年4月 ‒ 現在",
    title: "日本学術振興会 特別研究員 (DC1)",
    organization: "日本学術振興会",
    type: "work",
  },
  {
    period: "2022年8月 ‒ 2022年9月",
    title: "研究インターン",
    organization: "〇〇株式会社 AI研究所",
    type: "work",
  },
];
