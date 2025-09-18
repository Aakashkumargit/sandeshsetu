import React from "react";
import { FaStar } from "react-icons/fa";

export default function FeedbackSection() {
  const feedbacks = [
    {
      name: "Aarav Sharma",
      role: "Student, Delhi",
      message: "SandeshSetu keeps me updated about my college notices instantly. Very reliable!",
      img: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      name: "Ananya Patel",
      role: "Office Admin, Mumbai",
      message: "Managing office notices is so easy now. Love the AI suggestions for important updates.",
      img: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      name: "Rohan Singh",
      role: "School Teacher, Bangalore",
      message: "Parents are more informed now. The multi-language feature is a lifesaver!",
      img: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      name: "Priya Iyer",
      role: "Society Manager, Chennai",
      message: "QR code joining and offline alerts have made notice distribution super easy.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  return (
    <section className="py-12 bg-sky-50 text-center">
      <h2 className="text-3xl font-bold mb-8 text-sky-700">What People Say</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {feedbacks.map((fb, idx) => (
          <div
            key={idx}
            className="bg-white border border-sky-200 rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition hover:-translate-y-1"
          >
            <img
              src={fb.img}
              alt={fb.name}
              className="w-20 h-20 rounded-full mb-4 object-cover shadow-sm"
            />
            <h3 className="text-lg font-semibold text-sky-800">{fb.name}</h3>
            <p className="text-sm text-sky-600 mb-2">{fb.role}</p>
            <p className="text-gray-600 text-sm mb-3">{fb.message}</p>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
