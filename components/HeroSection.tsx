import { profile } from "@/lib/data";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12"
    >
      {/* Avatar placeholder */}
      <div className="shrink-0">
        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white text-5xl font-bold select-none shadow-lg">
          {profile.name.charAt(0)}
        </div>
      </div>

      {/* Text */}
      <div className="flex-1">
        <p className="text-sm uppercase tracking-widest text-blue-600 font-medium mb-1">
          {profile.position}
        </p>
        <h1 className="text-4xl font-bold text-slate-900 mb-1">
          {profile.name}
        </h1>
        <p className="text-lg text-slate-500 mb-1">{profile.nameEn}</p>
        <p className="text-slate-600 mb-1">{profile.affiliation}</p>
        <p className="text-slate-500 text-sm mb-4">{profile.lab}</p>

        <p className="text-slate-700 leading-relaxed mb-6 max-w-xl">
          {profile.bio}
        </p>

        {/* Keywords */}
        <div className="flex flex-wrap gap-2 mb-6">
          {profile.interests.map((kw) => (
            <span
              key={kw}
              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
            >
              {kw}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 flex-wrap">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </a>
          {profile.googleScholar && (
            <a
              href={profile.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:border-blue-400 hover:text-blue-600 transition-colors"
            >
              Google Scholar
            </a>
          )}
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:border-blue-400 hover:text-blue-600 transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
