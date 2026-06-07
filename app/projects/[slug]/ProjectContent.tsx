"use client";

const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
import { researches } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLang } from "@/contexts/LanguageContext";
import PublicationsList from "@/components/PublicationsList";

export default function ProjectContent({ slug }: { slug: string }) {
  const project = researches.find((r) => r.slug === slug)!;
  const router = useRouter();
  const { lang } = useLang();
  const en = lang === "en";

  const title = en ? (project.titleEn ?? project.title) : project.title;
  const description = en ? (project.descriptionEn ?? project.description) : project.description;

  return (
    <main className="min-h-screen bg-[#FDFAFC] pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6">

        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-1 text-xs min-[480px]:text-sm text-gray-400 hover:text-[#464043] transition-colors mb-10"
        >
          ← Projects
        </button>

        {project.image && (
          <div className="w-full bg-white mb-10 shadow-[4px_4px_20px_-4px_rgba(70,64,67,0.14)]">
            <img
              src={`${bp}${project.image}`}
              alt={title}
              className="w-full h-auto object-contain"
            />
          </div>
        )}

        <h1
          className="text-xl min-[480px]:text-3xl font-normal text-[#464043] mb-6"
          style={{ fontFamily: '"Yu Mincho", "游明朝", "YuMincho", serif' }}
        >
          {title}
        </h1>

        <p className="text-xs min-[480px]:text-sm text-gray-500 leading-[1.9] mb-10 whitespace-pre-line">
          {description}
        </p>

        {project.keywords.length > 0 && (
          <div className="mb-10">
            <p className="text-xs min-[480px]:text-sm font-semibold text-[#464043] mb-2">Keywords</p>
            <p className="text-xs min-[480px]:text-sm text-gray-500 flex flex-wrap gap-x-1">
              {project.keywords.map((kw, i) => (
                <span key={kw}>
                  {kw}{i < project.keywords.length - 1 && <span className="mx-1 text-gray-300">·</span>}
                </span>
              ))}
            </p>
          </div>
        )}

        {project.paper && (
          <div className="flex items-center gap-6 text-xs min-[480px]:text-sm text-gray-500">
            <a href={project.paper} target="_blank" rel="noopener noreferrer" className="hover:text-[#464043] transition-colors underline underline-offset-4 decoration-gray-300">Paper</a>
          </div>
        )}

        {slug === "tangible-memories" && (
          <>
          {/* Summary */}
          <div className="mt-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-gray-300" />
              <h2 className="text-xl min-[480px]:text-3xl font-normal text-[#464043] whitespace-nowrap"
                style={{ fontFamily: '"Yu Mincho", "游明朝", "YuMincho", serif' }}>
                Summary
              </h2>
              <div className="flex-1 h-px bg-gray-300" />
            </div>
            <div className="text-xs min-[480px]:text-sm text-gray-500 leading-[1.9] space-y-5">
              <p>{en
                ? "We take countless photos to hold onto precious moments — yet those memories end up scattered across hundreds of files, rarely revisited and never quite complete. Any single photo captures only a fragment: a good angle here, a better expression there, a background that only appears in another shot."
                : "大切な瞬間を残そうと，私たちはたくさんの写真を撮る．でも，それらの記憶は何百枚ものファイルに散らばったまま，ほとんど見返されることがない．どの1枚も，記憶のほんの断片でしかない——ある写真には良い表情が，別の写真には好きな背景が，また別の写真には忘れたくない瞬間が写っている．"}
              </p>
              <p>{en
                ? "Tangible Memories integrates multiple photos to generate a 3D figure that captures the best of each — the right expression, the right pose, the right moment — condensing memories scattered across photos into a single, tangible form."
                : "Tangible Memories は，複数の写真を統合し，それぞれのいいところを凝縮した3Dフィギュアを生成します．最良の表情，好きなポーズ，残しておきたい瞬間——写真に散らばった記憶を，手で触れられる一つの形にします．"}
              </p>
              <p>{en
                ? "Rather than picking the \"best\" photo and discarding the rest, Tangible Memories brings all of them together — turning scattered digital memories into something you can see, touch, and keep."
                : "「一番いい写真」を選んで他を諦めるのではなく，すべての写真を一つに．Tangible Memoriesは，散らばったデジタルの記憶を，棚に飾れる形に凝縮します．"}
              </p>
            </div>
          </div>
          </>
        )}

        {slug === "vignette" && (
          <>
          {/* Demo Video */}
          <div className="mt-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-gray-300" />
              <h2 className="text-xl min-[480px]:text-3xl font-normal text-[#464043] whitespace-nowrap"
                style={{ fontFamily: '"Yu Mincho", "游明朝", "YuMincho", serif' }}>
                Demo Video
              </h2>
              <div className="flex-1 h-px bg-gray-300" />
            </div>
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/qBnqfbKda-c"
                title="VigNette Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Summary */}
          <div className="mt-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-gray-300" />
              <h2 className="text-xl min-[480px]:text-3xl font-normal text-[#464043] whitespace-nowrap"
                style={{ fontFamily: '"Yu Mincho", "游明朝", "YuMincho", serif' }}>
                Summary
              </h2>
              <div className="flex-1 h-px bg-gray-300" />
            </div>
            <div className="text-xs min-[480px]:text-sm text-gray-500 leading-[1.9] space-y-5">
              <p>{en
                ? "In recent years, a wide range of summarization techniques for video data have been proposed. However, most of them are limited to a \"compress long video into short video\" approach."
                : "近年、動画データに対してさまざまな要約手法が提案されてきた。しかし、その多くは「長い動画を短い動画にする」というアプローチにとどまっている。"}
              </p>
              <p>{en
                ? "What if we could convert a video into a single still image? If the key information could be captured in one image while preserving the content and atmosphere of the video, one could grasp the essence of the video at a glance."
                : "では、動画を一枚の静止画に変換するとしたらどうだろうか？重要な情報を保持したまま一枚の画像にまとめることができれば、動画の内容や世界観を瞬時に把握できるのではないだろうか。"}
              </p>
              <p>{en
                ? "In response, this study proposes converting video into vignette illustrations, realizing a new form of video summarization through a single image. A vignette illustration is a visual expression format used in anime, games, and similar media, condensing the key elements of a video into a single diorama-like image."
                : "そこで本研究では、動画をヴィネットイラストへ変換することで、一枚の画像による新たな動画要約を実現する。ヴィネットイラストとは、アニメやゲームなどで用いられる表現形式で、動画内の主要な要素をジオラマのように一枚の絵の中に凝縮して視覚的に表現したものである。"}
              </p>
              <figure className="my-6">
                <img
                  src={`${bp}/p1_d1_vignette_examples.png`}
                  alt={en ? "Examples of actual vignette illustrations" : "実際のヴィネットイラストの例"}
                  className="w-full h-auto"
                />
                <figcaption className="text-center text-xs text-gray-400 mt-2">
                  {en ? "Examples of actual vignette illustrations" : "実際のヴィネットイラストの例"}
                </figcaption>
              </figure>
              <p>{en
                ? "We propose Video Image Generative Network, Transformed & Expanded (VigNette), a system that generates vignette illustrations from video. The system offers two modes:"
                : "本研究では、動画からヴィネットイラストを生成するシステム Video Image Generative Network, Transformed & Expanded（VigNette） を提案する。本システムは以下の2つのモードを備えている。"}
              </p>
              <ul className="list-disc list-inside space-y-1 pl-1">
                <li>{en
                  ? "Semiautomated generation mode: generates vignette illustrations reflecting user preferences"
                  : "半自動生成モード：ユーザの好みを反映しながらヴィネットイラストを生成する"}
                </li>
                <li>{en
                  ? "Automated generation mode: AI generates vignette illustrations automatically without user input"
                  : "自動生成モード：ユーザの入力なしに、AIが自動的にヴィネットイラストを生成する"}
                </li>
              </ul>
              <p>{en
                ? "In semiautomated mode, users can generate their ideal vignette illustration by selecting just two frames. Through a dedicated UI, the user selects one character frame — showing the main character — and one stage frame — showing the background and setting — and the illustration is generated intuitively from those choices."
                : "半自動生成モードでは、たった2枚のフレームを選ぶだけで、思い描いたヴィネットイラストを生成できる。専用のUIから、主要登場人物が映るキャラクタフレームと、背景・舞台が映るステージフレームをそれぞれ1枚ずつ選択するだけで、直観的に自分好みのヴィネットイラストを作成できる。"}
              </p>
              <p>{en
                ? "In automated mode, the system automatically selects one character frame showing the main character and multiple stage frames showing the background and setting, then generates a vignette illustration from them — no user input required."
                : "自動生成モードでは、VigNetteがキャラクタフレームを1枚、ステージフレームを複数枚自動的に選択し、それらをもとにヴィネットイラストを生成する。ユーザの入力は不要である。"}
              </p>
              <div className="my-6 space-y-6">
                {[
                  { src: "p1_d3_ch_ui.png",        captionJa: "(a) キャラクタフレーム選択画面（キャラクタ領域を赤枠で表示）", captionEn: "(a) Character frame selection (character region highlighted in red)" },
                  { src: "p1_d3_st_ui.png",         captionJa: "(b) ステージフレーム選択画面",  captionEn: "(b) Stage frame selection" },
                  { src: "p1_d3_selection_ui.png",  captionJa: "(c) 確認画面",                  captionEn: "(c) Confirmation screen" },
                ].map(({ src, captionJa, captionEn }) => (
                  <figure key={src}>
                    <img src={`${bp}/${src}`} alt={en ? captionEn : captionJa} className="w-full h-auto" />
                    <figcaption className="text-center text-xs text-gray-400 mt-2 leading-[1.6]">
                      {en ? captionEn : captionJa}
                    </figcaption>
                  </figure>
                ))}
              </div>
              <p>{en
                ? "Below are examples of vignette illustrations generated by VigNette. Outputs A–E are semiautomated results using Character Frames A–E and Stage Frames A–E respectively. Output X (red background) is the automated result, generated from Character X and Stage X — a composite of three representative stage frames."
                : "VigNetteによって生成されたヴィネットイラストの例が以下である。Output A〜EはそれぞれキャラクタフレームA〜EとステージフレームA〜Eを使用した半自動生成の結果、赤背景のOutput Xは自動生成の結果を示す。Output Xは、キャラクタXと3枚の代表ステージフレームを統合したステージXから生成される。"}
              </p>
              <figure className="my-6">
                <img
                  src={`${bp}/p1_d4_frames.png`}
                  alt={en ? "Frame images from Plants & Planets [1]" : "Plants & Planets [1] のフレーム画像"}
                  className="w-full h-auto"
                />
                <figcaption className="text-center text-xs text-gray-400 mt-2">
                  {en ? "Frame images from Plants & Planets [1]" : "Plants & Planets [1] のフレーム画像"}
                </figcaption>
              </figure>
              <figure className="my-6">
                <img
                  src={`${bp}/p1_d4_outputs.png`}
                  alt={en ? "Generation results using Plants & Planets [1] as input" : "Plants & Planets [1] を入力とした場合の生成結果"}
                  className="w-full h-auto"
                />
                <figcaption className="text-center text-xs text-gray-400 mt-2">
                  {en ? "Generation results using Plants & Planets [1] as input" : "Plants & Planets [1] を入力とした場合の生成結果"}
                </figcaption>
              </figure>
              <p>
                [1] Super Furball, Plants &amp; Planets, 2025, [Online]. Available: <a href="https://www.youtube.com/watch?v=r9C-p8F5WNs" target="_blank" rel="noopener noreferrer" className="hover:underline">https://www.youtube.com/watch?v=r9C-p8F5WNs</a>.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-gray-300" />
              <h2 className="text-xl min-[480px]:text-3xl font-normal text-[#464043] whitespace-nowrap"
                style={{ fontFamily: '"Yu Mincho", "游明朝", "YuMincho", serif' }}>
                Contributions
              </h2>
              <div className="flex-1 h-px bg-gray-300" />
            </div>
            <PublicationsList />
          </div>

          <div className="mt-16">
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-gray-300" />
              <h2 className="text-xl min-[480px]:text-3xl font-normal text-[#464043] whitespace-nowrap"
                style={{ fontFamily: '"Yu Mincho", "游明朝", "YuMincho", serif' }}>
                Grants
              </h2>
              <div className="flex-1 h-px bg-gray-300" />
            </div>
            <ul className="space-y-3 text-xs min-[480px]:text-sm leading-[1.85]" style={{ fontFamily: "var(--font-noto-serif-jp), serif", fontWeight: 400 }}>
              {[
                { period: "2024–2029", label: en ? "JST Adopting Sustainable Partnerships for Innovative Research Ecosystem (ASPIRE), No. JPMJAP2401" : "JST 先端国際共同研究推進事業（ASPIRE），No. JPMJAP2401", url: "https://projectdb.jst.go.jp/grant/JST-PROJECT-24021287/" },
                { period: "2023–2026", label: en ? "Grant-in-Aid for Challenging Research (Exploratory), No. 23K18468" : "挑戦的研究（萌芽），No. 23K18468", url: "https://kaken.nii.ac.jp/grant/KAKENHI-PROJECT-23K18468/" },
                { period: "2023", label: en ? "KLL Master's Program Research Grant 2023" : "KLL 前期博士課程研究助成金 2023" },
                { period: "2023–2024", label: en ? "JST Advanced International Collaborative Research Program (AdCORP), No. JPMJKB2302" : "JST 先進国際共同研究プログラム（AdCORP），No. JPMJKB2302", url: "https://projectdb.jst.go.jp/grant/JST-PROJECT-23808817/", ended: true },
                { period: "2019–2023", label: en ? "Grant-in-Aid for Challenging Research (Pioneering), No. 20K20481" : "挑戦的研究（開拓），No. 20K20481", url: "https://kaken.nii.ac.jp/grant/KAKENHI-PROJECT-20K20481/", ended: true },
              ].map((g, i) => (
                <li key={i} className="flex gap-3 text-gray-600">
                  <span className="shrink-0 font-semibold w-5 text-right tabular-nums pt-px text-gray-400">{i + 1}.</span>
                  <div>
                    {g.url
                      ? <a href={g.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{g.label}</a>
                      : g.label
                    }
                    <span className="ml-2 text-gray-400 text-xs">{g.period}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          </>
        )}

        <div className="mt-16 flex justify-end">
          <Link href="/" className="inline-flex items-center gap-1 text-xs min-[480px]:text-sm text-gray-400 hover:text-[#464043] transition-colors">
            Home →
          </Link>
        </div>

      </div>
    </main>
  );
}
