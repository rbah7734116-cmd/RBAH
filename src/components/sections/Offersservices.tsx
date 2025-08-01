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
                "Product page optimization for better conversions",
                "One custom promotional video (15–30s) for your main product",
                "Competitor analysis report with ad examples and insights",
                "One high-converting landing page for your main product",
                "Pixel integration (Meta, Google, TikTok)"
            ]
        },
        {
            title: "Advanced Plan",
            price: "$1000",
            description: "A complete solution for serious store owners",
            href: "/reservation",
            features: [
                "All features from previous plans",
                "Complete ad campaign setup (targeting, creatives, and launch)",
                "Custom-designed landing pages for products or email capture",
                "Automated email marketing setup (Klaviyo/Mailchimp)",
                "Live 1-on-1 strategy session (Zoom call)",
                "Detailed monthly performance report and growth plan",
                "Professional product upload (up to 10 products)",
                "Conversion-optimized buying journey",
                "Dedicated support and personal follow-up"
            ]
        }
    ];

    return (
        <div className="bg-transparent py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-white text-4xl font-bold mb-4">Pricing Plans</h2>
                <p className="text-white/70 mb-12">Choose the best plan for your store and start optimizing today</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`rounded-xl shadow-lg p-8 border transition-all duration-300 bg-white text-left ${plan.highlight ? "border-yellow-400 scale-105" : "border-gray-200"}`}
                            dir="ltr"
                        >
                            <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#003b4e] whitespace-nowrap text-center">
                                {plan.title}
                            </h3>

                            <p className="text-gray-600 mb-4 text-sm text-center">{plan.description}</p>
                            <div className="text-3xl font-bold text-[#003b4e] mb-6 text-center">{plan.price}</div>
                            <ul className="text-gray-700 space-y-2 mb-6 text-sm">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-green-600">✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link href={plan.href} passHref>
                                <button className="w-full bg-[#003b4e] text-white py-2 rounded-md hover:bg-[#005f75] transition">
                                    GET STARTED
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Text Below Pricing Cards */}
                <div className="mt-12 text-sm text-white/90 max-w-3xl mx-auto leading-relaxed text-center">
                    <p>
                        All our service packages are carefully designed to deliver clear value to your business.
                        By selecting a plan, you are purchasing a digital service with defined features and delivery timelines.
                    </p>
                    <p className="mt-4">
                        Please make sure to review our <a href="https://gtglow.com/refund/" target="_blank" className="text-yellow-400 underline">Refund Policy</a> before making a payment.
                    </p>
                    <p className="mt-4">
                        If you have any questions, feel free to <a href="https://api.whatsapp.com/send/?phone=905525909960&text&type=phone_number&app_absent=0" target="_blank" className="text-yellow-400 underline">contact us via WhatsApp</a> before proceeding.
                    </p>
                </div>
            </div>
        </div>
    );
}
