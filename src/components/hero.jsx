import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";
import hero5 from "../assets/hero5.png";

export default function HeroSection({ setShowQR }) {
  const images = [hero1, hero2, hero3, hero4, hero5];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative py-16 px-6 bg-sky-100 rounded-3xl shadow-xl overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold text-sky-700"
          >
            SandeshSetu
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-700 text-lg md:text-xl max-w-md"
          >
            The smart, AI-powered notice board connecting schools, societies,
            offices, and families in real-time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start"
          >
            <button className="px-5 py-2 bg-sky-600 text-white rounded-lg shadow hover:bg-sky-700 transition text-sm">
              🚀 Get Started
            </button>
            <button className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition text-sm">
              📖 Learn More
            </button>
            <button
              onClick={() => setShowQR(true)}
              className="px-5 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition text-sm"
            >
              📱 Scan QR
            </button>
          </motion.div>
        </div>

        {/* Right Side: Image Slider */}
        <div className="flex-1 relative w-full max-w-lg h-96 rounded-2xl overflow-hidden shadow-lg bg-white">
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Hero ${currentIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-cover rounded-2xl"
            />
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition"
          >
            <FaArrowLeft className="text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition"
          >
            <FaArrowRight className="text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
