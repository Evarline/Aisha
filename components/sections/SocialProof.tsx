function LogoSet() {
  const brands = [
    {
      name: 'VELORA',
      className: 'font-serif tracking-[0.2em] uppercase text-xl text-[#001407]/40 transition-colors hover:text-[#001407]/80'
    },
    {
      name: 'axon',
      className: 'font-mono lowercase tracking-widest text-2xl font-light text-[#001407]/40 transition-colors hover:text-[#001407]/80'
    },
    {
      name: 'THE TECH HUT',
      className: 'font-sans font-black tracking-tighter uppercase text-2xl text-[#001407]/40 transition-colors hover:text-[#001407]/80'
    },
    {
      name: 'MODU',
      className: 'font-sans font-light tracking-[0.4em] uppercase text-lg text-[#001407]/40 transition-colors hover:text-[#001407]/80'
    },
    {
      name: 'Cartly.',
      className: 'font-serif italic font-medium tracking-normal text-2xl text-[#001407]/40 transition-colors hover:text-[#001407]/80'
    }
  ];

  return (
    <>
      {brands.map((brand, index) => (
        <div key={index} className="flex h-[80px] w-[220px] shrink-0 items-center justify-center">
          <span className={brand.className}>
            {brand.name}
          </span>
        </div>
      ))}
    </>
  );
}

export default function SocialProof() {
  return (
    <section className="relative bg-[#FAFAFA] flex flex-col gap-[50px] items-center justify-center py-[88px] w-full overflow-hidden">
      
      {/* Top and bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#001407]/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#001407]/5 to-transparent" />
      
      {/* Left fade mask */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
      
      {/* Right fade mask */}
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

      {/* Headline */}
      <p
        className="font-bold leading-normal text-[11px] sm:text-[13px] md:text-[15px] text-[rgba(0,20,7,0.7)] tracking-[1px] sm:tracking-[2px] md:tracking-[3px] text-center px-4 sm:px-8 md:px-[40px]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        AISHA: EMPOWERING 500+ MODERN BUSINESSES ACROSS AFRICA
      </p>

      {/* Marquee Track */}
      <div className="w-full overflow-hidden">
        <div className="flex w-max flex-nowrap gap-24 animate-marquee-slow whitespace-nowrap">
          {/* Two copies for seamless loop */}
          <LogoSet />
          <LogoSet />
        </div>
      </div>

    </section>
  );
}
