import { ChevronLeft, ChevronRight, } from 'lucide-react';
import { useEffect, useState } from 'react';

const slides = [
  {
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739275268/Web_Banner-01_gqp6zc.png',
    mobile: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739866954/Web_Banner-10_mgaryx.png',
  },
  {
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739275281/Web_Banner-03_pw5vp8.png',
    mobile: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739866954/Web_Banner-08_ryve5h.png',
  },
  {
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739275275/Web_Banner-02_ekpdlc.png',
    mobile: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739866954/Web_Banner-09_p8dlid.png',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Update the isMobile state based on screen width
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    // Check screen size on component mount
    checkScreenSize();

    // Add event listener to update on window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative pt-16">
      {/* Hero Slider */}
      <div className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={isMobile ? slide.mobile : slide.image}
              alt="Omni Global Int'l Education Consultancy"
              className="w-full h-full object-fill"
            />
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Headline Section */}
      <div className="grid md:grid-cols-2 gap-12 bg-white p-20">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Your Trusted Partner in International Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mb-4">
            With over a decade of experience, we've helped thousands of students achieve their dreams of studying abroad. Our expert counselors provide personalized guidance to ensure your academic journey is successful.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
            alt="Omni Global Int'l Education Consultancy Team"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-xl text-gray-600">
              Experience excellence in international education consultancy
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">8+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Years of Experience</h3>
              <p className="text-gray-600">
                Over a decade of expertise in international education consulting
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">5K+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Students Placed</h3>
              <p className="text-gray-600">
                Successfully placed students in top universities worldwide
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">98%</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">High Visa Success Rate</h3>
              <p className="text-gray-600">
              Trusted guidance to secure your student visa.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">10+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Career Counselors</h3>
              <p className="text-gray-600">
              Personalized advice to match your career goals.
              </p>
            </div>
            {/* Free Document Processing */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-blue-600">100%</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Document Processing</h3>
              <p className="text-gray-600">
              Pay after visa approval. No hidden charges.
              </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">50%</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Service Discounts</h3>
              <p className="text-gray-600">
              50% off service charges for NAT toppers from our institution.
              </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">50+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Top Japanese Affiliations</h3>
              <p className="text-gray-600">
              Partnerships with world leading universities.
              </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
