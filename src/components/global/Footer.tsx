import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-slate-800">
          <div>
            <span className="font-serif text-2xl font-semibold text-white block mb-3">
              Caregiving Governance™
            </span>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Structured oversight for your loved one’s care. Bringing clarity,
              accountability, and calm support to families in complex care
              environments.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-amber-200 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-amber-200 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-amber-200 transition-colors"
                >
                  Services & Fees
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-amber-200 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium text-white mb-4">
              Pazant Consulting Services
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Caregiving Governance™ is a specialized advisory standard designed
              by Alecia Pazant, Founder & Strategic Advisor.
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} Caregiving Governance™. All rights
            reserved.
          </p>
          <p>
            Providing non-clinical, professional oversight and strategic family
            governance.
          </p>
        </div>
      </div>
    </footer>
  );
}
