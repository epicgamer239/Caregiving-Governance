"use client";

import { useState, useEffect } from "react";
import { X, Calendar, Loader2 } from "lucide-react";

export default function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    details: "",
  });

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-consultation-modal", handleOpen);
    return () =>
      window.removeEventListener("open-consultation-modal", handleOpen);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send request.");
      }

      setSubmitted(true);
      setFormData({ fullName: "", email: "", phone: "", details: "" });
    } catch (err) {
      setErrorMessage(
        "Something went wrong. Please try again or reach out directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-[#FBF9F5] border border-slate-200 rounded-lg shadow-xl max-w-lg w-full p-6 sm:p-8 relative">
        <button
          onClick={() => {
            setIsOpen(false);
            setSubmitted(false);
            setErrorMessage("");
          }}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-amber-100 text-[#2B4336] rounded-md">
            <Calendar className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-2xl font-semibold text-slate-900">
            Schedule a Consultation
          </h3>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <h4 className="font-serif text-xl text-[#2B4336] font-medium">
              Thank You for Reaching Out
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              We have received your message. Alecia Pazant and our governance
              advisory team will connect with you shortly for a calm, structured
              conversation.
            </p>
            <button
              onClick={() => {
                setIsOpen(false);
                setSubmitted(false);
              }}
              className="mt-4 bg-[#2B4336] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#203328]"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              A calm, structured conversation where we learn about your loved
              one’s care environment and identify the level of oversight you
              want.
            </p>

            {errorMessage && (
              <div className="p-3 bg-red-50 text-red-700 border border-red-200 rounded-md text-xs font-medium">
                {errorMessage}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2B4336]"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2B4336]"
                placeholder="jane@example.com"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2B4336]"
                placeholder="(555) 000-0000"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Care Environment / Location Details
              </label>
              <textarea
                rows={3}
                name="details"
                value={formData.details}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2B4336]"
                placeholder="Briefly describe your loved one's care setting (e.g. Assisted Living, Skilled Nursing)..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#2B4336] hover:bg-[#203328] disabled:bg-slate-400 text-white py-2.5 rounded-md text-sm font-medium transition-colors shadow-xs mt-2 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Request...</span>
                </>
              ) : (
                <span>Submit Consultation Request</span>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
