import React from 'react';
import { FormLayout } from '../../components/FormLayout'; // Reusing FormLayout for consistent layout

export function SearchLostPerson() {
  return (
    <FormLayout title="Search Among Lost Persons">
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Enter Lost Person's Name</label>
          <input 
            type="text" 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            placeholder="Search by Name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Age (Optional)</label>
          <input 
            type="number" 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            placeholder="Age"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Gender (Optional)</label>
          <select 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
            <option value="">Any</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <button 
            type="submit" 
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Search
          </button>
        </div>
      </form>
    </FormLayout>
  );
}

export default SearchLostPerson;
