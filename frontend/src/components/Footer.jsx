import React from "react";
import { Crown, Facebook, Instagram, Twitter } from "lucide-react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../images/LogoWebsite.gif";
const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-100 lg:mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              {/* <Crown className="h-8 w-8" /> */}
              <img
                className="h-20 w-20 text-amber-600"
                src={logo}
                alt="Milan Manch Logo"
              />
              <span className="ml-2 text-2xl font-bold">Milan Manch</span>
            </div>
            <p className="text-amber-200">
              Dream it, plan it, live it. Our team is dedicated to turning your ideas into extraordinary events you’ll cherish forever.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {/* <li><a href="/aboutus" className="hover:text-white transition-colors">About Us</a></li> */}
              <li>
                <AnchorLink
                  href="#aboutus"
                  className="hover:text-white transition-colors relative group"
                >
                  About Us
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-700 group-hover:w-full"></span>
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href="#services"
                  className="hover:text-white transition-colors relative group"
                >
                  Services
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-700 group-hover:w-full"></span>
                </AnchorLink>
              </li>
              {/* <li><a href="#services" className="hover:text-white transition-colors">Services</a></li> */}
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors relative group"
                >
                  Gallery
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-700 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors relative group"
                >
                  Contact
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-700 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>Your Address</li>
              <li>Noida, Uttar Pradesh</li>
              <li>Email: manchmilan@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-amber-800 text-center">
          <p>
            &copy; {new Date().getFullYear()} Milan Manch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
