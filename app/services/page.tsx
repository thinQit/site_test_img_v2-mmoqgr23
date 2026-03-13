export const dynamic = 'force-dynamic';

import AceternityHeroAurora from "@/components/AceternityHeroAurora";
import FeaturesCards3D from "@/components/FeaturesCards3D";
import CTASparkles from "@/components/CTASparkles";

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <AceternityHeroAurora
          headline="Choose your track: strength, conditioning, or 1:1 coaching."
          subheadline="Whether you want to add pounds to the bar, improve your engine, or get fully customized coaching—Iron & Oak has a clear path."
          primaryCta={{ label: "Start with a Free Intro", href: "/contact?intent=free-intro" }}
          secondaryCta={{ label: "View Memberships", href: "/#pricing" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/v1771578072/site-images/fitness/13345705.jpg"
        />
      </div>
      <div className="animate-fade-in-up bg-muted py-20 md:py-28">
        <FeaturesCards3D
          badge="Services"
          title="What we offer"
          subtitle="Coach-led sessions with structured programming and measurable progress."
          features={[
            { icon: "Flame", title: "Coach-Led Group Strength (IRON)", description: "55-minute sessions with main lift + accessories + finisher." },
            { icon: "Gauge", title: "Conditioning & Performance (OAK)", description: "45-minute intervals, sleds, carries, and scaling options." },
            { icon: "Target", title: "Technique & Mobility (LIFT LAB)", description: "Beginner-friendly coaching with tempo and mobility integration." },
            { icon: "User", title: "1:1 Personal Training", description: "Customized plans for specific goals and technique deep-dives." },
          ]}
        />
      </div>
      <div className="animate-fade-in-up py-20 md:py-28">
        <CTASparkles
          title="Not sure where to start? We’ll recommend the right track."
          subtitle="Your free intro includes a movement screen and a simple plan for your first month."
          primaryCta={{ label: "Claim Free Intro", href: "/contact?intent=free-intro" }}
          secondaryCta={{ label: "Contact", href: "/contact" }}
          whatYouGet={["Movement screen", "Coach consult", "First-month roadmap"]}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/v1771578079/site-images/fitness/13947314.jpg"
        />
      </div>
    </main>
  );
}
