export const serviceCategories = {
  'Student Services': [
    'Career Counseling Services',
    'Off-Shore Services',
    'Onshore Services',
    'Course Advice'
  ],
  'Test Preparation': [
    'IELTS Preparation Course',
    'PTE Preparation Course',
    'SAT Preparation Course',
    'TOEFL Preparation Course',
    'GMAT Preparation Course',
    'GRE Preparation Course',
    'JLPT and NAT Preparation'
  ],
  'Visa and Migration Services': [
    'Visa Assistance',
    'Skilled Independent Visa',
    'Skilled Nominated Work Visa',
    'Skilled Work Regional Visa',
    'Student Visa',
    'Temporary Graduate Visa',
    'Migration Service',
    'Student Health Coverage',  
    'Workplace Assistance',

  ],
  'Work Abroad Services': [
    'Job Search Assistance',
    'Work Visa Consultation',
    'Employer Networking',
    'International Job Placement Support'
  ]
};

// Work Abroad Services
// Job Search Assistance
// Work Visa Consultation
// Employer Networking
// International Job Placement Support


export interface ServiceInfo {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  image: string;
}

export const serviceDetails: Record<string, ServiceInfo> = {
  'career-counseling-services': {
    title: 'Career Counseling Services',
    description: 'Expert guidance to help you make informed decisions about your academic and professional future.',
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176041/services1_obiiwr.avif',
    features: [
      'One-on-one counseling sessions',
      'Career assessment tests',
      'Industry insights and trends',
      'Course selection guidance',
      'University shortlisting',
      'Career path planning'
    ],
    benefits: [
      'Clear career direction',
      'Informed decision making',
      'Personalized guidance',
      'Industry-aligned choices',
      'Better career prospects',
      'Confidence in choices'
    ]
  },
  'off-shore-services': {
    title: 'Off-Shore Services',
    description: 'Comprehensive support for international students before they leave their home country.',
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176039/team_bverhz.avif',
    features: [
      'Pre-departure briefing',
      'Documentation assistance',
      'Visa application support',
      'Travel arrangements',
      'Accommodation guidance',
      'Bank account setup assistance'
    ],
    benefits: [
      'Smooth transition',
      'Reduced stress',
      'Time-saving',
      'Cost-effective',
      'Peace of mind',
      'Expert guidance'
    ]
  },
  'onshore-services': {
    title: 'Onshore Services',
    description: 'Support services for international students already studying abroad.',
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176039/team_bverhz.avif',
    features: [
      'Local orientation',
      'Course changes assistance',
      'Visa extension support',
      'Part-time job guidance',
      'Cultural adaptation support',
      'Academic support'
    ],
    benefits: [
      'Local support network',
      'Quick problem resolution',
      'Better adaptation',
      'Academic success',
      'Work opportunities',
      'Cultural integration'
    ]
  },
  'course-advice': {
    title: 'Course Advice',
    description: 'Expert guidance in selecting the right course and university aligned with your career goals.',
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176039/team_bverhz.avif',
    features: [
      'Course comparison',
      'University rankings analysis',
      'Career outcome assessment',
      'Admission requirements review',
      'Scholarship opportunities',
      'Course duration planning'
    ],
    benefits: [
      'Optimal course selection',
      'Career-aligned education',
      'Better ROI',
      'Clear study pathway',
      'Scholarship chances',
      'Time efficiency'
    ]
  },
  'jlpt-and-nat-preparation': {
    title: 'JLPT and NAT Preparation',
    description: 'Specialized training for JLPT and NAT success.',
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176041/services1_obiiwr.avif',
    features: [
      'Computer-based practice',
      'Speaking strategies',
      'Writing workshops',
      'Reading techniques',
      'Listening skills',
      'Score analysis'
    ],
    benefits: [
      'Better test performance',
      'Computer familiarity',
      'Quick results',
      'Score improvement',
      'Expert guidance',
      'Practice materials'
    ]
  },
  'ielts-preparation-course': {
    title: 'IELTS Preparation Course',
    description: 'Comprehensive IELTS training to help you achieve your target score.',
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176041/services1_obiiwr.avif',
    features: [
      'Expert trainers',
      'Practice tests',
      'Speaking sessions',
      'Writing feedback',
      'Study materials',
      'Mock tests'
    ],
    benefits: [
      'Higher test scores',
      'Improved English skills',
      'Test strategies',
      'Time management skills',
      'Confidence building',
      'Regular feedback'
    ]
  },
  'pte-preparation-course': {
    title: 'PTE Preparation Course',
    description: 'Specialized training for PTE Academic success.',
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176041/services1_obiiwr.avif',
    features: [
      'Computer-based practice',
      'Speaking strategies',
      'Writing workshops',
      'Reading techniques',
      'Listening skills',
      'Score analysis'
    ],
    benefits: [
      'Better test performance',
      'Computer familiarity',
      'Quick results',
      'Score improvement',
      'Expert guidance',
      'Practice materials'
    ]
  },

  'sat-preparation-course': {
    title: 'SAT Preparation Course',
    description: 'Comprehensive SAT training to help you achieve your target score.',
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176041/services1_obiiwr.avif',
    features: [
      'Expert trainers',
      'Practice tests',
      'Math and English sections',
      'Test strategies',
      'Study materials',
      'Mock tests'
    ],
    benefits: [
      'Higher test scores',
      'Improved test strategies',
      'Time management skills',
      'Confidence building',
      'Regular feedback',
      'Improved English skills'
    ]
  },

  'toefl-preparation-course': {
    title: 'TOEFL Preparation Course',
    description: 'Specialized training for TOEFL success.',
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176041/services1_obiiwr.avif',
    features: [
      'Computer-based practice',
      'Speaking strategies',
      'Writing workshops',
      'Reading techniques',
      'Listening skills',
      'Score analysis'
    ],
    benefits: [
      'Better test performance',
      'Computer familiarity',
      'Quick results',
      'Score improvement',
      'Expert guidance',
      'Practice materials'
    ]
  },

  'gmat-preparation-course': {
    title: 'GMAT Preparation Course',
    description: 'Comprehensive GMAT training to help you achieve your target score.',
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176041/services1_obiiwr.avif',
    features: [
      'Expert trainers',
      'Practice tests',
      'Math and English sections',
      'Test strategies',
      'Study materials',
      'Mock tests'
    ],
    benefits: [
      'Higher test scores',
      'Improved test strategies',
      'Time management skills',
      'Confidence building',
      'Regular feedback',
      'Improved English skills'
    ]
  },

  'gre-preparation-course': {
    title: 'GRE Preparation Course',
    description: 'Specialized training for GRE success.',
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176041/services1_obiiwr.avif',
    features: [
      'Computer-based practice',
      'Speaking strategies',
      'Writing workshops',
      'Reading techniques',
      'Listening skills',
      'Score analysis'
    ],
    benefits: [
      'Better test performance',
      'Computer familiarity',
      'Quick results',
      'Score improvement',
      'Expert guidance',
      'Practice materials'
    ]
  },

  

  'student-health-coverage': {
    title: 'Student Health Coverage',
    description: 'Comprehensive health coverage for international students.',
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176041/services1_obiiwr.avif',
    features: [
      'Health insurance plans',
      'Medical services',
      'Emergency assistance',
      'Hospital coverage',
      'Medication coverage',
      'Dental and vision coverage'
    ],
    benefits: [
      'Peace of mind',
      'Healthcare access',
      'Emergency support',
      'Affordable care',
      'Regular checkups',
      'Quality services'
    ]
  },

  'visa-assistance': {
    title: 'Visa Assistance',
    description: 'Expert guidance and support for visa applications and documentation.',
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176039/team_bverhz.avif',
    features: [
      'Document preparation',
      'Application review',
      'Interview preparation',
      'Financial documentation',
      'Status tracking',
      'Appeal assistance'
    ],
    benefits: [
      'Higher approval chances',
      'Stress-free process',
      'Time-saving',
      'Expert guidance',
      'Updated procedures',
      'Complete support'
    ]
  },

  'workplace-assistance': {
    title: 'Workplace Assistance',
    description: 'Support services for international students seeking work opportunities.',
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176039/team_bverhz.avif',
    features: [
      'Job search assistance',
      'Resume writing',
      'Interview preparation',
      'Workplace culture insights',
      'Work rights information',
      'Employment opportunities'
    ],
    benefits: [
      'Job search success',
      'Workplace readiness',
      'Cultural adaptation',
      'Legal compliance',
      'Career growth',
      'Networking opportunities'
    ]
  },

  'migration-service': {
    title: 'Migration Service',
    description: 'Expert guidance and support for migration applications and documentation.',
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176039/team_bverhz.avif',
    features: [
      'Document preparation',
      'Application review',
      'Interview preparation',
      'Financial documentation',
      'Status tracking',
      'Appeal assistance'
    ],
    benefits: [
      'Higher approval chances',
      'Stress-free process',
      'Time-saving',
      'Expert guidance',
      'Updated procedures',
      'Complete support'
    ]
  },

  'skilled-independent-visa': {
    title: 'Skilled Independent Visa',
    description: 'Expert guidance and support for skilled independent visa applications.',
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176039/team_bverhz.avif',
    features: [
      'Document preparation',
      'Application review',
      'Interview preparation',
      'Financial documentation',
      'Status tracking',
      'Appeal assistance'
    ],
    benefits: [
      'Higher approval chances',
      'Stress-free process',
      'Time-saving',
      'Expert guidance',
      'Updated procedures',
      'Complete support'
    ]
  },

  'skilled-nominated-work-visa': {
    title: 'Skilled Nominated Work Visa',
    description: 'Expert guidance and support for skilled nominated work visa applications.',
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176039/team_bverhz.avif',
    features: [
      'Document preparation',
      'Application review',
      'Interview preparation',
      'Financial documentation',
      'Status tracking',
      'Appeal assistance'
    ],
    benefits: [
      'Higher approval chances',
      'Stress-free process',
      'Time-saving',
      'Expert guidance',
      'Updated procedures',
      'Complete support'
    ]
  },

  'skilled-work-regional-visa': {
    title: 'Skilled Work Regional Visa',
    description: 'Expert guidance and support for skilled work regional visa applications.',
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176039/team_bverhz.avif',
    features: [
      'Document preparation',
      'Application review',
      'Interview preparation',
      'Financial documentation',
      'Status tracking',
      'Appeal assistance'
    ],
    benefits: [
      'Higher approval chances',
      'Stress-free process',
      'Time-saving',
      'Expert guidance',
      'Updated procedures',
      'Complete support'
    ]
  },

  'student-visa': {
    title: 'Student Visa Services',
    description: 'Complete assistance with student visa applications and documentation.',
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176039/team_bverhz.avif',
    features: [
      'Document preparation',
      'Application review',
      'Interview preparation',
      'Financial documentation',
      'Status tracking',
      'Appeal assistance'
    ],
    benefits: [
      'Higher approval chances',
      'Stress-free process',
      'Time-saving',
      'Expert guidance',
      'Updated procedures',
      'Complete support'
    ]
  },

  'temporary-graduate-visa': {
    title: 'Temporary Graduate Visa',
    description: 'Expert guidance and support for temporary graduate visa applications.',
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176039/team_bverhz.avif',
    features: [
      'Document preparation',
      'Application review',
      'Interview preparation',
      'Financial documentation',
      'Status tracking',
      'Appeal assistance'
    ],
    benefits: [
      'Higher approval chances',
      'Stress-free process',
      'Time-saving',
      'Expert guidance',
      'Updated procedures',
      'Complete support'
    ]
  },
  //job search assistance
  'job-search-assistance': {
    title: 'Job Search Assistance',
    description: 'Expert guidance and support for job search and application.',
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176039/team_bverhz.avif',
    features: [
      'Resume writing',
      'Cover letter writing',
      'Interview preparation',
      'Job search strategies',
      'Networking opportunities',
      'Employer connections'
    ],
    benefits: [
      'Job search success',
      'Professional resume',
      'Interview confidence',
      'Networking opportunities',
      'Career growth',
      'Employment opportunities'
    ]
  },
  //work visa consultation
  'work-visa-consultation': {
    title: 'Work Visa Consultation',
    description: 'Expert guidance and support for work visa applications.',
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176039/team_bverhz.avif',
    features: [
      'Document preparation',
      'Application review',
      'Interview preparation',
      'Financial documentation',
      'Status tracking',
      'Appeal assistance'
    ],
    benefits: [
      'Higher approval chances',
      'Stress-free process',
      'Time-saving',
      'Expert guidance',
      'Updated procedures',
      'Complete support'
    ]
  },

  //employer networking
  'employer-networking': {
    title: 'Employer Networking',
    description: 'Networking opportunities with potential employers.',
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176039/team_bverhz.avif',
    features: [
      'Employer connections',
      'Networking events',
      'Career fairs',
      'Job opportunities',
      'Industry insights',
      'Professional connections'
    ],
    benefits: [
      'Job opportunities',
      'Professional connections',
      'Career growth',
      'Industry insights',
      'Networking opportunities',
      'Employment opportunities'
    ]
  },
  //international job placement support
  'international-job-placement-support': {
    title: 'International Job Placement Support',
    description: 'Expert guidance and support for international job placement.',
    image: 'https://res.cloudinary.com/dlzg19gsa/image/upload/v1739176039/team_bverhz.avif',
    features: [
      'Resume writing',
      'Cover letter writing',
      'Interview preparation',
      'Job search strategies',
      'Networking opportunities',
      'Employer connections'
    ],
    benefits: [
      'Job search success',
      'Professional resume',
      'Interview confidence',
      'Networking opportunities',
      'Career growth',
      'Employment opportunities'
    ]
  },
  // Add more services...
};