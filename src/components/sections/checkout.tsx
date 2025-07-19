'use client';


export default function CheckoutSection() {
    const handleBuy = () => {
        // فتح صفحة الدفع مباشرةً باستخدام رابط المنتج (Checkout URL)
        window.open('https://buy.paddle.com/pro/01k0ferfj24g7dzv7t5f1rp8h4', '_blank');
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
