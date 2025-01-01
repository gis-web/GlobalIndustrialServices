import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-12">
          {/* Company Logo */}
          <div className="flex items-center justify-start sm:w-1/4">
            <img src={logo} alt="Company Logo" className="h-32 w-auto" />
          </div>

          {/* Company Info and CTA */}
          <div className="flex flex-col sm:flex-row sm:w-3/4 gap-12 sm:gap-20 justify-start">
            {/* Company Info */}
            <div className="flex flex-col items-center sm:items-start">
              <p className="text-lg font-semibold text-yellow-500">Global Industrial Services</p>
              <p className="text-sm mt-2">SF-203, Siddhart Annexe 2, Sama Savli Road, Vemali, Vadodara, Gujarat, 390008.</p>
              <p className="text-sm">Phone: +91-9016728819, +91-9664873092  </p>
              <p className="text-sm">Email: info.globalindustrialservices@gmail.com</p>
            </div>

            {/* Call to Action Section */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Ready to Get Started?</h3>
              <p className="mb-4 text-sm">Reach out to us today and let’s work together on your next project!</p>
              <a
                href="/contact"
                className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm mt-12 border-t border-gray-600 pt-4">
          <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
