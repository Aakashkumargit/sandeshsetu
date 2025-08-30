// src/components/ui/input.jsx
import React from "react";

export const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
      bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 ${className}`}
    {...props}
  />
);
