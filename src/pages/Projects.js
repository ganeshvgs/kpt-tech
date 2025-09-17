import React, { useState } from "react";
import { Wrench, Monitor, Wifi, HardDrive, Hammer, Zap } from "lucide-react";

const Projects = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Activities with image links
  const activities = [
    {
      icon: <Wrench className="w-10 h-10 text-green-500 mb-4" />,
      title: "Interlock Manufacturing",
      desc: "Designing and producing eco-friendly interlocking bricks for sustainable construction projects.",
      images: [
        "https://via.placeholder.com/600x400?text=Interlock+1",
        "https://via.placeholder.com/600x400?text=Interlock+2",
      ],
    },
    {
      icon: <Monitor className="w-10 h-10 text-blue-500 mb-4" />,
      title: "Computer Troubleshooting",
      desc: "Maintenance and repair of college PC systems, ensuring optimal performance.",
      images: [
        "https://github.com/ganeshvgs/images/blob/main/WhatsApp%20Image%202025-09-11%20at%2022.27.22_fa3075fe.jpg?raw=true",
        "https://github.com/ganeshvgs/images/blob/main/WhatsApp%20Image%202025-09-11%20at%2022.27.22_3ddc17e9.jpg?raw=true",
      ],
    },
    {
      icon: <Wifi className="w-10 h-10 text-purple-500 mb-4" />,
      title: "Network Connection Setup",
      desc: "Installing and configuring Ethernet infrastructure for seamless campus connectivity.",
      images: [
        "https://via.placeholder.com/600x400?text=Network+1",
        "https://via.placeholder.com/600x400?text=Network+2",
      ],
    },
    {
      icon: <HardDrive className="w-10 h-10 text-orange-500 mb-4" />,
      title: "Windows Installation & OS",
      desc: "System installation, configuration, and maintenance across college labs.",
      images: [
        "https://via.placeholder.com/600x400?text=Windows+1",
        "https://via.placeholder.com/600x400?text=Windows+2",
      ],
    },
    {
      icon: <Hammer className="w-10 h-10 text-yellow-600 mb-4" />,
      title: "Civil Plaster Work",
      desc: "Hands-on construction work including plastering, painting, and facility maintenance.",
      images: [
        "https://via.placeholder.com/600x400?text=Civil+1",
        "https://via.placeholder.com/600x400?text=Civil+2",
      ],
    },
    {
      icon: <Zap className="w-10 h-10 text-red-500 mb-4" />,
      title: "Electrical Maintenance",
      desc: "Electrical system installation, repair, and safety upgrades throughout campus.",
      images: [
        "https://via.placeholder.com/600x400?text=Electrical+1",
        "https://via.placeholder.com/600x400?text=Electrical+2",
      ],
    },
  ];

  const openModal = (images) => {
    setSelectedImages(images);
    setCurrentIndex(0);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImages([]);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === selectedImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? selectedImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* ================= Activities Section ================= */}
        <h2 className="text-3xl font-bold mb-4">
          Our Core <span className="text-yellow-600">Activities</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          From infrastructure development to technical support, our club engages in diverse
          activities that enhance both student skills and campus facilities.
        </p>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 mb-20">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-md text-left hover:shadow-lg transition"
            >
              {activity.icon}
              <h3 className="font-bold text-xl mb-2 text-[#800000]">
                {activity.title}
              </h3>
              <p className="text-gray-600 text-sm">{activity.desc}</p>
              <button
                onClick={() => openModal(activity.images)}
                className="mt-4 px-4 py-2 text-sm bg-[#800000] text-white rounded-lg hover:bg-[#a00000] transition"
              >
                View Images
              </button>
            </div>
          ))}
        </div>

        {/* ================= Projects Section ================= */}
        <h2 className="text-3xl font-bold mb-4">
  Our <span className="text-yellow-600">Projects</span>
</h2>
<p className="text-gray-600 max-w-2xl mx-auto mb-12">
  Showcasing innovative student-driven projects that bridge technical knowledge
  with real-world applications.
</p>

<div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
  {/* Project 1 */}
  <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
    <img
      src="https://github.com/ganeshvgs/images/blob/main/Screenshot%202025-09-11%20124554.png?raw=true"
      alt="Photo Podium"
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="font-bold text-xl mb-2 text-[#800000]">Photo Podium</h3>
      <p className="text-gray-600 text-sm">
        Construction of Open Stage and Photo Podium at KPT College Main Building Entrance.
      </p>
    </div>
  </div>

  {/* Project 2 */}
  <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
    <img
      src="https://github.com/ganeshvgs/images/blob/main/Screenshot%202025-09-15%20123539.png?raw=true"
      alt="Illuminated College Logo"
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="font-bold text-xl mb-2 text-[#800000]">Illuminated College Logo</h3>
      <p className="text-gray-600 text-sm">
        Installation of an Illuminated College Logo at KPT College Main Building Entrance.
      </p>
    </div>
  </div>

  {/* Project 3 */}
  <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
    <img
      src="https://github.com/ganeshvgs/images/blob/main/WhatsApp%20Image%202025-09-06%20at%2017.50.34_ce48482a.jpg?raw=true"
      alt="Pathway to Dignity"
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="font-bold text-xl mb-2 text-[#800000]">Pathway to Dignity</h3>
      <p className="text-gray-600 text-sm">
        This project aims to construct a safe pathway and proper drainage system to ensure easy access and hygienic surroundings for the girls’ washroom.
      </p>
    </div>
  </div>
</div>
      </div>

      {/* Popup Modal with Slider */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative bg-white p-6 rounded-xl max-w-3xl w-full flex flex-col items-center">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-xl"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedImages[currentIndex]}
              alt="Activity"
              className="rounded-lg shadow-md max-h-[70vh] object-contain"
            />

            {/* Controls */}
            <div className="flex justify-between w-full mt-4">
              <button
                onClick={prevImage}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
              >
                ◀ Prev
              </button>
              <button
                onClick={nextImage}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
              >
                Next ▶
              </button>
            </div>

            {/* Counter */}
            <p className="mt-2 text-sm text-gray-600">
              {currentIndex + 1} / {selectedImages.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
