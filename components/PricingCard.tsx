import { Icon } from "@/components/ui/icon";

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  billed: string;
  features: string[];
  popular?: boolean;
}

export default function PricingCard({
  title,
  subtitle,
  price,
  billed,
  features,
  popular = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative bg-white rounded-2xl py-14 px-8 w-[380px] shadow-lg transition ${
        popular ? "border-2 border-indigo-500 scale-105" : ""
      }`}
    >
      {popular && (
      <span className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 rounded-bl-xl rounded-tr-2xl text-xs flex items-center gap-1">
        <Icon name="Sparkles" className="w-4 h-4 text-white" />
        Most Popular
      </span>
      )}


      <h3 className="text-md">{title}</h3>
      <p className="text-gray-500 mt-1 text-sm">{subtitle}</p>

      <h2 className="text-4xl mt-6">
        ${price}
        <span className="text-sm text-gray-500">/month</span>
      </h2>

      <p className="text-indigo-600 text-xs mt-1">{billed}</p>

      <button
        className={`w-full mt-6 py-3 rounded-xl font-medium ${
          popular
            ? "bg-indigo-600 text-white"
            : "bg-indigo-100 text-indigo-700"
        }`}
      >
        Get Started
      </button>

      <p className="text-sm text-gray-500 mt-8">Everything included:</p>

      <ul className="mt-3 space-y-5 text-sm text-gray-700">
        {features.map((feature, index) => (
        
        <li key={index} className="flex items-center gap-3">
        <span className="flex items-center justify-center w-5 h-5 rounded-full">
          <Icon
            name="Check"
            className="w-5 h-5 text-indigo-600"
            strokeWidth={3}
          />
        </span>
        {feature}
        </li>
        ))}
      </ul>
    </div>
  );
}
