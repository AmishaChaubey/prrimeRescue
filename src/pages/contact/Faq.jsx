import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    // Ambulance Services
    {
      question: "What types of ambulance services do you provide?",
      answer: "We offer comprehensive ambulance services including emergency medical transportation, ICU-equipped ambulances, hearse vans for dignified transfers, and specialized vehicles for long-distance body transportation across all major cities."
    },
    {
      question: "How quickly can an ambulance reach my location?",
      answer: "Our emergency ambulance service ensures rapid response with average arrival times of 15-30 minutes in urban areas. We operate 24/7 with strategically located ambulance stations to minimize response time during critical situations."
    },
    {
      question: "Are your ambulances equipped with medical facilities?",
      answer: "Yes, our ambulances are fully equipped with oxygen cylinders, cardiac monitors, first aid supplies, and stretchers. Our ICU ambulances include ventilators, defibrillators, and advanced life support systems for critical patients during transportation."
    },
   
    
    // Funeral Services
    {
      question: "What comprehensive funeral services do you offer?",
      answer: "We provide complete end-to-end funeral arrangements including body collection, embalming, casket selection, transportation, funeral venue booking, priest coordination, documentation assistance, and cremation or burial services across all religious traditions."
    },
    {
      question: "How quickly can you arrange a freezer box after a death occurs?",
      answer: "We ensure prompt delivery of dead body freezer boxes within 30-45 minutes anywhere in the city. Our 24×7 service includes professional setup, temperature monitoring, and extended preservation options for families needing time for relatives to arrive."
    },
    {
      question: "Do you assist with legal documentation required after death?",
      answer: "Yes, our team provides complete assistance with death certificate preparation, medical documentation, cremation/burial permits, and other necessary paperwork. We guide families through the entire process to ensure all legal requirements are properly fulfilled."
    },
    
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-black mb-5">
          Frequently <span className="text-[#09a3db]">Asked Questions</span>
        </h2>
        <p className="mb-10 text-center text-gray-500 max-w-3xl mx-auto">
          Find answers to common questions about our ambulance and funeral services. Still need help? Contact our 24×7 support team — we're here to assist you anytime.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl bg-white shadow-sm border-gray-200 transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-medium text-lg text-gray-800 pr-2">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transform transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 text-base border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      
      </div>
    </section>
  );
};

export default FAQ;