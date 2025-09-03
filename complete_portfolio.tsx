"use client"

import { useEffect, useRef, useState, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion, useScroll, useTransform } from "framer-motion"
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
  Award,
  Users,
  Calendar,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import { AnimatePresence } from "framer-motion"
import SplashCursor from "../components/SplashCursor";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState(0)
  const [currentQuote, setCurrentQuote] = useState(0)
  const [currentMessage, setCurrentMessage] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  // Portfolio Data - Türkçe içerik
  const portfolioData = {
    header: {
      logo: "/profile.png",
      title: "Bahadır'ın Portfolyosu",
      menu: ["Hakkımda", "Yetenekler", "Projeler", "Referanslar", "İletişim"]
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
        "Aynı zamanda Silifke Teknoloji Kulübü'nün kurucusuyum. Burada gençlerle birlikte \"vibe coding\" kültürüyle projeler geliştiriyor, yereldeki sorunları teknolojiyle çözüme dönüştürüyoruz. Amacımız; hem motivasyon hem gelir sağlayan, aynı zamanda milyon dolarlık potansiyele sahip fikirleri hayata geçirmek.",
        "Benim için teknoloji yalnızca bir iş değil; birlikte üretmenin, öğrenmenin ve büyümenin yolu. Doğru ekiple bir araya geldiğimizde, deniz kenarında kahvemizi yudumlarken bile dünyayı değiştirecek fikirler geliştirebileceğimize inanıyorum."
      ],
      socials: {
        github: "",
        linkedin: "",
        email: "",
        cv: "/cv.pdf"
      },
      references: [
        "https://www.simayhareketi.org",
        "https://www.effemimarlik.com.tr",
        "https://www.avaxsavunma.com.tr",
        "https://www.simayhareketi.com"
      ]
    },
    experience: {
      stats: [
        {"icon": "📁", "count": 7, "label": "Tamamlanan Proje"},
        {"icon": "👥", "count": 7, "label": "Mutlu Müşteri"},
        {"icon": "⏳", "count": 2, "label": "Yıllık Deneyim"},
        {"icon": "🚀", "count": 3, "label": "Aktif Proje"}
      ],
      tabs: ["Web Tasarımı", "Otomasyon Sistemleri", "Danışmanlık"]
    },
    skills: {
      technical: {
        "Frontend Geliştirme": ["HTML", "CSS", "JavaScript", "React"],
        "Tasarım & UX": ["Figma", "Photoshop", "Canva"],
        "Altyapı & Otomasyon": ["Node.js", "Firebase", "Supabase"],
        "Animasyon & Etkileşim": ["Framer Motion", "GSAP"]
      },
      softSkills: [
      { name: "Problem Çözme", description: "Sorunlardan Fırsat Yaratma", icon: "💡" },
      { name: "Takım Çalışması", description: "Kolektif Üretim", icon: "🤝" },
      { name: "Zaman Yönetimi", description: "Hızlı MVP Çıkartma", icon: "⚡" },
      { name: "Yaratıcılık", description: "Startup Vibe", icon: "🚀" },
      { name: "İletişim", description: "Topluluk İnşası", icon: "🌐" },
      { name: "Adaptasyon", description: "Yeni Teknolojilere Hızlı Uyum", icon: "🔄" },
      { name: "Analitik Düşünme", description: "Veri Odaklı Yaklaşım", icon: "📊" },
      { name: "Kritik Düşünme", description: "Stratejik Bakış", icon: "🎯" }
    ],
      tools: {
        "🚀 Geliştirme & Yayınlama": ["VSCode", "Cursor", "Git", "Vercel", "Netlify", "Supabase"],
        "⚡ Otomasyon & Tasarım": ["n8n", "ChatGPT", "Figma", "Postman"]
      }
    },
    projects: {
      featured: [
        {
          title: "Effe Mimarlık",
          description: "Site ve villa projeleri için kurumsal web sitesi",
          image: "/projects/effe-mimarlik.svg",
          link: "https://www.effemimarlik.com.tr",
          tech: ["WordPress", "PHP", "CSS", "Responsive Design"],
          category: "Kurumsal Web Sitesi",
          status: "Tamamlandı"
        },
        {
          title: "Vertex Yapı",
          description: "Kaba inşaat firması için profesyonel web sitesi",
          image: "/projects/vertex-yapi.svg",
          link: "https://www.vertexyapi.com",
          tech: ["React", "Next.js", "Tailwind CSS", "SEO"],
          category: "Kurumsal Web Sitesi",
          status: "Tamamlandı"
        },
        {
          title: "Avax Savunma",
          description: "Askeri outdoor giyim firması için e-ticaret sitesi",
          image: "/projects/avax-savunma.svg",
          link: "https://www.avaxsavunma.com.tr",
          tech: ["React", "Node.js", "MongoDB", "E-commerce"],
          category: "E-ticaret Sitesi",
          status: "Tamamlandı"
        },
        {
          title: "Simay.tech",
          description: "Web sitesi ve yapay zeka sesli asistan otomasyon sistemleri",
          image: "/projects/simay-tech.svg",
          link: "https://simay.tech",
          tech: ["AI/ML", "React", "Python", "Automation"],
          category: "AI & Otomasyon",
          status: "Tamamlandı"
        },
        {
          title: "Bahadır Gemalmaz",
          description: "Kişisel portfolyo ve profesyonel web sitesi",
          image: "/projects/bahadir-portfolio.svg",
          link: "https://www.bahadirgemalmaz.com",
          tech: ["Next.js", "React", "Tailwind CSS", "GSAP"],
          category: "Portfolyo Sitesi",
          status: "Tamamlandı"
        },
        {
          title: "Silifke Teknoloji",
          description: "Teknoloji ve inovasyon odaklı organizasyon web sitesi",
          image: "/projects/silifke-teknoloji.svg",
          link: "https://www.silifketeknoloji.org",
          tech: ["Next.js", "React", "Tailwind CSS", "Modern Web"],
          category: "Teknoloji Organizasyonu",
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
      }
    ],
    contact: {
      title: "Projenizi Konuşalım",
      subtitle: "Hayalinizdeki projeyi gerçeğe dönüştürmek için buradayım",
      email: "bahadir@example.com",
      phone: "+90 555 123 45 67",
      location: "İstanbul, Türkiye"
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

      // Scroll animations
      gsap.fromTo(
        ".stats-item",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".stats-section",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
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

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      clearInterval(quoteInterval)
      clearInterval(messageInterval)
      window.removeEventListener("mousemove", handleMouseMove)
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={portfolioData.header.logo}
              alt="Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full ring-2 ring-blue-500/20"
            />
            <span className="font-black text-lg sm:text-xl md:text-2xl tracking-tight text-gray-900 truncate">
              {portfolioData.header.title}
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {portfolioData.header.menu.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(index + 1)}
                className={`text-sm font-semibold transition-all duration-300 hover:text-blue-600 modern-focus relative group ${
                  currentSection === index + 1 ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full ${
                  currentSection === index + 1 ? "w-full" : ""
                }`}></span>
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 modern-focus rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menüyü aç"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-gray-200/50 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-3">
                {portfolioData.header.menu.map((item, index) => (
                  <button
                    key={item}
                    onClick={() => {
                      scrollToSection(index + 1)
                      setIsMobileMenuOpen(false)
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors hover:bg-gray-50 ${
                      currentSection === index + 1 ? "text-blue-600 bg-blue-50" : "text-gray-700"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23e5e7eb" fill-opacity="0.3"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        {/* Floating Messages - Hidden on mobile */}
        <div className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 space-y-4 hidden lg:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMessage}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="floating-message bg-white/80 backdrop-blur-md rounded-xl p-4 max-w-xs shadow-lg border border-gray-200/50"
            >
              <p className="text-sm text-gray-700 font-medium">{portfolioData.hero.leftMessages[currentMessage]}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center hero-content px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8 sm:mb-12"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 text-optimized">
              <span className="block bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                {portfolioData.hero.name.split(' ')[0]}
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {portfolioData.hero.name.split(' ')[1]}
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto font-medium">
              {portfolioData.hero.title}
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
              className="max-w-3xl mx-auto mb-8 sm:mb-12"
            >
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gray-200/50">
                <p className="text-lg sm:text-xl text-gray-700 italic font-medium">
                  "{portfolioData.hero.motivationalQuotes[currentQuote]}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection(1)}
              className="group w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 sm:px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl modern-focus"
            >
              <span className="flex items-center gap-2">
                Hakkımda
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <button
              onClick={() => scrollToSection(4)}
              className="group w-full sm:w-auto bg-white/90 backdrop-blur-md hover:bg-white text-gray-800 px-8 sm:px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200/50 modern-focus"
            >
              <span className="flex items-center gap-2">
                Projelerimi Gör
                <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </span>
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-2 md:order-1"
            >
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-2xl opacity-20"></div>
                <img
                  src={portfolioData.about.photo}
                  alt="Bahadır Gemalmaz"
                  className="relative w-full h-full object-cover rounded-full border-4 border-blue-200/50 gpu-accelerated shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8 order-1 md:order-2 text-center md:text-left"
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-4">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Web Tasarımcısı & Otomasyon Uzmanı
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-black mb-6 text-gray-900">Hakkımda</h2>
              
              {portfolioData.about.description.map((paragraph, index) => (
                <p key={index} className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-4 pt-6">
                {portfolioData.about.socials.github && (
                  <a
                    href={portfolioData.about.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-gray-100 hover:bg-blue-100 rounded-xl transition-all duration-300 modern-focus"
                    aria-label="GitHub profili"
                  >
                    <Github className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                  </a>
                )}
                {portfolioData.about.socials.linkedin && (
                  <a
                    href={portfolioData.about.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-gray-100 hover:bg-blue-100 rounded-xl transition-all duration-300 modern-focus"
                    aria-label="LinkedIn profili"
                  >
                    <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                  </a>
                )}
                {portfolioData.about.socials.email && (
                  <a
                    href={`mailto:${portfolioData.about.socials.email}`}
                    className="group p-3 bg-gray-100 hover:bg-blue-100 rounded-xl transition-all duration-300 modern-focus"
                    aria-label="E-posta gönder"
                  >
                    <Mail className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                  </a>
                )}
                {portfolioData.about.socials.cv && (
                  <a
                    href={portfolioData.about.socials.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-gray-100 hover:bg-blue-100 rounded-xl transition-all duration-300 modern-focus"
                    aria-label="CV indir"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
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

          {/* VIP References Content - Enhanced Design */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - References List */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Güvenilen Markaların Tercihi
              </h3>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Müşterilerimle kurduğum güven ilişkisi ve kaliteli iş çıktıları sayesinde, 
                farklı sektörlerden prestijli firmaların tercih ettiği bir geliştirici oldum.
              </p>
              
              {/* References Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-white/90 font-medium">Effe Mimarlık</span>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-white/90 font-medium">Vertex Yapı</span>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-white/90 font-medium">Avax Savunma</span>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                    <span className="text-white/90 font-medium">Simay Hareketi</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Success Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Başarı Hikayeleri
              </h3>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Her proje, sadece teknik mükemmellik değil, aynı zamanda iş hedeflerine ulaşma 
                ve müşteri memnuniyeti sağlama konusunda da başarı hikayesi.
              </p>
              
              {/* Success Stories */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Hızlı MVP Geliştirme</h4>
                      <p className="text-white/70 text-sm">Projeleri ortalama 2-3 haftada tamamlayarak, müşterilerin pazara hızlı giriş yapmasını sağlıyorum.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-xl p-6 border border-green-400/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">💎</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Premium Kalite</h4>
                      <p className="text-white/70 text-sm">Her projede pixel-perfect tasarım ve optimize edilmiş performans garantisi veriyorum.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Sürekli İletişim</h4>
                      <p className="text-white/70 text-sm">Proje süresince her adımda müşteriyi bilgilendirerek, şeffaf ve güvenilir bir süreç sunuyorum.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-blue-400/50">
                    Proje Başlat
                  </button>
                  <button className="border border-white/30 hover:border-white/50 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                    Portfolyo İncele
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black skills-section relative">
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
            
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Yetenekler
            </h2>
            <p className="text-xl md:text-2xl text-white/70 font-medium">Teknik ve kişisel becerilerim</p>
          </motion.div>

          {/* Technical Skills - VIP Premium Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {Object.entries(portfolioData.skills.technical).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="skill-card group relative"
              >
                <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 h-full overflow-hidden">
                  {/* VIP Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500"></div>
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                  </div>
                  
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* VIP Crown Icon */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Category Icon and Image */}
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative">
                      {/* VIP Border Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/50 via-orange-500/50 to-red-500/50 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {category === "Frontend Geliştirme" && (
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center relative z-10">
                          <Code className="w-6 h-6 text-white" />
                        </div>
                      )}
                      {category === "Tasarım & UX" && (
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center relative z-10">
                          <Palette className="w-6 h-6 text-white" />
                        </div>
                      )}
                      {category === "Altyapı & Otomasyon" && (
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center relative z-10">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                      )}
                      {category === "Animasyon & Etkileşim" && (
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center relative z-10">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                          </svg>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-6 text-white group-hover:text-green-400 transition-colors duration-300">
                      {category}
                    </h3>
                    
                    <div className="space-y-3">
                      {skills.map((skill) => (
                        <div key={skill} className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 text-white/90 text-sm font-medium border border-white/10 hover:border-green-400/30 transition-all duration-300 group-hover:bg-white/10">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills - Modern Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Kişisel Beceriler
              </h3>
              <p className="text-white/60 text-lg max-w-3xl mx-auto">
                Geleneksel becerileri modern startup ekosisteminde değer yaratan yaklaşımlara dönüştürdüm. 
                Her bir yetkinlik, günümüzün hızlı değişen teknoloji dünyasında başarı için kritik öneme sahip.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolioData.skills.softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 text-center h-full overflow-hidden">
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`
                      }}></div>
                    </div>
                    
                    {/* Enhanced Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                    
                    {/* Skill Icon Container */}
                    <div className="relative z-10">
                      <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-pink-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                        <span className="text-3xl filter drop-shadow-lg">{skill.icon}</span>
                      </div>
                      
                      {/* Skill Name */}
                      <div className="text-white/95 font-bold text-base mb-3 group-hover:text-blue-200 transition-colors duration-300">
                        {skill.name}
                      </div>
                      
                      {/* Skill Description */}
                      <div className="text-white/70 text-sm leading-relaxed group-hover:text-blue-100 transition-colors duration-300 px-2">
                        {skill.description}
                      </div>
                    </div>
                    
                    {/* Enhanced Hover Effects */}
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                    
                    {/* Corner Accent */}
                    <div className="absolute top-3 right-3 w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools - Modern Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Kullandığım Araçlar
            </h3>
            
            {/* Tools Categories */}
            <div className="space-y-12">
              {Object.entries(portfolioData.skills.tools).map(([category, tools], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                  className="space-y-6"
                >
                  {/* Category Header */}
                  <div className="text-center">
                    <h4 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {category}
                    </h4>
                  </div>
                  
                  {/* Tools Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {tools.map((tool, toolIndex) => (
                      <motion.div
                        key={tool}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: categoryIndex * 0.2 + toolIndex * 0.05 }}
                        className="group relative"
                      >
                        <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 text-center">
                          {/* Background glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Tool Icon */}
                          <div className="relative z-10">
                            <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                              <Zap className="w-4 h-4 text-blue-400" />
                            </div>
                            <div className="text-white/90 text-xs font-medium group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                              {tool}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Premium Skills Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-yellow-400/20 relative overflow-hidden">
              {/* VIP Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
              </div>
              
              {/* VIP Crown Icon */}
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                </div>
              </div>
              
              <div className="relative z-10 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Premium Yetenek Seti
                </h3>
                <p className="text-white/80 text-lg leading-relaxed max-w-4xl mx-auto">
                  Modern web teknolojileri, tasarım araçları ve otomasyon sistemleri konusunda uzmanlaşmış bir geliştirici olarak, 
                  her projeye startup vibe hissi veren dinamik ve akıcı etkileşimler katıyorum. 
                  Güvenli, ölçeklenebilir altyapılar ve iş süreçlerini hızlandıran otomasyonlar ile 
                  müşterilerimin dijital dönüşümüne katkı sağlıyorum.
                </p>
                
                {/* Skill Highlights */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                      <Code className="w-6 h-6 text-blue-400" />
                    </div>
                    <p className="text-white/70 text-sm">Modern Arayüzler</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                      <Palette className="w-6 h-6 text-purple-400" />
                    </div>
                    <p className="text-white/70 text-sm">UX Odaklı Tasarım</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-green-400" />
                    </div>
                    <p className="text-white/70 text-sm">Otomasyon Sistemleri</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                      </svg>
                    </div>
                    <p className="text-white/70 text-sm">Dinamik Etkileşimler</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Showcase Section */}
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
              Yetenek Seti
            </h2>
            <p className="text-xl md:text-2xl text-white/70 font-medium">Startup ekosisteminde değer yaratan yaklaşımlar</p>
          </motion.div>

          {/* Skills Grid with Enhanced Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {portfolioData.skills.softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-white/15 via-white/8 to-white/15 backdrop-blur-xl rounded-2xl p-8 border border-white/25 hover:border-blue-400/60 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40 text-center h-full overflow-hidden">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                  </div>
                  
                  {/* Enhanced Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-pink-500/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000 blur-xl"></div>
                  
                  {/* Skill Icon Container */}
                  <div className="relative z-10">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-pink-500/40 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-2xl">
                      <span className="text-4xl filter drop-shadow-lg">{skill.icon}</span>
                    </div>
                    
                    {/* Skill Name */}
                    <div className="text-white/95 font-bold text-lg mb-4 group-hover:text-blue-200 transition-colors duration-500">
                      {skill.name}
                    </div>
                    
                    {/* Skill Description */}
                    <div className="text-white/75 text-base leading-relaxed group-hover:text-blue-100 transition-colors duration-500 px-2">
                      {skill.description}
                    </div>
                  </div>
                  
                  {/* Enhanced Hover Effects */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
                  
                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 scale-0 group-hover:scale-100"></div>
                  
                  {/* Floating Particles */}
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-pulse"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-purple-400/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-pulse delay-300"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-blue-400/20 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Startup Mentality ile Geliştirilen Yetenekler
                </h3>
                <p className="text-white/80 text-lg leading-relaxed max-w-4xl mx-auto mb-8">
                  Her bir beceri, modern iş dünyasında ve startup ekosisteminde başarı için kritik öneme sahip. 
                  Bu yetkinlikler sadece kişisel gelişimi değil, aynı zamanda takım performansını ve proje başarısını da artırıyor.
                </p>
                
                {/* Skill Categories */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <p className="text-white/70 text-sm font-medium">Stratejik Düşünme</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <p className="text-white/70 text-sm font-medium">Hızlı Uygulama</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <p className="text-white/70 text-sm font-medium">İşbirliği</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">💡</span>
                    </div>
                    <p className="text-white/70 text-sm font-medium">İnovasyon</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black projects-section relative">
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
                  <div className="relative overflow-hidden h-40 md:h-52">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain p-4 md:p-6 group-hover:scale-110 transition-transform duration-500"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="testimonial-card group"
              >
                <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 h-full">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Quote Icon */}
                  <div className="relative z-10 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="relative z-10 flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 mb-6">
                    <p className="text-white/80 italic text-lg leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  {/* Author Info */}
                  <div className="relative z-10 flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-white/20 group-hover:border-green-400/50 transition-colors duration-300">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-white/60 text-sm">{testimonial.role}</p>
                      <p className="text-green-400/80 text-xs font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Siz de Memnun Müşterilerimizden Olun
              </h3>
              <p className="text-white/70 mb-6 text-lg">
                Projenizi hayata geçirmek için hemen iletişime geçin
              </p>
              <button
                onClick={() => scrollToSection(5)}
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-green-400/50"
              >
                İletişime Geç
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-black to-blue-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">{portfolioData.contact.title}</h2>
            <p className="text-xl text-white/70">{portfolioData.contact.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="font-semibold">E-posta</h3>
                  <p className="text-white/70">{portfolioData.contact.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Users className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="font-semibold">Telefon</h3>
                  <p className="text-white/70">{portfolioData.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Globe className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="font-semibold">Konum</h3>
                  <p className="text-white/70">{portfolioData.contact.location}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">İsim</label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
                    placeholder="Adınız"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">E-posta</label>
                  <input
                    type="email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
                    placeholder="e-posta@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mesaj</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 resize-none"
                    placeholder="Projeniz hakkında bilgi verin..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Mesaj Gönder
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

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