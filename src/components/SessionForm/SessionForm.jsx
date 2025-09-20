import React, { useState } from "react";

const SessionForm = ({ formData, setFormData, onSave, isEditing }) => {
  const [errors, setErrors] = useState({});

  const handleSave = () => {
    const newErrors = {};

    if (!formData.patient.trim()) newErrors.patient = "Patient Name is required.";
    if (!formData.therapist.trim()) newErrors.therapist = "Therapist Name is required.";
    if (!formData.type) newErrors.type = "Session Type is required.";
    if (!formData.date) newErrors.date = "Date is required.";
    if (formData.notes.length > 200) newErrors.notes = "Notes cannot exceed 200 characters.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Call parent onSave with current formData
    onSave(formData);

    // Reset form after saving
    setFormData({ id: null, patient: "", therapist: "", type: "Counseling", date: "", notes: "" });
    setErrors({});
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">{isEditing ? "Edit Session" : "Add Session"}</h2>

      <div className="mb-4">
        <label>Patient Name</label>
        <input
          type="text"
          value={formData.patient}
          onChange={(e) => setFormData({ ...formData, patient: e.target.value })}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.patient && <p className="text-red-500">{errors.patient}</p>}
      </div>

      <div className="mb-4">
        <label>Therapist Name</label>
        <input
          type="text"
          value={formData.therapist}
          onChange={(e) => setFormData({ ...formData, therapist: e.target.value })}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.therapist && <p className="text-red-500">{errors.therapist}</p>}
      </div>

      <div className="mb-4">
        <label>Session Type</label>
        <select
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="Counseling">Counseling</option>
          <option value="Cognitive Therapy">Cognitive Therapy</option>
          <option value="Group Therapy">Group Therapy</option>
          <option value="Follow-up">Follow-up</option>
        </select>
        {errors.type && <p className="text-red-500">{errors.type}</p>}
      </div>

      <div className="mb-4">
        <label>Date</label>
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.date && <p className="text-red-500">{errors.date}</p>}
      </div>

      <div className="mb-4">
        <label>Notes</label>
        <textarea
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          maxLength={200}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.notes && <p className="text-red-500">{errors.notes}</p>}
      </div>

      <button
        onClick={handleSave}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        {isEditing ? "Update Session" : "Add Session"}
      </button>
    </div>
  );
};

export default SessionForm;
