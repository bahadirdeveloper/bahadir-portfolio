import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Star, Zap, Cpu, Target, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Mersin Otomasyon Uzmanı | İş Süreci Otomasyonu | Bahadır Gemalmaz",
  description: "Mersin'de otomasyon uzmanı. İş süreçlerini otomatikleştirin, verimliliği artırın. AI destekli otomasyon çözümleri. %300 verimlilik artışı. Ücretsiz danışmanlık.",
  keywords: [
    "mersin otomasyon",
    "mersin otomasyon uzmanı",
    "mersin iş süreci otomasyonu",
    "mersin otomasyon çözümleri",
    "mersin ai otomasyon",
    "mersin dijital otomasyon",
    "mersin süreç otomasyonu",
    "mersin otomasyon danışmanı",
    "mersin verimlilik artışı",
    "mersin otomasyon eğitimi"
  ],
  openGraph: {
    title: "Mersin Otomasyon Uzmanı | İş Süreci Otomasyonu",
    description: "Mersin'de otomasyon uzmanı. İş süreçlerini otomatikleştirin, verimliliği artırın. AI destekli otomasyon çözümleri ile işletmenizi güçlendirin.",
    type: "website",
    locale: "tr_TR",
    url: "https://www.bahadirgemalmaz.com/mersin-otomasyon",
  },
  alternates: {
    canonical: "https://www.bahadirgemalmaz.com/mersin-otomasyon",
  },
}

export default function MersinOtomasyon() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-900/20 via-red-900/20 to-black py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.1),_transparent_70%)]" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
                  <Zap className="h-4 w-4" />
                  Mersin'in Otomasyon Lideri
                </span>
                <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Mersin'de
                  <br />
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    otomasyon
                  </span>
                  <br />
                  ile verimlilik artışı
                </h1>
                <p className="text-xl leading-relaxed text-white/70">
                  İş süreçlerinizi otomatikleştirin, verimliliğinizi artırın. AI destekli otomasyon çözümleri ile 
                  Mersin'deki işletmenizi geleceğe taşıyın. %300 verimlilik artışı garantisi.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-700"
                >
                  Otomasyon Danışmanlığı
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
                <h3 className="text-2xl font-bold text-white mb-6">Mersin'de Otomasyon ile Neler Yapabilirsiniz?</h3>
                <div className="space-y-4">
                  {[
                    "⚡ İş süreçlerini %90 otomatikleştirme",
                    "📊 Veri analizi ve raporlama otomasyonu",
                    "📧 E-posta ve iletişim otomasyonu",
                    "🛒 E-ticaret süreçlerini otomatikleştirme",
                    "💼 Müşteri yönetimi otomasyonu",
                    "📈 Satış süreçlerini optimize etme"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-white/80">
                      <CheckCircle className="h-5 w-5 text-orange-400" />
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
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-orange-900/20 to-red-900/20 p-12">
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Mersin'de Otomasyon Dönüşümüne Hazır mısınız?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              İş süreçlerinizi otomatikleştirin, verimliliğinizi artırın. AI destekli otomasyon çözümleri ile işletmenizi güçlendirin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-700"
              >
                Otomasyon Danışmanlığı Al
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
