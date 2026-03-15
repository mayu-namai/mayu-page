import { profile } from "@/lib/data";
import { WaveDivider, MoonDecoration, StarSparkle, DotCluster, CherryBranch } from "@/components/Decorations";

export default function HeroSection() {
  return (
    <div>
      <section
        id="about"
        className="relative bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 overflow-hidden"
      >
        {/* ── Decorative background elements ── */}

        {/* Large moon top-right */}
        <MoonDecoration
          className="absolute -top-16 -right-16 w-80 h-80 opacity-60"
          bgColor="rgb(30 27 75)"
          glowColor="rgb(244 114 182 / 0.22)"
        />

        {/* Second smaller moon mid-left */}
        <MoonDecoration
          className="absolute bottom-24 -left-20 w-52 h-52 opacity-40"
          bgColor="rgb(30 27 75)"
          glowColor="rgb(167 139 250 / 0.25)"
        />

        {/* Stars scattered */}
        <StarSparkle className="absolute top-20 left-1/4 w-4 h-4 text-pink-400 opacity-70" />
        <StarSparkle className="absolute top-36 right-1/3 w-3 h-3 text-amber-400 opacity-60" />
        <StarSparkle className="absolute bottom-28 right-1/4 w-5 h-5 text-purple-300 opacity-50" />
        <StarSparkle className="absolute top-1/2 left-16 w-3 h-3 text-pink-300 opacity-40" />
        <StarSparkle className="absolute bottom-40 left-1/3 w-2 h-2 text-amber-300 opacity-60" />

        {/* Dot cluster */}
        <DotCluster className="absolute top-24 right-20 w-24 h-24 text-pink-400/20" />

        {/* Cherry branch bottom-left */}
        <CherryBranch className="absolute bottom-12 left-4 w-48 h-36 text-pink-400/20" />

        {/* ── Content ── */}
        <div className="max-w-5xl mx-auto px-6 pt-28 pb-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left: Profile info */}
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-widest text-pink-300 font-medium mb-3 flex items-center gap-2">
                <span className="w-6 h-px bg-pink-400 inline-block" />
                {profile.position}
              </p>
              <h1
                className="text-6xl font-bold text-white mb-1 leading-tight"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                {profile.name}
              </h1>
              <p
                className="text-2xl text-purple-200 mb-6 tracking-wide"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                {profile.nameEn}
              </p>

              <dl className="text-sm text-slate-300 space-y-2 mb-6">
                <div className="flex gap-3">
                  <dt className="text-slate-500 shrink-0 w-8">所属</dt>
                  <dd>{profile.affiliation}　{profile.lab}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="text-slate-500 shrink-0 w-8">連絡</dt>
                  <dd>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-pink-300 hover:text-pink-200 hover:underline"
                    >
                      {profile.email}
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="flex flex-wrap gap-2 mb-7">
                {profile.interests.map((kw) => (
                  <span
                    key={kw}
                    className="px-3 py-1 bg-white/10 text-pink-200 border border-pink-400/30 rounded-full text-xs font-medium"
                  >
                    {kw}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-pink-500 text-white rounded-lg text-sm font-medium hover:bg-pink-400 transition-colors shadow-md shadow-pink-900/40"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
                {profile.googleScholar && (
                  <a href={profile.googleScholar} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-purple-400/40 text-purple-300 rounded-lg text-sm font-medium hover:border-pink-400/60 hover:text-pink-300 transition-colors">
                    Google Scholar
                  </a>
                )}
              </div>

              <p className="text-xs text-slate-500 mt-5">{profile.updatedAt}現在</p>
            </div>

            {/* Right: Image collage */}
            <div className="relative flex justify-center md:justify-end mt-8 md:mt-0 z-10">
              <div className="relative w-72 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/60 ring-1 ring-pink-400/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hero.jpg"
                  alt="cosmic sakura"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-indigo-950/70 to-transparent" />
                <span className="absolute top-4 right-4 bg-pink-500/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                  HCI × CG
                </span>
              </div>
              <div className="absolute -bottom-6 left-0 md:-left-10 w-40 h-28 rounded-xl overflow-hidden ring-2 ring-pink-400/40 shadow-xl shadow-purple-900/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hero.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "right 60%" }}
                />
                <div className="absolute inset-0 bg-indigo-950/20" />
              </div>
              <div className="absolute -right-3 top-6 bottom-10 w-0.5 bg-gradient-to-b from-pink-400/60 via-purple-400/30 to-transparent hidden md:block" />
            </div>

          </div>
        </div>

        {/* Wave divider → white Research section */}
        <WaveDivider fill="white" />
      </section>
    </div>
  );
}
