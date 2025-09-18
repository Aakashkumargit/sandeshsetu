// src/components/Footer.jsx
import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const [feedback, setFeedback] = useState({ name: "", message: "" });

  const handleFeedbackChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your feedback, ${feedback.name}!`);
    setFeedback({ name: "", message: "" });
  };

  return (
    <footer className="bg-sky-300 text-gray-900 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">

        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h3 className="text-sky-900 text-lg font-bold">About SandeshSetu</h3>
            <p className="text-gray-800 text-sm">
              Smart community notice board connecting schools, societies, offices, and families.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h3 className="text-sky-900 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-sky-700 transition">About</a></li>
              <li><a href="#" className="hover:text-sky-700 transition">Support</a></li>
              <li><a href="#" className="hover:text-sky-700 transition">Resources</a></li>
              <li><a href="#feedback" className="hover:text-sky-700 transition">Feedback</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2 text-sm"
          >
            <h3 className="text-sky-900 text-lg font-bold">Contact</h3>
            <div className="flex flex-col gap-1">
              <a href="mailto:aakash.2428cse2420@kiet.edu" className="flex items-center gap-2 hover:text-sky-700 transition">
                <FaEnvelope /> aakash.2428cse2420@kiet.edu
              </a>
              <a href="tel:+917505278027" className="flex items-center gap-2 hover:text-sky-700 transition">
                <FaPhoneAlt /> +91 7505278027
              </a>
              <div className="flex gap-3 mt-1 text-sky-900">
                <a href="https://github.com/Aakashkumargit" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/aakash-kumar-6a3222314" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><FaLinkedin /></a>
              </div>
            </div>
          </motion.div>

          {/* Feedback */}
          <motion.div
            id="feedback"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/20 p-4 rounded-xl border border-sky-400"
          >
            <h3 className="text-sky-900 text-lg font-bold mb-2">Feedback</h3>
            <form onSubmit={handleFeedbackSubmit} className="flex flex-col gap-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={feedback.name}
                onChange={handleFeedbackChange}
                className="px-2 py-1 border border-sky-400 bg-white/10 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Feedback"
                value={feedback.message}
                onChange={handleFeedbackChange}
                className="px-2 py-1 border border-sky-400 bg-white/10 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                rows={2}
                required
              />
              <button
                type="submit"
                className="px-3 py-1 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition"
              >
                Submit
              </button>
            </form>
          </motion.div>

        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-800 border-t border-sky-400 pt-4"
        >
          © {new Date().getFullYear()} SandeshSetu. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
