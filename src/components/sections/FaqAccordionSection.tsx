'use client';
import { useState } from 'react';

const faqData = [
    {
        question: 'What are Shopify liquid codes, and how do they work?',
        answer: `Shopify liquid codes are snippets of customisable code designed to enhance your Shopify store’s functionality. With our pre-built codes, you can easily add features like custom product filters, dynamic pricing displays, or unique design elements—all without advanced coding knowledge. Simply, add a custom liquid copy, paste, and implement the code into your Shopify theme to elevate your store's experience.`,
    },
    {
        question: 'Do I need coding experience to use your codes?',
        answer: `Not at all! Our Shopify liquid codes are designed for all skill levels. Each purchase includes step-by-step instructions, so even beginners can implement them with ease. Plus, our support team is here to guide you if you need assistance.`,
    },
    {
        question: 'Are your codes compatible with all Shopify themes?',
        answer: `Yes! Our Shopify liquid codes are tested across a wide range of themes to ensure compatibility. Whether you’re using a free or premium Shopify theme, our codes are tailored to integrate seamlessly.`,
    },
    {
        question: 'What happens if I face issues implementing the codes?',
        answer: `We’ve got you covered! If you encounter any problems, our dedicated support team is just a message away. We’ll help troubleshoot the issue or guide you through the implementation process to ensure your store runs smoothly. Send us a message on Instagram @ecomplaybook.co`,
    },
];

const FaqAccordionSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleIndex = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-10 px-4">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-center text-[#174059] font-semibold text-2xl mb-8">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-2">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`border-b border-gray-300 pb-2 ${openIndex === index ? 'active' : ''}`}
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer text-sm font-bold py-3 text-[#174059]"

                                onClick={() => toggleIndex(index)}
                            >
                                {item.question}
                                <span className="text-xl transform transition-transform duration-300">
                                    {openIndex === index ? '-' : '+'}
                                </span>
                            </div>

                            <div
                                className={`text-xs text-gray-700 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[500px] pt-2' : 'max-h-0'
                                    }`}
                            >
                                <p className="leading-relaxed">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqAccordionSection;
