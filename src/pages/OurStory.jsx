import React from "react";
import coffeeBags2 from "../assets/coffee2.jpg";
export default function OurStory() {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-[#f5f0e6]">
      <header className="text-blck py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Story</h1>
        <p className="text-xl">The Journey of Aromax Coffee</p>
      </header>

      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Our Roots in Ethiopian Soil
            </h2>
            <p className="text-lg mb-4">
              Founded in 2005, Aromax Coffee began as a small family-owned farm
              in the lush highlands of Ethiopia. Our passion for coffee and
              commitment to quality has driven us to become one of the leading
              coffee exporters in the country.
            </p>
            <p className="text-lg">
              We take pride in our direct relationships with local farmers,
              ensuring fair prices and sustainable practices that benefit both
              the environment and our communities.
            </p>
          </div>
          <img
            src={coffeeBags2}
            alt="Coffee Farm"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="bg-[#e9e4d9] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <h3 className="text-2xl font-semibold">2005</h3>
                <p className="text-lg">Aromax Coffee is born</p>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <p className="text-lg">
                  Our family starts a small coffee farm in the Yirgacheffe
                  region, known for its exceptional coffee.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <h3 className="text-2xl font-semibold">2010</h3>
                <p className="text-lg">Expansion and partnerships</p>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <p className="text-lg">
                  We begin partnering with local farmers to increase production
                  and improve quality control.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <h3 className="text-2xl font-semibold">2015</h3>
                <p className="text-lg">International recognition</p>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <p className="text-lg">
                  Our coffee wins several international awards, putting Aromax
                  on the global specialty coffee map.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <h3 className="text-2xl font-semibold">2020</h3>
                <p className="text-lg">Sustainability initiatives</p>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <p className="text-lg">
                  We launch our sustainability program, focusing on
                  environmental conservation and community development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl mb-8">
            To share the rich flavors of Ethiopian coffee with the world while
            promoting sustainable farming practices and improving the lives of
            our local communities.
          </p>
        </div>
      </section>
    </div>
  );
}
