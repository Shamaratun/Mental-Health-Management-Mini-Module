import React, { useState } from "react";

const SessionList = () => {
  const [sessions, setSessions] = useState([
    { id: 1, name: "Session One" },
    { id: 2, name: "Session Two" },
    { id: 3, name: "Session Three" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);

  const handleDeleteClick = (session) => {
    setSelectedSession(session);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    setSessions(sessions.filter((s) => s.id !== selectedSession.id));
    setShowModal(false);
    setSelectedSession(null);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setSelectedSession(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Session List</h2>

      <ul className="w-full max-w-md space-y-3">
        {sessions.map((session) => (
          <li
            key={session.id}
            className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <span className="text-gray-700 font-medium">{session.name}</span>
            <button
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
              onClick={() => handleDeleteClick(session)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-xl shadow-xl w-96 p-6 animate-fadeIn">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Confirm Deletion
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete{" "}
              <span className="font-semibold text-red-600">
                {selectedSession.name}
              </span>
              ?
            </p>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-400 transition-colors"
                onClick={handleCancelDelete}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                onClick={handleConfirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SessionList;
