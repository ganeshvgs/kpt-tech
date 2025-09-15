import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">KPT Mangalore</h2>
          <p className="text-gray-200 leading-relaxed">
            Empowering students with knowledge, innovation, and leadership.  
            Join us in building the future through technology and teamwork.
          </p>
        </div>

        {/* Quick Links */}
       

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-amber-400">Follow Us</h3>
          <div className="flex space-x-6 text-2xl">
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">
  <FaFacebook />
</a>
<a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">
  <FaInstagram />
</a>
<a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">
  <FaTwitter />
</a>
<a href="https://linkedin.com/in/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">
  <FaLinkedin />
</a>

          </div>
        </div>
      </div>

      {/* Bottom Bar - now same bg */}
      <div className="border-t border-amber-600 text-gray-300 text-center py-4">
        <p>© {new Date().getFullYear()} KPT Mangalore. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
