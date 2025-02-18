
export interface Destination {
  country: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
  requirements: {
    academic: string[];
    language: string[];
    financial: string[];
  };
  universities: {
    name: string;
    location: string;
    image: string;
  }[];
  whyStudy: string[];
  visaProcess: string[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const destinations: Record<string, Destination> = {
 
  japan: {
    country: "Japan",
    title: "Study in Japan",
    description: "Japan is known for its cutting-edge technology, rich cultural heritage, and world-class education system that attracts students from around the globe.",
    image: "https://res.cloudinary.com/dlzg19gsa/image/upload/v1739174394/japan_u44vez.avif",
    highlights: [
      "Innovative research opportunities",
      "Cultural immersion",
      "Safe and clean environment",
      "High-quality education",
      "Unique cultural experiences",
    ],
    requirements: {
      academic: ["High school diploma for undergraduate", "Bachelor's degree for postgraduate", "Academic transcripts", "Study plan"],
      language: ["Japanese language proficiency (JLPT)", "English language proficiency (TOEFL, IELTS) for some programs"],
      financial: ["Proof of funds for tuition and living expenses", "Scholarship applications", "Visa application fee payment"],
    },
    universities: [
      { name: "The University of Tokyo", location: "Tokyo",
        image: "https://res.cloudinary.com/dlzg19gsa/image/upload/v1739180544/universityoftokyo_magoqj.jpg" },
      { name: "Kyoto University", location: "Kyoto",
        image: "https://res.cloudinary.com/dlzg19gsa/image/upload/v1739180544/kyoto_ucsbwa.jpg" },
      { name: "Osaka University", location: "Osaka",
        image: "https://res.cloudinary.com/dlzg19gsa/image/upload/v1739180543/osaka_uomjee.jpg" },
    ],
    whyStudy: ["Cutting-edge technology", "Research opportunities", "Cultural experiences", "Safe environment", "Global career prospects"],
    visaProcess: [
      "Apply for Certificate of Eligibility (CoE)",
      "Complete visa application form",
      "Submit required documents",
      "Attend visa interview",
      "Receive student visa",
    ],
    faq: [
      { question: "Can I work while studying in Japan?", answer: "Yes, students can work part-time up to 28 hours per week." },
      { question: "Are scholarships available for international students?", answer: "Yes, many Japanese universities offer scholarships to international students." },
    ],
  },
  //south-korea
  //implement south-korea destination data so 
  'south-korea': {
    country: "South Korea",
    title: "Study in South Korea",
    description: "South Korea is known for its high-quality education system, cutting-edge technology, and vibrant culture that attracts students from around the world.",
    image: "https://res.cloudinary.com/dlzg19gsa/image/upload/v1739174395/korea_jvbfrv.avif",
    highlights: [
      "Top-ranked universities",
      "Innovative research opportunities",
      "Cultural immersion",
      "Global career prospects",
      "Safe and welcoming environment",
    ],
    requirements: {
      academic: ["High school diploma for undergraduate", "Bachelor's degree for postgraduate", "Academic transcripts", "Study plan"],
      language: ["TOPIK score for Korean-taught programs", "TOEFL iBT score of 80+", "IELTS score of 6.0+"],
      financial: ["Proof of funds for tuition and living expenses", "Scholarship applications", "Visa application fee payment"],
    },
    universities: [
      { name: "Seoul National University", location: "Seoul", image: "https://res.cloudinary.com/dlzg19gsa/image/upload/v1739180544/seoul_oychec.jpg" },
      { name: "Korea University", location: "Seoul", image: "https://res.cloudinary.com/dlzg19gsa/image/upload/v1739180543/korea_university_ozsmcf.png" },
      { name: "Yonsei University", location: "Seoul", image: "https://res.cloudinary.com/dlzg19gsa/image/upload/v1739180543/yonsei_odwcu4.jpg" },
    ],
    whyStudy: ["Cutting-edge technology", "Research opportunities", "Cultural experiences", "Global career prospects", "Safe environment"],
    visaProcess: [
      "Obtain acceptance letter from university",
      "Apply for D-2 student visa",
      "Submit required documents",
      "Attend visa interview",
      "Receive student visa",
    ],
    faq: [
      { question: "Can I work while studying in South Korea?", answer: "Yes, international students can work part-time up to 20 hours per week." },
      { question: "Are scholarships available for international students?", answer: "Yes, many Korean universities offer scholarships to international students." },
    ],
  },
  
  // australia: {
  //   country: "Australia",
  //   title: "Study in Australia",
  //   description: "Australia is known for its high-quality education system, friendly environment, and post-graduation work opportunities.",
  //   image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80",
  //   highlights: [
  //     "Globally ranked universities",
  //     "Cultural diversity",
  //     "Beautiful landscapes",
  //     "Post-study work visa",
  //     "High quality of life",
  //   ],
  //   requirements: {
  //     academic: ["High school diploma for undergraduate", "Bachelor's degree for postgraduate", "Academic transcripts", "Personal statement"],
  //     language: ["IELTS score of 6.0+ (overall)", "TOEFL iBT score of 79+", "PTE Academic score of 58+"],
  //     financial: ["Proof of funds for tuition and living expenses", "Overseas Student Health Cover (OSHC)", "Visa application fee payment"],
  //   },
  //   universities: [
  //     { name: "University of Melbourne", location: "Melbourne, Victoria", image: "https://images.unsplash.com/photo-1574117700607-96a85411fdb2?auto=format&fit=crop&q=80" },
  //     { name: "Australian National University", location: "Canberra, ACT", image: "https://images.unsplash.com/photo-1616627988530-6a10fc7b0b82?auto=format&fit=crop&q=80" },
  //     { name: "University of Sydney", location: "Sydney, NSW", image: "https://images.unsplash.com/photo-1518013431114-bd444ae9b82b?auto=format&fit=crop&q=80" },
  //   ],
  //   whyStudy: ["High academic standards", "Welcoming atmosphere", "Path to permanent residency", "Work opportunities", "Cultural diversity"],
  //   visaProcess: [
  //     "Apply for acceptance to a CRICOS-registered institution",
  //     "Pay OSHC fee",
  //     "Submit visa application (subclass 500)",
  //     "Provide biometrics",
  //     "Receive visa approval",
  //   ],
  //   faq: [
  //     { question: "Can I work while studying in Australia?", answer: "Yes, international students can work up to 20 hours per week during study periods." },
  //     { question: "What is the Temporary Graduate Visa (subclass 485)?", answer: "It allows international students to live and work in Australia after graduation." },
  //   ],
  // },
  // canada: {
  //   country: "Canada",
  //   title: "Study in Canada",
  //   description: "Canada offers world-class education, a safe multicultural environment, and excellent post-graduation work opportunities for international students.",
  //   image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80",
  //   highlights: [
  //     "High-quality education system",
  //     "Post-graduation work permit",
  //     "Path to permanent residency",
  //     "Safe and welcoming environment",
  //     "Bilingual education opportunities",
  //   ],
  //   requirements: {
  //     academic: ["High school diploma for undergraduate", "Bachelor's degree for postgraduate", "Academic transcripts", "Study plan"],
  //     language: ["IELTS score of 6.0+ (overall)", "TOEFL iBT score of 80+", "French proficiency for some programs"],
  //     financial: ["Guaranteed Investment Certificate (GIC)", "Proof of tuition payment", "Living expenses for the first year"],
  //   },
  //   universities: [
  //     { name: "University of Toronto", location: "Toronto, Ontario", image: "https://images.unsplash.com/photo-1569152811536-fb47aced8409?auto=format&fit=crop&q=80" },
  //     { name: "University of British Columbia", location: "Vancouver, BC", image: "https://images.unsplash.com/photo-1604872441539-ef1db9b25f92?auto=format&fit=crop&q=80" },
  //     { name: "McGill University", location: "Montreal, Quebec", image: "https://images.unsplash.com/photo-1580843411760-d3868d406578?auto=format&fit=crop&q=80" },
  //   ],
  //   whyStudy: ["Affordable education", "Immigration pathways", "Safe environment", "Cultural diversity", "Research opportunities"],
  //   visaProcess: [
  //     "Obtain acceptance letter from DLI",
  //     "Create an account on the IRCC portal",
  //     "Complete study permit application",
  //     "Provide biometrics",
  //     "Submit required documents",
  //   ],
  //   faq: [
  //     { question: "What is a DLI number?", answer: "A Designated Learning Institution (DLI) is a school approved to host international students." },
  //     { question: "Can I work while studying in Canada?", answer: "Yes, students can work up to 20 hours per week during academic sessions." },
  //   ],
  // },
  // usa: {
  //   country: "USA",
  //   title: "Study in the USA",
  //   description: "The United States offers a diverse range of programs, prestigious universities, and unmatched opportunities for international students.",
  //   image: "https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?auto=format&fit=crop&q=80",
  //   highlights: [
  //     "World-class universities",
  //     "Flexible education system",
  //     "Diverse cultural experience",
  //     "Extensive research opportunities",
  //     "Abundant career prospects",
  //   ],
  //   requirements: {
  //     academic: ["High school diploma for undergraduate", "Bachelor's degree for postgraduate", "Standardized test scores (SAT, GRE, GMAT)", "Academic transcripts"],
  //     language: ["TOEFL iBT score of 80+", "IELTS score of 6.5+", "Duolingo English Test accepted by some universities"],
  //     financial: ["Proof of tuition payment", "Bank statement showing financial stability", "Living expenses for one year"],
  //   },
  //   universities: [
  //     { name: "Harvard University", location: "Cambridge, MA", image: "https://images.unsplash.com/photo-1523206489230-ed1d6a59a3d8?auto=format&fit=crop&q=80" },
  //     { name: "Stanford University", location: "Stanford, CA", image: "https://images.unsplash.com/photo-1589308078058-7b94e72f2344?auto=format&fit=crop&q=80" },
  //     { name: "Massachusetts Institute of Technology (MIT)", location: "Cambridge, MA", image: "https://images.unsplash.com/photo-1551632436-cbf8dd35d187?auto=format&fit=crop&q=80" },
  //   ],
  //   whyStudy: ["Globally recognized degrees", "Cultural diversity", "Research opportunities", "Innovative learning environments", "Career advancement"],
  //   visaProcess: [
  //     "Obtain I-20 from the university",
  //     "Pay the SEVIS fee",
  //     "Complete DS-160 form",
  //     "Schedule and attend visa interview",
  //     "Receive F-1 visa approval",
  //   ],
  //   faq: [
  //     { question: "Can I work while studying in the USA?", answer: "Yes, international students can work up to 20 hours per week on campus." },
  //     { question: "What is the Optional Practical Training (OPT)?", answer: "OPT allows students to work in their field of study for up to 12 months after graduation." },
  //   ],
  // },
  uk: {
    country: "UK",
    title: "Study in the UK",
    description: "The UK is home to some of the world's oldest and most prestigious universities, offering a rich history of academic excellence and cultural diversity.",
    image: "https://res.cloudinary.com/dlzg19gsa/image/upload/v1739174397/europe_wqrbw8.avif",
    highlights: [
      "Renowned universities",
      "Cultural heritage",
      "Global career prospects",
      "Research opportunities",
      "Multicultural environment",
    ],
    requirements: {
      academic: ["High school diploma for undergraduate", "Bachelor's degree for postgraduate", "Academic transcripts", "Personal statement"],
      language: ["IELTS score of 6.0+ (overall)", "TOEFL iBT score of 79+", "PTE Academic score of 58+"],
      financial: ["Proof of funds for tuition and living expenses", "Health surcharge payment", "Visa application fee payment"],
    },
    universities: [
      { name: "University of Oxford", location: "Oxford, England", image: "https://res.cloudinary.com/dlzg19gsa/image/upload/v1739180543/oxford_lqx9n4.jpg" },
      { name: "University of Cambridge", location: "Cambridge, England", image: "https://res.cloudinary.com/dlzg19gsa/image/upload/v1739180543/cambridge_g71i5f.jpg" },
      { name: "Imperial College London", location: "London, England", image: "https://res.cloudinary.com/dlzg19gsa/image/upload/v1739180542/imperial_r9ohbp.jpg" },
    ],
    whyStudy: ["Quality education", "Global recognition", "Cultural diversity", "Career opportunities", "Research excellence"],
    visaProcess: [
      "Apply for a CAS from the university",
      "Complete the online visa application",
      "Pay the health surcharge",
      "Biometrics appointment",
      "Attend visa interview",
    ],
    faq: [
      { question: "Can I work while studying in the UK?", answer: "Yes, students can work up to 20 hours per week during term time." },
      { question: "What is the Graduate Route visa?", answer: "It allows international students to stay in the UK for 2 years after graduation." },
    ],
  },
  //New Zealand
  // 'new-zealand': {
  //   country: "New Zealand",
  //   title: "Study in New Zealand",
  //   description: "New Zealand offers a high-quality education system, stunning natural landscapes, and a welcoming environment for international students.",
  //   image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&q=80",
  //   highlights: [
  //     "World-class universities",
  //     "Safe and welcoming environment",
  //     "Beautiful natural landscapes",
  //     "Post-study work opportunities",
  //     "High quality of life",
  //   ],
  //   requirements: {
  //     academic: ["High school diploma for undergraduate", "Bachelor's degree for postgraduate", "Academic transcripts", "Study plan"],
  //     language: ["IELTS score of 6.0+ (overall)", "TOEFL iBT score of 79+", "PTE Academic score of 58+"],
  //     financial: ["Proof of funds for tuition and living expenses", "Health insurance coverage", "Visa application fee payment"],
  //   },
  //   universities: [
  //     { name: "University of Auckland", location: "Auckland", image: "https://images.unsplash.com/photo-1574117700607-96a85411fdb2?auto=format&fit=crop&q=80" },
  //     { name: "University of Otago", location: "Dunedin", image: "https://images.unsplash.com/photo-1616627988530-6a10fc7b0b82?auto=format&fit=crop&q=80" },
  //     { name: "Victoria University of Wellington", location: "Wellington", image: "https://images.unsplash.com/photo-1518013431114-bd444ae9b82b?auto=format&fit=crop&q=80" },
  //   ],
  //   whyStudy: ["High academic standards", "Safe environment", "Research opportunities", "Cultural diversity", "Post-study work opportunities"],
  //   visaProcess: [
  //     "Obtain acceptance letter from institution",
  //     "Apply for student visa (subclass 500)",
  //     "Provide biometrics",
  //     "Submit required documents",
  //     "Receive visa approval",
  //   ],
  //   faq: [
  //     { question: "Can I work while studying in New Zealand?", answer: "Yes, international students can work up to 20 hours per week during study periods." },
  //     { question: "What is the Post-study Work Visa?", answer: "It allows international students to work in New Zealand for up to 3 years after graduation." },
  //   ],
  // },
  //Europe
  europe: {
    country: "Europe",
    title: "Study in Europe",
    description: "Europe is home to some of the world's oldest and most prestigious universities, offering a rich history of academic excellence and cultural diversity.",
    image: "https://res.cloudinary.com/dlzg19gsa/image/upload/v1739175312/euro_wm9bts.avif",
    highlights: [
      "Renowned universities",
      "Cultural heritage",
      "Global career prospects",
      "Research opportunities",
      "Multicultural environment",
    ],
    requirements: {
      academic: ["High school diploma for undergraduate", "Bachelor's degree for postgraduate", "Academic transcripts", "Personal statement"],
      language: ["IELTS score of 6.0+ (overall)", "TOEFL iBT score of 79+", "PTE Academic score of 58+"],
      financial: ["Proof of funds for tuition and living expenses", "Health surcharge payment", "Visa application fee payment"],
    },
    universities: [
      { name: "University of Oxford", location: "Oxford, England", image: "https://images.unsplash.com/photo-1604872441539-ef1db9b25f92?auto=format&fit=crop&q=80" },
      { name: "University of Cambridge", location: "Cambridge, England", image: "https://images.unsplash.com/photo-1569152811536-fb47aced8409?auto=format&fit=crop&q=80" },
      { name: "Imperial College London", location: "London, England", image: "https://images.unsplash.com/photo-1580843411760-d3868d406578?auto=format&fit=crop&q=80" },
    ],
    whyStudy: ["Quality education", "Global recognition", "Cultural diversity", "Career opportunities", "Research excellence"],
    visaProcess: [
      "Apply for a CAS from the university",
      "Complete the online visa application",
      "Pay the health surcharge",
      "Biometrics appointment",
      "Attend visa interview",
    ],
    faq: [
      { question: "Can I work while studying in the UK?", answer: "Yes, students can work up to 20 hours per week during term time." },
      { question: "What is the Graduate Route visa?", answer: "It allows international students to stay in the UK for 2 years after graduation." },
    ],
  },
      
};

