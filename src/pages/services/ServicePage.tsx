import { Award, Calendar, CheckCircle } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { serviceDetails } from '../../data/services';

interface ServicePageProps {
  mobile?: boolean;
}
export default function ServicePage( { mobile = false }: ServicePageProps) {
  
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? serviceDetails[serviceId] : null;

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h1 className="text-3xl font-bold text-white">{service.title}</h1>
        </div>
      </div>

      <div className="p-8">
        <p className="text-lg text-gray-600 mb-8">{service.description}</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
              Key Features
            </h2>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Award className="h-6 w-6 text-blue-600 mr-2" />
              Benefits
            </h2>
            <ul className="space-y-3">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Calendar className="h-6 w-6 text-blue-600 mr-2" />
            Book a Consultation
          </h2>
          <p className="text-gray-600 mb-4">
            Interested in this service? Schedule a free consultation with our experts to learn more and get started.
          </p>
          <Link 
        to="/contact" 
        className={`text-gray-700 hover:text-blue-600 ${mobile ? 'block px-3 py-2' : ''}`}
      >
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
            Schedule Now
          </button>
      </Link>
        </div>
      </div>
    </div>
  );
}