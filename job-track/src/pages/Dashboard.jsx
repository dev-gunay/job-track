import React from "react";
import JobCard from "../components/JobCard";

function Dashboard() {
  // Beispiel-Daten (später kannst du das durch API oder State ersetzen)
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      status: "Applied",
    },
    {
      id: 2,
      title: "React Developer",
      company: "Meta",
      status: "Interview",
    },
    {
      id: 3,
      title: "Fullstack Developer",
      company: "Startup XYZ",
      status: "Rejected",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h1>
        <p className="text-gray-500">
          Track your job applications
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-gray-500">Total Jobs</h2>
          <p className="text-2xl font-bold">{jobs.length}</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-gray-500">Applied</h2>
          <p className="text-2xl font-bold">1</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-gray-500">Interview</h2>
          <p className="text-2xl font-bold">1</p>
        </div>
      </div>

      {/* Jobs Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">
          Your Jobs
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default Dashboard;