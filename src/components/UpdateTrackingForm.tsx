import React, { useState } from "react";

interface UpdateTrackingFormProps {
  title: string; // Title of the form
}

const UpdateTrackingForm: React.FC<UpdateTrackingFormProps> = ({ title }) => {
  const [trackingId, setTrackingId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${title} Tracking ID Submitted:`, trackingId);
  };

  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">{title}</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700">
            Enter Tracking ID Of The Case You Want To Update
          </label>
          <div className="relative flex items-center mt-1">
            <input
              type="text"
              className="w-full bg-gray-200 text-gray-700 rounded-md px-4 py-3 shadow-sm border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter Tracking ID"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-0 inset-y-0 bg-blue-900 text-white px-4 flex items-center justify-center rounded-r-md hover:bg-blue-800 transition duration-200"
            >
              ➝
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateTrackingForm;
