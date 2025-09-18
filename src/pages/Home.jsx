import React, { useState } from "react";
import HeroSection from "../components/hero";
import Notices from "../components/notices";
import QRModal from "../components/QRShare";
import WhyUseIt from "../components/WhyUseIt";
import SubscriptionPlans from "../components/SubscriptionPlans";
import Footer from "../components/footer";

export default function Home() {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="space-y-14 bg-white text-gray-800">
      {/* 🔔 Important Notice Marquee */}
      <div className="bg-sky-600 text-white py-2 rounded shadow">
        <marquee behavior="scroll" direction="left" scrollamount="6">
          🚨 Important: Society Meeting on 28th Aug | 🏠 Maintenance bills due
          31st Aug | 📌 Update your profile under Settings
        </marquee>
      </div>

      {/* 🌟 Hero Section */}
      <HeroSection setShowQR={setShowQR} />

      {/* ✅ QR Modal */}
      {showQR && <QRModal show={showQR} setShow={setShowQR} />}

      {/* 📢 Notices Section */}
      <Notices />

      {/* 💡 Why Use It Section */}
      <WhyUseIt />

      {/* 📦 Subscription Plans Section */}
      <SubscriptionPlans />

     \
    </div>
  );
}
