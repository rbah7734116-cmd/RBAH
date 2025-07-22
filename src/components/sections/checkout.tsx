// src/components/sections/checkout.tsx
import { useEffect } from "react";

declare global {
    interface Window {
        Paddle: any;
    }
}

const CheckoutSection = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            if (window.Paddle) {
                window.Paddle.Environment.set("sandbox"); // احذف في الإنتاج
                window.Paddle.Setup({ seller: 236739 });
            }
        };
    }, []);

    const openCheckout = () => {
        if (window.Paddle) {
            window.Paddle.Checkout.open({
                items: [
                    {
                        priceId: "pri_01k0ff21mn9p4nmsx16sw5afze",
                    },
                ],
                checkout: {
                    settings: {
                        displayMode: "inline",
                        frameTarget: "checkout-container",
                        theme: "light",
                    },
                },
            });
        }
    };

    return (
        <div>
            <h2>الدفع الآمن</h2>
            <button onClick={openCheckout} className="bg-blue-600 text-white px-4 py-2 rounded">
                ادفع الآن $27
            </button>
            <div id="checkout-container" className="mt-6" />
        </div>
    );
};

export default CheckoutSection;
