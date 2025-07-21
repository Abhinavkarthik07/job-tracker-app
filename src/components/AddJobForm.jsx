import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function AddJobForm() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("Applied");
  const [appliedDate, setAppliedDate] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!company || !position || !status || !appliedDate) {
      setError("Please fill all fields.");
      return;
    }

    try {
      await addDoc(collection(db, "jobs"), {
        company,
        position,
        status,
        appliedDate,
        createdAt: serverTimestamp(),
      });
      setSuccess("Job added successfully!");
      setCompany("");
      setPosition("");
      setStatus("Applied");
      setAppliedDate("");
    } catch (err) {
      setError("Failed to add job. Try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black p-6 rounded-md shadow-md mb-10 max-w-xl mx-auto"
    >
      <h2 className="text-green-300 text-2xl mb-4 font-semibold">Add New Job</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-400 mb-4">{success}</p>}

      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="w-full p-3 mb-4 rounded text-black"
        required
      />

      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className="w-full p-3 mb-4 rounded text-black"
        required
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full p-3 mb-4 rounded text-black"
        required
      >
        <option>Applied</option>
        <option>Interviewing</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>

      <input
        type="date"
        value={appliedDate}
        onChange={(e) => setAppliedDate(e.target.value)}
        className="w-full p-3 mb-4 rounded text-black"
        required
      />

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-semibold"
      >
        Add Job
      </button>
    </form>
  );
}
