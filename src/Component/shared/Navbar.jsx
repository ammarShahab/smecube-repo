import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const navItems = ["হোম", "সার্ভিস", "প্রাইসিং", "টুলস", "যোগাযোগ"];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <section className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center transform rotate-45">
              <span className="text-white font-bold text-xl transform -rotate-45">
                !
              </span>
            </div>
            <span className="text-2xl font-bold">
              <span className="text-red-500">sme</span>
              <span className="text-gray-800">cube</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`text-gray-700 hover:text-red-500 transition-colors font-medium ${
                  index === 0
                    ? "text-red-500 border-b-2 border-red-500 pb-1"
                    : ""
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium">
            রেজিস্ট্রেশন
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block text-gray-700 hover:text-red-500 transition-colors font-medium py-2"
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium">
              রেজিস্ট্রেশন
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
