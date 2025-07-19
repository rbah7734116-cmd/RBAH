import { useEffect } from 'react';

declare global {
    interface Window {
        Paddle: any;
    }
}

const CHECKOUT_PRODUCT_ID = 123456; // استبدل هذا برقم المنتج الخاص بك من Paddle
const VENDOR_ID = 236739; // رقم Vendor ID الخاص بك

const Checkout = () => {
    useEffect(() => {
        // تحميل سكريبت Paddle
        const paddleScriptId = 'paddle-js-sdk';
        if (!document.getElementById(paddleScriptId)) {
            const script = document.createElement('script');
            script.id = paddleScriptId;
            script.src = 'https://cdn.paddle.com/paddle/paddle.js';
            script.async = true;
            script.onload = () => {
                // إعداد Vendor ID عند تحميل السكريبت
                window.Paddle.Setup({ vendor: VENDOR_ID });
            };
            document.body.appendChild(script);
        } else {
            // لو السكريبت محمل مسبقاً، أعد الإعداد فقط
            window.Paddle?.Setup({ vendor: VENDOR_ID });
        }
    }, []);

    const handleCheckout = () => {
        if (!window.Paddle) {
            alert('Paddle script is not loaded yet, please try again later.');
            return;
        }

        window.Paddle.Checkout.open({
            product: CHECKOUT_PRODUCT_ID,
            successCallback: () => {
                alert('تم الدفع بنجاح! شكراً لك.');
            },
            closeCallback: () => {
                alert('تم إغلاق نافذة الدفع.');
            },
        });
    };

    return (
        <section>
            <h2>صفحة الدفع</h2>
            <button onClick={handleCheckout} style={{
                padding: '12px 24px',
                fontSize: '18px',
                backgroundColor: '#0051ff',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
            }}>
                اشتري الآن
            </button>
        </section>
    );
};

export default Checkout;
