import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa";
import topLogo from "../assets/top.png";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminEmail = "admin@sandeshsetu.com";
    const adminPassword = "12345";

    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem("isAdminLoggedIn", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleGoogleLogin = () => {
    alert("Google Login integration goes here 🚀");
    // Example: redirect to Google OAuth
  };

  const handleMicrosoftLogin = () => {
    alert("Microsoft Login integration goes here 🚀");
    // Example: redirect to Microsoft OAuth
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="flex justify-center mb-6"
        >
          <img src={topLogo} alt="SandeshSetu Logo" className="h-14" />
        </motion.div>

        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Admin Login
        </h2>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm"
          >
            {error}
          </motion.div>
        )}

        {/* Email/Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="admin@sandeshsetu.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </motion.div>

          <motion.div initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
            <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-semibold"
          >
            Login
          </motion.button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Login */}
        <motion.button
          onClick={handleGoogleLogin}
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center w-full border border-gray-300 py-2 rounded-lg mb-3 hover:bg-gray-100 transition"
        >
          <FcGoogle className="text-xl mr-2" />
          Sign in with Google
        </motion.button>

        <motion.button
          onClick={handleMicrosoftLogin}
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          <FaMicrosoft className="text-xl text-blue-600 mr-2" />
          Sign in with Microsoft
        </motion.button>

        {/* Hint */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          Demo credentials: <br />
          <span className="font-semibold">admin@sandeshsetu.com</span> /{" "}
          <span className="font-semibold">12345</span>
        </p>
      </motion.div>
    </div>
  );
}
