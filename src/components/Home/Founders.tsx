import { Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export default function Founders() {
  const founders = [
    {
      name: 'Jayvardhan Singh Kelawat',
      role: 'Director',
      image: '/Images/Home/Jayvardhan.svg',
      bio: 'Visionary entrepreneur with expertise in digital platforms and legal technology. Leading the strategic direction of our professional services vertical.',
    },
    {
      name: 'Rajvardhan Singh Kelawat',
      role: 'Director',
      image: '/Images/Home/Rajvardhan.svg',
      bio: 'Strategic leader driving innovation across construction, trade, hospitality, and manufacturing verticals with a focus on sustainable growth.',
    },
  ]

  return (
    <section id="founders" className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full text-sm font-semibold mb-6 font-be-vietnam-pro shadow-lg">
            <Quote className="w-4 h-4" />
            <span>Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black font-be-vietnam-pro tracking-tight leading-tight">
            Meet Our <span className="text-gray-800">Founders</span>
          </h2>
          <div className="w-24 h-1.5 bg-black mx-auto mb-8 rounded-full"></div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed font-be-vietnam-pro max-w-3xl mx-auto">
            The visionary minds behind GOHIGGLER—combining <span className="font-semibold text-black">innovation, expertise,</span> and
            <span className="font-semibold text-black"> strategic leadership</span> to transform industries and empower communities across India.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <Card
              key={index}
              className="group relative border-0 transition-all duration-700 shadow-xl hover:shadow-2xl overflow-hidden bg-white rounded-2xl transform hover:-translate-y-2"
            >
              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-slate-900/10 to-transparent rounded-bl-full z-0"></div>

              <CardContent className="p-0 relative">
                {/* Image Section */}
                <div className="relative h-96 md:h-136 bg-linear-to-br from-slate-50 to-white overflow-hidden">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-contain transform group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />

                  {/* Elegant Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent via-60% to-slate-900/90" />

                  {/* Animated Border Effect */}
<div className="absolute inset-0 pointer-events-none">
  <div className="absolute inset-0 border-2 border-transparent group-hover:border-slate-800/60 group-hover:shadow-[0_0_25px_rgba(30,41,59,0.35)] rounded-xl transition-all duration-500 ease-out"></div>
</div>


                  {/* Name Overlay with Enhanced Design */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10 transform transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-3 border border-white/30">
                      <p className="text-sm md:text-base text-white font-be-vietnam-pro font-semibold">
                        {founder.role}
                      </p>
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 font-be-vietnam-pro drop-shadow-lg">
                      {founder.name}
                    </h3>
                  </div>
                </div>

                {/* Content Section with Enhanced Styling */}
                <div className="p-6 md:p-8 bg-linear-to-br from-white to-slate-50/50">
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-full bg-linear-to-b from-slate-900 to-slate-600 rounded-full shrink-0"></div>
                    <p className="text-sm md:text-base text-slate-700 leading-relaxed font-be-vietnam-pro">
                      {founder.bio}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Quote - Enhanced */}
        <div className="max-w-4xl mx-auto mt-16 md:mt-20 text-center">
          <div className="relative p-8 md:p-12 lg:p-16 rounded-3xl bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden shadow-2xl">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="inline-flex p-4 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/20">
                <Quote className="w-10 h-10 md:w-12 md:h-12 text-white/80" />
              </div>
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 font-be-vietnam-pro leading-relaxed text-white/95">
                "We believe in transforming industries through innovation, making quality services accessible to all, and building a future where technology empowers every individual and business across India."
              </blockquote>
              <div className="w-16 h-1 bg-white/30 mx-auto mb-4 rounded-full"></div>
              <p className="text-slate-300 font-be-vietnam-pro text-lg">— The Founders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
