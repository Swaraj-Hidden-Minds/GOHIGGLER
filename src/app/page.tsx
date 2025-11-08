import React from 'react'
import Hero from '@/components/Home/HeroCarousel'
import Mission from '@/components/Home/OurMission'
import Vision from '@/components/Home/WhyChooseUs'
import OurBusiness from "@/components/Home/OurBusiness"


export default function Home() {
  return (
    <>
      <Hero />
      <OurBusiness />
      <Vision />
      <Mission />
     
    </>
  )
}