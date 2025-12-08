import React from "react";
import { Phone, MapPin, Ambulance, HeartPulse } from "lucide-react";

export default function ProcessSection() {
  const steps = [
  {
    icon: Phone,
    title: "Emergency Call",
    description:
      "Call our 24/7 emergency helpline immediately. Our trained support team listens carefully, collects essential details about the situation, and begins the emergency response process without delay.",
  },
  {
    icon: MapPin,
    title: "Location Tracking",
    description:
      "Share your exact location with our dispatch team. With advanced GPS tracking, we accurately identify your position and assign the closest available ambulance for the fastest possible response.",
  },
  {
    icon: Ambulance,
    title: "Rapid Dispatch",
    description:
      "A fully-equipped ambulance staffed with certified paramedics is deployed instantly. We ensure minimal waiting time, allowing our team to reach you swiftly and provide urgent assistance.",
  },
  {
    icon: HeartPulse,
    title: "Medical Care",
    description:
      "Our medical professionals deliver immediate pre-hospital care, stabilize critical conditions, and ensure safe, smooth transportation to the nearest appropriate healthcare facility.",
  },
];


  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            How We Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f3b66] mb-4 font-serif">
            Our Emergency Process
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A simplified and effective process designed for fast emergency response.
          </p>
        </div>

        {/* Steps Zigzag */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-blue-200" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative mb-14 md:mb-20 flex ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Step Card */}
                <div className="w-full md:w-1/2">
                  <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">

                    {/* Icon + Title */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#0f3b66]" />
                      </div>

                      <h3 className="text-xl font-semibold text-gray-800">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Number (Desktop) */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-10 h-10 bg-[#0f3b66] text-white rounded-full flex items-center justify-center border-4 border-white shadow-md font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                {/* Number for Mobile */}
                <div className="md:hidden absolute -top-4 left-5 bg-blue-600 w-9 h-9 rounded-full text-white flex items-center justify-center font-bold shadow-md text-sm">
                  {index + 1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
