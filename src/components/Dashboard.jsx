import React from "react";
import { useNavigate } from "react-router-dom";
import AddJobForm from "./AddJobForm";
import JobList from "./JobList";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-green-100 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-black">Job Tracker Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-black text-green-300 px-4 py-2 rounded hover:bg-gray-800"
          >
            Logout
          </button>
        </div>
        <AddJobForm />
        <JobList />
      </div>
    </div>
  );
}
