// src/pages/services/ServiceLayout.jsx
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function ServiceLayout({ service }) {
  const { slug } = useParams(); // Track current service slug

  const demoService = service || {
    heroImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=400&fit=crop",
    title: "Professional Consulting Services",
    overview:
      "Transform your business with our comprehensive consulting solutions. We bring expertise, innovation, and dedication to help you achieve your goals and drive sustainable growth.",
    inclusions: [
      "Initial consultation and strategy session",
      "Comprehensive market analysis and research",
      "Custom implementation roadmap",
      "Ongoing support and guidance from experts",
      "Monthly progress reports and reviews",
      "Dedicated account manager",
      "Access to premium resources",
      "Priority customer support",
    ],
    process: [
      {
        step: 1,
        title: "Slot Booking",
        desc: "Call us to book your consultation slot. We're available 24/7 to help ease your burden.",
      },
      {
        step: 2,
        title: "Planning and Preparation",
        desc: "We'll coordinate all necessary arrangements, ensuring your requirements are fully supported.",
      },
      {
        step: 3,
        title: "Implementation",
        desc: "Our team ensures smooth, professional execution along with continuous support.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop",
    ],
    contact: "info@example.com or call +1 (555) 123-4567",
  };

  const data = service || demoService;
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  // Scroll to top whenever the service slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="min-h-screen bg-white">
      {/* ======================= HERO SECTION ======================= */}
      {data.heroImage && (
        <div className="relative overflow-hidden text-white mt-15 h-64 sm:h-80 md:h-96 lg:h-[500px]">
          {/* Background Image + Overlay */}
          <div
            className="absolute inset-0 h-full bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${data.heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-transparent"></div>
          </div>

          {/* Left aligned text */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 h-full flex items-center">
            <div className="w-full md:w-3/4 lg:w-2/3 ml-4 sm:ml-6 md:ml-12 lg:ml-16 mb-7">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 font-serif leading-tight drop-shadow-lg">
                {data.title}
              </h1>

              <div className="h-1 w-20 bg-blue-300 mb-4 sm:mb-6"></div>

              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl drop-shadow">
                {data.overview}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ======================= MAIN CONTENT ======================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        {/* Inclusions */}
        {data.inclusions?.length > 0 && (
          <section className="mb-12 sm:mb-16 md:mb-20" id="inclusions">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-serif">
                What's <span className="text-[#09a3db]">Included</span>
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#09a3db] mx-auto"></div>
              <p className="text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
                Our comprehensive service includes everything you need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {data.inclusions.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start bg-gradient-to-r from-gray-50 to-white p-4 sm:p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 mr-3 sm:mr-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#09a3db] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <svg
                        className="w-4 h-4 sm:w-6 sm:h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-800 font-medium text-sm sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Process */}
        {data.process?.length > 0 && (
          <section className="mb-12 sm:mb-16 md:mb-20" id="process">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-serif">
                Our <span className="text-[#09a3db]">Process</span>
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#09a3db] mx-auto"></div>
              <p className="text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
                A simple, streamlined process designed for your convenience
              </p>
            </div>

            {/* Process Steps Selector for Mobile */}
            <div className="flex justify-center mb-8 md:hidden">
              <div className="inline-flex rounded-lg bg-gray-100 p-1">
                {data.process.map((p, idx) => (
                  <button
                    key={idx}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeProcessStep === idx
                        ? "bg-white text-[#09a3db] shadow-sm"
                        : "text-gray-600"
                    }`}
                    onClick={() => setActiveProcessStep(idx)}
                  >
                    {p.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                {data.process.map((p, idx) => (
                  <div
                    key={idx}
                    className={`relative mb-8 sm:mb-10 md:mb-12 last:mb-0 ${
                      idx !== activeProcessStep ? "hidden md:block" : ""
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 z-10">
                        <div className="w-12 h-12 sm:w-14 sm:h-16 bg-[#09a3db] rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">
                          {String(p.step).padStart(2, "0")}
                        </div>
                      </div>

                      <div className="ml-6 sm:ml-8 md:ml-12 flex-1 bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#09a3db] mb-3 sm:mb-4">
                          {p.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Gallery */}
        {data.gallery?.length > 0 && (
          <section className="mb-12 sm:mb-16 md:mb-20" id="gallery">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#09a3db] mb-3 sm:mb-4 font-serif">
                Gallery
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#09a3db] mx-auto"></div>
              <p className="text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
                Take a look at our work and facilities
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {data.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-medium text-sm sm:text-base">
                      View Image
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact Section */}
        {data.contact && (
          <section className="mt-12 sm:mt-16 md:mt-20">
            <div className="bg-gradient-to-r from-[#09a3db] to-[#1a5490] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 text-center shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/10 rounded-full -mr-16 sm:-mr-24 md:-mr-32 -mt-16 sm:-mt-24 md:-mt-32"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-white/10 rounded-full -ml-12 sm:-ml-18 md:-ml-24 -mb-12 sm:-mb-18 md:-mb-24"></div>

              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 font-serif">
                  Ready to Get Started?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Get in touch with us today and let us help you with your needs.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto text-center">
                    <p className="text-white font-medium text-sm sm:text-base md:text-lg">
                      {data.contact}
                    </p>
                  </div>

                  <Link to="/contact">
                    <button className="bg-white text-[#09a3db] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-gray-100 shadow-lg transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto">
                      Contact Us Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-full rounded-lg object-contain"
            />

            <button
              className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/20 backdrop-blur-sm text-white rounded-full p-2 sm:p-3 hover:bg-white/30 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
