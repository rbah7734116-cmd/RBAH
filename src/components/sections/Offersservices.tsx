"use client";

import Link from "next/link";

export default function PricingCards() {
    const plans = [
        {
            title: "Basic Plan",
            price: "$250",
            description: "Essential improvements for your store",
            href: "/reservation1",
            features: [
                "Full customization of product, cart, and checkout pages",
                "Improved user experience and easier navigation",
                "Store speed optimization and mobile readiness",
                "14-day technical support",
                "Delivery within 5 business days"
            ]
        },
        {
            title: "Professional Plan",
            price: "$500",
            description: "A comprehensive plan to enhance your store and boost sales",
            href: "/reservatio",
            highlight: true,
            features: [
                "All features from the Basic Plan",
                "Market analysis and 4 promising product suggestions",
                "Identify the best product for your audience",
                "Full design customization of all pages",
                "Product page optimization for better conversions"
            ]
        },
        {
            title: "Advanced Plan",
            price: "$1000",
            description: "A complete solution for serious store owners",
            href: "/reservation",
            features: [
                "All features from previous plans",
                "Assistance in launching advertising campaigns",
                "Professional conversion rate optimization",
                "Optimized buying journey for every customer step",
                "Dedicated support and personal follow-up"
            ]
        }
    ];

    return (
        <div className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-white text-4xl font-bold mb-4">Pricing Plans</h2>
                <p className="text-white/70 mb-12">Choose the best plan for your store and start optimizing today</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`rounded-xl shadow-lg p-8 border transition-all duration-300 bg-white ${plan.highlight ? "border-yellow-400 scale-105" : "border-gray-200"
                                }`}
                        >
                            <h3 className="text-xl font-semibold mb-2 text-[#003b4e]">{plan.title}</h3>
                            <p className="text-gray-600 mb-4">{plan.description}</p>
                            <div className="text-3xl font-bold text-[#003b4e] mb-6">{plan.price}</div>
                            <ul className="text-gray-700 space-y-2 mb-6">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-green-600">✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link href={plan.href} passHref>
                                <button className="w-full border border-[#003b4e] text-[#003b4e] py-2 rounded-md hover:bg-[#003b4e] hover:text-white transition">
                                    Book Now
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
