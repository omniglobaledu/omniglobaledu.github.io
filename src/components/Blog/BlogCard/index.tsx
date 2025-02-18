import React, { useState } from 'react';
import { BlogPost } from '../types';
import { FeaturedCard } from './variants/Featured';
import { CompactCard } from './variants/Compact';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'compact' | 'full' | 'featured';
}

export default function BlogCard({ post, variant = 'compact' }: BlogCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  if (variant === 'featured') {
    return (
      <FeaturedCard
        post={post}
        isLiked={isLiked}
        onLikeToggle={() => setIsLiked(!isLiked)}
      />
    );
  }

  return (
    <CompactCard
      post={post}
      isLiked={isLiked}
      isBookmarked={isBookmarked}
      onLikeToggle={() => setIsLiked(!isLiked)}
      onBookmarkToggle={() => setIsBookmarked(!isBookmarked)}
    />
  );
}