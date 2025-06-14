'use client';

export default function PrivacyPolicy() {
    return (
        <section className="max-w-4xl mx-auto py-16 px-4 text-gray-800">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="mb-4">
                This Privacy Policy explains how we collect, use, and protect your personal
                information when you purchase or browse our website. By using our website,
                you agree to the collection and use of information in accordance with this policy.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
            <p className="mb-4">
                When you visit our site, we may collect certain information automatically,
                including your IP address, browser type, and device. If you make a purchase,
                we collect your name, email address, and payment information.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">2. Use of Information</h2>
            <p className="mb-4">
                The information we collect is used to:
                <ul className="list-disc ml-6">
                    <li>Provide and deliver the products you purchase</li>
                    <li>Process transactions via secure third-party payment gateways (e.g., Stripe)</li>
                    <li>Send order confirmations and relevant communication</li>
                    <li>Improve our website and user experience</li>
                </ul>
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">3. Sharing Your Information</h2>
            <p className="mb-4">
                We do not sell or share your personal information with third parties,
                except for trusted services that help us operate our site and fulfill orders
                (e.g., payment processors like Stripe).
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">4. Data Security</h2>
            <p className="mb-4">
                We implement security measures to protect your data.
                All transactions are processed through secure encrypted channels.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">5. Cookies</h2>
            <p className="mb-4">
                Our website may use cookies to enhance user experience. You can choose to disable cookies
                through your browser settings.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">6. Your Rights</h2>
            <p className="mb-4">
                You have the right to access, update, or delete your personal information by contacting us.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">7. Contact</h2>
            <p className="mb-4">
                If you have any questions regarding this Privacy Policy, please contact us at:
                <br /> <strong>Email:</strong> support@yourdomain.com
            </p>

            <p className="text-sm text-gray-600 mt-8">Last updated: June 2025</p>
        </section>
    );
}
