import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bahadır Gemalmaz - Web Tasarımcısı & Otomasyon Uzmanı",
  description: "Bahadır Gemalmaz'ın portfolyosu - Yaratıcı web tasarımları ve otomasyon çözümleri",
  generator: 'Next.js',
  keywords: ["web tasarım", "otomasyon", "react", "next.js", "portfolio", "bahadır gemalmaz"],
  authors: [{ name: "Bahadır Gemalmaz" }],
  creator: "Bahadır Gemalmaz",
  openGraph: {
    title: "Bahadır Gemalmaz - Web Tasarımcısı & Otomasyon Uzmanı",
    description: "Yaratıcı web tasarımları ve otomasyon çözümleri",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bahadır Gemalmaz - Web Tasarımcısı",
    description: "Yaratıcı web tasarımları ve otomasyon çözümleri",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Bahadır Gemalmaz",
              "jobTitle": "Web Tasarımcısı & Otomasyon Uzmanı",
              "description": "Yaratıcı web tasarımları ve otomasyon çözümleri geliştiren profesyonel",
              "url": "https://www.bahadirgemalmaz.com",
              "image": "https://www.bahadirgemalmaz.com/profile.png",
              "sameAs": [
                "https://www.linkedin.com/in/bahad%C4%B1r-gemalmaz-839632379/",
                "https://github.com/bahadirgemalmaz",
                "https://instagram.com/bahadirgemalmaz"
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+90-501-168-3259",
                  "contactType": "WhatsApp",
                  "availableLanguage": "Turkish"
                },
                {
                  "@type": "ContactPoint",
                  "email": "bahdevpro@gmail.com",
                  "contactType": "Email",
                  "availableLanguage": "Turkish"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Silifke",
                "addressRegion": "Mersin",
                "addressCountry": "TR"
              },
              "knowsAbout": [
                "Web Tasarım",
                "Frontend Geliştirme",
                "React",
                "Next.js",
                "Otomasyon",
                "AI Entegrasyonu",
                "E-ticaret",
                "Kurumsal Web Siteleri"
              ],
              "alumniOf": "Silifke Teknoloji Kulübü",
              "founder": "Silifke Teknoloji Kulübü"
            })
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}
