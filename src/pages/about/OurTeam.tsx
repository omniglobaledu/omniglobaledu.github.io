import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import GalleryGrid from '../../components/Gallery/GalleryGrid';

const team = [
  {
    name: 'Rajesh Sharma',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
    bio: '15+ years of experience in international education consulting',
    email: 'rajesh@aimseducation.com',
    linkedin: '#'
  },
  {
    name: 'Priya Patel',
    role: 'Academic Counselor',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
    bio: 'Specialized in US and UK university admissions',
    email: 'priya@aimseducation.com',
    linkedin: '#'
  },
  {
    name: 'John Smith',
    role: 'Visa Specialist',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    bio: 'Expert in student visa processing for multiple countries',
    email: 'john@aimseducation.com',
    linkedin: '#'
  },
  {
    name: 'Sarah Chen',
    role: 'Test Preparation Head',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
    bio: 'IELTS trainer with over 8 years of experience',
    email: 'sarah@aimseducation.com',
    linkedin: '#'
  }
];

export default function OurTeam() {
  return (
    <div className="pt-16">
      {/* <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Team</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Meet our dedicated team of education experts
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-600 hover:text-blue-600"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <GalleryGrid />
    </div>
  );
}