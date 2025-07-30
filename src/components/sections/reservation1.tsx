// reservation1.tsx — الباقة الثانية

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TimePicker } from "@/components/ui/time-picker"; // نفترض عندك هذا الكمبوننت، أو نقدر نعمله لاحقًا
import { useState } from "react";

export default function Reservation1() {
    const [showPayment, setShowPayment] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        whatsapp: "",
        date: new Date(),
        time: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowPayment(true);
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-2xl font-bold text-center mb-4">الباقة الثانية — حجز موعد</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <Label>الاسم الكامل</Label>
                    <Input name="name" value={formData.name} onChange={handleInputChange} required />
                </div>

                <div>
                    <Label>البريد الإلكتروني</Label>
                    <Input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>

                <div>
                    <Label>رقم واتساب</Label>
                    <Input name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} required />
                </div>

                <div>
                    <Label>اختر التاريخ المناسب</Label>
                    <Calendar mode="single" selected={formData.date} onSelect={(date) => setFormData({ ...formData, date })} />
                </div>

                <div>
                    <Label>اختر الساعة</Label>
                    <TimePicker value={formData.time} onChange={(time) => setFormData({ ...formData, time })} />
                </div>

                <Button type="submit" className="w-full">استمرار إلى الدفع</Button>
            </form>

            {showPayment && (
                <div className="mt-6">
                    {/* زر Paddle */}
                    <Button
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                        onClick={() => {
                            // Paddle Checkout — عدل product
                            window.Paddle.Checkout.open({
                                product: 123456, // ID الباقة الثانية
                            });
                        }}
                    >
                        الدفع الآن
                    </Button>
                </div>
            )}
        </div>
    );
}