'use client';
import Image from 'next/image';

const content = [
    {
        image: '/1/b1.webp',
        title: 'Simple Yet Sophisticated',
        text: "Less is more in our theme's design, offering a minimalist yet powerful setup for your online store.",
    },
    {
        image: '/1/b2.webp',
        title: 'Mobile Shopping Experience',
        text: 'Indulge in superior mobile shopping experience design with our exquisite collection.',
    },
    {
        image: '/1/b3.webp',
        title: 'Unlock Your Store’s Potential',
        text: 'Enhance your customers’ shopping experience with intuitive drawer functionality and powerful conversion tools.',
    },
    {
        image: '/1/b4.webp',
        title: 'Superb Selections Await You',
        text: 'Discover unparalleled quality and style in our superb collection.',
    },
    {
        image: '/1/b5.webp',
        title: 'Boost your sales',
        text: 'ROA 2.0 theme includes powerful upsell options which will sky-rocket your sales in no time.',
    },
    {
        image: '/1/b6.webp',
        title: 'Dynamic product pages',
        text: 'Improve shopping experience with Mega Menu for easy navigation.',
    },
    {
        image: '/1/b7.webp',
        title: 'New Mega Menu',
        text: 'Explore intuitive navigation experiences that drive engagement.',
    },
    {
        image: '/1/b8.webp',
        title: 'Create elegant pages',
        text: 'Combine image effects, typography, and layout to craft your store look.',
    },
    {
        image: '/1/b9.webp',
        title: 'Advanced Email Popups',
        text: 'Grow your audience by urging visitors and customers to join your marketing list.',
    },
    {
        image: '/1/b10.webp',
        title: 'Conversion boosting sections',
        text: 'Save money on apps by using over 40 high-converting built-in blocks.',
    },
];

export default function AlternatingImageTextSection() {
    return (
        <section className="bg-gradient-to-b from-white via-[#f2f2f2] to-white py-16 px-4">
            <div className="max-w-screen-xl mx-auto space-y-16">
                {content.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                            } items-center gap-10`}
                    >
                        <div className="w-full lg:w-1/2">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={800}
                                height={600}
                                className="rounded-xl w-full h-auto object-cover shadow-md"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h2 className="text-3xl font-bold mb-4 text-[#174059]">{item.title}</h2>
                            <p className="text-gray-700 text-base">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
