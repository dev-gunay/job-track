import React, { useState } from "react";
import JobCard from "../components/JobCard";

// Reihenfolge: Unknown > Invited > Applied > Rejected
const STATUS_ORDER = { Unknown: 0, Invited: 1, Applied: 2, Rejected: 3 };

function Dashboard() {
  const [jobs, setJobs] = useState([]); // kein statischer Inhalt mehr

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");

  const addJob = () => {
    if (!title || !company) return;
    setJobs([...jobs, {
      id: Date.now(),
      title,
      company,
      description,
      status: "Unknown",
      applied: false,
    }]);
    setTitle("");
    setCompany("");
    setDescription("");
  };

  const deleteJob = (id) => setJobs(jobs.filter((job) => job.id !== id));

  const updateStatus = (id, newStatus) => {
    setJobs(jobs.map((job) => (job.id === id ? { ...job, status: newStatus } : job)));
  };

  const toggleApplied = (id) => {
    setJobs(jobs.map((job) => (job.id === id ? { ...job, applied: !job.applied } : job)));
  };

  const sortedJobs = [...jobs].sort((a, b) => {
    const diff = (STATUS_ORDER[a.status] ?? 99) - (STATUS_ORDER[b.status] ?? 99);
    if (diff !== 0) return diff;
    return Number(a.applied) - Number(b.applied); // nicht applied kommt zuerst
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500">Track your job applications</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-gray-500">Total Jobs</h2>
          <p className="text-2xl font-bold">{jobs.length}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-gray-500">Applied</h2>
          <p className="text-2xl font-bold">{jobs.filter((j) => j.applied).length}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-gray-500">Interviews</h2>
          <p className="text-2xl font-bold">{jobs.filter((j) => j.status === "Invited").length}</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <h2 className="font-semibold mb-3">Job hinzufügen</h2>
        <div className="flex flex-wrap gap-2">
          <input type="text" placeholder="Job Title" value={title}
            onChange={(e) => setTitle(e.target.value)} className="border p-2 rounded flex-1" />
          <input type="text" placeholder="Company" value={company}
            onChange={(e) => setCompany(e.target.value)} className="border p-2 rounded flex-1" />
          <input type="text" placeholder="Beschreibung (optional)" value={description}
            onChange={(e) => setDescription(e.target.value)} className="border p-2 rounded w-full" />
          <button onClick={addJob} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Add</button>
        </div>
      </div>

      {jobs.length === 0 && (
        <p className="text-gray-400 text-center mt-10">Noch keine Jobs eingetragen.</p>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {sortedJobs.map((job) => (
          <JobCard key={job.id} job={job}
            deleteJob={deleteJob}
            onStatusChange={updateStatus}
            onToggleApplied={toggleApplied}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;