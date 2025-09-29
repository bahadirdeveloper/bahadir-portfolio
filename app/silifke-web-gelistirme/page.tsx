import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Star, Code, Zap, Target, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Silifke Web Geliştirme | React & Next.js Uzmanı | Bahadır Gemalmaz",
  description: "Silifke'de web geliştirme uzmanı. React, Next.js ile modern web siteleri. Hızlı, güvenli ve SEO uyumlu web çözümleri. Silifke Teknoloji Kulübü kurucusu.",
  keywords: [
    "silifke web geliştirme",
    "silifke react uzmanı",
    "silifke next.js uzmanı",
    "silifke web tasarım",
    "silifke web sitesi",
    "silifke frontend geliştirme",
    "silifke javascript uzmanı",
    "silifke web programlama",
    "silifke teknoloji kulübü",
    "silifke web çözümleri"
  ],
  openGraph: {
    title: "Silifke Web Geliştirme | React & Next.js Uzmanı",
    description: "Silifke'de web geliştirme uzmanı. React, Next.js ile modern, hızlı ve SEO uyumlu web siteleri geliştiriyorum.",
    type: "website",
    locale: "tr_TR",
    url: "https://www.bahadirgemalmaz.com/silifke-web-gelistirme",
  },
  alternates: {
    canonical: "https://www.bahadirgemalmaz.com/silifke-web-gelistirme",
  },
}

export default function SilifkeWebGelistirme() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-black py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.1),_transparent_70%)]" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  <Code className="h-4 w-4" />
                  Silifke'nin Web Geliştirme Lideri
                </span>
                <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Silifke'de
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    web geliştirme
                  </span>
                  <br />
                  uzmanı olarak hizmet veriyorum
                </h1>
                <p className="text-xl leading-relaxed text-white/70">
                  Silifke Teknoloji Kulübü kurucusu olarak, bölgedeki işletmeleri modern web teknolojileri ile güçlendiriyorum. 
                  React, Next.js ve en güncel teknolojilerle hızlı, güvenli web çözümleri geliştiriyorum.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-cyan-700"
                >
                  Web Geliştirme Danışmanlığı
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="https://wa.me/905011683259"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-lg font-semibold text-white transition hover:border-white/40"
                >
                  Hemen İletişime Geç
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Silifke'de Web Geliştirme ile Neler Yapıyoruz?</h3>
                <div className="space-y-4">
                  {[
                    "⚡ React & Next.js ile hızlı web siteleri",
                    "📱 Mobil uyumlu responsive tasarım",
                    "🔍 SEO optimizasyonu ile Google'da üst sıralar",
                    "🛡️ Güvenli ve güncel teknolojiler",
                    "🚀 Silifke Teknoloji Kulübü projeleri",
                    "💻 Modern web teknolojileri eğitimi"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-white/80">
                      <CheckCircle className="h-5 w-5 text-cyan-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-12">
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Silifke'de Web Geliştirme Projenize Hazır mısınız?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Modern web teknolojileri ile Silifke'deki işletmenizi dijital dünyada öne çıkaralım.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-cyan-700"
              >
                Web Geliştirme Danışmanlığı Al
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="https://wa.me/905011683259"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-lg font-semibold text-white transition hover:border-white/40"
              >
                Hemen İletişime Geç
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
