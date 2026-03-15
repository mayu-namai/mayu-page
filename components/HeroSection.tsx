import { profile } from "@/lib/data";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900"
    >
      <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Avatar */}
        <div className="shrink-0">
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-pink-400 via-rose-300 to-purple-600 flex items-center justify-center text-white text-5xl font-bold select-none shadow-lg shadow-purple-900/50 ring-2 ring-pink-400/30">
            {profile.name.charAt(0)}
          </div>
        </div>

        {/* Text */}
        <div className="flex-1">
          <p className="text-sm uppercase tracking-widest text-pink-300 font-medium mb-1">
            {profile.position}
          </p>
          <h1 className="text-4xl font-bold text-white mb-1">
            {profile.name}
          </h1>
          <p className="text-lg text-purple-300 mb-3">{profile.nameEn}</p>

          {/* 所属・連絡先 */}
          <dl className="text-sm text-slate-300 space-y-1 mb-4">
            <div className="flex gap-2">
              <dt className="text-slate-500 shrink-0">所属</dt>
              <dd>{profile.affiliation}　{profile.lab}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-slate-500 shrink-0">連絡</dt>
              <dd>
                <a href={`mailto:${profile.email}`} className="text-pink-300 hover:text-pink-200 hover:underline">
                  {profile.email}
                </a>
              </dd>
            </div>
          </dl>

          {/* キーワード */}
          <div className="flex flex-wrap gap-2 mb-5">
            {profile.interests.map((kw) => (
              <span
                key={kw}
                className="px-3 py-1 bg-white/10 text-pink-200 border border-pink-400/30 rounded-full text-xs font-medium"
              >
                {kw}
              </span>
            ))}
          </div>

          {/* リンクボタン */}
          <div className="flex gap-4 flex-wrap">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg text-sm font-medium hover:bg-pink-400 transition-colors shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
            {profile.googleScholar && (
              <a href={profile.googleScholar} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-purple-400/40 text-purple-300 rounded-lg text-sm font-medium hover:border-pink-400/60 hover:text-pink-300 transition-colors">
                Google Scholar
              </a>
            )}
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-purple-400/40 text-purple-300 rounded-lg text-sm font-medium hover:border-pink-400/60 hover:text-pink-300 transition-colors">
                GitHub
              </a>
            )}
          </div>

          <p className="text-xs text-slate-500 mt-4">{profile.updatedAt}現在</p>
        </div>
      </div>
    </section>
  );
}
