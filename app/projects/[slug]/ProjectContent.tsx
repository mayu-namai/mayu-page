"use client";

const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
import { researches } from "@/lib/data";
import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import PublicationsList from "@/components/PublicationsList";

export default function ProjectContent({ slug }: { slug: string }) {
  const project = researches.find((r) => r.slug === slug)!;
  const { lang } = useLang();
  const en = lang === "en";

  const title = en ? (project.titleEn ?? project.title) : project.title;
  const description = en ? (project.descriptionEn ?? project.description) : project.description;

  return (
    <main className="min-h-screen bg-[#FDFAFC] pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6">

        <Link
          href="/#research"
          className="inline-flex items-center gap-1 text-xs min-[480px]:text-sm text-gray-400 hover:text-[#464043] transition-colors mb-10"
        >
          ← Projects
        </Link>

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
