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
        '/1/23.webp'
    ];

    const [activeMedia, setActiveMedia] = useState(media[0]);

    return (
        <section className="px-4 py-10 mx-auto w-full max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-[663px_1fr] gap-10 items-start">
                {/* Media Gallery */}
                <div>
                    <div className="mb-4 w-full h-[414px] max-w-[414px] mx-auto aspect-square lg:h-[663px] lg:max-w-[663px]">
                        {activeMedia.endsWith('.mp4') ? (
                            <video
                                src={activeMedia}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="rounded-lg w-full h-full object-cover"
                            />
                        ) : (
                            <Image
                                src={activeMedia}
                                alt="Main product"
                                width={600}
                                height={600}
                                className="rounded-lg w-full h-full object-cover"
                            />
                        )}
                    </div>
                    <div className="overflow-x-auto">
                        <div className="flex gap-3 w-max">
                            {media.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="min-w-[100px] cursor-pointer"
                                    onClick={() => setActiveMedia(item)}
                                >
                                    {item.endsWith('.mp4') ? (
                                        <video
                                            src={item}
                                            muted
                                            loop
                                            playsInline
                                            className={`rounded-md w-[100px] h-[100px] object-cover ${item === activeMedia ? 'ring-2 ring-cyan-400' : ''
                                                }`}
                                        />
                                    ) : (
                                        <Image
                                            src={item}
                                            alt={`Thumbnail ${idx + 1}`}
                                            width={100}
                                            height={100}
                                            className={`rounded-md border object-cover w-[100px] h-[100px] ${item === activeMedia ? 'ring-2 ring-cyan-400' : 'border-gray-300'
                                                }`}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product Info */}
                <div className="space-y-6 text-white">

                    {/* شريط الصور والتقييم */}
                    <div className="flex items-center gap-3 scale-[0.9] mb-2">




                        {/* صور العملاء */}
                        <div className="flex -space-x-2">
                            <img src="//roarecipe.store/cdn/shop/files/images_1_100x.jpg?v=1736832949" className="w-10 h-10 rounded-full border-2 border-white" alt="" />
                            <img src="//roarecipe.store/cdn/shop/files/images_2_100x.jpg?v=1736832949" className="w-10 h-10 rounded-full border-2 border-white" alt="" />
                            <img src="//roarecipe.store/cdn/shop/files/images_100x.jpg?v=1736832949" className="w-10 h-10 rounded-full border-2 border-white" alt="" />
                            <img src="//roarecipe.store/cdn/shop/files/images_3_100x.jpg?v=1736832949" className="w-10 h-10 rounded-full border-2 border-white" alt="" />
                            <img src="//roarecipe.store/cdn/shop/files/images_4_100x.jpg?v=1736832949" className="w-10 h-10 rounded-full border-2 border-white" alt="" />
                        </div>

                        {/* التقييم */}
                        <p className="text-sm font-semibold text-white">★★★★★ Excellent 4.8</p>
                    </div>

                    {/* عنوان المنتج */}
                    <h2 className="text-3xl font-extrabold">ROA Shopify Theme 2.0</h2>

                    {/* عرض التخفيض */}
                    <p className="text-md font-semibold text-green-400">
                        Flash Sale! $17 Offer Ends Midnight!
                    </p>

                    {/* السعر */}
                    <div className="text-2xl font-bold text-white">
                        $17.00
                        <span className="line-through text-gray-400 text-sm ml-2">$497.00</span>
                    </div>
                    <p className="text-green-400 font-bold">✅ SAVE 96%</p>

                    {/* المميزات */}
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>✅ Lifetime license | one-time purchase</li>
                        <li>🚫 No monthly charges or hidden fees.</li>
                        <li>⚡ Optimized for dropshipping</li>
                        <li>🚀 30+ conversion features</li>
                    </ul>

                    {/* الأزرار */}
                    <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold w-full py-2 rounded">
                        BUY NOW
                    </button>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold w-full py-2 rounded mt-2">
                        Pay with PayPal
                    </button>
                </div>
            </div>
        </section>
    );
}
