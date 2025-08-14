import "@fontsource/mada/400.css"; // الوزن العادي
import "@fontsource/mada/700.css"; // الوزن العريض
import React from "react";


const StoreExamplesSection: React.FC = () => {
    return (
        <section dir="rtl" className="w-full font-sans py-8 bg-gray-50" style={{ fontFamily: "'Mada', sans-serif" }}>
            {/* الجزء الأحمر */}
            <div className="max-w-4xl mx-auto bg-red-400 text-white p-6 rounded-t-xl shadow-md text-center">
                <p className="text-[16px] lg:text-[20px] leading-[1.6] font-semibold">
                    الحقيقة المؤلمة هي أنك <span className="font-bold">لن تتمكن</span> من تحقيق ذلك بمفردك –
                    وهذا ليس بسبب مشكلة فيك ولا لأنك غير قادر. بَل لأن: 99٪ من الشروحات المتاحة
                    (سواء على يوتيوب أو باقي الكورسات) إما <span className="font-bold">ناقصة</span>،
                    أو <span className="font-bold">قديمة</span>، لا توصلّك إلى حل للمشكلة.
                </p>
            </div>

            {/* الجزء الأبيض */}
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-none shadow-md text-center text-[#1f1f1f] text-[16px] lg:text-[18px] leading-[1.8]">
                <p className="mb-4">
                    فمعظم من يحاولون تفعيل بوابات الدفع من الدول العربية يصطدمون مباشرة بعقبات تقنية
                    معقدة، تسبب في تأخير أو رفض طلباتهم مراراً وتكراراً.
                </p>
                <p className="text-red-500 font-semibold">
                    وغالباً ما تكون هذه العقبات غير واضحة أو مشروحة بشكل دقيق، مما يجعل تجاوزها مستحيلاً
                    دون خبرة أو توجيه عملي مجرب.
                </p>
            </div>

            {/* الجزء الأزرق */}
            <div className="max-w-4xl mx-auto bg-[#1f3553] text-white p-6 rounded-b-xl shadow-md text-center text-[16px] lg:text-[18px] leading-[1.8]">
                <p className="mb-4">
                    هناك <span className="text-orange-400 font-bold">أسرار واحترافيات</span> لا يعرفها حتى
                    أصحاب تلك الكورسات، لأنهم ببساطة ليسوا خبراء مختصين تعاملوا مع الحالات الحقيقية،
                    معظم الطرق الشائعة لم تعد تعمل بسبب تشديد القيود، <span className="text-orange-400 font-bold">خاصة في الدول العربية</span>.
                </p>
                <p>
                    ولكن لا تقلق...! لأن هذا هو بالضبط سبب وجودنا هنا اليوم! بعد مساعدة المئات من العملاء
                    (بمن فيهم أصحاب المتاجر الالكترونية، المستقلين، ورواد الأعمال)، وتجربة كل طريقة ممكنة،
                    قمنا بتطوير: <span className="text-orange-400 font-bold">&quot;الحل الشامل الوحيد الذي يضمن لك&quot;</span>

                </p>
                <p className="mt-2">
                    تفعيل بوابات الدفع العالمية مع الاستراتيجيات التي نجحت مع الكثير من أصحاب المشاريع!
                </p>
            </div>
        </section>
    );
};

export default StoreExamplesSection;
