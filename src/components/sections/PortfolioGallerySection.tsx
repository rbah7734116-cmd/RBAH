'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function ShopifyStyleProductSection() {
    const media = [
        '/1/57.mp4',
        '/1/56.mp4',
        '/1/1.webp',
        '/1/2.webp',
        '/1/5.webp',
        '/1/6.webp',
        '/1/7.webp',
        '/1/8.webp',
        '/1/12.webp',
        '/1/13.webp',
        '/1/22.webp',
        '/1/23.webp',
    ];

    const [activeMedia, setActiveMedia] = useState(media[0]);

    const scrollToOffer = () => {
        const el = document.getElementById('purchase');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="bg-[#DFFFFF] w-full py-12">
            <div className="px-4 mx-auto max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-[663px_1fr] gap-10 items-start">

                    {/* Gallery */}
                    <div>
                        <div className="mb-4 w-full h-[414px] max-w-[414px] mx-auto aspect-square lg:h-[663px] lg:max-w-[663px]">
                            {activeMedia.endsWith('.mp4') ? (
                                <video src={activeMedia} autoPlay muted loop playsInline className="rounded-lg w-full h-full object-cover" />
                            ) : (
                                <Image src={activeMedia} alt="Main product" width={600} height={600} className="rounded-lg w-full h-full object-cover" />
                            )}
                        </div>
                        <div className="overflow-x-auto">
                            <div className="flex gap-3 w-max">
                                {media.map((item, idx) => (
                                    <div key={idx} className="min-w-[100px] cursor-pointer" onClick={() => setActiveMedia(item)}>
                                        {item.endsWith('.mp4') ? (
                                            <video src={item} muted loop playsInline className={`rounded-md w-[100px] h-[100px] object-cover ${item === activeMedia ? 'ring-2 ring-cyan-400' : ''}`} />
                                        ) : (
                                            <Image src={item} alt={`Thumbnail ${idx + 1}`} width={100} height={100} className={`rounded-md border object-cover w-[100px] h-[100px] ${item === activeMedia ? 'ring-2 ring-cyan-400' : 'border-gray-300'}`} />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Info + Buttons */}
                    <div className="text-black bg-white p-6 rounded-xl shadow-md border" style={{ borderColor: '#DFFFFF' }}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex -space-x-2">
                                <img src="//roarecipe.store/cdn/shop/files/images_1_100x.jpg" alt="Customer 1" className="w-8 h-8 rounded-full border-2 border-white" />
                                <img src="//roarecipe.store/cdn/shop/files/images_2_100x.jpg" alt="Customer 2" className="w-8 h-8 rounded-full border-2 border-white" />
                                <img src="//roarecipe.store/cdn/shop/files/images_100x.jpg" alt="Customer 3" className="w-8 h-8 rounded-full border-2 border-white" />
                                <img src="//roarecipe.store/cdn/shop/files/images_3_100x.jpg" alt="Customer 4" className="w-8 h-8 rounded-full border-2 border-white" />
                                <img src="//roarecipe.store/cdn/shop/files/images_4_100x.jpg" alt="Customer 5" className="w-8 h-8 rounded-full border-2 border-white" />
                            </div>

                            <p className="text-sm font-semibold">★★★★★ Excellent 4.8</p>
                        </div>

                        <h2 className="text-2xl font-bold mb-4">ROA SHOPIFY THEME 2.0</h2>

                        <p className="text-sm font-semibold text-[#05445E] mb-4">💠 Flash Sale! $35 Offer Ends Midnight!</p>

                        <ul className="list-none text-sm space-y-2 mb-6">
                            <li>✅ Lifetime license | one-time purchase</li>
                            <li>🚫 No monthly charges or hidden fees</li>
                            <li>🛠️ Optimized for dropshipping</li>
                            <li>📈 30+ conversion features</li>
                        </ul>

                        {/* Updated Buttons */}
                        <div className="space-y-3">
                            <button onClick={scrollToOffer} className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold w-full py-2 rounded transition">
                                BUY NOW
                            </button>

                        </div>

                        <div className="pt-4 text-center">
                            <p className="text-xs text-gray-500 underline cursor-pointer">More payment options</p>
                            <div className="mt-2">
                                <img src="/1/f1.jpg" alt="Payment methods" style={{ height: '70px', width: '450px', display: 'block', margin: '0 auto' }} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
