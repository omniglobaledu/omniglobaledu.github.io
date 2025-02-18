import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Eye, Heart, Share2, ChevronRight, Calendar, Bookmark } from 'lucide-react';
import { BlogPost } from './types';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'compact' | 'full' | 'featured';
}

export default function BlogCard({ post, variant = 'compact' }: BlogCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  if (variant === 'featured') {
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
            <div className="flex items-center space-x-6 text-white">
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center space-x-1 transition-transform hover:scale-110 ${
                  isLiked ? 'text-pink-400' : ''
                }`}
              >
                <Heart className={`h-6 w-6 ${isLiked ? 'fill-current' : ''}`} />
                <span>{post.stats.likes}</span>
              </button>
              <button className="flex items-center space-x-1 transition-transform hover:scale-110">
                <Eye className="h-6 w-6" />
                <span>{post.stats.views}</span>
              </button>
              <button className="flex items-center space-x-1 transition-transform hover:scale-110">
                <Share2 className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
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
              onClick={() => setIsBookmarked(!isBookmarked)}
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
            <div className="flex items-center space-x-4 text-gray-400">
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center hover:text-pink-500 transition-colors ${
                  isLiked ? 'text-pink-500' : ''
                }`}
              >
                <Heart className={`h-4 w-4 mr-1 ${isLiked ? 'fill-current' : ''}`} />
                <span>{post.stats.likes}</span>
              </button>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                <span>{post.stats.views}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Full variant (default)
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
          />
          <div className="absolute top-4 right-4">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full border-2 border-blue-50"
              />
              <div className="ml-4">
                <p className="font-medium text-gray-900">{post.author.name}</p>
                <p className="text-sm text-gray-600">{post.author.bio}</p>
              </div>
            </div>
            <button 
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`text-gray-400 hover:text-blue-600 transition-colors ${
                isBookmarked ? 'text-blue-600' : ''
              }`}
            >
              <Bookmark className={`h-6 w-6 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-6">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <Link 
              to={`/blog/${post.id}`}
              className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              Read Full Article <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
            <div className="flex items-center space-x-4 text-gray-400">
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center hover:text-pink-500 transition-colors ${
                  isLiked ? 'text-pink-500' : ''
                }`}
              >
                <Heart className={`h-5 w-5 mr-1 ${isLiked ? 'fill-current' : ''}`} />
                <span>{post.stats.likes}</span>
              </button>
              <div className="flex items-center">
                <Share2 className="h-5 w-5 mr-1" />
                <span>{post.stats.shares}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}