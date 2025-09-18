// src/pages/Members.jsx
import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

// Import local images
import profile1 from "../assets/profile1.jpg";
import virat from "../assets/virat.webp";
import ambani from "../assets/ambani.webp";
import tmkc from "../assets/tmkc.webp";
import sk from "../assets/sk.webp";
import bhisnoi from "../assets/bhisnoi.jpg";
import jl from "../assets/jl.webp";
import modi from "../assets/modi.webp";
import ms from "../assets/ms.webp";
import rahul from "../assets/rahul.webp";

import dps from "../assets/dps.webp";
import school2 from "../assets/school2.webp";
import kiet from "../assets/kiet.webp";
import aktu from "../assets/aktu.png";
import gokul from "../assets/gokul.webp";
import society from "../assets/society.webp";
import cc from "../assets/cc.webp";
import ABC from "../assets/ABC.webp";
import N from "../assets/N.webp";
import google from "../assets/google.webp";

export default function Members() {
  const [searchTerm, setSearchTerm] = useState("");

  const members = [
    // 10 People
    { id: 1, name: "Aakash Kumar", role: "Student", type: "public", img: profile1, email: "aakash@example.com" },
    { id: 2, name: "Virat Kohli", role: "Sports ", type: "private", img: virat, email: "riya@example.com" },
    { id: 3, name: "Jetha lal", role: "Bussinesman", type: "public", img: jl, email: "rahul@example.com" },
    { id: 4, name: "A.T.R.Bhide", role: "Teacher", type: "public", img: tmkc, email: "neha@example.com" },
    { id: 5, name: "rahul ghandi", role: "Congres", type: "private", img: rahul, email: "vikram@example.com" },
    { id: 6, name: "Narendra modi", role: "BJP", type: "public", img: modi, email: "priya@example.com" },
    { id: 7, name: "Salman Khan", role: "Actor", type: "public", img: sk, email: "arjun@example.com" },
    { id: 8, name: "Bhisnoi", role: "Gangster", type: "private", img: bhisnoi, email: "sanya@example.com" },
    { id: 9, name: "MS Dhoni", role: "Farmer", type: "public", img: ms, email: "karan@example.com" },
    { id: 10, name: "Mukesh Ambani", role: "Bussinesman", type: "public", img: ambani, email: "anita@example.com" },

    // 10 Organizations
    { id: 11, name: "Delhi Public School", role: "School Admin", type: "private", img: dps, email: "dps@example.com" },
    { id: 12, name: "St. Xavier School", role: "School Admin", type: "public", img: school2, email: "xavier@example.com" },
    { id: 13, name: "KIET College", role: "College Admin", type: "public", img: kiet, email: "kiet@example.com" },
    { id: 14, name: "AKTU University", role: "College Admin", type: "public", img: aktu, email: "aktu@example.com" },
    { id: 15, name: "Gokuldham Society", role: "Society Admin", type: "public", img: gokul, email: "gokuldham@example.com" },
    { id: 16, name: "Shivaji Society", role: "Society Admin", type: "private", img: society, email: "shivaji@example.com" },
    { id: 17, name: "GOOGLE Delhi centre", role: "Office Admin", type: "public", img: google, email: "xyz@example.com" },
    { id: 18, name: "ABC Corp", role: "Office Admin", type: "private", img: ABC, email: "abc@example.com" },
    { id: 19, name: "Community Center", role: "Society Admin", type: "public", img: cc, email: "community@example.com" },
    { id: 20, name: "Neighborhood Watch", role: "Society Admin", type: "private", img: N, email: "watch@example.com" },
  ];

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">👥 Members</h1>
        <p className="text-gray-600 mt-2">View and connect with community members.</p>
        <input
          type="text"
          placeholder="Search members..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full max-w-sm"
        />
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMembers.map((member) => (
          <div key={member.id} className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition transform hover:scale-105 text-center">
            <img
              src={member.img || profile1}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-3"
            />
            <h3 className="font-bold text-lg">{member.name}</h3>
            {member.type === "public" ? (
              <>
                <p className="text-gray-500 text-sm">{member.role}</p>
                <p className="text-gray-400 text-xs flex items-center justify-center gap-1">
                  <FaEnvelope /> {member.email}
                </p>
              </>
            ) : (
              <p className="text-gray-500 text-sm italic">Private Member</p>
            )}
            <div className="mt-3 flex justify-center gap-2">
              <button className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition">
                Message
              </button>
              {member.type === "public" && (
                <button className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200 transition">
                  View Profile
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
}
