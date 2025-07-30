'use client';

import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

declare global {
    interface Window {
        Paddle: any;
    }
}

export default function Reservation1() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: new Date(),
    });

    const [submitted, setSubmitted] = useState(false);
    const [policyAccepted, setPolicyAccepted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleDateChange = (date: Date) => {
        setFormData((prev) => ({ ...prev, date }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        loadPaddleScript();
    };

    const loadPaddleScript = () => {
        if (!window.Paddle) {
            const script = document.createElement('script');
            script.src = 'https://cdn.paddle.com/paddle/v2/paddle.js';
            script.async = true;
            script.onload = () => {
                window.Paddle.Setup({
                    token: 'live_ebb713e9b483c666ec833d9e544',
                    environment: 'production',
                });
            };
            document.body.appendChild(script);
        }
    };

    const handleCheckout = () => {
        window.Paddle.Checkout.open({
            items: [
                {
                    priceId: 'pri_01k0ff21mn9p4nmsx16sw5afze',
                },
            ],
        });
    };

    return (
        <section className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">حجز موعد 1</h2>

            {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Label htmlFor="name">الاسم الكامل</Label>
                        <Input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="أدخل اسمك الكامل"
                        />
                    </div>

                    <div>
                        <Label htmlFor="phone">رقم الهاتف</Label>
                        <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="أدخل رقم هاتفك"
                        />
                    </div>

                    <div>
                        <Label htmlFor="date">التاريخ المناسب</Label>
                        <Calendar selectedDate={formData.date} onDateChange={handleDateChange} />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
                    >
                        احجز الآن
                    </button>
                </form>
            ) : (
                <div className="text-center">
                    <p className="mb-4 text-gray-700">
                        تم تسجيل الحجز بنجاح، الآن يمكنك إتمام الدفع.
                    </p>
                    <div className="bg-gray-100 p-4 rounded mb-4 text-sm text-gray-600 text-right leading-relaxed">
                        سنقوم بالاتصال بك في الوقت المحدد لتأكيد الموعد.
                        <br />
                        بالضغط على &quot;اشترِ الآن&quot;، فإنك توافق على تلقي الاتصال من فريقنا، وتؤكد أنك قرأت ووافقت على{' '}
                        <a href="/terms" className="underline text-blue-600">
                            الشروط والسياسات
                        </a>
                        .
                    </div>

                    <div className="flex items-center justify-start gap-2 mb-4">
                        <input
                            type="checkbox"
                            id="accept"
                            checked={policyAccepted}
                            onChange={(e) => setPolicyAccepted(e.target.checked)}
                        />
                        <label htmlFor="accept" className="text-sm text-gray-700">
                            أوافق على الشروط والسياسات
                        </label>
                    </div>

                    {policyAccepted ? (
                        <button
                            onClick={handleCheckout}
                            className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800 transition"
                        >
                            اشترِ الآن
                        </button>
                    ) : (
                        <p className="text-sm text-red-500">يرجى الموافقة على الشروط قبل المتابعة.</p>
                    )}
                </div>
            )}
        </section>
    );
}
