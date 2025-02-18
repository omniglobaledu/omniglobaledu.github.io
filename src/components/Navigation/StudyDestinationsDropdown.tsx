import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface StudyDestinationsDropdownProps {
  mobile?: boolean;
  closeMenu?: () => void; // Added prop to close mobile menu
}

export function StudyDestinationsDropdown({ mobile = false, closeMenu }: StudyDestinationsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const destinations = [
    { country: 'Japan', image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739174394/japan_u44vez.avif' },
    { country: 'South Korea', image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739174395/korea_jvbfrv.avif' },
    { country: 'UK', image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739174397/europe_wqrbw8.avif' },
    { country: 'Europe', image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739175312/euro_wm9bts.avif' },
  ];

  const toggleDropdown = (state: boolean) => setIsOpen(state);

  // Mobile view dropdown
  if (mobile) {
    return (
      <>
        <button
          className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-blue-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Study Destinations</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>

        {isOpen && (
          <div className="flex flex-col p-4 space-y-2 bg-white shadow-md rounded-md">
            {destinations.map((destination) => (
              <Link
                key={destination.country}
                to={`/study-in-/${destination.country.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={closeMenu} // Close the mobile menu after clicking a destination
                className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50"
              >
                <img
                  src={destination.image}
                  alt={destination.country}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-sm text-gray-700">Study in {destination.country}</span>
              </Link>
            ))}
          </div>
        )}
      </>
    );
  }

  // Desktop view dropdown
  return (
    <div
      className="relative group"
      onMouseEnter={() => toggleDropdown(true)}
      onMouseLeave={() => toggleDropdown(false)}
    >
      {/* Dropdown Trigger */}
      <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
        <span>Study Destinations</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute left-0 mt-2 w-[480px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
      >
        <div className="grid grid-cols-2 gap-2 p-4">
          {destinations.map((destination) => (
            <Link
              key={destination.country}
              to={`/study-in-/${destination.country.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={closeMenu} // Close the mobile menu after clicking a destination
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50"
            >
              <img
                src={destination.image}
                alt={destination.country}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-sm text-gray-700">Study in {destination.country}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
