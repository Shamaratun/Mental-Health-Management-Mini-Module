import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

const MentalHealthReports = () => {
  // Sample session data
  const sessionTypeData = [
    { name: 'Counseling', count: 45 },
    { name: 'Cognitive Therapy', count: 32 },
    { name: 'Group Therapy', count: 28 },
    { name: 'Follow-up', count: 18 }
  ];

  const monthlySessions = [
    { month: 'Jan', sessions: 50 },
    { month: 'Feb', sessions: 65 },
    { month: 'Mar', sessions: 40 },
    { month: 'Apr', sessions: 55 },
    { month: 'May', sessions: 60 },
    { month: 'Jun', sessions: 70 }
  ];

  const patientSatisfactionData = [
    { name: 'Excellent', value: 45 },
    { name: 'Good', value: 30 },
    { name: 'Average', value: 15 },
    { name: 'Poor', value: 10 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // Key metrics
  const metrics = [
    { title: 'Total Sessions', value: '140', change: '+8%', trend: 'up' },
    { title: 'Avg. Session per Patient', value: '3.2', change: '+0.4', trend: 'up' },
    { title: 'Active Therapists', value: '6', change: '0', trend: 'up' },
    { title: 'Patient Satisfaction', value: '88%', change: '+4%', trend: 'up' }
  ];

  return (
    <div className="p-8 ml-64">
      <h1 className="text-2xl font-bold mb-6">Mental Health Reports & Analytics</h1>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-600 text-sm font-medium">{metric.title}</h3>
            <p className="text-2xl font-bold text-gray-800 mt-2">{metric.value}</p>
            <div className={`flex items-center mt-2 ${
              metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              <span className="text-sm">{metric.change}</span>
              <span className="ml-1">{metric.trend === 'up' ? '↑' : '↓'}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Sessions by Type */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Sessions by Type</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={sessionTypeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" name="Number of Sessions" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Session Trend */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Monthly Session Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlySessions}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sessions" fill="#00C49F" name="Sessions" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Patient Satisfaction */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-lg font-semibold mb-4">Patient Satisfaction</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={patientSatisfactionData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
            >
              {patientSatisfactionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => [`${value}%`, 'Patients']} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Session Details Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Session Details</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left">Patient</th>
                <th className="px-4 py-2 text-left">Therapist</th>
                <th className="px-4 py-2 text-left">Session Type</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                { patient: 'John Doe', therapist: 'Dr. Smith', type: 'Counseling', date: '2025-09-20', notes: 'Anxious, follow-up needed.' },
                { patient: 'Jane Roe', therapist: 'Dr. Brown', type: 'Group Therapy', date: '2025-09-19', notes: 'Active participant.' },
                { patient: 'Mark Lee', therapist: 'Dr. Clark', type: 'Cognitive Therapy', date: '2025-09-18', notes: 'Thought patterns improvement.' },
              ].map((session, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-2 border">{session.patient}</td>
                  <td className="px-4 py-2 border">{session.therapist}</td>
                  <td className="px-4 py-2 border">{session.type}</td>
                  <td className="px-4 py-2 border">{session.date}</td>
                  <td className="px-4 py-2 border">{session.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default MentalHealthReports;
