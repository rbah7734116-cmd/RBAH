import Image from 'next/image';

const features = [
    {
        icon: (
            <svg className="w-10 h-10 text-[#ff9933]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 4h18v12H3z" />
                <path d="M8 20h8" />
                <path d="M12 16v4" />
                <polyline points="17 2 21 6 17 10" />
            </svg>
        ),
        title: 'Design',
    },
    {
        icon: (
            <svg className="w-10 h-10 text-[#ff9933]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        title: 'Clean',
    },
    {
        icon: (
            <svg className="w-10 h-10 text-[#ff9933]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="1 4 1 10 7 10" />
                <polyline points="23 20 23 14 17 14" />
                <path d="M20.49 9A9 9 0 1 0 21 12.3" />
            </svg>
        ),
        title: 'Updates',
    },
    {
        icon: (
            <svg className="w-10 h-10 text-[#ff9933]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15 10 22 10 17 14 19 22 12 18 5 22 7 14 2 10 9 10 12 2" />
            </svg>
        ),
        title: 'Rated',
    },
];

const FeatureIconsSection = () => {
    return (
        <section className="pt-0 pb-0 bg-[#FFEFD5]">
            <div className="max-w-6xl mx-auto mt-0 grid grid-cols-1 md:grid-cols-2 bg-[#FFEFD5] rounded-xl overflow-hidden">

                {/* ✅ الصورة */}
                <div className="w-full">
                    <Image
                        src="/1/b14.png"
                        alt="Product Image"
                        width={1920}
                        height={800}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* ✅ النصوص */}
                <div className="w-full p-6 flex flex-col justify-center">
                    <p className="text-center text-[#333] text-sm md:text-base font-semibold mb-4">
                        58 Premium Shopify Snippets — Built for Speed, Design & Conversions
                    </p>

                    <div className="flex flex-wrap justify-between items-center gap-y-4 w-full mb-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center w-1/4 min-w-[80px]"
                            >
                                <div className="w-10 h-10 mb-2 flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <p className="text-[#ff9933] text-sm font-semibold leading-tight break-words whitespace-normal min-h-[1.1rem]">
                                    {feature.title}
                                </p>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold text-[#1a1a1a]">Shopify Ultimate Liquid Codebook</h2>
                    <div className="flex gap-4 items-center mt-2">
                        <p className="line-through text-gray-400 text-sm">£259.99 GBP</p>
                        <p className="text-xl text-[#ff9933] font-semibold">£27 GBP</p>
                        <span className="bg-[#e6f7ff] text-blue-600 px-2 py-1 rounded text-xs font-medium">£232.99 Off</span>
                    </div>


                    <ul className="text-sm text-gray-700 space-y-2 mt-4">
                        <li>✅ 60+ Liquid Code Snippets for Your Store</li>
                        <li>✅ Customizable, fast, and mobile-friendly</li>
                        <li>✅ Increases your Conversion rate and Sales!</li>
                    </ul>

                    <button className="mt-6 w-full bg-[#1a1a1a] hover:bg-black text-white py-3 rounded-lg font-bold text-lg transition">
                        Buy Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeatureIconsSection;
