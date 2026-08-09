import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2B4336] text-slate-200 pt-16 pb-12 border-t border-[#203328]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-[#203328]">
          <div className="space-y-3">
            <span className="font-serif text-2xl font-semibold text-white block">
              Caregiving Governance™
            </span>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Protective oversight through structured proxy visits and
              governance-grade reporting — not caregiving.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium text-amber-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-amber-300 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-amber-300 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-amber-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif text-lg font-medium text-amber-200">
              Pazant Consulting Services, LLC
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Caregiving Governance™ is a governance-grade oversight service
              founded by Alecia Pazant.
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>
            © {new Date().getFullYear()} Caregiving Governance™. All rights
            reserved.
          </p>
          <p>Non-clinical, non-caregiving protective oversight.</p>
        </div>
      </div>
    </footer>
  );
}
