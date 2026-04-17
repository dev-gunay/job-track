import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-0">
      
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Job Tracker. All rights reserved.
        </p>

        <div className="flex gap-7 mt-3 md:mt-10">
          <a href="#" className="text-gray-500 hover:text-gray-800 text-sm">
            Privacy
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-800 text-sm">
            Terms
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-800 text-sm">
            Contact
          </a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;