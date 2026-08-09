import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import ConsultationModal from "@/components/global/ConsultationModal";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Caregiving Governance™ | Protective Oversight for Senior Living",
  description:
    "Structured in-person proxy visits and governance-grade reporting for loved ones in assisted living, memory care, and nursing homes — protective oversight, not caregiving.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="bg-[#FBF9F5] text-slate-700 font-sans antialiased min-h-screen flex flex-col selection:bg-amber-100 selection:text-[#2B4336]">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
        <ConsultationModal />
      </body>
    </html>
  );
}
