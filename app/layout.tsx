import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google"
import "./globals.css"

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
})

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Mersin Web Tasarım & Silifke Teknoloji Uzmanı | Bahadır Gemalmaz - AI Otomasyon",
  description: "Mersin ve Silifke'nin önde gelen web tasarım ve yapay zeka uzmanı. React, Next.js, AI entegrasyonu ile %300 satış artışı. Silifke Teknoloji Kulübü kurucusu. Ücretsiz danışmanlık.",
  generator: 'Next.js',
  keywords: [
    "mersin web tasarım",
    "silifke teknoloji", 
    "mersin yapay zeka",
    "silifke web geliştirme",
    "mersin otomasyon uzmanı",
    "silifke ai uzmanı",
    "mersin react geliştirici",
    "silifke next.js uzmanı",
    "mersin e-ticaret sitesi",
    "silifke kurumsal web sitesi",
    "mersin dijital dönüşüm",
    "silifke teknoloji kulübü",
    "mersin web tasarım fiyatları",
    "silifke seo uzmanı",
    "mersin yapay zeka danışmanı",
    "silifke otomasyon çözümleri",
    "mersin teknoloji danışmanı",
    "silifke dijital pazarlama",
    "mersin web sitesi tasarımı",
    "silifke teknoloji eğitimi"
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
    title: "Mersin Web Tasarım & Silifke Teknoloji Uzmanı | Bahadır Gemalmaz",
    description: "Mersin ve Silifke'nin önde gelen web tasarım ve yapay zeka uzmanı. AI entegrasyonu ile %300 satış artışı. Silifke Teknoloji Kulübü kurucusu.",
    type: "website",
    locale: "tr_TR",
    url: "https://www.bahadirgemalmaz.com",
    siteName: "Bahadır Gemalmaz - Mersin Silifke Teknoloji Uzmanı",
    images: [
      {
        url: "https://www.bahadirgemalmaz.com/profile.png",
        width: 1200,
        height: 630,
        alt: "Bahadır Gemalmaz - Mersin Silifke Web Tasarım ve Yapay Zeka Uzmanı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mersin Web Tasarım & Silifke Teknoloji Uzmanı | Bahadır Gemalmaz",
    description: "Mersin ve Silifke'nin önde gelen web tasarım ve yapay zeka uzmanı. AI entegrasyonu ile %300 satış artışı.",
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
                "https://github.com/bahadirdeveloper",
                "https://www.instagram.com/silifketechnology/"
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
                "Mersin Web Tasarım",
                "Silifke Teknoloji",
                "Yapay Zeka",
                "React Geliştirme",
                "Next.js",
                "AI Otomasyon",
                "E-ticaret Çözümleri",
                "Kurumsal Web Siteleri",
                "SEO Optimizasyonu",
                "Dijital Dönüşüm",
                "Teknoloji Danışmanlığı",
                "Silifke Teknoloji Kulübü"
              ],
              "alumniOf": "Silifke Teknoloji Kulübü",
              "founder": "Silifke Teknoloji Kulübü"
            })
          }}
        />
      </head>
      <body className={`${sans.variable} ${display.variable} font-sans min-h-screen flex flex-col bg-black text-white`}>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}
