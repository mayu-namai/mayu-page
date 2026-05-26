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
                ? "Photographs taken on smartphones capture precious moments of our daily lives — family gatherings, travel destinations, celebrations with friends. Yet once stored in a digital album, these memories often remain locked behind a screen, inaccessible to the tactile sense that makes experiences truly vivid."
                : "スマートフォンで撮影した写真は，家族の集まりや旅先の風景，友人との思い出など，日常の大切な瞬間を記録している．しかし一度デジタルアルバムに収められると，これらの記憶は画面の奥に閉じ込められ，体験をより鮮明にする触覚的な感覚とは切り離されてしまう．"}
              </p>
              <p>{en
                ? "This project explores a new paradigm of memory preservation: converting user photos into personalized 3D figures that can be physically fabricated and held in one's hands. By combining multi-view reconstruction, generative image-to-3D models, and automatic texturing pipelines, the system reconstructs subjects from single or sparse images and produces print-ready 3D models."
                : "本プロジェクトでは，ユーザの写真を個人化された3Dフィギュアへと変換し，手で触れる形で物理出力できる新しい記憶保存のパラダイムを探求する．多視点復元，生成AIによる画像→3Dモデル変換，自動テクスチャリングパイプラインを組み合わせることで，単一または少数の画像から被写体を再構成し，3Dプリント可能なモデルを生成する．"}
              </p>
              <p>{en
                ? "A key challenge lies in handling the ambiguity inherent in single-image 3D reconstruction — occluded regions, uncertain geometry, and the diversity of subjects ranging from human figures to pets and objects. We address this by integrating diffusion-based prior knowledge with user-guided refinement, enabling the system to produce plausible and aesthetically coherent outputs even from low-quality or partially obscured photos."
                : "単一画像からの3D再構成に固有の曖昧さ―オクルージョン領域，不確かなジオメトリ，人物・ペット・物体など被写体の多様性―への対処が主要な課題である．本研究では，拡散モデルに基づく事前知識とユーザ誘導型の修正を統合することで，低品質または部分的に隠れた写真からも，もっともらしく美的に整合性のある出力を生成できるシステムを実現する．"}
              </p>
              <p>{en
                ? "The generated models are designed with fabrication constraints in mind: wall thickness, support geometry, and surface smoothness are automatically optimized for desktop FDM and resin 3D printers, allowing users to hold a physical replica of their memories within hours."
                : "生成されるモデルは造形制約を考慮して設計されており，壁厚・サポートジオメトリ・表面滑らかさをデスクトップFDMおよびレジン3Dプリンタ向けに自動最適化する．これにより，ユーザは数時間以内に思い出のフィジカルレプリカを手にすることができる．"}
              </p>
            </div>
          </div>

          {/* Approach */}
          <div className="mt-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-gray-300" />
              <h2 className="text-xl min-[480px]:text-3xl font-normal text-[#464043] whitespace-nowrap"
                style={{ fontFamily: '"Yu Mincho", "游明朝", "YuMincho", serif' }}>
                Approach
              </h2>
              <div className="flex-1 h-px bg-gray-300" />
            </div>
            <div className="text-xs min-[480px]:text-sm text-gray-500 leading-[1.9] space-y-5">
              <p>{en
                ? "The pipeline consists of three main stages. First, the subject is segmented from the background using a saliency-guided segmentation model. Second, a diffusion-based image-to-3D module generates a coarse 3D mesh from the segmented subject, using learned priors to fill occluded surfaces. Third, an automatic texturing step projects the original photo colors onto the mesh surface and inpaints missing regions with a texture diffusion model."
                : "パイプラインは3つの主要なステージから構成される．まず，顕著性に基づくセグメンテーションモデルを用いて被写体を背景から切り出す．次に，拡散モデルに基づく画像→3Dモジュールが，切り出した被写体から粗い3Dメッシュを生成し，学習済み事前知識でオクルージョン面を補完する．最後に，自動テクスチャリングステップで元の写真の色情報をメッシュ表面に投影し，欠損領域をテクスチャ拡散モデルでインペインティングする．"}
              </p>
              <p>{en
                ? "Users can interact with intermediate results through a lightweight web interface, adjusting segmentation boundaries, selecting preferred geometry variants, and specifying the desired figure scale. The final export includes both a colored OBJ file and a sliced file ready for common 3D printing software."
                : "ユーザは軽量なWebインターフェースを通じて中間結果に関与でき，セグメンテーション境界の調整，好みのジオメトリバリアントの選択，フィギュアのスケール指定が可能である．最終的な出力には，カラーOBJファイルと一般的な3Dプリントソフトウェア向けのスライス済みファイルの両方が含まれる．"}
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
