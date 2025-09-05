"use client"

import { motion } from "framer-motion"
import { MessageCircle, Linkedin, Mail, Star, Users, Clock, Award } from "lucide-react"

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
      {/* Main CTA Section */}
      <section id="iletisim" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Birlikte yeni başarı hikayeleri yazalım
            </h2>
            <p className="text-xl md:text-2xl text-white/70 font-medium max-w-3xl mx-auto leading-relaxed">
              Projelerinde hız, güvenilirlik ve yaratıcılığı birleştiriyorum. Fikrini hayata geçirelim.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            {/* WhatsApp CTA - Primary */}
            <motion.a
              href={`${whatsappUrl}&utm_source=portfolio&utm_medium=cta&utm_campaign=footer`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCTAClick('whatsapp')}
              className="group relative w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-500 hover:via-green-400 hover:to-green-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:shadow-2xl hover:shadow-green-500/40 border border-green-400/50 flex items-center justify-center gap-3">
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp'tan Hemen Yaz</span>
              </div>
            </motion.a>

            {/* LinkedIn CTA - Secondary */}
            <motion.a
              href={`${linkedinUrl}?utm_source=portfolio&utm_medium=cta&utm_campaign=footer`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCTAClick('linkedin')}
              className="group relative w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-transparent border-2 border-blue-400 hover:bg-blue-400/10 text-blue-400 hover:text-blue-300 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:shadow-2xl hover:shadow-blue-500/40 flex items-center justify-center gap-3">
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn'de Bağlantı Kur</span>
              </div>
            </motion.a>

            {/* Email CTA - Secondary */}
            <motion.a
              href={`${emailUrl}&utm_source=portfolio&utm_medium=cta&utm_campaign=footer`}
              onClick={() => handleCTAClick('email')}
              className="group relative w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:shadow-2xl hover:shadow-white/20 flex items-center justify-center gap-3">
                <Mail className="w-6 h-6" />
                <span>E-posta Gönder</span>
              </div>
            </motion.a>
          </motion.div>

          {/* Micro Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:bg-white/10">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-white/80 text-lg italic max-w-2xl mx-auto">
              "Müşterilerimle şeffaf süreç, hızlı teslim ve kalıcı kalite odaklı çalışırım."
            </p>
          </motion.div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-2">
                Bahadır Gemalmaz — Web Tasarımcısı & Otomasyon Uzmanı
              </h3>
              <p className="text-white/70 italic text-lg">
                "Bugünün çabası, yarının referansı."
              </p>
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
        <div className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-4 py-3 rounded-full shadow-2xl shadow-green-500/50 border border-green-400/50 flex items-center gap-2 transition-all duration-300">
          <MessageCircle className="w-5 h-5" />
          <span className="font-semibold text-sm">Yaz</span>
        </div>
      </motion.a>
    </>
  )
}
