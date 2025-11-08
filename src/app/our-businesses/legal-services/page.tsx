'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Scale } from 'lucide-react'

export default function LegalServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] w-full">
        <Image
          src="/Nyaya.png"
          alt="Digital Professional Services Platform"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <Scale className="w-16 h-16 mb-4 text-blue-400" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center font-be-vietnam-pro">
            Professional Services Platform
          </h1>
          <p className="text-xl md:text-2xl text-center font-be-vietnam-pro">
            Digital Legal & Advisory Services
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
            We operate a digital platform that facilitates verified and secure connections and communication between qualified professionals
            (including consultants, advisors, and advocates across India) and users seeking consultation through text, audio, or video mediums.
            Our platform serves legal, civil, criminal, corporate, and family advisory services, in accordance with applicable laws. We act
            solely as a technology-based intermediary, providing platform access and digital infrastructure for facilitation of communication
            and consultation. We monetize through platform facilitation fees, subscription models, pay-per-minute billing, and packaged
            consultations, aimed at providing affordable and accessible professional guidance across various geographies and income groups.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 font-be-vietnam-pro">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Legal, Civil & Criminal Consultations',
              'Corporate & Business Advisory Services',
              'Family Law & Matrimonial Guidance',
              'Document Drafting & Legal Writing',
              'Contract Vetting & Review Services',
              'Notarization Assistance & Support',
              'E-Stamping & Digital Document Execution',
              'Legal Literacy & Educational Content',
            ].map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors duration-300 border border-slate-200 hover:border-blue-300"
              >
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-slate-800 font-be-vietnam-pro text-lg">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16 bg-gradient-to-br from-blue-50 to-slate-50 p-8 md:p-12 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 font-be-vietnam-pro">
            Why Choose Us
          </h2>
          <ul className="space-y-4">
            {[
              'Verified network of qualified consultants, advisors, and advocates',
              'Secure text, audio, and video consultation mediums',
              'Transparent pricing: subscriptions, pay-per-minute, packaged consultations',
              'Identity verification and quality assurance of all professionals',
              'AI-driven tools, appointment scheduling, and document sharing portals',
              'Partnerships with bar associations, educational institutions, and government bodies',
            ].map((reason, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
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
            Our platform onboards and manages a network of qualified, verified, and competent professionals by conducting proper due diligence,
            identity verification, and quality assurance procedures, ensuring ethical, lawful, and effective service delivery in compliance
            with all applicable statutory and regulatory norms. We enhance reach and impact through strategic partnerships, affiliations, and
            collaborations with bar associations, educational institutions, NGOs, and government bodies. Our proprietary technology solutions
            include user dashboards, advocate/consultant control panels, appointment scheduling tools, document sharing portals, billing engines,
            and AI-driven legal tools. We promote awareness, digital inclusion, and accessibility through marketing campaigns, educational
            initiatives, and public outreach programs, making professional guidance accessible across various geographies, income groups, and
            demographic segments.
          </p>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-900 text-white p-8 md:p-12 rounded-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-be-vietnam-pro">
            Need Professional Legal or Advisory Services?
          </h2>
          <p className="text-lg mb-8 text-blue-100 font-be-vietnam-pro">
            Connect with verified consultants, advisors, and advocates through our secure digital platform.
            Get affordable, accessible consultations via text, audio, or video.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 font-be-vietnam-pro"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  )
}
