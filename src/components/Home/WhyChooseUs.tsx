import { Globe, Scale, Phone, Star, Lightbulb, Lock, Sprout, Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function OurVision() {
  const highlights = [
    {
      icon: Globe,
      title: "Unified Legal Ecosystem",
      description: "Gohiggler unites advocates, clients, and legal services under one secure digital platform — something India has never had before. From consultations and document drafting to e-Notary and case updates — everything happens in one app."
    },
    {
      icon: Scale,
      title: "A Platform for Every Advocate",
      description: "Gohiggler gives every advocate — whether senior or newly registered — equal digital presence, verified identity, and a chance to grow their practice beyond geographical limits. It's India's first legal marketplace that empowers lawyers as much as it helps clients."
    },
    {
      icon: Phone,
      title: "Instant & Transparent Consultation System",
      description: "Clients can connect to lawyers instantly through audio/video calls or chat, paying only per minute. No middlemen, no appointments, no delays. Gohiggler keeps it simple, affordable, and fair."
    },
    {
      icon: Star,
      title: "Verified, Rated & Trusted Network",
      description: "Every lawyer is verified by bar credentials, and clients can rate their experience. This builds a trusted legal ecosystem driven by real feedback, not marketing claims."
    },
    {
      icon: Lightbulb,
      title: "Technology Meets Justice",
      description: "With AI-based advocate suggestions, digital documentation, and future-ready tools like case-tracking and e-signing, Gohiggler transforms traditional legal help into a smart, accessible, and digital experience."
    },
    {
      icon: Lock,
      title: "Secure, Compliant & Client-Centric",
      description: "Data privacy and legal compliance are at the heart of Gohiggler. The platform follows strict data protection, confidentiality, and advocate-client privilege standards."
    },
    {
      icon: Sprout,
      title: "A Vision Beyond Law",
      description: "Gohiggler aims to create \"One Digital Legal India\" — a future where every citizen, from a small village to a metro city, can get justice with a single tap. It's not just an app; it's a movement toward digital justice, equality, and empowerment."
    }
  ]

  return (
    <section id="why-choose-us" className="w-full py-0 md:py-4 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 border border-slate-200 text-slate-700 rounded-full text-sm font-semibold mb-6 font-be-vietnam-pro">
            <Sparkles className="w-4 h-4 text-slate-900" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 font-be-vietnam-pro tracking-tight leading-tight">
            Why People Choose <span className="text-slate-800">Gohiggler</span>
          </h2>
          <div className="w-16 h-1 bg-slate-900 mx-auto mb-8"></div>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed font-be-vietnam-pro">
            Gohiggler isn't just a <span className="font-semibold text-slate-900">legal-tech startup</span> — it's a <span className="font-semibold text-slate-900">revolution</span> in how India connects with <span className="font-semibold text-slate-900">justice</span>.
            Founded by <span className="font-semibold text-slate-900">Jayvardhan Singh Kelawat</span> and <span className="font-semibold text-slate-900">Rajvardhan Singh Kelawat</span>, the company was built with a single belief:
            every citizen deserves <span className="font-semibold text-slate-900">quick, affordable, and transparent</span> access to legal help.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="group border-2 border-slate-200 hover:border-slate-900 transition-all duration-300  shadow-sm hover:shadow-lg"
            >
              <CardContent className="p-8">
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="inline-flex p-4 rounded-lg bg-slate-900">
                    <item.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 mb-3 font-be-vietnam-pro leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-be-vietnam-pro">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
