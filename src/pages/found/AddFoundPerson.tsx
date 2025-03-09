import React from 'react';
import { FormLayout } from '../../components/FormLayout';

export function AddFoundPerson() {
  return (
    <FormLayout title="Add a Found Person">
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Location Found</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Estimated Age</label>
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
          <label className="block text-sm font-medium text-gray-700">Physical Description</label>
          <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Current Location/Shelter</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Medical Condition</label>
          <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"></textarea>
        </div>
        <div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Submit Report
          </button>
        </div>
      </form>
    </FormLayout>
  );
}
export default AddFoundPerson; // Default export
