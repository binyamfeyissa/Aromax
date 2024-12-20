import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left Column - Login Form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          {/* Logo */}
          {/* <div className="mb-8 text-center">
            <img
              src="/placeholder.svg?height=40&width=120&text=Aromax"
              alt="Aromax Import & Export"
              className="h-8 mx-auto"
            />
          </div> */}

          {/* Welcome Text */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold mb-1">Welcome back!</h1>
            <p className="text-sm text-gray-500">
              Please Enter your account details
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Email address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="rounded border-gray-300 text-[#4a5d4a] focus:ring-[#4a5d4a]"
                />
                <span className="ml-2 text-sm text-gray-600">
                  Remember for 30 days
                </span>
              </label>
              <a
                href="/forgot-password"
                className="text-sm text-[#4a5d4a] hover:underline"
              >
                Forgot password
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#4a5d4a] text-white py-2 rounded-md hover:bg-[#3d4f3d] transition-colors"
            >
              Sign In
            </button>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="/sign-up" className="text-[#4a5d4a] hover:underline">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Right Column - Decorative Background */}
      <div className="hidden md:block bg-[#9ba69b]">
        <div className="h-full w-full relative">
          <div className="inset-0 flex items-center justify-center">
            <div className="text-[40rem] font-bold text-[#8b968b] opacity-50">
              A
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
