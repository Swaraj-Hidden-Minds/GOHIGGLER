'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function OurBusiness() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)

  const updateScrollButtons = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)

      // Calculate active card index
      const card = scrollRef.current.children[0] as HTMLElement
      if (card) {
        const cardWidth = card.offsetWidth
        const gap = 32
        const index = Math.round(scrollLeft / (cardWidth + gap))
        setActiveIndex(index)
      }
    }
  }, [])

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      updateScrollButtons()
      scrollContainer.addEventListener('scroll', updateScrollButtons)
      window.addEventListener('resize', updateScrollButtons)

      return () => {
        scrollContainer.removeEventListener('scroll', updateScrollButtons)
        window.removeEventListener('resize', updateScrollButtons)
      }
    }
  }, [updateScrollButtons])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const card = scrollRef.current.children[0] as HTMLElement
      const cardWidth = card?.offsetWidth || 300
      const gap = 32
      const scrollAmount = cardWidth + gap
      const currentScroll = scrollRef.current.scrollLeft
      const newScroll =
        direction === 'left'
          ? Math.max(0, currentScroll - scrollAmount)
          : currentScroll + scrollAmount
      scrollRef.current.scrollTo({ left: newScroll, behavior: 'smooth' })
    }
  }

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const card = scrollRef.current.children[0] as HTMLElement
      if (card) {
        const cardWidth = card.offsetWidth
        const gap = 32
        const scrollPosition = index * (cardWidth + gap)
        scrollRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' })
      }
    }
  }

  const businesses = [
    {
      slug: 'legal-services',
      // use local Nyaya image from public folder
      logo: '/nyayaya.png',
      subtitle: 'Nyaysopan',
      description:
        'Connecting verified consultants, advisors, and advocates with clients for legal, civil, criminal, corporate, and family consultations via text, audio, and video. Includes document drafting, contract vetting, notarization, and e-stamping services.',
      hoverColor: '#FFFFFF', // white
    },
        {
      slug: 'handicrafts-manufacturing',
      logo: 'https://images.unsplash.com/photo-1589051079002-b140a970f568?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070',
      subtitle: 'Handicrafts & Manufacturing',
      description:
        'Manufacturing, trading, and exporting handicrafts, artworks, decorative items, and home décor made from wood, metal, stone, marble, glass, textiles, leather, ceramic, and other materials. Promoting artisan products locally and globally.',
      hoverColor: '#EC4899', // pink
    },
    {
      slug: 'trade-commerce',
      logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      subtitle: 'Trade & Commerce',
      description:
        'Suppliers, traders, and distributors of building materials, industrial equipment, electrical goods, consumer products, food items, agricultural products, textiles, and lifestyle products across India and internationally.',
      hoverColor: '#EA580C', // orange
    },
    {
      slug: 'tourism-hospitality',
      logo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
      subtitle: 'Tourism & Hospitality',
      description:
        'Online and offline platforms for hotel booking, travel packages, accommodation services, resorts, homestays, restaurants, and event management. Tourism facilitation services across India and abroad.',
      hoverColor: '#0891B2', // cyan
    },
    {
      slug: 'infrastructure',
      logo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80',
      subtitle: 'Construction & Infrastructure',
      description:
        'Construction services, development, and management of residential, commercial, industrial, and institutional properties. Undertaking infrastructure projects including townships, roads, bridges, water supply, and government contracts.',
      hoverColor: '#7C3AED', // purple
    },
  ]

  return (
    <section id="our-business" className="w-full py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900 font-be-vietnam-pro underline decoration-slate-700 decoration-4 underline-offset-4 decoration-double">
            Our Business
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-4xl font-be-vietnam-pro leading-relaxed">
            GOHIGGLER PRIVATE LIMITED operates across five strategic business verticals, combining technology-driven professional services
            with traditional industries. From our digital platform connecting professionals with clients, to construction and infrastructure development,
            international trade, hospitality, and artisan manufacturing—each vertical embodies our commitment to innovation, quality, and accessibility.
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          {/* Progress Indicators */}
          <div className="flex gap-2">
            {businesses.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to ${businesses[index].subtitle}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-slate-700'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll to previous business"
              className={`p-2 sm:p-3 border rounded-full transition-all duration-300 ${
                canScrollLeft
                  ? 'border-slate-300 hover:bg-slate-100 hover:border-slate-400 hover:scale-110 active:scale-95'
                  : 'border-slate-200 opacity-40 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll to next business"
              className={`p-2 sm:p-3 border rounded-full transition-all duration-300 ${
                canScrollRight
                  ? 'border-slate-300 hover:bg-slate-100 hover:border-slate-400 hover:scale-110 active:scale-95'
                  : 'border-slate-200 opacity-40 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Cards */}
        <div
          ref={scrollRef}
          role="region"
          aria-label="Business verticals carousel"
          className="flex gap-6 sm:gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-4 sm:pb-6 snap-x snap-mandatory"
        >
          {businesses.map((b, i) => {
            const cardContent = (
              <article
                className="min-w-[250px] sm:min-w-[320px] md:min-w-[380px] lg:min-w-[400px] max-w-[480px] group snap-start"
              >
                {/* Image Section */}
                <div className={`relative h-40 sm:h-52 md:h-80 flex items-center justify-center rounded-xl mb-4 sm:mb-6 transition-all duration-500 cursor-pointer overflow-hidden ${
                  i === 0 ? 'bg-white shadow-md hover:shadow-lg transition-shadow' : ''
                }`}>
                  {/* Background Image */}
                  <Image
                    src={b.logo}
                    alt={b.subtitle}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 250px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 400px"
                  />


                  {/* Hover Color Overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 mix-blend-multiply"
                    style={{ backgroundColor: b.hoverColor }}
                  />

                  {/* Image overlay text removed per request (no title shown on image) */}

                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full" />
                </div>

                {/* Text Section */}
                <div className="space-y-3">
                  <h4 className="text-lg sm:text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-slate-700 font-be-vietnam-pro">
                    {b.subtitle}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed transition-colors duration-300 group-hover:text-slate-800 font-be-vietnam-pro">
                    {b.description}
                  </p>

                  {/* Learn More Button */}
                  {b.slug ? (
                    <div className="pt-2">
                      <span
                        className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold transition-all duration-300 font-be-vietnam-pro"
                        style={{ color: i === 0 ? '#1E40AF' : b.hoverColor }}
                      >
                        Learn More
                        <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  ) : (
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-400 font-be-vietnam-pro">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>
              </article>
            )

            return b.slug ? (
              <Link key={i} href={`/our-businesses/${b.slug}`}>
                {cardContent}
              </Link>
            ) : (
              <div key={i}>{cardContent}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
