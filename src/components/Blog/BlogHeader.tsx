import React from 'react';

interface BlogHeaderProps {
  title: string;
  description: string;
}

export default function BlogHeader({ title, description }: BlogHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}