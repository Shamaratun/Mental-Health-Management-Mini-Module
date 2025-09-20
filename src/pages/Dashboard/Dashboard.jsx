 import React  from "react";
// { useState } from "react";
// import {
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";

const Dashboard = () => {
     const stats = [
    {
      title: "Users",
      value: "12,345",
      change: "+8%",
      icon: "👥",
      color: "from-indigo-500 via-purple-500 to-pink-500"
    },
    {
      title: "Revenue",
      value: "$56,789",
      change: "+15%",
      icon: "💰",
      color: "from-green-400 via-emerald-500 to-teal-500"
    },
    {
      title: "Orders",
      value: "2,345",
      change: "-5%",
      icon: "📦",
      color: "from-orange-400 via-pink-500 to-red-500"
    },
    {
      title: "Growth",
      value: "78%",
      change: "+12%",
      icon: "📈",
      color: "from-blue-400 via-cyan-500 to-teal-500"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${stat.color} 
              rounded-2xl shadow-xl text-white p-6 
              transform transition duration-300 hover:scale-105 hover:shadow-2xl`}
          >
            <div className="flex items-center justify-between">
              <div className="p-3 bg-white/20 rounded-xl">
                <span className="text-3xl">{stat.icon}</span>
              </div>
              <span
                className={`text-sm font-medium px-3 py-1 rounded-full ${
                  stat.change.startsWith("-")
                    ? "bg-red-500/30 text-red-200"
                    : "bg-white/20"
                }`}
              >
                {stat.change}
              </span>
            </div>

            <div className="mt-6">
              <div className="text-4xl font-extrabold tracking-tight">
                {stat.value}
              </div>
              <div className="mt-2 text-lg opacity-90">{stat.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

//   const [timeRange, setTimeRange] = useState("monthly");

//   // Sample data
//   const sessionStats = {
//     totalSessions: 120,
//     completedToday: 10,
//     avgMoodScore: 7.8,
//     pendingFollowUps: 12,
//   };

//   const monthlyData = [
//     { month: "Jan", sessions: 20, avgMood: 7.5 },
//     { month: "Feb", sessions: 18, avgMood: 7.8 },
//     { month: "Mar", sessions: 25, avgMood: 8.0 },
//     { month: "Apr", sessions: 22, avgMood: 7.9 },
//     { month: "May", sessions: 30, avgMood: 8.2 },
//     { month: "Jun", sessions: 28, avgMood: 7.6 },
//   ];

//   const moodDistribution = [
//     { name: "Happy", value: 45, color: "#4ade80" },
//     { name: "Neutral", value: 30, color: "#facc15" },
//     { name: "Sad", value: 15, color: "#f87171" },
//     { name: "Anxious", value: 10, color: "#60a5fa" },
//   ];

//   return (
//     <div className="p-8 min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
//         <p className="text-gray-600 mt-1">
//           Overview of sessions, mood trends, and patient metrics
//         </p>
//       </div>

//       {/* Quick Stats */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <div className="text-2xl font-bold text-gray-800">{sessionStats.totalSessions}</div>
//           <div className="text-gray-600 mt-1">Total Sessions</div>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <div className="text-2xl font-bold text-gray-800">{sessionStats.completedToday}</div>
//           <div className="text-gray-600 mt-1">Completed Today</div>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <div className="text-2xl font-bold text-gray-800">{sessionStats.avgMoodScore}</div>
//           <div className="text-gray-600 mt-1">Average Mood Score</div>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <div className="text-2xl font-bold text-gray-800">{sessionStats.pendingFollowUps}</div>
//           <div className="text-gray-600 mt-1">Pending Follow-ups</div>
//         </div>
//       </div>

//       {/* Charts */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//         {/* Sessions Trend Chart */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-lg font-semibold">Sessions Trend</h2>
//             <select
//               className="border rounded px-2 py-1 text-sm"
//               value={timeRange}
//               onChange={(e) => setTimeRange(e.target.value)}
//             >
//               <option value="weekly">Weekly</option>
//               <option value="monthly">Monthly</option>
//               <option value="quarterly">Quarterly</option>
//             </select>
//           </div>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={monthlyData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="sessions" stroke="#4ade80" strokeWidth={2} />
//               <Line type="monotone" dataKey="avgMood" stroke="#60a5fa" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Mood Distribution */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold mb-4">Mood Distribution</h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={moodDistribution}
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={100}
//                 label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
//               >
//                 {moodDistribution.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={entry.color} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Dashboard;