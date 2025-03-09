import React from 'react';
import { FormLayout } from '../../components/FormLayout';  // Reusing FormLayout for consistent layout

export function AddLostPerson() {
  return (
    <FormLayout title="Add a Lost Person">
      <form className="space-y-6">
        {/* Upload Photos Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Photos (PNG, JPEG, JPG)</label>
          <div className="grid grid-cols-3 gap-4">
            <input type="file" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            <input type="file" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            <input type="file" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
          </div>
        </div>

        {/* Lost Person Details Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Lost Person Name</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Known Location</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Physical Description</label>
          <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"></textarea>
        </div>

        {/* Reporting Person Details */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Reporting Person Name</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
        </div>

        {/* Person To Be Notified */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Person To Be Notified</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
          </div>
        </div>

        {/* Police Record Information */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Police Case Number</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Police Station</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
        </div>

        {/* Additional Details */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Additional Details</label>
          <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Submit Report
          </button>
        </div>
      </form>
    </FormLayout>
  );
}

export default AddLostPerson; // Default export
