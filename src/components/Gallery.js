import React from "react";

const Gallery = () => {
  // 9 images with titles (3 sets of 3)
  const images = [
    {
      url: "https://raw.githubusercontent.com/ganeshvgs/images/refs/heads/main/Screenshot%202025-09-11%20124456.png",
      title: "Event 1",
    },
    {
      url: "https://raw.githubusercontent.com/ganeshvgs/images/refs/heads/main/Screenshot%202025-09-11%20124456.png",
      title: "Event 2",
    },
    {
      url: "https://github.com/ganeshvgs/images/blob/main/WhatsApp%20Image%202025-09-06%20at%2017.50.45_6618e235.jpg?raw=true",
      title: "Event 3",
    },
    {
      url: "https://raw.githubusercontent.com/ganeshvgs/images/refs/heads/main/Screenshot%202025-09-11%20124456.png",
      title: "Event 4",
    },
    {
      url: "https://raw.githubusercontent.com/ganeshvgs/images/refs/heads/main/Screenshot%202025-09-11%20124456.png",
      title: "Event 5",
    },
    {
      url: "https://github.com/ganeshvgs/images/blob/main/WhatsApp%20Image%202025-09-06%20at%2017.50.45_6618e235.jpg?raw=true",
      title: "Event 6",
    },
    {
      url: "https://raw.githubusercontent.com/ganeshvgs/images/refs/heads/main/Screenshot%202025-09-11%20124456.png",
      title: "Event 7",
    },
    {
      url: "https://raw.githubusercontent.com/ganeshvgs/images/refs/heads/main/Screenshot%202025-09-11%20124456.png",
      title: "Event 8",
    },
    {
      url: "https://github.com/ganeshvgs/images/blob/main/WhatsApp%20Image%202025-09-06%20at%2017.50.45_6618e235.jpg?raw=true",
      title: "Event 9",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-primary mb-12">
        Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition duration-300 bg-white"
          >
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
