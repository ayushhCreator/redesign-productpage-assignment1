import React from 'react';
import { Activity, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 animate-fade-in">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Personal <span className="text-primary-500">Health Assistant</span> is Here
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              GoGetWell helps you monitor your health, connect with specialists, and take control of your wellbeing with AI-powered insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-md">
                Get Started
              </button>
              <button className="border border-gray-300 hover:border-primary-500 text-gray-800 px-8 py-3 rounded-lg font-medium transition-colors">
                Learn More
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                <span>24/7 Health Monitoring</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                <span>AI-Powered Diagnosis</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                <span>Expert Specialists</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0 animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg" 
                alt="Doctor using digital health technology" 
                className="relative z-10 w-full h-auto rounded-3xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg z-20 animate-scale">
                <div className="flex items-center">
                  <Activity className="h-6 w-6 text-accent-800 mr-2" />
                  <div>
                    <p className="text-xs text-gray-500">Health Score</p>
                    <p className="text-lg font-bold text-gray-800">97<span className="text-sm font-normal text-gray-500">/100</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;