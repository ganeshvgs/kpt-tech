// Top of your file
import React from "react";
import {
  User,
  GraduationCap,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  ClipboardList,
} from "lucide-react";
import deepakSir from "../assets/deepak.jpg"; // adjust path as per your folder structure

const Coordinator = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-4">
          Technical Club <span className="text-yellow-600">Coordinator</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Profile Card */}
          <div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center md:col-span-1">
            {/* Avatar with image */}
            <img
              src={deepakSir}
              alt="Prof. Deepak Talekar"
              className="w-40 h-345 rounded-full object-cover mb-5 shadow-md"
            />

            <h3 className="font-bold text-xl text-[#800000]">
              Prof. Deepak Talekar
            </h3>
            <p className="text-yellow-600 mb-2">
              Head of Civil Department & Technical Club Coordinator
            </p>
            <p className="text-gray-500 mb-2">
              Karnataka (Govt.) Polytechnic, Mangalore
            </p>


            {/* Details */}
            <div className="space-y-3 text-sm text-gray-600 w-full text-left">
              <p className="flex items-center gap-2">
                <User className="w-5 h-5 text-yellow-600" /> Head of Civil Department
              </p>
              <p className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-yellow-600" /> 10+ Years in Technical Education
              </p>
              <p className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-yellow-600" /> Expert in Civil Engineering & Project Management
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-2 space-y-2 text-sm text-gray-600 w-full text-left">
              
              <p className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-yellow-600" /> Civil Department, KPT Mangalore
              </p>
            </div>

            {/* Button */}
           
          </div>

          {/* Right Side Info */}
          <div className="md:col-span-2 space-y-6">
            {/* Vision */}
            <div className="bg-white p-6 rounded-xl shadow-md text-left">
              <h3 className="font-bold text-lg text-[#800000] flex items-center gap-2 mb-12">
                <ClipboardList className="w-5 h-5 text-yellow-600" /> Vision & Leadership
              </h3>
              <p className="text-gray-600 text-sm">
                "Our technical club serves as a bridge between academic theory and practical industry
                requirements. I believe in empowering students with hands-on experience that
                prepares them for real-world challenges while fostering innovation and collaborative
                problem-solving skills."
              </p>
            </div>

            {/* Responsibilities */}
            <div className="bg-white p-6 rounded-xl shadow-md text-left">
              <h3 className="font-bold text-lg text-[#800000] flex items-center gap-2 mb-6">
                <ClipboardList className="w-5 h-5 text-yellow-600" /> Key Responsibilities
              </h3>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                <li>Overseeing technical club operations and strategic planning</li>
                <li>Mentoring student projects and providing technical guidance</li>
                <li>Coordinating with industry partners for real-world project opportunities</li>
                <li>Ensuring safety protocols and quality standards in all activities</li>
                <li>Facilitating skill development workshops and training sessions</li>
              </ul>
            </div>

            {/* Academic Excellence */}
            <div className="bg-white p-6 rounded-xl shadow-md text-left grid sm:grid-cols-3 gap-4">
              <div>
                <h4 className="font-bold text-[#800000]">Department Leadership</h4>
                <p className="text-yellow-600 font-semibold">5+ Years</p>
              </div>
              <div>
                <h4 className="font-bold text-[#800000]">Technical Projects Guided</h4>
                <p className="text-yellow-600 font-semibold">50+ Projects</p>
              </div>
              <div>
                <h4 className="font-bold text-[#800000]">Student Mentorship</h4>
                <p className="text-yellow-600 font-semibold">200+ Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coordinator;
