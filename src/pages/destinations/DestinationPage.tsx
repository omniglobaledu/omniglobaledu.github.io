import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { destinations } from '../../data/destinations';
import { GraduationCap, BookOpen, FileCheck, DollarSign, HelpCircle } from 'lucide-react';

// Highlights Component
const Highlights = ({ highlights }: { highlights: string[] }) => (
  <div className="grid md:grid-cols-3 gap-8 mb-16">
    {highlights.map((highlight, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-md">
        <GraduationCap className="h-8 w-8 text-blue-600 mb-4" />
        <p className="text-gray-800">{highlight}</p>
      </div>
    ))}
  </div>
);

// Requirements Component
const Requirements = ({ academic, language, financial }: { academic: string[]; language: string[]; financial: string[] }) => (
  <div className="bg-white rounded-lg shadow-md p-8 mb-16">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Requirements</h2>
    <div className="grid md:grid-cols-3 gap-8">
      <RequirementSection title="Academic" icon={BookOpen} items={academic} />
      <RequirementSection title="Language" icon={FileCheck} items={language} />
      <RequirementSection title="Financial" icon={DollarSign} items={financial} />
    </div>
  </div>
);

const RequirementSection = ({ title, icon: Icon, items }: { title: string; icon: React.ElementType; items: string[] }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4 flex items-center">
      <Icon className="h-6 w-6 text-blue-600 mr-2" />
      {title}
    </h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-blue-600 mr-2">•</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

// Top Universities Component
const TopUniversities = ({ universities }: { universities: { name: string; location: string; image: string }[] }) => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Universities</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {universities.map((university, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={university.image} alt={university.name} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">{university.name}</h3>
            <p className="text-gray-600">{university.location}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Visa Process Component
const VisaProcess = ({ steps }: { steps: string[] }) => (
  <div className="bg-white rounded-lg shadow-md p-8 mb-16">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Visa Process</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start">
          <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 font-semibold mr-4 flex-shrink-0">
            {index + 1}
          </div>
          <p className="text-gray-800">{step}</p>
        </div>
      ))}
    </div>
  </div>
);

// FAQ Component
const FAQ = ({ faq }: { faq: { question: string; answer: string }[] }) => (
  <div>
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
    <div className="space-y-6">
      {faq.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-start">
            <HelpCircle className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" />
            {item.question}
          </h3>
          <p className="text-gray-600 ml-8">{item.answer}</p>
        </div>
      ))}
    </div>
  </div>
);

// Main DestinationPage Component
export default function DestinationPage() {
  const { country } = useParams<{ country: string }>();
  const destination = country ? destinations[country.toLowerCase()] : null;

  if (!destination) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img src={destination.image} alt={destination.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{destination.title}</h1>
          <p className="text-xl text-white/90 max-w-2xl">{destination.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Highlights highlights={destination.highlights} />
        <Requirements {...destination.requirements} />
        <TopUniversities universities={destination.universities} />
        <VisaProcess steps={destination.visaProcess} />
        <FAQ faq={destination.faq} />
      </div>
    </div>
  );
}
