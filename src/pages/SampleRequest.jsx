import React, { useState } from "react";
import {
  ChevronDownIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function SampleRequest() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    delivery: "",
    streetAddress: "",
    country: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-[#f5f0e6]">
      <div className="max-w-5xl mx-auto p-20">
        <h1 className="text-3xl font-bold mb-6">
          Let's Start you're sample request Process
        </h1>
        <p className="text-gray-600 mb-8">Please Enter the following details</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <InformationCircleIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Street Address */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Street address</label>
              <div className="relative">
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  placeholder="Street address"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <InformationCircleIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Email address</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <InformationCircleIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Country */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Country</label>
              <div className="relative">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md appearance-none"
                >
                  <option value="">Select one option</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                </select>
                <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone</label>
              <div className="relative flex">
                <select className="w-24 p-2 border border-gray-300 rounded-l-md">
                  <option value="eur">EUR</option>
                  <option value="usd">USD</option>
                  <option value="gbp">GBP</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="123456789"
                  className="flex-1 p-2 border border-gray-300 rounded-r-md"
                />
                <InformationCircleIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
              <p className="text-sm text-gray-500">
                Your phone will be used to receive WhatsApp text
              </p>
            </div>

            {/* City */}
            <div className="space-y-2">
              <label className="text-sm font-medium">City</label>
              <div className="relative">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <InformationCircleIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Delivery */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Delivery</label>
              <div className="relative">
                <select
                  name="delivery"
                  value={formData.delivery}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md appearance-none"
                >
                  <option value="">Select one option</option>
                  <option value="dhl">DHL</option>
                  <option value="dropoff">Available Drop Location</option>
                </select>
                <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* State */}
            <div className="space-y-2">
              <label className="text-sm font-medium">State</label>
              <div className="relative">
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md appearance-none"
                >
                  <option value="">Select one option</option>
                  <option value="ca">California</option>
                  <option value="ny">New York</option>
                  <option value="tx">Texas</option>
                  <option value="fl">Florida</option>
                </select>
                <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Zip Code */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Zip code</label>
              <div className="relative">
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="Zip code"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <InformationCircleIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#4a5d4a] hover:bg-[#3d4f3d] text-white py-4 rounded-full text-lg"
          >
            Request Sample
          </button>

          <div className="text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                to={`/signup`}
                className="text-[#4a5d4a] hover:underline font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
