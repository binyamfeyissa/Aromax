import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import coffeeBags1 from "../assets/coffee.jpg";
import coffeeBags2 from "../assets/coffee2.jpg";
import coffeePlant1 from "../assets/coffee.jpg";
import coffeePlant2 from "../assets/coffee2.jpg";
import coffeePlant3 from "../assets/coffee3.jpg";
import coffeePlant4 from "../assets/coffee2.jpg";
import placeholder from "../assets/coffee3.jpg";
export default function OurCoffee() {
  const coffeeTypes = [
    {
      name: "Yirgacheffe",
      description: "Floral and fruity notes with a light body",
      rating: 4.8,
    },
    {
      name: "Sidamo",
      description: "Wine-like acidity with complex fruit flavors",
      rating: 4.7,
    },
    {
      name: "Limu",
      description: "Bright acidity with wine and floral notes",
      rating: 4.6,
    },
    {
      name: "Guji",
      description: "Jasmine aroma with a creamy body",
      rating: 4.9,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f0e6]">
      <header className="text-black py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Coffee</h1>
        <p className="text-xl">Discover the Rich Flavors of Ethiopian Coffee</p>
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
            src={coffeeBags1}
            alt="Coffee Farm"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={coffeeBags1}
            alt="Coffee Farm"
            className="rounded-lg shadow-lg"
          />
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
        </div>
      </section>

      <section className=" py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Coffee Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src={coffeeBags1}
                alt="Harvesting"
                className="w-32 h-32 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">Careful Harvesting</h3>
              <p className="text-gray-600">
                We handpick only the ripest coffee cherries for optimal flavor.
              </p>
            </div>
            <div className="text-center">
              <img
                src={coffeeBags1}
                alt="Processing"
                className="w-32 h-32 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">
                Meticulous Processing
              </h3>
              <p className="text-gray-600">
                Our beans are processed using both washed and natural methods to
                bring out unique flavors.
              </p>
            </div>
            <div className="text-center">
              <img
                src={coffeeBags1}
                alt="Roasting"
                className="w-32 h-32 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">Expert Roasting</h3>
              <p className="text-gray-600">
                We roast our beans to perfection, ensuring the best taste in
                every cup.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Experience Ethiopian Coffee
          </h2>
          <p className="text-xl mb-8">
            Discover the unique flavors and aromas that make Ethiopian coffee
            world-renowned.
          </p>
          <button className="bg-[#4a5d4a] text-white py-3 px-8 rounded-full text-lg hover:bg-[#3d4f3d] transition-colors">
            Order a Sample
          </button>
        </div>
      </section>
    </div>
  );
}
