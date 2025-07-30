"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Reservation1() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("تم إرسال البيانات:", formData);
        // يمكنك هنا إرسال البيانات إلى خادم أو تخزينها
    };

    return (
        <div className="bg-white text-black p-6 rounded-xl shadow-lg max-w-lg mx-auto mt-12 border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-center">حجز موعد</h2>
            <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                    <Label htmlFor="name">الاسم الكامل</Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="أدخل اسمك"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    <Label htmlFor="phone">رقم الهاتف</Label>
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="05XXXXXXXX"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    <Label htmlFor="date">اختر التاريخ</Label>
                    <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    <Label htmlFor="time">اختر الوقت</Label>
                    <Input
                        id="time"
                        name="time"
                        type="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <Button type="submit" className="w-full">
                    تأكيد الحجز
                </Button>
            </form>
        </div>
    );
}
