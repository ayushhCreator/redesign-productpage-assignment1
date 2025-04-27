import React from 'react';
import { ArrowRight } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({ number, title, description, isLast = false }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center">
      <div className="flex-shrink-0 relative">
        <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-xl">
          {number}
        </div>
        {!isLast && (
          <div className="hidden md:block absolute top-12 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-primary-200"></div>
        )}
      </div>

      <div className="md:ml-8 mt-4 md:mt-0">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 max-w-md">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Sign Up",
      description: "Create your account in minutes and complete your health profile with medical history and preferences."
    },
    {
      number: 2,
      title: "Connect Devices",
      description: "Link your health trackers and devices to monitor vital signs and activities automatically."
    },
    {
      number: 3,
      title: "Get AI Insights",
      description: "Receive personalized health recommendations and insights based on your data and health goals."
    },
    {
      number: 4,
      title: "Consult Specialists",
      description: "Connect with qualified healthcare professionals for virtual consultations when needed."
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              How GoGetWell Works
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Our simple process is designed to make healthcare accessible and convenient for everyone.
            </p>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Step
                    number={step.number}
                    title={step.title}
                    description={step.description}
                    isLast={index === steps.length - 1}
                  />
                </div>
              ))}
            </div>
            
            <button className="mt-10 flex items-center font-medium text-primary-500 hover:text-primary-600 transition-colors">
              Learn more about our process
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          
          <div className="lg:w-1/2 animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/20 to-primary-500/20 rounded-3xl transform -rotate-2"></div>
              <img 
                src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg"
                alt="Patient using GoGetWell platform" 
                className="relative z-10 w-full h-auto rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;