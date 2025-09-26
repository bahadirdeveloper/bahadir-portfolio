"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Send, Phone, Mail, MapPin, Github, Linkedin, Instagram, MessageCircle, X, Minimize2, Maximize2, Sparkles } from "lucide-react"
import Link from "next/link"

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  isTyping?: boolean
}

export default function ContactPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Merhaba! Ben Bahadır\'ın dijital asistanıyım. Size nasıl yardımcı olabilirim?',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate bot response (n8n entegrasyonu burada olacak)
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Mesajınız alındı! Bahadır en kısa sürede size dönüş yapacak. Bu arada projeniz hakkında daha fazla bilgi verebilir misiniz?',
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickReplies = [
    'Proje teklifi almak istiyorum',
    'Fiyat bilgisi',
    'Portfolio görmek istiyorum',
    'Randevu almak istiyorum'
  ]

  const handleQuickReply = (reply: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: reply,
      sender: 'user',
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Harika! Size en uygun çözümü sunmak için birkaç soru sormak istiyorum. Projenizin türü nedir?',
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-[#050608] to-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-56 left-1/2 hidden h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_65%)] blur-3xl lg:block" />
        <div className="absolute bottom-[-160px] right-[-80px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18),transparent_60%)] blur-[160px]" />
      </div>

      {/* Animated Background Dots */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              x: [-10, 10],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="px-6 py-10 sm:px-10">
          <Link href="/">
            <motion.div
              className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
              whileHover={{ x: -6 }}
            >
              <ArrowLeft size={22} />
              <span className="text-sm font-semibold uppercase tracking-[0.24em]">
                Portfolyoya Dön
              </span>
            </motion.div>
          </Link>
        </header>

        <div className="mx-auto max-w-6xl px-4 pb-24 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_35px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl md:p-14 lg:p-20"
          >
            <div className="pointer-events-none absolute -left-20 top-24 h-56 w-56 rounded-full bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-transparent blur-3xl" />
            <div className="pointer-events-none absolute -top-24 right-10 h-52 w-52 rounded-full bg-gradient-to-br from-emerald-400/10 via-teal-400/5 to-transparent blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-100px] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-400/10 via-purple-400/10 to-transparent blur-3xl" />

            <div className="relative text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                <Sparkles className="h-4 w-4 text-emerald-200" />
                Premium iletişim
              </span>
              <h1 className="mt-6 font-display text-4xl tracking-tight text-white md:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Chatbot ile konuşalım
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 md:text-lg">
                WhatsApp benzeri modern chatbot ile projeni birlikte değerlendirelim. İlk strateji mesajından canlı teslimata kadar şeffaf, hızlı ve ölçülebilir bir sürece hazır ol.
              </p>
            </div>

            <div className="relative mt-16 grid gap-12 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-10"
              >
                <div className="rounded-[28px] border border-white/10 bg-black/45 p-8 text-center shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl md:text-left">
                  <div className="mx-auto mb-6 h-28 w-28 rounded-full border border-white/10 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 p-[2px] md:mx-0">
                    <div className="h-full w-full rounded-full bg-black/70 p-1.5">
                      <img src="/profile.png" alt="Bahadır Gemalmaz" className="h-full w-full rounded-full object-cover" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-white">Bahadır Gemalmaz</h2>
                  <p className="mt-2 text-lg text-white/65">Web Tasarımcısı & Otomasyon Uzmanı</p>
                  <p className="mt-6 text-sm text-white/60 md:text-base">
                    Markaların premium dijital deneyimlerini tasarlarken aynı zamanda otomasyonla süreçlerini hızlandırıyorum. Şeffaf iş akışı, dokümante iletişim ve performans odaklı yaklaşım.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <motion.div
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur-lg transition-all hover:border-emerald-200/40"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-emerald-200">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">E-posta</p>
                      <p className="text-sm text-white/60">bahdevpro@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur-lg transition-all hover:border-emerald-200/40"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-emerald-200">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Telefon</p>
                      <p className="text-sm text-white/60">+90 533 238 33 91</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur-lg transition-all hover:border-emerald-200/40 md:col-span-2"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-emerald-200">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Konum</p>
                      <p className="text-sm text-white/60">Mersin, Silifke</p>
                    </div>
                  </motion.div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/45 p-6 text-white/70 backdrop-blur-lg">
                  <p className="text-sm uppercase tracking-[0.28em] text-white/40">Çalışma yaklaşımı</p>
                  <p className="mt-4 text-sm text-white/70 md:text-base">
                    İlk 24 saat içinde projenize geri dönüş, sonrasında net zaman çizelgesi ve şeffaf raporlama. Tasarım, geliştirme ve otomasyon adımlarını birlikte planlıyoruz.
                  </p>
                  <ul className="mt-6 space-y-2 text-sm text-white/60">
                    <li>- 45 dakikalık keşif görüşmesi</li>
                    <li>- Mikro teslimatlar ve haftalık durum raporu</li>
                    <li>- Metriğe bağlı karar alma ve iyileştirme</li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-white/40">Beni takip et</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <motion.a
                      href="https://github.com/bahadirdeveloper"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 transition-colors hover:border-emerald-200/40 hover:text-white"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={22} />
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com/in/bahadirgemalmaz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 transition-colors hover:border-emerald-200/40 hover:text-white"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin size={22} />
                    </motion.a>
                    <motion.a
                      href="https://www.instagram.com/silifketechnology/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 transition-colors hover:border-emerald-200/40 hover:text-white"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Instagram size={22} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col rounded-[28px] border border-white/10 bg-black/55 p-8 shadow-[0_24px_65px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
              >
                <div className="text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-200/40 bg-gradient-to-br from-emerald-400/20 via-teal-400/20 to-transparent">
                    <MessageCircle className="h-7 w-7 text-emerald-200" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Dijital Asistan</h3>
                  <p className="mt-3 text-sm text-white/65">
                    Projenizin detaylarını paylaşın, dakikalar içinde bir keşif akışı başlatalım.
                  </p>
                </div>

                <motion.button
                  onClick={() => setChatOpen(true)}
                  className="mt-10 inline-flex items-center justify-center gap-3 rounded-full border border-emerald-200/40 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:shadow-[0_25px_55px_rgba(16,185,129,0.4)]"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Chatbot&apos;u Başlat</span>
                </motion.button>

                <div className="mt-10 text-center">
                  <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                    Hızlı başlangıç
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {quickReplies.map((reply, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleQuickReply(reply)}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm text-white/70 transition-all hover:border-emerald-200/40 hover:bg-white/[0.12]"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                      >
                        {reply}
                      </motion.button>
                    ))}
                  </div>
                  <p className="mt-6 text-xs text-white/40">
                    İlk mesajınıza <span className="text-emerald-200">24 saat</span> içinde dönüş.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Chatbot */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ opacity: 0, scale: 0.85, y: 90 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 90 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex h-[500px] w-96 flex-col rounded-2xl border border-white/10 bg-black/90 text-white shadow-[0_24px_80px_rgba(0,0,0,0.65)] backdrop-blur-xl">
              {/* Chat Header */}
              <div className="flex items-center justify-between rounded-t-2xl border-b border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200/40 bg-gradient-to-br from-emerald-400/20 via-teal-400/20 to-transparent">
                    <MessageCircle size={18} className="text-emerald-200" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Bahadır Asistan</h4>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">Çevrimiçi</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="rounded-md p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                  </button>
                  <button
                    onClick={() => setChatOpen(false)}
                    className="rounded-md p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Chat Messages */}
              {!isMinimized && (
                <>
                  <div className="flex-1 space-y-4 overflow-y-auto bg-black/60 px-5 py-6">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div
                          className={`max-w-xs rounded-2xl px-4 py-2 lg:max-w-md ${
                            message.sender === 'user'
                              ? 'rounded-br-md bg-gradient-to-r from-emerald-400 to-teal-400 text-black shadow-[0_12px_30px_rgba(16,185,129,0.35)]'
                              : 'rounded-bl-md border border-white/10 bg-white/10 text-white/80 backdrop-blur-lg'
                          }`}
                        >
                          <p className="text-sm leading-5">{message.text}</p>
                          <p className={`mt-2 text-[11px] ${
                            message.sender === 'user' ? 'text-black/70' : 'text-white/40'
                          }`}>
                            {message.timestamp.toLocaleTimeString('tr-TR', {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                      </motion.div>
                    ))}

                    {isTyping && (
                      <motion.div
                        className="flex justify-start"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <div className="rounded-2xl rounded-bl-md border border-white/10 bg-white/10 px-4 py-2 text-white/70 backdrop-blur-lg">
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1">
                              <div className="h-2 w-2 animate-bounce rounded-full bg-white/50" />
                              <div className="h-2 w-2 animate-bounce rounded-full bg-white/50" style={{ animationDelay: '0.1s' }} />
                              <div className="h-2 w-2 animate-bounce rounded-full bg-white/50" style={{ animationDelay: '0.2s' }} />
                            </div>
                            <span className="text-[11px] text-white/40">Yazıyor...</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Chat Input */}
                  <div className="border-t border-white/10 bg-black/80 px-5 py-4">
                    <div className="flex items-center gap-2">
                      <input
                        ref={inputRef}
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Mesajınızı yazın..."
                        className="flex-1 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-emerald-200/40 focus:outline-none focus:ring-1 focus:ring-emerald-200/40"
                      />
                      <motion.button
                        onClick={handleSendMessage}
                        disabled={!inputMessage.trim()}
                        className="rounded-full border border-emerald-200/40 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 p-2 text-black transition-all duration-200 hover:shadow-[0_12px_28px_rgba(16,185,129,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Send size={16} />
                      </motion.button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
