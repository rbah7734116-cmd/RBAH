'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function ProductShowcaseSection() {
    const images = [
        'https://ecomplaybook.co/cdn/shop/files/12.png?v=1740240336',
        'https://ecomplaybook.co/cdn/shop/files/13.png?v=1740240336',
        'https://ecomplaybook.co/cdn/shop/files/14.png?v=1740240336',
        'https://ecomplaybook.co/cdn/shop/files/15_1.png?v=1740240336',
    ];

    const [activeImage, setActiveImage] = useState(images[0]);

    return (
        <section className="px-4 py-10 max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Main Image + Thumbnails */}
                <div>
                    <div className="mb-4">
                        <Image
                            src={activeImage}
                            alt="Main product image"
                            width={600}
                            height={600}
                            className="rounded-lg w-full object-cover"
                        />
                    </div>
                    <div className="overflow-x-auto">
                        <div className="flex gap-3 w-max">
                            {images.map((img, idx) => (
                                <Image
                                    key={idx}
                                    src={img}
                                    alt={`Thumbnail ${idx + 1}`}
                                    width={100}
                                    height={100}
                                    onClick={() => setActiveImage(img)}
                                    className={`cursor-pointer rounded-md border-2 ${img === activeImage ? 'border-[#287eb3]' : 'border-transparent'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product Info */}
                <div className="space-y-4 text-white">
                    <h2 className="text-3xl font-extrabold text-white">The Ultimate Shopify Theme</h2>
                    <div className="flex gap-2 text-xs">
                        <span className="bg-[#eaf5fb] text-[#174059] font-bold px-3 py-1 rounded">✔ Instant Access</span>
                        <span className="bg-[#deffe1] text-[#153d18] font-bold px-3 py-1 rounded">✔ Lifetime Licence</span>
                    </div>
                    <p className="text-sm text-white">
                        rated <strong className="text-white">4.5/5</strong> based on <strong className="text-white">+650 website owners</strong>
                    </p>

                    <div className="text-2xl font-bold text-[#287eb3]">£124.99 GBP</div>
                    <div className="line-through text-sm text-gray-400">£358.99 GBP</div>
                    <div className="bg-[#174059] text-white px-3 py-1 rounded-full text-xs font-bold inline-block">£234.00 Off</div>

                    <div className="mt-6 space-y-2">
                        <div className="bg-[#eaf5fb] text-[#174059] px-3 py-2 rounded-md text-sm font-semibold">UNLIMITED uses, UNLIMITED websites!</div>
                        <div className="bg-[#eaf5fb] text-[#174059] px-3 py-2 rounded-md text-sm font-semibold">Customizable, fast, and mobile-friendly</div>
                        <div className="bg-[#eaf5fb] text-[#174059] px-3 py-2 rounded-md text-sm font-semibold">Increases your Conversion rate and Sales!</div>
                    </div>



                    <button className="bg-[#174059] text-white w-full py-2 rounded-md font-bold hover:opacity-90 transition">Buy Now</button>

                </div>
            </div>
        </section>
    );
}
