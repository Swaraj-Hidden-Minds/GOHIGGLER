'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, TrendingUp } from 'lucide-react'

export default function TradeCommercePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
          alt="International Trade and Commerce Operations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <TrendingUp className="w-16 h-16 mb-4 text-orange-400" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center font-be-vietnam-pro">
            Trade & Commerce
          </h1>
          <p className="text-xl md:text-2xl text-center font-be-vietnam-pro">
            Import, Export & Distribution
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
            We carry on the business of suppliers, traders, distributors, wholesalers, retailers, dealers, stockists, importers, exporters,
            agents, and representatives of all kinds of goods and merchandise. Our comprehensive operations cover raw materials, semi-finished
            and finished goods, building and construction materials, industrial equipment, electrical and electronic goods, hardware, consumer goods,
            food products, agricultural products, textiles, garments, lifestyle products, handicrafts, and allied items. We conduct business
            both in India and internationally, providing end-to-end trading and distribution solutions across diverse product categories.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 font-be-vietnam-pro">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Building & Construction Materials Trading',
              'Industrial Equipment & Machinery Distribution',
              'Electrical & Electronic Goods Supply',
              'Consumer Goods & Food Products Trading',
              'Agricultural Products & Raw Materials',
              'Textiles, Garments & Lifestyle Products',
              'Handicrafts & Artisan Products Export',
              'International Import-Export Operations',
            ].map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-slate-50 rounded-lg hover:bg-orange-50 transition-colors duration-300 border border-slate-200 hover:border-orange-300"
              >
                <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <span className="text-slate-800 font-be-vietnam-pro text-lg">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16 bg-linear-to-br from-orange-50 to-slate-50 p-8 md:p-12 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 font-be-vietnam-pro">
            Why Choose Us
          </h2>
          <ul className="space-y-4">
            {[
              'Comprehensive trading operations: Suppliers, distributors, wholesalers, retailers',
              'Diverse product portfolio across 12+ major categories',
              'International reach: Import-export operations in India and abroad',
              'Raw materials, semi-finished, and finished goods expertise',
              'Established network of dealers, stockists, and agents',
              'End-to-end solutions from sourcing to distribution',
            ].map((reason, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
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
            Our trade and commerce division operates as suppliers, traders, distributors, wholesalers, retailers, dealers, stockists, importers,
            exporters, agents, and representatives across an extensive range of product categories. We specialize in building and construction
            materials, industrial equipment and machinery, electrical and electronic goods, hardware, consumer goods, food products, agricultural
            products, textiles and garments, lifestyle products, and handicrafts. Our expertise extends to handling raw materials, semi-finished
            goods, and finished products, ensuring comprehensive supply chain solutions. With operations in India and international markets, we
            maintain strong relationships with manufacturers, suppliers, and buyers worldwide, facilitating seamless trade operations across borders.
            Our integrated approach covers sourcing, logistics, quality control, regulatory compliance, and distribution, making us a one-stop solution
            for all trading and commerce needs.
          </p>
        </section>

        {/* CTA Section */}
        <section className="bg-orange-600 text-white p-8 md:p-12 rounded-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-be-vietnam-pro">
            Need Trading or Distribution Solutions?
          </h2>
          <p className="text-lg mb-8 text-orange-100 font-be-vietnam-pro">
            Partner with us for comprehensive import-export, wholesale, retail, and distribution services across 12+ product categories
            in India and international markets.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-300 font-be-vietnam-pro"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  )
}
