'use client'

import { Compass, Building2, ShoppingCart, Scale, Hotel, Hammer, Briefcase } from 'lucide-react'
import Image from 'next/image'

export default function OurMission() {
  const missionPillars = [
    {
      icon: Building2,
      title: "Construction, Infrastructure, Real Estate & Government Projects",
      description: "To carry on the business of builders, developers, contractors, engineers, designers, and to undertake construction, development, sale, purchase, leasing, renting and management of residential, commercial, industrial, institutional and all kinds of immovable properties, townships, colonies, roads, bridges, and infrastructure projects, including participation in government contracts, projects and construction tenders of Central Government, State Government, Public Sector Undertakings, Municipal Corporations and other statutory authorities.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
    },
    {
      icon: ShoppingCart,
      title: "Suppliers & Trading",
      description: "To engage in the business of suppliers, traders, distributors, dealers, importers, exporters and agents of all kinds of raw materials, building materials, industrial goods, consumer products, handicrafts and allied items.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
    },
    {
      icon: Scale,
      title: "Legal Tech & Professional Services",
      description: "To develop, operate and maintain technology platforms, mobile applications, software and online portals for legal consultancy, advocate-client interaction, e-notary, legal documentation, advisory and allied services, and to provide digital solutions in the legal and compliance sector.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
    },
    {
      icon: Hotel,
      title: "Hospitality & Hotel Booking",
      description: "To carry on the business of hospitality services including hotel booking platforms, travel services, tourism facilitation, guest house management, resorts, restaurants, and allied hospitality ventures through online and offline means.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
    },
    {
      icon: Hammer,
      title: "Manufacturing & Handicrafts",
      description: "To manufacture, produce, design, market, distribute, trade and export handicrafts, artworks, decorative items, home decorate products, stone & marble sculpture, lifestyle products and all other goods made from wood, metal, stone, textiles, leather, clay, or any other material whether by hand or by machinery.",
      image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80"
    },
    {
      icon: Briefcase,
      title: "General Business & Allied Activities",
      description: "To undertake, promote and carry on all kinds of lawful business activities, ventures and services which are incidental, ancillary or conducive to the attainment of the above main objects of the Company.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
    }
  ]

  return (
    <section id="our-mission" className="w-full px-4 md:px-6 bg-white relative overflow-hidden py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 border border-slate-200 text-slate-700 rounded-full text-sm font-semibold mb-6 font-be-vietnam-pro">
            <Compass className="w-4 h-4 text-slate-900" />
            <span>Our Mission & Objectives</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 font-be-vietnam-pro leading-tight">
            Objectives of{' '}
            <span className="relative inline-block text-slate-800">
              Gohiggler Private Limited
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-slate-900 rounded-full"></div>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-be-vietnam-pro">
            Diversified business verticals spanning construction, trade, legal technology, hospitality, manufacturing, and allied services—driving innovation and excellence across multiple industries.
          </p>
        </div>

        {/* Mission Pillars - Vertical Timeline */}
        <div className="space-y-24 md:space-y-32">
          {missionPillars.map((pillar, index) => {
            const isEven = index % 2 === 0
            const Icon = pillar.icon

            // Theme-based colors for each objective
            const decorativePatterns = [
              // 01 - Construction (Orange - construction/safety)
              <>
                <div className="absolute -top-4 -right-4 w-20 h-20 border-4 border-orange-600 rounded-full opacity-30 group-hover:scale-125 group-hover:opacity-50 transition-all duration-500"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-500 rounded-full opacity-20 group-hover:scale-125 group-hover:opacity-35 transition-all duration-500"></div>
              </>,
              // 02 - Suppliers & Trading (Blue - commerce/business)
              <>
                <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-blue-600 rounded-full opacity-25 group-hover:scale-110 group-hover:opacity-40 transition-all duration-500"></div>
                <div className="absolute -top-2 -left-2 w-12 h-12 border-2 border-blue-500 rounded-full opacity-35 group-hover:scale-125 group-hover:opacity-50 transition-all duration-500"></div>
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-blue-600 rounded-full opacity-20 group-hover:scale-110 group-hover:opacity-35 transition-all duration-500"></div>
              </>,
              // 03 - Legal Tech (Indigo - professional/legal)
              <>
                <div className="absolute -top-4 -left-4 w-16 h-16 border-4 border-indigo-700 rounded-full opacity-30 group-hover:scale-125 group-hover:opacity-45 transition-all duration-500"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-4 border-indigo-600 rounded-full opacity-30 group-hover:scale-125 group-hover:opacity-50 transition-all duration-500"></div>
              </>,
              // 04 - Hospitality (Amber/Gold - luxury/hospitality)
              <>
                <div className="absolute top-0 -right-8 w-24 h-24 bg-amber-500 rounded-full opacity-15 group-hover:scale-110 group-hover:opacity-25 transition-all duration-500"></div>
                <div className="absolute top-4 -right-4 w-16 h-16 border-3 border-amber-600 rounded-full opacity-35 group-hover:scale-125 group-hover:opacity-50 transition-all duration-500"></div>
                <div className="absolute -bottom-6 -left-6 w-18 h-18 bg-amber-600 rounded-full opacity-20 group-hover:scale-115 group-hover:opacity-35 transition-all duration-500"></div>
              </>,
              // 05 - Manufacturing & Handicrafts (Brown/Terracotta - crafts/earth)
              <>
                <div className="absolute -top-6 -right-2 w-14 h-14 border-3 border-orange-800 rounded-full opacity-30 group-hover:scale-125 group-hover:opacity-45 transition-all duration-500"></div>
                <div className="absolute top-6 -right-6 w-10 h-10 bg-orange-700 rounded-full opacity-25 group-hover:scale-125 group-hover:opacity-40 transition-all duration-500"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 border-4 border-orange-800 rounded-full opacity-28 group-hover:scale-110 group-hover:opacity-45 transition-all duration-500"></div>
              </>,
              // 06 - General Business (Teal - corporate/professional)
              <>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-600 rounded-full opacity-30 group-hover:scale-150 group-hover:opacity-45 transition-all duration-500"></div>
                <div className="absolute top-8 -right-8 w-12 h-12 bg-teal-500 rounded-full opacity-20 group-hover:scale-125 group-hover:opacity-35 transition-all duration-500"></div>
                <div className="absolute -bottom-8 -left-2 w-16 h-16 border-3 border-teal-600 rounded-full opacity-32 group-hover:scale-115 group-hover:opacity-48 transition-all duration-500"></div>
                <div className="absolute -bottom-2 -left-8 w-10 h-10 bg-teal-600 rounded-full opacity-25 group-hover:scale-125 group-hover:opacity-40 transition-all duration-500"></div>
              </>
            ]

            return (
              <div
                key={index}
                className={`relative flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8 md:gap-16`}
              >
                {/* Large Number with Image Pattern */}
                <div className="relative w-full md:w-1/2 flex items-center justify-center">
                  <div className="relative group">
                    {/* Number Container */}
                    <div className="relative w-80 h-64 md:w-96 md:h-80">
                      {/* Number with Image Fill */}
                      <div className="absolute inset-0 flex items-center justify-center overflow-visible">
                        <div className="relative">
                          <span 
                            className="text-[14rem] md:text-[18rem] font-black leading-none font-be-vietnam-pro select-none tracking-tight"
                            style={{
                              WebkitTextStroke: '3px #1e293b',
                              WebkitTextFillColor: 'transparent',
                              backgroundImage: `url(${pillar.image})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              backgroundClip: 'text',
                              WebkitBackgroundClip: 'text',
                              letterSpacing: '-0.02em'
                            }}
                          >
                            {(index + 1).toString().padStart(2, '0')}
                          </span>
                        </div>
                      </div>

                      {/* Decorative Elements - Theme-based colors */}
                      {decorativePatterns[index]}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${isEven ? 'text-left' : 'text-left md:text-right'}`}>
                  <div className="space-y-4">
                    {/* Title */}
                    <div>
                      <div className={`inline-block mb-3 px-4 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-full font-be-vietnam-pro tracking-wider`}>
                        OBJECTIVE {(index + 1).toString().padStart(2, '0')}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-be-vietnam-pro leading-tight mb-4">
                        {pillar.title}
                      </h3>
                      <div className={`h-1 w-24 bg-slate-900 rounded-full ${isEven ? '' : 'md:ml-auto'} mb-6`}></div>
                    </div>

                    {/* Description */}
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed font-be-vietnam-pro max-w-xl">
                      {pillar.description}
                    </p>

                    {/* Icon Badge */}
                    <div className={`flex ${isEven ? 'justify-start' : 'justify-start md:justify-end'} pt-4`}>
                      <div className="inline-flex items-center gap-3 px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl">
                        <div className="p-2 bg-slate-900 rounded-lg">
                          <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                        </div>
                        <span className="text-sm font-semibold text-slate-900 font-be-vietnam-pro">
                          Business Vertical
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector Line (Hidden on last item) */}
                {index < missionPillars.length - 1 && (
                  <div className="absolute left-1/2 -bottom-16 md:-bottom-20 w-px h-16 md:h-20 bg-gradient-to-b from-slate-300 to-transparent transform -translate-x-1/2 hidden md:block"></div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <div className="inline-block p-8 bg-linear-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-2xl shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
                <Compass className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-be-vietnam-pro">
                Diversified Excellence
              </h3>
            </div>
            <p className="text-slate-600 font-be-vietnam-pro max-w-2xl mx-auto">
              From building infrastructure that lasts generations to crafting digital solutions that transform industries—our six core objectives drive us to deliver excellence across every sector we serve. Your vision, our expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
