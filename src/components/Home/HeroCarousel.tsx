"use client";

import { ArrowRight } from "lucide-react";
import Carousel from "@/components/Home/carousel";
import { Image as ImageType } from "@/types/type";

export default function Hero() {
  // Curated frontend-only images (Unsplash)
  const images: ImageType[] = [
    {
      image:
        "https://images.unsplash.com/photo-1598194501777-edbff942e501?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069",
      alt: "Digital platform connecting professionals with clients",
    },
    {
      image:
        "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069",
      alt: "Real estate and infrastructure development projects",
    },
    {
      image:
        "https://images.unsplash.com/photo-1598193957011-39b9f2916992?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069",
      alt: "International trade and commerce operations",
    },

  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Reusable Carousel fills the background */}
      <div className="absolute inset-0 z-0">
        <Carousel images={images} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-900/75 via-slate-800/55 to-slate-700/65 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-50 mb-6 leading-tight tracking-tight">
          Welcome to{' '}
          <span className="text-slate-200 font-fredoka underline decoration-slate-200 decoration-2 underline-offset-4 decoration-double">
            GOHIGGLER
          </span>
          <br />
          <span className="text-lg md:text-xl font-normal text-slate-300 font-be-vietnam-pro">Private Limited</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed font-be-vietnam-pro">
          A diversified technology-driven platform connecting verified consultants, advisors, and advocates with clients across India.
          Operating in professional services, construction, infrastructure, trade, hospitality, and artisan manufacturing.
        </p>
        {/* CTAs removed as requested */}
      </div>

      {/* Scroll Indicator (clickable) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          className="group w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center hover:border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-slate-900 animate-bounce"
          aria-label="Scroll down to learn more"
          onClick={() => {
            const nextSection = document.querySelector('section:nth-of-type(2)');
            nextSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="w-1 h-3 bg-slate-300 rounded-full mt-2 group-hover:bg-slate-200 group-focus:bg-slate-200 transition-colors duration-300 animate-pulse" />
        </button>
      </div>
    </section>
  );
}
