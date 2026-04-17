const JobCard = (props) => {
  const job = props.job;

  return (
    <div className="bg-white shadow-md rounded-2xl p-5 mb-4 border border-gray-200 hover:shadow-lg transition">
      
      <h3 className="text-xl font-semibold text-gray-800">
        {job.title}
      </h3>

      <p className="text-gray-600 mt-1">
        {job.company}
      </p>

      <div className="mt-3">
        <span className="text-sm text-gray-500">Status:</span>
        <span className="ml-2 px-2 py-1 text-sm rounded-lg bg-blue-100 text-blue-700">
          {job.status}
        </span>
      </div>

    </div>
  );
};

export default JobCard;