import { profile } from "@/lib/data";
import { CosmicSakuraIllustration } from "@/components/Decorations";

export default function HeroSection() {
  return (
    <div>
      {/* ── About / Profile section ── */}
      {/* pt-16 accounts for the fixed navbar height */}
      <section id="about" className="bg-white pt-24 pb-14 md:pt-28 md:pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">

            {/* Portrait — replace with <img src="/portrait.jpg"> when available */}
            <div className="shrink-0 self-center md:self-start">
              <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-xl shadow-slate-200 ring-1 ring-slate-100">
                <CosmicSakuraIllustration />
              </div>
            </div>

            {/* Profile info */}
            <div className="flex-1 min-w-0 pt-0 md:pt-4">

              {/* Japanese name — Noto Sans JP, bold for impact */}
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-1 leading-tight"
                style={{ fontFamily: "var(--font-noto), sans-serif" }}
              >
                {profile.name}
              </h1>

              {/* English name — Cormorant Garamond, generous letter-spacing */}
              <p
                className="text-xl md:text-2xl text-slate-400 mb-8 tracking-[0.18em]"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                {profile.nameEn}
              </p>

              {/* Affiliation / Mail */}
              <dl className="text-sm space-y-2.5 mb-8">
                <div className="flex gap-4 items-baseline flex-wrap">
                  <dt className="shrink-0 text-slate-400 font-semibold text-xs uppercase tracking-widest">
                    Affiliation
                  </dt>
                  <dd className="text-slate-700 leading-relaxed">
                    {profile.affiliation}　{profile.lab}
                  </dd>
                </div>
                <div className="flex gap-4 items-baseline">
                  <dt className="shrink-0 text-slate-400 font-semibold text-xs uppercase tracking-widest">
                    Mail
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-slate-700 hover:text-blue-600 hover:underline"
                    >
                      {profile.email}
                    </a>
                  </dd>
                </div>
              </dl>

              {/* Research interest badges — clean rounded pill */}
              <div className="flex flex-wrap gap-2 mb-6">
                {profile.interests.map((kw) => (
                  <span
                    key={kw}
                    className="inline-flex items-center px-3.5 py-1 text-sm text-slate-600 font-medium bg-white border border-slate-200 rounded-full shadow-sm select-none"
                  >
                    {kw}
                  </span>
                ))}
              </div>

              <p className="text-xs text-slate-400 text-right">{profile.updatedAt} 現在</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
