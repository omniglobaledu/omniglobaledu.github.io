import React from 'react';
import { Outlet } from 'react-router-dom';
import { ServicesSidebar } from './ServicesSidebar';

export default function ServiceLayout() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <ServicesSidebar />
          <div className="lg:col-span-3">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}