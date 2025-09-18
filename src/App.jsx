// src/App.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 px-4 sm:px-10 py-6">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
