"use client"

import { motion } from "framer-motion"
import { MessageCircle, Linkedin, Mail, Star, Users, Clock, Award, Sparkles } from "lucide-react"

interface FinalCTAProps {
  phoneNumber?: string
  linkedinUrl?: string
  email?: string
}

export default function FinalCTA({ 
  phoneNumber = "905011683259",
  linkedinUrl = "https://www.linkedin.com/in/bahad%C4%B1r-gemalmaz-839632379/",
  email = "bahdevpro@gmail.com"
}: FinalCTAProps) {
  
  const whatsappMessage = encodeURIComponent("Merhaba Bahadır, portfolyonu inceledim ve projemi konuşmak isterim.")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`
  
  const emailSubject = encodeURIComponent("Proje Görüşmesi")
  const emailBody = encodeURIComponent("Merhaba Bahadır,\n\nPortfolyonu inceledim ve projem hakkında konuşmak istiyorum.\n\nDetaylar:\n- Proje türü:\n- Bütçe aralığı:\n- Hedef tarih:\n\nTeşekkürler!")
  const emailUrl = `mailto:${email}?subject=${emailSubject}&body=${emailBody}`

  const handleCTAClick = (channel: 'whatsapp' | 'linkedin' | 'email') => {
    // Analytics event tracking
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'cta_click',
        channel: channel,
        location: 'footer_final'
      })
    }
  }

  const stats = [
    { icon: Award, value: "30+", label: "tamamlanan proje" },
    { icon: Users, value: "10+", label: "çalışılan marka" },
    { icon: Clock, value: "2-3 hafta", label: "ortalama MVP süresi" },
    { icon: Star, value: "⭐⭐⭐⭐⭐", label: "6+ müşteri yorumu" }
  ]

  return (
    <>
      <section id="iletisim" className="relative overflow-hidden py-24 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(147,51,234,0.08),transparent_50%)]" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-10 md:p-16 lg:p-20 backdrop-blur-xl shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
          >
            <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br from-emerald-400/10 via-teal-400/5 to-transparent blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-transparent blur-3xl" />

            <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                  <Sparkles className="h-4 w-4 text-emerald-200" />
                  Premium iş ortaklığı
                </span>
                <div className="space-y-5">
                  <h2 className="font-display text-4xl leading-tight text-white md:text-5xl">
                    Birlikte yeni başarı hikayeleri yazalım
                  </h2>
                  <p className="max-w-2xl text-base text-white/70 md:text-lg">
                    Projelerinde hız, şeffaflık ve ölçülebilir sonuçları bir araya getiriyorum. Fikrini premium deneyimle hayata geçirelim.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap md:gap-6">
                  <motion.a
                    href={`${whatsappUrl}&utm_source=portfolio&utm_medium=cta&utm_campaign=footer`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleCTAClick('whatsapp')}
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-emerald-200/50 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 px-8 py-4 font-semibold text-black shadow-[0_20px_45px_rgba(16,185,129,0.35)] transition-all duration-300 hover:shadow-[0_28px_60px_rgba(16,185,129,0.4)] sm:w-auto"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp&apos;tan Hemen Yaz</span>
                  </motion.a>

                  <motion.a
                    href={`${linkedinUrl}?utm_source=portfolio&utm_medium=cta&utm_campaign=footer`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleCTAClick('linkedin')}
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white/80 transition-all duration-300 hover:border-white/20 hover:text-white sm:w-auto"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn&apos;de Bağlantı Kur</span>
                  </motion.a>

                  <motion.a
                    href={`${emailUrl}&utm_source=portfolio&utm_medium=cta&utm_campaign=footer`}
                    onClick={() => handleCTAClick('email')}
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/10 px-8 py-4 font-semibold text-white/70 transition-all duration-300 hover:border-white/20 hover:text-white sm:w-auto"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Mail className="h-5 w-5" />
                    <span>E-posta Gönder</span>
                  </motion.a>
                </div>

                <div className="border-l border-white/10 pl-6 text-white/60">
                  <p className="text-sm italic md:text-base">
                    &ldquo;Müşterilerimle şeffaf süreç, hızlı teslim ve kalıcı kalite odaklı çalışırım.&rdquo;
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.28em] text-white/40">
                    İlk geri dönüş 24 saat içinde
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.08 * index }}
                      viewport={{ once: true }}
                      className="rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur-lg transition-colors hover:border-emerald-200/40 hover:bg-white/10"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-emerald-200">
                        <stat.icon className="h-5 w-5" />
                      </div>
                      <div className="text-2xl font-semibold text-white">{stat.value}</div>
                      <div className="text-sm text-white/60">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-6 text-white/70 backdrop-blur-lg shadow-[0_24px_65px_rgba(0,0,0,0.35)]">
                  <h3 className="text-lg font-semibold text-white">
                    Bahadır Gemalmaz — Web Tasarımcısı & Otomasyon Uzmanı
                  </h3>
                  <p className="mt-2 text-sm italic text-white/60">
                    &ldquo;Bugünün çabası, yarının referansı.&rdquo;
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile Sticky WhatsApp Button */}
      <motion.a
        href={`${whatsappUrl}&utm_source=portfolio&utm_medium=sticky&utm_campaign=mobile`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleCTAClick('whatsapp')}
        className="fixed bottom-5 right-4 z-50 sm:hidden"
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="flex items-center gap-2 rounded-full border border-emerald-200/50 bg-gradient-to-r from-emerald-400 to-teal-400 px-4 py-3 font-semibold text-black shadow-[0_20px_45px_rgba(16,185,129,0.35)] transition-all duration-300">
          <MessageCircle className="h-5 w-5" />
          <span className="text-sm">Yaz</span>
        </div>
      </motion.a>
    </>
  )
}
