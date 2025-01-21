import React from "react";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";

const PricingPage = () => {
  const pricingPlans = [
    {
      name: "Simple Shoot",
      // price: 999,
      price: 10,
      description: "Perfect for simple portraits and quick shoots",
      features: [
        "1-hour photo session",
        "15 edited photos",
        "Online gallery",
        "Basic mobile editing",
        "2 best photos printed (4R)",
        "Same-day preview shots",
      ],
      notIncluded: ["Multiple locations", "Advanced editing", "Photo album"],
      isPopular: false,
    },
    {
      name: "Event Coverage",
      // price: 2499,
      price: 20,
      description: "Ideal for birthdays and small gatherings",
      features: [
        "3-hour event coverage",
        "50 edited photos",
        "Online gallery",
        "Mobile editing",
        "5 best photos printed (4R)",
        "Same-day preview shots",
        "Multiple angles",
        "Candid shots",
      ],
      notIncluded: ["Photo album"],
      isPopular: true,
    },
    {
      name: "Half-Day Package",
      // price: 3999,
      price: 30,
      description: "Complete coverage for special events",
      features: [
        "6-hour coverage",
        "100 edited photos",
        "Online gallery",
        "Enhanced mobile editing",
        "10 best photos printed (4R)",
        "Same-day preview shots",
        "Multiple angles",
        "Candid shots",
        "Simple photo album",
      ],
      notIncluded: [],
      isPopular: false,
    },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative py-48 h-64 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Budget-Friendly Photo Packages
            </h1>
            <p className="text-lg text-gray-300">
              Quality smartphone photography at affordable prices
            </p>
            <p className="text-sm text-gray-500 mt-4">
              *Prices and details shown are for sample purposes only. This is a
              portfolio website and not an actual booking platform.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform ${
                plan.isPopular ? "ring-2 ring-orange-400" : ""
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-orange-400 text-white px-4 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold mb-6">
                  ₱{plan.price}
                  <span className="text-lg text-gray-500 font-normal">
                    /package (sample only)
                  </span>
                </div>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check
                        className="text-green-500 flex-shrink-0"
                        size={20}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-gray-400"
                    >
                      <X className="flex-shrink-0" size={20} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/booking"
                  className={`block text-center py-3 rounded-lg transition-colors ${
                    plan.isPopular
                      ? "bg-orange-400 text-white hover:bg-orange-500"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Common Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">
                  What phone do you use for photography?
                </h3>
                <p className="text-gray-600">
                  I use the latest smartphone with advanced camera features. The
                  focus is on composition, lighting, and capturing the right
                  moment rather than expensive equipment.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  How long until I receive my photos?
                </h3>
                <p className="text-gray-600">
                  You'll get preview shots on the same day! Full edited photos
                  will be ready within 3-5 days after the event.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Do you offer installment payments?
                </h3>
                <p className="text-gray-600">
                  Yes! You can pay 50% to book the date and the remaining 50%
                  after receiving your photos.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  What kind of editing do you do?
                </h3>
                <p className="text-gray-600">
                  I use professional mobile editing apps to enhance colors,
                  lighting, and basic touch-ups. The goal is to make your photos
                  look natural and beautiful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
