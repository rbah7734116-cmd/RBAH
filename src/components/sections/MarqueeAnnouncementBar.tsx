export default function MarqueeAnnouncementBar() {
    return (
        <div className="relative overflow-hidden bg-gradient-to-r from-white via-cyan-50 to-white py-4 border-y border-cyan-100">
            {/* ضباب الجوانب */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-10" />

            {/* الشريط المتحرك */}
            <div
                className="flex animate-marquee whitespace-nowrap"
                style={{ animationDuration: '20s' }}
            >
                {[...Array(6)].map((_, idx) => (
                    <div
                        key={idx}
                        className="flex items-center px-8"
                        role="region"
                        aria-label="Announcement"
                    >
                        <p className="text-[32px] md:text-[40px] font-extrabold text-neutral-900 m-0 flex gap-3 whitespace-nowrap">
                            <span>Build your</span>
                            <span className="bg-cyan-400 text-white px-4 py-1 rounded-full">amazing</span>
                            <span>store with</span>
                            <span className="text-cyan-500">ROA</span>
                            <span className="text-cyan-700">Theme</span>
                            <span className="text-pink-500">2.0</span>
                        </p>
                    </div>
                ))}
            </div>

            <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee linear infinite;
        }

        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 3s !important;
          }
        }
      `}</style>
        </div>
    );
}
