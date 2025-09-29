import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Star, Bot, Brain, Zap, Target, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Silifke AI Uzmanı | Yapay Zeka Danışmanı | Bahadır Gemalmaz",
  description: "Silifke'de AI uzmanı. Yapay zeka danışmanlığı, ChatGPT entegrasyonu, otomasyon çözümleri. Silifke Teknoloji Kulübü kurucusu. Ücretsiz AI danışmanlığı.",
  keywords: [
    "silifke ai uzmanı",
    "silifke yapay zeka",
    "silifke ai danışmanı",
    "silifke chatgpt uzmanı",
    "silifke ai entegrasyonu",
    "silifke otomasyon uzmanı",
    "silifke teknoloji kulübü",
    "silifke ai eğitimi",
    "silifke dijital dönüşüm",
    "silifke ai chatbot"
  ],
  openGraph: {
    title: "Silifke AI Uzmanı | Yapay Zeka Danışmanı",
    description: "Silifke'de AI uzmanı. Yapay zeka danışmanlığı, ChatGPT entegrasyonu, otomasyon çözümleri ile işletmenizi geleceğe taşıyın.",
    type: "website",
    locale: "tr_TR",
    url: "https://www.bahadirgemalmaz.com/silifke-ai-uzmani",
  },
  alternates: {
    canonical: "https://www.bahadirgemalmaz.com/silifke-ai-uzmani",
  },
}

export default function SilifkeAiUzmani() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900/20 via-blue-900/20 to-black py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.1),_transparent_70%)]" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-green-300">
                  <Bot className="h-4 w-4" />
                  Silifke'nin AI Lideri
                </span>
                <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Silifke'de
                  <br />
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    AI uzmanı
                  </span>
                  <br />
                  olarak hizmet veriyorum
                </h1>
                <p className="text-xl leading-relaxed text-white/70">
                  Silifke Teknoloji Kulübü kurucusu olarak, bölgedeki işletmeleri yapay zeka teknolojileri ile güçlendiriyorum. 
                  AI entegrasyonu, otomasyon ve modern teknolojilerle dönüşüm sağlıyorum.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
                >
                  AI Danışmanlığı Al
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
                <h3 className="text-2xl font-bold text-white mb-6">Silifke'de AI ile Neler Yapıyoruz?</h3>
                <div className="space-y-4">
                  {[
                    "🤖 Silifke Teknoloji Kulübü AI projeleri",
                    "💬 Yerel işletmeler için AI chatbot'lar",
                    "⚡ İş süreçlerini AI ile otomatikleştirme",
                    "📊 Veri analizi ve tahminleme modelleri",
                    "🎯 Müşteri deneyimini AI ile iyileştirme",
                    "🚀 Silifke'yi AI merkezi yapma projesi"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-white/80">
                      <CheckCircle className="h-5 w-5 text-green-400" />
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
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-green-900/20 to-blue-900/20 p-12">
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Silifke'de AI Dönüşümüne Hazır mısınız?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Yapay zeka teknolojileri ile Silifke'deki işletmenizi geleceğe taşıyalım.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
              >
                AI Danışmanlığı Al
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
