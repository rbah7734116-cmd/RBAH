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

export default function Reservation2() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        date: "",
        time: "",
    });

    const [showPayment, setShowPayment] = useState(false);

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
            <h2 className="text-2xl font-bold mb-6 text-center">احجز الآن</h2>
            <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                    <Label htmlFor="name">الاسم</Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="اسمك الكامل"
                        value={formData.name}
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
                        placeholder="رقم الجوال"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    <Label htmlFor="date">التاريخ</Label>
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
                    <Label htmlFor="time">الوقت</Label>
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
                <div className="mt-8 text-center">
                    <p className="mb-4 text-gray-700">الآن يمكنك إتمام الدفع:</p>
                    <Button onClick={handleCheckout} className="bg-black hover:bg-gray-800 w-full">
                        إتمام الدفع
                    </Button>
                </div>
            )}
        </div>
    );
}
