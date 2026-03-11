import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-blue-100 border-t border-blue-200 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">

        {/* App Name */}
        <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
          User Management App
        </h2>

        {/* Links */}
        <div className="flex gap-4 sm:gap-6 text-sm sm:text-base text-gray-600">
          <span className="hover:text-blue-600 cursor-pointer transition">
            Privacy
          </span>
          <span className="hover:text-blue-600 cursor-pointer transition">
            Terms
          </span>
          <span className="hover:text-blue-600 cursor-pointer transition">
            Support
          </span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;