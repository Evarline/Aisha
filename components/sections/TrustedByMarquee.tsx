'use client'

import React from 'react'

const TrustedByMarquee = () => {
  const brands = [
    {
      name: 'VELORA',
      className: 'font-serif tracking-[0.2em] uppercase text-xl'
    },
    {
      name: 'axon',
      className: 'font-mono lowercase tracking-widest text-2xl font-light'
    },
    {
      name: 'THE TECH HUT',
      className: 'font-sans font-black tracking-tighter uppercase text-2xl'
    },
    {
      name: 'MODU',
      className: 'font-sans font-light tracking-[0.4em] uppercase text-lg'
    },
    {
      name: 'Cartly.',
      className: 'font-serif italic font-medium tracking-normal text-2xl'
    }
  ]

  // Duplicate the array for seamless loop
  const duplicatedBrands = [...brands, ...brands]

  return (
    <section className="relative bg-[#FAFAFA] py-16 overflow-hidden">
      {/* Top and bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#001407]/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#001407]/5 to-transparent" />
      
      {/* Left fade mask */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
      
      {/* Right fade mask */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
      
      {/* Marquee container */}
      <div className="relative overflow-hidden">
        <div className="flex w-max flex-nowrap gap-24 animate-marquee-slow whitespace-nowrap">
          {duplicatedBrands.map((brand, index) => (
            <span
              key={index}
              className={`text-[#001407]/40 transition-colors hover:text-[#001407]/80 flex-shrink-0 ${brand.className}`}
            >
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedByMarquee
