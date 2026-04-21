import React from "react";

const statuses = ["Invited", "Rejected", "Unknown"];

const JobCard = ({ job, deleteJob, onStatusChange, onToggleApplied }) => {
  const handleClick = () => {
    const next = (statuses.indexOf(job.status) + 1) % statuses.length;
    onStatusChange(job.id, statuses[next]);
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-5 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
      <p className="text-gray-600 mt-1">{job.company}</p>

      <div className="mt-3">
        <span className="text-sm text-gray-500">Status:</span>
        <span
          onClick={handleClick}
          className="ml-2 px-2 py-1 text-sm rounded-lg bg-blue-100 text-blue-700 cursor-pointer"
        >
          {job.status}
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <span className="text-sm text-gray-500">Applied:</span>
        <button
          onClick={() => onToggleApplied(job.id)}
          className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
            job.applied ? "bg-green-500 border-green-500 text-white" : "border-gray-400"
          }`}
        >
          {job.applied ? "✓" : ""}
        </button>
      </div>

      <button
        onClick={() => deleteJob(job.id)}
        className="mt-4 px-3 py-1 bg-red-500 text-white rounded-lg"
      >
        Delete
      </button>
    </div>
  );
};

export default JobCard;