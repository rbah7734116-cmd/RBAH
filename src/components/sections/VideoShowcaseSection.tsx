const services = [
    {
        video: '/video/A1.mov',
        description:
            'This layout showcases a modern, mobile-first design with bold imagery, smooth transitions, and an intuitive structure optimized for conversions',
        label: 'Web Store Development',
    },
    {
        video: '/video/A2.mov',
        description:
            'Interactive video showcase with dynamic fullscreen preview, inline product info, and a smooth mobile-first layout tailored for user engagement.',
        label: 'Website Design',
    },
    {
        video: '/video/A3.mov',
        description:
            'Clean tab-based video UI that lets users preview treatments by body area. Fast switching, mobile-ready, and built for clarity and seamless UX.',
        label: 'Brand Identity',
    },
    {
        video: '/video/A4.mov',
        description:
            'Interactive 4-column layout with synchronized video and text content. Tab clicks animate both video swap and context text update. Fully responsive and modular.',
        label: 'Visionary Innovation',
    },
    {
        video: '/video/A5.mov',
        description:
            'RobuResponsive comparison section featuring a draggable before/after slider with supporting feature icons and text, optimized for desktop and mobile display.',
        label: 'Backend Development',
    },
    {
        video: '/video/A6.mov',
        description:
            'Interactive video carousel with sleek cards, smooth drag-to-scroll, fullscreen viewing, and a responsive layout crafted for mobile engagement.',
        label: 'Web Security',
    },
];

const VideoShowcaseSection = () => {
    return (
        <>
            {/* ✅ عنوان القسم والتزيين فوق البطاقات */}
            <div className="text-center py-6 space-y-2">
                <h3 className="text-white text-xl font-semibold tracking-wide uppercase">
                    — Explore Our Full Creative Capabilities —
                </h3>
                <div className="flex justify-center">
                    <div className="w-32 h-1 bg-[#FFDF20] rounded-full"></div>
                </div>
            </div>

            {/* ✅ قسم الفيديوهات */}
            <section className="pt-0 pb-16 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="border border-[#FFDF20] p-4 rounded-xl flex flex-col items-center text-center text-white"
                        >
                            <video
                                src={service.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="rounded-lg w-full h-74 object-cover mb-4"
                            />
                            <p className="text-sm mb-4 leading-relaxed">{service.description}</p>
                            <button className="border border-[#FFDF20] text-[#FFDF20] px-4 py-2 rounded-full hover:bg-[#FFDF20] hover:text-black transition">
                                {service.label}
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default VideoShowcaseSection;
