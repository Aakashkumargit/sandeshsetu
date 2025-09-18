// src/components/WhyUseIt.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaBolt,
  FaRobot,
  FaGlobe,
  FaLock,
  FaLanguage,
  FaWifi,
  FaQrcode,
  FaChartLine,
} from "react-icons/fa";

export default function WhyUseIt() {
  const cards = [
    {
      title: "Instant Updates",
      desc: "Real-time notices across schools, offices & societies.",
      icon: <FaBolt className="w-12 h-12 text-sky-700" />,
      badge: "Live",
    },
    {
      title: "AI-Powered",
      desc: "Smart filters, auto-categorization & personalized alerts.",
      icon: <FaRobot className="w-12 h-12 text-sky-700" />,
      badge: "Smart",
    },
    {
      title: "Universal Access",
      desc: "Use it on web & mobile, anywhere, anytime.",
      icon: <FaGlobe className="w-12 h-12 text-sky-700" />,
      badge: "Anytime",
    },
    {
      title: "Privacy & Security",
      desc: "Your data is safe with role-based access.",
      icon: <FaLock className="w-12 h-12 text-sky-700" />,
      badge: "Secure",
    },
    {
      title: "Multi-Language",
      desc: "Read notices in your preferred language.",
      icon: <FaLanguage className="w-12 h-12 text-sky-700" />,
      badge: "Localized",
    },
    {
      title: "Offline Alerts",
      desc: "Key updates cached for viewing on poor networks.",
      icon: <FaWifi className="w-12 h-12 text-sky-700" />,
      badge: "Reliable",
    },
    {
      title: "QR Scan & Join",
      desc: "Quickly join groups and boards by scanning QR.",
      icon: <FaQrcode className="w-12 h-12 text-sky-700" />,
      badge: "Fast",
    },
    {
      title: "Analytics & Insights",
      desc: "Track reach, reads, and engagement in one view.",
      icon: <FaChartLine className="w-12 h-12 text-sky-700" />,
      badge: "Insights",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-3xl shadow-xl bg-sky-100 py-16"
    >
      {/* Background blobs */}
      <motion.div
        aria-hidden
        animate={{ y: [0, 20, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-10 -left-10 w-40 h-40 rounded-full bg-sky-200/50 blur-2xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, 30, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-0 -right-8 w-56 h-56 rounded-full bg-sky-300/50 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -25, 0], y: [0, -10, 0], opacity: [0.25, 0.55, 0.25] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-sky-200/50 blur-3xl"
      />

      {/* Heading */}
      <div className="relative z-10 text-center px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-sky-800"
        >
          Why Use <span className="text-sky-900">SandeshSetu</span>?
        </motion.h2>
        <motion.p
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-sky-700"
        >
          One hub for every announcement—school, college, office, society, and city-level updates. Never miss what matters.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
        }}
        className="relative z-10 max-w-7xl mx-auto mt-12 px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {cards.map((card) => (
          <motion.div
            key={card.title}
            variants={{ hidden: { y: 22, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } } }}
            whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="group relative bg-sky-50/80 backdrop-blur rounded-2xl shadow-md hover:shadow-2xl border border-sky-300 p-5"
          >
            <span className="absolute -top-3 right-3 text-[11px] uppercase tracking-wider bg-sky-600 text-white px-2 py-1 rounded-full shadow">
              {card.badge}
            </span>
            <div className="flex items-center justify-center">
              {card.icon}
            </div>
            <h3 className="mt-4 font-semibold text-lg text-sky-800 text-center">{card.title}</h3>
            <p className="mt-1 text-sm text-sky-700 text-center">{card.desc}</p>
            <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto transition-all duration-300 group-hover:w-24" />
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 mt-10 text-center text-xs md:text-sm text-sky-700 px-6"
      >
        Serving campuses, housing societies, offices, and city administrators—built for India’s fast, multilingual communication.
      </motion.p>
    </motion.section>
  );
}
