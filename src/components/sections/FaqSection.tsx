'use client';
import { useState } from 'react';

const faqs = [
    {
        question: "What’s included with my purchase?",
        answer: `- Theme file for uploading to your Shopify store
- Theme installation guide
- Live chat support for any Shopify-related inquiries
- Assistance with store setup at no extra cost (If needed)`
    },
    {
        question: "Is this purchase a one-time fee?",
        answer: `Yes, you only need to purchase it once and use it forever. There are no monthly or hidden charges.`
    },
    {
        question: "Guarentee?",
        answer: `Shop with Confidence Knowing that Our Products are Guaranteed to Meet Your Expectations.`
    }
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-gradient-to-b from-[#f4f8ff] to-[#eaf5fb] py-16 px-6 text-[#174059]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <p className="uppercase tracking-widest text-sm text-[#287eb3]">FAQs</p>
                    <h2 className="text-4xl font-bold">Questions & Answers</h2>
                </div>

                <div className="grid gap-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md">
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-lg focus:outline-none"
                            >
                                {faq.question}
                                <span>{openIndex === index ? '-' : '+'}</span>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-4 text-sm whitespace-pre-line text-gray-700">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
