// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaCog, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import topLogo from "../assets/logo.png";

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/notices", label: "Notices" },
    { to: "/members", label: "Members" },
    { to: "/admin", label: "Admin Login" },
  ];

  const navLink = (to, label) => (
    <Link
      to={to}
      className={`px-4 py-2 rounded-lg text-base md:text-lg transition-all duration-200 ${
        location.pathname === to
          ? "bg-sky-200 text-sky-900 font-semibold shadow-md"
          : "hover:bg-sky-200 hover:text-sky-900"
      }`}
      onClick={() => setMobileMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <nav className="bg-sky-300 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Left: Logo + App Name */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={topLogo}
              alt="SandeshSetu"
              className="h-12 w-12 object-contain rounded-full shadow-sm"
            />
            <span className="text-3xl font-bold text-sky-900">SandeshSetu</span>
          </Link>
        </div>

        {/* Center: Search Bar (desktop only) */}
        <div className="flex-1 mx-6 hidden md:flex justify-center">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-12 pr-4 py-3 border border-sky-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition shadow-sm"
            />
            <FaSearch className="absolute left-4 top-3.5 text-gray-500" />
          </div>
        </div>

        {/* Right: Nav Links + Icons */}
        <div className="hidden md:flex gap-5 items-center flex-shrink-0">
          {navLinks.map((link) => navLink(link.to, link.label))}

          <Link
            to="/settings"
            className={`p-3 rounded-full transition-all ${
              location.pathname === "/settings"
                ? "bg-sky-200 text-sky-900 shadow-md"
                : "text-gray-700 hover:text-sky-900 hover:bg-sky-200"
            }`}
          >
            <FaCog size={22} />
          </Link>
          <Link
            to="/profile"
            className={`p-3 rounded-full transition-all ${
              location.pathname === "/profile"
                ? "bg-sky-200 text-sky-900 shadow-md"
                : "text-gray-700 hover:text-sky-900 hover:bg-sky-200"
            }`}
          >
            <FaUserCircle size={26} />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden ml-auto relative z-10">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-3 rounded-md hover:bg-sky-200 transition"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-sky-100 px-6 py-6 shadow-lg flex flex-col gap-3 rounded-b-2xl">
          {navLinks.map((link) => navLink(link.to, link.label))}

          {/* Mobile Search */}
          <div className="relative mt-3">
            <input
              type="text"
              placeholder="Search..."
              className="pl-12 pr-4 py-3 rounded-xl border border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500 w-full transition shadow-sm"
            />
            <FaSearch className="absolute left-4 top-3.5 text-gray-500" />
          </div>

          {/* Mobile Icons */}
          <div className="flex gap-4 mt-3">
            <Link
              to="/settings"
              className={`p-3 rounded-full transition-all ${
                location.pathname === "/settings"
                  ? "bg-sky-200 text-sky-900 shadow-md"
                  : "text-gray-700 hover:text-sky-900 hover:bg-sky-200"
              }`}
            >
              <FaCog size={22} />
            </Link>
            <Link
              to="/profile"
              className={`p-3 rounded-full transition-all ${
                location.pathname === "/profile"
                  ? "bg-sky-200 text-sky-900 shadow-md"
                  : "text-gray-700 hover:text-sky-900 hover:bg-sky-200"
              }`}
            >
              <FaUserCircle size={26} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
