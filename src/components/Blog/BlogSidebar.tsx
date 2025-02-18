import React from 'react';
import BlogSearch from './BlogSearch';
import BlogCategories from './BlogCategories';

interface BlogSidebarProps {
  searchQuery: string;
  selectedCategory: string;
  onSearchChange: (query: string) => void;
  onCategoryChange: (category: string) => void;
}

export default function BlogSidebar({
  searchQuery,
  selectedCategory,
  onSearchChange,
  onCategoryChange,
}: BlogSidebarProps) {
  return (
    <div className="lg:col-span-1 space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Search</h2>
        <BlogSearch 
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
        />
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <BlogCategories
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
        />
      </div>
    </div>
  );
}