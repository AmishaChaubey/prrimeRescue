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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#09a3db] rounded-full mb-4">
              <Ambulance className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Emergency Medical Response
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              When every second counts, our streamlined process ensures rapid medical intervention
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ambulanceProcess.map((step, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: step.delay }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#09a3db] to-[#0882b0] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                  {index < ambulanceProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-[#09a3db] to-transparent"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Emergency Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: "< 5", label: "Min Response Time" },
              { number: "24/7", label: "Availability" },
              { number: "98%", label: "Success Rate" },
              { number: "50+", label: "Medical Staff" }
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-[#09a3db]/5 to-transparent rounded-xl p-6 text-center border border-[#09a3db]/20">
                <div className="text-3xl font-bold text-[#09a3db] mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funeral Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#e24065] rounded-full mb-4">
              <Flower2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Funeral Arrangement Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide dignified and respectful funeral services with compassion and care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {funeralProcess.map((step, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: step.delay }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#e24065] to-[#c83452] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                  {index < funeralProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-[#e24065] to-transparent"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Service Options */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Service Options</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Traditional Funeral Service",
                "Cremation Services",
                "Memorial Services",
                "Graveside Services",
                "Pre-Planning",
                "Grief Support"
              ].map((service, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-[#e24065]/5 hover:bg-[#e24065]/10 transition-colors duration-300">
                  <div className="w-2 h-2 bg-[#e24065] rounded-full"></div>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional, compassionate, and reliable services when you need them most
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center group-hover:from-[#09a3db]/10 group-hover:to-[#e24065]/10 transition-all duration-300">
                  <feature.icon className="w-10 h-10 text-gray-700 group-hover:text-[#09a3db] transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
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