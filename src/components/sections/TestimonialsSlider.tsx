import React from "react";

const BulletIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="#ff5a5a" />
    <path
      d="M8.7 8.7L15.3 15.3M15.3 8.7L8.7 15.3"
      stroke="#ffffff"
      strokeWidth="2.3"
      strokeLinecap="round"
    />
  </svg>
);

const DottedChevrons: React.FC = () => (
  <svg width="92" height="36" viewBox="0 0 92 36" className="mx-auto mt-2" aria-hidden="true">
    <g fill="#9aa7b5">
      {Array.from({ length: 6 }).map((_, i) => (
        <circle key={`l-${i}`} cx={16 + i * 6} cy={8 + i * 4} r="1.8" />
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <circle key={`l2-${i}`} cx={16 + i * 6} cy={28 - i * 4} r="1.8" />
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <circle key={`r-${i}`} cx={56 + i * 6} cy={8 + i * 4} r="1.8" />
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <circle key={`r2-${i}`} cx={56 + i * 6} cy={28 - i * 4} r="1.8" />
      ))}
    </g>
  </svg>
);

const BrushUnderline: React.FC = () => (
  <svg width="220" height="18" viewBox="0 0 220 18" className="mx-auto mt-1" aria-hidden="true">
    <path
      d="M3 12 C40 6, 90 16, 135 10 S200 6, 217 10"
      fill="none"
      stroke="#ff6b6b"
      strokeWidth="6"
      strokeLinecap="round"
      opacity="0.95"
    />
  </svg>
);

const QuestionRow: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start gap-2">
    {/* الأيقونة على اليمين */}
    <div className="flex-shrink-0 mt-[2px]">
      <BulletIcon />
    </div>
    {/* النص */}
    <p className="text-[16px] lg:text-[28px] text-[#2c3a4a] leading-[1.7]">{text}</p>
  </div>
);

const TestimonialsSlider: React.FC = () => {
  return (
    <section dir="rtl" className="w-full bg-white font-sans py-4 select-none">
      {/* العنوان */}
      <div className="px-4 text-center">
        <h2 className="text-[24px] lg:text-[48px] leading-[1.5] font-extrabold text-[#133b63]">
          هل جربت كل طرق تفعيل بوابات الدفع ولم
          <br />
          تنجح؟
        </h2>

        <p className="text-[24px] lg:text-[48px] font-extrabold text-[#ff4b4b] mt-[6px]">
          دعنا إذا نسألك بكل صراحة...
        </p>

        <DottedChevrons />
      </div>

      {/* المربع الأزرق */}
      <div className="w-full sm:max-w-3xl mx-auto mt-4 rounded-[8px] border border-[#cfe3f7] bg-[#eaf5ff] shadow-[0_2px_8px_rgba(17,66,107,0.12)] p-4 space-y-4">
        <QuestionRow text="هل تجد صعوبة في إيجاد بوابة دفع تدعم عملائك من جميع الدول؟" />
        <QuestionRow text="هل أُغلق حسابك فجأة على سترايب أو بايبال دون أن تعرف السبب؟" />
        <QuestionRow text="هل تعاني من صعوبة تفعيل بوابات الدفع لمتجرك أو موقعك؟" />
        <QuestionRow text="هل العنوان الوهمي أو عدم التوثيق يعيق نجاحك؟" />
        <QuestionRow text="هل قيود الدفع تمنعك من بيع منتجاتك عالميًا؟" />
      </div>

      {/* الإطار المتقطع الأحمر */}
      <div className="w-full sm:max-w-3xl mx-auto mt-4 rounded-[8px] border-4 border-[#ff4b4b] border-dashed text-center p-3">
        <p className="text-[18px] lg:text-[30px] font-bold text-[#3a4753] leading-[1.8]">
          إذا كانت إجابتك <span className="text-[#ff4b4b]">"نعم"</span> فأنت في المكان الصحيح
          <br />
          الآن!
        </p>
      </div>

      {/* السطر الأخير مع فرشاة تحتها */}
      <div className="mt-4 text-center">
        <p className="text-[20px] lg:text-[36px] font-extrabold text-[#2b2b2b]">
          لكن صرحاء معك للحظة
        </p>
        <BrushUnderline />
      </div>
    </section>
  );
};

export default TestimonialsSlider;
