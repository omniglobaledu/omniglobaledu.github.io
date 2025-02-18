import { BlogPost } from './types';

export const categories = [
  'All',
  'Study Guide',
  'Scholarships',
  'Student Life',
  'Application Tips',
  'Country Guides',
  'Success Stories'
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Guide to Studying in the USA',
    excerpt: 'Everything you need to know about the US education system and application process.',
    content: `
      <h2>Understanding the US Education System</h2>
      <p>The United States hosts over a million international students annually, offering world-class education across thousands of institutions. The US education system is known for its flexibility, diverse course offerings, and cutting-edge research opportunities.</p>
      
      <h3>Types of Institutions</h3>
      <ul>
        <li>Community Colleges (2-year programs)</li>
        <li>Public Universities</li>
        <li>Private Universities</li>
        <li>Liberal Arts Colleges</li>
      </ul>

      <h3>Application Requirements</h3>
      <ul>
        <li>Academic transcripts</li>
        <li>Standardized test scores (SAT/ACT)</li>
        <li>English proficiency tests (TOEFL/IELTS)</li>
        <li>Letters of recommendation</li>
        <li>Statement of purpose</li>
      </ul>

      <h2>Cost of Education</h2>
      <p>Understanding the financial aspects of studying in the US is crucial. Tuition fees vary significantly between institutions:</p>
      <ul>
        <li>Community Colleges: $5,000 - $15,000 per year</li>
        <li>Public Universities: $20,000 - $40,000 per year</li>
        <li>Private Universities: $30,000 - $60,000 per year</li>
      </ul>
    `,
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176043/g5_n5w8uv.avif',
    date: 'Mar 15, 2024',
    category: 'Country Guides',
    readTime: '10 min read',
    author: {
      name: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      bio: 'Education consultant with 10+ years of experience in US admissions'
    },
    tags: ['USA', 'Higher Education', 'University', 'Admissions'],
    stats: {
      views: 1520,
      likes: 89,
      shares: 45
    }
  },
  {
    id: '2',
    title: 'Scholarship Opportunities 2024',
    excerpt: 'Latest scholarship programs available for international students.',
    content: `
      <h2>Top Global Scholarships for 2024</h2>
      <p>Securing a scholarship can significantly reduce the financial burden of studying abroad. Here's a comprehensive guide to the most prestigious scholarships available for international students in 2024.</p>

      <h3>Fulbright Scholarships</h3>
      <p>The Fulbright Program is one of the most prestigious scholarship programs worldwide, offering opportunities for international educational exchange for students, scholars, and professionals.</p>
      
      <h3>Chevening Scholarships</h3>
      <p>Funded by the UK government, Chevening offers full scholarships for master's degrees at any UK university.</p>

      <h3>Application Tips</h3>
      <ul>
        <li>Start applications early</li>
        <li>Prepare strong letters of recommendation</li>
        <li>Write compelling personal statements</li>
        <li>Showcase leadership experience</li>
      </ul>
    `,
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176041/services1_obiiwr.avif',
    date: 'Mar 10, 2024',
    category: 'Scholarships',
    readTime: '8 min read',
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      bio: 'Scholarship advisor helping students secure over $2M in funding'
    },
    tags: ['Scholarships', 'Financial Aid', 'Study Abroad'],
    stats: {
      views: 2341,
      likes: 156,
      shares: 89
    }
  }
];