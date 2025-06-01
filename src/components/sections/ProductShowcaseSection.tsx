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

    const scrollToOffer = () => {
        const el = document.getElementById('purchase');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="px-4 py-10 max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-10 items-start">
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

                    <div className="overflow-x-auto flex justify-center mb-6">
                        <div className="flex gap-3 w-max">
                            {images.map((img, idx) => (
                                <Image
                                    key={idx}
                                    src={img}
                                    alt={`Thumbnail ${idx + 1}`}
                                    width={100}
                                    height={100}
                                    onClick={() => setActiveImage(img)}
                                    className={`cursor-pointer rounded-md border-2 ${img === activeImage ? 'border-[#287eb3]' : 'border-transparent'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Scroll Button */}
                    <div className="flex justify-center">
                        <button
                            onClick={scrollToOffer}
                            className="bg-red-600 hover:bg-red-700 transition text-white text-lg font-semibold py-3 px-6 rounded-lg"
                        >
                            Get the Offer
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
