import React, { useState } from "react";

const SessionForm = ({ onSave, initialData }) => {
  const [patient, setPatient] = useState(initialData?.patient || "");
  const [therapist, setTherapist] = useState(initialData?.therapist || "");
  const [type, setType] = useState(initialData?.type || "");
  const [date, setDate] = useState(initialData?.date || "");
  const [notes, setNotes] = useState(initialData?.notes || "");

  const [errors, setErrors] = useState({});

  const handleSave = () => {
    const newErrors = {};

    // Required validation
    if (!patient.trim()) newErrors.patient = "Patient Name is required.";
    if (!therapist.trim()) newErrors.therapist = "Therapist Name is required.";
    if (!type) newErrors.type = "Session Type is required.";
    if (!date) newErrors.date = "Date is required.";

    // Backdate validation
    if (date && new Date(date) < new Date(new Date().toISOString().split("T")[0])) {
      newErrors.date = "Date cannot be in the past.";
    }

    // Notes length validation
    if (notes.length > 200) newErrors.notes = "Notes cannot exceed 200 characters.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If valid, call onSave
    onSave({
      patient,
      therapist,
      type,
      date,
      notes,
    });

    // Reset form
    setPatient("");
    setTherapist("");
    setType("");
    setDate("");
    setNotes("");
    setErrors({});
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Add / Edit Session</h2>

      {/* Patient Name */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Patient Name</label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2"
          value={patient}
          onChange={(e) => setPatient(e.target.value)}
        />
        {errors.patient && <p className="text-red-500 text-sm mt-1">{errors.patient}</p>}
      </div>

      {/* Therapist Name */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Therapist Name</label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2"
          value={therapist}
          onChange={(e) => setTherapist(e.target.value)}
        />
        {errors.therapist && <p className="text-red-500 text-sm mt-1">{errors.therapist}</p>}
      </div>

      {/* Session Type */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Session Type</label>
        <select
          className="w-full border rounded px-3 py-2"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Select Type</option>
          <option value="Counseling">Counseling</option>
          <option value="Cognitive Therapy">Cognitive Therapy</option>
          <option value="Group Therapy">Group Therapy</option>
          <option value="Follow-up">Follow-up</option>
        </select>
        {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
      </div>

      {/* Date */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Session Date</label>
        <input
          type="date"
          className="w-full border rounded px-3 py-2"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
      </div>

      {/* Notes */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Notes (optional)</label>
        <textarea
          className="w-full border rounded px-3 py-2"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          maxLength={200}
        />
        {errors.notes && <p className="text-red-500 text-sm mt-1">{errors.notes}</p>}
      </div>

      <button
  onClick={handleSave}
  className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
>
  {initialData ? "Update Session" : "Add Session"}
</button>
    </div>
  );
};

export default SessionForm;