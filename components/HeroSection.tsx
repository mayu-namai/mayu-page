import { profile } from "@/lib/data";
import { CosmicSakuraIllustration } from "@/components/Decorations";

export default function HeroSection() {
  return (
    <div>
      {/* ── About / Profile section ── */}
      {/* pt-24 accounts for the fixed navbar height */}
      <section id="about" className="pt-24 pb-14 md:pt-28 md:pb-20" style={{ background: "#F0EDE5" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">

            {/* Portrait — replace with <img src="/portrait.jpg"> when available */}
            <div className="shrink-0 self-center md:self-start">
              <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-xl shadow-[#223F59]/15 ring-1 ring-[#A0B1DD]/30">
                <CosmicSakuraIllustration />
              </div>
            </div>

            {/* Profile info */}
            <div className="flex-1 min-w-0 pt-0 md:pt-4">

              {/* Japanese name */}
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-1 leading-tight"
                style={{ fontFamily: "var(--font-noto), sans-serif", color: "#223F59" }}
              >
                {profile.name}
              </h1>

              {/* English name */}
              <p
                className="text-xl md:text-2xl mb-8 tracking-[0.18em]"
                style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#2F4C73" }}
              >
                {profile.nameEn}
              </p>

              {/* Affiliation / Mail */}
              <dl className="text-sm space-y-2.5 mb-8">
                <div className="flex gap-4 items-baseline flex-wrap">
                  <dt className="shrink-0 font-semibold text-xs uppercase tracking-widest" style={{ color: "#A0B1DD" }}>
                    Affiliation
                  </dt>
                  <dd className="leading-relaxed" style={{ color: "#2F4C73" }}>
                    {profile.affiliation}　{profile.lab}
                  </dd>
                </div>
                <div className="flex gap-4 items-baseline">
                  <dt className="shrink-0 font-semibold text-xs uppercase tracking-widest" style={{ color: "#A0B1DD" }}>
                    Mail
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${profile.email}`}
                      className="hover:underline transition-colors"
                      style={{ color: "#2F4C73" }}
                    >
                      {profile.email}
                    </a>
                  </dd>
                </div>
              </dl>

              {/* Research interest badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {profile.interests.map((kw) => (
                  <span
                    key={kw}
                    className="inline-flex items-center px-3.5 py-1 text-sm font-medium rounded-full select-none"
                    style={{
                      background: "white",
                      border: "1px solid rgba(160,177,221,0.5)",
                      color: "#2F4C73",
                    }}
                  >
                    {kw}
                  </span>
                ))}
              </div>

              <p className="text-xs text-right" style={{ color: "#A0B1DD" }}>{profile.updatedAt} 現在</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
