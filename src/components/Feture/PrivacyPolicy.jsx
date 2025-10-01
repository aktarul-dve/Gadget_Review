import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mt-1">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </header>

        <section className="space-y-4 text-sm leading-relaxed">

          <p>
            <span className="font-medium">Online Guide</span> is committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, and safeguard your personal information when you visit our website.
          </p>

          <h2 className="text-lg font-semibold mb-2">1. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Personal information you provide voluntarily, such as name, email address, and contact details.</li>
            <li>Non-personal information automatically collected, such as browser type, IP address, pages visited, and time spent on our site.</li>
            <li>Cookies and similar technologies to enhance user experience.</li>
          </ul>

          <h2 className="text-lg font-semibold mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To provide and improve our services and content.</li>
            <li>To respond to inquiries or support requests.</li>
            <li>To send updates, newsletters, or promotional information (you can opt out at any time).</li>
            <li>To monitor and analyze usage patterns for improving website functionality.</li>
          </ul>

          <h2 className="text-lg font-semibold mb-2">3. Data Sharing and Security</h2>
          <p>
            We do not sell or rent your personal information to third parties. We may share data with trusted service
            providers for operational purposes. We implement reasonable technical and administrative measures to
            protect your information but cannot guarantee absolute security.
          </p>

          <h2 className="text-lg font-semibold mb-2">4. External Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices
            or content of those sites. We encourage you to review their privacy policies before providing any information.
          </p>

          <h2 className="text-lg font-semibold mb-2">5. User Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data. You can also opt out of receiving
            communications from us at any time by contacting our support.
          </p>

          <h2 className="text-lg font-semibold mb-2">6. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Any changes will be effective immediately upon posting.
            Continued use of the website constitutes acceptance of the updated policy.
          </p>

          <h2 className="text-lg font-semibold mb-2">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="mt-2 text-sm space-y-1">
            <li>Email: <span className="font-medium">support@onlineguide.com</span></li>
            <li>Phone: <span className="font-medium">+880 1234-567890</span></li>
            <li>Address: <span className="font-medium">Dhaka, Bangladesh</span></li>
          </ul>

        </section>

        <footer className="mt-8 border-t pt-4 text-xs text-gray-500">
          © {new Date().getFullYear()} Online Guide. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
