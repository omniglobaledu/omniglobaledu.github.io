import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AboutDropdownProps {
  mobile?: boolean;
  closeMenu?: () => void;
}

export function AboutDropdown({ mobile = false, closeMenu }: AboutDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { label: 'About Us', href: '/about' },
    // { label: 'Our Team', href: '/team' },
    { label: 'Gallery', href: '/team' },

    // {label: 'Gallery', href: '/gallery'},
    { label: 'Our Mission', href: '/mission' },
  ];

  const toggleDropdown = (state: boolean) => setIsOpen(state);

  if (mobile) {
    return (
      <>
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            onClick={closeMenu} // Close mobile menu on click
            className="block px-3 py-2 text-gray-700 hover:text-blue-600"
          >
            {item.label}
          </Link>
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
        <span>About</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
      >
        <div className="py-1">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={closeMenu} // Close mobile menu on click
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
