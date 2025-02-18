import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { serviceCategories } from '../../data/services';

export function ServicesSidebar() {
  const location = useLocation();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Our Services</h2>
      <div className="space-y-6">
        {Object.entries(serviceCategories).map(([category, services]) => (
          <div key={category}>
            <h3 className="font-medium text-gray-900 mb-2">{category}</h3>
            <ul className="space-y-2">
              {services.map((service) => {
                const path = `/services/${service.toLowerCase().replace(/\s+/g, '-')}`;
                return (
                  <li key={service}>
                    <Link
                      to={path}
                      className={`block text-sm ${
                        location.pathname === path
                          ? 'text-blue-600 font-medium'
                          : 'text-gray-600 hover:text-blue-600'
                      }`}
                    >
                      {service}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}