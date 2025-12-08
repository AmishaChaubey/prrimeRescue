import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogData } from "./data";
import { ArrowLeft } from "lucide-react";

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData.find((item) => item.id === parseInt(id));

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
        <div className="text-center max-w-md">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={() => navigate("/blog")}
            className="px-6 py-3 bg-[#0f3b66] text-white rounded-lg hover:bg-[#0f57a0] transition-colors duration-300 flex items-center justify-center gap-2 mx-auto"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 mt-16 md:mt-20">
      {/* Back Button - Sticky at top */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm px-4 sm:px-6 border-b border-gray-200 py-3">
        <button
          onClick={() => navigate("/blog")}
          className="flex items-center gap-2 text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
        >
          <ArrowLeft size={18} />
          <span className="font-medium hidden sm:inline">Back to Blog</span>
        </button>
      </div>

      {/* Banner Image Section */}
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] max-h-[800px] w-full overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Blog title over banner */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full mb-4">
              {blog.category || "Article"}
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
              {blog.title}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-200 text-sm">
              <span>{blog.date}</span>
              <span className="hidden sm:inline">•</span>
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12 lg:py-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8 lg:p-12">
            {/* Article Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 pb-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <span className="font-bold text-red-600">{blog.img}</span>
                <div>
                  <p className="font-medium">{blog.author}</p>
                  <p className="text-sm text-gray-500">Published on {blog.date}</p>
                </div>
              </div>
            </div>

            {/* Blog Content */}
            <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-red-600">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {blog.content}
              </p>
              
              {/* Additional content sections for demonstration */}
              <h2 className="mt-8 sm:mt-10 mb-4 text-xl sm:text-2xl font-bold text-gray-800">Key Takeaways</h2>
              <p className="text-gray-700">
                This section highlights the main points discussed in the article. It provides readers with a quick summary of the important concepts covered.
              </p>
              
              <h3 className="mt-6 sm:mt-8 mb-3 text-lg sm:text-xl font-semibold text-gray-800">Detailed Analysis</h3>
              <p className="text-gray-700">
                Here we dive deeper into the subject matter, exploring nuances and providing comprehensive insights that help readers understand the topic more thoroughly.
              </p>
              
              <blockquote className="mt-6 sm:mt-8 pl-4 sm:pl-6 border-l-4 border-red-500 italic text-gray-700">
                "This is a notable quote that emphasizes an important point from the article."
              </blockquote>
            </div>

            {/* Share Section */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100">
              <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-4">Share this article</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <button className="px-3 sm:px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm">
                  Facebook
                </button>
                <button className="px-3 sm:px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm">
                  Twitter
                </button>
                <button className="px-3 sm:px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm">
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back to Blog Button */}
        <div className="mt-6 sm:mt-8 text-center">
          <button
            onClick={() => navigate("/blog")}
            className="flex items-center gap-2 text-white p-3 sm:p-4 rounded-lg hover:bg-[#0f57a0] transition-colors duration-300 bg-[#0f3b66] mx-auto"
          >
            <ArrowLeft size={18} />
            <span className="font-medium">Back to Blog</span>
          </button>
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in-out;
        }
      `}</style>
    </div>
  );
}