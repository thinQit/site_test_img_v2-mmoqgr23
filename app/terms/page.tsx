export const dynamic = 'force-dynamic';

import AceternityHeroAurora from "@/components/AceternityHeroAurora";
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <AceternityHeroAurora
          headline="Terms of Service"
          subheadline="Standard terms for using our website and booking sessions."
          primaryCta={{ label: "Contact", href: "/contact" }}
          secondaryCta={{ label: "Home", href: "/" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/v1771578092/site-images/fitness/13106581.jpg"
        />
      </div>
      <section className="animate-fade-in-up py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeader headline="Website and booking terms" subheadline="A clear outline of expectations and limitations." />
          <Card className="mt-8 rounded-xl border border-border bg-card p-6">
            <p>Effective: January 1, 2026</p>
          </Card>
        </div>
      </section>
    </main>
  );
}
