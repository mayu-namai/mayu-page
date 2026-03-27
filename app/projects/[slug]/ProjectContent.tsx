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

        <div className="flex items-center gap-6 text-xs min-[480px]:text-sm text-gray-500">
          {project.paper
            ? <a href={project.paper} target="_blank" rel="noopener noreferrer" className="hover:text-[#464043] transition-colors">Paper →</a>
            : <span className="text-gray-300">Paper</span>
          }
        </div>

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
                ? "In recent years, various summarization techniques have been proposed to address the increasing size of video data. However, most aim to compress information within the same modality, leading to inherent limitations in compression rates. Thus, to offset these effects, it is necessary to explore conversions to different modalities."
                : "近年、動画データの増加に対応するため、さまざまな要約手法が提案されてきた。しかし、これらの多くは同じモダリティ内で情報を圧縮することを目的としており、圧縮率には本質的な限界がある。そのため、これらの限界を補うには、異なるモダリティへの変換を検討する必要がある。"}
              </p>
              <p>{en
                ? "In response, this study focuses on vignette illustrations, which are still-image illustrations that refine and visually express the narrative content of entertainment media, such as animated works or games. If video content can be transformed into vignette illustrations, it becomes possible to retain core visual information while achieving a significantly higher compression rate than conventional techniques."
                : "本研究では、ヴィネットイラストに着目する。ヴィネットイラストとは、アニメ作品やゲームなどのエンターテインメントメディアの物語内容を精緻に抽出し、視覚的に表現する静止画イラストである。もし動画コンテンツをヴィネットイラストに変換できれば、主要な視覚情報を保持しつつ、従来手法よりも大幅に高い圧縮率を実現できる可能性がある。"}
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
                ? "To this end, we propose the Video Image Generative Network, Transformed & Expanded (VigNette), a system that generates vignette illustrations from videos, supporting both semiautomated generation that reflects user preferences and automated generation without user input."
                : "そこで本研究では、動画からヴィネットイラストを生成するシステムとして、Video Image Generative Network, Transformed & Expanded（VigNette）を提案する。本システムは、ユーザの好みを反映した半自動生成と、ユーザ入力なしでの自動生成の両方をサポートする。"}
              </p>
              <figure className="my-6">
                <img
                  src={`${bp}/p1_d2_vignette_flamework.png`}
                  alt={en ? "VigNette processing framework" : "VigNette の処理フレームワーク"}
                  className="w-full h-auto"
                />
                <figcaption className="text-center text-xs text-gray-400 mt-2">
                  {en ? "VigNette processing framework" : "VigNette の処理フレームワーク"}
                </figcaption>
              </figure>
              <p>{en
                ? "In VigNette, first, frames showing the full body of a character and frames showing the stage (i.e., everything except the characters) are extracted from the input video. These are defined as candidate character frames and candidate stage frames, respectively. The pipeline then splits into two branches. In the semiautomated process, the user manually selects one candidate character frame and one candidate stage frame. These are called the representative character frame and representative stage frame, and a stage caption is generated for the selected stage. In the automated process, VigNette automatically selects both the representative frames and the stage caption based on a predefined algorithm. Finally, VigNette generates two materials: the character material, defined as the extracted character region, and the stage material, defined as the extracted stage region. These are composited to produce the final vignette illustration."
                : "VigNetteでは，まず、入力動画からキャラクタ全身が写っているフレームと、ステージ（つまりキャラクタ以外のすべて）が写っているフレームを抽出します。それぞれを候補キャラクタフレームと候補ステージフレームと定義します。その後、パイプラインは二つの分岐に分かれます。半自動プロセスでは、ユーザが手動で候補キャラクタフレームの中から1枚、候補ステージフレームの中から1枚を選択します。これらをそれぞれ代表キャラクタフレーム、代表ステージフレームと呼び、選択されたステージに対してステージキャプションが生成されます。自動プロセスでは、VigNetteが事前に定められたアルゴリズムに基づき、代表フレームとステージキャプションの両方を自動的に選択します。最後に、VigNetteは二つの素材を生成します。キャラクタ素材は抽出されたキャラクタ領域、ステージ素材は抽出されたステージ領域として定義されます。これらを合成することで最終的なヴィネットイラストが生成されます。"}
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
                { period: "2023–2026", label: en ? "Grant-in-Aid for Challenging Research (Exploratory) \u201cAutomatic generation of vignette illustrations\u201d, No. 23K18468" : "挑戦的研究（萌芽）「ヴィネットイラストの自動生成」，No. 23K18468", url: "https://kaken.nii.ac.jp/grant/KAKENHI-PROJECT-23K18468/" },
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
