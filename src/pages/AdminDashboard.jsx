// src/pages/AdminDashboard.jsx
import React, { useState, useMemo } from "react";
import {
  Users,
  FileText,
  BarChart2,
  Settings,
  Bell,
  MessageSquare,
  Sparkles,
  Brain,
  Search,
  TrendingUp,
  Clock,
  Calendar,
  DollarSign,
  AlertTriangle,
  UserCheck,
  Grid,
  ChevronDown,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

export default function AdminDashboard() {
  const [query, setQuery] = useState("");
  const [aiInput, setAiInput] = useState("");

  // Demo Data
  const stats = {
    users: 1240,
    notices: 432,
    societies: 18,
    weekendRevenue: 12450,
  };

  const revenueData = [
    { day: "Fri", revenue: 8000 },
    { day: "Sat", revenue: 12450 },
    { day: "Sun", revenue: 9400 },
  ];

  const pieData = [
    { name: "Academic", value: 40 },
    { name: "Government", value: 25 },
    { name: "Society", value: 20 },
    { name: "Friends", value: 15 },
  ];
  const COLORS = ["#4f46e5", "#16a34a", "#f59e0b", "#dc2626"];

  const usersData = [
    { id: 1, name: "Rohit Sharma", role: "Student", status: "active", lastLogin: "2025-08-29" },
    { id: 2, name: "Priya Singh", role: "Moderator", status: "active", lastLogin: "2025-08-30" },
    { id: 3, name: "Anil Kumar", role: "Society Admin", status: "suspended", lastLogin: "2025-08-20" },
    { id: 4, name: "Sneha Verma", role: "Student", status: "active", lastLogin: "2025-08-30" },
  ];

  const notices = [
    { id: 1, title: "Freshers Orientation", category: "Academic", tone: "positive", date: "2025-08-25" },
    { id: 2, title: "Water Supply Cut", category: "Society", tone: "negative", date: "2025-08-28" },
    { id: 3, title: "Govt. Scholarship", category: "Government", tone: "neutral", date: "2025-08-27" },
  ];

  const messages = [
    { id: 1, from: "Rohit Sharma", text: "Please extend library hours.", date: "2025-08-30" },
    { id: 2, from: "Priya Singh", text: "Found suspicious notice in Society.", date: "2025-08-29" },
  ];

  const timetable = [
    { day: "Mon", events: ["9:00 - CS Lab", "13:00 - Cultural Club"] },
    { day: "Tue", events: ["10:00 - Math Seminar"] },
    { day: "Wed", events: ["11:00 - Sports Meet", "15:00 - Guest Lecture"] },
    { day: "Thu", events: ["9:00 - Library Orientation"] },
    { day: "Fri", events: ["10:00 - Notice Board Update"] },
    { day: "Sat", events: ["No scheduled classes"] },
    { day: "Sun", events: ["No scheduled classes"] },
  ];

  // Derived values
  const flaggedNotices = notices.filter((n) => n.tone === "negative").length;

  const filteredUsers = useMemo(() => {
    if (!query) return usersData;
    return usersData.filter((u) => u.name.toLowerCase().includes(query.toLowerCase()) || u.role.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  // Simple AI mock responses
  const handleAiAction = (type) => {
    if (type === "generate") {
      alert("🔔 Demo: Notice generated (mock).\nTitle: Campus Meetup - Study Group");
    } else if (type === "summarize") {
      alert("📝 Demo: Summary generated:\n- 3 important notices this week.\n- Most are Academic in nature.");
    } else if (type === "detect") {
      alert("🛡️ Demo: Spam detector ran. 1 suspicious notice found (Society).");
    } else if (type === "sentiment") {
      alert("😀 Demo: Sentiment analysis -> 60% Positive, 25% Neutral, 15% Negative");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-72 bg-white shadow p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold text-indigo-600">Admin Panel</h1>
            <div className="text-sm text-gray-500">Light</div>
          </div>

          <nav className="space-y-2">
            <button className="flex items-center gap-3 w-full text-sm px-3 py-2 rounded-lg hover:bg-gray-100">
              <BarChart2 /> Overview
            </button>
            <button className="flex items-center gap-3 w-full text-sm px-3 py-2 rounded-lg hover:bg-gray-100">
              <Users /> Users
            </button>
            <button className="flex items-center gap-3 w-full text-sm px-3 py-2 rounded-lg hover:bg-gray-100">
              <FileText /> Notices
            </button>
            <button className="flex items-center gap-3 w-full text-sm px-3 py-2 rounded-lg hover:bg-gray-100">
              <Bell /> Reports
            </button>
            <button className="flex items-center gap-3 w-full text-sm px-3 py-2 rounded-lg hover:bg-gray-100">
              <Settings /> Settings
            </button>
          </nav>

          <div className="pt-4 border-t">
            <h3 className="text-xs text-gray-500">Quick actions</h3>
            <div className="mt-2 grid gap-2">
              <button onClick={() => handleAiAction("generate")} className="text-sm w-full py-2 rounded-lg bg-indigo-600 text-white">Auto-generate</button>
              <button onClick={() => handleAiAction("detect")} className="text-sm w-full py-2 rounded-lg bg-red-100 text-red-800">Run Spam Check</button>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-6">
          {/* Top stats */}
          <section className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Users</p>
                <p className="text-2xl font-bold">{stats.users}</p>
              </div>
              <Users className="text-indigo-600" />
            </div>

            <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Notices</p>
                <p className="text-2xl font-bold">{stats.notices}</p>
              </div>
              <FileText className="text-green-600" />
            </div>

            <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Societies</p>
                <p className="text-2xl font-bold">{stats.societies}</p>
              </div>
              <Grid className="text-yellow-600" />
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Weekend Revenue</p>
                  <p className="text-2xl font-bold">₹{stats.weekendRevenue.toLocaleString()}</p>
                </div>
                <DollarSign className="text-green-600" />
              </div>
              <div className="h-16 mt-3">
                <ResponsiveContainer width="100%" height={60}>
                  <BarChart data={revenueData} margin={{ left: -20 }}>
                    <Bar dataKey="revenue" radius={[6,6,0,0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>

          {/* Main grid */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Charts */}
              <div className="bg-white p-5 rounded-xl shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Activity & Trends</h3>
                  <div className="text-sm text-gray-500">Last 7 days</div>
                </div>
                <div style={{ height: 220 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={2} dot={{ r: 3 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* AI Features grid */}
              <div className="bg-white p-5 rounded-xl shadow">
                <h3 className="font-semibold mb-4 flex items-center gap-2"><Sparkles /> AI Tools & Insights</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-3 rounded-lg border border-gray-100">
                    <p className="text-sm text-gray-500">Generator</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="text-sm font-medium">Notice Generator</div>
                      <button onClick={() => handleAiAction("generate")} className="text-sm py-1 px-3 rounded bg-indigo-600 text-white">Run</button>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">Create structured notices in seconds.</p>
                  </div>

                  <div className="p-3 rounded-lg border border-gray-100">
                    <p className="text-sm text-gray-500">Safety</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="text-sm font-medium">Spam Detector</div>
                      <button onClick={() => handleAiAction("detect")} className="text-sm py-1 px-3 rounded bg-red-100 text-red-800">Scan</button>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">Auto flag suspicious notices.</p>
                  </div>

                  <div className="p-3 rounded-lg border border-gray-100">
                    <p className="text-sm text-gray-500">Tone</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="text-sm font-medium">Sentiment</div>
                      <button onClick={() => handleAiAction("sentiment")} className="text-sm py-1 px-3 rounded bg-yellow-100 text-yellow-800">Analyze</button>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">Detect tone & urgency.</p>
                  </div>
                </div>

                {/* AI assistant */}
                <div className="mt-4 border-t pt-4">
                  <div className="flex gap-2">
                    <input value={aiInput} onChange={(e) => setAiInput(e.target.value)} placeholder="Ask AI (e.g. show flagged notices)" className="flex-1 border rounded px-3 py-2" />
                    <button onClick={() => alert("AI (mock): Showing results for - " + aiInput)} className="px-4 py-2 rounded bg-indigo-600 text-white">Ask</button>
                  </div>
                </div>
              </div>

              {/* Notices and history */}
              <div className="bg-white p-5 rounded-xl shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Notices & History</h3>
                  <div className="flex items-center gap-2">
                    <input className="border rounded px-2 py-1 text-sm" placeholder="Filter by category..." />
                    <button className="text-sm px-3 py-1 rounded bg-indigo-50">Export</button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="text-gray-500">
                      <tr>
                        <th className="py-2">Title</th>
                        <th className="py-2">Category</th>
                        <th className="py-2">Tone</th>
                        <th className="py-2">Date</th>
                        <th className="py-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {notices.map((n) => (
                        <tr key={n.id} className="border-t">
                          <td className="py-3">{n.title}</td>
                          <td className="py-3">{n.category}</td>
                          <td className="py-3">{n.tone}</td>
                          <td className="py-3">{n.date}</td>
                          <td className="py-3">
                            <button className="text-xs px-2 py-1 rounded bg-indigo-600 text-white mr-2">View</button>
                            <button className="text-xs px-2 py-1 rounded bg-red-100 text-red-800">Flag</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right column */}
            <aside className="space-y-6">
              {/* Users management */}
              <div className="bg-white p-5 rounded-xl shadow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">User Management</h3>
                  <div className="flex items-center gap-2">
                    <input value={query} onChange={(e) => setQuery(e.target.value)} className="border rounded px-2 py-1 text-sm" placeholder="Search users..." />
                    <button className="text-sm px-3 py-1 rounded bg-indigo-50">Invite</button>
                  </div>
                </div>

                <div className="space-y-3">
                  {filteredUsers.map((u) => (
                    <div key={u.id} className="flex items-center justify-between border rounded px-3 py-2">
                      <div>
                        <div className="font-medium">{u.name}</div>
                        <div className="text-xs text-gray-500">{u.role} • last login {u.lastLogin}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="text-xs px-2 py-1 rounded bg-yellow-50">Edit</button>
                        <button className={`text-xs px-2 py-1 rounded ${u.status === 'active' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>{u.status}</button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 text-xs text-gray-500">Total: {usersData.length}</div>
              </div>

              {/* Timetable */}
              <div className="bg-white p-5 rounded-xl shadow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">Weekly Time Table</h3>
                  <Calendar className="text-gray-400" />
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {timetable.map((t) => (
                    <div key={t.day} className="p-2 rounded bg-gray-50">
                      <div className="font-medium">{t.day}</div>
                      <div className="text-xs text-gray-500">{t.events.join(" • ")}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Messages */}
              <div className="bg-white p-5 rounded-xl shadow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">Messages</h3>
                  <ChevronDown className="text-gray-400" />
                </div>
                <div className="space-y-3 max-h-48 overflow-y-auto">
                  {messages.map((m) => (
                    <div key={m.id} className="border rounded px-3 py-2">
                      <div className="font-medium">{m.from}</div>
                      <div className="text-xs text-gray-600">{m.text}</div>
                      <div className="text-xs text-gray-400 mt-1">{m.date}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warnings & Alerts */}
              <div className="bg-white p-4 rounded-xl shadow">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="text-red-600" />
                  <div>
                    <div className="text-sm font-medium">Warnings</div>
                    <div className="text-xs text-gray-500">{flaggedNotices} flagged notices • 1 system alert</div>
                  </div>
                </div>
              </div>

              {/* Groups / Societies */}
              <div className="bg-white p-4 rounded-xl shadow">
                <h3 className="font-semibold mb-2">Groups / Societies</h3>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="p-2 rounded bg-gray-50 flex items-center justify-between">
                    <div>
                      <div className="font-medium">Robotics Club</div>
                      <div className="text-xs text-gray-500">Admin: Anil Kumar</div>
                    </div>
                    <UserCheck className="text-green-600" />
                  </div>

                  <div className="p-2 rounded bg-gray-50 flex items-center justify-between">
                    <div>
                      <div className="font-medium">Drama Society</div>
                      <div className="text-xs text-gray-500">Admin: Sneha Verma</div>
                    </div>
                    <UserCheck className="text-green-600" />
                  </div>
                </div>
              </div>
            </aside>
          </section>
        </main>
      </div>
    </div>
  );
}
