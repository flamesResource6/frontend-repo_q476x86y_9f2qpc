import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-amber-50/80 border-b border-amber-200/60">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-600 to-rose-600 flex items-center justify-center shadow">
            <span className="text-amber-100 font-black">M</span>
          </div>
          <div>
            <p className="text-lg font-extrabold tracking-wide text-amber-800">Mehndi Mahal</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-amber-700/80">Traditional Artistry</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-amber-900 font-medium">
          <a href="#styles" className="hover:text-rose-700 transition">Styles</a>
          <a href="#gallery" className="hover:text-rose-700 transition">Gallery</a>
          <a href="#about" className="hover:text-rose-700 transition">About</a>
          <a href="#contact" className="px-4 py-2 rounded-full bg-gradient-to-r from-rose-700 to-amber-700 text-amber-50 shadow hover:opacity-90 transition">Book Now</a>
        </nav>
        <button className="md:hidden p-2 rounded-lg text-amber-900 hover:bg-amber-100">
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}
