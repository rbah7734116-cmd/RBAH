"use client";

import { useEffect, useState } from "react";

export default function CheckoutSection() {
    const [promoCode, setPromoCode] = useState("");

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.paddle.com/paddle/paddle.js";
        script.onload = () => {
            window.Paddle.Setup({ vendor: 123456 }); // ← غيّر Vendor ID هنا
        };
        document.body.appendChild(script);
    }, []);

    const handleCheckout = () => {
        window.Paddle.Checkout.open({
            product: 123456, // ← غيّر Product ID هنا
            successCallback: () => {
                window.location.href = "https://www.notion.so/1f1fc1a064f480d89bdbf4467b15b0aa";
            },
        });
    };

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-6 bg-[#111] rounded-xl p-6 shadow-lg">

                {/* Left Side */}
                <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-700 w-full">
                    {/* صورة المنتج والعنوان */}
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

                    {/* تفاصيل المنتج */}
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
                        Total due today: <span className="float-right">${promoCode === "FREE100" ? "0.00" : "27.00"}</span>
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

                    {/* PayPal Selected */}
                    <div className="bg-[#2a2a2a] p-4 rounded-md border border-blue-500 text-sm mb-4">
                        <p className="font-semibold mb-1">PayPal selected.</p>
                        <p className="text-gray-400 text-xs">
                            After submitting your order, you'll be redirected to PayPal to complete your payment.
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
                        PayPal Buy Now
                    </button>

                    {/* Footer */}
                    <p className="text-center text-xs text-gray-500 mt-4">Secured by <strong>Whop</strong></p>
                    <p className="text-center text-xs text-gray-500 mt-2">
                        By joining, you agree to Get The Girlies Richer's and Whop’s terms and conditions and allow them to charge your card.
                    </p>

                </div>
            </div>
        </div>
    );
}
