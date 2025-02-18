import React, { useState } from 'react';
import { useBlogFilters } from '../hooks/useBlogFilters';
import BlogHeader from '../components/Blog/BlogHeader';
import BlogSidebar from '../components/Blog/BlogSidebar';
import BlogGrid from '../components/Blog/BlogGrid';
import ViewToggle, { ViewType } from '../components/Blog/ViewToggle';
import BlogCard from '../components/Blog/BlogCard';

export default function BlogPage() {
  const { searchQuery, selectedCategory, filteredPosts, setSearchQuery, setSelectedCategory } = useBlogFilters();
  const [viewType, setViewType] = useState<ViewType>('grid');

  return (
    <div className="pt-16">
      <BlogHeader 
        title="Our Blog"
        description="Discover insights, tips, and success stories to guide your study abroad journey"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="mb-12">
            <BlogCard post={filteredPosts[0]} variant="featured" />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <BlogSidebar
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            onSearchChange={setSearchQuery}
            onCategoryChange={setSelectedCategory}
          />
          
          <div className="lg:col-span-3">
            <div className="flex justify-end mb-6">
              <ViewToggle viewType={viewType} onViewChange={setViewType} />
            </div>
            
            <BlogGrid 
              posts={filteredPosts.slice(1)} 
              viewType={viewType}
            />
          </div>
        </div>
      </div>
    </div>
  );
}