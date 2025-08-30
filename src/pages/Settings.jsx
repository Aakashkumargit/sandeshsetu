import React, { useState } from "react";

export default function Settings() {
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@example.com",
    phone: "+91 9876543210",
    photo: null,
  });

  const [preferences, setPreferences] = useState({
    darkMode: false,
    language: "en",
    themeColor: "#4f46e5",
    emailNotif: true,
    smsNotif: false,
    twoFactor: false,
  });

  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [logs] = useState([
    "Logged in from Chrome on Windows",
    "Changed password yesterday",
    "Enabled email notifications",
    "Viewed Analytics page",
  ]);

  // --- Handlers ---
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile((prev) => ({ ...prev, photo: URL.createObjectURL(file) }));
    }
  };

  const handlePrefChange = (e) => {
    const { name, type, checked, value } = e.target;
    setPreferences((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (
      passwords.newPassword &&
      passwords.newPassword !== passwords.confirmPassword
    ) {
      alert("❌ New passwords do not match!");
      return;
    }
    alert("✅ Settings saved successfully!");
  };

  const handleReset = () => {
    setProfile({ name: "", email: "", phone: "", photo: null });
    setPreferences({
      darkMode: false,
      language: "en",
      themeColor: "#4f46e5",
      emailNotif: true,
      smsNotif: false,
      twoFactor: false,
    });
    setPasswords({ oldPassword: "", newPassword: "", confirmPassword: "" });
  };

  const handleDelete = () => {
    if (window.confirm("⚠️ Are you sure you want to delete your account?")) {
      alert("Account deleted (placeholder).");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-6">
      <h2 className="text-2xl font-bold text-indigo-600">⚙️ Settings</h2>

      {/* Profile Settings */}
      <section className="space-y-3">
        <h3 className="font-semibold text-lg">Profile</h3>
        <div className="flex items-center gap-4">
          {profile.photo ? (
            <img
              src={profile.photo}
              alt="profile"
              className="w-16 h-16 rounded-full border"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
              👤
            </div>
          )}
          <input type="file" accept="image/*" onChange={handlePhotoUpload} />
        </div>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleProfileChange}
          placeholder="Name"
          className="w-full border rounded p-2"
        />
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleProfileChange}
          placeholder="Email"
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          name="phone"
          value={profile.phone}
          onChange={handleProfileChange}
          placeholder="Phone"
          className="w-full border rounded p-2"
        />
      </section>

      {/* Password Settings */}
      <section className="space-y-3">
        <h3 className="font-semibold text-lg">Change Password</h3>
        <input
          type="password"
          name="oldPassword"
          value={passwords.oldPassword}
          onChange={handlePasswordChange}
          placeholder="Old Password"
          className="w-full border rounded p-2"
        />
        <input
          type="password"
          name="newPassword"
          value={passwords.newPassword}
          onChange={handlePasswordChange}
          placeholder="New Password"
          className="w-full border rounded p-2"
        />
        <input
          type="password"
          name="confirmPassword"
          value={passwords.confirmPassword}
          onChange={handlePasswordChange}
          placeholder="Confirm New Password"
          className="w-full border rounded p-2"
        />
      </section>

      {/* Preferences */}
      <section className="space-y-3">
        <h3 className="font-semibold text-lg">Preferences</h3>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="darkMode"
            checked={preferences.darkMode}
            onChange={handlePrefChange}
          />
          Enable Dark Mode
        </label>
        <label className="block">
          Language:
          <select
            name="language"
            value={preferences.language}
            onChange={handlePrefChange}
            className="ml-2 border p-1 rounded"
          >
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
            <option value="fr">Français</option>
          </select>
        </label>
        <label className="block">
          Theme Color:
          <input
            type="color"
            name="themeColor"
            value={preferences.themeColor}
            onChange={handlePrefChange}
            className="ml-2"
          />
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="twoFactor"
            checked={preferences.twoFactor}
            onChange={handlePrefChange}
          />
          Enable Two-Factor Authentication
        </label>
      </section>

      {/* Notifications */}
      <section className="space-y-3">
        <h3 className="font-semibold text-lg">Notifications</h3>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="emailNotif"
            checked={preferences.emailNotif}
            onChange={handlePrefChange}
          />
          Email Notifications
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="smsNotif"
            checked={preferences.smsNotif}
            onChange={handlePrefChange}
          />
          SMS Notifications
        </label>
      </section>

      {/* Activity Logs */}
      <section className="space-y-2">
        <h3 className="font-semibold text-lg">Recent Activity</h3>
        <ul className="list-disc ml-6 text-gray-700">
          {logs.map((log, i) => (
            <li key={i}>{log}</li>
          ))}
        </ul>
      </section>

      {/* Buttons */}
      <div className="flex justify-between flex-wrap gap-2">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
        >
          Reset
        </button>
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}
