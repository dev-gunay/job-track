import React, { useState } from "react";
import JobCard from "../components/JobCard";

function Dashboard() {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Frontend Developer", company: "Google", status: "Applied", applied: false },
    { id: 2, title: "React Developer", company: "Meta", status: "Invited", applied: false },
    { id: 3, title: "Fullstack Developer", company: "Startup XYZ", status: "Rejected", applied: false },
  ]);

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");

  const addJob = () => {
    if (!title || !company) return;
    setJobs([...jobs, { id: Date.now(), title, company, status: "Applied", applied: false }]);
    setTitle("");
    setCompany("");
  };

  const deleteJob = (id) => setJobs(jobs.filter((job) => job.id !== id));

  const updateStatus = (id, newStatus) => {
    setJobs(jobs.map((job) => (job.id === id ? { ...job, status: newStatus } : job)));
  };

  const toggleApplied = (id) => {
    setJobs(jobs.map((job) => (job.id === id ? { ...job, applied: !job.applied } : job)));
  };

  const appliedCount = jobs.filter((j) => j.applied).length;
  const interviewCount = jobs.filter((j) => j.status === "Invited").length;

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
          <p className="text-2xl font-bold">{appliedCount}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-gray-500">Interview</h2>
          <p className="text-2xl font-bold">{interviewCount}</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <h2 className="font-semibold mb-3">Add Job</h2>
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 mr-2 rounded"
        />
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="border p-2 mr-2 rounded"
        />
        <button onClick={addJob} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Add
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
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