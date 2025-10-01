import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* About Section */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">About</h2>
                    <p className="text-sm leading-relaxed">
                        "Online Guide is an educational and informational platform where users can learn about various topics and get proper guidelines."
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:text-white">Home</a></li>
                        <li><a href="/articles" className="hover:text-white">Articles</a></li>
                        <li><a href="/about" className="hover:text-white">About Us</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Policy */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">Policy</h2>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
                        <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
                        <li><a href="/disclaimer" className="hover:text-white">Disclaimer</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
                    <p className="text-sm">Email: support@onlineguide.com</p>
                    <p className="text-sm">Phone: +880 1234-567890</p>
                    <p className="text-sm">Dhaka, Bangladesh</p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Online Guide. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
