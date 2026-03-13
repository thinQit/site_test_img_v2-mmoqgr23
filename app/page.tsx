export const dynamic = 'force-dynamic';

import AceternityHeroAurora from "@/components/AceternityHeroAurora";
import ClassSchedule from "@/components/ClassSchedule";
import TrainerCardsGrid from "@/components/TrainerCardsGrid";
import MembershipTiers from "@/components/MembershipTiers";
import TransformationGallery from "@/components/TransformationGallery";
import StatsCounter from "@/components/StatsCounter";
import CTASparkles from "@/components/CTASparkles";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import AngledSectionDivider from "@/components/AngledSectionDivider";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up [&_.text-foreground]:!text-gray-900 [&_.text-muted-foreground]:!text-gray-800">
        <AceternityHeroAurora
          headline="Build real strength—with coaching that doesn’t miss."
          subheadline="Premium Strength Training & Personal Coaching Since 2019."
          primaryCta={{
            label: "Claim a Free Intro Session",
            href: "/contact?intent=free-intro",
            className: "bg-orange-600 hover:bg-orange-700",
          }}
          secondaryCta={{ label: "View Class Schedule", href: "#classes" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/v1771578068/site-images/fitness/13993021.jpg"
          locationLine="Downtown Austin • 1127 E 6th St, Austin, TX 78702"
          hours="Mon–Fri 5:30am–8:30pm • Sat 8:00am–2:00pm • Sun 9:00am–1:00pm"
          trustBadges={["Coach-led sessions", "Small class caps (12 max)", "Beginner-friendly strength cycles"]}
          heroStats={[
            { label: "Avg. strength gain", value: "+15–25%", note: "in 12 weeks with consistent attendance" },
            { label: "Coach-to-member ratio", value: "1:12", note: "in group classes" },
            { label: "Onboarding time", value: "60 min", note: "movement screen + goal plan" },
          ]}
        />
      </div>

      <AngledSectionDivider />
      <div id="classes" className="animate-fade-in-up bg-muted py-20 md:py-28">
        <ClassSchedule
          headline="Class schedule built for busy lifters."
          subheadline="Strength-first programming with clear progressions. Choose your time, show up, and we coach the details."
          primaryCta={{
            label: "Book a Trial Class",
            href: "/contact?intent=trial-class",
            className: "bg-orange-600 hover:bg-orange-700",
          }}
          secondaryCta={{ label: "Meet the Coaches", href: "#trainers" }}
          classTypes={[
            { name: "IRON (Strength)", intensity: "Moderate–High", duration: "55 min", focus: "Squat/bench/deadlift variations + accessories", bestFor: "Building foundational strength and muscle" },
            { name: "OAK (Conditioning)", intensity: "High", duration: "45 min", focus: "Intervals, sleds, carries, rower/bike", bestFor: "Work capacity and athletic conditioning" },
            { name: "LIFT LAB (Technique)", intensity: "Low–Moderate", duration: "50 min", focus: "Barbell mechanics, tempo work, mobility", bestFor: "Beginners and anyone refining form" },
            { name: "TEAM STRONG (Partner)", intensity: "Moderate–High", duration: "60 min", focus: "Partner strength circuits + finishers", bestFor: "Motivation, community, and consistency" },
          ]}
          weeklySchedule={[]}
          notes={[
            "All classes are coach-led with warm-up, main lift/effort, and finisher.",
            "Beginner? Start with LIFT LAB or book a Free Intro Session.",
          ]}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/v1771578072/site-images/fitness/14086547.jpg"
        />
      </div>

      <AngledSectionDivider />
      <div id="trainers" className="animate-fade-in-up py-20 md:py-28">
        <TrainerCardsGrid
          headline="Coaches who cue the details—and track your progress."
          subheadline="You’ll never wonder what to do next. We coach technique, load selection, and weekly progression so you keep improving safely."
          primaryCta={{
            label: "Schedule a Coach Consult",
            href: "/contact?intent=coach-consult",
            className: "bg-orange-600 hover:bg-orange-700",
          }}
          secondaryCta={{ label: "See Memberships", href: "#pricing" }}
          trainers={[
            { name: "Alex Navarro", role: "Head Strength Coach", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771578061/site-images/fitness/11513151.jpg", bio: "CSCS • USAW L1 • 10+ years coaching barbell athletes." },
            { name: "Maya Reed", role: "Coach • Group Training Lead", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771578088/site-images/fitness/11219264.jpg", bio: "NASM-CPT • Precision Nutrition L1 • Hypertrophy programming specialist." },
            { name: "Priya Desai", role: "Coach • Conditioning & Performance", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771578091/site-images/fitness/13896897.jpg", bio: "CF-L2 • TRX • CPR/AED • Athletic conditioning expert." },
            { name: "Jordan Kim", role: "Coach • Technique & Mobility", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771578058/site-images/fitness/1103244.jpg", bio: "USAW L1 • FRC Mobility Specialist • Barbell mechanics coach." },
          ]}
        />
      </div>

      <AngledSectionDivider />
      <div id="pricing" className="animate-fade-in-up bg-muted py-20 md:py-28">
        <MembershipTiers
          headline="Memberships that match your goals—and your schedule."
          subheadline="All memberships include coaching, programming, and progress tracking. Upgrade anytime as your training needs change."
          primaryCta={{
            label: "Start with a Free Intro",
            href: "/contact?intent=free-intro",
            className: "bg-orange-600 hover:bg-orange-700",
          }}
          secondaryCta={{ label: "Questions? Contact Us", href: "/contact" }}
          tiers={[
            { name: "Foundation", price: "$149/mo", badge: "Best for consistency", description: "Coach-led strength training that fits a busy week.", features: ["8 classes/month", "Strength cycle programming", "Form coaching every session", "Monthly progress check-in"], cta: { label: "Choose Foundation", href: "/contact?intent=membership&plan=foundation", className: "bg-orange-600 hover:bg-orange-700" } },
            { name: "Performance", price: "$199/mo", badge: "Most popular", description: "Train often, progress faster, and stay accountable.", features: ["Unlimited classes", "Priority booking (early access)", "Quarterly movement screen", "Open Gym Fridays"], cta: { label: "Choose Performance", href: "/contact?intent=membership&plan=performance", className: "bg-orange-600 hover:bg-orange-700" } },
            { name: "Elite Coaching", price: "$349/mo", badge: "Premium", description: "Personal coaching + classes for maximum results.", features: ["Unlimited classes", "2x 1:1 coaching sessions/month", "Customized accessory work", "Nutrition habit plan + weekly check-ins"], cta: { label: "Choose Elite", href: "/contact?intent=membership&plan=elite", className: "bg-orange-600 hover:bg-orange-700" } },
          ]}
          finePrint={[
            "Month-to-month. No long-term contracts.",
            "Class reservations open 7 days in advance. 12-person cap.",
            "Student/first responder discount: 10% (in-gym verification).",
          ]}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/v1771578052/site-images/fitness/13106575.jpg"
        />
      </div>

      <div className="animate-fade-in-up py-20 md:py-28">
        <TransformationGallery
          headline="Real members. Real progress."
          subheadline="We focus on strength, consistency, and coaching. The results follow—better lifts, better energy, and better confidence."
          primaryCta={{
            label: "See How We Coach",
            href: "/about",
            className: "bg-orange-600 hover:bg-orange-700",
          }}
          secondaryCta={{ label: "Start Your Trial", href: "/contact?intent=trial-class" }}
          gallery={[
            { name: "Sam P.", timeframe: "12 weeks", result: "+55 lb deadlift • -2\" waist", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771578053/site-images/fitness/13018401.jpg" },
            { name: "Elena R.", timeframe: "16 weeks", result: "First strict pull-up • +30 lb squat", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771578084/site-images/fitness/13106579.jpg" },
            { name: "Marcus T.", timeframe: "10 weeks", result: "5K pace improved by 1:10/mi • Stronger lifts", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771578051/site-images/fitness/12250460.jpg" },
            { name: "Nina K.", timeframe: "14 weeks", result: "+20 lb bench • Confident barbell form", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771578070/site-images/fitness/10942666.jpg" },
          ]}
          disclaimer="Results vary by individual effort, consistency, sleep, and nutrition. We coach the process and track the progress."
        />
      </div>

      <div className="animate-fade-in-up bg-muted py-20 md:py-28">
        <StatsCounter
          headline="A strength gym built on measurable progress."
          subheadline="We track attendance, lifts, and training blocks so you can see momentum—not just feel sore."
          primaryCta={{
            label: "Get Your Baseline Assessment",
            href: "/contact?intent=assessment",
            className: "bg-orange-600 hover:bg-orange-700",
          }}
          secondaryCta={{ label: "Explore Programs", href: "/services" }}
          stats={[
            { value: "12", label: "Max class size" },
            { value: "3", label: "Training tracks" },
            { value: "60", label: "Minutes to onboard" },
            { value: "4", label: "Week cycles" },
          ]}
        />
      </div>

      <div className="animate-fade-in-up py-20 md:py-28">
        <CTASparkles
          title="Try Iron & Oak—free intro session included."
          subtitle="Meet a coach, get a movement screen, and leave with a clear plan for your next 12 weeks. No pressure—just clarity."
          primaryCta={{
            label: "Claim Free Intro",
            href: "/contact?intent=free-intro",
            className: "bg-orange-600 hover:bg-orange-700",
          }}
          secondaryCta={{ label: "Call (512) 555-0199", href: "tel:+15125550199" }}
          whatYouGet={[
            "Goal + training history review",
            "Movement screen (squat, hinge, press)",
            "Recommended class track + weekly schedule",
            "Next steps for strength and conditioning",
          ]}
          availability="New member intros available Tue–Thu 11:00am–1:00pm and Mon–Wed 6:30pm–7:30pm."
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/v1771578067/site-images/fitness/10039536.jpg"
        />
      </div>

      <div className="animate-fade-in-up bg-muted py-20 md:py-32">
        <TestimonialsAnimated
          title="Members who train here don’t just sweat—they progress."
          subtitle="High standards, supportive coaching, and a community that shows up."
          primaryCta={{
            label: "Join the Community",
            href: "/contact?intent=membership",
            className: "bg-orange-600 hover:bg-orange-700",
          }}
          secondaryCta={{ label: "Visit Us", href: "/contact#location" }}
          testimonials={[
            { quote: "I’ve done gyms where you’re basically on your own. Here, coaches actually watch your reps and adjust your plan.", name: "Danielle W.", designation: "Member • 9 months", src: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771578092/site-images/fitness/13106624.jpg" },
            { quote: "The programming is simple and effective. I show up, follow the plan, and the coaches keep me honest on form.", name: "Chris L.", designation: "Member • 5 months", src: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771578053/site-images/fitness/11075080.jpg" },
            { quote: "Small classes make a huge difference. It feels premium with coaching that makes you better every week.", name: "Alyssa M.", designation: "Member • 1 year", src: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771578078/site-images/fitness/10475451.jpg" },
          ]}
          ratingSummary={{ rating: "4.9/5", source: "Google Reviews", count: 186 }}
        />
      </div>
    </main>
  );
}
