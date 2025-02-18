import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { NavLinks } from './NavLinks';
import AppointmentModal from '../AppointmentModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" onClick={closeMenu}>
                <Logo />
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              <NavLinks closeMenu={closeMenu} />
              <button 
                onClick={() => setIsAppointmentOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Book Appointment
              </button>
            </div>

            <div className="lg:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLinks mobile closeMenu={closeMenu} />
              <button
                onClick={() => {
                  setIsAppointmentOpen(true);
                  setIsOpen(false);
                }}
                className="w-full text-center bg-blue-600 text-white px-3 py-2 rounded-md"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </nav>

      <AppointmentModal 
        isOpen={isAppointmentOpen} 
        onClose={() => setIsAppointmentOpen(false)} 
      />
    </>
  );
}
