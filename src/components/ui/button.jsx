// src/components/ui/button.jsx
import React from "react";

export const Button = ({
  children,
  className = "",
  variant = "solid",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-xl transition text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed";

  const styles = {
    solid:
      "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
    ghost:
      "bg-transparent text-blue-600 hover:bg-blue-50 active:bg-blue-100",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100",
    link:
      "text-blue-600 underline-offset-4 hover:underline",
  };

  return (
    <button
      className={`${base} ${styles[variant] || styles.solid} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
