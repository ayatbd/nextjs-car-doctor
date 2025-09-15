"use client";

import { registerUser } from "@/app/actions/auth/registerUser";

const RegisterForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    await registerUser({ name, email, password });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto max-w-xs">
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
          <svg
            className="w-6 h-6 -ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <path d="M20 8v6M23 11h-6" />
          </svg>
          <span className="ml-3">Sign Up</span>
        </button>
        <p className="mt-6 text-xs text-gray-600 text-center">
          I agree to abide by templatana's{" "}
          <a href="#" className="border-b border-gray-500 border-dotted">
            Terms of Service
          </a>{" "}
          and its{" "}
          <a href="#" className="border-b border-gray-500 border-dotted">
            Privacy Policy
          </a>
        </p>
      </form>
    </>
  );
};

export default RegisterForm;
