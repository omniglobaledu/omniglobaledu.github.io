import React, { useState, useMemo } from 'react';
import BlogCard from './BlogCard';
import BlogSearch from './BlogSearch';
import BlogCategories from './BlogCategories';
import { blogPosts } from './blogData';

export default function BlogSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div id="blogs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Latest Updates</h2>
          <p className="mt-4 text-xl text-gray-600">
            Stay informed with our latest articles and guides
          </p>
        </div>

        <div className="mt-12 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BlogSearch 
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
            <BlogCategories
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}