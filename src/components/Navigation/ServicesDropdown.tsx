import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface ServicesDropdownProps {
  mobile?: boolean;
  closeMenu?: () => void; // Added prop to close mobile menu
}

export function ServicesDropdown({ mobile = false, closeMenu }: ServicesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const services = {
    'Student Services': [
      'Career Counseling Services',
      'Off-Shore Services',
      'Onshore Services',
      'Course Advice',
    ],
    'Test Preparation': [
      'IELTS Preparation Course',
      'PTE Preparation Course',
      'SAT Preparation Course',
      'TOEFL Preparation Course',
      'GMAT Preparation Course',
      'GRE Preparation Course',
      'JLPT and NAT Preparation',
    ],
    'Migration Services': [
      'Visa Assistance',
      'Skilled Independent Visa',
      'Skilled Nominated Work Visa',
      'Skilled Work Regional Visa',
      'Student Visa',
      'Temporary Graduate Visa',
      'Migration Service',
      'Student Health Coverage',
      'Workplace Assistance',
    ],
    'Work Abroad Services': [
      'Job Search Assistance',
      'Work Visa Consultation',
      'Employer Networking',
      'International Job Placement Support',
    ],
  };

  const toggleDropdown = (state: boolean) => setIsOpen(state);
  const toggleCategory = (category: string) =>
    setOpenCategory((prev) => (prev === category ? null : category));

  if (mobile) {
    return (
      <>
        {Object.entries(services).map(([category, items]) => (
          <div key={category} className="px-3 py-2">
            <div
              className="flex justify-between items-center font-medium text-gray-900 cursor-pointer"
              onClick={() => toggleCategory(category)}
            >
              {category}
              <ChevronDown
                className={`h-4 w-4 transform transition-transform ${
                  openCategory === category ? 'rotate-180' : ''
                }`}
              />
            </div>
            {openCategory === category && (
              <div className="pl-4 space-y-1">
                {items.map((item) => (
                  <Link
                    key={item}
                    to={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={closeMenu} // Close mobile menu on click
                    className="block py-1 text-sm text-gray-700 hover:text-blue-600"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </>
    );
  }

  return (
    <div
      className="relative group"
      onMouseEnter={() => toggleDropdown(true)}
      onMouseLeave={() => toggleDropdown(false)}
    >
      {/* Dropdown Trigger */}
      <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
        <span>Services</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute left-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
      >
        {Object.entries(services).map(([category, items]) => (
          <div
            key={category}
            className="relative group"
            onMouseEnter={() => setOpenCategory(category)}
            onMouseLeave={() => setOpenCategory(null)}
          >
            {/* Main Category */}
            <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 cursor-pointer">
              <span>{category}</span>
              <ChevronRight className="h-4 w-4" />
            </div>

            {/* Submenu */}
            {openCategory === category && (
              <div className="absolute left-full top-0 mt-0 ml-1 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-2">
                  {items.map((item) => (
                    <Link
                      key={item}
                      to={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={closeMenu} // Close mobile menu on click
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
