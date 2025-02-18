import React from 'react';
import { BlogPost } from './types';
import BlogCard from './BlogCard';

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {posts.length > 0 ? (
        posts.map((post) => <BlogCard key={post.id} post={post} />)
      ) : (
        <div className="col-span-2 text-center py-12">
          <p className="text-gray-600">No articles found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}