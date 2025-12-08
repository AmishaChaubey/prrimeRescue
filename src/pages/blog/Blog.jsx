import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Ambulance } from "lucide-react";
import { blogData } from "./data";
import { IoBookOutline } from "react-icons/io5";

export default function BlogList() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Banner */}
    <div className="relative overflow-hidden text-white mt-15 h-64 sm:h-80 md:h-96 lg:h-[500px]">
  {/* Background Image with Parallax Effect */}
  <div className="absolute inset-0 h-[70vh] sm:h-[80vh] md:h-[95vh]  bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/banner/29.png')" }}>
    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-transparent"></div>
  </div>

  <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
    <div className="w-full md:w-3/4 lg:w-2/3">
      <div className="inline-block mb-2">
       </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 font-serif leading-tight drop-shadow-lg">
        Our <span className="text-blue-300">Blogs</span>
      </h1>
      <div className="h-1 w-20 bg-blue-300 mb-4 sm:mb-6"></div>
      <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl drop-shadow">
       Tough times may slow you down, but they can never stop the strength that lives inside you.
      </p>
    </div>
  </div>
</div>

      {/* Blog Grid */}
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogData.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.03] transition duration-300 cursor-pointer"
              onClick={() => navigate(`/blog/${blog.id}`)}
            >
              <div className="relative h-48 sm:h-56 md:h-58 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm sm:text-base">
                  {blog.excerpt}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/blog/${blog.id}`);
                  }}
                  className="inline-flex items-center text-gray-800 font-semibold hover:text-gray-600 transition text-sm sm:text-base"
                >
                  Learn More <span className="ml-1">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}