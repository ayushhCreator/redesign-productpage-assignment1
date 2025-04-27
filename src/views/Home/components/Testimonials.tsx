import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, role, rating, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 flex flex-col h-full">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 flex-grow">"{quote}"</p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={author} 
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "GoGetWell has transformed how I manage my chronic condition. The ability to track my symptoms and get insights has been invaluable.",
      author: "Sarah Johnson",
      role: "Patient",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      quote: "As a healthcare provider, I appreciate how GoGetWell helps my patients stay engaged with their treatment plans between appointments.",
      author: "Dr. Michael Chen",
      role: "Cardiologist",
      rating: 5,
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg"
    },
    {
      quote: "The AI-powered insights have helped me identify patterns in my health that I never noticed before. It's like having a personal health assistant.",
      author: "David Rodriguez",
      role: "User",
      rating: 4,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
      quote: "I love how easy it is to schedule appointments and follow up with specialists. This platform has saved me countless hours of waiting on the phone.",
      author: "Emily Thompson",
      role: "Patient",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    },
    {
      quote: "The medication tracking feature has been a game changer for managing my parents' health. I can easily help them stay on schedule.",
      author: "Robert Williams",
      role: "Caregiver",
      rating: 5,
      image: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg"
    },
    {
      quote: "GoGetWell makes it easy to monitor my vitals and share the data with my healthcare team. My doctor loves having this information during visits.",
      author: "Lisa Martinez",
      role: "User",
      rating: 4,
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg"
    },
  ];

  const displayTestimonials = testimonials.slice(currentIndex, currentIndex + 3);
  
  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
    );
  };
  
  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.max(0, testimonials.length - 3) : prevIndex - 3
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="text-gray-600 text-lg">
            Discover how GoGetWell is helping people take control of their health journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                rating={testimonial.rating}
                image={testimonial.image}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button 
            onClick={prevTestimonials}
            className="bg-white rounded-full p-3 shadow-md text-gray-800 hover:text-primary-500 transition-colors mr-4"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextTestimonials}
            className="bg-white rounded-full p-3 shadow-md text-gray-800 hover:text-primary-500 transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;