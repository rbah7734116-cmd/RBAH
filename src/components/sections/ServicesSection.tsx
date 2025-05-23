
const services = [
    {
        video: '/videos/1.mp4',
        description:
            'نقدم حلول تطوير متاجر Shopify الرائدة، مصممة لتلبي متطلبات السوق وتوفر تجربة تسوق سلسة. نعتمد على أحدث التقنيات لضمان متجر سريع، آمن، وجاهز لاستيعاب النمو المستقبلي.',
        label: 'تطوير متاجر الويب',
    },
    {
        video: '/videos/2.mp4',
        description:
            'تصميم مواقع متميزة لمتاجر Shopify تضفي جاذبية بصرية وسهولة في التصفح. نصمم تجربة مستخدم متكاملة تضمن إبقاء الزوار وتحويلهم إلى عملاء دائمين.',
        label: 'تصميم المواقع',
    },
    {
        video: '/videos/3.mp4',
        description:
            'إنشاء هوية بصرية استثنائية تميز متجرك وتجذب الأنظار، مع شعارات وتصاميم تعكس احترافية علامتك التجارية وتزيد من انتشارها.',
        label: 'العلامة التجارية',
    },
    {
        video: '/videos/4.mp4',
        description:
            'نواكب التطورات في التجارة الإلكترونية ونبتكر في تصميم متاجر عصرية، مدمجة بأفضل استراتيجيات التحويل والتفاعل، لضمان تحقيق مبيعات أعلى ورضا العملاء.',
        label: 'الابتكار الرؤيوي',
    },
    {
        video: '/videos/5.mp4',
        description:
            'تأسيس بنية تحتية متقدمة ومتينة لمتجر شوبيفاي الخاص بك، مع تكامل سلس لتطبيقات التحليلات والبيانات وتوفير أداء عالي الجودة لتحسين التجربة الشاملة.',
        label: 'تصميم الواجهة الخلفية',
    },
    {
        video: '/videos/6.mp4',
        description:
            'تأمين متجرك الإلكتروني بأحدث تقنيات الحماية، بما في ذلك بروتوكولات SSL وتشفير البيانات، لضمان حماية بياناتك وبيانات عملائك على مدار الساعة.',
        label: 'أمن الويب',
    },
];

const ServicesSection = () => {
    return (
        <section className="pt-0 pb-16 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="border border-[#FFDF20] p-4 rounded-xl flex flex-col items-center text-center text-white"
                    >
                        <video
                            src={service.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="rounded-lg w-full h-48 object-cover mb-4"
                        />
                        <p className="text-sm mb-4 leading-relaxed">{service.description}</p>
                        <button className="border border-[#FFDF20] text-[#FFDF20] px-4 py-2 rounded-full hover:bg-[#FFDF20] hover:text-black transition">
                            {service.label}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
