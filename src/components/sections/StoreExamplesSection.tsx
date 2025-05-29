'use client';
import Image from 'next/image';

export default function StoreExamplesSection() {
    const storeImages = [
        '/stores/1a.webp',
        '/stores/2a.webp',
        '/stores/3a.webp',
        '/stores/4a.webp',
        '/stores/5a.webp',
        '/stores/6a.webp',
        '/stores/7a.webp',
        '/stores/8a.webp',
        '/stores/9a.webp',
        '/stores/10a.webp'
    ];

    return (
        <section className="bg-white py-12 relative">
            <div className="max-w-screen-xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                    Examples Stores Using ROA 2.0
                </h2>

                <div className="overflow-x-auto">
                    <div className="flex gap-4 pb-4 w-max">
                        {storeImages.map((src, idx) => (
                            <Image
                                key={idx}
                                src={src}
                                alt={`Store Example ${idx + 1}`}
                                width={300}
                                height={450}
                                className="rounded-xl shadow-md hover:scale-[1.03] transition-transform duration-300"
                            />
                        ))}
                    </div>
                </div>

                {/* Scroll hint for mobile */}
                <div className="scroll-hint md:hidden">
                    ← Scroll
                </div>
            </div>

            <style jsx>{`
        .scroll-hint {
          position: absolute;
          top: 20px;
          right: 16px;
          background: linear-gradient(to right, transparent, #fff 70%);
          padding: 5px 10px;
          font-size: 14px;
          font-weight: bold;
          color: #888;
          border-radius: 30px;
          animation: scrollHintFade 1.5s infinite ease-in-out;
          pointer-events: none;
        }

        @keyframes scrollHintFade {
          0%, 100% { opacity: 0.3; transform: translateX(0); }
          50% { opacity: 1; transform: translateX(-5px); }
        }
      `}</style>
        </section>
    );
}
