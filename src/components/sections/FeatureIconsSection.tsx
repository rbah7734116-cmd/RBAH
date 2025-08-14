import "@fontsource/mada/700.css"; // الخط العريض
import React from "react";

const FeatureIconsSection: React.FC = () => {
    return (
        <section className="pt-8 pb-8 bg-black text-white">
            <div className="container mx-auto px-4 text-center max-w-4xl">

                {/* النص الأول */}
                <h4
                    className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 w-full break-words sm:w-auto sm:break-normal"
                    style={{ fontFamily: "'Mada', sans-serif", lineHeight: 1.4 }}
                >
                    هل فكرت أو حاولت <span className="text-blue-400">فتح حساب سترايب</span> أو أي بوابة دفع ولم تستطع؟ أو تم رفضك رغم أنك اتبعت كل التعليمات؟<br />
                    بدون <span className="text-blue-400">وسيلة دفع مفعلة</span> عملك لا يمكن أن ينمو...
                </h4>

                {/* الصورة الجديدة بين النصين */}
                <div className="flex justify-center mb-1">
                    <img
                        src="/images/55555.png"
                        alt="Feature Image"
                        className="w-full md:w-full max-w-4xl lg:max-w-5xl z-10"
                    />
                </div>

                {/* النص الثاني */}
                <p
                    className="text-xl md:text-2xl lg:text-3xl mb-1 w-full break-words sm:w-auto sm:break-normal"
                    style={{ fontFamily: "'Mada', sans-serif", lineHeight: 1.4 }}
                >
                    الآن يمكنك حل هذه المشاكل بسهولة! تعلم الطريقة الصحيحة لتفعيل بوابات الدفع بدون الحاجة
                    لـ <span className="text-blue-400">سترايب</span> أو شركة <span className="text-blue-400">أمريكية</span> أو <span className="text-blue-400">بريطانية</span> وبعيدًا عن التعقيدات والمشاكل التي تعيق تفعيل الحساب أو تؤدي إلى رفضه.
                </p>

                {/* الصورة القديمة في الأسفل */}
                <div className="relative flex justify-center mb-2">
                    <img
                        src="/images/7878778.png"
                        alt="Main Feature"
                        className="hidden sm:block w-full max-w-3xl md:max-w-4xl lg:max-w-5xl z-10"
                    />
                    <img
                        src="/images/7878778.png"
                        alt="Main Feature Mobile"
                        className="block sm:hidden z-10"
                        style={{
                            width: '450px',
                            height: 'auto',
                            maxWidth: 'none'
                        }}
                    />
                </div>

                {/* القسم الجديد أسفل الصورة الثانية */}
                <div className="mt-4">
                    <p
                        className="text-lg md:text-xl lg:text-2xl mb-2 w-full break-words sm:w-auto sm:break-normal"
                        style={{ fontFamily: "'Mada', sans-serif", lineHeight: 1.5 }}
                    >
                        أحصل على خطوات عملية ومضمونة لإنشاء حسابك بنجاح من المحاولة الأولى.<br />
                        حلول مصممة خصيصاً للتغلب على القيود في الدول العربية.!
                    </p>

                    <div className="flex justify-center mb-2">
                        <img
                            src="/images/9987874855.gif"
                            alt="Offer GIF"
                            className="w-[128px] h-[67px] object-contain"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg text-lg md:text-xl transition duration-300 w-full sm:w-auto break-words sm:break-normal"
                            style={{ fontFamily: "'Mada', sans-serif" }}
                        >
                            !نعم! أريد الإشتراك في هذا العرض الآن<br />
                            فقط بـ 9$ | لفترة محدودة
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeatureIconsSection;
