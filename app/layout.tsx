import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PROFILE } from "@/lib/data";
import ScrollProgress from "@/components/ui/ScrollProgress";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${PROFILE.name} — ${PROFILE.title}`,
  description: `${PROFILE.title} based in ${PROFILE.location}. Specialising in React, Node.js, REST APIs and scalable web applications. Open to opportunities.`,
  keywords: ["Mainul Islam", "Full Stack Developer", "React", "Node.js", "JavaScript", "Bangladesh", "Dhaka"],
  authors: [{ name: PROFILE.name }],
  openGraph: {
    title: `${PROFILE.name} — ${PROFILE.title}`,
    description: `Junior Full Stack Developer with production experience in React, Node.js, and database-driven systems.`,
    type: "website",
    url: PROFILE.portfolio,
    siteName: `${PROFILE.name} Portfolio`,
  },
  twitter: {
    card: "summary",
    title: `${PROFILE.name} — ${PROFILE.title}`,
    description: `Junior Full Stack Developer with production experience in React, Node.js, and database-driven systems.`,
  },
  metadataBase: new URL(PROFILE.portfolio),
  robots: { index: true, follow: true },
  themeColor: "#060914",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrains.variable}`}>
      <body>
        <ScrollProgress />
        <div className="fixed bottom-[-10%] right-[-5%] w-[45%] h-[45%] pointer-events-none z-0"
          style={{ background: "radial-gradient(ellipse, rgba(45,212,191,.05) 0%, transparent 70%)" }}
        />
        <main className="relative z-[1] max-w-[1300px] mx-auto px-6 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
