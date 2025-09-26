"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { LucideIcon } from "lucide-react"
import {
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Bot,
  Clock,
  Crown,
  Cpu,
  ExternalLink,
  Gem,
  Github,
  Handshake,
  Instagram,
  Lightbulb,
  Linkedin,
  Mail,
  Palette,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react"
import SplashCursor from "@/components/SplashCursor"
import FinalCTA from "@/components/FinalCTA"

type SkillIconKey = "code" | "palette" | "server" | "ai" | "learning"

const skillIconMap: Record<SkillIconKey, LucideIcon> = {
  code: Cpu,
  palette: Palette,
  server: Server,
  ai: Bot,
  learning: BookOpen,
}

type TechnicalDiscipline = {
  title: string
  description: string
  icon: SkillIconKey
  level: "İleri" | "Orta" | "Öğrenim Aşamasında"
  gradient: string
  skills: string[]
}

type SoftSkill = {
  name: string
  description: string
  icon: LucideIcon
}

type PremiumProcessItem = {
  title: string
  description: string
  detail: string
  icon: LucideIcon
}

type Stat = {
  label: string
  value: string
  caption: string
  icon: LucideIcon
}

const portfolioData = {
  header: {
    logo: "/profile.png",
    title: "Bahadır Gemalmaz",
    subtitle: "Web Tasarımcısı • Otomasyon Uzmanı",
    menu: ["Hakkımda", "Projeler", "Yetenekler", "İletişim"],
  },
  hero: {
    name: "Bahadır Gemalmaz",
    title: "Dijital markalar için lüks deneyimler tasarlayan ürün ve otomasyon lideri",
    leftMessages: [
      "Pixel-perfect demek, Bahadır'ın imzası demektir.",
      "Kahve, kod ve mikro etkileşim üçlüsü.",
      "Bir web sitesi 3 saniyede açılmıyorsa yeniden yazarım.",
      "Sadelik, premium deneyimin ilk kuralı.",
      "Gece deploy? En sevdiğim ritüel.",
      "Figma açılmadan gün başlamaz.",
      "Başarı detayda saklıdır.",
      "Her çözüm strateji ile başlar.",
      "Tasarım + hız = imzam.",
      "AI entegrasyonu, projelerimin vazgeçilmezi.",
      "Her buton bir deneyimdir.",
      "Kod, disiplinle birleştiğinde fark yaratır.",
      "Müşteri geri bildirimi = iterasyon fırsatı.",
      "Startup zihniyeti ile premium sonuçlar.",
      "Hayal et, tasarla, canlıya al.",
      "İyi metrikler, iyi ürün stratejisinden doğar.",
    ],
    motivationalQuotes: [
      "Her fikir, kodla can bulur.",
      "Bugünün çabası, yarının referansı.",
      "Sadelik, ustalığın göstergesidir.",
      "Hayal et, tasarla, uygula.",
      "Bir satır kod, bin kelimeye bedeldir.",
      "Disiplin, yetenekten daha etkilidir.",
      "Zaman geçer ama iyi kod kalır.",
      "Tasarım; ne eklediğin değil, neyi çıkardığındır.",
      "Şeffaf süreç, sürdürülebilir büyüme getirir.",
      "Her piksel, stratejinin parçası.",
    ],
  },
  about: {
    photo: "/profile.png",
    description: [
      "Merhaba, ben Bahadır. Web tasarımı ve otomasyon alanlarında uzmanlaşmış, performans odaklı dijital ürünler geliştiriyorum. Markaların ihtiyacını anlamak, buna uygun deneyimler tasarlamak ve otomasyonla güçlendirmek odak noktam.",
      "Silifke Teknoloji Kulübü'nü kurarak gençlerle birlikte \"vibe coding\" kültürünü yaygınlaştırıyorum. Yereldeki sorunları teknolojiyle dönüştürürken aynı zamanda sürdürülebilir iş modelleri oluşturuyoruz.",
      "Amacım, stratejisi belirli, metriği ölçülebilir ve etkisi yüksek işler üretmek. Doğru ekip ve net yol haritası ile kıyıda kahve içerken bile dünyayı değiştirecek fikirler geliştirilebilir.",
    ],
    socials: {
      github: "https://github.com/bahadirdeveloper",
      linkedin: "https://linkedin.com/in/bahadirgemalmaz",
      instagram: "https://www.instagram.com/silifketechnology/",
      email: "bahdevpro@gmail.com",
      cv: "/cv.pdf",
    },
    references: [
      "https://www.simayhareketi.org",
      "https://www.effemimarlik.com.tr",
      "https://www.avaxsavunma.com.tr",
      "https://www.simayhareketi.com",
      "https://www.mahallepanosu.org",
      "https://www.silifketeknoloji.org",
      "https://www.bahadirgemalmaz.com",
      "https://simay.tech",
    ],
  },
  skills: {
    technical: [
      {
        title: "Frontend Geliştirme",
        description: "Next.js ile hız, GSAP & Framer ile dramatik etkileşimler.",
        icon: "code",
        level: "İleri",
        gradient: "from-blue-500 via-cyan-500 to-sky-500",
        skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind", "Framer Motion", "GSAP"],
      },
      {
        title: "Ürün Tasarımı & UX",
        description: "Lüks markalar için mikro kurgularla güçlendirilmiş akıcı deneyimler.",
        icon: "palette",
        level: "İleri",
        gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
        skills: ["Figma", "Design Systems", "Prototyping", "Design Ops", "Storytelling"],
      },
      {
        title: "Backend & Otomasyon",
        description: "Supabase, Firebase ve Node.js ile güvenilir altyapılar.",
        icon: "server",
        level: "Orta",
        gradient: "from-emerald-500 via-teal-500 to-green-500",
        skills: ["Node.js", "Supabase", "Firebase", "Python", "n8n", "Webhooks"],
      },
      {
        title: "AI & No-Code",
        description: "ChatGPT, otomasyon ve no-code ekosistemi ile hızlı MVP'ler.",
        icon: "ai",
        level: "Orta",
        gradient: "from-amber-500 via-orange-500 to-rose-500",
        skills: ["OpenAI", "Automation", "Prompt Engineering", "AI Agents", "No-code Ops"],
      },
      {
        title: "Yeni Teknolojiler",
        description: "Rust, Svelte ve WebAssembly araştırmalarıyla deneysel projeler.",
        icon: "learning",
        level: "Öğrenim Aşamasında",
        gradient: "from-slate-500 via-zinc-500 to-gray-500",
        skills: ["Rust", "Svelte", "WebAssembly", "Vue", "Three.js"],
      },
    ] satisfies TechnicalDiscipline[],
    softSkills: [
      {
        name: "Stratejik Problem Çözme",
        description: "Zorlukları hızlı MVP ve ölçülebilir metriklerle çözerim.",
        icon: Target,
      },
      {
        name: "Takım Liderliği",
        description: "Kolektif üretim kültürü ve sahada birlikte çalışma.",
        icon: Users,
      },
      {
        name: "Yaratıcı Yaklaşım",
        description: "Startup zihniyeti ile inovatif, çarpıcı sonuçlar.",
        icon: Lightbulb,
      },
      {
        name: "Hızlı Teslim & Disiplin",
        description: "2-3 haftada premium MVP, süreç boyunca şeffaf iletişim.",
        icon: Rocket,
      },
    ] satisfies SoftSkill[],
    tools: [
      "VSCode",
      "Cursor",
      "Git",
      "Vercel",
      "Netlify",
      "Supabase",
      "n8n",
      "OpenAI",
      "Figma",
      "Postman",
      "Linear",
      "Notion",
    ],
  },
  projects: {
    featured: [
      {
        title: "Silifke Teknoloji",
        description: "Topluluk odaklı teknoloji organizasyonuna özel etkileşimli platform.",
        image: "/silifketeknoloji.webp",
        link: "https://www.silifketeknoloji.org",
        tech: ["Next.js", "React", "Tailwind", "GSAP"],
        category: "Teknoloji Organizasyonu",
        status: "Tamamlandı",
      },
      {
        title: "Bahadır Gemalmaz",
        description: "Kişisel marka için mikro animasyonlarla güçlendirilmiş portfolyo.",
        image: "/portfolio.webp",
        link: "https://www.bahadirgemalmaz.com",
        tech: ["Next.js", "Framer Motion", "Tailwind"],
        category: "Portfolyo",
        status: "Tamamlandı",
      },
      {
        title: "Simay.tech",
        description: "AI sesli asistan ve otomasyon çözümleri platformu.",
        image: "/simay.tech.webp",
        link: "https://simay.tech",
        tech: ["AI/ML", "React", "Python", "Automation"],
        category: "AI & Otomasyon",
        status: "Tamamlandı",
      },
      {
        title: "Avax Savunma",
        description: "Askeri outdoor firması için güvenli, yüksek dönüşümlü e-ticaret deneyimi.",
        image: "/avaxsavunma.webp",
        link: "https://www.avaxsavunma.com.tr",
        tech: ["React", "Node.js", "MongoDB"],
        category: "E-ticaret",
        status: "Tamamlandı",
      },
      {
        title: "Vertex Yapı",
        description: "SEO öncelikli kurumsal web sitesi ve lead toplama kurgusu.",
        image: "/vertexyapi.webp",
        link: "https://www.vertexyapi.com",
        tech: ["React", "Next.js", "Tailwind"],
        category: "Kurumsal",
        status: "Tamamlandı",
      },
      {
        title: "Effe Mimarlık",
        description: "Mimarlık firması için şık, yüksek çözünürlüklü projeksiyon.",
        image: "/effemimarlik.webp",
        link: "https://www.effemimarlik.com.tr",
        tech: ["WordPress", "PHP", "Custom CSS"],
        category: "Kurumsal",
        status: "Tamamlandı",
      },
    ],
  },
  testimonials: [
    {
      name: "Ahmet Yılmaz",
      role: "Simay Hareketi Başkanı",
      content:
        "Bahadır'ın profesyonel yaklaşımı ve kaliteli işi sayesinde hayalimizdeki web sitesine kavuştuk. Sürecin her adımında bizi bilgilendirdi ve beklentilerimizi aştı.",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      company: "Simay Hareketi",
    },
    {
      name: "Ayşe Demir",
      role: "Effe Mimarlık Kurucusu",
      content:
        "Hızlı, güvenilir ve yaratıcı çözümler. Mimarlık firmamız için mükemmel bir web sitesi tasarladı. Müşteri memnuniyetimiz %100 arttı.",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      company: "Effe Mimarlık",
    },
    {
      name: "Mehmet Kaya",
      role: "Avax Savunma CEO",
      content:
        "Teknik bilgisi ve müşteri odaklı yaklaşımı ile beklentilerimizi aştı. E-ticaret sitemiz satışlarımızı %300 artırdı. Kesinlikle tavsiye ederim.",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      company: "Avax Savunma",
    },
    {
      name: "Fatma Özkan",
      role: "Vertex Yapı Genel Müdürü",
      content:
        "İnşaat sektöründe dijital varlığımızı güçlendirdi. Profesyonel yaklaşım, yüksek kalite.",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      company: "Vertex Yapı",
    },
    {
      name: "Ali Yıldız",
      role: "Simay.tech Kurucusu",
      content:
        "AI ve otomasyon projelerimizde müthiş bir iş çıkardı. Teknik bilgisi ve yaratıcılığı ile projeleri hayata geçirdi.",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      company: "Simay.tech",
    },
    {
      name: "Teknoloji Meraklıları",
      role: "Silifke Teknoloji Kulübü Üyeleri",
      content:
        "Bahadır'ın liderliğinde teknoloji projelerimizi hayata geçirdik. Hem öğrendik hem ürettik. Gerçek bir vizyoner ve mentor.",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      company: "Silifke Teknoloji",
    },
  ],
  contact: {
    email: "bahdevpro@gmail.com",
    phone: "+90 533 238 33 91",
    location: "Mersin, Silifke",
  },
} as const

const heroStats: Stat[] = [
  {
    label: "Tamamlanan Proje",
    value: "30+",
    caption: "Kurumsal & büyüme odaklı",
    icon: Trophy,
  },
  {
    label: "İş Birliği Yapılan Marka",
    value: "10+",
    caption: "Teknoloji, mimarlık, savunma",
    icon: Users,
  },
  {
    label: "MVP Teslim Süresi",
    value: "2-3 hafta",
    caption: "İlk versiyon + büyüme seti",
    icon: Clock,
  },
  {
    label: "Memnuniyet Skoru",
    value: "%100",
    caption: "Referans odaklı çalışma",
    icon: BadgeCheck,
  },
]

const premiumProcess: PremiumProcessItem[] = [
  {
    title: "Strateji & Yol Haritası",
    description: "Pazarı, kullanıcıyı ve hedef KPI'ları anlamak için derin keşif.",
    detail: "Analitik veriler, benchmarklar ve marka tonu tek çatı altında toplanır.",
    icon: Target,
  },
  {
    title: "Deneyim Tasarımı",
    description: "Mikro etkileşimler ve içerik hiyerarşisi ile premium kullanıcı yolculuğu.",
    detail: "Figma, component kütüphaneleri ve story-driven içerik kurguları hazırlanır.",
    icon: Palette,
  },
  {
    title: "Geliştirme & Otomasyon",
    description: "Next.js, GSAP ve no-code altyapı ile hızlı, güvenilir MVP üretimi.",
    detail: "Performans, SEO ve otomasyon kurguları entegre edilir.",
    icon: Cpu,
  },
  {
    title: "Büyüme & Destek",
    description: "Testler, metrik takibi ve sürekli iterasyonla sürdürülebilir büyüme.",
    detail: "CRM, e-posta otomasyonları ve analitik KPI raporları paylaşılır.",
    icon: Rocket,
  },
]

const recognitionHighlights = [
  {
    title: "Simay Hareketi",
    note: "Topluluk dönüşüm platformu",
  },
  {
    title: "Avax Savunma",
    note: "%300 satış artışı",
  },
  {
    title: "Silifke Teknoloji Kulübü",
    note: "Kurucu & mentor",
  },
  {
    title: "Simay.tech",
    note: "AI otomasyon ekosistemi",
  },
]

const heroHighlights = [
  "Pixel-perfect UI & mikro animasyonlar",
  "AI destekli operasyon ve otomasyon",
  "Performans odaklı Next.js mimarileri",
  "Stratejik ürün yönetimi ve büyüme",
]

const marqueeReferences = [...portfolioData.about.references, ...portfolioData.about.references]

const badgeVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
}

export default function PortfolioLanding() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState(0)
  const [currentQuote, setCurrentQuote] = useState(0)
  const [currentMessage, setCurrentMessage] = useState(0)

  const sections = useMemo(
    () => [
      "Hero",
      "Hakkımda",
      "Referanslar",
      "Projeler",
      "Yetenekler",
      "Görüşler",
      "İletişim",
    ],
    []
  )

  const scrollToSection = useCallback((index: number) => {
    const section = document.querySelector<HTMLElement>(`[data-section-index="${index}"]`)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  useEffect(() => {
    const quoteTimer = window.setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % portfolioData.hero.motivationalQuotes.length)
    }, 6800)

    const messageTimer = window.setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % portfolioData.hero.leftMessages.length)
    }, 3600)

    return () => {
      clearInterval(quoteTimer)
      clearInterval(messageTimer)
    }
  }, [])

  useEffect(() => {
    const sectionElements = document.querySelectorAll<HTMLElement>("section[data-section-index]")
    if (!sectionElements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement
            const index = Number(element.dataset.sectionIndex)
            if (!Number.isNaN(index)) {
              setActiveSection(index)
            }
          }
        })
      },
      {
        threshold: 0.4,
      }
    )

    sectionElements.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!containerRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.05,
          }
        )
      })

      gsap.utils.toArray<HTMLElement>(".scale-in").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.92 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <SplashCursor />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <img src={portfolioData.header.logo} alt="BG" className="h-10 w-10 rounded-full border border-white/10" />
            <div className="flex flex-col">
              <span className="font-display text-lg font-semibold tracking-tight text-white">
                {portfolioData.header.title}
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.32em] text-white/40">
                {portfolioData.header.subtitle}
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {portfolioData.header.menu.map((item) => {
              const mappedIndex = sections.findIndex((section) => section.includes(item))
              const isActive = mappedIndex === activeSection

              if (item === "İletişim") {
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sections.length - 1)}
                    className={`text-xs font-semibold uppercase tracking-[0.28em] transition-colors hover:text-white ${
                      activeSection === sections.length - 1 ? "text-white" : "text-white/40"
                    }`}
                  >
                    {item}
                  </button>
                )
              }

              return (
                <button
                  key={item}
                  onClick={() => {
                    if (mappedIndex >= 0) {
                      scrollToSection(mappedIndex)
                    }
                  }}
                  className={`text-xs font-semibold uppercase tracking-[0.28em] transition-colors hover:text-white ${
                    isActive ? "text-white" : "text-white/40"
                  }`}
                >
                  {item}
                </button>
              )
            })}
          </nav>

          <a
            href="/contact"
            className="hidden rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 transition-all hover:border-white/40 hover:text-white md:inline-flex"
          >
            Dijital Asistan
          </a>
        </div>
      </header>

      <main className="pt-28">
        <section
          data-section-index={0}
          className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_55%)] pb-24 pt-28"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1.05fr,0.95fr]">
            <div className="space-y-10">
              <motion.div initial="hidden" animate="visible" variants={badgeVariants}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
                  <Crown className="h-4 w-4 text-yellow-300" />
                  Ultra VIP Profile
                </span>
              </motion.div>

              <div className="space-y-6">
                <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
                  Dijital markalar için
                  <span className="mx-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-2xl md:text-3xl">
                    <Sparkles className="h-5 w-5 text-blue-200" />
                    premium deneyimler
                  </span>
                  tasarlıyorum.
                </h1>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={portfolioData.hero.motivationalQuotes[currentQuote]}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-xl text-base text-white/70 md:text-lg"
                  >
                    {portfolioData.hero.motivationalQuotes[currentQuote]}
                  </motion.p>
                </AnimatePresence>

                <div className="grid gap-3 sm:max-w-xl">
                  {heroHighlights.map((item) => (
                    <motion.div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:border-white/30 hover:bg-white/10"
                      whileHover={{ x: 6 }}
                    >
                      <Sparkles className="h-4 w-4 text-blue-300" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {heroStats.map(({ label, value, caption, icon: Icon }) => (
                  <motion.div
                    key={label}
                    className="reveal-up rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium uppercase tracking-[0.24em] text-white/40">
                        {label}
                      </span>
                      <Icon className="h-5 w-5 text-white/60" />
                    </div>
                    <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
                    <p className="text-sm text-white/50">{caption}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollToSection(3)}
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/80"
                >
                  Proje vitrinim
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
                >
                  Dijital asistan ile konuş
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-12 top-10 h-56 w-56 rounded-full bg-blue-500/15 blur-3xl" />
              <div className="absolute -right-8 bottom-10 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl" />

              <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-br from-white/8 via-white/3 to-white/10 p-8 text-white shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">Profil anlık özeti</p>
                    <p className="mt-2 text-lg font-semibold text-white">Ürün & Otomasyon Lideri</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                    <ShieldCheck className="h-5 w-5 text-white/70" />
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <div className="relative">
                    <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-500/60 to-purple-500/40 blur" />
                    <img
                      src={portfolioData.about.photo}
                      alt={portfolioData.hero.name}
                      className="relative h-20 w-20 rounded-full border border-white/20"
                    />
                  </div>
                  <div>
                    <p className="font-display text-xl font-semibold">{portfolioData.hero.name}</p>
                    <p className="text-sm text-white/60">Web Tasarımcısı & Otomasyon Uzmanı</p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/30">Manifesto</p>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={portfolioData.hero.leftMessages[currentMessage]}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.45 }}
                      className="mt-4 text-sm text-white/80"
                    >
                      {portfolioData.hero.leftMessages[currentMessage]}
                    </motion.p>
                  </AnimatePresence>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  {recognitionHighlights.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="text-xs text-white/50">{item.note}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between text-xs text-white/50">
                  <span>Trusted by high-impact teams</span>
                  <Star className="h-4 w-4 text-yellow-300" />
                </div>
              </div>

              <motion.div
                className="absolute -right-16 bottom-12 hidden flex-col gap-3 lg:flex"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {[portfolioData.about.socials.github, portfolioData.about.socials.linkedin, portfolioData.about.socials.instagram]
                  .filter(Boolean)
                  .map((link) => {
                    if (!link) return null
                    const label = link.includes("github")
                      ? "GitHub"
                      : link.includes("linkedin")
                        ? "LinkedIn"
                        : "Instagram"
                    const Icon = label === "GitHub" ? Github : label === "LinkedIn" ? Linkedin : Instagram
                    return (
                      <a
                        key={link}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-white/40 hover:bg-white/10"
                        aria-label={`${label} profili`}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    )
                  })}
              </motion.div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center gap-8">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-white/40">
              <span className="h-px w-12 bg-white/20" />
              Referans markalar
              <span className="h-px w-12 bg-white/20" />
            </div>

            <div className="marquee w-full border-y border-white/5 py-4">
              <div className="marquee__content gap-12 text-sm text-white/60">
                {marqueeReferences.map((reference, index) => (
                  <span key={`${reference}-${index}`}>{reference.replace("https://", "")}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section data-section-index={1} className="reveal-up bg-black py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-16 lg:grid-cols-[0.85fr,1.15fr]">
              <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 via-white/2 to-white/5 p-10">
                <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />
                <div className="absolute -right-6 bottom-12 h-40 w-40 rounded-full bg-purple-500/10 blur-2xl" />
                <div className="relative z-10 space-y-6 text-white">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                    <Gem className="h-4 w-4 text-rose-200" />
                    Bahadır ile tanışın
                  </span>
                  <p className="text-lg text-white/75">
                    Ürün stratejisi, deneyim tasarımı ve otomasyonu tek çatı altında buluşturan ender profillerden biriyim.
                    Benimle çalıştığınızda, sürecin her adımını şeffaf raporlarla takip edebilir, metrikleri birlikte büyütebiliriz.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    {portfolioData.about.socials.email && (
                      <a
                        href={`mailto:${portfolioData.about.socials.email}`}
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/70 transition hover:border-white/40 hover:text-white"
                      >
                        <Mail className="h-4 w-4" />
                        E-posta gönder
                      </a>
                    )}
                    {portfolioData.about.socials.cv && (
                      <a
                        href={portfolioData.about.socials.cv}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/70 transition hover:border-white/40 hover:text-white"
                      >
                        <ExternalLink className="h-4 w-4" />
                        CV indir
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-8 text-white/80">
                <h2 className="font-display text-4xl text-white">Stratejiyi tasarımla, tasarımı otomasyonla birleştiren lider.</h2>
                {portfolioData.about.description.map((paragraph, idx) => (
                  <p key={idx} className="text-base leading-relaxed text-white/70">
                    {paragraph}
                  </p>
                ))}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/40">Çekirdek değerler</h3>
                    <ul className="mt-4 space-y-2 text-sm text-white/70">
                      <li className="flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-blue-200" />
                        Şeffaflık & disiplin
                      </li>
                      <li className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-blue-200" />
                        Detaylarda fark yaratma
                      </li>
                      <li className="flex items-center gap-2">
                        <Handshake className="h-4 w-4 text-blue-200" />
                        Uzun vadeli partnerlik
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/40">Lokasyon & iletişim</h3>
                    <p className="mt-4 text-sm text-white/70">{portfolioData.contact.location}</p>
                    <p className="text-sm text-white/50">{portfolioData.contact.phone}</p>
                    <button
                      onClick={() => scrollToSection(sections.length - 1)}
                      className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:border-white/40 hover:text-white"
                    >
                      Projenizi konuşalım
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section data-section-index={2} className="bg-gradient-to-br from-black via-[#05070f] to-[#02040b] py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal-up text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                <Sparkles className="h-4 w-4 text-blue-200" />
                VIP referans havuzu
              </span>
              <h2 className="mt-6 font-display text-4xl text-white">Dönüşüm yaratan markalarla aynı masadayız.</h2>
              <p className="mt-4 text-base text-white/60">
                Kurumsal yapılardan hızlı büyüyen startup&apos;lara kadar; kalite ve hız beklentisi yüksek ekiplerle çalışıyorum.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {portfolioData.about.references.slice(0, 6).map((reference) => (
                <div
                  key={reference}
                  className="scale-in flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-white/70 transition hover:border-white/30 hover:bg-white/10"
                >
                  <div>
                    <p className="text-sm font-semibold text-white/80">{reference.replace("https://", "")}</p>
                    <p className="text-xs text-white/50">Premium iş ortağı</p>
                  </div>
                  <ExternalLink className="h-4 w-4" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section data-section-index={3} className="bg-black py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal-up text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                <Star className="h-4 w-4 text-yellow-300" />
                Öne çıkan projeler
              </span>
              <h2 className="mt-6 font-display text-4xl text-white">Markaların referans aldığı işlerin vitrinine göz atın.</h2>
              <p className="mt-4 text-base text-white/60">
                Her biri strateji, performans ve estetik odağıyla hazırlanmış premium projeler.
              </p>
            </div>

            <div className="mt-16 grid gap-10 lg:grid-cols-2">
              {portfolioData.projects.featured.map((project) => (
                <article
                  key={project.title}
                  className="reveal-up group flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] transition hover:border-white/30 hover:bg-white/10"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/60 to-transparent" />
                    <div className="absolute left-6 bottom-6 flex flex-wrap gap-2 text-xs">
                      {project.tech.map((tech) => (
                        <span key={tech} className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-white/70">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-6 p-8">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-white/40">
                        <span>{project.category}</span>
                        <span className="h-px w-8 bg-white/10" />
                        <span>{project.status}</span>
                      </div>
                      <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                      <p className="text-sm text-white/70">{project.description}</p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-white/60">
                      <span>Detaylara bak</span>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/80 transition hover:text-white"
                      >
                        Görüntüle
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section data-section-index={4} className="bg-gradient-to-b from-black via-[#06070d] to-black py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal-up text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                <Zap className="h-4 w-4 text-sky-300" />
                Teknik kabiliyetler
              </span>
              <h2 className="mt-6 font-display text-4xl text-white">Tasarımın gücünü teknolojinin hızıyla birleştiriyorum.</h2>
              <p className="mt-4 text-base text-white/60">
                Hem görsel hem teknik anlamda premium deneyimi destekleyen beceriler.
              </p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              {portfolioData.skills.technical.map((discipline) => {
                const Icon = skillIconMap[discipline.icon]
                return (
                  <div
                    key={discipline.title}
                    className="reveal-up rounded-[28px] border border-white/10 bg-white/[0.04] p-8"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-white">{discipline.title}</h3>
                        <p className="mt-2 text-sm text-white/60">{discipline.description}</p>
                      </div>
                      <div className={`rounded-2xl bg-gradient-to-br ${discipline.gradient} p-3 text-black/80`}>
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-white/40">
                      <span>Seviye</span>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-white/70">{discipline.level}</span>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {discipline.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              <div className="space-y-4 rounded-[28px] border border-white/10 bg-white/[0.04] p-8">
                <h3 className="text-lg font-semibold text-white">Takımı güçlendiren soft kabiliyetler</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {portfolioData.skills.softSkills.map(({ name, description, icon: Icon }) => (
                    <div key={name} className="rounded-2xl border border-white/10 bg-black/60 p-5 text-white/70">
                      <Icon className="h-5 w-5 text-white/60" />
                      <p className="mt-3 text-base font-semibold text-white">{name}</p>
                      <p className="text-sm">{description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8">
                <h3 className="text-lg font-semibold text-white">Günlük kullandığım araç seti</h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {portfolioData.skills.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm text-white/70"
                    >
                      <CommandSpark />
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section data-section-index={5} className="bg-black py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal-up text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                <BookOpen className="h-4 w-4 text-emerald-200" />
                Bahadır ile çalışma deneyimi
              </span>
              <h2 className="mt-6 font-display text-4xl text-white">Müşteriler premium yaklaşımı nasıl deneyimliyor?</h2>
              <p className="mt-4 text-base text-white/60">
                Ölçülebilir sonuçlar ve samimi iş ortaklıkları. İşte premium sürecin dört adımı.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {premiumProcess.map(({ title, description, detail, icon: Icon }) => (
                <div key={title} className="reveal-up rounded-[28px] border border-white/10 bg-white/[0.04] p-8">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full border border-white/10 bg-white/10 p-3">
                      <Icon className="h-5 w-5 text-white/70" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white">{title}</p>
                      <p className="text-sm text-white/60">{description}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-white/60">{detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {portfolioData.testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="reveal-up flex h-full flex-col rounded-[28px] border border-white/10 bg-white/[0.04] p-8 text-white/70"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5">
                      <Star className="h-5 w-5 text-yellow-300" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-white">{testimonial.name}</p>
                      <p className="text-xs uppercase tracking-[0.28em] text-white/40">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="mt-6 text-sm leading-6">“{testimonial.content}”</p>
                  <p className="mt-auto pt-6 text-xs text-white/40">
                    {testimonial.role} — {"⭐".repeat(testimonial.rating)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section data-section-index={6} className="bg-gradient-to-b from-black via-[#04050a] to-black">
          <FinalCTA phoneNumber="905332383391" email={portfolioData.contact.email} linkedinUrl={portfolioData.about.socials.linkedin} />
        </section>
      </main>
    </div>
  )
}

function CommandSpark() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 text-blue-200"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.364-6.364-2.121 2.121M8.757 8.757 6.636 6.636m10.728 8.485 2.121 2.121M8.757 15.243l-2.121 2.121"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}
