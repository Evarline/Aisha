import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden w-full min-h-[80vh] bg-[#FAFAFA] px-5 md:px-10 py-20 md:py-32">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0, 20, 7, 1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 20, 7, 1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 62% at 50% 38%, rgba(250,250,250,1) 0%, rgba(250,250,250,0.98) 35%, rgba(245,248,246,0.9) 60%, rgba(239,243,241,0.95) 80%, rgba(232,238,235,1) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center max-w-4xl mx-auto gap-8 md:gap-10">
        <h1 className="text-[#001407] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.05] text-center mx-auto">
          Your 24/7 WhatsApp sales Assistant
        </h1>

        <p className="text-[#001407]/80 text-lg md:text-xl font-medium leading-relaxed max-w-3xl text-center mx-auto">
          Karibu to effortless client care. Aisha handles the hustle and lets you focus on what you love.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
          <Link
            href="/get-started"
            className="bg-[#001407] flex h-[52px] md:h-[60px] items-center justify-center px-8 md:px-[38px] py-[15px] rounded-[24px] min-w-[220px] hover:opacity-90 transition-opacity cursor-pointer"
          >
            <span className="font-medium leading-normal text-[#d2ff00] text-[18px] md:text-[24px] whitespace-nowrap">
              Start free trial
            </span>
          </Link>
          <button className="bg-transparent border-[#001407] border-[3.6px] border-solid flex h-[52px] md:h-[60px] items-center justify-center px-5 md:px-[21px] py-[15px] rounded-[24px] min-w-[220px] hover:bg-gray-100 transition-colors cursor-pointer">
            <span className="font-medium leading-normal text-[#001407] text-[18px] md:text-[24px] whitespace-nowrap">
              See how it works
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
