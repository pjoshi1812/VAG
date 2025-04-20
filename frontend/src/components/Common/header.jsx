import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 shadow-lg sticky top-0 z-50 backdrop-blur-md border-b border-purple-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold text-purple-700 tracking-wider font-serif">
          ArtistryHub 🎨
        </Link>
        <nav className="space-x-8 text-lg font-medium">
          <Link
            to="/about"
            className="text-gray-800 hover:text-purple-600 transition duration-300 ease-in-out"
          >
            About
          </Link>

          <Link
            to="/login"
            className="text-gray-800 hover:text-purple-600 transition duration-300 ease-in-out"
          >
            Login
          </Link>

          <Link
            to="/registration"
            className="text-gray-800 hover:text-purple-600 transition duration-300 ease-in-out"
          >
            Register
          </Link>

          <Link
            to="/gallery"
            className="text-gray-800 hover:text-purple-600 transition duration-300 ease-in-out"
          >
            Gallery
          </Link>

          <Link
            to="/contact"
            className="text-gray-800 hover:text-purple-600 transition duration-300 ease-in-out"
          >
            Contact
          </Link>

          {/* Add the Profile link */}
          <Link
            to="/artistprofilepage"
            className="text-gray-800 hover:text-purple-600 transition duration-300 ease-in-out"
          >
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
