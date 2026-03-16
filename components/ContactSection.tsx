import { profile } from "@/lib/data";
import { StarSparkle, CherryBranch, CosmicSakuraIllustration } from "@/components/Decorations";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 bg-white overflow-hidden">

      {/* Decorative elements */}
      <StarSparkle className="absolute top-10 right-20 w-4 h-4 opacity-40" style={{ color: "#D9B343" }} />
      <StarSparkle className="absolute bottom-16 left-16 w-3 h-3 opacity-35" style={{ color: "#A0B1DD" }} />
      <CherryBranch className="absolute bottom-4 right-4 w-48 h-36 opacity-20" style={{ color: "#D9B343" }} />

      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest font-medium mb-2 flex items-center gap-2"
          style={{ color: "#D9B343" }}>
          <span className="w-6 h-px inline-block" style={{ background: "#D9B343" }} />
          お問い合わせ
        </p>
        <h2
          className="text-5xl font-bold mb-8"
          style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#223F59" }}
        >
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">

          {/* Left: Contact info */}
          <div className="rounded-2xl p-8" style={{ background: "#F0EDE5" }}>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  style={{ color: "#A0B1DD" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm hover:underline"
                  style={{ color: "#2F4C73" }}
                >
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  style={{ color: "#A0B1DD" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-sm" style={{ color: "#2F4C73" }}>
                  {profile.affiliation}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Decorative illustration panel */}
          <div className="relative rounded-2xl overflow-hidden min-h-[180px]">
            <CosmicSakuraIllustration />
            <div className="absolute inset-0 bg-gradient-to-t from-[#223F59]/70 via-[#2F4C73]/30 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-sm font-medium" style={{ color: "#A0B1DD" }}>Get in touch</p>
              <p className="text-xs mt-0.5" style={{ color: "rgba(240,237,229,0.6)" }}>{profile.affiliation}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
