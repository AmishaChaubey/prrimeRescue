import React from 'react';
import { 
  PhoneCall, 
  Ambulance, 
  Users, 
  Heart, 
  Clock, 
  FileText, 
  MapPin, 
  Shield,
  Flower2,
  Calendar,
  UserCheck
} from 'lucide-react';

const ProcessSection = () => {
  const ambulanceProcess = [
    {
      icon: PhoneCall,
      title: "Emergency Call",
      description: "24/7 hotline available for immediate medical assistance",
      delay: "0ms"
    },
    {
      icon: MapPin,
      title: "Quick Dispatch",
      description: "Nearest ambulance deployed to your location within minutes",
      delay: "100ms"
    },
    {
      icon: Ambulance,
      title: "Rapid Response",
      description: "Professional medical team arrives with life-saving equipment",
      delay: "200ms"
    },
    {
      icon: Heart,
      title: "Critical Care",
      description: "Advanced medical support during transport to hospital",
      delay: "300ms"
    }
  ];

  const funeralProcess = [
    {
      icon: PhoneCall,
      title: "Initial Contact",
      description: "Compassionate guidance during your time of need",
      delay: "0ms"
    },
    {
      icon: FileText,
      title: "Arrangement Planning",
      description: "Personalized funeral services tailored to your wishes",
      delay: "100ms"
    },
    {
      icon: Users,
      title: "Family Support",
      description: "Dedicated support for family throughout the process",
      delay: "200ms"
    },
    {
      icon: Flower2,
      title: "Memorial Service",
      description: "Dignified ceremony honoring your loved one's life",
      delay: "300ms"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock emergency and support services"
    },
    {
      icon: Shield,
      title: "Certified Professionals",
      description: "Licensed medical staff and funeral directors"
    },
    {
      icon: UserCheck,
      title: "Compassionate Care",
      description: "Empathetic support during difficult times"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Services arranged according to your needs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      
      {/* Tab Navigation */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      </div>

      {/* Ambulance Process Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-[#09a3db] rounded-full mb-4">
              <Ambulance className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Emergency Medical <span className='text-[#09a3db]'> Response</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              When every second counts, our streamlined process ensures rapid medical intervention
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {ambulanceProcess.map((step, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: step.delay }}
              >
                <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#09a3db] to-[#0882b0] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {step.description}
                    </p>
                  </div>
                  {index < ambulanceProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-[#09a3db] to-transparent"></div>
                    </div>
                  )}
                  {/* Mobile connector */}
                  {index < ambulanceProcess.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-4">
                      <div className="w-6 h-0.5 bg-gradient-to-r from-[#09a3db] to-transparent"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Emergency Stats */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: "< 5", label: "Min Response Time" },
              { number: "24/7", label: "Availability" },
              { number: "98%", label: "Success Rate" },
              { number: "50+", label: "Medical Staff" }
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-[#09a3db]/5 to-transparent rounded-xl p-4 sm:p-6 text-center border border-[#09a3db]/20">
                <div className="text-2xl sm:text-3xl font-bold text-[#09a3db] mb-1">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funeral Process Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-[#e24065] rounded-full mb-4">
              <Flower2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Funeral Arrangement Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              We provide dignified and respectful funeral services with compassion and care
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {funeralProcess.map((step, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: step.delay }}
              >
                <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#e24065] to-[#c83452] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {step.description}
                    </p>
                  </div>
                  {index < funeralProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-[#e24065] to-transparent"></div>
                    </div>
                  )}
                  {/* Mobile connector */}
                  {index < funeralProcess.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-4">
                      <div className="w-6 h-0.5 bg-gradient-to-r from-[#e24065] to-transparent"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Service Options */}
          <div className="mt-12 sm:mt-16 bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Service Options</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                "Ambulance Service",
                "ICU Ambulance Service",
                "Cremation Services",
                "Deadbody Freezerbox",
                "Funeral Services",
                "Prayer Meeting",
                "Embalming Services"
              ].map((service, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 sm:p-4 rounded-lg bg-[#e24065]/5 hover:bg-[#e24065]/10 transition-colors duration-300">
                  <div className="w-2 h-2 bg-[#e24065] rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className='text-[#09a3db]'>Us</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Professional, compassionate, and reliable services when you need them most
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center group-hover:from-[#09a3db]/10 group-hover:to-[#e24065]/10 transition-all duration-300">
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700 group-hover:text-[#09a3db] transition-colors duration-300" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessSection;