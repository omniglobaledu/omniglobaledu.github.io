import React from 'react';
import { Award, Users, Globe2, BookOpen } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Students Placed', value: '5000+' },
  { icon: Globe2, label: 'Countries', value: '10+' },
  { icon: BookOpen, label: 'Universities', value: '500+' },
  { icon: Award, label: 'Success Rate', value: '98%' },
];

export default function About() {
  return (
    <div id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">About EduGlobal</h2>
            <p className="mt-4 text-lg text-gray-600">
              With over a decade of experience, EduGlobal has been helping students achieve their dreams of studying abroad. Our expert counselors provide personalized guidance to ensure your academic journey is successful.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              We pride ourselves on our commitment to excellence and our track record of successful placements in top universities worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg text-center">
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto" />
                <p className="mt-4 text-3xl font-bold text-blue-600">{stat.value}</p>
                <p className="mt-2 text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}