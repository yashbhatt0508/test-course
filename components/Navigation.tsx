"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingCart } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Test Series", href: "/courses" },
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
            ? "bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-xl border-b border-[#E2E8F0] shadow-sm" 
            : "bg-transparent"
        }`} 
      />

      <div className={`relative z-10 transition-all duration-300 ${isNavSolid ? "py-4" : "py-6"}`}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="text-3xl font-fraunces font-bold text-[#0F172A] dark:text-white">
              EduCraft
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`transition-colors text-base font-medium px-3 py-1.5 rounded-lg ${
                      isActive
                        ? "bg-[#6366F1]/10 text-[#6366F1]"
                        : "text-[#374151] dark:text-[#CBD5E1] hover:text-[#6366F1]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative group cursor-pointer mr-2">
                <ShoppingCart size={24} className="text-[#0F172A] dark:text-white hover:text-[#6366F1] transition-colors" />
                <span className="absolute -top-1.5 -right-2 bg-[#6366F1] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  2
                </span>
              </div>
              <Link
                href="#signin"
                className="px-4 py-2 rounded-xl border border-[#6366F1] text-[#6366F1] font-medium transition-all hover:bg-[#6366F1]/10"
              >
                Sign In
              </Link>
              <Link
                href="/courses?filter=FREE"
                className="px-5 py-2 rounded-xl bg-[#6366F1] text-white font-medium transition-all hover:bg-indigo-600 hover:shadow-lg"
              >
                Free Assessment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4 md:hidden text-[#0F172A] dark:text-white">
              <div className="relative group cursor-pointer mr-2">
                <ShoppingCart size={24} className="hover:text-[#6366F1] transition-colors" />
                <span className="absolute -top-1.5 -right-2 bg-[#6366F1] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  2
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1 focus:outline-none focus:ring-2 border-transparent focus:ring-[#6366F1] rounded transition-colors hover:text-[#6366F1]"
              >
                {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#FFFFFF] dark:bg-[#1E293B] border-t border-[#E2E8F0] dark:border-[#334155] shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 space-y-4 relative z-10">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors text-lg font-medium px-4 py-2 rounded-lg ${
                  isActive
                    ? "bg-[#6366F1]/10 text-[#6366F1]"
                    : "text-[#374151] dark:text-[#CBD5E1] hover:text-[#6366F1] hover:bg-gray-50 dark:hover:bg-[#334155]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-[#E2E8F0] flex flex-col gap-3">
            <Link
              href="#signin"
              className="block text-center w-full px-5 py-3 rounded-xl border border-[#6366F1] text-[#6366F1] font-medium text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/courses?filter=FREE"
              className="block text-center w-full px-5 py-3 rounded-xl bg-[#6366F1] text-white transition-all hover:bg-indigo-600 font-medium text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Free Assessment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
