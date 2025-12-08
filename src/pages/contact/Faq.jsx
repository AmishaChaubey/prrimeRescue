import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

 const faqs = [
  {
    question: "Do you provide 24×7 funeral and freezer box services?",
    answer: "Yes, we offer round-the-clock funeral support and dead body freezer box services across all major cities."
  },
  {
    question: "How can I book a freezer box or funeral service?",
    answer: "You can call our helpline anytime or fill out the contact form on our website for quick assistance."
  },
  {
    question: "What types of dead body freezer boxes do you offer?",
    answer: "We provide hygienic, temperature-controlled freezer boxes suitable for long-duration preservation and safe transportation."
  },
  {
    question: "Do you provide ambulance or dead body transportation services?",
    answer: "Yes, we offer fully equipped ambulances and hearse vans for safe and respectful body transportation."
  },
  {
    question: "How quickly can you deliver a freezer box to my location?",
    answer: "We ensure fast delivery within 30–45 minutes depending on your location, with trained staff for setup and support."
  }
];


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-black mb-5 mt-10">
          Frequently <span className="text-red-600">Asked Questions </span>
        </h2>
        <p className="mb-10 text-center text-gray-500">Still have questions? Contact our 24×7 support team — we’re here to help you anytime</p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl bg-white shadow-sm border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-medium text-lg text-gray-800">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 text-base">
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
