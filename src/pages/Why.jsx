import React from 'react';
import { Link } from 'react-router-dom';

export default function FuneralServicesSection() {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div>
            <div className="inline-block">
              <div className="text-[#09a3db] text-sm font-semibold mb-4 flex items-center">
                <span className="inline-block w-8 h-0.5 bg-[#09a3db] mr-3"></span>
                WHY CHOOSE US
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 leading-tight">
              Compassionate Funeral Services for Your Loved Ones
            </h2>
            <p className="text-base text-gray-600 max-w-xl mb-8 leading-relaxed">
              During times of loss, we provide dignified and respectful funeral
              services. Our experienced team understands the importance of honoring
              your loved ones with care and compassion. We handle all arrangements
              with sensitivity, allowing you to focus on remembering and celebrating
              the life of those who have passed.
            </p>
           <Link to='/contact'> <button className="bg-[#09a3db] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center hover:bg-blue-700 text-sm">
          
         Contact us
            </button></Link>
          </div>
          
          {/* Right Section - Service Cards */}
          <div className="grid grid-cols-2 gap-6">
            {/* Funeral Planning - Top Left */}
            <div className="bg-[#09a3db] rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 col-span-1 row-span-1 flex flex-col items-center justify-center">
              <div className="text-white mb-4">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Funeral Planning
              </h3>
              <p className="text-sm text-blue-100">
                Complete arrangements with dignity and respect
              </p>
            </div>

            {/* Body Preparation - Top Right */}
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300 col-span-1 row-span-1 flex flex-col items-center justify-center border border-gray-200">
              <div className="text-[#09a3db]-600 mb-3">
                <svg className="w-10 h-10 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-2">
                Body Preparation
              </h3>
              <p className="text-xs text-gray-500">
                Professional care and preparation services
              </p>
            </div>

            {/* Memorial Services - Bottom Left */}
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300 col-span-1 row-span-1 flex flex-col items-center justify-center border border-gray-200">
              <div className="text-[#09a3db]-600 mb-3">
                <svg className="w-10 h-10 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-2">
                Memorial Services
              </h3>
              <p className="text-xs text-gray-500">
                Personalized ceremonies to honor lives
              </p>
            </div>

            {/* Cremation Services - Bottom Right */}
            <div className="bg-[#09a3db] rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 col-span-1 row-span-1 flex flex-col items-center justify-center">
              <div className="text-white mb-4">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Cremation Services
              </h3>
              <p className="text-sm text-blue-100">
                Dignified cremation with care and respect
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}