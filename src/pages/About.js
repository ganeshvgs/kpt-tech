// src/pages/About.js
import React, { useState } from "react";
import logo from "../assets/logo.png";
import principalImg from "../assets/deepak.jpg"; // <-- make sure this image exists in assets folder
import { Lightbulb, Target } from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("vision"); // default tab

  return (
    <section className="relative max-w-6xl mx-auto py-12 px-6 text-center">
      {/* Background Logo (faint) */}
      <div
        className="absolute inset-0 flex justify-center items-center opacity-10"
        style={{ zIndex: 0 }}
      >
        <img
          src={logo}
          alt="Technical Club Logo"
          className="w-[400px] h-[400px] object-contain"
        />
      </div>

      {/* About Content */}
      <div className="relative z-10 space-y-6 mb-12">
        <h2 className="text-3xl font-bold text-[#800000]">About Us</h2>

        <p className="text-gray-700 text-lg leading-relaxed">
          The <span className="font-semibold">Technical Club of KPT Mangalore</span> 
          is a student-driven initiative that fosters innovation, creativity, and technical excellence. 
          It provides a platform for students to enhance practical skills, work on projects, 
          and stay updated with emerging technologies.
        </p>
      </div>

      {/* Principal's Message */}
      <div className="relative z-10 max-w-4xl mx-auto mb-12 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-[#800000] mb-6">
          Principal’s Message
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-6 text-left">
          {/* Principal Image */}
       <img
  src="https://gpt.karnataka.gov.in/kptmangalore/public/uploads/media_to_upload1756221132.jpg"
  alt="Principal of Karnataka Polytechnic Mangalore"
  className="w-40 h-40 rounded-xl object-cover shadow-md"
/>


          {/* Principal Message */}
          <p className="text-gray-700 text-lg leading-relaxed">
            I am proud to see our students take the lead in forming the
            Technical Club. This platform will encourage teamwork, innovation,
            and skill development beyond academics. I urge all students to
            participate actively and make the most of this opportunity.
            <br /><br />
            <span className="font-semibold">
              — Principal, Karnataka Polytechnic Mangalore
            </span>
          </p>
        </div>
      </div>

      {/* Vision & Mission Tabs */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <button
            type="button"
            onClick={() => setActiveTab("vision")}
            className={`px-6 py-2 rounded-lg font-medium flex items-center gap-2 cursor-pointer transition-colors duration-300 ${
              activeTab === "vision"
                ? "bg-[#800000] text-white shadow-md"
                : "bg-white text-gray-700 border hover:bg-gray-100"
            }`}
          >
            <Lightbulb className="w-5 h-5" />
            Vision
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("mission")}
            className={`px-6 py-2 rounded-lg font-medium flex items-center gap-2 cursor-pointer transition-colors duration-300 ${
              activeTab === "mission"
                ? "bg-[#800000] text-white shadow-md"
                : "bg-white text-gray-700 border hover:bg-gray-100"
            }`}
          >
            <Target className="w-5 h-5" />
            Mission
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white p-8 rounded-xl shadow-lg text-left transition-all duration-300">
          {activeTab === "vision" && (
            <>
              <h3 className="font-bold text-xl text-[#800000] flex items-center gap-2 mb-4">
                <Lightbulb className="w-6 h-6 text-yellow-600" />
                Vision
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                “To inspire and empower students of KPT to become innovative
                thinkers, skilled professionals, and leaders in technology,
                driving positive change in society.”
              </p>
            </>
          )}

          {activeTab === "mission" && (
            <>
              <h3 className="font-bold text-xl text-[#800000] flex items-center gap-2 mb-4">
                <Target className="w-6 h-6 text-yellow-600" />
                Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                “To provide a collaborative platform for students to explore
                emerging technologies, enhance practical skills through projects
                and workshops, and foster a culture of innovation, teamwork, and
                continuous learning.”
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
