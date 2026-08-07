"use client";

import Link from "next/link";
import { Calendar, PhoneCall, MessageSquare, Compass } from "lucide-react";

export default function ContactSection() {
  const triggerConsultation = () => {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900">
            Request More Information
          </h1>
          <p className="text-base text-slate-700 leading-relaxed max-w-xl mx-auto">
            Ask about proxy visits, reporting, facility partnerships, or the
            Virginia launch.
          </p>
        </div>

        {/* Featured Deep Sage Consultation Callout Banner */}
        <div className="bg-[#2B4336] border border-[#203328] rounded-xl p-8 sm:p-10 shadow-md text-center space-y-5">
          <div className="w-12 h-12 bg-amber-100 text-[#2B4336] rounded-md flex items-center justify-center mx-auto shrink-0">
            <Calendar className="w-6 h-6" />
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            <h2 className="font-serif text-2xl font-semibold text-white">
              Book a Consultation
            </h2>
            <p className="text-sm text-slate-200 leading-relaxed">
              A short conversation about oversight needs for your resident or
              facility.
            </p>
          </div>

          <div>
            <button
              onClick={triggerConsultation}
              className="inline-flex items-center gap-2 bg-amber-300 hover:bg-amber-400 text-slate-950 px-8 py-3.5 rounded-md text-base font-semibold transition-colors shadow-xs"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book a Consultation</span>
            </button>
          </div>
        </div>

        {/* Ways to Reach Us Section */}
        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-semibold text-slate-900 text-center">
            Ways to Reach Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <button
              onClick={triggerConsultation}
              className="bg-white border border-slate-200 border-t-4 border-t-[#2B4336] p-6 rounded-lg shadow-xs hover:shadow-md transition-all text-center space-y-3 group cursor-pointer"
            >
              <div className="p-3 bg-amber-100 text-[#2B4336] rounded-md inline-block">
                <PhoneCall className="w-5 h-5" />
              </div>
              <strong className="block text-base font-semibold text-slate-900 group-hover:text-[#2B4336] transition-colors">
                Request a Call
              </strong>
            </button>

            <button
              onClick={triggerConsultation}
              className="bg-white border border-slate-200 border-t-4 border-t-[#2B4336] p-6 rounded-lg shadow-xs hover:shadow-md transition-all text-center space-y-3 group cursor-pointer"
            >
              <div className="p-3 bg-amber-100 text-[#2B4336] rounded-md inline-block">
                <MessageSquare className="w-5 h-5" />
              </div>
              <strong className="block text-base font-semibold text-slate-900 group-hover:text-[#2B4336] transition-colors">
                Send a Message
              </strong>
            </button>

            <Link
              href="/services"
              className="bg-white border border-slate-200 border-t-4 border-t-[#2B4336] p-6 rounded-lg shadow-xs hover:shadow-md transition-all text-center space-y-3 group block"
            >
              <div className="p-3 bg-amber-100 text-[#2B4336] rounded-md inline-block">
                <Compass className="w-5 h-5" />
              </div>
              <strong className="block text-base font-semibold text-slate-900 group-hover:text-[#2B4336] transition-colors">
                Explore Services
              </strong>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
