import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-gray-200 py-10 mt-20 border-t border-indigo-700">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-xl font-semibold font-serif tracking-wider mb-2">
          “Art enables us to find ourselves and lose ourselves at the same time.” – Thomas Merton
        </h2>
        <div className="mt-6 space-x-6 text-sm md:text-base">
          <a
            href="#"
            className="hover:text-pink-400 transition duration-300 ease-in-out"
          >
            Privacy Policy
          </a>
          <span className="text-gray-500">|</span>
          <a
            href="#"
            className="hover:text-pink-400 transition duration-300 ease-in-out"
          >
            Terms of Service
          </a>
          <span className="text-gray-500">|</span>
          <a
            href="#"
            className="hover:text-pink-400 transition duration-300 ease-in-out"
          >
            Contact Us
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} ArtistryHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
