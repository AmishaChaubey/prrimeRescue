import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Phone, Heart, ChevronDown, Snowflake, Flame, Calendar, Clock, 
  User, Mail, MessageSquare, Cross, PlusCircle, Users 
} from 'lucide-react';

export default function FuneralNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const location = useLocation();

  const services = [
    {
      title: 'Dead Body Freezer Box',
      slug: 'dead-body-freezer-box',
      icon: <Snowflake className="w-5 h-5" />,
      color: 'from-blue-400 to-blue-600',
      description: 'Professional refrigeration services for dignified preservation'
    },
    {
      title: 'Funeral Services',
      slug: 'funeral-services',
      icon: <Heart className="w-5 h-5" />,
      color: 'from-red-400 to-red-600',
      description: 'Complete funeral arrangements with respect and care'
    },
    {
      title: 'Ambulance Services',
      slug: 'ambulance-services',
      icon: <Flame className="w-5 h-5" />,
      color: 'from-orange-400 to-orange-600',
      description: 'Prompt and respectful transportation services'
    },
    {
      title: 'ICU Ambulance Services',
      slug: 'icu-ambulance-services',
      icon: <PlusCircle className="w-5 h-5" />,
      color: 'from-red-400 to-red-600',
      description: 'Advanced ICU-equipped ambulances for critical care patients.'
    },
    {
      title: 'Embalming Services',
      slug: 'embalming-services',
      icon: <Cross className="w-5 h-5" />,
      color: 'from-gray-400 to-gray-600',
      description: 'Professional embalming and preservation services with dignity.'
    },
    {
      title: 'Prayer Meetings',
      slug: 'prayer-meetings',
      icon: <Users className="w-5 h-5" />,
      color: 'from-blue-400 to-blue-600',
      description: 'Organizing respectful prayer meetings and gatherings.'
    }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    setBookingModalOpen(false);
  };

  return (
    <>
      <nav className="bg-white fixed w-full top-0 z-50 shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/PrimeRescue-logo.png" 
                alt="NCR Services Logo" 
                className="h-10 sm:h-12 md:h-14 object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">

              <Link 
                to="/" 
                className={`text-sm font-medium relative group ${isActive('/') ? 'text-[#09a3db]' : 'text-gray-600 hover:text-[#09a3db]'}`}
              >
                Home
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#09a3db] to-[#2d8efa] rounded-full transition-all duration-300 ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>

              <Link 
                to="/about" 
                className={`text-sm font-medium relative group ${isActive('/about') ? 'text-[#09a3db]' : 'text-gray-600 hover:text-[#09a3db]'}`}
              >
                About Us
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#09a3db] to-[#2d8efa] rounded-full transition-all duration-300 ${isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => {
                  if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                  setServicesOpen(true);
                }}
                onMouseLeave={() => {
                  closeTimeoutRef.current = setTimeout(() => setServicesOpen(false), 200);
                }}
              >
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`text-sm font-medium flex items-center gap-1 relative group text-gray-600 hover:text-[#09a3db]`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'}`}>
                  <div className="p-2">
                    {services.map((service, index) => (
                      <Link 
                        key={index} 
                        to={`/services/${service.slug}`}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                      >
                        <div className={`bg-gradient-to-br ${service.color} p-2.5 rounded-xl text-white group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 text-sm group-hover:text-[#09a3db] transition-colors duration-300">{service.title}</h4>
                          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/blog" className={`text-sm font-medium relative group ${isActive('/blog') ? 'text-[#09a3db]' : 'text-gray-600 hover:text-[#09a3db]'}`}>
                Blog
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#09a3db] to-[#2d8efa] rounded-full transition-all duration-300 ${isActive('/blog') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>

              <Link to="/contact" className={`text-sm font-medium relative group ${isActive('/contact') ? 'text-[#09a3db]' : 'text-gray-600 hover:text-[#09a3db]'}`}>
                Contact
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#09a3db] to-[#2d8efa] rounded-full transition-all duration-300 ${isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>

              <button 
                onClick={() => setBookingModalOpen(true)}
                className="bg-[#e24065] text-white px-4 sm:px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg text-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-4 h-4" /> 
                <span className="hidden sm:inline">Book Now</span>
                <span className="sm:hidden">Book</span>
              </button>
            </div>

            {/* Tablet Menu */}
            <div className="hidden md:flex lg:hidden items-center space-x-3">
              <button 
                onClick={() => setBookingModalOpen(true)}
                className="bg-[#e24065] text-white px-4 py-2.5 rounded-full flex items-center gap-2 shadow-lg text-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-4 h-4" /> 
                <span>Book Now</span>
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-600 hover:text-[#09a3db] p-2 transition-colors duration-300 rounded-lg hover:bg-gray-100">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="flex flex-col px-4 py-4 space-y-2">
            <Link to="/" onClick={closeMobileMenu} className={`text-gray-700 hover:text-[#09a3db] py-2 ${isActive('/') ? 'text-[#09a3db] font-medium' : ''}`}>Home</Link>
            <Link to="/about" onClick={closeMobileMenu} className={`text-gray-700 hover:text-[#09a3db] py-2 ${isActive('/about') ? 'text-[#09a3db] font-medium' : ''}`}>About Us</Link>

            {/* Mobile Services */}
            <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="flex items-center justify-between w-full text-gray-700 hover:text-[#09a3db] py-2">
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="flex flex-col pl-4 space-y-2 pb-2">
                {services.map((service, index) => (
                  <Link 
                    key={index} 
                    to={`/services/${service.slug}`}
                    onClick={closeMobileMenu}
                    className={`text-gray-600 hover:text-[#09a3db] py-1 ${isActive(`/services/${service.slug}`) ? 'text-[#09a3db] font-medium' : ''}`}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/blog" onClick={closeMobileMenu} className={`text-gray-700 hover:text-[#09a3db] py-2 ${isActive('/blog') ? 'text-[#09a3db] font-medium' : ''}`}>Blog</Link>
            <Link to="/contact" onClick={closeMobileMenu} className={`text-gray-700 hover:text-[#09a3db] py-2 ${isActive('/contact') ? 'text-[#09a3db] font-medium' : ''}`}>Contact</Link>

            <button onClick={() => { setBookingModalOpen(true); closeMobileMenu(); }} className="bg-[#e24065] text-white px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg text-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300 mt-2">
              <Phone className="w-4 h-4" /> Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Booking Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-[#09a3db]">Book Our Services</h2>
                <button onClick={() => setBookingModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="text" required className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#09a3db] focus:border-transparent" placeholder="Your Name" />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="email" required className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#09a3db] focus:border-transparent" placeholder="email@example.com" />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="tel" required className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#09a3db] focus:border-transparent" placeholder="+91 9XXXXXXXXX" />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                  <select required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#09a3db] focus:border-transparent">
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.slug}>{service.title}</option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="date" required className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#09a3db] focus:border-transparent" />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Clock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="time" required className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#09a3db] focus:border-transparent" />
                  </div>
                </div>

                {/* Additional Info */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                  <div className="relative">
                    <div className="absolute top-3 left-0 pl-3 pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea rows="3" className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#09a3db] focus:border-transparent" placeholder="Please provide any additional details..."></textarea>
                  </div>
                </div>

                <button type="submit" className="w-full bg-[#e24065] text-white py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300">
                  Submit Booking Request
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}