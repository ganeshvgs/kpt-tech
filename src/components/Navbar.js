import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between relative">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="KPT Logo" 
            className="h-28 w-auto object-contain -my-8"  // 👈 bigger logo
          />
          <span className="text-2xl font-bold hover:text-accent transition">
            KPT Mangalore
          </span>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li><Link to="/" className="hover:text-accent transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-accent transition">About</Link></li>
          <li><Link to="/projects" className="hover:text-accent transition">Projects</Link></li>
          <li><Link to="/coordinator" className="hover:text-accent transition">Coordinator</Link></li>
          <li><Link to="/gallery" className="hover:text-accent transition">Gallery</Link></li>
        
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
