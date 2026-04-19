"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialized on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with Tooltip */}
          <div className="group relative flex items-center">
            <Link href="/" className={`text-3xl font-serif font-bold ${isScrolled ? "text-primary" : "text-white drop-shadow-md dark:text-primary"}`}>
              EduCraft
            </Link>
            {/* Tooltip */}
            <div className="absolute left-0 bottom-[-32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-foreground text-background text-xs px-3 py-1.5 rounded shadow-lg whitespace-nowrap">
              EduCraft Course Portal
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors text-sm font-medium tracking-wide ${
                  isScrolled 
                    ? "text-secondary hover:text-primary" 
                    : "text-neutral-200 hover:text-white drop-shadow-md dark:text-secondary dark:hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className={`hidden md:flex items-center space-x-5 ${isScrolled ? "text-primary" : "text-white dark:text-primary drop-shadow-md"}`}>
            <ThemeToggle />
            <Link
              href="#signin"
              className="px-6 py-2.5 rounded-full bg-cta text-background transition-all duration-300 hover:bg-cta-hover hover:scale-105 hover:shadow-lg text-sm font-medium"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className={`flex items-center space-x-4 md:hidden ${isScrolled ? "text-primary" : "text-white dark:text-primary drop-shadow-md"}`}>
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 focus:outline-none focus:ring-2 border-transparent focus:ring-cta rounded hover:bg-alt-bg transition-colors"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background border-t border-alt-bg shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 space-y-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-secondary hover:text-primary transition-colors text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-alt-bg">
            <Link
              href="#signin"
              className="block text-center w-full px-5 py-3.5 rounded-full bg-cta text-background transition-all duration-300 hover:bg-cta-hover font-medium text-lg"
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
