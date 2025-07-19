'use client';

import { useEffect } from 'react';

declare global {
    interface Window {
        Paddle: any;
    }
}

const beamer_config = {
    product_id: 'RvynHFzq63519',
    user_id: 'usr_01jy9p1eshpdk03py68g8tt60d',
};

export default function CheckoutSection() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.paddle.com/paddle/paddle.js';
        script.async = true;
        script.onload = () => {
            window.Paddle.Setup({ vendor: 236739 }); // <-- ضع هنا Vendor ID الخاص بك
        };
        document.body.appendChild(script);
    }, []);

    const handleBuy = () => {
        window.Paddle.Checkout.open({
            product: 816458, // <-- ضع هنا Product ID الخاص بك (رقم فقط)
            passthrough: JSON.stringify({
                product_id: beamer_config.product_id,
                user_id: beamer_config.user_id,
            }),
            successCallback: () => {
                alert('تمت عملية الدفع بنجاح!');
                // هنا يمكنك إضافة أي كود تريده بعد الدفع
            },
            closeCallback: () => {
                console.log('تم إغلاق نافذة الدفع بدون إتمام الشراء');
            },
        });
    };

    return (
        <div className="text-center p-10">
            <h2 className="text-2xl font-bold mb-4">اشترِ الباقة الآن</h2>
            <button
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                onClick={handleBuy}
            >
                الدفع الآن
            </button>
        </div>
    );
}
