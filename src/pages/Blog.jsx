import React from "react";
import coffeeBags2 from "../assets/coffee2.jpg";
export default function CoffeeBlog() {
  const blogPosts = [
    {
      title: "The Art of Coffee Cupping",
      excerpt:
        "Discover the professional tasting technique that helps identify the subtle flavors and aromas in coffee.",
      image: "/placeholder.svg?height=300&width=400&text=Coffee+Cupping",
      date: "May 15, 2024",
    },
    {
      title: "Exploring Ethiopian Coffee Regions",
      excerpt:
        "Take a journey through the diverse coffee-growing regions of Ethiopia and their unique flavor profiles.",
      image: "/placeholder.svg?height=300&width=400&text=Coffee+Regions",
      date: "April 28, 2024",
    },
    {
      title: "Sustainable Coffee Farming Practices",
      excerpt:
        "Learn about the eco-friendly methods we use to cultivate our coffee and support local ecosystems.",
      image: "/placeholder.svg?height=300&width=400&text=Sustainable+Farming",
      date: "April 10, 2024",
    },
    {
      title: "From Bean to Cup: The Coffee Processing Journey",
      excerpt:
        "Follow the fascinating process of how coffee cherries become the delicious brew in your morning cup.",
      image: "/placeholder.svg?height=300&width=400&text=Coffee+Processing",
      date: "March 22, 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b bg-[#f5f0e6]">
      <header className=" text-black py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Coffee Blog</h1>
        <p className="text-xl">
          Insights and Stories from the World of Ethiopian Coffee
        </p>
      </header>

      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={coffeeBags2}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <button className="bg-[#4a5d4a] text-white py-2 px-4 rounded-full text-sm hover:bg-[#3d4f3d] transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
