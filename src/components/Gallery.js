import React from "react";

const Gallery = () => {
  // Example web image URLs
  const images = [
    "https://raw.githubusercontent.com/ganeshvgs/images/refs/heads/main/Screenshot%202025-09-11%20124456.png",
    "",
    "",
    "https://raw.githubusercontent.com/ganeshvgs/images/refs/heads/main/Screenshot%202025-09-11%20124456.png",
    "",
    "https://github.com/ganeshvgs/images/blob/main/WhatsApp%20Image%202025-09-06%20at%2017.50.45_6618e235.jpg?raw=true",
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">
        Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((url, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
          >
            <img
              src={url}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
