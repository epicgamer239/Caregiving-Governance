"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const triggerConsultation = () => {
    setIsMobileMenuOpen(false);
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Brand Logo & Title */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 sm:gap-3"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Caregiving Governance Logo"
            width={32}
            height={32}
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain shrink-0"
            priority
          />
          <span className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight block">
            Caregiving Governance
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-700">
          <Link href="/" className="hover:text-[#2B4336] transition-colors">
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-[#2B4336] transition-colors"
          >
            About
          </Link>
          <Link
            href="/services"
            className="hover:text-[#2B4336] transition-colors"
          >
            Services & Fees
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#2B4336] transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={triggerConsultation}
            className="inline-flex items-center gap-2 bg-[#2B4336] hover:bg-[#203328] text-white px-4 py-2.5 rounded-md text-sm font-medium transition-colors shadow-xs"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule a Consultation</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-slate-800 hover:text-[#2B4336] hover:bg-slate-100 rounded-md transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FBF9F5] border-b border-slate-200 shadow-lg px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1 text-base font-medium text-slate-800">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-3 hover:bg-amber-100/60 rounded-md hover:text-[#2B4336] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-3 hover:bg-amber-100/60 rounded-md hover:text-[#2B4336] transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-3 hover:bg-amber-100/60 rounded-md hover:text-[#2B4336] transition-colors"
            >
              Services & Fees
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-3 hover:bg-amber-100/60 rounded-md hover:text-[#2B4336] transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="pt-2 border-t border-slate-200">
            <button
              onClick={triggerConsultation}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#2B4336] hover:bg-[#203328] text-white py-3 rounded-md text-sm font-medium transition-colors shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule a Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
