import { useState } from "react";
import { BookOpen, Building2, FileCheck, Plane, Users, Briefcase, ShieldCheck, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const services = {
  "Student Services": [
    { name: "Career Counseling Services", description: "Get expert guidance to choose the right career path and achieve your academic goals.", icon: Users },
    { name: "Off-Shore Services", description: "Comprehensive support for students planning to study abroad, from admission to settlement.", icon: Plane },
    { name: "Onshore Services", description: "Personalized assistance for international students already studying abroad, ensuring a smooth experience.", icon: Building2 },
    { name: "Course Advice", description: "Find the best courses that align with your career aspirations and educational background.", icon: BookOpen },
  ],
  "Test Preparation": [
    { name: "JLPT and NAT Preparation", description: "Master Japanese language proficiency exams with structured learning materials.", icon: FileCheck },
    { name: "IELTS Preparation Course", description: "Ace your IELTS exam with our structured training, expert tips, and practice tests.", icon: FileCheck },
    { name: "PTE Preparation Course", description: "Boost your PTE score with customized strategies, mock tests, and expert insights.", icon: FileCheck },
    { name: "SAT Preparation Course", description: "Master SAT with targeted coaching, test strategies, and in-depth practice materials.", icon: FileCheck },
    { name: "TOEFL Preparation Course", description: "Enhance your English proficiency and get high TOEFL scores with expert coaching.", icon: FileCheck },
    { name: "GMAT Preparation Course", description: "Excel in GMAT with top-notch preparation techniques and mock tests.", icon: FileCheck },
    { name: "GRE Preparation Course", description: "Improve your GRE score with intensive practice and professional guidance.", icon: FileCheck },
    
  ],
  "Migration Services": [
    { name: "Visa Assistance", description: "Get expert help for hassle-free visa applications and approvals.", icon: ShieldCheck },
    { name: "Skilled Independent Visa", description: "Guidance for skilled professionals seeking independent work opportunities abroad.", icon: Briefcase },
    { name: "Skilled Nominated Work Visa", description: "Support for individuals nominated by an employer or state for work visas.", icon: Briefcase },
    { name: "Skilled Work Regional Visa", description: "Assistance in obtaining work visas for specific regional employment.", icon: Briefcase },
    { name: "Student Visa", description: "Step-by-step guidance for securing a student visa for international studies.", icon: ShieldCheck },
    { name: "Temporary Graduate Visa", description: "Helping graduates extend their stay and gain work experience post-study.", icon: ShieldCheck },
    { name: "Migration Service", description: "Complete migration support for individuals and families relocating abroad.", icon: Globe },
    { name: "Student Health Coverage", description: "Affordable health coverage plans designed for international students.", icon: ShieldCheck },
    { name: "Workplace Assistance", description: "Legal and professional guidance for workplace-related concerns.", icon: Briefcase },
  ],
  "Work Abroad Services": [
    { name: "Job Search Assistance", description: "Helping job seekers find the best international career opportunities.", icon: Briefcase },
    { name: "Work Visa Consultation", description: "Expert advice on work visa options and the application process.", icon: ShieldCheck },
    { name: "Employer Networking", description: "Connect with top employers abroad and explore job opportunities.", icon: Globe },
    { name: "International Job Placement Support", description: "Comprehensive support to land a job and settle in a new country.", icon: Briefcase },
  ],
};

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(Object.keys(services)[0]);
  const navigate = useNavigate();

  const createSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");


  return (
    <div id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
        <p className="mt-4 text-xl text-gray-600">
          Comprehensive support for your study abroad journey
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mt-8 pb-3">
        {Object.keys(services).map((category) => (
          <button
            key={category}
            className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 shadow-md ${
              activeTab === category
                ? "bg-blue-600 text-white scale-105"
                : "bg-white text-gray-500 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {Object.entries(services).map(
        ([category, items]) =>
          activeTab === category && (
            <motion.div 
              key={category} 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {items.map(({ name, description, icon: Icon }) => (
                <motion.div
                  key={name}
                  className="p-6 shadow-xl rounded-lg border bg-white hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex flex-col gap-4 items-center text-center">
                    {/* Icon inside a Gradient Circle */}
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Service Title */}
                    <h3 className="text-xl font-semibold text-gray-900">{name}</h3>

                    {/* Description */}
                    <p className="text-gray-600">{description}</p>

                    {/* CTA Button */}
                    {/* <button className="bg-blue-500 text-white px-5 py-2 mt-4 rounded-full hover:bg-blue-600 transition duration-300">
                      See More →
                    </button> */}
                    <button
                      onClick={() => navigate(`/services/${createSlug(name)}`)} // Navigate to ServicePage
                      className="bg-blue-500 text-white px-5 py-2 mt-4 rounded-full hover:bg-blue-600 transition duration-300"
                    >See More →</button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )
      )}
    </div>
  );
}
