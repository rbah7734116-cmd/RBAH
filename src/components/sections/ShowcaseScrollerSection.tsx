import React from "react";

const ShowcaseScrollerSection: React.FC = () => {
    return (
        <section className="w-full bg-white py-8">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center">

                {/* الصورة العلوية GIF */}
                <div className="w-full flex justify-center mb-6">
                    <img
                        src="/images/682e34adb1fbb_online-pay.gif"
                        alt="Online Pay GIF"
                        className="w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] h-auto object-contain"
                    />
                </div>

                {/* الصورة السفلية PNG */}
                <div className="w-full flex justify-center mt-6">
                    <img
                        src="/images/6820c9e052408_1ff298403aa6628efe627d6c858b1e95_1200_80.png"
                        alt="Bottom PNG"
                        className="w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] h-auto object-contain"
                    />
                </div>

            </div>
        </section>
    );
};

export default ShowcaseScrollerSection;
