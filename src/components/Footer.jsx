// components/Footer.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Heart, Facebook, Twitter, Instagram, Linkedin, ChevronRight, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <>
      <style jsx>{`
        :root {
          --primary-color: #0f3b66;
          --primary-light: #1e5a94;
          --primary-lighter: #2d7bc2;
          --primary-accent: #4299e1;
          --text-white: #ffffff;
          --text-muted: rgba(255, 255, 255, 0.7);
        }
        
        .footer-gradient {
          background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
        }
        
        .footer-text {
          color: var(--text-white);
        }
        
        .footer-text-muted {
          color: var(--text-muted);
        }
        
        .footer-link {
          color: var(--text-white);
          transition: all 0.3s ease;
          position: relative;
          display: inline-block;
        }
        
        .footer-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: var(--primary-accent);
          transition: width 0.3s ease;
        }
        
      .footer-link:hover {
  color: #ffffff;
}

        
        .footer-link:hover::after {
          width: 100%;
        }
        
        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          background-color: var(--primary-accent);
          transform: translateY(-3px);
        }
        
        .contact-item {
          transition: all 0.3s ease;
        }
        
        .contact-item:hover {
          transform: translateX(5px);
        }
        
        .contact-item:hover .contact-icon {
          color: var(--primary-accent);
        }
        
        .back-to-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
        }
        
        .back-to-top.visible {
          opacity: 1;
          visibility: visible;
        }
        
        .back-to-top:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }
        
        .footer-shape {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }
        
        .footer-shape svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 40px;
        }
        
        .footer-shape .shape-fill {
          fill: var(--primary-color);
        }
        
        .newsletter-input {
          background-color: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 12px 16px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .newsletter-input:focus {
          outline: none;
          border-color: var(--primary-accent);
          background-color: rgba(255, 255, 255, 0.15);
        }
        
        .newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        
        .newsletter-button {
          background-color: var(--primary-accent);
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 500;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }
        
        .newsletter-button:hover {
          background-color: var(--primary-lighter);
          transform: translateY(-2px);
        }
        
        .success-message {
          color: #4ade80;
          margin-top: 8px;
          font-size: 14px;
        }
        
        @media (max-width: 640px) {
          .back-to-top {
            bottom: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
          }
        }
      `}</style>

      <div className="footer-shape">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
      
      <footer className="footer-gradient pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <h3 className="text-xl font-bold footer-text">NCR Funeral & Deadbody Freezerbox</h3>
              </div>
              <p className="footer-text-muted mb-6 leading-relaxed">
                Providing compassionate funeral services and preservation solutions with dignity and respect for over two decades.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold footer-text mb-6 relative pb-2">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-accent"></span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-white" />
                  <Link to="/" className="footer-link">Home</Link>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-white" />
                  <Link to="/about" className="footer-link">About Us</Link>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-white" />
                  <Link to="/services" className="footer-link">Our Services</Link>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-white" />
                  <Link to="/testimonials" className="footer-link">Testimonials</Link>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-white" />
                  <Link to="/contact" className="footer-link">Contact</Link>
                </li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold footer-text mb-6 relative pb-2">
                Our Services
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-accent"></span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-white" />
                  <Link to="/services/freezer-box" className="footer-link">Dead Body Freezer Box</Link>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-white" />
                  <Link to="/services/funeral" className="footer-link">Funeral Services</Link>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-white" />
                  <Link to="/services/memorial" className="footer-link">Memorial Services</Link>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-white" />
                  <Link to="/services/grief-support" className="footer-link">Grief Support</Link>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold footer-text mb-6 relative pb-2">
                Contact Us
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-accent"></span>
              </h3>
              <ul className="space-y-4">
                <li className="contact-item flex items-start">
                  <Phone className="contact-icon w-5 h-5 mr-3 mt-0.5 text-white" />
                  <div>
                    <a href="tel:+15551234567" className="footer-text">+91 99999999</a>
                    <p className="footer-text-muted text-sm">Mon-Fri: 9am-6pm</p>
                  </div>
                </li>
                <li className="contact-item flex items-start">
                  <Mail className="contact-icon w-5 h-5 mr-3 mt-0.5 text-white" />
                  <a href="mailto:info@funeralservices.com" className="footer-text">info@ncrfuneralservice.com</a>
                </li>
                <li className="contact-item flex items-start">
                  <MapPin className="contact-icon w-5 h-5 mr-3 mt-0.5 text-white" />
                  <div className="footer-text">
                    <p>noida</p>
                    <p className="footer-text-muted">City, State 12345</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Newsletter Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-12">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-4 lg:mb-0 lg:mr-8">
                <h3 className="text-xl font-semibold footer-text mb-2">Stay Connected</h3>
                <p className="footer-text-muted">Subscribe to our newsletter for updates and resources</p>
              </div>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full lg:w-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-input mb-3 sm:mb-0 sm:mr-3 w-full lg:w-64"
                  required
                />
                <button type="submit" className="newsletter-button w-full sm:w-auto">
                  Subscribe
                </button>
              </form>
              {subscribed && <p className="success-message">Thank you for subscribing!</p>}
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <p className="footer-text-muted text-sm mb-4 md:mb-0">
                © {currentYear} NCR Funeral & Deadbody Freezerbox. All rights reserved.
              </p>
          
            </div>
          </div>
        </div>
        
        {/* Back to Top Button */}
        <div 
          className={`back-to-top ${isVisible ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </div>
      </footer>
    </>
  );
};

export default Footer;