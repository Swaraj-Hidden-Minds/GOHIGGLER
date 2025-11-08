'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Palette } from 'lucide-react'

export default function HandicraftsManufacturingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1589051079002-b140a970f568?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
          alt="Handicrafts and Manufacturing Operations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <Palette className="w-16 h-16 mb-4 text-amber-400" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center font-be-vietnam-pro">
            Handicrafts & Manufacturing
          </h1>
          <p className="text-xl md:text-2xl text-center font-be-vietnam-pro">
            Artisan Products & Industrial Manufacturing
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 font-be-vietnam-pro">
            Overview
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed font-be-vietnam-pro">
            We carry on the business of manufacturers, producers, processors, assemblers, and packagers of diverse products including
            handicrafts, artisan goods, traditional crafts, industrial products, consumer goods, and allied items. Our operations
            encompass the entire value chain from sourcing raw materials, production, quality control, packaging, to distribution.
            We specialize in handmade and machine-made products including textiles, pottery, woodwork, metalwork, jewelry, home decor,
            lifestyle products, and industrial components. Our manufacturing facilities combine traditional craftsmanship with modern
            production techniques, ensuring quality, scalability, and compliance with national and international standards. We support
            artisan communities, rural craftspeople, and cottage industries while maintaining efficient large-scale manufacturing operations.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 font-be-vietnam-pro">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Handicrafts & Artisan Products Manufacturing',
              'Textiles, Embroidery & Fabric Products',
              'Pottery, Ceramics & Clay Products',
              'Woodwork, Furniture & Home Decor',
              'Metalwork, Jewelry & Ornamental Items',
              'Industrial Components & Consumer Goods',
              'Packaging, Labeling & Branding Services',
              'Quality Control & Export Compliance',
            ].map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors duration-300 border border-slate-200 hover:border-amber-300"
              >
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <span className="text-slate-800 font-be-vietnam-pro text-lg">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16 bg-gradient-to-br from-amber-50 to-slate-50 p-8 md:p-12 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 font-be-vietnam-pro">
            Why Choose Us
          </h2>
          <ul className="space-y-4">
            {[
              'Blend of traditional craftsmanship and modern manufacturing',
              'Support for artisan communities and cottage industries',
              'Comprehensive production: sourcing, manufacturing, packaging, distribution',
              'Quality control and compliance with national/international standards',
              'Diverse product portfolio: handicrafts to industrial components',
              'Export-ready products with proper documentation and certifications',
            ].map((reason, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0" />
                <span className="text-slate-700 font-be-vietnam-pro text-lg">
                  {reason}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Expertise */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 font-be-vietnam-pro">
            Our Expertise
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed font-be-vietnam-pro">
            Our manufacturing division combines traditional artisan expertise with modern industrial capabilities. We work with skilled
            craftspeople, rural artisans, and cottage industries to produce high-quality handicrafts including textiles, embroidery,
            pottery, ceramics, woodwork, metalwork, and jewelry. Our facilities are equipped for both handmade production and mechanized
            manufacturing, enabling us to handle orders of all scales. We maintain strict quality control protocols, ensure compliance
            with labor and environmental regulations, and provide proper certifications for domestic and export markets. Our integrated
            approach includes raw material sourcing, production planning, inventory management, packaging design, branding support,
            and logistics coordination. We actively promote fair trade practices, support artisan welfare programs, and contribute to
            preserving traditional crafts while embracing innovation and sustainability in manufacturing processes.
          </p>
        </section>

        {/* CTA Section */}
        <section className="bg-amber-600 text-white p-8 md:p-12 rounded-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-be-vietnam-pro">
            Need Manufacturing or Handicraft Solutions?
          </h2>
          <p className="text-lg mb-8 text-amber-100 font-be-vietnam-pro">
            Partner with us for artisan handicrafts, industrial manufacturing, and end-to-end production services
            with quality assurance and export compliance.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-300 font-be-vietnam-pro"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  )
}
