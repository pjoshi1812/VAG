import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <header className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 shadow-lg sticky top-0 z-50 backdrop-blur-md border-b border-purple-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold text-purple-700 tracking-wider font-serif">
          ArtistryHub 🎨
        </Link>
        <nav className="space-x-8 text-lg font-medium">
          {!user ? (
            <>
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
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="text-gray-800 hover:text-purple-600 transition duration-300 ease-in-out cursor-pointer"
            >
              Logout
            </button>
          )}

          <Link
            to="/gallery"
            className="text-gray-800 hover:text-purple-600 transition duration-300 ease-in-out"
          >
            Gallery
          </Link>

          {user && user.userType === 'artist' && (
            <Link
              to="/artistprofilepage"
              className="text-gray-800 hover:text-purple-600 transition duration-300 ease-in-out"
            >
              Profile
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
