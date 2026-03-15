import { profile } from "@/lib/data";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Contact</h2>
        <div className="w-10 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mt-2 mb-2" />
        <p className="text-slate-500 mb-8 text-sm">お問い合わせ</p>

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
