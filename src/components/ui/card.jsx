// src/components/ui/card.jsx
import React from "react";

export const Card = ({ className = "", children }) => (
  <div
    className={`bg-white dark:bg-zinc-900 rounded-2xl p-4 ${className}`}
  >
    {children}
  </div>
);

export const CardHeader = ({ className = "", children }) => (
  <div className={`mb-3 ${className}`}>{children}</div>
);

export const CardContent = ({ className = "", children }) => (
  <div className={`${className}`}>{children}</div>
);
