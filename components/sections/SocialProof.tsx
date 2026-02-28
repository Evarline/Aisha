function LogoSet() {
  return (
    <>
      {/* VELORA */}
      <div className="flex h-[80px] w-[220px] shrink-0 items-center justify-center">
        <span
          className="font-medium text-[24px] text-[rgba(74,44,64,0.7)] tracking-[3.6px]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          VELORA
        </span>
      </div>

      {/* axon */}
      <div className="flex h-[80px] w-[220px] shrink-0 items-center justify-center">
        <span
          className="font-extrabold text-[32px] tracking-[-0.64px]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <span className="text-[rgba(4,52,14,0.6)]">a</span>
          <span className="text-[#d2ff00]">x</span>
          <span className="text-[rgba(4,52,14,0.6)]">on</span>
        </span>
      </div>

      {/* Tech Hut */}
      <div className="flex h-[80px] w-[220px] shrink-0 items-center justify-center">
        <div className="h-[60px] w-[63px] rounded-[100px] overflow-hidden">
          <img
            src="/Images/Tech%20Hut%20logo.png"
            alt="Tech Hut"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* MODU */}
      <div className="flex h-[80px] w-[220px] shrink-0 items-center justify-center">
        <span
          className="font-black text-[20px] text-[rgba(61,61,61,0.5)] tracking-[2px]"
          style={{ fontFamily: "'Archivo', sans-serif", fontVariationSettings: "'wdth' 100" }}
        >
          MODU
        </span>
      </div>

      {/* Cartly. */}
      <div className="flex h-[80px] w-[220px] shrink-0 items-center justify-center">
        <span
          className="font-bold text-[32px]"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          <span className="text-[#04340e]">Cartly</span>
          <span className="text-[#d2ff00]">.</span>
        </span>
      </div>
    </>
  );
}

export default function SocialProof() {
  return (
    <section className="bg-white flex flex-col gap-[50px] items-center justify-center py-[88px] w-full overflow-hidden">

      {/* Headline */}
      <p
        className="font-bold leading-normal text-[15px] text-[rgba(0,20,7,0.7)] tracking-[3px] text-center px-[40px]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        AISHA: EMPOWERING 500+ MODERN BUSINESSES ACROSS AFRICA
      </p>

      {/* Marquee Track */}
      <div className="w-full overflow-hidden">
        <div className="flex w-max animate-marquee">
          {/* Two copies for seamless loop */}
          <LogoSet />
          <LogoSet />
        </div>
      </div>

    </section>
  );
}
