import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, Share2, ChevronRight } from 'lucide-react';
import { BlogPost } from '../../types';
import { SocialButtons } from '../SocialButtons';

interface FeaturedCardProps {
  post: BlogPost;
  isLiked: boolean;
  onLikeToggle: () => void;
}

export function FeaturedCard({ post, isLiked, onLikeToggle }: FeaturedCardProps) {
  return (
    <div className="relative group rounded-xl overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="absolute inset-0">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity duration-300" 
        />
      </div>
      <div className="relative p-8 md:p-12">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <div>
            <p className="text-white font-medium">{post.author.name}</p>
            <p className="text-blue-100">{post.date}</p>
          </div>
        </div>
        <span className="inline-block bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
          {post.category}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors">
          {post.title}
        </h2>
        <p className="text-blue-50 text-lg mb-6 max-w-2xl">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <Link 
            to={`/blog/${post.id}`}
            className="inline-flex items-center bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition-colors"
          >
            Read Article <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
          <SocialButtons 
            post={post}
            isLiked={isLiked}
            onLikeToggle={onLikeToggle}
            variant="light"
          />
        </div>
      </div>
    </div>
  );
}