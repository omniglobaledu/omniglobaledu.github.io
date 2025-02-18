import { Building2, Globe2, Target, Users } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Omni Global Int'l Education Consultancy</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Your trusted partner in international education since 2018
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-4">
            Founded with a vision to bridge the gap between Nepalese students and quality international education, Omni Global Int'l Education Consultancy has been dedicated to helping students achieve their dreams of studying abroad. Since our establishment in 2018, we have supported thousands of students in pursuing their academic aspirations globally.            </p>
            <p className="text-lg text-gray-600 mb-4">
            Our commitment to excellence, personalized guidance, and comprehensive support has earned us the trust of students and families alike. As one of Nepal's most trusted education consultancies, we strive to unlock global opportunities and shape brighter futures for every student we serve.            </p>
            <p className='text-lg text-gray-600' >Contact us today to begin your journey!</p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Omni Global Int'l Education Consultancy Team"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">8+ Years</h3>
            <p className="text-gray-600">Of Excellence</p>
          </div>
          <div className="text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">5000+</h3>
            <p className="text-gray-600">Students Placed</p>
          </div>
          <div className="text-center">
            <Globe2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">10+</h3>
            <p className="text-gray-600">Countries</p>
          </div>
          <div className="text-center">
            <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">98%</h3>
            <p className="text-gray-600">Success Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}