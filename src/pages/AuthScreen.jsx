// src/pages/AuthScreen.jsx
import React, { useState } from "react";

// ✅ Fixed relative imports (no "@/")
import { Card, CardHeader, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

import { Sun, Moon } from "lucide-react";

const AuthScreen = ({ onLogin, loading, theme }) => {
  const [email, setEmail] = useState("admin@sandeshsetu.app");
  const [password, setPassword] = useState("admin123");

  const submit = async (e) => {
    e.preventDefault();
    await onLogin({ email, password });
  };

  return (
    <div className="min-h-screen grid place-items-center bg-zinc-50 dark:bg-zinc-950">
      <Card className="w-full max-w-md shadow-xl border border-gray-200 dark:border-gray-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-semibold">Sign in</div>
              <div className="text-sm opacity-70">Admin / Sub-Admin</div>
            </div>
            <Button
  variant="ghost"
  type="button"
  onClick={() => document.documentElement.classList.toggle("dark")}
  className="p-2"
>
  {document.documentElement.classList.contains("dark") ? (
    <Sun size={18} />
  ) : (
    <Moon size={18} />
  )}
</Button>

          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={submit} className="space-y-3">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <Button
              type="submit"
              disabled={loading}
              className="w-full font-medium"
            >
              {loading ? "Signing in…" : "Sign in"}
            </Button>
            <div className="text-xs opacity-70 text-center">
              Use your admin credentials to log in
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthScreen;
