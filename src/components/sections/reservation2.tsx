// src/components/sections/reservation2.tsx

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Reservation2() {
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
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleDateChange = (date: Date) => {
        setFormData(prev => ({ ...prev, date }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.whatsapp || !formData.time) {
            alert("يرجى تعبئة جميع الحقول المطلوبة.");
            return;
        }

        setShowPayment(true);
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
            <h2 className="text-2xl font-bold text-center">الباقة الثالثة — حجز موعد</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <Label htmlFor="name">الاسم الكامل</Label>
                    <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="أدخل الاسم الكامل"
                        required
                    />
                </div>

                <div>
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="example@mail.com"
                        required
                    />
                </div>

                <div>
                    <Label htmlFor="whatsapp">رقم الواتساب</Label>
                    <Input
                        id="whatsapp"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        placeholder="مثال: 009665xxxxxxxx"
                        required
                    />
                </div>

                <div>
                    <Label htmlFor="date">التاريخ المناسب</Label>
                    <Calendar selectedDate={formData.date} onDateChange={handleDateChange} />
                </div>

                <div>
                    <Label htmlFor="time">الوقت المناسب</Label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <Button type="submit" className="w-full">
                    استمرار إلى الدفع
                </Button>
            </form>

            {showPayment && (
                <div className="mt-6 p-4 bg-green-50 border border-green-400 rounded-md text-green-700 text-center">
                    {/* هنا زر الدفع مع Paddle */}
                    <p>تم تعبئة النموذج بنجاح، زر الدفع سيظهر هنا.</p>
                </div>
            )}
        </div>
    );
}
