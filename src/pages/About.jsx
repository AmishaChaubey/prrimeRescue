import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Home, Heart, Shield, Phone, Clock, CheckCircle, Target, Award, HandHeart } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProcessSection from './Process';

// --- ANIMATION VARIANTS ---
// Reusable animation definitions for consistency and performance
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Animate children one after another
    },
  },
};

// --- REUSABLE COMPONENTS ---

/**
 * A wrapper component that triggers a fade-in animation
 * when its content comes into the user's view.
 */
const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * The main hero section with a background image and parallax text effect.
 */
const ParallaxHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div
      ref={ref}
      className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] mt-15 flex items-center overflow-hidden"
    >
      <img
        src="/banner/About.png"
        alt="Peaceful landscape representing dignity and peace"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60 z-10"></div>

      {/* Hero content - Responsive positioning */}
      <motion.div
        style={{ y: textY }}
        className="relative z-20 text-white px-4 sm:px-6 md:px-12 lg:px-16 ml-4 sm:ml-6 md:ml-10 lg:ml-16 max-w-4xl"
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight font-serif"
          variants={fadeInUpVariants}
        >
          A Gentle Farewell <span className="text-[#09a3db]">with Respect</span>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-blue-300 mb-4 sm:mb-6"></div>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl max-w-3xl opacity-90"
          variants={fadeInUpVariants}
          transition={{ delay: 0.2 }}
        >
          We are committed to providing compassionate and professional funeral
          services, creating meaningful memorials that celebrate and cherish the
          lives of your loved ones.
        </motion.p>

        <motion.div
          className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4"
          variants={fadeInUpVariants}
          transition={{ delay: 0.4 }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 1. Hero Section */}
      <ParallaxHero />

      {/* 2. Services Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          {/* Heading Section */}
          <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-serif"
              variants={fadeInUpVariants}
            >
              Our Comprehensive <span className='text-[#09a3db]'> Services</span>
            </motion.h2>

            <motion.div 
              className="w-16 sm:w-20 md:w-24 h-1 bg-[#09a3db] mx-auto rounded-full mb-4 sm:mb-6"
              variants={fadeInUpVariants}
            ></motion.div>

            <motion.p 
              className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto px-4"
              variants={fadeInUpVariants}
            >
              We provide a full range of services tailored to meet your family's unique needs during this difficult time.
            </motion.p>
          </AnimatedSection>

          {/* All Services */}
          <AnimatedSection>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              variants={staggerContainer}
            >
              {[
                { 
                  icon: <Home className="w-8 h-8 text-[#09a3db]" />, 
                  title: 'Dead Body Freezer Box', 
                  description: 'We provide 24×7 dead body freezer box services to preserve the body safely for long durations with proper temperature control and hygienic equipment.',
                  features: [
                    '24×7 Availability',
                    'Low-Temperature Preservation',
                    'Quick Home Delivery',
                    'Hygienic & Well-Maintained Boxes'
                  ]
                },
                { 
                  icon: <Heart className="w-8 h-8 text-[#09a3db]" />, 
                  title: 'Funeral Services', 
                  description: 'We offer complete funeral arrangements with dignity, ensuring all rituals and requirements are handled smoothly and respectfully.',
                  features: [
                    'Ritual & Ceremony Assistance',
                    'Pandit & Samagri Arrangement',
                    'Cremation Ground Booking',
                    'Hearse Van & Staff Support'
                  ]
                },
                { 
                  icon: <Shield className="w-8 h-8 text-[#09a3db]" />, 
                  title: 'Ambulance Services', 
                  description: 'Emergency and non-emergency ambulance services with trained staff for safe and timely transportation of patients or deceased.',
                  features: [
                    'AC & Non-AC Ambulance',
                    'Dead Body Ambulance',
                    'Trained Medical Staff',
                    'Quick Response & 24×7 Service'
                  ]
                }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUpVariants}
                  whileHover={{ y: -8 }}
                  className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#09a3db]/10 to-[#09a3db]/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                    {service.icon}
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-[#09a3db]">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    {service.description}
                  </p>

                  <ul className="space-y-1 sm:space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#09a3db]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>

          {/* Bottom Info Text */}
          <div className="flex justify-center mt-8 sm:mt-12 md:mt-16">
            <div className="bg-blue-100 text-[#09a3db] text-center p-3 sm:p-4 text-xs sm:text-sm md:text-base rounded-full max-w-md">
              Explore more services from the dropdown menu above.
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission, Vision, Values Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUpVariants}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 font-serif">Our Guiding <span className='text-[#09a3db]'>Principles</span> </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8">
                  At DignityCare, our work is guided by a deep commitment to compassion, integrity, and excellence.
                </p>
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  {[
                    { icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />, title: 'Our Mission', desc: 'To support families with compassionate, dignified, and affordable services.' },
                    { icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />, title: 'Our Vision', desc: 'To be the most trusted funeral service provider, known for our excellence.' },
                    { icon: <HandHeart className="w-5 h-5 sm:w-6 sm:h-6" />, title: 'Our Values', desc: 'We operate with compassion, dignity, and integrity, ensuring every family feels supported.' },
                  ].map((item, index) => (
                    <motion.div key={index} variants={fadeInUpVariants} className="flex gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#09a3db]/10 rounded-xl flex items-center justify-center flex-shrink-0 text-[#09a3db]">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 text-[#09a3db] font-serif">{item.title}</h3>
                        <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div 
                variants={scaleInVariants}
                className="relative"
              >
                <img 
                  src="/img-about.jpg" 
                  alt="Compassionate care" 
                  className="rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl w-full h-auto object-cover"
                />
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
      
      <ProcessSection />

      {/* 4. Call to Action Section - Enhanced Design */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Subtle background gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#09a3db]/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              variants={staggerContainer}
            >

              {/* Image on the LEFT */}
              <motion.div
                variants={scaleInVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative order-2 lg:order-1 mx-auto lg:mx-0"
              >
                <div className="absolute inset-0 "></div>
                <img
                  src="/ctaa2.png"
                  alt="Compassionate professional offering support"
                  className="relative w-full max-w-md lg:max-w-full h-auto object-cover rounded-2xl sm:rounded-3xl"
                />
              </motion.div>

              {/* Content on the RIGHT */}
              <motion.div variants={fadeInUpVariants} className="order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 font-serif">
                  We Are Here <span className='text-[#09a3db]'> For You</span>
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium mb-4 sm:mb-6">
                  A compassionate team, ready to help 24/7.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  If you need immediate assistance or have any questions, our compassionate team is available to help you through this difficult time. We provide support with dignity and respect.
                </p>

                {/* Get in touch button */}
                <Link to="/contact">
                  <motion.button
                    variants={fadeInUpVariants}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(9, 163, 219, 0.2)" }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#e24065] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg transition-all duration-300 flex items-center gap-3 group w-full sm:w-auto justify-center"
                  >
                    Get In Touch
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </Link>

                {/* Phone number */}
                <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base">
                  Or call us directly at:
                  <a
                    href="tel:+917050988589"
                    className="font-semibold text-[#09a3db] hover:underline ml-1"
                  >
                    +91 7050988589
                  </a>
                </p>
              </motion.div>

            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;