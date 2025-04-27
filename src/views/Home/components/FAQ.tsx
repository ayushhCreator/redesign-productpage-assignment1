import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-lg"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        {question}
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-primary-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      <div 
        className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pb-4">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does GoGetWell protect my health data?",
      answer: "GoGetWell uses enterprise-grade encryption and follows HIPAA compliance standards to ensure your health data remains private and secure. We never share your information without your explicit consent, and you can request data deletion at any time."
    },
    {
      question: "Can I connect my existing health devices?",
      answer: "Yes! GoGetWell integrates with most popular health tracking devices including Apple Health, Google Fit, Fitbit, and many more. You can easily connect your devices through the settings menu in your dashboard."
    },
    {
      question: "Are the healthcare professionals on GoGetWell certified?",
      answer: "Absolutely. All healthcare providers on our platform are verified, licensed professionals. We conduct thorough background checks and credential verification before allowing any provider to join our network."
    },
    {
      question: "How accurate is the AI diagnosis feature?",
      answer: "Our AI provides preliminary insights based on your symptoms and health data, but it's designed to complement, not replace, professional medical advice. The system becomes more accurate over time as it learns from your health patterns and feedback."
    },
    {
      question: "Is GoGetWell covered by insurance?",
      answer: "Many health insurance providers cover telehealth services through GoGetWell. You can verify coverage by entering your insurance information in your profile. We also offer affordable self-pay options for those without coverage."
    },
    {
      question: "Can I use GoGetWell for my entire family?",
      answer: "Yes! GoGetWell offers family plans that allow you to manage the health of your loved ones from a single account, while maintaining individual profiles and privacy settings for each family member."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about GoGetWell and our services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;