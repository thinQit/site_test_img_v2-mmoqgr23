export const dynamic = 'force-dynamic';

import AceternityHeroAurora from "@/components/AceternityHeroAurora";
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <AceternityHeroAurora
          headline="Privacy Policy"
          subheadline="We collect only what we need to schedule sessions and respond to inquiries."
          primaryCta={{ label: "Contact", href: "/contact" }}
          secondaryCta={{ label: "Home", href: "/" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578078/site-images/fitness/10475451.jpg"
        />
      </div>
      <section className="animate-fade-in-up py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeader headline="How we handle your information" subheadline="Plain-language summary of what we collect and why." />
          <Card className="mt-8 rounded-xl border border-border bg-card p-6">
            <p>Effective: January 1, 2026</p>
          </Card>
        </div>
      </section>
    </main>
  );
}
