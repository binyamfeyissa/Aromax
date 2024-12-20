import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";

export default function ContactUs() {
  const mapCenter = {
    lat: 9.032,
    lng: 38.7423,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b bg-[#f5f0e6]">
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
            <div className="space-y-6 mb-10">
              <div className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-[#4a5d4a] mr-4" />
                <span>+251 11 234 5678</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-6 w-6 text-[#4a5d4a] mr-4" />
                <span>info@aromaxcoffee.com</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-6 w-6 text-[#4a5d4a] mr-4" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4a5d4a] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4a5d4a] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4a5d4a] focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#4a5d4a] text-white py-3 px-8 rounded-full text-lg hover:bg-[#3d4f3d] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

            <div className="mt-12 h-[80%] rounded-lg overflow-hidden">
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
        </div>
      </section>

      <section className="bg-[#e9e4d9] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Visit Our Coffee Farm</h2>
          <p className="text-xl mb-8">
            Experience the beauty of Ethiopian coffee farms and learn about our
            sustainable practices firsthand.
          </p>
          <button className="bg-[#4a5d4a] text-white py-3 px-8 rounded-full text-lg hover:bg-[#3d4f3d] transition-colors">
            Book a Tour
          </button>
        </div>
      </section>
    </div>
  );
}
