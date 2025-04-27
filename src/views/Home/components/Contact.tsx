import React, { useState } from 'react';
import { 
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  CalendarClock
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    reason: 'general'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
      reason: 'general'
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg">
            Have questions or ready to start your health journey? Reach out to our team.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 animate-fade-in">
            <div className="bg-white rounded-xl shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                    Reason for Contact
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="demo">Request Demo</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md flex items-center justify-center"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-slide-up">
            <div className="bg-white rounded-xl shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Schedule a Consultation</h3>
              
              <p className="text-gray-600 mb-8">
                Book a free consultation with one of our health experts to learn how GoGetWell can help you achieve your health goals.
              </p>
              
              <div className="flex items-center mb-6 p-4 bg-primary-50 rounded-lg">
                <CalendarClock className="h-10 w-10 text-primary-500 mr-4" />
                <div>
                  <h4 className="font-bold">Virtual Consultation</h4>
                  <p className="text-gray-600">15-minute introduction to our platform</p>
                </div>
              </div>
              
              <button className="w-full bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md mb-8">
                Book Appointment
              </button>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    123 Health Avenue, San Francisco, CA 94158, United States
                  </p>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">+1 (555) 123-4567</p>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">contact@gogetwell.ai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;