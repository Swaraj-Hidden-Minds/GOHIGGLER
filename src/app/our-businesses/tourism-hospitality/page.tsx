'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Plane } from 'lucide-react'

export default function TourismHospitalityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=80"
          alt="Tourism and Hospitality Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <Plane className="w-16 h-16 mb-4 text-teal-400" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center font-be-vietnam-pro">
            Tourism & Hospitality
          </h1>
          <p className="text-xl md:text-2xl text-center font-be-vietnam-pro">
            Travel, Accommodation & Hospitality Services
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
            We carry on the business of tourism, travel, hospitality, and related services including tour operators, travel agents,
            hotel and accommodation providers, restaurant and catering services, event management, and destination marketing. Our
            comprehensive offerings encompass domestic and international travel packages, corporate travel management, leisure tourism,
            adventure tourism, cultural tourism, and wellness tourism. We operate hotels, resorts, guest houses, homestays, restaurants,
            cafes, banquet halls, and event venues. Our services include flight and hotel bookings, visa assistance, travel insurance,
            transportation arrangements, guided tours, customized itineraries, and complete holiday packages. We collaborate with tourism
            boards, local authorities, and hospitality partners to promote sustainable tourism, support local communities, and deliver
            memorable travel and hospitality experiences.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 font-be-vietnam-pro">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Domestic & International Tour Packages',
              'Hotel, Resort & Accommodation Services',
              'Flight, Train & Transportation Bookings',
              'Visa Assistance & Travel Documentation',
              'Corporate Travel & MICE Services',
              'Restaurant, Catering & Event Management',
              'Adventure, Cultural & Wellness Tourism',
              'Customized Itineraries & Guided Tours',
            ].map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-slate-50 rounded-lg hover:bg-teal-50 transition-colors duration-300 border border-slate-200 hover:border-teal-300"
              >
                <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <span className="text-slate-800 font-be-vietnam-pro text-lg">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16 bg-gradient-to-br from-teal-50 to-slate-50 p-8 md:p-12 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 font-be-vietnam-pro">
            Why Choose Us
          </h2>
          <ul className="space-y-4">
            {[
              'Comprehensive travel solutions: tours, hotels, transportation, documentation',
              'Domestic and international travel expertise',
              'Corporate travel management and MICE services',
              'Own hotels, resorts, restaurants, and event venues',
              'Sustainable tourism and community support initiatives',
              'Partnerships with tourism boards and hospitality networks',
            ].map((reason, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0" />
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
            Our tourism and hospitality division provides end-to-end travel and accommodation solutions for leisure travelers, corporate
            clients, and group tours. We operate as tour operators, travel agents, and hospitality service providers with a strong
            presence in domestic and international markets. Our portfolio includes owned and managed hotels, resorts, guest houses,
            restaurants, cafes, banquet halls, and event venues. We specialize in designing customized travel itineraries covering
            adventure tourism, cultural tourism, wellness tourism, pilgrimage tours, heritage tours, and eco-tourism. Our services
            include complete travel management from visa processing, flight and hotel bookings, transportation arrangements, travel
            insurance, to on-ground support and guided tours. We work closely with tourism boards, local authorities, and hospitality
            partners to promote responsible tourism, preserve cultural heritage, support local economies, and ensure safety and quality
            standards. Our commitment to excellence, customer satisfaction, and sustainable practices makes us a trusted partner for
            all travel and hospitality needs.
          </p>
        </section>

        {/* CTA Section */}
        <section className="bg-teal-600 text-white p-8 md:p-12 rounded-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-be-vietnam-pro">
            Plan Your Next Journey With Us
          </h2>
          <p className="text-lg mb-8 text-teal-100 font-be-vietnam-pro">
            Discover unforgettable travel experiences with our comprehensive tourism and hospitality services.
            From leisure vacations to corporate travel, we've got you covered.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors duration-300 font-be-vietnam-pro"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  )
}
