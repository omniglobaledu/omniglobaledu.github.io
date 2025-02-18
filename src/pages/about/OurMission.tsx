import React from 'react';
import { Target, Compass, Heart, Award } from 'lucide-react';

export default function OurMission() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Mission & Values</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Empowering students to achieve their global education dreams
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
            At Omni Global Int'l Education Consultancy, we are committed to excellence and transforming lives through education. We provide personalized guidance to empower students to make informed decisions and achieve their academic goals abroad.            </p>
            <p className="text-lg text-gray-600">
            Our mission is to offer seamless support for studying and settling internationally, enabling students to fulfill their global aspirations, thrive in diverse environments, and build successful futures.            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80"
              alt="Students studying"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Target className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">
              We strive for excellence in every aspect of our service, ensuring the highest standards of quality and professionalism.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Heart className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Student-Centric</h3>
            <p className="text-gray-600">
              Our students' success and well-being are at the heart of everything we do.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Compass className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p className="text-gray-600">
              We maintain the highest ethical standards and transparency in all our dealings.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Award className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              We continuously evolve and innovate to provide the best solutions for our students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}