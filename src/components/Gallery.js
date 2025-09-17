import React from "react";

const Gallery = () => {
  // Each set has a title and 3 images
  const sets = [
    {
      title: "Photo Podium & Stage Inauguration",
      images: [
        "https://github.com/ganeshvgs/images/blob/main/Screenshot%202025-09-11%20124332.png?raw=true",
        "https://github.com/ganeshvgs/images/blob/main/Screenshot%202025-09-11%20124554.png?raw=true",
        "https://github.com/ganeshvgs/images/blob/main/Screenshot%202025-09-11%20124616.png?raw=true",
      ],
    },
    {
      title: "Illuminated College Logo Unveiling",
      images: [
        "https://github.com/ganeshvgs/images/blob/main/Screenshot%202025-09-15%20123503.png?raw=true",
        "https://github.com/ganeshvgs/images/blob/main/Screenshot%202025-09-15%20123539.png?raw=true",
        "https://github.com/ganeshvgs/images/blob/main/Screenshot%202025-09-15%20123517.png?raw=true",
      ],
    },
    {
      title: "Pathway to Dignity Inauguration",
      images: [
        "https://github.com/ganeshvgs/images/blob/main/img1.jpg?raw=true",
        "https://github.com/ganeshvgs/images/blob/main/WhatsApp%20Image%202025-09-06%20at%2017.50.34_ce48482a.jpg?raw=true",
        "https://github.com/ganeshvgs/images/blob/main/WhatsApp%20Image%202025-09-06%20at%2017.50.45_6618e235.jpg?raw=true",
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-primary mb-12">
        Gallery
      </h2>

      {sets.map((set, index) => (
        <div key={index} className="mb-12">
          {/* Title for each set */}
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            {set.title}
          </h3>

          {/* 3 images in a row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {set.images.map((url, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition duration-300 bg-white"
              >
                <img
                  src={url}
                  alt={`Gallery ${index + 1}-${i + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Gallery;
