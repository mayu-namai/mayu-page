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
  title: `${profile.nameEn} | ${profile.affiliation}`,
  description: profile.bio,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`scroll-smooth ${notoSerifJP.variable}`}>
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
