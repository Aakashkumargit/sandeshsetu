// src/components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navLink = (to, label) => (
    <Link
      to={to}
      className={`hover:text-yellow-300 ${
        location.pathname === to ? "font-semibold underline" : ""
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold hover:text-yellow-300">
          SandeshSetu
        </Link>

        {/* Links */}
        <div className="flex gap-6 text-lg">
          {navLink("/", "Home")}
          {navLink("/about", "About")}
          {navLink("/contact", "Contact")}
          {navLink("/admin", "Admin Login")}
          {navLink("/admin/dashboard", "Dashboard")}
        </div>
      </div>
    </nav>
  );
}
