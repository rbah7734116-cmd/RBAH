'use client';
import { useEffect, useState } from 'react';

export default function OfferCountdownSection() {
    const [timeLeft, setTimeLeft] = useState('00:00:00');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const end = new Date();
            end.setHours(23, 59, 59, 999);

            const diff = end.getTime() - now.getTime();
            const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
            const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
            const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');

            setTimeLeft(`${hours}:${minutes}:${seconds}`);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="purchase" className="w-full bg-[#EEF6FD] text-white py-12 px-4">
            <div className="max-w-screen-md mx-auto">
                <div className="bg-[#111827] border border-gray-800 rounded-xl p-8 shadow-lg flex flex-col justify-between h-full min-h-[480px]">

                    {/* Countdown Timer */}
                    <div className="bg-black border border-red-600 rounded-lg px-6 py-4 mb-6 text-center">
                        <p className="text-sm text-gray-400 mb-1">This offer expires in:</p>
                        <p className="text-red-500 text-4xl md:text-5xl font-bold font-mono tracking-widest">
                            {timeLeft}
                        </p>
                    </div>

                    {/* Header + Price */}
                    <div className="flex-grow flex flex-col justify-start">
                        <h2 className="text-2xl font-bold mb-4 text-white text-center">
                            GET FULL ACCESS TODAY
                        </h2>

                        <div className="mb-6 text-center">
                            <p className="text-white text-4xl font-extrabold">
                                $35 <span className="text-xl line-through text-gray-500 ml-2">$350</span>
                            </p>
                        </div>

                        {/* Features */}
                        <ul className="text-sm text-gray-300 list-disc list-inside text-left space-y-1">
                            <li>Lifetime access to the product</li>
                            <li>One-time payment — no monthly fees</li>
                            <li>Free installation support</li>
                            <li>Exclusive bonus content included</li>
                        </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-6 text-center">
                        <a
                            href="#purchase"
                            className="bg-red-600 hover:bg-red-700 transition text-white text-lg font-semibold py-3 px-8 rounded-lg block w-full"
                        >
                            Get the Offer Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
