import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-primary-500" />
              <span className="ml-2 text-xl font-serif font-bold">
                GoGetWell
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Empowering you to take control of your health journey with AI-powered insights and expert care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['features', 'how-it-works', 'testimonials', 'faq', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-gray-300 hover:text-primary-300 transition-colors"
                  >
                    {item.split('-').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary-300 transition-colors">Health Monitoring</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-300 transition-colors">AI Diagnosis</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-300 transition-colors">Specialist Consultations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-300 transition-colors">Health Insights</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-300 transition-colors">Appointment Scheduling</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for health tips and updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-800"
              />
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-r-lg transition-colors"
              >
                <Mail className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} GoGetWell. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;