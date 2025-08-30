import React, { useState } from "react";

// Import notice images
import aktu from "../assets/aktu.png";
import birthday from "../assets/birthday.jpg";
import kiet from "../assets/kiet.webp";
import lost from "../assets/lost.jpg";
import office from "../assets/office.webp";
import powercut from "../assets/powercut.jpg";
import school from "../assets/school.webp";
import society from "../assets/society.webp";

import fest from "../assets/fest.png";
import road from "../assets/road.png";
import india from "../assets/india.png";
import cm from "../assets/cm.png";
import dm from "../assets/dm.png";
import pm from "../assets/pm.png";
import sports from "../assets/sports.png";
import party from "../assets/party.png";
import weather from "../assets/weather.png";
import ganesh from "../assets/ganesh.png";
import convocation from "../assets/convocation.png";
import blood from "../assets/blood.png";

// Categories for filtering
const categories = [
  "All",
  "College",
  "School",
  "Society",
  "Office",
  "Family",
  "Emergency",
  "Government",
];

const noticesData = [
  {
    id: 1,
    title: "AKTU Exam Schedule Released",
    source: "AKTU",
    summary: "Check your upcoming semester exam dates.",
    deadline: "2025-09-10",
    image: aktu,
    category: "College",
    important: true,
    pdf: "/pdfs/aktu-exam.pdf",
    link: "https://aktu.ac.in",
  },
  {
    id: 2,
    title: "KIET Mid Semester Attendance Policy",
    source: "KIET College",
    summary: "Students must have 75% attendance to appear in exams.",
    deadline: "2025-09-12",
    image: kiet,
    category: "College",
    important: true,
    pdf: "/pdfs/kiet-policy.pdf",
    link: "https://kiet.edu",
  },
  {
    id: 3,
    title: "Office Meeting Scheduled",
    source: "Company Office",
    summary: "All staff must attend the Monday morning meeting.",
    deadline: "2025-08-25",
    image: office,
    category: "Office",
    important: false,
    pdf: "/pdfs/office-meeting.pdf",
    link: "https://company.com",
  },
  {
    id: 4,
    title: "Society Maintenance Work",
    source: "Gokuldham Society",
    summary: "Water supply interruption due to maintenance work.",
    deadline: "2025-08-26",
    image: society,
    category: "Society",
    important: false,
    pdf: "/pdfs/society-maintenance.pdf",
    link: "#",
  },
  {
    id: 5,
    title: "Power Cut Notification",
    source: "Local Electricity Board",
    summary: "Power cut on Sunday for 4 hours. Important!",
    deadline: "2025-08-27",
    image: powercut,
    category: "Emergency",
    important: true,
    pdf: "/pdfs/powercut.pdf",
    link: "#",
  },
  {
    id: 6,
    title: "School PTM Meeting",
    source: "Delhi Public School",
    summary: "Parent Teacher Meeting scheduled for next Friday.",
    deadline: "2025-08-28",
    image: school,
    category: "School",
    important: false,
    pdf: "/pdfs/ptm.pdf",
    link: "#",
  },
  {
    id: 7,
    title: "Lost & Found",
    source: "Community Board",
    summary: "Lost wallet near park. Contact immediately if found.",
    deadline: "2025-08-24",
    image: lost,
    category: "Family",
    important: true,
    pdf: "/pdfs/lost.pdf",
    link: "#",
  },
  {
    id: 8,
    title: "Birthday Party Invitation",
    source: "Friends & Family",
    summary: "You are invited to celebrate Arjun's birthday.",
    deadline: "2025-09-05",
    image: birthday,
    category: "Family",
    important: false,
    pdf: "/pdfs/birthday.pdf",
    link: "#",
  },
  {
    id: 9,
    title: "College Fest Announcement",
    source: "KIET Cultural Club",
    summary: "Annual Fest registrations open now.",
    deadline: "2025-09-15 23:59",
    image: fest,
    category: "College",
    important: false,
    pdf: "/pdfs/fest.pdf",
    link: "#",
  },
  {
    id: 10,
    title: "City Road Construction Alert",
    source: "Ghaziabad Nagar Nigam",
    summary: "New flyover construction starting 2nd Sept, expect delays.",
    deadline: "2025-09-02 08:00",
    image: road,
    category: "Emergency",
    important: true,
    pdf: "/pdfs/road.pdf",
    link: "#",
  },
  {
    id: 11,
    title: "National Holiday Declared",
    source: "Govt. of India",
    summary: "2nd October Gandhi Jayanti is a public holiday.",
    deadline: "2025-10-02 23:59",
    image: india,
    category: "Emergency",
    important: false,
    pdf: "/pdfs/holiday.pdf",
    link: "#",
  },
  {
    id: 12,
    title: "State CM New Education Scheme",
    source: "UP CM Office",
    summary: "New scholarship scheme launched for meritorious students.",
    deadline: "2025-09-20 23:59",
    image: cm,
    category: "College",
    important: false,
    pdf: "/pdfs/cm-scheme.pdf",
    link: "#",
  },
  {
    id: 13,
    title: "District Magistrate Order",
    source: "Meerut DM",
    summary: "Market closure on 4th Sept due to security reasons.",
    deadline: "2025-09-04 23:59",
    image: dm,
    category: "Emergency",
    important: true,
    pdf: "/pdfs/dm-order.pdf",
    link: "#",
  },
  {
    id: 14,
    title: "PM Modi Announces New Digital Scheme",
    source: "PMO India",
    summary: "Digital India 2.0 initiative launched nationwide.",
    deadline: "2025-09-30 23:59",
    image: pm,
    category: "Government",
    important: false,
    pdf: "/pdfs/pm-scheme.pdf",
    link: "#",
  },
  {
    id: 15,
    title: "Sports Meet",
    source: "City Sports Council",
    summary: "Inter-college football tournament begins 12th Sept.",
    deadline: "2025-09-12 09:00",
    image: sports,
    category: "College",
    important: false,
    pdf: "/pdfs/sports.pdf",
    link: "#",
  },
  {
    id: 16,
    title: "Party Invitation",
    source: "College Friends",
    summary: "Farewell party at Café 21, 9th Sept evening.",
    deadline: "2025-09-09 20:00",
    image: party,
    category: "Family",
    important: false,
    pdf: "/pdfs/party.pdf",
    link: "#",
  },
  {
    id: 17,
    title: "Emergency Weather Alert",
    source: "IMD",
    summary: "Heavy rainfall warning issued for UP region.",
    deadline: "2025-09-03 12:00",
    image: weather,
    category: "Emergency",
    important: true,
    pdf: "/pdfs/weather.pdf",
    link: "#",
  },
  {
    id: 18,
    title: "Society Ganesh Chaturthi Function",
    source: "Gokuldham Society",
    summary: "Cultural function on 18th Sept at clubhouse.",
    deadline: "2025-09-18 22:00",
    image: ganesh,
    category: "Society",
    important: false,
    pdf: "/pdfs/ganesh-func.pdf",
    link: "#",
  },
  {
    id: 19,
    title: "University Convocation Ceremony",
    source: "AKTU",
    summary: "Convocation on 25th Sept for 2024 batch.",
    deadline: "2025-09-25 10:00",
    image: convocation,
    category: "College",
    important: false,
    pdf: "/pdfs/convocation.pdf",
    link: "#",
  },
  {
    id: 20,
    title: "Blood Donation Camp",
    source: "Red Cross Society",
    summary: "Camp at City Hall on 14th Sept, 9 AM onwards.",
    deadline: "2025-09-14 09:00",
    image: blood,
    category: "Society",
    important: true,
    pdf: "/pdfs/blood.pdf",
    link: "#",
  },
];


export default function Notices() {
  const [readStatus, setReadStatus] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleRead = (id) => {
    setReadStatus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleShare = (link) => {
    navigator.clipboard.writeText(link);
    alert("🔗 Notice link copied to clipboard!");
  };

  const filteredNotices =
    selectedCategory === "All"
      ? noticesData
      : noticesData.filter((n) => n.category === selectedCategory);

  return (
    <div className="px-4 sm:px-10 py-6">
      <h1 className="text-3xl font-bold mb-2">📌 Notices</h1>
      <p className="text-slate-600 mb-4">All community notices at a glance</p>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1 rounded-full border ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-white text-slate-700 hover:bg-blue-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Notices Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNotices.map((notice) => (
          <div
            key={notice.id}
            className={`p-4 border rounded-xl shadow bg-white ${
              notice.important ? "border-red-500 bg-red-50" : ""
            }`}
          >
            <img
              src={notice.image}
              alt={notice.title}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h3 className="font-bold text-lg">{notice.title}</h3>
            <p className="text-sm text-slate-600">{notice.source}</p>
            <p className="text-sm mt-1">{notice.summary}</p>
            <p className="text-xs text-slate-500 mt-1">
              Deadline: {notice.deadline}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2 mt-3">
              <button
                onClick={() => toggleRead(notice.id)}
                className={`px-2 py-1 text-xs rounded ${
                  readStatus[notice.id]
                    ? "bg-green-200 text-green-800"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {readStatus[notice.id] ? "Read" : "Unread"}
              </button>

              <a
                href={notice.pdf}
                download
                className="px-2 py-1 bg-blue-200 text-blue-800 text-xs rounded hover:bg-blue-300"
              >
                📥 Download
              </a>

              <button
                onClick={() => handleShare(notice.link)}
                className="px-2 py-1 bg-purple-200 text-purple-800 text-xs rounded hover:bg-purple-300"
              >
                🔗 Share
              </button>

              <div className="relative group">
                <button className="px-2 py-1 bg-yellow-200 text-yellow-800 text-xs rounded">
                  😀 React
                </button>
                <div className="absolute hidden group-hover:flex flex-col bg-white border p-2 rounded shadow top-8 space-y-1 z-10">
                  <span className="cursor-pointer">✅ Done</span>
                  <span className="cursor-pointer">❌ Not Done</span>
                  <span className="cursor-pointer">❤️ Love</span>
                  <span className="cursor-pointer">🤔 Confused</span>
                  <span className="cursor-pointer">⚠️ Alert</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
