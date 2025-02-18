import { Logo } from '../common/Logo';
import { FooterLinks } from './FooterLinks';
import { Newsletter } from './Newsletter';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Logo className="text-white" />
            <p className="mt-4 text-gray-400">
              Omni Education is a leading consultancy in Nepal that provides a highly trusted one-stop support network for students looking to study abroad from Nepal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <FooterLinks />
          </div>

          {/* Study Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Study Destinations</h3>
            <ul className="space-y-2">
              {[
                'Japan','South Korea',  'UK',   'Europe' 
              ].map((country) => (
                <li key={country}>
                  <a href={`/study-in-/${country.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-white transition-colors">
                    Study in {country}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <Newsletter />
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 Omni Education. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}