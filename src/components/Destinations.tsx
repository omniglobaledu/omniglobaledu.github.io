import React from 'react';
import { useNavigate } from 'react-router-dom';

const destinations = [
  {
    country: 'Japan',
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739174394/japan_u44vez.avif',
    universities: '100+ Universities',
  },
  {
    country: 'South Korea',
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739174395/korea_jvbfrv.avif',
    universities: '40+ Universities',
  },
  // {
  //   country: 'Australia',
  //   image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80',
  //   universities: '40+ Universities',
  // },
  // {
  //   country: 'Canada',
  //   image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80',
  //   universities: '100+ Universities',
  // },
  // {
  //   country: 'United States',
  //   image: 'https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?auto=format&fit=crop&q=80',
  //   universities: '4,000+ Universities',
  // },
  {
    country: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80',
    universities: '150+ Universities',
  },
  // {
  //   country: 'New Zealand',
  //   image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80',
  //   universities: '100+ Universities',
  // },
  {
    country: 'Europe',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80',
    universities: '100+ Universities',
  },
];

export default function Destinations() {
  const navigate = useNavigate();

  const handleNavigation = (country: string) => {
    navigate(`/destination/${country.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Study Destinations</h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose from top educational destinations worldwide
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => handleNavigation(destination.country)}
            >
              <div className="relative h-72 w-full overflow-hidden rounded-lg">
                <img
                  src={destination.image}
                  alt={destination.country}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-semibold">{destination.country}</h3>
                  <p className="mt-1">{destination.universities}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
