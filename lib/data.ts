// =============================
// サイトデータ定義ファイル
// =============================

export const profile = {
  name: "生井 麻結",
  nameEn: "Mayu Namai",
  position: "博士課程1年",
  affiliation: "慶應義塾大学大学院 理工学研究科",
  lab: "鳴海研究室",
  email: "nmimy2000@keio.jp",
  googleScholar: "",
  researchGate: "",
  github: "",
  twitter: "",
  interests: ["Human-Computer Interaction", "Multimedia", "Computer Graphics"],
  updatedAt: "2026年2月",
};

export type Publication = {
  authors: string[];
  title: string;
  isEnglish: boolean;
  year: number;
  // journal: 学術誌論文 / intl-conference: 国際会議（査読あり）/ domestic-conference: 国内会議（査読あり）
  // workshop: 研究会・全国大会（査読なし）/ other: その他
  type: "journal" | "intl-conference" | "domestic-conference" | "workshop" | "other";
  citation: string;  // authors・title以降の引用文字列
  note?: string;     // 受賞など
  doi?: string;
  arxiv?: string;
  pdf?: string;
  link?: string;
};

export const publications: Publication[] = [
  // ── 学術誌論文 ──────────────────────────────
  {
    authors: ["Mayu Namai", "Koya Narumi", "Kwan-Liu Ma", "Issei Fujishiro"],
    title: "VigNette: Generation of Vignette Illustrations from Video",
    isEnglish: true,
    year: 2026,
    type: "journal",
    citation: "IEEE Transactions on Multimedia, to appear, 2026.",
    note: "to appear",
  },
  {
    authors: ["Mayu Namai", "Issei Fujishiro"],
    title: "VigNet: Semiautomatic generation of vignette illustrations from video",
    isEnglish: true,
    year: 2024,
    type: "journal",
    citation: "IIEEJ Transactions on Image Electronics and Visual Computing, Vol. 12, No. 1, pp. 15–22, 2024.",
  },
  // ── 国際会議（査読あり）──────────────────────
  {
    authors: ["Mayu Namai", "Issei Fujishiro"],
    title: "VigNet: Semiautomatic generation of vignette illustrations from video",
    isEnglish: true,
    year: 2024,
    type: "intl-conference",
    citation: "The 8th IIEEJ International Conference on Image Electronics and Visual Computing (IEVC 2024), National Cheng Kung University, Tainan City, Taiwan, Oral Presentation, March 12, 2024.",
  },
  // ── 国内会議（査読あり）──────────────────────
  {
    authors: ["生井 麻結", "藤代 一成"],
    title: "動画からのヴィネットイラスト半自動生成のプロトタイピング",
    isEnglish: false,
    year: 2023,
    type: "domestic-conference",
    citation: "Visual Computing 2023 予稿集，pp. 2:1–2:4，Visual Computing 2023，芝浦工業大学豊洲キャンパス，口頭発表，2023年9月18日．",
  },
  // ── 研究会・全国大会（査読なし）──────────────
  {
    authors: ["生井 麻結", "藤代 一成"],
    title: "動画からのヴィネットイラスト半自動生成～ビューアの嗜好の反映～",
    isEnglish: false,
    year: 2023,
    type: "workshop",
    citation: "映像情報メディア学会技術報告，Vol. 47，No. 9，pp. 301–304，AIT2023-120，映像表現・芸術科学フォーラム 2023，東京工芸大学中野キャンパス，ポスタ発表，2023年3月6日．",
    note: "優秀ポスタ賞・企業賞（ヴォクセル）",
  },
  {
    authors: ["生井 麻結", "藤代 一成"],
    title: "動画からのヴィネットイラスト半自動生成",
    isEnglish: false,
    year: 2023,
    type: "workshop",
    citation: "情報処理学会第85回全国大会講演論文集（2），pp. 933–934（6X-03），情報処理学会第85回全国大会，電気通信大学，口頭発表，2023年3月4日．",
    note: "学生奨励賞",
  },
  // ── その他 ──────────────────────────────────
  {
    authors: ["藤代 一成", "生井 麻結"],
    title: "ビジュアルインテリジェンス：AI駆動型グラフィックスの世界（2）VigNet：動画からのヴィネットイラスト半自動生成",
    isEnglish: false,
    year: 2023,
    type: "other",
    citation: "慶應テクノモール2023，東京国際フォーラム，ポスタ発表，2023年12月15日．",
  },
  {
    authors: ["生井 麻結", "藤代 一成"],
    title: "ヴィネットイラスト自動生成に向けたプロトタイピング",
    isEnglish: false,
    year: 2022,
    type: "other",
    citation: "画像電子学会誌，Vol. 52，No. 1，pp. 244–253，2023，VCワークショップ 2022 in 諏訪湖，口頭発表，2022年11月25日–26日．",
  },
  {
    authors: ["生井 麻結", "藤代 一成"],
    title: "ヴィネットイラスト自動生成に向けたプロトタイピング",
    isEnglish: false,
    year: 2022,
    type: "other",
    citation: "情報可視化合宿，東京工業大学，ポスタ発表，2022年9月24日–25日．",
  },
];

export type Research = {
  title: string;
  description: string;
  keywords: string[];
  link?: string;
};

export const researches: Research[] = [
  {
    title: "動画からのヴィネットイラスト生成",
    description:
      "アニメ動画を入力として，動画の内容を要約しつつ世界観を反映するヴィネットイラストを生成します．半自動生成モードでは，ユーザの嗜好を反映したイラストを半自動的に生成でき，自動生成モードではAIが自動的にイラストを生成します．",
    keywords: ["Video Summarization", "Media Conversion", "Machine Learning", "World Perspective Visualization"],
  },
];

export type CareerItem = {
  period: string;
  title: string;
  organization: string;
  description?: string;
  type: "education" | "work" | "research" | "award" | "scholarship";
};

export const careers: CareerItem[] = [
  // ── 学歴（新しい順）────────────────────────
  {
    period: "2025年10月 – 現在",
    title: "慶應義塾大学大学院 理工学研究科 博士課程",
    organization: "",
    description: "鳴海研究室",
    type: "education",
  },
  {
    period: "2023年4月 – 2025年3月",
    title: "慶應義塾大学大学院 理工学研究科 修士課程",
    organization: "",
    description: "藤代研究室",
    type: "education",
  },
  {
    period: "2019年4月 – 2023年3月",
    title: "慶應義塾大学 理工学部 情報工学科",
    organization: "",
    type: "education",
  },
  {
    period: "2016年4月 – 2019年3月",
    title: "慶應義塾女子高等学校",
    organization: "",
    type: "education",
  },
  // ── 職歴（新しい順）────────────────────────
  {
    period: "2025年4月 – 現在",
    title: "AIエージェント開発に従事",
    organization: "民間企業",
    type: "work",
  },
  // ── 研究活動（新しい順）──────────────────────
  {
    period: "2024年10月 – 12月",
    title: "JST支援による短期研究滞在",
    organization: "University of California, Davis, Kwan-Liu Ma研究室",
    type: "research",
  },
  // ── 受賞（新しい順）────────────────────────
  {
    period: "2023年3月23日",
    title: "中西奨励賞",
    organization: "慶應義塾大学 理工学部情報工学科 卒業研究",
    description: "学部生約100名の卒業研究から6件選出",
    type: "award",
  },
  {
    period: "2023年3月6日",
    title: "優秀ポスタ賞・企業賞（ヴォクセル）",
    organization: "映像表現・芸術科学フォーラム 2023",
    description: "優秀ポスタ賞：48名中8名 / 企業賞：95名中1名",
    type: "award",
  },
  {
    period: "2023年3月4日",
    title: "学生奨励賞",
    organization: "情報処理学会 第85回全国大会",
    description: "1セクション内5名中2名選出",
    type: "award",
  },
  // ── 奨学金 ─────────────────────────────────
  {
    period: "2025年秋学期",
    title: "田村淳記念奨学金",
    organization: "慶應義塾大学 理工学研究科",
    description: "後期博士課程9月入学者対象・採用1名・給付額325,000円",
    type: "scholarship",
  },
];
