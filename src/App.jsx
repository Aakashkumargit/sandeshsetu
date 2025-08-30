// src/App.jsx
import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { FaSearch, FaCog, FaUserCircle } from "react-icons/fa";
import topLogo from "./assets/top.png";

export default function App() {
  const location = useLocation();

  const navLink = (to, label) => (
    <Link
      to={to}
      className={`px-3 py-1 rounded transition ${
        location.pathname === to
          ? "bg-indigo-100 text-indigo-600 font-semibold"
          : "hover:bg-gray-200"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-white shadow px-6 py-3">
        {/* Logo */}
        <Link to="/">
          <img
            src={topLogo}
            alt="SandeshSetu"
            className="h-12 object-contain"
          />
        </Link>

        {/* Search bar (hidden on mobile) */}
        <div className="flex-1 mx-6 hidden sm:flex">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>

        {/* Navigation Links + Icons */}
        <div className="flex gap-4 items-center">
          {navLink("/", "Home")}
          {navLink("/notices", "Notices")}
          {navLink("/members", "Members")}
          {navLink("/admin", "Admin Login")}

          {/* Settings & Profile Icons */}
          <Link
            to="/settings"
            className={`p-2 rounded-full ${
              location.pathname === "/settings"
                ? "bg-indigo-100 text-indigo-600"
                : "text-gray-600 hover:text-indigo-600"
            }`}
          >
            <FaCog size={20} />
          </Link>
          <Link
            to="/profile"
            className={`p-2 rounded-full ${
              location.pathname === "/profile"
                ? "bg-indigo-100 text-indigo-600"
                : "text-gray-600 hover:text-indigo-600"
            }`}
          >
            <FaUserCircle size={24} />
          </Link>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-1 px-4 sm:px-10 py-6">
        <Outlet />
      </main>
    </div>
  );
}
