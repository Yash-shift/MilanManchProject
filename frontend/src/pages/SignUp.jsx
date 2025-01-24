import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import BackButton from "../components/BackButton";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [confirm, setconfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      // Validate form data
      if (!name || !email || !password || !number) {
        setErrorMessage("Please fill in all fields");
        return;
      }

      if (password !== confirm) {
        setErrorMessage("Passwords do not match");
        return;
      }

      if (password.length < 6) {
        setErrorMessage("Password must be at least 6 characters");
        return;
      }

      if (!/^\d{10}$/.test(number)) {
        setErrorMessage("Please enter a valid 10-digit phone number");
        return;
      }

      console.log('Submitting form data:', { name, email, password, number }); // Debug log
      
      await register(name, email, password, number);
      navigate('/');
    } catch (error) {
      setErrorMessage(error.message);
      console.error("Failed to sign up:", error);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16 flex items-center bg-amber-50">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-8">
            Sign Up
          </h2>
          {errorMessage && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
              {errorMessage}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md p-1 border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md  p-1 border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="number"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="Phonenumber"
                id="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 p-1 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 p-1 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirm"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm"
                value={confirm}
                onChange={(e) => setconfirm(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 p-1 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition-colors"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/signin" className="text-amber-600 hover:text-amber-700">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
