import React from 'react';
import { FormLayout } from '../../components/FormLayout'; // Reusing FormLayout for consistent layout

export function UpdateFoundPersonCorpse() {
  return (
    <FormLayout title="Update Found Person/Corpse Details">
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Enter Found Person/Corpse ID</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            placeholder="Enter ID of the Found Person or Corpse"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name (if known)</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            placeholder="Full Name"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              placeholder="Age of Found Person or Corpse"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location Found</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            placeholder="Location Where Found Person/Corpse Was Found"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Physical Description</label>
          <textarea
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            placeholder="Physical Description"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Update Report
          </button>
        </div>
      </form>
    </FormLayout>
  );
}

export default UpdateFoundPersonCorpse;
