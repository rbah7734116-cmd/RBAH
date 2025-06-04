const services = [
    {
        video: '/video/1.mp4',
        description:
            'We offer leading Shopify store development solutions, designed to meet market demands and provide a seamless shopping experience. We rely on the latest technologies to ensure your store is fast, secure, and ready for future growth.',
        label: 'Web Store Development',
    },
    {
        video: '/video/2.mp4',
        description:
            'Outstanding website designs for Shopify stores that add visual appeal and easy navigation. We craft a complete user experience that keeps visitors engaged and converts them into loyal customers.',
        label: 'Website Design',
    },
    {
        video: '/video/3.mp4',
        description:
            'Creating an exceptional visual identity that distinguishes your store and attracts attention — with logos and designs that reflect your brand’s professionalism and increase its recognition.',
        label: 'Brand Identity',
    },
    {
        video: '/video/4.mp4',
        description:
            'We stay ahead of e-commerce trends and innovate with modern store designs, integrating the best conversion and engagement strategies to ensure higher sales and customer satisfaction.',
        label: 'Visionary Innovation',
    },
    {
        video: '/video/5.mp4',
        description:
            'Building a robust and advanced infrastructure for your Shopify store with seamless integration of analytics and data apps, providing high-performance for an enhanced overall experience.',
        label: 'Backend Development',
    },
    {
        video: '/video/6.mp4',
        description:
            'Securing your online store using the latest protection technologies, including SSL protocols and data encryption, ensuring round-the-clock safety for your data and your customers’ information.',
        label: 'Web Security',
    },
];


const ServicesSection = () => {
    return (
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
                            className="rounded-lg w-full h-48 object-cover mb-4"
                        />
                        <p className="text-sm mb-4 leading-relaxed">{service.description}</p>
                        <button className="border border-[#FFDF20] text-[#FFDF20] px-4 py-2 rounded-full hover:bg-[#FFDF20] hover:text-black transition">
                            {service.label}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
