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
      className={`relative bg-white rounded-2xl p-8 w-[380px] shadow-lg transition ${
        popular ? "border-2 border-indigo-500 scale-105" : ""
      }`}
    >
      {popular && (
        <span className="absolute -top-4 right-6 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
          ✨ Most Popular
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
          <li key={index} className="flex items-center gap-2">
            ✅ {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
