
export default function PricingCards() {
    const plans = [
        {
            title: "الباقة الأساسية",
            price: "$250",
            description: "تحسينات أساسية لمتجرك",
            features: [
                "تخصيص كامل لصفحات المنتج، السلة، الدفع",
                "تحسين تجربة المستخدم وتسهيل التنقل",
                "تسريع المتجر وتهيئته للموبايل",
                "دعم فني لمدة 14 يومًا",
                "تسليم خلال 5 أيام عمل"
            ]
        },
        {
            title: "الباقة الاحترافية",
            price: "$500",
            description: "خطة شاملة لتحسين متجرك وزيادة مبيعاتك",
            highlight: true,
            features: [
                "كل ميزات الباقة الأساسية",
                "تحليل السوق واقتراح 4 منتجات واعدة",
                "تحديد المنتج الأنسب لجمهورك",
                "تخصيص التصميم الكامل للصفحات",
                "تحسين صفحات المنتجات لتحقيق مبيعات أفضل"
            ]
        },
        {
            title: "الباقة المتقدمة",
            price: "$1000",
            description: "باقة متكاملة لأصحاب المتاجر الجادين",
            features: [
                "كل ميزات الباقات السابقة",
                "مساعدتك في إطلاق حملات إعلانية لمتجرك",
                "تحسين التحويل بشكل احترافي",
                "تحسين تجربة الشراء لكل خطوات العميل",
                "دعم مخصص ومتابعة شخصية"
            ]
        }
    ];

    return (
        <div className="bg-gradient-to-b from-[#003b4e] to-[#002f3e] py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-white text-4xl font-bold mb-4">خطط الأسعار</h2>
                <p className="text-white/70 mb-12">اختر الباقة الأنسب لمتجرك وابدأ رحلة التحسين الآن</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`rounded-xl shadow-lg p-8 border transition-all duration-300 bg-white ${plan.highlight ? "border-yellow-400 scale-105" : "border-gray-200"
                                }`}
                        >
                            <h3 className="text-xl font-semibold mb-2 text-[#003b4e]">{plan.title}</h3>
                            <p className="text-gray-600 mb-4">{plan.description}</p>
                            <div className="text-3xl font-bold text-[#003b4e] mb-6">{plan.price}</div>
                            <ul className="text-gray-700 space-y-2 mb-6">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-green-600">✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full bg-[#003b4e] text-white py-2 rounded-md hover:bg-[#005f75] transition">
                                احجز الآن
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
