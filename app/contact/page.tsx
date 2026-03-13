export const dynamic = 'force-dynamic';

import AceternityHeroAurora from "@/components/AceternityHeroAurora";
import ContactForm from "@/components/ContactForm";
import LocationMapBlock from "@/components/LocationMapBlock";

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <AceternityHeroAurora
          headline="Visit Iron & Oak. Your first step is simple."
          subheadline="Book a free intro session, ask a question, or stop by for a tour."
          primaryCta={{ label: "Book Free Intro", href: "#contact-form" }}
          secondaryCta={{ label: "Call (512) 555-0199", href: "tel:+15125550199" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/v1771578055/site-images/fitness/13278075.jpg"
        />
      </div>
      <div id="contact-form" className="animate-fade-in-up bg-muted py-20 md:py-28">
        <ContactForm
          headline="Book your free intro session"
          subheadline="Tell us your goal and preferred time. We’ll reply within 1 business day."
          primaryCta={{ label: "Send Message", href: "#" }}
          secondaryCta={{ label: "Email Us", href: "mailto:hello@ironandoakfitness.com" }}
          contactInfo={[
            { icon: "MapPin", label: "Address", value: "1127 E 6th St, Austin, TX 78702" },
            { icon: "Phone", label: "Phone", value: "(512) 555-0199" },
            { icon: "Mail", label: "Email", value: "hello@ironandoakfitness.com" },
          ]}
        />
      </div>
      <div id="location" className="animate-fade-in-up py-20 md:py-28">
        <LocationMapBlock
          headline="Find us in Downtown Austin"
          subheadline="Easy parking nearby and quick access from I-35."
          primaryCta={{ label: "Get Directions", href: "https://maps.google.com/?q=1127+E+6th+St,+Austin,+TX+78702" }}
          secondaryCta={{ label: "View Schedule", href: "/#classes" }}
          address="1127 E 6th St, Austin, TX 78702"
          parking="Street parking on E 6th + paid lot behind the building after 5pm."
          landmarks="Two blocks east of the Austin Convention Center."
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/v1771578086/site-images/fitness/13106584.jpg"
        />
      </div>
    </main>
  );
}
