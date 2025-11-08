

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, MessageCircle, ArrowRight, Sparkles } from "lucide-react"

export default function ContactPage() {
  return (
    <section className="w-full min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 px-4 md:px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-slate-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white shadow-sm border border-slate-200 text-slate-700 rounded-full text-sm font-semibold mb-8 font-be-vietnam-pro hover:shadow-md transition-all duration-300">
            <Sparkles className="w-4 h-4 text-slate-900" />
            <span>Contact Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 font-be-vietnam-pro leading-tight">
            Let's Connect
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-slate-400 via-slate-900 to-slate-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-be-vietnam-pro">
            Your success is our priority. Choose your preferred way to reach us.
          </p>
        </div>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
          {/* Email Card */}
          <Card className="shadow-lg border-2 border-slate-200 hover:border-slate-900 transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-lg bg-slate-900">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-be-vietnam-pro">Email Us</h3>
                  <p className="text-sm text-slate-600 mb-3 font-be-vietnam-pro">24 hour response time</p>
                  <a
                    href="mailto:Gohiggler@gmail.com"
                    className="text-slate-900 hover:text-slate-700 transition-all duration-300 font-medium font-be-vietnam-pro underline decoration-2"
                  >
                    Gohiggler@gmail.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Phone Card */}
          <Card className="shadow-lg border-2 border-slate-200 hover:border-slate-900 transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-lg bg-slate-900">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-be-vietnam-pro">Call Us</h3>
                  <p className="text-sm text-slate-600 mb-3 font-be-vietnam-pro">Instant support available</p>
                  <a
                    href="tel:+919374857655"
                    className="text-slate-900 hover:text-slate-700 transition-all duration-300 font-medium font-be-vietnam-pro underline decoration-2"
                  >
                    +91 93748 57655
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Address Card */}
          <Card className="shadow-lg border-2 border-slate-200 hover:border-slate-900 transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-lg bg-slate-900">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-be-vietnam-pro">Visit Us</h3>
                  <p className="text-sm text-slate-600 mb-3 font-be-vietnam-pro">Corporate Office</p>
                  <p className="text-slate-900 font-medium font-be-vietnam-pro">
                    Udaipur, Rajasthan - 313001<br />
                    India
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Working Hours Card */}
          <Card className="shadow-lg border-2 border-slate-200 hover:border-slate-900 transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-lg bg-slate-900">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-be-vietnam-pro">Business Hours</h3>
                  <p className="text-sm text-slate-600 mb-3 font-be-vietnam-pro">We're available</p>
                  <p className="text-slate-900 font-medium font-be-vietnam-pro">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    <span className="text-slate-600">Sunday: Closed</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="shadow-xl border-2 border-slate-900 bg-gradient-to-br from-slate-900 to-slate-800 text-white max-w-5xl mx-auto">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-be-vietnam-pro">Ready to Get Started?</h2>
            <p className="text-lg text-slate-200 mb-8 font-be-vietnam-pro max-w-2xl mx-auto">
              Whether you need construction services, legal technology solutions, or handicraft manufacturing—our team of experts is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919374857655"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105 font-be-vietnam-pro"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="mailto:Gohiggler@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 text-white border-2 border-white rounded-lg font-semibold hover:bg-slate-700 transition-all duration-300 hover:scale-105 font-be-vietnam-pro"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
