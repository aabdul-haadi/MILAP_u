import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    fatherName: '',
    password: '',
    email: '',
    phoneNumber: '',
    cnicPassport: '',
    category: '',
    organization: '',
    streetAddress: '',
    addressCoordinates: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}

      <div className="flex flex-col justify-center items-center flex-grow px-4 sm:px-6 lg:px-8">
        <div className="sm:max-w-2xl w-full">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            SIGN UP
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mt-1"></div>
        </div>

        <div className="sm:max-w-2xl w-full mt-6">
          <div className="bg-white py-6 px-4 shadow-md rounded-lg sm:px-10 border border-gray-300">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
              
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-900 focus:border-blue-900"
                  placeholder="Enter Your Full Name"
                />
              </div>

              {/* Username */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Username *</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-900 focus:border-blue-900"
                  placeholder="Enter Username"
                />
              </div>

              {/* Father's Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Father's Name *</label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-900 focus:border-blue-900"
                  placeholder="Enter Your Father Name"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Password *</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-900 focus:border-blue-900"
                  placeholder="Enter Password"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-900 focus:border-blue-900"
                  placeholder="Enter Your Email Address To Receive OTP"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-900 focus:border-blue-900"
                  placeholder="+92 300 1234567"
                />
              </div>

              {/* CNIC / Passport Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700">CNIC / Passport Number *</label>
                <input
                  type="text"
                  name="cnicPassport"
                  value={formData.cnicPassport}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-900 focus:border-blue-900"
                  placeholder="12345-1234567-8"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-900 focus:border-blue-900"
                >
                  <option value="">Choose Category</option>
                  <option value="Individual">Individual</option>
                  <option value="Organization">Organization</option>
                </select>
              </div>

              {/* Name of Organization */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Name Of Organization</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-900 focus:border-blue-900"
                  placeholder="Enter Your Organization Name"
                />
              </div>

              {/* Street Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Street Address</label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-900 focus:border-blue-900"
                  placeholder="Enter Your Address"
                />
              </div>

              {/* Address Coordinates */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Address Coordinates</label>
                <input
                  type="text"
                  name="addressCoordinates"
                  value={formData.addressCoordinates}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-900 focus:border-blue-900"
                  placeholder="Enter Google Map Location"
                />
              </div>
            </form>

            {/* Create Account Button */}
            <button className="w-full mt-6 bg-blue-900 text-white py-2 rounded-md text-lg font-semibold hover:bg-blue-800">
              CREATE ACCOUNT
            </button>

            {/* Already Have an Account */}
            <p className="mt-4 text-center text-sm text-gray-600">
              Already Have an Account? <Link to="/login" className="text-blue-900 font-medium hover:underline">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;