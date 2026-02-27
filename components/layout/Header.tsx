import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-[90px] w-full items-center justify-center bg-[#f5f5f5] border-b-2 border-[rgba(245,245,245,0.02)] shadow-[0px_4px_4px_0px_rgba(0,20,7,0.02)]">
      <div className="flex w-full max-w-[1360px] items-center justify-between px-[40px]">
        {/* Logo Area */}
        <div className="flex items-center">
          <span className="text-[43.689px] font-bold font-[family-name:var(--font-nunito)] tracking-tight text-[#001407]">Aisha AI</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[20px] font-normal font-[family-name:var(--font-inter)] text-[#001407]">
          <Link href="/" className="hover:opacity-80 transition-opacity">Home</Link>
          <Link href="#features" className="hover:opacity-80 transition-opacity">Features</Link>
          <Link href="#testimonials" className="hover:opacity-80 transition-opacity">Testimonials</Link>
          <Link href="#about" className="hover:opacity-80 transition-opacity">About us</Link>
          <Link href="#pricing" className="hover:opacity-80 transition-opacity">Pricing</Link>
        </nav>

        {/* Call to Action Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:flex items-center justify-center px-5 py-3 text-[24px] font-medium font-[family-name:var(--font-roboto)] text-[#001407] hover:bg-black/5 rounded-full transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
            Login
          </Link>
          <button className="flex h-[50px] w-[200px] shrink-0 items-center justify-center overflow-clip rounded-[24px] bg-[#001407] px-[38px] py-[15px] hover:opacity-90 transition-opacity cursor-pointer">
            <span className="font-medium leading-normal text-white text-[24px] font-[family-name:var(--font-roboto)]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Get started
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
