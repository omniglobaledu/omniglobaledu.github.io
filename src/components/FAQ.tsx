import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What services do you provide?',
    answer: 'We offer comprehensive education consultancy services including university selection, application assistance, visa guidance, test preparation, and pre-departure orientation.'
  },
  // {
  //   question: 'How do I start the application process?',
  //   answer: 'Begin by scheduling a free consultation with our counselors. We will assess your profile, discuss your goals, and create a personalized plan for your study abroad journey.'
  // },
  // {
  //   question: 'Which countries can I study in?',
  //   answer: 'We assist students in pursuing education in various countries including the USA, UK, Canada, Australia, Japan, and several European nations.'
  // },
  // {
  //   question: 'Do you provide test preparation services?',
  //   answer: 'Yes, we offer comprehensive preparation courses for IELTS, TOEFL, PTE, SAT, GRE, and GMAT with experienced instructors.'
  // },
  {
    question: 'What is your visa success rate?',
    answer: 'We maintain a high visa success rate of 98% through thorough application preparation and documentation support.'
  },
  {
    question: 'Do you help with scholarships?',
    answer: 'Yes, we help identify and apply for various scholarship opportunities available at universities and through external organizations.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Find answers to common questions about studying abroad
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}