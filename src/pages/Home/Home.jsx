import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const stats = [
        { title: "Total Patients", value: 120 },
        { title: "Sessions Completed", value: 95 },
        { title: "Pending Follow-ups", value: 10 },
        { title: "Average Mood Score", value: 7.8 },
    ];

    const features = [
        { title: "View Dashboard", path: "/dashboard" },
        { title: "Manage Sessions", path: "/sessions" },
        { title: "Add New Patient", path: "/sessions" }, // Example path
        { title: "Reports & Analytics", path: "/dashboard" }, // Example path
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-500">Welcome to Mental Health App</h1>
                <p className="text-gray-600 mt-1">
                    Track patients, monitor sessions, and manage therapy progress effectively.
                </p>
            </div>
            <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <Link
                            key={index}
                            to={feature.path}
                            className="bg-blue-500 text-white p-6 rounded-lg shadow-md hover:bg-blue-600 transition"
                        >
                            {feature.title}
                        </Link>
                    ))}
                </div>
            </div>
            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 
                 rounded-2xl shadow-xl text-white p-6 
                 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                        <div className="flex items-center justify-between">
                            {/* Icon Placeholder */}
                            <div className="p-3 bg-white/20 rounded-xl">
                                <span className="text-3xl">📊</span>
                            </div>
                            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                                +12%
                            </span>
                        </div>

                        <div className="mt-6">
                            <div className="text-4xl font-extrabold tracking-tight">{stat.value}</div>
                            <div className="mt-2 text-lg opacity-90">{stat.title}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Feature Cards */}
            {/* <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.path}
              className="bg-blue-500 text-white p-6 rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              {feature.title}
            </Link>
          ))}
        </div>
      </div> */}
        </div>
    );
};

export default Home;