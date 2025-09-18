import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaShareAlt, FaFileDownload } from "react-icons/fa";

// Import notice images
import aktu from "../assets/aktu.png";
import kiet from "../assets/kiet.webp";
import office from "../assets/office.webp";
// Add other notice images as needed

export default function Notices() {
  const [readStatus, setReadStatus] = useState({});

  const toggleRead = (id) =>
    setReadStatus((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleShare = (notice) => {
    navigator.clipboard.writeText(`${notice.title} - ${notice.summary}`);
    alert("Notice details copied!");
  };

  const handleDownload = (notice) => {
    const element = document.createElement("a");
    const file = new Blob(
      [
        `Notice: ${notice.title}\nSource: ${notice.source}\nSummary: ${notice.summary}\nDeadline: ${new Date(
          notice.deadline
        ).toLocaleString()}`,
      ],
      { type: "text/plain" }
    );
    element.href = URL.createObjectURL(file);
    element.download = `${notice.title}.txt`;
    document.body.appendChild(element);
    element.click();
  };

  const notices = [
    {
      id: 1,
      title: "AKTU Exam Schedule Released",
      source: "AKTU",
      summary: "Official datesheet for semester exams released.",
      img: aktu,
      important: true,
      deadline: "2025-09-05 23:59",
    },
    {
      id: 2,
      title: "KIET Mid Semester Exam Attendance Policy",
      source: "KIET College",
      summary: "75% attendance required for mid-sem exams.",
      img: kiet,
      deadline: "2025-09-10 17:00",
    },
    {
      id: 3,
      title: "Office Meeting Scheduled",
      source: "XYZ Pvt Ltd",
      summary: "Department heads meeting on Monday, 10 AM.",
      img: office,
      deadline: "2025-09-02 10:00",
    },
    // Add more notices as needed
  ];

  return (
    <section className="px-6 py-10 bg-gray-50 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
        📢 Latest Notices
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {notices
          .sort((a, b) =>
            b.important === a.important ? 0 : b.important ? 1 : -1
          )
          .map((notice) => (
            <motion.div
              key={notice.id}
              onClick={() => toggleRead(notice.id)}
              className={`p-4 rounded-xl shadow-md border cursor-pointer flex flex-col h-[300px] transition hover:scale-105 ${
                notice.important
                  ? "border-red-500 bg-red-50"
                  : readStatus[notice.id]
                  ? "border-gray-300 bg-gray-100"
                  : "border-gray-200 bg-white"
              }`}
            >
              <img
                src={notice.img}
                alt={notice.title}
                className="w-full h-24 object-cover rounded-lg mb-2"
              />
              <h3 className="font-bold text-sm line-clamp-1">{notice.title}</h3>
              <p className="text-xs text-gray-500">From: {notice.source}</p>
              <p className="text-xs text-slate-600 line-clamp-2">{notice.summary}</p>
              <p className="text-[11px] text-gray-400 mt-1">
                ⏳ {new Date(notice.deadline).toLocaleString()}
              </p>

              {/* Buttons */}
              <div className="flex gap-1 mt-auto pt-2 text-xs">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShare(notice);
                  }}
                  className="px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 flex items-center gap-1"
                >
                  <FaShareAlt /> Share
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload(notice);
                  }}
                  className="px-2 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 flex items-center gap-1"
                >
                  <FaFileDownload /> PDF
                </button>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
}
