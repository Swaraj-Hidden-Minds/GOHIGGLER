import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              {/* Logo Section */}
              <Link href="/" className="flex items-center group relative">
                <div className="relative overflow-hidden p-1.5 transition-all duration-300 group-hover:bg-gray-800 rounded-full border border-gray-700 shadow-sm">
                  <Image
                    src="/Images/Home/Companylogo.PNG"
                    alt="GOHIGGLER PRIVATE LIMITED Logo"
                    width={48}
                    height={48}
                    className="object-cover h-12 w-12 rounded-full transition-all duration-300 group-hover:scale-105 "
                    priority
                  />
                </div>
                <div className="ml-3 hidden sm:flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-white leading-tight font-fredoka">
                    GOHIGGLER
                  </span>
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wider font-be-vietnam-pro">
                    Private Limited
                  </span>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Explore the timeless world of GOHIGGLER PRIVATE LIMITED - your gateway to eternal experiences and innovations.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-base mb-4 font-be-vietnam-pro">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center group hover:bg-white/5 rounded-lg px-3 py-2"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#our-business"
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center group hover:bg-white/5 rounded-lg px-3 py-2"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Our Business
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center group hover:bg-white/5 rounded-lg px-3 py-2"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Business Vertical */}
            <div>
              <h3 className="text-white font-semibold text-base mb-4 font-be-vietnam-pro">Business Vertical</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/our-businesses/handicrafts-manufacturing"
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center group hover:bg-white/5 rounded-lg px-3 py-2"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Handicrafts & Manufacturing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-businesses/legal-services"
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center group hover:bg-white/5 rounded-lg px-3 py-2"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Nyaysopan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-businesses/trade-commerce"
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center group hover:bg-white/5 rounded-lg px-3 py-2"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Trade & Commerce
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold text-base mb-4 font-be-vietnam-pro">Get in Touch</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-400 text-sm group hover:bg-white/5 rounded-lg px-3 py-2 transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 group-hover:text-white transition-colors" />
                  <a href="mailto:Gohiggler@gmail.com" className="hover:text-white transition-colors">
                    Gohiggler@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm group hover:bg-white/5 rounded-lg px-3 py-2 transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 group-hover:text-white transition-colors" />
                  <a href="tel:+919374857655" className="hover:text-white transition-colors">
                    +91 93748 57655
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm group hover:bg-white/5 rounded-lg px-3 py-2 transition-colors">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 group-hover:text-white transition-colors" />
                  <span>Udaipur, Rajasthan - 313001</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} GOHIGGLER PRIVATE LIMITED. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-gray-500 text-xs flex items-center gap-1">
                Made with <span className="text-red-500 animate-pulse">❤️</span> in India
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}