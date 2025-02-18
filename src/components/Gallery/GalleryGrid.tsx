import React from 'react';

const images = [
  {
    url: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176039/g1_cahzgi.avif',
    caption: 'Graduation Day Celebration'
  },
  {
    url: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176047/g2_ogf0rt.avif',
    caption: 'Campus Life'
  },
  {
    url: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176037/g3_gnvgoo.avif',
    caption: 'Student Orientation'
  },
  {
    url: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176039/team_bverhz.avif',
    caption: 'Cultural Exchange Program'
  },
  {
    url: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176043/g5_n5w8uv.avif',
    caption: 'Alumni Meet'
  },
  {
    url: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176055/g6_pvc3ow.avif',
    caption: 'Student Success Stories'
  }
];

export default function GalleryGrid() {
  return (
    <div id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Gallery</h2>
          <p className="mt-4 text-xl text-gray-600">
            Moments and memories from our global community
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="group relative">
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity rounded-lg flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center px-4">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}