import React, { useState } from "react";
import SessionForm from "../SessionForm/SessionForm";

const Sessions = () => {
  const [sessions, setSessions] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    patient: "",
    therapist: "",
    type: "Counseling",
    date: "",
    notes: ""
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    if (isEditing) {
      setSessions(sessions.map(s => s.id === formData.id ? formData : s));
      setIsEditing(false);
    } else {
      setSessions([...sessions, { ...formData, id: sessions.length ? sessions[sessions.length - 1].id + 1 : 1 }]);
    }
    setFormData({ id: null, patient: "", therapist: "", type: "Counseling", date: "", notes: "" });
  };

  const handleEdit = (session) => {
    setIsEditing(true);
    setFormData(session);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this session?")) {
      setSessions(sessions.filter(s => s.id !== id));
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Mental Health Sessions</h1>

      <SessionForm
        formData={formData}
        setFormData={setFormData}
        onSave={handleSave}
        isEditing={isEditing}
      />

      {/* Table */}
     <div className="overflow-x-auto">
  <table className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden">
    <thead className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-900 text-white">
      <tr>
        <th className="py-3 px-4 text-left font-medium uppercase text-sm tracking-wider">Session ID</th>
        <th className="py-3 px-4 text-left font-medium uppercase text-sm tracking-wider">Patient Name</th>
        <th className="py-3 px-4 text-left font-medium uppercase text-sm tracking-wider">Therapist Name</th>
        <th className="py-3 px-4 text-left font-medium uppercase text-sm tracking-wider">Session Type</th>
        <th className="py-3 px-4 text-left font-medium uppercase text-sm tracking-wider">Date</th>
        <th className="py-3 px-4 text-left font-medium uppercase text-sm tracking-wider">Notes</th>
        <th className="py-3 px-4 text-left font-medium uppercase text-sm tracking-wider">Actions</th>
      </tr>
    </thead>
    <tbody>
      {sessions.map(session => (
        <tr key={session.id} className="border-b last:border-0 hover:bg-gray-50 transition duration-200">
          <td className="py-3 px-4 font-semibold text-gray-700">{session.id}</td>
          <td className="py-3 px-4 text-gray-600">{session.patient}</td>
          <td className="py-3 px-4 text-gray-600">{session.therapist}</td>
          <td className="py-3 px-4 text-gray-600">{session.type}</td>
          <td className="py-3 px-4 text-gray-600">{session.date}</td>
          <td className="py-3 px-4 text-gray-600">{session.notes}</td>
          <td className="py-3 px-4 space-x-2 flex">
            <button
              onClick={() => handleEdit(session)}
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-lg shadow hover:shadow-md transition duration-200"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(session.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg shadow hover:shadow-md transition duration-200"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
  );
};

export default Sessions;