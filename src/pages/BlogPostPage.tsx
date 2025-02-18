import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Eye, Heart, Share2, Bookmark } from 'lucide-react';
import { blogPosts } from '../components/Blog/blogData';
import RelatedPosts from '../components/Blog/RelatedPosts';

export default function BlogPostPage() {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <div className="pt-24 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Post not found</h2>
        <Link to="/blog" className="text-blue-600 hover:text-blue-700 mt-4 inline-block">
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <div className="relative h-[400px]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-3xl mx-auto px-4 text-center text-white">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="text-4xl font-bold mt-4">{post.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-600 hover:text-blue-600">
              <Heart className="h-5 w-5 mr-1" />
              <span>{post.stats.likes}</span>
            </button>
            <button className="flex items-center text-gray-600 hover:text-blue-600">
              <Share2 className="h-5 w-5 mr-1" />
              <span>{post.stats.shares}</span>
            </button>
            <button className="flex items-center text-gray-600 hover:text-blue-600">
              <Bookmark className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <p className="font-medium text-gray-900">{post.author.name}</p>
                <p className="text-gray-600">{post.author.bio}</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-2" />
                {post.stats.views} views
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <RelatedPosts currentPostId={post.id} category={post.category} />
      </div>
    </div>
  );
}