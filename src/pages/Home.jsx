import React, { useState } from "react";
import {
  StarIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import coffeeBags1 from "../assets/coffee.jpg";
import coffeeBags2 from "../assets/coffee2.jpg";
import coffeePlant1 from "../assets/coffee.jpg";
import coffeePlant2 from "../assets/coffee2.jpg";
import coffeePlant3 from "../assets/coffee3.jpg";
import coffeePlant4 from "../assets/coffee2.jpg";
import placeholder from "../assets/coffee3.jpg";
import { Link } from "react-router-dom";

function Home() {
  const [currentReview, setCurrentReview] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const reviews = [
    {
      name: "Jane Smith",
      text: "The quality of the coffee is exceptional. We have been sourcing from Aromax for years and have never been disappointed.",
      rating: 5,
      image: placeholder,
    },
    {
      name: "John Doe",
      text: "Aromax's customer service is top-notch. They always ensure our orders are delivered on time.",
      rating: 5,
      image: placeholder,
    },
  ];

  const mapCenter = {
    lat: 9.032,
    lng: 38.7423,
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f0e6] via-[#5c6b5c] to-[#f5f0e6] w-full">
      {/* Hero Section */}
      <section className="text-center px-4 py-16 max-w-4xl mx-auto">
        <div className="flex justify-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="h-5 w-5 text-orange-400" />
          ))}
        </div>
        <p className="text-sm mb-4">Rated 5/5 by over 700 customers</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Premium Coffee from the Heart of Ethiopia
        </h1>
        <p className="text-xl mb-4">Sustainably Grown, Expertly Roasted</p>
        <p className="mb-8">Experience the rich flavors of our coffee</p>
        <div className="flex justify-center space-x-4">
          <Link
            to={`/sample-request`}
            className="px-6 py-3 rounded-full bg-[#e9e4d9] text-gray-800"
          >
            Request Sample
          </Link>
          <Link
            to={`/login`}
            className="px-6 py-3 rounded-full bg-[#4a5d4a] text-white"
          >
            Log In
          </Link>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="text-center py-12">
        <p className="text-sm mb-8">Trusted By</p>
        <div className="flex justify-center space-x-8 flex-wrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-gray-600">
              Company
            </span>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">About Us</h2>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                Our Journey from Farm to Cup
              </h3>
              <p className="text-gray-700">
                Aromax Coffee was founded with a mission to bring the finest
                Ethiopian coffee to the world. Our coffee is grown in the lush
                highlands, where the unique climate and fertile soil produce
                beans of exceptional quality.
              </p>
              <button className="w-full bg-[#4a5d4a] text-white py-3 rounded-lg">
                Explore
              </button>
            </div>
            <div className="relative mt-8">
              <img
                src={coffeeBags1}
                alt="Coffee Bags"
                className="w-full h-[400px] object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="space-y-6">
            <img
              src={coffeeBags2}
              alt="Coffee Bags"
              className="w-full h-[300px] object-cover rounded-2xl"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Our Purpose</h3>
              <p className="text-gray-700">
                We are committed to sustainable farming practices and fair
                trade. Our goal is to support local communities and ensure that
                our coffee is produced in an environmentally friendly manner.
              </p>
              <button className="w-full bg-[#4a5d4a] text-white py-3 rounded-lg">
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Coffee Section */}
      <section className="px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          About Our Coffee
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="relative">
            <img
              src={coffeePlant1}
              alt="Coffee Plant"
              className="rounded-2xl w-full"
            />
            <p className="mt-4">Our coffee plants are nurtured with care</p>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div>
              <img
                src={coffeePlant2}
                alt="Coffee Plant"
                className="rounded-2xl w-full"
              />
              <p className="mt-4">Handpicked at the peak of ripeness</p>
            </div>
            <div>
              <img
                src={coffeePlant3}
                alt="Coffee Plant"
                className="rounded-2xl w-full"
              />
              <p className="mt-4">Processed to preserve the rich flavors</p>
            </div>
          </div>
          <div>
            <img
              src={coffeePlant4}
              alt="Coffee Plant"
              className="rounded-2xl w-full"
            />
            <p className="mt-4">Delivered fresh to your doorstep</p>
            <button className="px-6 py-3 rounded-full bg-[#e9e4d9] text-gray-800 mt-4">
              Explore
            </button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <div className="relative bg-gray-100 rounded-2xl aspect-video flex items-center justify-center">
          <button className="h-16 w-16 rounded-full bg-white/80 flex items-center justify-center">
            <PlayIcon className="h-8 w-8 text-gray-800" />
          </button>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Customer Reviews</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => setCurrentReview((prev) => Math.max(0, prev - 1))}
              className="p-2 rounded-full bg-white hover:bg-gray-100 transition-colors"
              disabled={currentReview === 0}
            >
              <ArrowLeftIcon className="h-6 w-6" />
            </button>
            <button
              onClick={() =>
                setCurrentReview((prev) =>
                  Math.min(reviews.length - 1, prev + 1)
                )
              }
              className="p-2 rounded-full bg-white hover:bg-gray-100 transition-colors"
              disabled={currentReview === reviews.length - 1}
            >
              <ArrowRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews
            .slice(currentReview, currentReview + 2)
            .map((review, idx) => (
              <div key={idx} className="bg-[#e9e4d9]/80 p-6 rounded-2xl">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold">{review.name}</h3>
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <StarIcon key={i} className="h-4 w-4 text-orange-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">{review.text}</p>
              </div>
            ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.380501276581!2d38.73170767582664!3d8.937040290420002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b81824298f331%3A0x445bffe4b609c2e3!2zSGFpbGUgR2FybWVudCBTcXVhcmUgfCDhiIPhi63hiIwg4YyL4Yit4YiY4YqV4Ym1IOGKoOGLsOGJo-GJo-GLrQ!5e0!3m2!1sen!2set!4v1734378770919!5m2!1sen!2set"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Blog Section */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Blog</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className=" rounded-2xl overflow-hidden">
              <img src={placeholder} alt="Blog" className="w-full" />
              <div className="p-4">
                <h3 className="font-bold mb-2">Sustainable Coffee Farming</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Learn about our sustainable farming practices and how we
                  support local communities.
                </p>
                <button className="text-sm font-medium">View details</button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-3 rounded-full bg-[#4a5d4a] text-white">
            View All
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full p-3 rounded-lg bg-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-3 rounded-lg bg-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full p-3 rounded-lg bg-white h-32"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#4a5d4a] text-white py-3 rounded-lg hover:bg-[#3d4f3d] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="h-[500px] rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.380501276581!2d38.73170767582664!3d8.937040290420002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b81824298f331%3A0x445bffe4b609c2e3!2zSGFpbGUgR2FybWVudCBTcXVhcmUgfCDhiIPhi63hiIwg4YyL4Yit4YiY4YqV4Ym1IOGKoOGLsOGJo-GJo-GLrQ!5e0!3m2!1sen!2set!4v1734378770919!5m2!1sen!2set"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
