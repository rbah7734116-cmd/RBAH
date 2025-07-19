"use client";

import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// تعريف أنواع Paddle للـ TypeScript
declare global {
    interface Window {
        Paddle: {
            Setup: (options: { vendor: number }) => void;
            Checkout: {
                open: (options: { product: number; successCallback: () => void }) => void;
            };
        };
        _hsq: any[];
    }
}

export default function CheckoutSection() {
    const [promoCode, setPromoCode] = useState("");
    const router = useRouter();

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.paddle.com/paddle/paddle.js";
        script.async = true;
        script.onload = () => {
            if (window.Paddle) {
                window.Paddle.Setup({ vendor: 236739 }); // Vendor ID الخاص بك
                window._hsq = window._hsq || [];
                window._hsq.push([
                    "identify",
                    {
                        email: "rabahmusayid@gmail.com",
                        id: 229386,
                        firstname: "Rabah",
                        lastname: "Musayid Qasem Albalawi",
                        vendor_user_id: 229386,
                        vendor_id: 236739,
                    },
                ]);
            }
        };
        document.body.appendChild(script);
    }, []);

    const handleCheckout = () => {
        if (window.Paddle) {
            window.Paddle.Checkout.open({
                product: 23772, // رقم المنتج الرقمي من لوحة تحكم Paddle (غير الـ product ID النصي)
                successCallback: () => {
                    router.push("/thank-you"); // صفحة شكر أو تأكيد الدفع
                },
            });
        }
    };

    return (
        <>
            <Head>
                <title>Checkout - Shopify Ultimate Liquid Codebook</title>
                <meta name="description" content="Purchase Shopify snippets package" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="min-h-screen bg-black text-white flex items-center justify-center px-0 py-8">
                <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-6 bg-[#111] rounded-xl p-6 shadow-lg">
                    {/* Left Side */}
                    <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-700 w-full">
                        <div className="text-center mb-6">
                            <img
                                src="/images/889977.png"
                                alt="Product Logo"
                                className="w-90 h-50 mx-auto mb-3"
                            />
                            <h2 className="text-xl font-semibold">Shopify Ultimate Liquid Codebook</h2>
                            <p className="text-sm text-gray-400 mt-1">
                                60+ premium Shopify snippets for speed, design & conversions
                            </p>
                        </div>
                        <div className="text-sm text-gray-400 mb-2">Lifetime access — no subscription</div>
                        <div className="flex items-center gap-2 text-2xl font-bold mb-1">
                            <span className="text-gray-500 line-through text-xl">£259.99</span>
                            <span className="text-green-400">£27</span>
                        </div>
                        <div className="text-sm text-gray-500 mb-6">Limited-time offer</div>

                        {/* Promo Code */}
                        <div className="mt-4">
                            <label className="block text-sm mb-2">Promo code</label>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <input
                                    type="text"
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                                    className="px-3 py-2 rounded-md bg-[#2a2a2a] border border-gray-600 text-white flex-1"
                                    placeholder="Enter your promo code"
                                />
                                <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600">
                                    Apply
                                </button>
                            </div>
                        </div>

                        <div className="border-t border-gray-700 mt-6 pt-4 text-lg font-semibold">
                            Total due today:{" "}
                            <span className="float-right">${promoCode === "FREE100" ? "0.00" : "27.00"}</span>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-700 w-full flex flex-col">
                        <input
                            type="email"
                            disabled
                            placeholder="elon@whop.com"
                            className="mb-4 px-3 py-2 rounded-md bg-[#2a2a2a] border border-gray-600 text-gray-400 w-full"
                        />

                        {/* Payment Options */}
                        <div className="space-y-2 text-sm mb-4">
                            <div className="bg-[#2a2a2a] px-4 py-2 rounded-md border border-gray-600">Card</div>
                            <div className="bg-[#2a2a2a] px-4 py-2 rounded-md border border-gray-600">Cash App Pay</div>
                            <div className="bg-[#2a2a2a] px-4 py-2 rounded-md border border-gray-600">Google Pay</div>
                        </div>

                        {/* Secure Card Payment Notice */}
                        <div className="bg-[#2a2a2a] p-4 rounded-md border border-blue-500 text-sm mb-4">
                            <p className="font-semibold mb-1">Secure Card Payment</p>
                            <p className="text-gray-400 text-xs">
                                After submitting your order, your payment will be processed securely via credit or
                                debit card. Instant access will be provided after purchase.
                            </p>
                        </div>

                        {/* Terms */}
                        <div className="flex items-center gap-2 mb-4 text-sm">
                            <input type="checkbox" className="accent-blue-500" />
                            <label>I agree to all terms and conditions</label>
                        </div>

                        {/* Buy Button */}
                        <button
                            onClick={handleCheckout}
                            className="bg-[#0070ba] hover:bg-[#005c9c] text-white font-semibold py-3 rounded-md w-full"
                        >
                            Buy Now
                        </button>

                        {/* Footer */}
                        <p className="text-center text-xs text-gray-500 mt-4">
                            Secured by <strong>Whop</strong>
                        </p>
                        <p className="text-center text-xs text-gray-500 mt-2">
                            By joining, you agree to Get The Girlies Richer&apos;s and Whop&apos;s terms and
                            conditions and allow them to charge your card.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
