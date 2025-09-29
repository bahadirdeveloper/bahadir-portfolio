import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Mersin Web Tasarım | Profesyonel Web Sitesi Tasarımı | Bahadır Gemalmaz",
  description: "Mersin'de profesyonel web tasarım hizmetleri. React, Next.js ile modern, hızlı ve SEO uyumlu web siteleri. %300 satış artışı garantisi. Ücretsiz danışmanlık.",
  keywords: [
    "mersin web tasarım",
    "mersin web sitesi",
    "mersin web tasarım fiyatları",
    "mersin web geliştirme",
    "mersin e-ticaret sitesi",
    "mersin kurumsal web sitesi",
    "mersin seo uzmanı",
    "mersin dijital pazarlama",
    "mersin web tasarım şirketi",
    "mersin teknoloji uzmanı"
  ],
  openGraph: {
    title: "Mersin Web Tasarım | Profesyonel Web Sitesi Tasarımı",
    description: "Mersin'de profesyonel web tasarım hizmetleri. Modern teknolojilerle güçlendirilmiş, hızlı ve SEO uyumlu web siteleri.",
    type: "website",
    locale: "tr_TR",
    url: "https://www.bahadirgemalmaz.com/mersin-web-tasarim",
  },
  alternates: {
    canonical: "https://www.bahadirgemalmaz.com/mersin-web-tasarim",
  },
}

const services = [
  {
    title: "Kurumsal Web Siteleri",
    description: "Mersin'deki işletmeniz için profesyonel, güvenilir ve modern kurumsal web siteleri.",
    features: ["Responsive tasarım", "SEO optimizasyonu", "Hızlı yükleme", "Güvenlik"],
    icon: Shield,
  },
  {
    title: "E-ticaret Çözümleri",
    description: "Online satışlarınızı artıracak, kullanıcı dostu e-ticaret platformları.",
    features: ["Ödeme entegrasyonu", "Stok yönetimi", "Mobil uyumlu", "Analitik"],
    icon: Target,
  },
  {
    title: "Yapay Zeka Entegrasyonu",
    description: "AI destekli chatbot'lar, otomasyon ve akıllı özelliklerle web sitenizi güçlendirin.",
    features: ["AI Chatbot", "Otomatik yanıtlar", "Müşteri analizi", "Kişiselleştirme"],
    icon: Zap,
  },
]

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    company: "Mersin Ticaret",
    content: "Web sitemiz sayesinde online satışlarımız %300 arttı. Bahadır'ın profesyonel yaklaşımı mükemmeldi.",
    rating: 5,
  },
  {
    name: "Ayşe Demir",
    company: "Mersin Mimarlık",
    content: "Modern ve kullanıcı dostu web sitemiz müşteri memnuniyetimizi önemli ölçüde artırdı.",
    rating: 5,
  },
  {
    name: "Mehmet Kaya",
    company: "Mersin Teknoloji",
    content: "AI entegrasyonu ile müşteri hizmetlerimiz 7/24 çalışıyor. Harika bir deneyim.",
    rating: 5,
  },
]

const stats = [
  { label: "Tamamlanan Proje", value: "50+", icon: Target },
  { label: "Müşteri Memnuniyeti", value: "%100", icon: Star },
  { label: "Ortalama Satış Artışı", value: "%300", icon: Zap },
  { label: "Aktif Müşteri", value: "25+", icon: Users },
]

export default function MersinWebTasarim() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1),_transparent_70%)]" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  <Star className="h-4 w-4" />
                  Mersin'in #1 Web Tasarım Uzmanı
                </span>
                <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Mersin'de
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    profesyonel web tasarım
                  </span>
                  <br />
                  hizmetleri
                </h1>
                <p className="text-xl leading-relaxed text-white/70">
                  Modern teknolojiler, yapay zeka entegrasyonu ve SEO optimizasyonu ile Mersin'deki işletmenizi dijital dünyada öne çıkarıyorum.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-blue-400" />
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
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
                >
                  Ücretsiz Danışmanlık
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
                <h3 className="text-2xl font-bold text-white mb-6">Neden Mersin'de Bahadır Gemalmaz?</h3>
                <div className="space-y-4">
                  {[
                    "🏆 Mersin'de 50+ başarılı proje",
                    "⚡ 3 saniyede açılan hızlı web siteleri",
                    "🤖 AI entegrasyonu ile %300 satış artışı",
                    "📱 Mobil uyumlu responsive tasarım",
                    "🔍 SEO optimizasyonu ile Google'da üst sıralar",
                    "🛡️ Güvenli ve güncel teknolojiler"
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

      {/* Services Section */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Mersin'de Sunduğum Web Tasarım Hizmetleri
            </h2>
            <p className="text-xl text-white/70">
              İşletmenizin ihtiyaçlarına özel, modern ve etkili web çözümleri
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/30 hover:bg-white/10">
                <div className="mb-6">
                  <service.icon className="h-12 w-12 text-blue-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/70">{service.description}</p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
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

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-blue-900/10 to-purple-900/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Mersin'deki Müşterilerim Ne Diyor?
            </h2>
            <p className="text-xl text-white/70">
              Başarı hikayeleri ve memnun müşteri deneyimleri
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
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-12">
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Mersin'deki İşletmeniz İçin Web Sitesi Hazır mı?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Ücretsiz danışmanlık ile projenizi değerlendirelim ve size en uygun çözümü sunalım.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
              >
                Ücretsiz Danışmanlık Al
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
