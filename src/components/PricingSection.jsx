import { Check } from "lucide-react";
import FreeTrialPopup from "./Modal";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for new explorers",
    features: ["5 guided meditations", "2 sleep stories", "Parent starter kit"],
    buttonText: "Get Started",
  },
  {
    name: "Premium",
    price: "₹299/mo",
    description: "Unlock full potential",
    features: [
      "Unlimited meditations",
      "Sleep stories & calming music",
      "Printable guides for parents",
    ],
    buttonText: "Upgrade Now",
  },
  {
    name: "Family",
    price: "₹499/mo",
    description: "For multiple kids",
    features: [
      "4 child profiles",
      "Rewards & streaks",
      "Classroom meditation pack",
    ],
    buttonText: "Get Family Plan",
  },
];

const PricingSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full py-20">
      <div className="text-center mx-5 bg-[#F9F8FD] py-20 rounded-2xl px-5">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Choose Your Plan
        </h2>
        <p className="text-gray-600 mt-2">
          Start free, cancel anytime. No hidden charges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {plan.name}
              </h3>
              <p className="text-gray-500 mb-4">{plan.description}</p>
              <p className="text-2xl font-bold text-purple-600 mb-6">
                {plan.price}
              </p>

              <ul className="space-y-3 text-gray-700 text-sm mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check size={18} className="text-green-600" /> {feature}
                  </li>
                ))}
              </ul>

              <button
                className="px-5 py-2 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
                onClick={() => setIsOpen(true)}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      <FreeTrialPopup isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

export default PricingSection;
