import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Star, Users, Zap, Bot, Cpu, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Silifke Teknoloji | Yapay Zeka & Otomasyon Uzmanı | Bahadır Gemalmaz",
  description: "Silifke'de teknoloji ve yapay zeka uzmanı. AI entegrasyonu, otomasyon çözümleri ve modern web teknolojileri. Silifke Teknoloji Kulübü kurucusu. Ücretsiz danışmanlık.",
  keywords: [
    "silifke teknoloji",
    "silifke yapay zeka",
    "silifke ai uzmanı",
    "silifke otomasyon",
    "silifke web geliştirme",
    "silifke teknoloji kulübü",
    "silifke dijital dönüşüm",
    "silifke yapay zeka danışmanı",
    "silifke otomasyon çözümleri",
    "silifke teknoloji eğitimi"
  ],
  openGraph: {
    title: "Silifke Teknoloji | Yapay Zeka & Otomasyon Uzmanı",
    description: "Silifke'de teknoloji ve yapay zeka uzmanı. AI entegrasyonu, otomasyon çözümleri ve modern web teknolojileri.",
    type: "website",
    locale: "tr_TR",
    url: "https://www.bahadirgemalmaz.com/silifke-teknoloji",
  },
  alternates: {
    canonical: "https://www.bahadirgemalmaz.com/silifke-teknoloji",
  },
}

const technologies = [
  {
    title: "Yapay Zeka Entegrasyonu",
    description: "ChatGPT, otomasyon ve AI destekli çözümlerle işletmenizi geleceğe taşıyın.",
    features: ["AI Chatbot", "Otomatik yanıtlar", "Müşteri analizi", "Kişiselleştirme"],
    icon: Bot,
  },
  {
    title: "Otomasyon Çözümleri",
    description: "İş süreçlerinizi otomatikleştirin, verimliliğinizi artırın ve maliyetlerinizi düşürün.",
    features: ["İş süreci otomasyonu", "E-posta otomasyonu", "Veri analizi", "Raporlama"],
    icon: Cpu,
  },
  {
    title: "Modern Web Teknolojileri",
    description: "React, Next.js ve en güncel teknolojilerle hızlı, güvenli ve ölçeklenebilir web çözümleri.",
    features: ["React/Next.js", "Hızlı yükleme", "SEO optimizasyonu", "Mobil uyumlu"],
    icon: Zap,
  },
]

const testimonials = [
  {
    name: "Silifke Teknoloji Kulübü Üyeleri",
    company: "Silifke Teknoloji",
    content: "Bahadır'ın liderliğinde teknoloji projelerimizi hayata geçirdik. Hem öğrendik hem ürettik. Gerçek bir vizyoner ve mentor.",
    rating: 5,
  },
  {
    name: "Simay.tech Ekibi",
    company: "AI & Otomasyon",
    content: "AI ve otomasyon projelerimizde müthiş bir iş çıkardı. Teknik bilgisi ve yaratıcılığı ile projeleri hayata geçirdi.",
    rating: 5,
  },
  {
    name: "Silifke İş Dünyası",
    company: "Yerel İşletmeler",
    content: "Silifke'deki işletmelerimizin dijital dönüşümünde öncü rol oynuyor. Teknoloji ile büyümemize katkı sağlıyor.",
    rating: 5,
  },
]

const stats = [
  { label: "Silifke Teknoloji Kulübü Üyesi", value: "50+", icon: Users },
  { label: "AI Projesi", value: "20+", icon: Bot },
  { label: "Otomasyon Çözümü", value: "30+", icon: Cpu },
  { label: "Eğitim Verilen Kişi", value: "100+", icon: Target },
]

export default function SilifkeTeknoloji() {
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
                  Silifke'nin Teknoloji Lideri
                </span>
                <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Silifke'de
                  <br />
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    yapay zeka
                  </span>
                  <br />
                  ve teknoloji dönüşümü
                </h1>
                <p className="text-xl leading-relaxed text-white/70">
                  Silifke Teknoloji Kulübü kurucusu olarak, bölgedeki işletmeleri yapay zeka, otomasyon ve modern teknolojilerle güçlendiriyorum.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-green-400" />
                      <div>
                        <p className="text-2xl font-bold text-white">{value}</p>
                        <p className="text-sm text-white/60">{label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
                >
                  Teknoloji Danışmanlığı
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
                <h3 className="text-2xl font-bold text-white mb-6">Silifke Teknoloji Kulübü</h3>
                <div className="space-y-4">
                  {[
                    "🤖 Yapay zeka eğitimleri ve projeleri",
                    "⚡ Otomasyon çözümleri geliştirme",
                    "💻 Modern web teknolojileri öğretimi",
                    "🚀 Startup projeleri destekleme",
                    "📚 Teknoloji konferansları düzenleme",
                    "🌐 Silifke'yi teknoloji merkezi yapma"
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

      {/* Technologies Section */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Silifke'de Sunduğum Teknoloji Hizmetleri
            </h2>
            <p className="text-xl text-white/70">
              Yapay zeka, otomasyon ve modern web teknolojileri ile işletmenizi geleceğe taşıyın
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {technologies.map((tech, index) => (
              <div key={index} className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/30 hover:bg-white/10">
                <div className="mb-6">
                  <tech.icon className="h-12 w-12 text-green-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">{tech.title}</h3>
                  <p className="text-white/70">{tech.description}</p>
                </div>
                <ul className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-white/80">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-gradient-to-br from-green-900/10 to-blue-900/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Silifke'deki Başarı Hikayeleri
            </h2>
            <p className="text-xl text-white/70">
              Teknoloji ile dönüşen işletmeler ve başarı hikayeleri
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Silifke Teknoloji Kulübü</h3>
              <p className="text-white/70 mb-6">
                50+ üyeli aktif teknoloji topluluğu. Gençlerle birlikte yapay zeka projeleri, 
                otomasyon çözümleri ve modern web teknolojileri geliştiriyoruz.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-400">50+</p>
                  <p className="text-sm text-white/60">Aktif Üye</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-400">20+</p>
                  <p className="text-sm text-white/60">Tamamlanan Proje</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Simay.tech AI Platformu</h3>
              <p className="text-white/70 mb-6">
                Yapay zeka destekli sesli asistan ve otomasyon çözümleri platformu. 
                Silifke'den dünyaya açılan teknoloji projesi.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-400">1000+</p>
                  <p className="text-sm text-white/60">Kullanıcı</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-400">24/7</p>
                  <p className="text-sm text-white/60">AI Destek</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Silifke'deki Teknoloji Topluluğu Ne Diyor?
            </h2>
            <p className="text-xl text-white/70">
              Teknoloji dönüşümünde birlikte çalıştığımız ekiplerin deneyimleri
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80 italic">"{testimonial.content}"</p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/60">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-green-900/20 to-blue-900/20 p-12">
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Silifke'de Teknoloji Dönüşümüne Hazır mısınız?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Yapay zeka, otomasyon ve modern teknolojilerle işletmenizi geleceğe taşıyalım.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
              >
                Teknoloji Danışmanlığı Al
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
