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
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}
