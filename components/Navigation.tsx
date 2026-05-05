"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingCart } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Test Bundles", href: "/courses" },
  { name: "Free Test", href: "/courses", isHighlighted: true },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  // If we are not on the home page, the navbar should always appear as "scrolled"
  const isNavSolid = !isHome || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialized on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Background Blur Layer */}
      <div 
        className={`absolute inset-0 transition-all duration-300 -z-10 ${
          isNavSolid 
            ? "bg-white/70 backdrop-blur-md shadow-sm" 
            : "bg-transparent"
        }`} 
      />

      <div className={`relative z-10 transition-all duration-300 ${isNavSolid ? "py-4" : "py-6"}`}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className={`text-3xl font-serif font-bold ${isNavSolid ? "text-[#0F172A]" : "text-white drop-shadow-md"}`}>
              EduCraft
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={
                    link.isHighlighted
                      ? `transition-colors text-base font-medium px-4 py-1.5 rounded-full ${
                          isNavSolid
                            ? "bg-[#6366F1]/10 text-[#6366F1] hover:bg-[#6366F1]/20"
                            : "bg-white/20 text-white hover:bg-white/30 border border-white/30"
                        }`
                      : `transition-colors text-base font-medium tracking-wide ${
                          isNavSolid 
                            ? "text-[#334155] hover:text-[#6366F1]" 
                            : "text-neutral-200 hover:text-white drop-shadow-md"
                        }`
                  }
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center gap-4">
                <div className="relative group cursor-pointer">
                  <ShoppingCart size={24} className={`transition-colors ${isNavSolid ? "text-[#0F172A] hover:text-[#6366F1]" : "text-white hover:text-gray-200 drop-shadow-md"}`} />
                  <span className="absolute -top-1.5 -right-2 bg-[#6366F1] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    2
                  </span>
                </div>
              </div>
              <Link
                href="#signin"
                className="px-6 py-2 rounded-full bg-[#6366F1] text-white transition-all duration-300 hover:scale-105 hover:bg-indigo-600 hover:shadow-lg text-base font-medium"
              >
                Sign In
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className={`flex items-center space-x-4 md:hidden ${isNavSolid ? "text-[#0F172A]" : "text-white drop-shadow-md"}`}>
              <div className="relative group cursor-pointer mr-2">
                <ShoppingCart size={24} />
                <span className="absolute -top-1.5 -right-2 bg-[#6366F1] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  2
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1 focus:outline-none focus:ring-2 border-transparent focus:ring-[#6366F1] rounded transition-colors"
              >
                {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#FFFFFF] border-t border-[#E2E8F0] shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 space-y-6 relative z-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={
                link.isHighlighted
                  ? "text-[#6366F1] bg-[#6366F1]/10 px-4 py-2 rounded-full w-fit hover:bg-[#6366F1]/20 transition-colors text-lg font-medium"
                  : "text-[#334155] hover:text-[#6366F1] transition-colors text-lg font-medium"
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-[#E2E8F0]">
            <Link
              href="#signin"
              className="block text-center w-full px-5 py-3.5 rounded-full bg-[#6366F1] text-white transition-all duration-300 hover:bg-indigo-600 font-medium text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
