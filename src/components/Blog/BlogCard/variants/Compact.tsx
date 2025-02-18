import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Bookmark, ChevronRight } from 'lucide-react';
import { BlogPost } from '../../types';
import { SocialButtons } from '../SocialButtons';

interface CompactCardProps {
  post: BlogPost;
  isLiked: boolean;
  isBookmarked: boolean;
  onLikeToggle: () => void;
  onBookmarkToggle: () => void;
}

export function CompactCard({ 
  post, 
  isLiked, 
  isBookmarked, 
  onLikeToggle, 
  onBookmarkToggle 
}: CompactCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute top-4 right-4 flex space-x-2">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
            {post.category}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-100 transition-colors">
            {post.title}
          </h3>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full border-2 border-blue-50"
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
          <button 
            onClick={onBookmarkToggle}
            className={`text-gray-400 hover:text-blue-600 transition-colors ${
              isBookmarked ? 'text-blue-600' : ''
            }`}
          >
            <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <Link 
            to={`/blog/${post.id}`}
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            Read More <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
          <SocialButtons 
            post={post}
            isLiked={isLiked}
            onLikeToggle={onLikeToggle}
            variant="compact"
          />
        </div>
      </div>
    </div>
  );
}