import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="h-screen w-64 bg-gray-800 text-white p-4">
            <h2 className="text-xl font-bold mb-6"> Sidebar</h2>
            <ul className="space-y-4">
                <li>
                    <Link to="/dashboard" className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/sessions" className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Mental Health Sessions
                    </Link>
                </li>
                <li>
                    <Link to="/mentalHealthReports" className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Reports
                    </Link>
                </li>
                <li>
                    <Link to="/sessionList" className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Sessionlist
                    </Link>
                    </li>
                    <li>
                    <Link to="/home" className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Home
                    </Link>
                </li>
                 
            </ul>
        </div>
    );
};

export default Sidebar;
