// src/components/Hero.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const images = [
    "https://gpt.karnataka.gov.in/kptmangalore/public/uploads/media_to_upload1754900896.jpg",
    "https://raw.githubusercontent.com/ganeshvgs/images/refs/heads/main/Screenshot%202025-09-11%20124616.png",
    "https://raw.githubusercontent.com/ganeshvgs/images/refs/heads/main/WhatsApp%20Image%202025-09-06%20at%2017.50.45_6618e235.jpg",
    "https://raw.githubusercontent.com/ganeshvgs/images/refs/heads/main/Screenshot%202025-09-11%20124332.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative bg-cover bg-center text-white min-h-[85vh] flex items-center justify-center text-center transition-all duration-[4000ms]"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 hover:scale-105 transform transition">
          Welcome to <span className="text-accent">Technical Club</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-200">
          Empowering students with knowledge, innovation, and skills.
        </p>

        <div className="flex justify-center gap-6">
          <Link
            to="/projects"
            className="bg-accent text-black px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-200 hover:scale-105 transition transform"
          >
             Explore Projects
          </Link>
          <Link
            to="/coordinator"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-secondary hover:scale-105 transition transform"
          >
             Meet Coordinator
          </Link>
        </div>
      </div>

      {/* Square Popup Banner in corner */}
  {showPopup && (
  <div className="absolute top-6 right-6 z-50">
    <div className="bg-primary text-white rounded-lg shadow-lg w-40 p-3 flex flex-col items-center gap-2">
      <p className="text-xs font-semibold text-center">Visit our college website</p>

      <a
        href="https://gpt.karnataka.gov.in/kptmangalore/public/en"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-secondary text-white px-2 py-1 rounded text-xs text-center hover:bg-primary"
      >
        Open Website
      </a>

      <button
        onClick={() => setShowPopup(false)}
        className="text-[10px] underline hover:text-gray-300"
      >
        Close
      </button>
    </div>
  </div>
)}

    </section>
  );
};

export default Hero;
