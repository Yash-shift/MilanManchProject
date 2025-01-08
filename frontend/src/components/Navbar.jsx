import React , {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Crown } from 'lucide-react';


// import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const[user,setUser]=useState(false)
//   const { user, signOut } = 
//   const navigate = useNavigate();

//   const handleSignOut = () => {
//     signOut();
//     navigate('/');
//   };

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Crown className="h-8 w-8 text-amber-600" />
            <span className="ml-2 text-2xl font-bold text-amber-900">Milan Manch</span>
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-amber-900 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/events" className="text-amber-900 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium">
                Events
              </Link>
              <Link to="/contact" className="text-amber-900 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-amber-900">Welcome, {user.name}</span>
                <button
                //   onClick={handleSignOut}
                  className="bg-amber-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-700 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="space-x-4">
                <Link
                  to="/signin"
                  className="text-amber-900 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-amber-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-700 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;