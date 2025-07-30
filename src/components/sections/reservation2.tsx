"use client";

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
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowPayment(true);
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-gray-50 text-gray-800 rounded-xl shadow-md space-y-4">
            <h2 className="text-2xl font-bold text-center mb-4">الباقة الثانية — حجز موعد</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <Label htmlFor="name" className="text-gray-700">الاسم الكامل</Label>
                    <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white border-gray-300 text-gray-800"
                    />
                </div>

                <div>
                    <Label htmlFor="email" className="text-gray-700">البريد الإلكتروني</Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white border-gray-300 text-gray-800"
                    />
                </div>

                <div>
                    <Label htmlFor="whatsapp" className="text-gray-700">رقم الواتساب</Label>
                    <Input
                        id="whatsapp"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        required
                        className="bg-white border-gray-300 text-gray-800"
                    />
                </div>

                <div>
                    <Label htmlFor="date" className="text-gray-700">التاريخ المناسب</Label>
                    <Calendar
                        mode="single"
                        selected={formData.date}
                        onSelect={(date) =>
                            setFormData((prev) => ({
                                ...prev,
                                date: date || new Date(),
                            }))
                        }
                        className="rounded-md border border-gray-300 bg-white text-gray-800"
                    />
                </div>

                <div>
                    <Label htmlFor="time" className="text-gray-700">الوقت المناسب</Label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-800"
                    />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    استمرار إلى الدفع
                </Button>
            </form>

            {showPayment && (
                <div className="mt-4 text-center text-green-600 font-medium">
                    زر الدفع سيظهر هنا بعد تعبئة البيانات.
                </div>
            )}
        </div>
    );
}
