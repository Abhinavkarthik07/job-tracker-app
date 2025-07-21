import React, { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export default function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "jobs"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const jobsData = [];
      querySnapshot.forEach((doc) => {
        jobsData.push({ id: doc.id, ...doc.data() });
      });
      setJobs(jobsData);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-black mb-6">Your Jobs</h2>
      {jobs.length === 0 ? (
        <p className="text-black">No jobs added yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map(({ id, company, position, status, appliedDate }) => (
            <div
              key={id}
              className="bg-black p-6 rounded-md shadow-md text-green-300"
            >
              <h3 className="text-xl font-semibold mb-2">{position}</h3>
              <p><strong>Company:</strong> {company}</p>
              <p><strong>Status:</strong> {status}</p>
              <p><strong>Applied Date:</strong> {appliedDate}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
