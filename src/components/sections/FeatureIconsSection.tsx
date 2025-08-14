import React from "react";

const FeatureIconsSection: React.FC = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                {/* العنوان */}
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    هل فكرت أو حاولت <span className="text-red-500">فتح حساب سترايب</span> أو أي بوابة دفع ولم تستطع؟<br />
                    أو تم رفضك رغم أنك اتبعت كل التعليمات؟
                </h2>
                <p className="text-lg md:text-xl mb-12">
                    الآن يمكنك حل هذه المشاكل بسهولة! تعلم الطريقة الصحيحة لتفعيل بوابات الدفع بدون الحاجة
                    لـ <span className="text-red-500">سترايب</span> أو شركة <span className="text-red-500">أمريكية</span> أو <span className="text-red-500">بريطانية</span> وبعيدًا عن التعقيدات والمشاكل التي تعيق تفعيل الحساب أو تؤدي إلى رفضه.
                </p>

                {/* صورة الأجهزة */}
                <div className="relative flex justify-center items-center">
                    {/* الكمبيوتر */}
                    <img
                        src="/images/desktop-mockup.png"
                        alt="Desktop Mockup"
                        className="w-full max-w-lg z-10"
                    />
                    {/* الجهاز اللوحي */}
                    <img
                        src="/images/tablet-mockup.png"
                        alt="Tablet Mockup"
                        className="absolute right-1/4 top-0 w-36 md:w-48 z-20"
                    />
                    {/* الهاتف */}
                    <img
                        src="/images/phone-mockup.png"
                        alt="Phone Mockup"
                        className="absolute left-1/4 bottom-0 w-24 md:w-32 z-20"
                    />
                </div>
            </div>
        </section>
    );
};

export default FeatureIconsSection;
