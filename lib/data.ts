// =============================
// サイトデータ定義ファイル
// =============================

export const profile = {
  name: "生井 麻結",
  nameEn: "Mayu Namai",
  affiliation: "慶應義塾大学大学院 理工学研究科",
  affiliationEn: "Keio University, Graduate School of Science and Technology",
  lab: "鳴海研究室",
  labEn: "Narumi Lab",
  email: "namamayuga@gmail.com",
  twitter: "@ai_yasan",
  googleScholar: "",
  github: "",
  interests: ["Generative AI", "Human-Computer Interaction", "Multimedia"],
  bio: "I am an AI engineer in industry\nand a Ph.D. student at Keio University.\nI want to create a world where anyone can easily bring their imagination to life through generative AI.",
  bioJa: "企業でAIエンジニアとして働きながら，\n慶應義塾大学の博士課程に在籍しています．\n生成AIを活用して誰もが思い描いたことを\n簡単に実現できる世界にしたいです．",
  // 写真を追加する場合は public/ 以下のパスを入れてください (例: "/photos/1.jpg")
  photos: ["/my_images.png", "/my_images.png", "/my_images.png", "/my_images.png"] as string[],
};

export type Publication = {
  authors: string[];
  authorsEn?: string[];
  title: string;
  titleEn?: string;
  isEnglish: boolean;
  year: number;
  // journal: 学術誌論文 / intl-conference: 国際会議（査読あり）/ domestic-conference: 国内会議（査読あり）
  // workshop: 研究会・全国大会（査読なし）/ other: その他
  type: "journal" | "intl-conference" | "domestic-conference" | "workshop" | "other";
  citation: string;      // authors・title以降の引用文字列（日本語）
  citationEn?: string;   // 英語引用文字列
  note?: string;         // 受賞など
  noteIsAward?: boolean; // trueの場合は受賞アイコンで表示
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
    citation: "IEEE Transactions on Multimedia, 2026.",
    note: "to appear",
  },
  {
    authors: ["Mayu Namai", "Issei Fujishiro"],
    title: "VigNet: Semiautomatic generation of vignette illustrations from video",
    isEnglish: true,
    year: 2024,
    type: "journal",
    citation: "IIEEJ Transactions on Image Electronics and Visual Computing, Vol. 12, No. 1, pp. 15–22, 2024. Presented at IEVC 2024 as an oral presentation, National Cheng Kung University, Tainan, Taiwan, March 12, 2024.",
    link: "https://www.iieej.org/journal/trans-on-ievc-vol-12-no-1/",
  },
  // ── 国際会議（査読あり）──────────────────────
  // ── 国内会議（査読あり）──────────────────────
  {
    authors: ["生井 麻結", "藤代 一成"],
    authorsEn: ["Mayu Namai", "Issei Fujishiro"],
    title: "動画からのヴィネットイラスト半自動生成のプロトタイピング",
    titleEn: "Prototyping of semiautomatic generation of vignette illustrations from video",
    isEnglish: false,
    year: 2023,
    type: "domestic-conference",
    citation: "Visual Computing 2023 予稿集，pp. 2:1–2:4．Visual Computing 2023にて口頭発表，芝浦工業大学豊洲キャンパス，2023年9月18日．",
    citationEn: "in proceedings of Visual Computing 2023, pp. 2:1–2:4. Presented at Visual Computing 2023 as an oral presentation, Shibaura Institute of Technology, September 18, 2023.",
  },
  // ── 研究会・全国大会（査読なし）──────────────
  {
    authors: ["生井 麻結", "藤代 一成"],
    authorsEn: ["Mayu Namai", "Issei Fujishiro"],
    title: "動画からのヴィネットイラスト半自動生成～ビューアの嗜好の反映～",
    titleEn: "Semiautomatic generation of vignette illustrations from video: Reflecting viewer preferences",
    isEnglish: false,
    year: 2023,
    type: "workshop",
    citation: "映像情報メディア学会技術報告，Vol. 47，No. 9，pp. 301–304，AIT2023-120．映像表現・芸術科学フォーラム 2023にてポスタ発表，東京工芸大学中野キャンパス，2023年3月6日．",
    citationEn: "in Proceedings of Expressive Japan 2023 (The Institute of Image Information and Television Engineers Technical Report, Vol. 47, No. 9, pp. 301–304, AIT2023-120). Presented at Expressive Japan 2023 as a poster presentation, Tokyo Polytechnic University, March 6, 2023.",
    note: "優秀ポスタ賞・企業賞（ヴォクセル）",
    noteIsAward: true,
  },
  {
    authors: ["生井 麻結", "藤代 一成"],
    authorsEn: ["Mayu Namai", "Issei Fujishiro"],
    title: "動画からのヴィネットイラスト半自動生成",
    titleEn: "Semiautomatic generation of vignette illustrations from video",
    isEnglish: false,
    year: 2023,
    type: "workshop",
    citation: "情報処理学会第85回全国大会講演論文集（2），pp. 933–934（6X-03）．情報処理学会第85回全国大会にて口頭発表，電気通信大学，2023年3月4日．",
    citationEn: "in Proceedings of the 85th National Convention of IPSJ, Vol. 2, pp. 255–256 (6X-03). Presented at the 85th National Convention of IPSJ as an oral presentation, The University of Electro-Communications, March 4, 2023.",
    note: "学生奨励賞",
    noteIsAward: true,
  },
  // ── その他 ──────────────────────────────────
  {
    authors: ["藤代 一成", "生井 麻結"],
    authorsEn: ["Issei Fujishiro", "Mayu Namai"],
    title: "ビジュアルインテリジェンス：AI駆動型グラフィックスの世界（2）VigNet：動画からのヴィネットイラスト半自動生成",
    titleEn: "Visual Intelligence: The World of AI-Driven Graphics (2) VigNet: Semiautomatic generation of vignette illustrations from video",
    isEnglish: false,
    year: 2023,
    type: "other",
    citation: "慶應テクノモール2023にてポスタ発表，東京国際フォーラム，2023年12月15日．",
    citationEn: "Presented at KEIO TECHNO-MALL 2023 as a poster presentation, Tokyo International Forum, December 15, 2023.",
  },
  {
    authors: ["生井 麻結", "藤代 一成"],
    authorsEn: ["Mayu Namai", "Issei Fujishiro"],
    title: "ヴィネットイラスト自動生成に向けたプロトタイピング",
    titleEn: "Prototyping toward automatic generation of vignette illustrations",
    isEnglish: false,
    year: 2022,
    type: "workshop",
    citation: "VCワークショップ 2022 in 諏訪湖にて口頭発表，長野，2022年11月25日–26日．講演要旨：画像電子学会誌，Vol. 52，No. 1，pp. 252–253，2023年1月．",
    citationEn: "Presented at Visual Computing Workshop 2022 in Lake Suwa as an oral presentation, Nagano, November 25–26, 2022. Abstract: The Journal of the Institute of Image Electronics Engineers of Japan, Vol. 52, No. 1, pp. 252–253, January 2023.",
  },
  {
    authors: ["生井 麻結", "藤代 一成"],
    authorsEn: ["Mayu Namai", "Issei Fujishiro"],
    title: "ヴィネットイラスト自動生成に向けたプロトタイピング",
    titleEn: "Prototyping toward automatic generation of vignette illustrations",
    isEnglish: false,
    year: 2022,
    type: "other",
    citation: "情報可視化合宿にてポスタ発表，東京工業大学，2022年9月24日–25日．",
    citationEn: "Presented at Information Visualization Camp as a poster presentation, Tokyo Institute of Technology, September 24–25, 2022.",
  },
];

export type Research = {
  slug: string;         // URLスラグ（例: "vignette"）
  label?: string;       // グリッドホバー表示名（省略時はtitle）
  title: string;        // 日本語タイトル
  titleEn?: string;     // 英語タイトル（見出し表示用）
  description: string;
  descriptionEn?: string; // 英語説明文
  keywords: string[];
  image?: string;       // public/ 以下のパス。省略時は "/hero.jpg"
  paper?: string;
  project?: string;
  hasPage?: boolean;    // 詳細ページが存在する場合 true
};

export const researches: Research[] = [
  {
    slug: "vignette",
    label: "#VigNette",
    title: "動画からのヴィネットイラスト生成",
    titleEn: "Generation of Vignette Illustrations from Video",
    description:
      "アニメ動画を入力として，動画の内容を要約しつつ世界観を反映するヴィネットイラストを生成します．半自動生成モードでは，ユーザの嗜好を反映したイラストを半自動的に生成でき，自動生成モードではAIが自動的にイラストを生成します．",
    descriptionEn:
      "Accepts an anime video as input, generates a vignette illustration that summarizes the content and reflects the world of the video. In semiautomatic mode, illustrations reflecting user preferences can be generated semiautomatically; in automatic mode, AI generates illustrations automatically.",
    keywords: ["Video Summarization", "Media Conversion", "Machine Learning", "World Perspective Visualization"],
    image: "/p1_vignette.png",
    hasPage: true,
  },
  // ── 以下、追加予定のプロジェクト ──────────────────────────
  {
    slug: "project-2",
    title: "準備中",
    titleEn: "Coming Soon",
    description: "準備中です．",
    descriptionEn: "Coming soon.",
    keywords: [],
    // image: "/research/project2.jpg",
  },
  {
    slug: "project-3",
    title: "準備中",
    titleEn: "Coming Soon",
    description: "準備中です．",
    descriptionEn: "Coming soon.",
    keywords: [],
    // image: "/research/project3.jpg",
  },
];

export type CareerItem = {
  period: string;
  periodEn?: string;
  title: string;
  titleEn?: string;
  organization: string;
  organizationEn?: string;
  description?: string;
  descriptionEn?: string;
  citationJa?: string;
  citationEn?: string;
  type: "education" | "work" | "research" | "award" | "scholarship";
};

export const careers: CareerItem[] = [
  // ── 学歴（新しい順）────────────────────────
  {
    period: "2025年10月 – 現在",
    periodEn: "Oct. 2025 – Present",
    title: "慶應義塾大学大学院 理工学研究科 博士課程",
    titleEn: "Keio University, Graduate School of Science and Technology, Ph.D. Program",
    organization: "",
    description: "鳴海研究室",
    descriptionEn: "Narumi Lab",
    type: "education",
  },
  {
    period: "2023年4月 – 2025年3月",
    periodEn: "Apr. 2023 – Mar. 2025",
    title: "慶應義塾大学大学院 理工学研究科 修士課程",
    titleEn: "Keio University, Graduate School of Science and Technology, Master's Program",
    organization: "",
    description: "藤代研究室",
    descriptionEn: "Fujishiro Lab",
    type: "education",
  },
  {
    period: "2019年4月 – 2023年3月",
    periodEn: "Apr. 2019 – Mar. 2023",
    title: "慶應義塾大学 理工学部 情報工学科",
    titleEn: "Keio University, Faculty of Science and Technology, Department of Information and Computer Science",
    organization: "",
    type: "education",
  },
  {
    period: "2016年4月 – 2019年3月",
    periodEn: "Apr. 2016 – Mar. 2019",
    title: "慶應義塾女子高等学校",
    titleEn: "Keio Girls Senior High School",
    organization: "",
    type: "education",
  },
  // ── 職歴（新しい順）────────────────────────
  {
    period: "2025年4月 – 現在",
    periodEn: "Apr. 2025 – Present",
    title: "AIエージェント開発に従事",
    titleEn: "AI Agent Development",
    organization: "民間企業",
    organizationEn: "Private Company",
    type: "work",
  },
  // ── 研究活動（新しい順）──────────────────────
  {
    period: "2024年10月 – 12月",
    periodEn: "Oct. – Dec. 2024",
    title: "JST支援による短期研究滞在",
    titleEn: "Short-term Research Visit (JST-funded)",
    organization: "University of California, Davis, Kwan-Liu Ma研究室",
    organizationEn: "University of California, Davis, Kwan-Liu Ma Lab",
    type: "research",
  },
  // ── 受賞（新しい順）────────────────────────
  {
    period: "2023年3月23日",
    periodEn: "Mar. 23, 2023",
    title: "中西奨励賞",
    titleEn: "Nakanishi Encouragement Award",
    organization: "慶應義塾大学 理工学部情報工学科 卒業研究",
    organizationEn: "Keio University, Department of Information and Computer Science",
    description: "約100名中6名",
    descriptionEn: "6 of approx. 100",
    citationJa: "生井 麻結：中西奨励賞，慶應大学理工学部情報工学科 卒業研究，2023年3月23日．学部生約100名の卒業研究から6件が選出．",
    citationEn: "Mayu Namai: the 2023 Nakanishi Encouragement Awards, Graduation Research, Department of Information and Computer Science, Faculty of Science and Technology, Keio University, March 23, 2023. Selected from 6 theses out of approximately 100 undergraduate students.",
    type: "award",
  },
  {
    period: "2023年3月6日",
    periodEn: "Mar. 6, 2023",
    title: "優秀ポスタ賞・企業賞（ヴォクセル）",
    titleEn: "Best Poster Award / studioVOXEL Award",
    organization: "映像表現・芸術科学フォーラム 2023",
    organizationEn: "Forum on Image Technology and Visual Computing 2023",
    description: "優秀ポスタ賞：48名中8名，企業賞：95名中1名",
    descriptionEn: "Best Poster Award: 8 of 48; studioVOXEL Award: 1 of 95",
    citationJa: "生井 麻結，藤代 一成：優秀ポスタ賞，企業賞（ヴォクセル），映像表現・芸術科学フォーラム 2023，2023年3月6日．優秀ポスタ賞は48名中8名選出，企業賞（ヴォクセル）は全発表者95名中1名選出．",
    citationEn: "Mayu Namai, Issei Fujishiro: Best poster awards and studioVOXEL award, in Proceedings of Expressive Japan 2023, March 6, 2023. Best Poster Award: selected from 8 out of 48 presenters. studioVOXEL award: selected from 1 out of 95 presenters.",
    type: "award",
  },
  {
    period: "2023年3月4日",
    periodEn: "Mar. 4, 2023",
    title: "学生奨励賞",
    titleEn: "Student Encouragement Award",
    organization: "情報処理学会 第85回全国大会",
    organizationEn: "IPSJ 85th National Convention",
    description: "1セクション内5名中2名",
    descriptionEn: "2 of 5 within a session",
    citationJa: "生井 麻結，藤代 一成：学生奨励賞，情報処理学会第85回全国大会，2023年3月4日．1セクション内の5名中2名選出．",
    citationEn: "Mayu Namai, Issei Fujishiro: Student encouragement awards, in Proceedings of the 85th National Convention of International Processing Society of Japan, March 4, 2023. Selected from 2 out of 5 presenters in the session.",
    type: "award",
  },
  // ── 奨学金 ─────────────────────────────────
  {
    period: "2025年秋学期",
    periodEn: "Fall 2025",
    title: "田村淳記念奨学金",
    titleEn: "Tamura Jun Memorial Scholarship",
    organization: "慶應義塾大学 理工学研究科",
    organizationEn: "Keio University, Graduate School of Science and Technology",
    description: "後期博士課程9月入学者対象・採用1名・給付額325,000円",
    descriptionEn: "For October-entry Ph.D. students; 1 recipient; ¥325,000",
    type: "scholarship",
  },
  {
    period: "2023年",
    periodEn: "2023",
    title: "KLL 前期博士課程研究助成金",
    titleEn: "KLL Master's Program Research Grant",
    organization: "慶應義塾先端科学技術研究センター（KLL）",
    organizationEn: "Keio Leading-edge Laboratory of Science & Technology (KLL)",
    type: "scholarship",
  },
];
