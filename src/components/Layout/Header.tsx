'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  // Routes where header should start transparent (like the home hero)
  const transparentRoutes = ['/', '/our-businesses/legal-services', '/our-businesses/infrastructure', '/our-businesses/trade-commerce', '/our-businesses/tourism-hospitality', '/our-businesses/handicrafts-manufacturing']
  const isTransparentRoute = transparentRoutes.some(r => pathname === r || pathname?.startsWith(r + '/'))

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 100)
    }
    // run once to set initial state
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Header height offset
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }

  // Show white header if not on a transparent route OR if scrolled past the hero
  const showWhiteHeader = !isTransparentRoute || scrolled

  const menuVariants = {
    hidden: { x: '100%' },
    visible: {
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 90,
        damping: 18
      }
    },
    exit: {
      x: '100%',
      transition: {
        type: 'tween' as const,
        duration: 0.25
      }
    }
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.4,
      transition: { duration: 0.25 }
    },
    exit: { opacity: 0 }
  }

  return (
    <>
      <header
        className={`fixed right-1 left-1 md:right-16 md:left-16 z-50 transition-all duration-300 ${
          showWhiteHeader
            ? 'bg-white shadow-md md:rounded-full rounded-3xl md:top-0 top-0 md:mx-8 mx-3'
            : `md:bg-transparent ${mobileMenuOpen ? '' : 'bg-transparent'} top-0`
        }`}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative overflow-hidden transition-all duration-300">
                <Image
                  src="/Images/Home/Companylogo.PNG"
                  alt="GOHIGGLER PRIVATE LIMITED Logo"
                  width={40}
                  height={40}
                  className="object-cover h-10 w-10 rounded-lg transition-all duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <span className={`text-lg sm:text-xl font-bold font-fredoka transition-colors duration-300 ${
                showWhiteHeader ? 'text-slate-900' : 'text-white'
              }`}>
                GOHIGGLER
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className={`group relative text-base font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                  showWhiteHeader
                    ? isActive('/') ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    : isActive('/') ? 'text-white font-semibold' : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="relative z-10">Home</span>
                <span className="absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 w-0 group-hover:w-full"></span>
              </Link>
              <button
                onClick={() => {
                  if (pathname !== '/') {
                    window.location.href = '/#why-choose-us'
                  } else {
                    scrollToSection('why-choose-us')
                  }
                }}
                className={`group relative text-base font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                  showWhiteHeader
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="relative z-10">Why Choose Us</span>
                <span className={`absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 w-0 group-hover:w-full`}></span>
              </button>
              <button
                onClick={() => {
                  if (pathname !== '/') {
                    window.location.href = '/#our-mission'
                  } else {
                    scrollToSection('our-mission')
                  }
                }}
                className={`group relative text-base font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                  showWhiteHeader
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="relative z-10">Our Mission & Vision</span>
                <span className={`absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 w-0 group-hover:w-full`}></span>
              </button>
              <Link
                href="/contact"
                className={`group relative text-base font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                  showWhiteHeader
                    ? isActive('/contact') ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    : isActive('/contact') ? 'text-white font-semibold' : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="relative z-10">Contact</span>
                <span className="absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 w-0 group-hover:w-full"></span>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-lg active:scale-95 transition-colors duration-300 ${
                showWhiteHeader ? 'hover:bg-slate-50' : 'hover:bg-white/10'
              }`}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className={`w-6 h-6 transition-colors duration-300 ${
                showWhiteHeader ? 'text-slate-700' : 'text-white'
              }`} />
            </button>
          </div>
        </div>
      </header>

      {/* ✅ Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              className="fixed inset-0 bg-black backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Side Menu */}
            <motion.div
              key="menu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="fixed right-0 top-0 bottom-0 w-[78%] max-w-xs bg-white z-50 p-8 shadow-2xl border-l border-slate-200 md:hidden"
            >
              <div className="flex justify-end">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 border rounded-full hover:bg-slate-50"
                >
                  <X className="w-6 h-6 text-slate-700" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col space-y-1">
                <Link
                  href="/"
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 hover:bg-slate-50 ${
                    isActive('/') ? 'bg-slate-100 text-slate-900' : 'text-slate-600'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    if (pathname !== '/') {
                      window.location.href = '/#why-choose-us'
                    } else {
                      scrollToSection('why-choose-us')
                    }
                  }}
                  className="px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 hover:bg-slate-50 text-slate-600 text-left"
                >
                  Why Choose Us
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    if (pathname !== '/') {
                      window.location.href = '/#our-mission'
                    } else {
                      scrollToSection('our-mission')
                    }
                  }}
                  className="px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 hover:bg-slate-50 text-slate-600 text-left"
                >
                  Our Mission & Vision
                </button>
                <Link
                  href="/contact"
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 hover:bg-slate-50 ${
                    isActive('/contact') ? 'bg-slate-100 text-slate-900' : 'text-slate-600'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>
  )
}
