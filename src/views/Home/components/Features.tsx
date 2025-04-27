import React from 'react';
import { Activity, Stethoscope, MessageSquare, BookOpen, Calendar, LineChart as ChartLine } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-transform hover:translate-y-[-5px] hover:shadow-md">
      <div className="rounded-lg bg-primary-50 w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Activity className="h-6 w-6 text-primary-500" />,
      title: "Health Monitoring",
      description: "Track vital signs, medication and symptoms in real-time with our easy-to-use platform."
    },
    {
      icon: <Stethoscope className="h-6 w-6 text-primary-500" />,
      title: "AI Diagnosis",
      description: "Our AI analyzes your symptoms and provides preliminary insights before connecting with doctors."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary-500" />,
      title: "Expert Consultations",
      description: "Connect with specialists through secure video calls and messaging for personalized care."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary-500" />,
      title: "Health Insights",
      description: "Receive personalized health recommendations based on your data and medical history."
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary-500" />,
      title: "Appointment Scheduling",
      description: "Easily book and manage appointments with healthcare providers through our platform."
    },
    {
      icon: <ChartLine className="h-6 w-6 text-primary-500" />,
      title: "Progress Tracking",
      description: "Monitor your health journey with detailed analytics and progress reports over time."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Comprehensive Health Features
          </h2>
          <p className="text-gray-600 text-lg">
            Our platform offers everything you need to monitor and improve your health from anywhere, anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <Feature
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;