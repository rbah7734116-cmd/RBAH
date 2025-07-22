import { useEffect } from 'react';

declare global {
    interface Window {
        Paddle: any;
    }
}

export default function CheckoutSection() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.paddle.com/paddle/paddle.js';
        script.onload = () => {
            window.Paddle.Setup({
                vendor: 236739, // ✅ Vendor ID
            });
        };
        document.body.appendChild(script);
    }, []);

    const handleCheckout = () => {
        window.Paddle.Checkout.open({
            items: [
                {
                    priceId: 'pro_01k0ferfj24g7dzv7t5f1rp8h4', // ✅ Product ID
                },
            ],
        });
    };

    return (
        <section className="w-full py-20 bg-gray-100 text-center">
            <div className="max-w-xl mx-auto px-4">
                <h1 className="text-3xl font-bold mb-4">شراء المنتج</h1>
                <p className="text-lg text-gray-600 mb-8">
                    انقر الزر أدناه لإتمام عملية الشراء بأمان عبر Paddle.
                </p>
                <button
                    onClick={handleCheckout}
                    className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800 transition"
                >
                    اشترِ الآن
                </button>
            </div>
        </section>
    );
}
