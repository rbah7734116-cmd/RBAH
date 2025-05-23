import Image from 'next/image';
import React from 'react';

type Props = {
    name: string;
    headline: string;
    text: string;
    note?: string;
    image: {
        src: string;
        alt: string;
    };
};

const ImageTextSection: React.FC<Props> = ({ name, headline, text, note, image }) => {
    return (
        <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-x-2 gap-y-8">

                {/* النص */}
                <div className="md:w-[65%] w-full text-center md:text-right text-white">
                    <h2 className="text-4xl font-bold mb-4">{name}</h2>
                    <p className="text-xl font-semibold mb-4">{headline}</p>
                    <p className="text-lg mb-4 leading-loose">{text}</p>
                    {note && (
                        <p className="text-base italic">{note}</p>
                    )}
                </div>

                {/* الصورة */}
                <div className="md:w-[35%] w-full flex justify-center md:justify-end">
                    <div className="w-85 h-85 relative rounded-full overflow-hidden border-[6px] border-yellow-300 shadow-md">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageTextSection;
