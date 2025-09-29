import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Star, Bot, Brain, Zap, Target, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Mersin Yapay Zeka Uzmanı | AI Danışmanlığı & Otomasyon | Bahadır Gemalmaz",
  description: "Mersin'de yapay zeka uzmanı. AI entegrasyonu, ChatGPT çözümleri, otomasyon ve makine öğrenmesi. %300 verimlilik artışı. Ücretsiz AI danışmanlığı.",
  keywords: [
    "mersin yapay zeka",
    "mersin ai uzmanı",
    "mersin yapay zeka danışmanı",
    "mersin chatgpt uzmanı",
    "mersin ai entegrasyonu",
    "mersin otomasyon uzmanı",
    "mersin makine öğrenmesi",
    "mersin ai chatbot",
    "mersin yapay zeka eğitimi",
    "mersin dijital dönüşüm"
  ],
  openGraph: {
    title: "Mersin Yapay Zeka Uzmanı | AI Danışmanlığı & Otomasyon",
    description: "Mersin'de yapay zeka uzmanı. AI entegrasyonu, ChatGPT çözümleri, otomasyon ve makine öğrenmesi ile işletmenizi geleceğe taşıyın.",
    type: "website",
    locale: "tr_TR",
    url: "https://www.bahadirgemalmaz.com/mersin-yapay-zeka",
  },
  alternates: {
    canonical: "https://www.bahadirgemalmaz.com/mersin-yapay-zeka",
  },
}

const aiServices = [
  {
    title: "AI Chatbot Entegrasyonu",
    description: "Müşteri hizmetlerinizi 7/24 AI destekli chatbot'larla güçlendirin.",
    features: ["Doğal dil işleme", "Çok dilli destek", "Öğrenen algoritma", "Entegrasyon"],
    icon: Bot,
  },
  {
    title: "İş Süreci Otomasyonu",
    description: "Rutin işlerinizi AI ile otomatikleştirin, verimliliğinizi artırın.",
    features: ["Veri analizi", "Raporlama", "E-posta otomasyonu", "Süreç optimizasyonu"],
    icon: Brain,
  },
  {
    title: "AI Destekli Analitik",
    description: "Büyük verilerinizi AI ile analiz edin, stratejik kararlar alın.",
    features: ["Tahminleme", "Müşteri analizi", "Trend analizi", "Karar destek"],
    icon: Target,
  },
]

const testimonials = [
  {
    name: "Mersin Ticaret Odası",
    company: "Kurumsal AI",
    content: "AI entegrasyonu ile müşteri hizmetlerimiz 7/24 çalışıyor. Müşteri memnuniyetimiz %95'e çıktı.",
    rating: 5,
  },
  {
    name: "Mersin Teknoloji Şirketi",
    company: "AI Otomasyon",
    content: "İş süreçlerimizi AI ile otomatikleştirdik. Verimliliğimiz %300 arttı, maliyetlerimiz %50 azaldı.",
    rating: 5,
  },
  {
    name: "Mersin E-ticaret",
    company: "AI Analitik",
    content: "AI destekli analitik ile müşteri davranışlarını anlıyoruz. Satışlarımız %250 arttı.",
    rating: 5,
  },
]

const stats = [
  { label: "AI Projesi", value: "30+", icon: Bot },
  { label: "Verimlilik Artışı", value: "%300", icon: Zap },
  { label: "Müşteri Memnuniyeti", value: "%95", icon: Star },
  { label: "Maliyet Tasarrufu", value: "%50", icon: Target },
]

const aiUseCases = [
  {
    title: "E-ticaret AI Çözümleri",
    description: "Ürün önerileri, fiyat optimizasyonu ve müşteri analizi",
    icon: "🛒",
  },
  {
    title: "Kurumsal AI Otomasyonu",
    description: "İnsan kaynakları, muhasebe ve operasyon süreçleri",
    icon: "🏢",
  },
  {
    title: "Müşteri Hizmetleri AI",
    description: "Chatbot'lar, otomatik yanıtlar ve müşteri analizi",
    icon: "💬",
  },
  {
    title: "Pazarlama AI",
    description: "Hedefleme, içerik üretimi ve kampanya optimizasyonu",
    icon: "📈",
  },
]

export default function MersinYapayZeka() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(147,51,234,0.1),_transparent_70%)]" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">
                  <Bot className="h-4 w-4" />
                  Mersin'in AI Uzmanı
                </span>
                <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Mersin'de
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    yapay zeka
                  </span>
                  <br />
                  ile dönüşüm
                </h1>
                <p className="text-xl leading-relaxed text-white/70">
                  AI entegrasyonu, ChatGPT çözümleri ve otomasyon ile Mersin'deki işletmenizi geleceğe taşıyın. 
                  %300 verimlilik artışı garantisi.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-purple-400" />
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
                  className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-purple-700"
                >
                  Ücretsiz AI Danışmanlığı
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
                <h3 className="text-2xl font-bold text-white mb-6">Mersin'de AI ile Neler Yapabilirsiniz?</h3>
                <div className="space-y-4">
                  {[
                    "🤖 7/24 çalışan AI chatbot'lar",
                    "📊 Akıllı veri analizi ve raporlama",
                    "⚡ İş süreçlerini otomatikleştirme",
                    "🎯 Müşteri davranışlarını tahmin etme",
                    "💬 Çok dilli müşteri desteği",
                    "📈 Satış ve pazarlama optimizasyonu"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-white/80">
                      <CheckCircle className="h-5 w-5 text-purple-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Mersin'de Sunduğum AI Hizmetleri
            </h2>
            <p className="text-xl text-white/70">
              Yapay zeka teknolojileri ile işletmenizi geleceğe taşıyın
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {aiServices.map((service, index) => (
              <div key={index} className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/30 hover:bg-white/10">
                <div className="mb-6">
                  <service.icon className="h-12 w-12 text-purple-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/70">{service.description}</p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-white/80">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Use Cases Section */}
      <section className="bg-gradient-to-br from-purple-900/10 to-blue-900/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Mersin'de AI Kullanım Alanları
            </h2>
            <p className="text-xl text-white/70">
              Farklı sektörlerde yapay zeka uygulamaları
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {aiUseCases.map((useCase, index) => (
              <div key={index} className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{useCase.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{useCase.title}</h3>
                    <p className="text-white/70">{useCase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Mersin'deki AI Müşterileri Ne Diyor?
            </h2>
            <p className="text-xl text-white/70">
              Yapay zeka dönüşümünde birlikte çalıştığımız işletmelerin deneyimleri
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
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-12">
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Mersin'de AI Dönüşümüne Hazır mısınız?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Yapay zeka teknolojileri ile işletmenizi geleceğe taşıyalım. Ücretsiz AI danışmanlığı ile başlayalım.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-purple-700"
              >
                Ücretsiz AI Danışmanlığı
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
