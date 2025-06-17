// pages/privacy.tsx

export default function PrivacyPolicy() {
    return (
        <main style={{ maxWidth: '850px', margin: '0 auto', padding: '40px 24px', fontFamily: 'Segoe UI, sans-serif', lineHeight: '1.8' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Privacy Policy</h1>
            <p>Effective Date: June 2025</p>

            <h2>1. Overview</h2>
            <p>
                We are committed to protecting your privacy. This Privacy Policy outlines how your personal information is collected, used, and protected when you purchase our digital products such as Shopify Liquid code snippets.
            </p>

            <h2>2. What We Collect</h2>
            <p>We only collect minimal information required to complete your order, such as:</p>
            <ul>
                <li>Your name</li>
                <li>Email address</li>
                <li>Billing and payment information (processed securely via Stripe)</li>
                <li>Technical information (browser type, IP address) for analytics</li>
            </ul>

            <h2>3. Payment Processing</h2>
            <p>
                All transactions are handled by <strong>Stripe</strong>, a PCI-compliant payment gateway. We do <strong>not</strong> store or have access to your credit card details. Stripe handles all sensitive data via their own secure systems in accordance with their{' '}
                <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
            </p>

            <h2>4. Use of Your Information</h2>
            <p>We use your data to:</p>
            <ul>
                <li>Deliver digital products to your email or dashboard</li>
                <li>Provide customer support</li>
                <li>Send order confirmations and updates</li>
                <li>Improve our services and user experience</li>
            </ul>

            <h2>5. Third-Party Services</h2>
            <p>We only share data with trusted services necessary to run our business, such as:</p>
            <ul>
                <li><strong>Stripe</strong> – for secure payments</li>
                <li><strong>Email platforms</strong> – to deliver access links</li>
                <li><strong>Google Analytics</strong> – for anonymous usage tracking</li>
            </ul>

            <h2>6. Your Rights</h2>
            <p>As a user, you have the right to:</p>
            <ul>
                <li>Request access to the personal data we hold</li>
                <li>Request correction or deletion of your data</li>
                <li>Opt out of marketing communications (we rarely send any)</li>
            </ul>

            <h2>7. Data Retention</h2>
            <p>
                We retain order-related data for legal and customer service reasons. However, you may request deletion of your personal data by contacting us at the email below.
            </p>

            <h2>8. Cookies</h2>
            <p>
                Our website uses cookies to enhance functionality and track usage behavior. You may disable cookies via your browser settings, but some features may not function properly.
            </p>

            <h2>9. Changes</h2>
            <p>
                We may update this Privacy Policy at any time. When we do, we’ll update the “Effective Date” above. Continued use of our site means you agree to the new terms.
            </p>

            <h2>10. Contact</h2>
            <p>
                For questions or privacy-related concerns, contact us at:<br />
                <strong>Email:</strong> rabahmusayid@gmail.com

            </p>
        </main>
    );
}
