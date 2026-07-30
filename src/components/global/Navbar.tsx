"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";

export default function Navbar() {
  const triggerConsultation = () => {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Simplified Brand Header */}
        <Link href="/" className="group">
          <span className="font-serif text-lg sm:text-2xl font-semibold text-slate-900 tracking-tight block">
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

        {/* CTA Button */}
        <button
          onClick={triggerConsultation}
          className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#2B4336] hover:bg-[#203328] text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-md text-xs sm:text-sm font-medium transition-colors shadow-xs shrink-0"
        >
          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>Schedule a Consultation</span>
        </button>
      </div>
    </header>
  );
}
