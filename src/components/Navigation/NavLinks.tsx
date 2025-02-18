import React from 'react';
import { Link } from 'react-router-dom';
import { AboutDropdown } from './AboutDropdown';
import { ServicesDropdown } from './ServicesDropdown';
import { StudyDestinationsDropdown } from './StudyDestinationsDropdown';

interface NavLinksProps {
  mobile?: boolean;
  closeMenu?: () => void;
}

export function NavLinks({ mobile = false, closeMenu }: NavLinksProps) {
  return (
    <>
      <Link 
        to="/" 
        className={`text-gray-700 hover:text-blue-600 ${mobile ? 'block px-3 py-2' : ''}`}
        onClick={closeMenu}
      >
        Home
      </Link>
      <AboutDropdown mobile={mobile} closeMenu={closeMenu} />
      <ServicesDropdown mobile={mobile} closeMenu={closeMenu} />
      <StudyDestinationsDropdown mobile={mobile} closeMenu={closeMenu} />
      <Link 
        to="/referral" 
        className={`text-gray-700 hover:text-blue-600 ${mobile ? 'block px-3 py-2' : ''}`}
        onClick={closeMenu}
      >
        Referral Program
      </Link>
      <Link 
        to="/blog" 
        className={`text-gray-700 hover:text-blue-600 ${mobile ? 'block px-3 py-2' : ''}`}
        onClick={closeMenu}
      >
        Blog
      </Link>
      <Link 
        to="/contact" 
        className={`text-gray-700 hover:text-blue-600 ${mobile ? 'block px-3 py-2' : ''}`}
        onClick={closeMenu}
      >
        Contact
      </Link>
    </>
  );
}
