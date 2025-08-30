// src/pages/Profile.jsx
import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";
import profilePic from "../assets/profile1.jpg";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("About");

  const member = {
    name: "Aakash Kumar",
    role: "Student",
    location: "Ghaziabad, India",
    ranking: 8.6,
    email: "aakash.2428cse2420@kiet.edu",
    phone: "+91 7505278027",
    github: "https://github.com/Aakashkumargit",
    linkedin: "https://linkedin.com/in/aakash-kumar",
    birthday: "June 5, 2002",
    gender: "Male",
    work: [
      { title: "KIET Group Of Institutions", type: "Primary", address: "Muradnagar Ghaziabad" },
      { title: "Frontent Developer ", type: "Secondary", address: "Btech (cse) kiet'28 " },
    ],
    skills: ["DSA : c++ ","Backend : java ,Rust ", "UI/UX : Javascript, React", "AI (LLM)"],
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8 grid md:grid-cols-3 gap-8">
        
        {/* LEFT SIDE – Photo + Work + Skills */}
        <div className="space-y-6">
          <div className="w-full">
            <img
              src={profilePic}
              alt={member.name}
              className="rounded-xl w-full object-cover"
            />
          </div>

          {/* Work */}
          <div>
            <h3 className="text-gray-700 font-semibold mb-3">Work</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {member.work.map((job, idx) => (
                <li key={idx}>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-800">{job.title}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded ${
                        job.type === "Primary"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {job.type}
                    </span>
                  </div>
                  <p className="text-xs">{job.address}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-gray-700 font-semibold mb-3">Skills</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              {member.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE – Info */}
        <div className="md:col-span-2 space-y-6">
          {/* Name + Role + Location */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{member.name}</h1>
            <p className="text-blue-600">{member.role}</p>
            <p className="flex items-center gap-1 text-sm text-gray-500 mt-1">
              <FaMapMarkerAlt className="text-gray-400" /> {member.location}
            </p>
          </div>

          {/* Ranking */}
          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-medium">{member.ranking}</span>
            <div className="flex text-blue-500">
              {Array(4)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
              <FaStar className="text-gray-300" />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 text-sm">
            <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
              Send Message
            </button>
            <button className="px-4 py-2 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">
              Contacts
            </button>
            <button className="px-4 py-2 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">
              Report User
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b text-sm gap-6">
            {["Timeline", "About"].map((tab) => (
              <button
                key={tab}
                className={`pb-2 ${
                  activeTab === tab
                    ? "border-b-2 border-blue-500 text-blue-600 font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "About" && (
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              {/* Contact Info */}
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">
                  Contact Information
                </h3>
                <p className="flex items-center gap-2">
                  <FaPhoneAlt className="text-gray-400" /> {member.phone}
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-gray-400" /> {member.email}
                </p>
                <p className="flex items-center gap-2">
                  <FaGithub className="text-gray-400" />{" "}
                  <a
                    href={member.github}
                    target="_blank"
                    className="hover:text-gray-800"
                  >
                    {member.github}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <FaLinkedin className="text-gray-400" />{" "}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    className="hover:text-blue-700"
                  >
                    {member.linkedin}
                  </a>
                </p>
              </div>

              {/* Basic Info */}
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">
                  Basic Information
                </h3>
                <p>Birthday: {member.birthday}</p>
                <p>Gender: {member.gender}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
