import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bahadır Gemalmaz - Web Tasarımcısı & Otomasyon Uzmanı | Mersin Silifke",
  description: "Mersin Silifke'de profesyonel web tasarım ve otomasyon hizmetleri. React, Next.js, AI entegrasyonu ile modern web siteleri. %300'e varan satış artışı garantisi.",
  generator: 'Next.js',
  keywords: [
    "web tasarım mersin", 
    "web tasarım silifke", 
    "otomasyon uzmanı", 
    "react geliştirici", 
    "next.js uzmanı", 
    "ai entegrasyonu", 
    "e-ticaret sitesi", 
    "kurumsal web sitesi", 
    "bahadır gemalmaz", 
    "silifke teknoloji",
    "web tasarım fiyatları",
    "profesyonel web sitesi",
    "dijital pazarlama",
    "seo optimizasyonu"
  ],
  authors: [{ name: "Bahadır Gemalmaz" }],
  creator: "Bahadır Gemalmaz",
  publisher: "Bahadır Gemalmaz",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Bahadır Gemalmaz - Web Tasarımcısı & Otomasyon Uzmanı",
    description: "Mersin Silifke'de profesyonel web tasarım ve otomasyon hizmetleri. Modern teknolojilerle güçlendirilmiş web siteleri.",
    type: "website",
    locale: "tr_TR",
    url: "https://www.bahadirgemalmaz.com",
    siteName: "Bahadır Gemalmaz Portfolio",
    images: [
      {
        url: "https://www.bahadirgemalmaz.com/profile.png",
        width: 1200,
        height: 630,
        alt: "Bahadır Gemalmaz - Web Tasarımcısı & Otomasyon Uzmanı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bahadır Gemalmaz - Web Tasarımcısı & Otomasyon Uzmanı",
    description: "Mersin Silifke'de profesyonel web tasarım ve otomasyon hizmetleri. Modern teknolojilerle güçlendirilmiş web siteleri.",
    images: ["https://www.bahadirgemalmaz.com/profile.png"],
    creator: "@bahadirgemalmaz",
  },
  alternates: {
    canonical: "https://www.bahadirgemalmaz.com",
  },
  category: "technology",
  classification: "Web Design & Development",
  other: {
    "geo.region": "TR-33",
    "geo.placename": "Mersin",
    "geo.position": "36.3775;33.9342",
    "ICBM": "36.3775, 33.9342",
  },
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
                  "telephone": "+90-533-238-3391",
                  "contactType": "customer service",
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
