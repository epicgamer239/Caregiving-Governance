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
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-slate-900">
            We’re Here When Your Family Needs Support
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
            Caregiving can feel overwhelming, fragmented, or uncertain. Reaching
            out is the first step toward structure, clarity, and peace of mind.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-8 sm:p-10 shadow-sm text-center space-y-6">
          <div className="w-12 h-12 bg-amber-100 text-[#2B4336] rounded-md flex items-center justify-center mx-auto">
            <Calendar className="w-6 h-6" />
          </div>

          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="font-serif text-2xl font-semibold text-slate-900">
              Schedule a Consultation
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              A calm, structured conversation where we learn about your loved
              one’s care environment and identify the level of oversight you
              want.
            </p>
          </div>

          <div>
            <button
              onClick={triggerConsultation}
              className="inline-flex items-center gap-2 bg-[#2B4336] hover:bg-[#203328] text-white px-8 py-3 rounded-md text-base font-medium transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule a Consultation</span>
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-semibold text-slate-900 text-center">
            Ways to Reach Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <button
              onClick={triggerConsultation}
              className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm hover:border-[#2B4336] transition-colors text-center space-y-3 group"
            >
              <PhoneCall className="w-6 h-6 text-[#2B4336] mx-auto" />
              <strong className="block text-base font-semibold text-slate-900 group-hover:text-[#2B4336]">
                Request a Call
              </strong>
            </button>

            <button
              onClick={triggerConsultation}
              className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm hover:border-[#2B4336] transition-colors text-center space-y-3 group"
            >
              <MessageSquare className="w-6 h-6 text-[#2B4336] mx-auto" />
              <strong className="block text-base font-semibold text-slate-900 group-hover:text-[#2B4336]">
                Send a Message
              </strong>
            </button>

            <Link
              href="/services"
              className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm hover:border-[#2B4336] transition-colors text-center space-y-3 group block"
            >
              <Compass className="w-6 h-6 text-[#2B4336] mx-auto" />
              <strong className="block text-base font-semibold text-slate-900 group-hover:text-[#2B4336]">
                Explore Services
              </strong>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
