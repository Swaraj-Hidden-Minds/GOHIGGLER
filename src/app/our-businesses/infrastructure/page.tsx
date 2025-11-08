'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Building2 } from 'lucide-react'

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
          alt="Construction and Infrastructure Development Projects"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <Building2 className="w-16 h-16 mb-4 text-purple-400" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center font-be-vietnam-pro">
            Construction & Infrastructure
          </h1>
          <p className="text-xl md:text-2xl text-center font-be-vietnam-pro">
            Builders, Developers & Contractors
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
            We carry on the business of builders, developers, civil contractors, engineers, designers, architects, town planners, and surveyors.
            Our comprehensive construction services include building construction, development, maintenance, acquisition, sale, purchase, leasing, renting, and management
            of residential, commercial, industrial, institutional, and hospitality properties. We specialize in construction and infrastructure projects including
            buildings, townships, colonies, roads, bridges, highways, airports, railways, dams, canals, water supply, and sanitation projects.
            We execute construction contracts, projects, and tenders for Central Government, State Governments, Public Sector Undertakings, Municipal Corporations,
            Statutory Authorities, and other bodies in India and abroad.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 font-be-vietnam-pro">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Construction Services - Residential, Commercial & Industrial',
              'Civil Engineering & Building Construction',
              'Township & Colony Development',
              'Roads, Bridges & Highways Construction',
              'Airports & Railway Infrastructure',
              'Water Supply & Sanitation Projects',
              'Dams, Canals & Irrigation Systems',
              'Government Contracts & Public Tenders',
              'Property Management & Construction Services',
            ].map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-slate-50 rounded-lg hover:bg-purple-50 transition-colors duration-300 border border-slate-200 hover:border-purple-300"
              >
                <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <span className="text-slate-800 font-be-vietnam-pro text-lg">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16 bg-gradient-to-br from-purple-50 to-slate-50 p-8 md:p-12 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 font-be-vietnam-pro">
            Why Choose Us
          </h2>
          <ul className="space-y-4">
            {[
              'Multidisciplinary team: Engineers, Architects, Town Planners & Surveyors',
              'Experience with Central & State Government contracts',
              'Expertise in Public Sector & Municipal Corporation projects',
              'Comprehensive construction and property management services',
              'End-to-end services: Design, construction, maintenance & management',
              'Operations in India and international markets',
            ].map((reason, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
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
            Our infrastructure division brings together builders, developers, civil contractors, engineers, designers, architects, town planners,
            and surveyors with extensive experience across diverse project types. We specialize in undertaking large-scale infrastructure projects
            including residential and commercial developments, townships, transportation infrastructure (roads, bridges, highways, airports, railways),
            hydraulic projects (dams, canals, water supply, sanitation), and institutional buildings. Our expertise extends to executing complex
            government tenders and contracts for Central Government, State Governments, PSUs, Municipal Corporations, and Statutory Authorities.
            We ensure compliance with all regulatory requirements, safety standards, and quality benchmarks while delivering projects in India and abroad.
          </p>
        </section>

        {/* CTA Section */}
        <section className="bg-purple-900 text-white p-8 md:p-12 rounded-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-be-vietnam-pro">
            Need Construction or Infrastructure Solutions?
          </h2>
          <p className="text-lg mb-8 text-purple-100 font-be-vietnam-pro">
            Contact our team of builders, developers, engineers, and architects to discuss your construction, development,
            or government contract requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-300 font-be-vietnam-pro"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  )
}
