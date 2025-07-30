"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

declare global {
    interface Window {
        Paddle: any;
    }
}

export default function Reservation1() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
    });

    const [showPayment, setShowPayment] = useState(false);
    const [agreed, setAgreed] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
        script.onload = () => {
            window.Paddle.Setup({
                token: "live_ebb713e9b483c666ec833d9e544",
                environment: "production",
            });
        };
        document.body.appendChild(script);
    }, []);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("تم إرسال البيانات:", formData);
        setShowPayment(true);
    };

    const handleCheckout = () => {
        if (!agreed) return;
        window.Paddle.Checkout.open({
            items: [
                {
                    priceId: "pri_01k0ff21mn9p4nmsx16sw5afze",
                },
            ],
        });
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

            {showPayment && (
                <div className="mt-8 text-center space-y-4">
                    <p className="text-gray-700">
                        الآن يمكنك إتمام الدفع.
                        <br />
                        سنتصل بك في الوقت المحدد، وبإتمام الدفع فإنك توافق على تلقي الاتصال وأيضًا على <a href="/privacy" className="underline text-blue-600" target="_blank">سياسة الخصوصية</a> الخاصة بنا.
                    </p>

                    <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-sm">
                        <input
                            type="checkbox"
                            id="agree"
                            checked={agreed}
                            onChange={() => setAgreed(!agreed)}
                            className="w-4 h-4"
                        />
                        <label htmlFor="agree">أوافق على سياسة الخصوصية وتلقي الاتصال</label>
                    </div>

                    <Button
                        onClick={handleCheckout}
                        className="bg-black hover:bg-gray-800 w-full"
                        disabled={!agreed}
                    >
                        إتمام الدفع
                    </Button>
                </div>
            )}
        </div>
    );
}
