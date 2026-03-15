import { profile } from "@/lib/data";
import { StarSparkle, CherryBranch } from "@/components/Decorations";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 bg-white overflow-hidden">

      {/* Decorative elements */}
      <StarSparkle className="absolute top-10 right-20 w-4 h-4 text-pink-300 opacity-50" />
      <StarSparkle className="absolute bottom-16 left-16 w-3 h-3 text-purple-300 opacity-50" />
      <CherryBranch className="absolute bottom-4 right-4 w-48 h-36 text-pink-300/30" />

      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-pink-400 font-medium mb-2 flex items-center gap-2">
          <span className="w-6 h-px bg-pink-400 inline-block" />
          お問い合わせ
        </p>
        <h2
          className="text-5xl font-bold text-slate-900 mb-8"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">

          {/* Left: Contact info */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-slate-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-slate-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span className="text-slate-600 text-sm">
                  {profile.affiliation}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Decorative image panel */}
          <div className="relative rounded-2xl overflow-hidden min-h-[180px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero.jpg"
              alt=""
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 40%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/70 via-purple-950/30 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-sm font-medium text-pink-200">Get in touch</p>
              <p className="text-xs text-white/60 mt-0.5">{profile.affiliation}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
