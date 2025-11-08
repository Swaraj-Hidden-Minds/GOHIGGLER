"use client"

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function WhatsAppChat() {
  const phoneNumber = "919374857655"
  const whatsappUrl = `https://wa.me/${phoneNumber}`
  
  const SHOW_MS = 3000
  const GAP_MS = 15000
  const [showTooltip, setShowTooltip] = useState(true)

  useEffect(() => {
    let cancelled = false
    let timeoutId: number | null = null

    const clear = () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId)
        timeoutId = null
      }
    }

    const loop = () => {
      if (cancelled) return
      setShowTooltip(true)
      timeoutId = window.setTimeout(() => {
        if (cancelled) return
        setShowTooltip(false)
        timeoutId = window.setTimeout(() => {
          if (cancelled) return
          loop()
        }, GAP_MS)
      }, SHOW_MS)
    }

    loop()

    return () => {
      cancelled = true
      clear()
    }
  }, [])

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 cursor-pointer group"
      onClick={() => window.open(whatsappUrl, '_blank')}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatDelay: 5,
        ease: "easeInOut",
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => {
        setTimeout(() => setShowTooltip(false), 100)
      }}
    >
      <div className="relative">
        <div className="flex items-center justify-center w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/whatsapp.svg"
            alt="WhatsApp"
            width={28}
            height={28}
          />
        </div>

        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg shadow-lg whitespace-nowrap"
            >
              Chat on WhatsApp
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-900"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
