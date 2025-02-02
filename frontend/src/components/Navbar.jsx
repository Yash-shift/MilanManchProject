import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../images/LogoWebsite.gif";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    logout();
    navigate("/");
  };

  const renderAuthButtons = () => {
    if (user) {
      return (
        <div className="flex items-center space-x-4">
          <span className="text-amber-900">Welcome, {user.name}</span>
          <button
            onClick={handleSignOut}
            className="bg-amber-600 text-white px-2 py-2 rounded-md text-sm font-medium hover:bg-amber-700 transition-colors"
          >
            Sign Out
          </button>
        </div>
      );
    }

    return (
      <div className="space-x-2">
        <Link
          to="/signin"
          className="text-amber-900 hover:text-amber-600 px-2 py-2 rounded-md text-sm font-medium"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          className="bg-amber-600 text-white px-2 py-2 rounded-md text-sm font-medium hover:bg-amber-700 transition-colors"
        >
          Sign Up
        </Link>
      </div>
    );
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md  w-full z-50 border-b border-amber-100 shadow-md sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img
              className="h-16 w-16 text-amber-600  rounded-full"
              src={logo}
              alt="Milan Manch Logo"
            />
            <span className="ml-2 text-2xl font-bold text-amber-900">
              Milan Manch
            </span>
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-amber-900 hover:text-amber-600  px-3 py-2 rounded-md text-sm font-medium relative group"
              >
                Home
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 transition-all duration-700 group-hover:w-full"></span>
              </Link>
              <Link to="/services">
                <span
                  className="text-amber-900 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium relative group"
                >
                  Services
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 transition-all duration-700 group-hover:w-full"></span>
                </span>
              </Link>
              <Link
                to="/contact"
                className="text-amber-900 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium relative group"
              >
                Contact
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 transition-all duration-700 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
          {renderAuthButtons()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
