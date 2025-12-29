

"use client";

import { useState } from "react";
import PricingCard from "@/components/PricingCard";
import Toggle from "@/components/Toggle";

type BillingType = "monthly" | "quarterly" | "annual";

export default function Home() {
  const [billing, setBilling] = useState<BillingType>("annual");

  const pricing = {
    basic: {
      monthly: 25,
      quarterly: 15,
      annual: 20,
    },
    pro: {
      monthly: 55,
      quarterly: 45,
      annual: 50,
    },
    premium: {
      monthly: 175,
      quarterly: 165,
      annual: 170,
    },
  };

  const getBillingText = (price: number) => {
    if (billing === "annual") return `Billed $${price * 12}/year`;
    if (billing === "quarterly") return `Billed $${price * 3}/quarter`;
    return "Billed monthly";
  };

  return (
    <main className="flex flex-col items-center py-16">
      <Toggle billing={billing} setBilling={setBilling} />

      <div className="flex gap-8 mt-16 flex-wrap justify-center">
        <PricingCard
          title="Basic"
          subtitle="Perfect for individual researchers getting started"
          price={pricing.basic[billing].toString()}
          billed={getBillingText(pricing.basic[billing])}
          features={[
            "Basic AI Writing Assistant",
            "5 PDF uploads per month",
            "1 Active workflow",
            "Citations & references",
            "2GB storage",
            "PDF export",
          ]}
        />

        <PricingCard
          title="Pro"
          subtitle="For serious researchers and small teams"
          price={pricing.pro[billing].toString()}
          billed={getBillingText(pricing.pro[billing])}
          popular
          features={[
            "Advanced AI Suite",
            "50 PDF uploads per month",
            "5 Active workflows",
            "Citations & references",
            "Up to 3 team members",
            "20GB storage",
          ]}
        />

        <PricingCard
          title="Premium"
          subtitle="For institutions and research teams"
          price={pricing.premium[billing].toString()}
          billed={getBillingText(pricing.premium[billing])}
          features={[
            "Full AI Suite + Custom Models",
            "Unlimited PDF uploads",
            "Unlimited workflows",
            "Citations & references",
            "Unlimited team members",
            "200GB storage",
          ]}
        />
      </div>
    </main>
  );
}
