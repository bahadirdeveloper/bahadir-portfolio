"use client"

import { useEffect, useRef, useState, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Zap,
  Globe,
  Star,
  Users,
  Instagram,
  Lightbulb,
  RefreshCw,
  BarChart3,
  Target,
  Rocket,
  Server,
  Bot,
  Cpu,
  BookOpen,
  Sparkles,
  Clock,
  Handshake,
} from "lucide-react"
import { AnimatePresence } from "framer-motion"
import SplashCursor from "../components/SplashCursor";
import FinalCTA from "../components/FinalCTA";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [currentQuote, setCurrentQuote] = useState(0)
  const [currentMessage, setCurrentMessage] = useState(0)

  // Portfolio Data - Türkçe içerik
  const portfolioData = {
    header: {
      logo: "/profile.png",
      title: "Bahadır'ın Portfolyosu",
      menu: ["Hakkımda", "Projeler", "Yetenekler", "İletişim"]
    },
    hero: {
      name: "Bahadır Gemalmaz",
      title: "Web Tasarımcısı & Otomasyon Uzmanı",
      leftMessages: [
        "Kahvemi bitirmeden kod yazmam",
        "Pixel-perfect mi? Başka türlüsü var mıydı?",
        "Bir web sitesi 3 saniyede açılmazsa, o site benim değildir",
        "Tasarımda sadelik bir sanattır",
        "Düğmeye basınca çalışmıyorsa... neden orada?",
        "Gece 3'te deploy mu? Neden olmasın",
        "Kod yazmak meditasyondur",
        "Her sorun bir çözümle gelir",
        "Figma açmadan gün başlamaz",
        "React gibi sevilen bir şey varsa, o da kahve",
        "Sade ama etkileyici... tıpkı sitelerim gibi",
        "Otobüste bile tasarım düşünen adam",
        "Açıklamasız commit yapmam",
        "Yazılımda detay, hayatta zarafettir",
        "İyi bir arayüz, kötü bir fikri bile kurtarır",
        "Görselliği seviyorum ama hızdan taviz vermem"
      ],
      motivationalQuotes: [
        "Her fikir, kodla can bulur",
        "Bugünün çabası, yarının referansı",
        "Sadelik, ustalığın göstergesidir",
        "Hayal et, tasarla, uygula",
        "Bir satır kod, bin kelimeye bedeldir",
        "Düşünen geliştirici, üreten sanatçıdır",
        "Disiplin, yetenekten daha etkilidir",
        "Tasarım; ne eklediğin değil, neyi çıkardığındır",
        "Zaman geçer ama iyi kod kalır",
        "Bir gülümseme için tasarla, hız için kodla"
      ]
    },
    about: {
      photo: "/profile.png",
      description: [
        "Merhaba, ben Bahadır. Web tasarımı ve otomasyon alanlarında uzmanlaşmış, sade ve işlevsel çözümler geliştiren bir geliştiriciyim. Müşterilerime hızlı, güvenilir ve ihtiyaçlara özel dijital yapılar sunarken; her projeye tutkuyla yaklaşırım.",
        "Aynı zamanda Silifke Teknoloji Kulübü'nün kurucusuyum. Gençlerle birlikte \"vibe coding\" kültürüyle projeler geliştiriyoruz. Yereldeki sorunları teknolojiyle çözüme dönüştürüyoruz.",
        "Amacımız; hem motivasyon hem gelir sağlayan, aynı zamanda milyon dolarlık potansiyele sahip fikirleri hayata geçirmek.",
        "Benim için teknoloji yalnızca bir iş değil; birlikte üretmenin, öğrenmenin ve büyümenin yolu. Doğru ekiple bir araya geldiğimizde, deniz kenarında kahvemizi yudumlarken bile dünyayı değiştirecek fikirler geliştirebileceğimize inanıyorum."
      ],
      socials: {
        github: "https://github.com/bahadirgemalmaz",
        linkedin: "https://linkedin.com/in/bahadirgemalmaz",
        email: "bahdevpro@gmail.com",
        cv: "/cv.pdf"
      },
      references: [
        "https://www.simayhareketi.org",
        "https://www.effemimarlik.com.tr",
        "https://www.avaxsavunma.com.tr",
        "https://www.simayhareketi.com"
      ]
    },
    skills: {
      technical: {
        "Frontend Geliştirme": {
          skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
          description: "Modern ve mobil uyumlu arayüzler",
          icon: "code",
          level: "İleri",
          color: "from-blue-500 to-cyan-500"
        },
        "Tasarım & UX": {
          skills: ["Figma", "Photoshop", "Canva", "Adobe XD", "Sketch"],
          description: "Kullanıcı odaklı ve estetik tasarımlar",
          icon: "palette",
          level: "İleri",
          color: "from-purple-500 to-pink-500"
        },
        "Backend & Otomasyon": {
          skills: ["Node.js", "Firebase", "Supabase", "Python", "n8n"],
          description: "Hızlı ve güvenilir altyapılar",
          icon: "server",
          level: "Orta",
          color: "from-green-500 to-emerald-500"
        },
        "Animasyon & AI": {
          skills: ["Framer Motion", "GSAP", "ChatGPT", "AI Integration", "Three.js"],
          description: "Etkileşimli deneyimler & yapay zeka entegrasyonu",
          icon: "ai",
          level: "Orta",
          color: "from-yellow-500 to-orange-500"
        },
        "Yeni Teknolojiler": {
          skills: ["Vue.js", "Svelte", "WebAssembly", "Rust"],
          description: "Sürekli öğrenim ve gelişim odaklı",
          icon: "learning",
          level: "Öğrenim Aşamasında",
          color: "from-gray-500 to-slate-500"
        }
      },
      softSkills: [
        { name: "Problem Çözme", description: "Zorluklardan fırsat çıkarma yaklaşımı", icon: "lightbulb" },
        { name: "Takım Çalışması", description: "Kolektif üretim ve paylaşım kültürü", icon: "users" },
        { name: "Zaman Yönetimi", description: "Fikirden ürüne hızlı MVP süreçleri", icon: "zap" },
        { name: "Yaratıcılık", description: "Startup vibe ile inovatif çözümler", icon: "rocket" }
      ],
      tools: ["VSCode", "Cursor", "Git", "Vercel", "Netlify", "Supabase", "n8n", "ChatGPT", "Figma", "Postman"]
    },
    projects: {
      featured: [
        {
          title: "Silifke Teknoloji",
          description: "Teknoloji ve inovasyon odaklı organizasyon web sitesi. Topluluk odaklı tasarım ve etkileşimli özellikler ile teknoloji meraklılarını bir araya getiren platform.",
          image: "/silifketeknoloji.webp",
          link: "https://www.silifketeknoloji.org",
          tech: ["Next.js", "React", "Tailwind CSS", "Modern Web"],
          category: "Teknoloji Organizasyonu",
          status: "Tamamlandı"
        },
        {
          title: "Bahadır Gemalmaz",
          description: "Kişisel portfolyo ve profesyonel web sitesi. Modern animasyonlar ve etkileşimli tasarım ile kişisel markayı güçlendiren portfolyo platformu.",
          image: "/portfolio.webp",
          link: "https://www.bahadirgemalmaz.com",
          tech: ["Next.js", "React", "Tailwind CSS", "GSAP"],
          category: "Portfolyo Sitesi",
          status: "Tamamlandı"
        },
        {
          title: "Simay.tech",
          description: "Web sitesi ve yapay zeka sesli asistan otomasyon sistemleri. AI teknolojileri ile iş süreçlerini otomatikleştiren ve verimliliği artıran akıllı çözümler.",
          image: "/simay.tech.webp",
          link: "https://simay.tech",
          tech: ["AI/ML", "React", "Python", "Automation"],
          category: "AI & Otomasyon",
          status: "Tamamlandı"
        },
        {
          title: "Avax Savunma",
          description: "Askeri outdoor giyim firması için e-ticaret sitesi. Güvenli ödeme sistemi ve kapsamlı ürün kataloğu ile online satışları artıran e-ticaret platformu.",
          image: "/avaxsavunma.webp",
          link: "https://www.avaxsavunma.com.tr",
          tech: ["React", "Node.js", "MongoDB", "E-commerce"],
          category: "E-ticaret Sitesi",
          status: "Tamamlandı"
        },
        {
          title: "Vertex Yapı",
          description: "Kaba inşaat firması için profesyonel web sitesi. Sektörel ihtiyaçlara özel tasarım ve güçlü SEO optimizasyonu ile müşteri portföyünü genişleten kurumsal platform.",
          image: "/vertexyapi.webp",
          link: "https://www.vertexyapi.com",
          tech: ["React", "Next.js", "Tailwind CSS", "SEO"],
          category: "Kurumsal Web Sitesi",
          status: "Tamamlandı"
        },
        {
          title: "Effe Mimarlık",
          description: "Site ve villa projeleri için kurumsal web sitesi. Modern tasarım ve kullanıcı dostu arayüz ile mimarlık firmasının dijital varlığını güçlendiren profesyonel web sitesi.",
          image: "/effemimarlik.webp",
          link: "https://www.effemimarlik.com.tr",
          tech: ["WordPress", "PHP", "CSS", "Responsive Design"],
          category: "Kurumsal Web Sitesi",
          status: "Tamamlandı"
        }
      ]
    },
    testimonials: [
      {
        name: "Ahmet Yılmaz",
        role: "Simay Hareketi Başkanı",
        content: "Bahadır'ın profesyonel yaklaşımı ve kaliteli işi sayesinde hayalimizdeki web sitesine kavuştuk. Süreç boyunca her adımda bizi bilgilendirdi ve beklentilerimizi aştı.",
        avatar: "/placeholder-user.jpg",
        rating: 5,
        company: "Simay Hareketi"
      },
      {
        name: "Ayşe Demir",
        role: "Effe Mimarlık Kurucusu",
        content: "Hızlı, güvenilir ve yaratıcı çözümler. Mimarlık firmamız için mükemmel bir web sitesi tasarladı. Müşteri memnuniyetimiz %100 arttı.",
        avatar: "/placeholder-user.jpg",
        rating: 5,
        company: "Effe Mimarlık"
      },
      {
        name: "Mehmet Kaya",
        role: "Avax Savunma CEO",
        content: "Teknik bilgisi ve müşteri odaklı yaklaşımı ile beklentilerimizi aştı. E-ticaret sitemiz satışlarımızı %300 artırdı. Kesinlikle tavsiye ederim.",
        avatar: "/placeholder-user.jpg",
        rating: 5,
        company: "Avax Savunma"
      },
      {
        name: "Fatma Özkan",
        role: "Vertex Yapı Genel Müdürü",
        content: "İnşaat sektöründe dijital varlığımızı güçlendirdi. Profesyonel yaklaşım ve kaliteli iş. Müşterilerimiz artık bizi daha kolay bulabiliyor.",
        avatar: "/placeholder-user.jpg",
        rating: 5,
        company: "Vertex Yapı"
      },
      {
        name: "Ali Yıldız",
        role: "Simay.tech Kurucusu",
        content: "AI ve otomasyon projelerimizde müthiş bir iş çıkardı. Teknik bilgisi ve yaratıcılığı ile projelerimizi hayata geçirdi. Gerçek bir uzman.",
        avatar: "/placeholder-user.jpg",
        rating: 5,
        company: "Simay.tech"
      },
      {
        name: "Teknoloji Meraklıları",
        role: "Silifke Teknoloji Kulübü Üyeleri",
        content: "Bahadır'ın liderliğinde teknoloji projelerimizi hayata geçirdik. Hem öğrendik hem ürettik. Gerçek bir vizyoner ve mentor.",
        avatar: "/placeholder-user.jpg",
        rating: 5,
        company: "Silifke Teknoloji"
      },
      {
        name: "Zeynep Aydın",
        role: "Dijital Pazarlama Uzmanı",
        content: "Web sitemizin SEO performansı inanılmaz arttı. Bahadır'ın teknik bilgisi ve pazarlama anlayışı sayesinde organik trafiğimiz %250 büyüdü. Harika bir iş çıkardı!",
        avatar: "/placeholder-user.jpg",
        rating: 5,
        company: "Dijital Ajans"
      }
    ],
    contact: {
      title: "Projenizi Konuşalım",
      subtitle: "Hayalinizdeki projeyi gerçeğe dönüştürmek için buradayım",
      email: "bahdevpro@gmail.com",
      phone: "+90 533 238 33 91",
      location: "Mersin, Silifke"
    }
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations
      gsap.fromTo(
        ".hero-content",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
      )

      gsap.fromTo(
        ".floating-message",
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
      )

      gsap.fromTo(
        ".skill-card",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".skills-section",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-section",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      gsap.fromTo(
        ".testimonial-card",
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".testimonials-section",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    // Quote rotation
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % portfolioData.hero.motivationalQuotes.length)
    }, 5000)

    // Message rotation
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % portfolioData.hero.leftMessages.length)
    }, 3000)

    return () => {
      clearInterval(quoteInterval)
      clearInterval(messageInterval)
    }
  }, [portfolioData.hero.motivationalQuotes.length, portfolioData.hero.leftMessages.length])

  useEffect(() => {
    // Loading simulation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionIndex: number) => {
    const sections = document.querySelectorAll("section")
    if (sections[sectionIndex]) {
      sections[sectionIndex].scrollIntoView({ behavior: "smooth" })
    }
    setCurrentSection(sectionIndex)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Yükleniyor...</p>
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Splash Cursor */}
      <SplashCursor />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={portfolioData.header.logo}
              alt="Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/10"
            />
            <div className="flex flex-col">
              <span className="font-black text-xl sm:text-2xl tracking-tight text-white truncate">
                {portfolioData.header.title}
              </span>
              <span className="text-sm text-white/60 font-medium truncate">
                Web Tasarımcısı & Otomasyon Uzmanı
              </span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {portfolioData.header.menu.map((item, index) => {
              let sectionIndex = index + 1;
              if (item === "Projeler") sectionIndex = 3;
              if (item === "Yetenekler") sectionIndex = 4;
              if (item === "İletişim") {
                return (
                  <button
                    key={item}
                    onClick={() => window.location.href = '/contact'}
                    className={`text-sm font-medium transition-colors hover:text-blue-400 modern-focus ${
                      currentSection === 6 ? "text-blue-400" : "text-white/70"
                    }`}
                  >
                    {item}
                  </button>
                );
              }
              
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionIndex)}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 modern-focus ${
                    currentSection === sectionIndex ? "text-blue-400" : "text-white/70"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-white/70 hover:text-white modern-focus"
            aria-label="Menüyü aç"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        
        {/* Floating Messages - Hidden on mobile */}
        <div className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 space-y-4 hidden lg:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMessage}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="floating-message bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 max-w-xs"
            >
              <p className="text-xs sm:text-sm text-white/80">{portfolioData.hero.leftMessages[currentMessage]}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center hero-content px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 text-optimized">
              <span className="shiny-text block">{portfolioData.hero.name.split(' ')[0]}</span>
              <span className="shiny-text block">{portfolioData.hero.name.split(' ')[1]}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 mb-4 sm:mb-6 max-w-3xl mx-auto">
              {portfolioData.hero.title}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/60 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
              Modern web siteleri, yapay zeka entegrasyonları ve otomasyon çözümleri geliştiriyorum.
            </p>
          </motion.div>

          {/* Motivational Quote */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto mb-6 sm:mb-8"
            >
              <p className="text-sm sm:text-base md:text-lg text-white/60 italic px-4">
                "{portfolioData.hero.motivationalQuotes[currentQuote]}"
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection(1)}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 btn-modern modern-focus"
            >
              Hakkımda
            </button>
            <button
              onClick={() => scrollToSection(3)}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 btn-modern modern-focus shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40"
            >
              Projelerimi Gör
            </button>
            <button
              onClick={() => window.location.href = '/contact'}
              className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 btn-modern modern-focus shadow-2xl shadow-green-500/25 hover:shadow-green-500/40"
            >
              İletişim
            </button>
          </motion.div>
        </div>

        {/* Social Media Icons - Right Bottom */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 flex flex-col space-y-3 sm:space-y-4"
        >
          <a
            href="https://github.com/bahadirgemalmaz"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label="GitHub profili"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-600 hover:to-gray-700 rounded-2xl flex items-center justify-center border-2 border-white/20 hover:border-gray-400/60 transition-all duration-500 transform hover:scale-125 hover:rotate-3 hover:shadow-2xl hover:shadow-gray-500/50 relative overflow-hidden">
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400/20 to-gray-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Github className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-gray-100 transition-all duration-500 relative z-10 group-hover:scale-110" />
            </div>
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 bg-white/95 text-black text-xs font-bold px-2 sm:px-3 py-1 sm:py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg border border-gray-200 hidden sm:block">
              GitHub
            </div>
          </a>
          
          <a
            href="https://linkedin.com/in/bahadirgemalmaz"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label="LinkedIn profili"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-400 hover:to-blue-500 rounded-2xl flex items-center justify-center border-2 border-white/20 hover:border-blue-300/60 transition-all duration-500 transform hover:scale-125 hover:rotate-3 hover:shadow-2xl hover:shadow-blue-500/50 relative overflow-hidden">
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-blue-50 transition-all duration-500 relative z-10 group-hover:scale-110" />
            </div>
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 bg-white/95 text-black text-xs font-bold px-2 sm:px-3 py-1 sm:py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg border border-blue-200 hidden sm:block">
              LinkedIn
            </div>
          </a>
          
          <a
            href="https://instagram.com/bahadirgemalmaz"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label="Instagram profili"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 hover:from-pink-300 hover:via-purple-300 hover:to-orange-300 rounded-2xl flex items-center justify-center border-2 border-white/20 hover:border-pink-300/60 transition-all duration-500 transform hover:scale-125 hover:rotate-3 hover:shadow-2xl hover:shadow-pink-500/50 relative overflow-hidden">
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300/20 via-purple-300/20 to-orange-300/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Instagram className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-pink-50 transition-all duration-500 relative z-10 group-hover:scale-110" />
            </div>
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 bg-white/95 text-black text-xs font-bold px-2 sm:px-3 py-1 sm:py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg border border-pink-200 hidden sm:block">
              Instagram
            </div>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-2 md:order-1"
            >
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30"></div>
                <img
                  src={portfolioData.about.photo}
                  alt="Bahadır Gemalmaz"
                  className="relative w-full h-full object-cover rounded-full border-4 border-white/20 gpu-accelerated"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6 order-1 md:order-2 text-center md:text-left"
            >
              <div className="mb-4 sm:mb-6">
                <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-optimized">Hakkımda</h2>
                <p className="text-sm sm:text-base text-white/60 font-medium">Web Tasarım • Otomasyon • Topluluk</p>
              </div>
              {portfolioData.about.description.map((paragraph, index) => (
                <p key={index} className="text-base sm:text-lg text-white/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* CTA Button */}
              <div className="pt-4">
                <button
                  onClick={() => scrollToSection(2)}
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 btn-modern modern-focus shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                >
                  Referanslarımı Gör
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4 pt-4">
                {portfolioData.about.socials.github && (
                  <a
                    href={portfolioData.about.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors modern-focus"
                    aria-label="GitHub profili"
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                )}
                {portfolioData.about.socials.linkedin && (
                  <a
                    href={portfolioData.about.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors modern-focus"
                    aria-label="LinkedIn profili"
                  >
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                )}
                {portfolioData.about.socials.email && (
                  <a
                    href={`mailto:${portfolioData.about.socials.email}`}
                    className="p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors modern-focus"
                    aria-label="E-posta gönder"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                )}
                {portfolioData.about.socials.cv && (
                  <a
                    href={portfolioData.about.socials.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors modern-focus"
                    aria-label="CV indir"
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                )}
              </div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* VIP References Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden vip-section relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        
        {/* Network Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="currentColor" className="text-blue-400"/>
                <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-blue-400/30"/>
                <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-blue-400/30"/>
                <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.3" className="text-purple-400/20"/>
                <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.3" className="text-purple-400/20"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network)"/>
          </svg>
        </div>
        
        {/* Floating Mockup Screens */}
        <div className="absolute top-1/4 left-1/4 w-32 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg blur-sm opacity-30 transform rotate-12"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-16 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg blur-sm opacity-25 transform -rotate-12"></div>
        <div className="absolute bottom-1/4 left-1/3 w-28 h-18 bg-gradient-to-br from-pink-500/20 to-yellow-500/20 rounded-lg blur-sm opacity-20 transform rotate-6"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg blur-sm opacity-25 transform -rotate-6"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              VIP Referanslar
            </h2>
            <p className="text-xl md:text-2xl text-white/70 font-medium">Güvenilen markaların tercihi</p>
          </motion.div>

          {/* Scrolling References */}
          <div className="relative mb-20">
            <div className="flex overflow-hidden">
              <motion.div
                className="flex whitespace-nowrap scrolling-references"
                animate={{
                  x: [0, -2000],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 60,
                    ease: "linear",
                  },
                }}
              >
                {/* First set of references */}
                <div className="flex items-center space-x-12 text-white text-xl font-medium">
                  <a 
                    href="https://www.simayhareketi.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="reference-item hover:text-blue-400 transition-all duration-500 cursor-pointer bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 hover:border-blue-400/50 hover:bg-white/10"
                  >
                    www.simayhareketi.org
                  </a>
                  <span className="text-blue-400 text-2xl">•</span>
                  <a 
                    href="https://www.effemimarlik.com.tr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="reference-item hover:text-blue-400 transition-all duration-500 cursor-pointer bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 hover:border-blue-400/50 hover:bg-white/10"
                  >
                    www.effemimarlik.com.tr
                  </a>
                  <span className="text-blue-400 text-2xl">•</span>
                  <a 
                    href="https://www.vertexyapi.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="reference-item hover:text-blue-400 transition-all duration-500 cursor-pointer bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 hover:border-blue-400/50 hover:bg-white/10"
                  >
                    www.vertexyapi.com
                  </a>
                  <span className="text-blue-400 text-2xl">•</span>
                  <a 
                    href="https://www.avaxsavunma.com.tr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="reference-item hover:text-blue-400 transition-all duration-500 cursor-pointer bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 hover:border-blue-400/50 hover:bg-white/10"
                  >
                    www.avaxsavunma.com.tr
                  </a>
                  <span className="text-blue-400 text-2xl">•</span>
                  <a 
                    href="https://www.mahallepanosu.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="reference-item hover:text-blue-400 transition-all duration-500 cursor-pointer bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 hover:border-blue-400/50 hover:bg-white/10"
                  >
                    www.mahallepanosu.org
                  </a>
                  <span className="text-blue-400 text-2xl">•</span>
                  <a 
                    href="https://simay.tech" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="reference-item hover:text-blue-400 transition-all duration-500 cursor-pointer bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 hover:border-blue-400/50 hover:bg-white/10"
                  >
                    simay.tech
                  </a>
                  <span className="text-blue-400 text-2xl">•</span>
                  <a 
                    href="https://www.silifketeknoloji.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="reference-item hover:text-blue-400 transition-all duration-500 cursor-pointer bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 hover:border-blue-400/50 hover:bg-white/10"
                  >
                    www.silifketeknoloji.org
                  </a>
                  <span className="text-blue-400 text-2xl">•</span>
                  <a 
                    href="https://www.bahadirgemalmaz.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="reference-item hover:text-blue-400 transition-all duration-500 cursor-pointer bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 hover:border-blue-400/50 hover:bg-white/10"
                  >
                    www.bahadirgemalmaz.com
                  </a>
                  <span className="text-blue-400 text-2xl">•</span>
                </div>
                
                {/* Second set for seamless loop */}
                <div className="flex items-center space-x-12 text-white text-xl font-medium ml-12">
                  <a 
                    href="https://www.simayhareketi.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="reference-item hover:text-blue-400 transition-all duration-500 cursor-pointer bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 hover:border-blue-400/50 hover:bg-white/10"
                  >
                    www.simayhareketi.org
                  </a>
                  <span className="text-blue-400 text-2xl">•</span>
                  <a 
                    href="https://www.effemimarlik.com.tr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="reference-item hover:text-blue-400 transition-all duration-500 cursor-pointer bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 hover:border-blue-400/50 hover:bg-white/10"
                  >
                    www.effemimarlik.com.tr
                  </a>
                  <span className="text-blue-400 text-2xl">•</span>
                  <a 
                    href="https://www.vertexyapi.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="reference-item hover:text-blue-400 transition-all duration-500 cursor-pointer bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 hover:border-blue-400/50 hover:bg-white/10"
                  >
                    www.vertexyapi.com
                  </a>
                  <span className="text-blue-400 text-2xl">•</span>
                  <a 
                    href="https://www.avaxsavunma.com.tr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="reference-item hover:text-blue-400 transition-all duration-500 cursor-pointer bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 hover:border-blue-400/50 hover:bg-white/10"
                  >
                    www.avaxsavunma.com.tr
                  </a>
                  <span className="text-blue-400 text-2xl">•</span>
                  <a 
                    href="https://www.mahallepanosu.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="reference-item hover:text-blue-400 transition-all duration-500 cursor-pointer bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 hover:border-blue-400/50 hover:bg-white/10"
                  >
                    www.mahallepanosu.org
                  </a>
                  <span className="text-blue-400 text-2xl">•</span>
                  <a 
                    href="https://simay.tech" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="reference-item hover:text-blue-400 transition-all duration-500 cursor-pointer bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 hover:border-blue-400/50 hover:bg-white/10"
                  >
                    simay.tech
                  </a>
                  <span className="text-blue-400 text-2xl">•</span>
                  <a 
                    href="https://www.silifketeknoloji.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="reference-item hover:text-blue-400 transition-all duration-500 cursor-pointer bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 hover:border-blue-400/50 hover:bg-white/10"
                  >
                    www.silifketeknoloji.org
                  </a>
                  <span className="text-blue-400 text-2xl">•</span>
                  <a 
                    href="https://www.bahadirgemalmaz.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="reference-item hover:text-blue-400 transition-all duration-500 cursor-pointer bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 hover:border-blue-400/50 hover:bg-white/10"
                  >
                    www.bahadirgemalmaz.com
                  </a>
                  <span className="text-blue-400 text-2xl">•</span>
                </div>
              </motion.div>
            </div>
            
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none"></div>
          </div>


          {/* Bottom Section - Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-blue-400/20 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Siz de VIP Referanslarımızdan Olun
                </h3>
                <p className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                  Profesyonel yaklaşımım ve kaliteli iş çıktılarımla, 
                  projenizi hayata geçirmek için buradayım. 
                  Güvenilir, hızlı ve etkili çözümlerle markanızı dijital dünyada öne çıkaralım.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => scrollToSection(3)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-blue-400/50"
                  >
                    Projelerimi Gör
                  </button>
                  <button 
                    onClick={() => scrollToSection(4)}
                    className="border border-white/30 hover:border-white/50 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Yeteneklerimi Keşfet
                  </button>
                  <button 
                    onClick={() => window.location.href = '/contact'}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-green-400/50"
                  >
                    İletişime Geç
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black projects-section relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-green-500/5"></div>
        <div className="absolute top-32 right-32 w-40 h-40 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-32 w-36 h-36 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* VIP Badge */}
            <div className="inline-flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg border border-yellow-300/50">
                <svg className="w-4 h-4 mr-2 inline" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
                Premium Yetenekler
              </div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projeler
            </h2>
            <p className="text-xl md:text-2xl text-white/70 font-medium">Tamamladığım öne çıkan projeler</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {portfolioData.projects.featured.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="project-card group"
              >
                <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 h-full flex flex-col touch-manipulation active:scale-95 md:active:scale-100 focus:outline-none focus:ring-2 focus:ring-blue-400/50 cursor-pointer select-none will-change-transform transform-gpu gpu-accelerated user-select-none -webkit-user-select-none -moz-user-select-none -ms-user-select-none -webkit-tap-highlight-color-transparent -webkit-touch-callout-none -webkit-user-drag-none -webkit-user-modify-read-only -webkit-user-modify-read-write-plaintext-only -webkit-user-modify-read-write -webkit-user-modify-read-write-plaintext-only -webkit-user-modify-read-write-plaintext-only">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48 md:h-64">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Status Badge */}
                    <div className="absolute top-2 md:top-4 right-2 md:right-4">
                      <span className="bg-green-500/90 backdrop-blur-sm text-white text-xs font-bold px-2 md:px-3 py-1 rounded-full border border-green-400/50">
                        {project.status}
                      </span>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-2 md:top-4 left-2 md:left-4">
                      <span className="bg-blue-500/90 backdrop-blur-sm text-white text-xs font-bold px-2 md:px-3 py-1 rounded-full border border-blue-400/50">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none md:pointer-events-auto">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-blue-400/50 pointer-events-auto"
                      >
                        Projeyi Gör
                      </a>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="relative z-10 p-4 md:p-6 flex flex-col flex-1">
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-white/70 mb-3 md:mb-4 text-xs md:text-sm leading-relaxed flex-1">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-white/10 backdrop-blur-sm text-white/80 text-xs px-2 md:px-3 py-1 rounded-lg border border-white/20 hover:border-blue-400/50 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Project Link */}
                    <div className="mt-auto">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-xs md:text-sm font-medium flex items-center group/link"
                      >
                        Siteyi Ziyaret Et
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>



        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black skills-section relative">
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
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Yetenekler
            </h2>
            <p className="text-xl md:text-2xl text-white/70 font-medium">Teknik ve kişisel becerilerim</p>
          </motion.div>

          {/* Technical Skills - Premium Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 md:gap-6 mb-16">
            {Object.entries(portfolioData.skills.technical).map(([category, skillData], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="skill-card group relative"
              >
                <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-4 md:p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 h-full overflow-hidden">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Category Icon */}
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative">
                      {skillData.icon === "code" && (
                        <div className={`w-12 h-12 bg-gradient-to-br ${skillData.color} rounded-xl flex items-center justify-center relative z-10`}>
                          <Code className="w-6 h-6 text-white" />
                        </div>
                      )}
                      {skillData.icon === "palette" && (
                        <div className={`w-12 h-12 bg-gradient-to-br ${skillData.color} rounded-xl flex items-center justify-center relative z-10`}>
                          <Palette className="w-6 h-6 text-white" />
                        </div>
                      )}
                      {skillData.icon === "server" && (
                        <div className={`w-12 h-12 bg-gradient-to-br ${skillData.color} rounded-xl flex items-center justify-center relative z-10`}>
                          <Server className="w-6 h-6 text-white" />
                        </div>
                      )}
                      {skillData.icon === "ai" && (
                        <div className={`w-12 h-12 bg-gradient-to-br ${skillData.color} rounded-xl flex items-center justify-center relative z-10`}>
                          <Bot className="w-6 h-6 text-white" />
                        </div>
                      )}
                      {skillData.icon === "learning" && (
                        <div className={`w-12 h-12 bg-gradient-to-br ${skillData.color} rounded-xl flex items-center justify-center relative z-10`}>
                          <BookOpen className="w-6 h-6 text-white" />
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                      {category}
                    </h3>
                    
                    {/* Mini Description */}
                    <p className="text-white/60 text-sm mb-3 leading-relaxed">
                      {skillData.description}
                    </p>
                    
                    {/* Skill Level Indicator */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-white/70 font-medium">Seviye</span>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                          skillData.level === "İleri" ? "bg-green-500/20 text-green-400 border border-green-400/30" :
                          skillData.level === "Orta" ? "bg-orange-500/20 text-orange-400 border border-orange-400/30" :
                          skillData.level === "Öğrenim Aşamasında" ? "bg-gray-500/20 text-gray-400 border border-gray-400/30" :
                          "bg-blue-500/20 text-blue-400 border border-blue-400/30"
                        }`}>
                          {skillData.level}
                        </span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${
                            skillData.level === "İleri" ? "from-green-400 to-emerald-500" :
                            skillData.level === "Orta" ? "from-orange-400 to-orange-500" :
                            skillData.level === "Öğrenim Aşamasında" ? "from-gray-400 to-gray-500" :
                            "from-blue-400 to-cyan-500"
                          }`}
                          style={{
                            width: skillData.level === "İleri" ? "90%" : 
                                   skillData.level === "Orta" ? "70%" : 
                                   skillData.level === "Öğrenim Aşamasında" ? "30%" : "50%"
                          }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {skillData.skills.map((skill) => (
                        <div key={skill} className="bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 text-white/90 text-xs font-medium border border-white/10 hover:border-blue-400/30 transition-all duration-300 group-hover:bg-white/10">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools Integration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Kullandığım Araçlar
              </h3>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {portfolioData.skills.tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-white/90 text-sm font-medium border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:bg-white/15 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-400" />
                    {tool}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Skills Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
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
              Kişisel Beceriler
            </h2>
            <p className="text-xl md:text-2xl text-white/70 font-medium">Startup mentality ile geliştirilen yetkinlikler</p>
          </motion.div>

          {/* Skills Grid with Enhanced Design */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16">
            {portfolioData.skills.softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-4 md:p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 h-full overflow-hidden">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Skill Icon */}
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative">
                      {skill.icon === "lightbulb" && (
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center relative z-10">
                          <Lightbulb className="w-6 h-6 text-white" />
                        </div>
                      )}
                      {skill.icon === "users" && (
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center relative z-10">
                          <Handshake className="w-6 h-6 text-white" />
                        </div>
                      )}
                      {skill.icon === "zap" && (
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center relative z-10">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                      )}
                      {skill.icon === "rocket" && (
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center relative z-10">
                          <Rocket className="w-6 h-6 text-white" />
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    
                    <p className="text-white/70 text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black testimonials-section relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-blue-500/5 to-purple-500/5"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-green-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Müşteri Yorumları
            </h2>
            <p className="text-xl md:text-2xl text-white/70 font-medium">Müşterilerimin deneyimleri ve başarı hikayeleri</p>
          </motion.div>

          {/* Featured Testimonial - En güçlü yorum */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="relative bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border-2 border-green-400/30 hover:border-green-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/30 max-w-4xl mx-auto">
              {/* Premium Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg border border-yellow-300/50">
                  <Star className="w-4 h-4 mr-2 inline" />
                  Öne Çıkan Başarı Hikayesi
                </div>
              </div>
              
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl opacity-50"></div>
              
              <div className="relative z-10">
                {/* Quote Icon - Büyük */}
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500/30 to-blue-500/30 rounded-2xl flex items-center justify-center">
                    <svg className="w-10 h-10 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Rating Stars - Büyük */}
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 text-yellow-400 fill-current mx-1" />
                  ))}
                </div>
                
                {/* Content - Büyük */}
                <div className="text-center mb-8">
                  <p className="text-white/90 italic text-xl md:text-2xl leading-relaxed font-medium">
                    "Teknik bilgisi ve müşteri odaklı yaklaşımı ile beklentilerimizi aştı. E-ticaret sitemiz satışlarımızı <span className="text-green-400 font-bold">%300 artırdı</span>. Kesinlikle tavsiye ederim."
                  </p>
                </div>
                
                {/* Author Info - Büyük */}
                <div className="flex flex-col md:flex-row items-center justify-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mr-6 border-4 border-green-400/50 mb-4 md:mb-0">
                    <img
                      src="/placeholder-user.jpg"
                      alt="Mehmet Kaya"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="font-bold text-white text-xl mb-1">
                      Mehmet Kaya
                    </h4>
                    <p className="text-white/70 text-lg mb-1">Avax Savunma CEO</p>
                    <p className="text-green-400/90 text-base font-medium">Avax Savunma</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Diğer Yorumlar - Grid/Slider */}
          <div className="mb-16">
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.testimonials.filter(t => t.name !== "Mehmet Kaya").map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="testimonial-card group"
                >
                  <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 h-full">
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Quote Icon */}
                    <div className="relative z-10 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Rating Stars */}
                    <div className="relative z-10 flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 mb-4">
                      <p className="text-white/80 italic text-sm leading-relaxed">
                        "{testimonial.content}"
                      </p>
                    </div>
                    
                    {/* Author Info */}
                    <div className="relative z-10 flex items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border-2 border-white/20 group-hover:border-green-400/50 transition-colors duration-300">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white text-sm group-hover:text-green-400 transition-colors duration-300">
                          {testimonial.name}
                        </h4>
                        <p className="text-white/60 text-xs">{testimonial.role}</p>
                        <p className="text-green-400/80 text-xs font-medium">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Slider */}
            <div className="md:hidden">
              <div className="relative overflow-hidden">
                <motion.div
                  className="flex space-x-6"
                  animate={{
                    x: [0, -1200],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 30,
                      ease: "linear",
                    },
                  }}
                >
                  {[...portfolioData.testimonials.filter(t => t.name !== "Mehmet Kaya"), ...portfolioData.testimonials.filter(t => t.name !== "Mehmet Kaya")].map((testimonial, index) => (
                    <div key={`${testimonial.name}-${index}`} className="flex-shrink-0 w-80">
                      <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 h-full">
                        {/* Quote Icon */}
                        <div className="mb-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                            </svg>
                          </div>
                        </div>
                        
                        {/* Rating Stars */}
                        <div className="flex items-center mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        
                        {/* Content */}
                        <div className="mb-4">
                          <p className="text-white/80 italic text-sm leading-relaxed">
                            "{testimonial.content}"
                          </p>
                        </div>
                        
                        {/* Author Info */}
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border-2 border-white/20">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-white text-sm">
                              {testimonial.name}
                            </h4>
                            <p className="text-white/60 text-xs">{testimonial.role}</p>
                            <p className="text-green-400/80 text-xs font-medium">{testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
                
                {/* Gradient overlays for smooth fade effect */}
                <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
          
          {/* Call to Action - İyileştirilmiş */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Siz de Benzer Bir Başarı Hikayesi Yaşamak İster misiniz?
                </h3>
                <p className="text-white/70 mb-6 text-lg max-w-2xl mx-auto">
                  Müşterilerimin yaşadığı gibi satışlarınızı artıran, dijital varlığınızı güçlendiren projeler geliştirelim. 
                  <span className="text-green-400 font-semibold">%300'e varan artışlar</span> mümkün!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-green-400/50 shadow-lg shadow-green-500/25"
                  >
                    <Handshake className="w-5 h-5 mr-2 inline" />
                    İletişime Geç
                  </button>
                  <button
                    onClick={() => scrollToSection(3)}
                    className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <ExternalLink className="w-5 h-5 mr-2 inline" />
                    Projelerimi Gör
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <FinalCTA />

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60">
            © 2025 {portfolioData.hero.name}. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  )
}