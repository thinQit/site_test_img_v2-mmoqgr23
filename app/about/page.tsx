export const dynamic = 'force-dynamic';

import AceternityHeroAurora from "@/components/AceternityHeroAurora";
import FeaturesCards3D from "@/components/FeaturesCards3D";
import CTASparkles from "@/components/CTASparkles";

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <AceternityHeroAurora
          headline="Coaching-first strength training—built for long-term progress."
          subheadline="Iron & Oak was created for people who want to train hard, lift well, and stay healthy."
          primaryCta={{ label: "Meet Us In Person", href: "/contact?intent=visit" }}
          secondaryCta={{ label: "See Coaches", href: "/#trainers" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578070/site-images/fitness/10942666.jpg"
        />
      </div>
      <div className="animate-fade-in-up bg-muted py-20 md:py-28">
        <FeaturesCards3D
          badge="Facility"
          title="A facility designed for strength."
          subtitle="Everything you need to lift heavy, move well, and recover smart."
          features={[
            { icon: "Dumbbell", title: "Competition-grade racks & bars", description: "Multiple squat stations, calibrated plates, and specialty bars." },
            { icon: "Zap", title: "Conditioning zone", description: "Sled track, rowers, bikes, and space for carries." },
            { icon: "HeartPulse", title: "Mobility & recovery corner", description: "Bands, rollers, and guided warm-ups built into every class." },
            { icon: "Users", title: "Capped classes", description: "12 max so coaches can cue and correct in real time." },
          ]}
        />
      </div>
      <div className="animate-fade-in-up py-20 md:py-28">
        <CTASparkles
          title="Ready to train with a plan?"
          subtitle="Start with a free intro session and leave with a clear next step."
          primaryCta={{ label: "Claim Free Intro", href: "/contact?intent=free-intro" }}
          secondaryCta={{ label: "See Schedule", href: "/#classes" }}
          whatYouGet={["Movement screen", "Goal planning", "Recommended class track"]}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578074/site-images/fitness/10551484.jpg"
        />
      </div>
    </main>
  );
}
