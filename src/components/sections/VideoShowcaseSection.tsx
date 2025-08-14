import "@fontsource/mada/400.css"; // الوزن العادي
import "@fontsource/mada/700.css"; // الوزن العريض
import React from "react";

const ShowcaseScrollerSection: React.FC = () => {
    return (
        <section className="w-full bg-[#cfe8ff] flex flex-col items-center" style={{ fontFamily: "'Mada', sans-serif" }}>
            {/* القسم 1 */}
            <div className="w-full max-w-[1100px] bg-white rounded-lg shadow-md overflow-hidden mb-0 lg:mb-4">
                {/* موبايل */}
                <div className="w-full lg:hidden px-0">
                    <div className="bg-[#e53935] text-white text-center font-bold text-[15px] py-2 leading-snug">
                        الكشف على بوابات دفع بدون الحاجة لفتح شركة
                    </div>
                    <div className="flex justify-center py-4">
                        <img src="/images/1.png" alt="Feature 1" className="w-full max-w-[300px] h-auto object-contain" />
                    </div>
                    <div className="px-2 pb-4 text-right">
                        <p className="text-[#142d63] text-[16px] lg:text-[18px] leading-[1.6] font-medium">
                            في الجزء الأول من الكورس سنكشف لك عن أفضل البدائل الموثوقة لسترايب وبايبال بدون الحاجة لفتح شركة والتي يستخدمها الكثير من رواد الأعمال اليوم مع الطريقة الصحيحة لفتح الحساب وتفعيله. هذا الخيار ممتاز لك إذا كنت تريد بوابة دفع سهلة وبسيطة بدون شركة وهذا يمكن أن يوفر عليك على الأقل 500$ ثمن الشركة لوحدها ناهيك عن باقي المصاريف وكثرة الإثباتات والضرائب!
                        </p>
                    </div>
                </div>

                {/* سطح المكتب */}
                <div className="hidden lg:flex w-full items-center gap-6 p-4">
                    <div className="relative w-1/2 flex justify-center">
                        <img src="/images/1.png" alt="Devices 1" className="w-full max-w-[500px] h-auto object-contain" />
                    </div>
                    <div className="w-1/2 text-right">
                        <div className="bg-[#e53935] text-white font-bold text-lg px-3 py-2 inline-block mb-2">
                            الكشف على بوابات دفع بدون الحاجة لفتح شركة
                        </div>
                        <p className="text-[#142d63] text-[18px] leading-[1.6] font-medium">
                            في الجزء الأول من الكورس سنكشف لك عن أفضل البدائل الموثوقة لسترايب وبايبال بدون الحاجة لفتح شركة والتي يستخدمها الكثير من رواد الأعمال اليوم مع الطريقة الصحيحة لفتح الحساب وتفعيله. هذا الخيار ممتاز لك إذا كنت تريد بوابة دفع سهلة وبسيطة بدون شركة وهذا يمكن أن يوفر عليك على الأقل 500$ ثمن الشركة لوحدها ناهيك عن باقي المصاريف وكثرة الإثباتات والضرائب!
                        </p>
                    </div>
                </div>
            </div>

            {/* القسم 2 */}
            <div className="w-full max-w-[1100px] bg-white rounded-lg shadow-md overflow-hidden mb-0 lg:mb-4">
                <div className="w-full lg:hidden px-0">
                    <div className="bg-[#e53935] text-white text-center font-bold text-[15px] py-2 leading-snug">
                        طريقة رفع منتجاتك وخدماتك داخل المنصة
                    </div>
                    <div className="flex justify-center py-4">
                        <img src="/images/2.png" alt="Feature 2" className="w-full max-w-[300px] h-auto object-contain" />
                    </div>
                    <div className="px-2 pb-4 text-right">
                        <p className="text-[#142d63] text-[16px] lg:text-[18px] leading-[1.6] font-medium">
                            الجيد في هذه المنصة أنها لا تعتمد على بوابات دفع خارجية مثل غيرها، بل تمتلك بوابة دفع خاصة بها مدمجة بشكل كامل داخل المنصة نفسها. وهذا يعني أنك لن تضطر للبحث عن حلول معقدة أو ربط منصات خارجية — كل شيء متوفر وجاهز للإستخدام. يمكنك ببساطة رفع منتجاتك أو دوراتك أو خدماتك داخل المنصة والبدء بالبيع مباشرة بكل سهولة وبدون أي تعقيد تقني وهذا ما سنتطرق إليه في هذا الجزء.
                        </p>
                    </div>
                </div>

                <div className="hidden lg:flex w-full items-center gap-6 p-4">
                    <div className="relative w-1/2 flex justify-center">
                        <img src="/images/2.png" alt="Devices 2" className="w-full max-w-[500px] h-auto object-contain" />
                    </div>
                    <div className="w-1/2 text-right">
                        <div className="bg-[#e53935] text-white font-bold text-lg px-3 py-2 inline-block mb-2">
                            طريقة رفع منتجاتك وخدماتك داخل المنصة
                        </div>
                        <p className="text-[#142d63] text-[18px] leading-[1.6] font-medium">
                            الجيد في هذه المنصة أنها لا تعتمد على بوابات دفع خارجية مثل غيرها، بل تمتلك بوابة دفع خاصة بها مدمجة بشكل كامل داخل المنصة نفسها. وهذا يعني أنك لن تضطر للبحث عن حلول معقدة أو ربط منصات خارجية — كل شيء متوفر وجاهز للإستخدام. يمكنك ببساطة رفع منتجاتك أو دوراتك أو خدماتك داخل المنصة والبدء بالبيع مباشرة بكل سهولة وبدون أي تعقيد تقني وهذا ما سنتطرق إليه في هذا الجزء.
                        </p>
                    </div>
                </div>
            </div>

            {/* القسم 3 */}
            <div className="w-full max-w-[1100px] bg-white rounded-lg shadow-md overflow-hidden mb-0 lg:mb-4">
                <div className="w-full lg:hidden px-0">
                    <div className="bg-[#e53935] text-white text-center font-bold text-[15px] py-2 leading-snug">
                        طريقة توثيق الحساب ورفع أرباحك من المنصة
                    </div>
                    <div className="flex justify-center py-4">
                        <img src="/images/3.png" alt="Feature 3" className="w-full max-w-[300px] h-auto object-contain" />
                    </div>
                    <div className="px-2 pb-4 text-right">
                        <p className="text-[#142d63] text-[16px] lg:text-[18px] leading-[1.6] font-medium">
                            في هذا الجزء الأخير من الكورس، سنتعرف سويًا على خطوات توثيق حسابك بطريقة بسيطة وواضحة، دون الحاجة لأي أوراق أو متطلبات معقدة كما هو الحال في بعض بوابات الدفع الأخرى. سنعرض لك الطريقة الصحيحة لتوثيق الحساب خطوة بخطوة. وبعد التوثيق، سنشرح لك بالتفصيل كيفية سحب أرباحك من داخل المنصة.
                        </p>
                    </div>
                </div>

                <div className="hidden lg:flex w-full items-center gap-6 p-4">
                    <div className="relative w-1/2 flex justify-center">
                        <img src="/images/3.png" alt="Devices 3" className="w-full max-w-[500px] h-auto object-contain" />
                    </div>
                    <div className="w-1/2 text-right">
                        <div className="bg-[#e53935] text-white font-bold text-lg px-3 py-2 inline-block mb-2">
                            طريقة توثيق الحساب ورفع أرباحك من المنصة
                        </div>
                        <p className="text-[#142d63] text-[18px] leading-[1.6] font-medium">
                            في هذا الجزء الأخير من الكورس، سنتعرف سويًا على خطوات توثيق حسابك بطريقة بسيطة وواضحة، دون الحاجة لأي أوراق أو متطلبات معقدة كما هو الحال في بعض بوابات الدفع الأخرى. سنعرض لك الطريقة الصحيحة لتوثيق الحساب خطوة بخطوة. وبعد التوثيق، سنشرح لك بالتفصيل كيفية سحب أرباحك من داخل المنصة.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseScrollerSection;
