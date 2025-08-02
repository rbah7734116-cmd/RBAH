// src/components/sections/Afterpayment.tsx
import Link from "next/link";
import React from "react";

const Afterpayment: React.FC = () => {
    return (
        <section className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg text-gray-900">
            <h1 className="text-3xl font-bold mb-6 text-center text-green-700">
                Thank you for your order! 🎉
            </h1>

            <p className="mb-6 text-center text-red-600 text-base font-medium border border-red-200 bg-red-50 px-4 py-2 rounded">
                ⚠️ Please make sure to <strong>bookmark or save this page</strong> now. It contains important instructions, links, and your support information.
            </p>

            <p className="mb-4 text-lg">
                Your payment was successful. We appreciate your trust in our services. Please follow the steps below to proceed:
            </p>

            <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">
                <li>Double-check the information you submitted during checkout.</li>
                <li>You will be contacted within 24 hours via email or WhatsApp.</li>
                <li>
                    Install{" "}
                    <a
                        href="https://zoom.us/download"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-800"
                    >
                        Zoom
                    </a>{" "}
                    for your initial meeting (we may also use Google Meet).
                </li>
                <li>Your first strategy call will be scheduled based on your selected time or our follow-up.</li>
                <li>
                    If you haven’t heard from us within 24 hours, feel free to reach out:
                    <br />
                    WhatsApp:{" "}
                    <a
                        href="https://wa.me/905525909960"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 underline hover:text-green-800"
                    >
                        +90 552 590 99 60
                    </a>
                    <br />
                    Email:{" "}
                    <a
                        href="mailto:hossamalrawe@icloud.com"
                        className="text-yellow-700 underline hover:text-yellow-900"
                    >
                        hossamalrawe@icloud.com
                    </a>
                </li>
            </ol>

            <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-3">📽 Need help installing Zoom?</h2>
                <p className="mb-4 text-gray-700">
                    If you’re new to Zoom, please watch this short tutorial to learn how to download and install it on your computer:
                </p>
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        src="https://www.youtube.com/embed/urjVr77KS_8"
                        title="How to Install Zoom on Windows 11"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-64 rounded-md"
                    ></iframe>
                </div>
            </div>

            <div className="border-t border-gray-200 pt-5 text-sm text-gray-600">
                <p className="font-medium mb-2">⚠️ Important Information:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>This is a digital service. Once work begins, the purchase is non-refundable.</li>
                    <li>Your service will be delivered according to the package you selected.</li>
                    <li>
                        Please review our official policies:
                        {" "}
                        <Link href="/privacy-policy" className="text-yellow-800 underline hover:text-yellow-900">
                            Privacy Policy
                        </Link>
                        {" "}
                        and{" "}
                        <Link href="/refund-policy" className="text-yellow-800 underline hover:text-yellow-900">
                            Refund Policy
                        </Link>.
                    </li>
                </ul>
            </div>

            <div className="mt-10 text-center">
                <Link
                    href="/"
                    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition"
                >
                    Back to Home
                </Link>
            </div>
        </section>
    );
};

export default Afterpayment;
