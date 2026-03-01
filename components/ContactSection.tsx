import { profile } from "@/lib/data";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Contact</h2>
        <p className="text-slate-500 mb-8 text-sm">お問い合わせ</p>

        <div className="bg-slate-50 rounded-2xl p-8 max-w-lg">
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
      </div>
    </section>
  );
}
