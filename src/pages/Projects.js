import React from "react";
import { Wrench, Monitor, Wifi, HardDrive, Hammer, Zap, Headphones } from "lucide-react";

const Projects = () => {
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
          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-md text-left hover:shadow-lg transition">
            <Wrench className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="font-bold text-xl mb-2 text-[#800000]">Interlock Manufacturing</h3>
            <p className="text-gray-600 text-sm">
              Designing and producing eco-friendly interlocking bricks for sustainable
              construction projects.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-md text-left hover:shadow-lg transition">
            <Monitor className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="font-bold text-xl mb-2 text-[#800000]">Computer Troubleshooting</h3>
            <p className="text-gray-600 text-sm">
              Maintenance and repair of college PC systems, ensuring optimal performance.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-md text-left hover:shadow-lg transition">
            <Wifi className="w-10 h-10 text-purple-500 mb-4" />
            <h3 className="font-bold text-xl mb-2 text-[#800000]">Network Connection Setup</h3>
            <p className="text-gray-600 text-sm">
              Installing and configuring Ethernet infrastructure for seamless campus
              connectivity.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-md text-left hover:shadow-lg transition">
            <HardDrive className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="font-bold text-xl mb-2 text-[#800000]">Windows Installation & OS</h3>
            <p className="text-gray-600 text-sm">
              System installation, configuration, and maintenance across college labs.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-md text-left hover:shadow-lg transition">
            <Hammer className="w-10 h-10 text-yellow-600 mb-4" />
            <h3 className="font-bold text-xl mb-2 text-[#800000]">Civil Plaster Work</h3>
            <p className="text-gray-600 text-sm">
              Hands-on construction work including plastering, painting, and facility
              maintenance.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-md text-left hover:shadow-lg transition">
            <Zap className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="font-bold text-xl mb-2 text-[#800000]">Electrical Maintenance</h3>
            <p className="text-gray-600 text-sm">
              Electrical system installation, repair, and safety upgrades throughout campus.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-md text-left hover:shadow-lg transition md:col-span-3">
            <Headphones className="w-10 h-10 text-teal-500 mb-4" />
            <h3 className="font-bold text-xl mb-2 text-[#800000]">Technical Support Services</h3>
            <p className="text-gray-600 text-sm">
              Providing specialized technical assistance to other college departments and
              initiatives.
            </p>
          </div>
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
          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2 text-[#800000]">Smart Irrigation System</h3>
            <p className="text-gray-600 text-sm">
              IoT-based water management system for efficient farming.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2 text-[#800000]">Mini CNC Machine</h3>
            <p className="text-gray-600 text-sm">
              Student-built CNC machine for precision cutting and design.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2 text-[#800000]">Campus Power Monitoring</h3>
            <p className="text-gray-600 text-sm">
              A real-time monitoring system to track and optimize campus electricity usage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
