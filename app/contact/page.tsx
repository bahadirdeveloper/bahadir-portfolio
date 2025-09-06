"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Send, Phone, Mail, MapPin, Github, Linkedin, Instagram, MessageCircle, X, Minimize2, Maximize2 } from "lucide-react"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated Background Dots */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              x: [-10, 10],
              opacity: [0.3, 0.8, 0.3],
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
        <header className="p-8">
          <Link href="/">
            <motion.div
              className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors cursor-pointer"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft size={24} />
              <span className="font-bold">Portfolyoya Dön</span>
            </motion.div>
          </Link>
        </header>

        <div className="max-w-6xl mx-auto pt-32 pb-32 px-4 md:px-8 lg:px-16">
          <motion.h1
            className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            CHATBOT İLE KONUŞALIM
          </motion.h1>

          <motion.p
            className="text-xl text-center text-purple-200 mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            WhatsApp benzeri modern chatbot ile projelerinizi tartışalım. Hızlı, kolay ve etkili iletişim!
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="mb-12">
                <div className="w-32 h-32 mx-auto lg:mx-0 mb-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center overflow-hidden">
                  <img src="/profile.png" alt="Bahadır Gemalmaz" className="w-28 h-28 object-cover rounded-full" />
                </div>
                <h2 className="text-3xl font-black mb-2">Bahadır Gemalmaz</h2>
                <p className="text-purple-300 text-lg">Web Tasarımcısı & Otomasyon Uzmanı</p>
              </div>

              <div className="space-y-6">
                <motion.div
                  className="flex items-center gap-4 p-4 bg-black/30 rounded-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  <Mail className="text-purple-400" size={24} />
                  <div>
                    <p className="font-semibold">E-posta</p>
                    <p className="text-purple-200">bahdevpro@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 bg-black/30 rounded-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  <Phone className="text-purple-400" size={24} />
                  <div>
                    <p className="font-semibold">Telefon</p>
                    <p className="text-purple-200">+90 533 238 33 91</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 bg-black/30 rounded-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  <MapPin className="text-purple-400" size={24} />
                  <div>
                    <p className="font-semibold">Konum</p>
                    <p className="text-purple-200">Mersin, Silifke</p>
                  </div>
                </motion.div>
              </div>

              <div className="pt-8">
                <h3 className="text-xl font-bold mb-4">Beni Takip Et</h3>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/bahadirgemalmaz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-black/30 rounded-lg backdrop-blur-sm hover:bg-purple-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/bahadirgemalmaz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-black/30 rounded-lg backdrop-blur-sm hover:bg-blue-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin size={24} />
                  </motion.a>
                  <motion.a
                    href="https://instagram.com/bahadirgemalmaz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-black/30 rounded-lg backdrop-blur-sm hover:bg-pink-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Instagram size={24} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Chatbot Interface */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Chatbot Preview */}
              <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 h-[600px] flex flex-col">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Dijital Asistan</h3>
                  <p className="text-purple-200">Projelerinizi tartışmak için chatbot\'u başlatın</p>
                </div>

                <motion.button
                  onClick={() => setChatOpen(true)}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle size={24} />
                  <span>Chatbot\'u Başlat</span>
                </motion.button>

                <div className="mt-8 text-center">
                  <p className="text-sm text-purple-300 mb-4">Hızlı başlangıç için:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickReplies.map((reply, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleQuickReply(reply)}
                        className="p-3 bg-black/20 rounded-lg text-sm hover:bg-purple-600/30 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {reply}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Chatbot */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white text-gray-800 rounded-2xl shadow-2xl w-96 h-[500px] flex flex-col">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Bahadır Asistan</h4>
                    <p className="text-xs opacity-90">Çevrimiçi</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-1 hover:bg-white/20 rounded transition-colors"
                  >
                    {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                  </button>
                  <button
                    onClick={() => setChatOpen(false)}
                    className="p-1 hover:bg-white/20 rounded transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Chat Messages */}
              {!isMinimized && (
                <>
                  <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <motion.div
                          key={message.id}
                          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                              message.sender === 'user'
                                ? 'bg-green-500 text-white rounded-br-md'
                                : 'bg-white text-gray-800 rounded-bl-md shadow-sm'
                            }`}
                          >
                            <p className="text-sm">{message.text}</p>
                            <p className={`text-xs mt-1 ${
                              message.sender === 'user' ? 'text-green-100' : 'text-gray-500'
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
                          <div className="bg-white text-gray-800 rounded-2xl rounded-bl-md shadow-sm px-4 py-2">
                            <div className="flex items-center gap-1">
                              <div className="flex gap-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                              </div>
                              <span className="text-xs text-gray-500 ml-2">Yazıyor...</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Chat Input */}
                  <div className="p-4 bg-white border-t border-gray-200">
                    <div className="flex gap-2">
                      <input
                        ref={inputRef}
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Mesajınızı yazın..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                      />
                      <motion.button
                        onClick={handleSendMessage}
                        disabled={!inputMessage.trim()}
                        className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
