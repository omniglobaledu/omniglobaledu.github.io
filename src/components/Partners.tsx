import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const partners = [
  {
    name: 'University of Cambridge',
    logo: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739180543/cambridge_g71i5f.jpg',
    category: 'University',
  },
  {
    name: 'University of Oxford',
    logo: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739180543/oxford_lqx9n4.jpg',
    category: 'University',
  },
  {
    name: 'Imperial College London',
    logo: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739180542/imperial_r9ohbp.jpg',
    category: 'University',
  },
  {
    name: 'Yonsei University',
    logo: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739180543/yonsei_odwcu4.jpg',
    category: 'University',
  },
  {
    name: 'Korea University',
    logo: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739180543/korea_university_ozsmcf.png',
    category: 'University',
  },
  {
    name: 'Seoul National University',
    logo: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739180544/seoul_oychec.jpg',
    category: 'University',
  },
  {
    name: 'Koyoto University',
    logo: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739180544/kyoto_ucsbwa.jpg',
    category: 'University',
  },
  {
    name: 'University of Tokyo',
    logo: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739180544/universityoftokyo_magoqj.jpg',
    category: 'University',
  },
  {
    name: 'Osaka University',
    logo: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739180543/osaka_uomjee.jpg',
    category: 'University',
  }
];

export default function Partners() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 500, // Set auto sliding interval in milliseconds
    responsive: [
      {
        breakpoint: 1189,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 892,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Who We Work With</h2>
          <p className="mt-4 text-xl text-gray-600">
            Trusted partnerships with leading institutions worldwide
          </p>
        </div>

        <Slider {...settings}>
          {partners.map((partner) => (
            <div key={partner.name} className="p-6">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 text-center">
                  {partner.name}
                </h3>
                <p className="text-sm text-gray-600 text-center">{partner.category}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
