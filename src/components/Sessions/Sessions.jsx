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
  const handleSave = (data) => {
  if (isEditing) {
      // Update existing session
      setSessions(sessions.map(s => s.id === data.id ? data : s));
      setIsEditing(false);
    } else {
      // Generate ID starting from 1, incrementing by 1
      const newId = sessions.length ? Math.max(...sessions.map(s => s.id)) + 1 : 1;
      setSessions([...sessions, { ...data, id: newId }]);
    }
    // Reset form
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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mental Health Sessions</h1>

      <SessionForm
        formData={formData}
        setFormData={setFormData}
        onSave={handleSave}
        isEditing={isEditing}
      />

      {/* Table */}
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <thead className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-900 text-white">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-medium">ID</th>
              <th className="py-3 px-4 text-left text-sm font-medium">Patient</th>
              <th className="py-3 px-4 text-left text-sm font-medium">Therapist</th>
              <th className="py-3 px-4 text-left text-sm font-medium">Type</th>
              <th className="py-3 px-4 text-left text-sm font-medium">Date</th>
              <th className="py-3 px-4 text-left text-sm font-medium">Notes</th>
              <th className="py-3 px-4 text-left text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map(session => (
              <tr key={session.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{session.id}</td>
                <td className="py-2 px-4">{session.patient}</td>
                <td className="py-2 px-4">{session.therapist}</td>
                <td className="py-2 px-4">{session.type}</td>
                <td className="py-2 px-4">{session.date}</td>
                <td className="py-2 px-4">{session.notes}</td>
                <td className="py-2 px-4 flex gap-2">
                  <button
                    onClick={() => handleEdit(session)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(session.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {sessions.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  No sessions added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sessions;