import React from "react";

const Disclaimer = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">Disclaimer</h1>
        </header>

        <section className="space-y-4 text-sm leading-relaxed">
          <p>
            The information provided on <span className="font-medium">Online Guide</span> is for general educational
            and informational purposes only. While we strive to provide accurate and up-to-date content, we make
            no guarantees regarding the completeness, accuracy, reliability, or suitability of the information.
          </p>

          <p>
            Any reliance you place on such information is strictly at your own risk. Online Guide will not be liable
            for any loss or damage, including without limitation, indirect or consequential loss or damage, arising
            from the use of the website or the information contained herein.
          </p>

          <p>
            The content on this website is not a substitute for professional advice. Users should consult
            qualified professionals for advice relevant to their specific situation.
          </p>

          <p>
            This website may contain links to third-party websites. These links are provided for convenience only.
            Online Guide does not endorse or take responsibility for the content, accuracy, or practices of these
            external sites.
          </p>

          <p>
            By using this website, you agree to this disclaimer and acknowledge that you understand its terms.
          </p>
        </section>

        <footer className="mt-8 border-t pt-4 text-xs text-gray-500">
          © {new Date().getFullYear()} Online Guide. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Disclaimer;
