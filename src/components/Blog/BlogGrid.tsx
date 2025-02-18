import React from 'react';
import { BlogPost } from './types';
import BlogCard from './BlogCard';
import { ViewType } from './ViewToggle';

interface BlogGridProps {
  posts: BlogPost[];
  viewType: ViewType;
}

export default function BlogGrid({ posts, viewType }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No articles found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className={`
      grid gap-8
      ${viewType === 'grid' ? 'md:grid-cols-2' : 'grid-cols-1'}
    `}>
      {posts.map((post) => (
        <BlogCard 
          key={post.id} 
          post={post} 
          variant={viewType === 'grid' ? 'compact' : 'full'}
        />
      ))}
    </div>
  );
}