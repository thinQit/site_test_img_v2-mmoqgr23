import "./globals.css";
import type { Metadata } from "next";
import { Anton, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-heading" });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Iron & Oak Fitness | Premium Strength Training Gym in Austin",
  description:
    "Coach-led strength training, personal coaching, and high-energy group classes in Downtown Austin. Small class caps, structured programming, and measurable progress. Claim a free intro session.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${montserrat.variable}`}>
      <body className="bg-background text-foreground font-sans">
        <Navbar
          logo="Iron & Oak Fitness"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Classes", href: "/#classes" },
            { label: "Coaches", href: "/#trainers" },
            { label: "Memberships", href: "/#pricing" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Free Intro"
          ctaHref="/contact?intent=free-intro"
        />
        {children}
        <Footer
          brand="Iron & Oak Fitness"
          description="Premium strength training in Austin. Coach-led classes, personal coaching, and a community built on progress."
          columns={[
            {
              title: "Visit",
              links: [
                { label: "1127 E 6th St, Austin, TX 78702", href: "/contact#location" },
                { label: "Mon–Fri 5:30am–8:30pm", href: "/contact" },
                { label: "Sat–Sun 8:00am–2:00pm", href: "/contact" },
              ],
            },
            {
              title: "Contact",
              links: [
                { label: "(512) 555-0199", href: "tel:+15125550199" },
                { label: "hello@ironandoakfitness.com", href: "mailto:hello@ironandoakfitness.com" },
                { label: "Instagram", href: "https://instagram.com/ironandoakfitness" },
              ],
            },
            {
              title: "Legal",
              links: [
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms", href: "/terms" },
              ],
            },
          ]}
          copyright="© 2026 Iron & Oak Fitness. All rights reserved."
        />
      </body>
    </html>
  );
}
