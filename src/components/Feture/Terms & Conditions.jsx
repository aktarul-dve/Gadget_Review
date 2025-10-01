// TermsConditions.jsx
import React from "react";

const TermsConditions = () => {
  const effectiveDate = "YYYY-MM-DD"; // এখানে কার্যকরতার তারিখ বসান, উদাহরণ: "2025-10-01"

  return (
    <div className="bg-gray-50 text-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">Terms &amp; Conditions</h1>
          <p className="text-sm text-gray-500 mt-1">
            Effective Date: <span className="font-medium">{effectiveDate}</span>
          </p>
        </header>

        <section className="space-y-4 text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing or using <span className="font-medium">Online Guide</span>, you agree to be bound by these Terms &amp; Conditions
              and our Privacy Policy. If you do not agree with any part of these terms, please discontinue using the site.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">2. Purpose of the Platform</h2>
            <p>
              Online Guide is an educational and informational platform where users can learn about various topics and receive
              guidelines. The content is provided for learning and reference purposes only and should not be considered
              professional, medical, legal, or financial advice.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">3. User Responsibilities</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Use the website only for lawful purposes and in accordance with these Terms.</li>
              <li>Do not upload, post or share content that is illegal, harmful, defamatory, or infringes third-party rights.</li>
              <li>You are responsible for the accuracy of any information you provide to the platform.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">4. Intellectual Property</h2>
            <p>
              All content on this site (text, images, logos, graphics, and other materials) is the property of Online Guide or
              its licensors unless otherwise stated. Unauthorized reproduction, distribution, or modification of the site’s content
              is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">5. Limitation of Liability</h2>
            <p>
              Online Guide does not guarantee uninterrupted access or error-free content. To the maximum extent permitted by law,
              Online Guide will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from
              your access to or use of the site.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">6. External Links</h2>
            <p>
              Our website may include links to third-party websites. These links are provided for convenience only. Online Guide is
              not responsible for the content, privacy practices, or accuracy of those external sites.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">7. Modifications</h2>
            <p>
              We reserve the right to update, modify, or replace these Terms &amp; Conditions at any time. Changes will be effective
              immediately upon posting. Continued use of the site after changes constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">8. Contact</h2>
            <p className="text-sm">
              If you have any questions about these Terms &amp; Conditions, please contact us:
            </p>
            <ul className="mt-2 text-sm space-y-1">
              <li>Email: <span className="font-medium">support@onlineguide.com</span></li>
              <li>Phone: <span className="font-medium">+880 1234-567890</span></li>
              <li>Address: <span className="font-medium">Dhaka, Bangladesh</span></li>
            </ul>
          </div>
        </section>

        <footer className="mt-8 border-t pt-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Online Guide. All rights reserved. These Terms &amp; Conditions constitute the entire
            agreement between you and Online Guide regarding your use of the service.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default TermsConditions;
