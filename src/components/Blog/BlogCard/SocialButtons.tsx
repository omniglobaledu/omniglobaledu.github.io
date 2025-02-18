import React from 'react';
import { Heart, Eye, Share2 } from 'lucide-react';
import { BlogPost } from '../types';

interface SocialButtonsProps {
  post: BlogPost;
  isLiked: boolean;
  onLikeToggle: () => void;
  variant?: 'light' | 'compact' | 'full';
}

export function SocialButtons({ post, isLiked, onLikeToggle, variant = 'full' }: SocialButtonsProps) {
  const baseClasses = {
    light: 'text-white',
    compact: 'text-gray-400',
    full: 'text-gray-400'
  };

  const heartClasses = {
    light: `h-6 w-6 ${isLiked ? 'fill-current text-pink-400' : ''}`,
    compact: `h-4 w-4 mr-1 ${isLiked ? 'fill-current text-pink-500' : ''}`,
    full: `h-5 w-5 mr-1 ${isLiked ? 'fill-current text-pink-500' : ''}`
  };

  return (
    <div className={`flex items-center space-x-4 ${baseClasses[variant]}`}>
      <button 
        onClick={onLikeToggle}
        className={`flex items-center hover:text-pink-500 transition-colors ${
          isLiked ? 'text-pink-500' : ''
        }`}
      >
        <Heart className={heartClasses[variant]} />
        <span>{post.stats.likes}</span>
      </button>
      <div className="flex items-center">
        <Eye className={variant === 'compact' ? 'h-4 w-4 mr-1' : 'h-5 w-5 mr-1'} />
        <span>{post.stats.views}</span>
      </div>
      {variant !== 'compact' && (
        <div className="flex items-center">
          <Share2 className={variant === 'light' ? 'h-6 w-6 mr-1' : 'h-5 w-5 mr-1'} />
          <span>{post.stats.shares}</span>
        </div>
      )}
    </div>
  );
}