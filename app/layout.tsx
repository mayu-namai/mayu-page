import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { profile } from "@/lib/data";
import { LanguageProvider } from "@/contexts/LanguageContext";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "生井麻結 | Mayu Namai",
  description: "生井麻結（Mayu Namai）のポートフォリオサイト。慶應義塾大学博士課程在籍・企業AIエンジニア。生成AI・ヒューマンコンピュータインタラクション・マルチメディア研究。",
  keywords: ["生井麻結", "Mayu Namai", "生成AI", "HCI", "慶應義塾大学", "AIエンジニア", "ポートフォリオ", "VigNette"],
  openGraph: {
    title: "生井麻結 | Mayu Namai",
    description: "生井麻結（Mayu Namai）のポートフォリオサイト。慶應義塾大学博士課程在籍・企業AIエンジニア。",
    url: "https://mayu-namai.github.io/mayu-page/",
    siteName: "生井麻結 | Mayu Namai",
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "https://mayu-namai.github.io/mayu-page/",
  },
  verification: {
    google: "pnG_PQoEEOd9mXOBcS1DE5h9TS4dbPOW1_ZYO11Zc5E",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`scroll-smooth ${notoSerifJP.variable}`}>
      <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="c5ae13bf-b021-42f8-80b1-3458ab16d5c5"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "生井麻結",
              "alternateName": "Mayu Namai",
              "url": "https://mayu-namai.github.io/mayu-page/",
              "jobTitle": "AIエンジニア / Ph.D. Student",
              "affiliation": { "@type": "Organization", "name": "慶應義塾大学" },
              "description": "慶應義塾大学博士課程在籍・企業AIエンジニア。生成AIとHCIの研究。",
              "sameAs": ["https://x.com/namamayuga"],
            }),
          }}
        />
      </head>
      <body
        className="antialiased"
        style={{
          background: "#FDFAFC",
          color: "#6E6469",
          fontFamily: '"Yu Mincho", "游明朝", "YuMincho", "游明朝体", serif',
          fontWeight: 600,
        }}
      >
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
