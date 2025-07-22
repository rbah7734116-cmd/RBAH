'use client'; // ⬅️ مهم جدًا، لازم يكون أول سطر

import Image from 'next/image';
import { useRouter } from 'next/navigation'; // ⬅️ الآن ممكن تضيفه بدون مشاكل
import { useEffect, useState } from 'react';

const features = [/* ... */];

const FeatureIconsSection = () => {
    const [timeLeft, setTimeLeft] = useState('');
    const router = useRouter(); // ⬅️ تستخدمه عادي

    useEffect(() => {
        const offerDeadline = new Date().getTime() + 48 * 60 * 60 * 1000;

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = offerDeadline - now;

            if (distance <= 0) {
                setTimeLeft('Expired');
                return;
            }

            const hours = Math.floor((distance / (1000 * 60 * 60)) % 48);
            const minutes = Math.floor((distance / (1000 * 60)) % 60);
            const seconds = Math.floor((distance / 1000) % 60);

            setTimeLeft(`${hours}h : ${minutes}m : ${seconds}s`);
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="pt-0 pb-0 bg-[#FFEFD5]">
            <div className="max-w-6xl mx-auto mt-0 grid grid-cols-1 md:grid-cols-2 bg-[#FFEFD5] rounded-xl overflow-hidden">
                <div className="w-full">
                    <Image
                        src="/1/b14.png"
                        alt="Product Image"
                        width={1920}
                        height={800}
                        className="w-full h-auto object-cover"
                    />
                </div>

                <div className="w-full p-6 flex flex-col justify-center">
                    <p className="text-[13px] text-gray-800 font-medium leading-snug mb-2">
                        58 Premium Shopify Snippets — Built for Speed, Design & Conversions
                    </p>

                    <div className="flex flex-wrap justify-between items-center gap-y-4 w-full mb-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center text-center w-1/4 min-w-[80px]">
                                <div className="w-10 h-10 mb-2 flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <p className="text-[#ff9933] text-sm font-semibold leading-tight break-words whitespace-normal min-h-[1.1rem]">
                                    {feature.title}
                                </p>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold text-[#1a1a1a]">SHOPIFY ULTIMATE LIQUID CODEBOOK</h2>

                    <div className="flex gap-4 items-center mt-2">
                        <p className="line-through text-gray-400 text-sm">£259.99 GBP</p>
                        <p className="text-xl text-[#ff9933] font-semibold">£27 GBP</p>
                        <span className="bg-[#e6f7ff] text-blue-600 px-2 py-1 rounded text-xs font-medium">£232.99 Off</span>
                    </div>

                    <p className="text-sm text-[#111] mt-2 font-medium">
                        Lifetime access with a single payment — no subscriptions, no surprises.
                    </p>

                    <ul className="text-sm text-gray-700 space-y-2 mt-4">
                        <li>✅ 60+ Liquid Code Snippets for Your Store</li>
                        <li>✅ Customizable, fast, and mobile-friendly</li>
                        <li>✅ Increases your Conversion rate and Sales!</li>
                    </ul>

                    <button
                        onClick={() => window.open('https://pay.paddle.io/hsc_01k0rsv33pkzqx92ae46zqc5ch_vb77jm8yak205zy42k7sm7x732p4dj43', '_blank')}
                        className="mt-6 w-full bg-[#1a1a1a] hover:bg-black text-white py-3 rounded-lg font-bold text-lg transition-transform duration-200 hover:scale-105"
                    >
                        Buy Now →
                    </button>

                    <p className="text-xs text-gray-500 mt-2 text-center">
                        🔐 100% Safe & Secure Checkout — Instant Access
                    </p>

                    <p className="text-xs text-red-500 mt-1 text-center font-semibold">
                        ⚡ Offer ends in {timeLeft}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FeatureIconsSection;
