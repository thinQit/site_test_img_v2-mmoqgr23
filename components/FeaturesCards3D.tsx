"use client";
import React from "react";
import { Dumbbell, Flame, HeartPulse, Shield, Timer, Zap, Users, Target, User } from 'lucide-react';
import { CardContainer, CardBody, CardItem } from "@/components/ui/effects/3d-card-effect";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesCards3DProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, React.ElementType> = { Users, Target, User, 
  Dumbbell,
  Flame,
  HeartPulse,
  Shield,
  Timer,
  Zap,
};

export default function FeaturesCards3D({
  badge = "PROGRAMS",
  headline = "TRAINING BUILT FOR RESULTS",
  subheadline = "Pick your pace with expert-led sessions designed to build strength, endurance, and confidence.",
  features = [
    {
      icon: "Dumbbell",
      title: "Strength Forge",
      description: "Progressive weight training classes focused on power, form, and measurable gains.",
    },
    {
      icon: "Flame",
      title: "HIIT Burn",
      description: "Fast-paced interval sessions that torch calories and elevate your conditioning.",
    },
    {
      icon: "HeartPulse",
      title: "Core & Cardio",
      description: "Dynamic circuit workouts to strengthen your core and boost cardiovascular fitness.",
    },
  ],
}: Partial<FeaturesCards3DProps>) {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="text-3xl font-black uppercase tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || Zap;
            return (
              <CardContainer key={index} className="inter-var w-full" containerClassName="w-full">
                <CardBody className="card-hover relative group/card w-full h-auto rounded-xl border border-border bg-card/90 p-6 backdrop-blur shadow-md transition-all">
                  <CardItem translateZ="50" className="mb-4 text-primary">
                    <Icon className="h-8 w-8" />
                  </CardItem>
                  <CardItem translateZ="60" className="text-xl font-bold uppercase text-foreground">
                    {feature.title}
                  </CardItem>
                  <CardItem as="p" translateZ="40" className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
