import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaShareAlt,
  FaFileDownload,
} from "react-icons/fa";
import hero from "../assets/hero.png";
import aktu from "../assets/aktu.png";
import kiet from "../assets/kiet.webp";
import office from "../assets/office.webp";
import society from "../assets/society.webp";
import powercut from "../assets/powercut.jpg";
import school from "../assets/school.webp";
import lost from "../assets/lost.jpg";
import qr from "../assets/qr.png";


import family from "../assets/family.png";
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

// ---- Why Use It GIFs (local) ----
import gifUpdates from "../assets/gifs/updates.gif";
import gifAI from "../assets/gifs/ai.gif";
import gifAccess from "../assets/gifs/access.gif";
import gifSecurity from "../assets/gifs/security.gif";
import gifLanguage from "../assets/gifs/language.gif";
import gifOffline from "../assets/gifs/offline.gif";
import gifQR from "../assets/gifs/qr.gif";
import gifAnalytics from "../assets/gifs/analytics.gif";



export default function Home() {
  const [readStatus, setReadStatus] = useState({});
  const [showReactions, setShowReactions] = useState({});
  const [reactions, setReactions] = useState({});
  const [feedback, setFeedback] = useState({ name: "", message: "" });
  const [showQR, setShowQR] = useState(false);

  const toggleRead = (id) =>
    setReadStatus((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleReactionClick = (id) =>
    setShowReactions((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleReact = (id, emoji) => {
    setReactions((prev) => ({ ...prev, [id]: emoji }));
    setShowReactions((prev) => ({ ...prev, [id]: false }));
  };

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({ ...prev, [name]: value }));
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${feedback.name} for your feedback!`);
    setFeedback({ name: "", message: "" });
  };

  const handleShare = (notice) => {
    navigator.clipboard.writeText(`${notice.title} - ${notice.summary}`);
    alert("Notice details copied! Share it anywhere.");
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
  {
    id: 4,
    title: "Society Maintenance Work",
    source: "Gokuldham Society",
    summary: "Maintenance work on 5th Sept in main hall.",
    img: society,
    deadline: "2025-09-05 18:00",
  },
  {
    id: 5,
    title: "Electricity Cut Alert",
    source: "Local Utility",
    summary: "Power cut on Sunday for 4 hours, emergency notice.",
    img: powercut,
    important: true,
    deadline: "2025-09-01 12:00",
  },
  {
    id: 6,
    title: "School PTM Meeting",
    source: "Delhi Public School",
    summary: "Parent-Teacher Meeting on 8th Sept, 5 PM.",
    img: school,
    deadline: "2025-09-08 17:00",
  },
  {
    id: 7,
    title: "Lost & Found - Wallet",
    source: "Community Board",
    summary: "Black wallet found near campus.",
    img: lost,
    deadline: "2025-09-01 20:00",
  },
  {
    id: 8,
    title: "Family Function Invitation",
    source: "Sharma Family",
    summary: "Wedding ceremony on 10th Sept at Community Hall.",
    img: family,
    deadline: "2025-09-10 20:00",
  },
  {
    id: 9,
    title: "College Fest Announcement",
    source: "KIET Cultural Club",
    summary: "Annual Fest registrations open now.",
    img: fest,
    deadline: "2025-09-15 23:59",
  },
  {
    id: 10,
    title: "City Road Construction Alert",
    source: "Ghaziabad Nagar Nigam",
    summary: "New flyover construction starting 2nd Sept, expect delays.",
    img: road,
    important: true,
    deadline: "2025-09-02 08:00",
  },
  {
    id: 11,
    title: "National Holiday Declared",
    source: "Govt. of India",
    summary: "2nd October Gandhi Jayanti is a public holiday.",
    img: india,
    deadline: "2025-10-02 23:59",
  },
  {
    id: 12,
    title: "State CM New Education Scheme",
    source: "UP CM Office",
    summary: "New scholarship scheme launched for meritorious students.",
    img: cm,
    deadline: "2025-09-20 23:59",
  },
  {
    id: 13,
    title: "District Magistrate Order",
    source: "Meerut DM",
    summary: "Market closure on 4th Sept due to security reasons.",
    img: dm,
    deadline: "2025-09-04 23:59",
  },
  {
    id: 14,
    title: "PM Modi Announces New Digital Scheme",
    source: "PMO India",
    summary: "Digital India 2.0 initiative launched nationwide.",
    img: pm,
    deadline: "2025-09-30 23:59",
  },
  {
    id: 15,
    title: "Sports Meet",
    source: "City Sports Council",
    summary: "Inter-college football tournament begins 12th Sept.",
    img: sports,
    deadline: "2025-09-12 09:00",
  },
  {
    id: 16,
    title: "Party Invitation",
    source: "College Friends",
    summary: "Farewell party at Café 21, 9th Sept evening.",
    img: party,
    deadline: "2025-09-09 20:00",
  },
  {
    id: 17,
    title: "Emergency Weather Alert",
    source: "IMD",
    summary: "Heavy rainfall warning issued for UP region.",
    img: weather,
    important: true,
    deadline: "2025-09-03 12:00",
  },
  {
    id: 18,
    title: "Society Ganesh Chaturthi Function",
    source: "Gokuldham Society",
    summary: "Cultural function on 18th Sept at clubhouse.",
    img: ganesh,
    deadline: "2025-09-18 22:00",
  },
  {
    id: 19,
    title: "University Convocation Ceremony",
    source: "AKTU",
    summary: "Convocation on 25th Sept for 2024 batch.",
    img: convocation,
    deadline: "2025-09-25 10:00",
  },
  {
    id: 20,
    title: "Blood Donation Camp",
    source: "Red Cross Society",
    summary: "Camp at City Hall on 14th Sept, 9 AM onwards.",
    img: blood,
    deadline: "2025-09-14 09:00",
  },
];


  return (
    <div className="space-y-14 bg-white text-gray-800">
      {/* 🔔 Important Notice */}
      <div className="bg-indigo-600 text-white py-2 rounded shadow">
        <marquee behavior="scroll" direction="left" scrollamount="6">
          🚨 Important: Society Meeting on 28th Aug | 🏠 Maintenance bills due
          31st Aug | 📌 Update your profile under Settings
        </marquee>
      </div>

      {/* 🚀 Modern Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-center py-20 bg-gradient-to-r from-indigo-100 via-white to-indigo-200 rounded-2xl shadow-lg"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-indigo-700">
          Welcome to SandeshSetu
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          The AI-powered smart community notice board for schools, societies,
          offices, and families.
        </p>
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
            🚀 Get Started
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl shadow hover:bg-gray-300 transition">
            📖 Learn More
          </button>
          <button
            onClick={() => setShowQR(true)}
            className="px-6 py-3 bg-green-500 text-white rounded-xl shadow hover:bg-green-600 transition"
          >
            📱 Scan QR
          </button>
        </div>
      </motion.section>

 {/* ✅ QR Modal */}
      {showQR && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-bold mb-4">Scan to Join</h3>
            <img src={qr} alt="QR Code" className="w-52 mx-auto" />
            <button
              onClick={() => setShowQR(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}




      {/* 📢 Notices */}
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          key={notice.id}
          onClick={() => toggleRead(notice.id)}
          className={`p-4 rounded-xl shadow-md border cursor-pointer transition hover:scale-105 flex flex-col h-[300px] text-sm ${
            {
              true: "border-red-500 bg-red-50",
              false: readStatus[notice.id]
                ? "border-gray-300 bg-gray-100"
                : "border-gray-200 bg-white",
            }[notice.important || false]
          }`}
        >
          <img
            src={notice.img}
            alt={notice.title}
            className="w-full h-24 object-cover rounded-lg mb-2"
          />
          <h3 className="font-bold text-sm line-clamp-1">{notice.title}</h3>
          <p className="text-xs text-gray-500">From: {notice.source}</p>
          <p className="text-xs text-slate-600 line-clamp-2">
            {notice.summary}
          </p>
          <p className="text-[11px] text-gray-400 mt-1">
            ⏳ {new Date(notice.deadline).toLocaleString()}
          </p>

          {/* Buttons */}
          <div className="flex gap-1 mt-auto pt-2 text-xs">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleReactionClick(notice.id);
              }}
              className="px-2 py-1 bg-purple-100 text-purple-700 rounded hover:bg-purple-200"
            >
              React
            </button>
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



  {/* 💡 Why Use It (Advanced animated) */}
<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}
  className="relative overflow-hidden rounded-3xl shadow-xl bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16"
>
  {/* Animated background blobs */}
  <motion.div
    aria-hidden
    animate={{ y: [0, 20, 0], opacity: [0.4, 0.8, 0.4] }}
    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
    className="pointer-events-none absolute -top-10 -left-10 w-40 h-40 rounded-full bg-blue-200/60 blur-2xl"
  />
  <motion.div
    aria-hidden
    animate={{ x: [0, 30, 0], opacity: [0.3, 0.7, 0.3] }}
    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
    className="pointer-events-none absolute bottom-0 -right-8 w-56 h-56 rounded-full bg-indigo-200/60 blur-3xl"
  />
  <motion.div
    aria-hidden
    animate={{ x: [0, -25, 0], y: [0, -10, 0], opacity: [0.25, 0.55, 0.25] }}
    transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
    className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-cyan-200/50 blur-3xl"
  />

  {/* Heading */}
  <div className="relative z-10 text-center px-6">
    <motion.h2
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-700"
    >
      Why Use <span className="text-indigo-600">SandeshSetu</span>?
    </motion.h2>

    <motion.p
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-gray-600"
    >
      One hub for every announcement—school, college, office, society, and city-level updates.
      Never miss what matters.
    </motion.p>
  </div>

  {/* USP Grid */}
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    variants={{
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
      },
    }}
    className="relative z-10 max-w-7xl mx-auto mt-12 px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
  >
    {[
      {
        title: "Instant Updates",
        desc: "Real-time notices across schools, offices & societies.",
        gif: gifUpdates,
        badge: "Live",
      },
      {
        title: "AI-Powered",
        desc: "Smart filters, auto-categorization & personalized alerts.",
        gif: gifAI,
        badge: "Smart",
      },
      {
        title: "Universal Access",
        desc: "Use it on web & mobile, anywhere, anytime.",
        gif: gifAccess,
        badge: "Anytime",
      },
      {
        title: "Privacy & Security",
        desc: "Your data is safe with role-based access.",
        gif: gifSecurity,
        badge: "Secure",
      },
      {
        title: "Multi-Language",
        desc: "Read notices in your preferred language.",
        gif: gifLanguage,
        badge: "Localized",
      },
      {
        title: "Offline Alerts",
        desc: "Key updates cached for viewing on poor networks.",
        gif: gifOffline,
        badge: "Reliable",
      },
      {
        title: "QR Scan & Join",
        desc: "Quickly join groups and boards by scanning QR.",
        gif: gifQR,
        badge: "Fast",
      },
      {
        title: "Analytics & Insights",
        desc: "Track reach, reads, and engagement in one view.",
        gif: gifAnalytics,
        badge: "Insights",
      },
    ].map((card, idx) => (
      <motion.div
        key={card.title}
        variants={{
          hidden: { y: 22, opacity: 0 },
          show: { y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
        }}
        whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className="group relative bg-white/80 backdrop-blur rounded-2xl shadow-md hover:shadow-2xl border border-blue-100 p-5"
      >
        {/* Floating badge */}
        <span className="absolute -top-3 right-3 text-[11px] uppercase tracking-wider bg-blue-600 text-white px-2 py-1 rounded-full shadow">
          {card.badge}
        </span>

        {/* GIF */}
        <div className="flex items-center justify-center">
          <img
            src={card.gif}
            alt={card.title}
            className="w-20 h-20 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Title */}
        <h3 className="mt-4 font-semibold text-lg text-blue-700 text-center">
          {card.title}
        </h3>

        {/* Description */}
        <p className="mt-1 text-sm text-gray-600 text-center">
          {card.desc}
        </p>

        {/* Subtle underline on hover */}
        <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto transition-all duration-300 group-hover:w-24" />
      </motion.div>
    ))}
  </motion.div>

  {/* Small bottom tagline (optional “address/coverage” style) */}
  <motion.p
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="relative z-10 mt-10 text-center text-xs md:text-sm text-gray-500 px-6"
  >
    Serving campuses, housing societies, offices, and city administrators—built for India’s
    fast, multilingual communication.
  </motion.p>
</motion.section>







      {/* 📦 Subscription Plans */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">
          Subscription Plans
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="p-6 bg-white border rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Free</h3>
            <p className="text-sm text-gray-600">
              Basic notices, limited AI features.
            </p>
            <p className="font-bold text-xl mt-3">₹0</p>
          </div>
          <div className="relative p-6 bg-indigo-50 border-2 border-indigo-600 rounded-xl shadow">
            <span className="absolute -top-3 right-3 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
              Most Popular
            </span>
            <h3 className="font-bold text-lg mb-2">Pro</h3>
            <p className="text-sm text-gray-600">
              Advanced AI filters, priority alerts, analytics.
            </p>
            <p className="font-bold text-xl mt-3">₹199/month</p>
          </div>
          <div className="p-6 bg-white border rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Enterprise</h3>
            <p className="text-sm text-gray-600">
              Custom integrations, dedicated support, unlimited users.
            </p>
            <p className="font-bold text-xl mt-3">Contact Us</p>
          </div>
        </div>
      </section>

   {/* Footer */}
<footer className="bg-gradient-to-b from-blue-50 to-white text-gray-700 mt-16">
  <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-3"
      >
        <h3 className="text-blue-700 text-lg font-bold">About SandeshSetu</h3>
        <p className="text-sm text-gray-600">
          Your smart community notice board connecting schools, societies, offices, and families.
        </p>
      </motion.div>

      {/* Quick Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-3"
      >
        <h3 className="text-blue-700 text-lg font-bold">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-blue-500 transition">About Us</a></li>
          <li><a href="#" className="hover:text-blue-500 transition">Support</a></li>
          <li><a href="#" className="hover:text-blue-500 transition">Resources</a></li>
          <li><a href="#" className="hover:text-blue-500 transition">Partners</a></li>
          <li><a href="#" className="hover:text-blue-500 transition">FAQ</a></li>
          <li><a href="#feedback" className="hover:text-blue-500 transition">Feedback</a></li>
        </ul>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-3"
      >
        <h3 className="text-blue-700 text-lg font-bold">Contact</h3>
        <div className="flex flex-col gap-2 text-sm">
          <a href="mailto:aakash.2428cse2420@kiet.edu" className="flex items-center gap-2 hover:text-blue-500 transition"><FaEnvelope /> aakash.2428cse2420@kiet.edu</a>
          <a href="tel:+917505278027" className="flex items-center gap-2 hover:text-blue-500 transition"><FaPhoneAlt /> +91 7505278027</a>
          <a href="https://github.com/Aakashkumargit" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition"><FaGithub /> GitHub</a>
          <a href="https://www.linkedin.com/in/aakash-kumar-6a3222314" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition"><FaLinkedin /> LinkedIn</a>
        </div>
      </motion.div>

      {/* Feedback Form */}
      <motion.div
        id="feedback"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white p-6 rounded-2xl shadow-md border border-blue-100"
      >
        <h3 className="text-blue-700 text-lg font-bold mb-4">Feedback</h3>
        <form onSubmit={handleFeedbackSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={feedback.name}
            onChange={handleFeedbackChange}
            className="px-3 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Feedback"
            value={feedback.message}
            onChange={handleFeedbackChange}
            className="px-3 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={3}
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 transition"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>

    {/* Download App Section */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center bg-blue-100 py-6 rounded-2xl shadow-md"
    >
      <h3 className="text-blue-700 text-lg font-bold mb-3">Download My App</h3>
      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Get the App
      </button>
    </motion.div>

    {/* Social Icons Row */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex justify-center gap-6 mt-6 text-blue-600"
    >
      <a href="https://github.com/Aakashkumargit" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><FaGithub size={22} /></a>
      <a href="https://www.linkedin.com/in/aakash-kumar-6a3222314" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><FaLinkedin size={22} /></a>
      <a href="mailto:aakash.2428cse2420@kiet.edu" className="hover:scale-110 transition"><FaEnvelope size={22} /></a>
    </motion.div>

    {/* Copyright */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-center text-xs text-gray-500 border-t border-blue-100 pt-4"
    >
      © {new Date().getFullYear()} SandeshSetu. All rights reserved.
    </motion.div>
  </div>
</footer>


    </div>
  );
}
