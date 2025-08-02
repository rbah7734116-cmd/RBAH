
export default function Afterpayment() {
    return (
        <section className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg my-10">
            <h1 className="text-3xl font-bold text-[#003b4e] mb-6 text-center">
                Thank you for your payment! 🎉
            </h1>

            <p className="mb-4 text-gray-700 text-lg">
                We have successfully received your payment and appreciate your trust in our services.
                We are committed to working with you at the highest professional level to ensure your project’s success.
            </p>

            <h2 className="text-xl font-semibold text-[#0073e6] mb-3">
                What happens next:
            </h2>
            <ol className="list-decimal list-inside mb-6 text-gray-700 space-y-2">
                <li>
                    We will contact you within 24 hours on the phone number or email you provided.
                </li>
                <li>
                    Please prepare the Zoom app for the initial meetings; you can download it here:{" "}
                    <a
                        href="https://zoom.us/download"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-800"
                    >
                        Download Zoom
                    </a>
                </li>
                <li>
                    Ensure you have a stable internet connection and a quiet environment for the meeting.
                </li>
            </ol>

            <h2 className="text-xl font-semibold text-[#0073e6] mb-3">Contact Information:</h2>
            <ul className="mb-6 text-gray-700 space-y-2">
                <li>📞 Phone / WhatsApp: <a href="https://wa.me/905525909960" className="text-blue-600 underline">+90 552 590 99 60</a></li>
                <li>📧 Email: <a href="mailto:hossamalrawe@icloud.com" className="text-blue-600 underline">hossamalrawe@icloud.com</a></li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-6">
                <h3 className="font-semibold text-yellow-700 mb-2">Important Notice:</h3>
                <p className="text-yellow-700">
                    By completing your payment, you agree to our Terms of Service, Privacy Policy, and Refund Policy.
                    Please review our policies at the links below:
                </p>
                <ul className="mt-2 space-y-1">
                    <li>
                        <a href="/privacy-policy" className="text-yellow-800 underline hover:text-yellow-900">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="/refund-policy" className="text-yellow-800 underline hover:text-yellow-900">
                            Refund Policy
                        </a>
                    </li>
                </ul>
            </div>

            <div className="text-center">
                <a
                    href="/"
                    className="inline-block bg-[#003b4e] text-white px-6 py-3 rounded-md hover:bg-[#005a7a] transition"
                >
                    Back to Home
                </a>
            </div>
        </section>
    );
}
