import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Navbar } from '../components/Navbar'; // Uncomment when you're ready to use Navbar

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate user input before submission
    if (!username || !password) {
      alert('Please enter both username and password');
      return;
    }
    console.log('Login successful:', { username, password });
    // Implement login logic (API call or other actions)
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar (Uncomment when needed) */}
      {/* <Navbar isLoggedIn={false} username="" onLogout={() => {}} /> */}

      <div className="flex flex-col justify-center items-center flex-grow px-4 sm:px-6 lg:px-8">
        <div className="sm:max-w-md w-full">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            SIGN IN
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mt-1"></div>
        </div>

        <div className="sm:max-w-md w-full mt-6">
          <div className="bg-white py-6 px-4 shadow-md rounded-lg sm:px-10 border border-gray-300">
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Username Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Username *
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm"
                  placeholder="Enter your username"
                />
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>

              {/* OR Divider */}
              <div className="relative flex items-center my-4">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="px-2 text-sm text-gray-500">OR</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              {/* Verify Button */}
              <button
                type="button"
                className="w-full flex justify-center py-2 px-4 border border-blue-900 rounded-md text-blue-900 font-semibold hover:bg-blue-900 hover:text-white transition"
              >
                VERIFY THROUGH EMAIL / PHONE NUMBER
              </button>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-800 transition"
              >
                LOGIN
              </button>
            </form>

            {/* Register Link */}
            <p className="mt-4 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-900 font-medium hover:underline">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
