import React from 'react';
import Image from 'next/image';

const InfoCard = ({ title = false, content = false, imageSrc = false, imageAlt = false, isReversed = false }) => {
  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} bg-yellow-100 rounded-lg overflow-hidden`}>
      <div className="md:w-1/2 p-6">
        <h2 className="text-3xl font-bold mb-3">{title}</h2>
        {Array.isArray(content) ? (
          <ul className="list-disc ml-5">
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
      <div className="md:w-1/2 relative h-128">
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

const AboutUs = () => {
  const sections = [
    {
      title: "About Us",
      content: "At our core, we aim to simplify personal finance for individuals who struggle with budgeting, saving, and investing. We recognize that many users feel overwhelmed by the complexities of day-to-day financial management and lack access to personalized insights and advice that can guide them toward better financial decisions. Our platform is designed to bridge these gaps and provide real-time, AI-powered assistance to make finance more manageable, personalized, and effective.",
      imageSrc: "/ak1.jpg",
      imageAlt: "About Us"
    },
    {
      title: "Our Solution",
      content: "We've developed an AI-powered financial management platform that offers a comprehensive approach to money management. Our goal is to provide tailored financial guidance, real-time insights, and personalized investment advice, all while ensuring financial literacy education through engaging, gamified courses. The platform integrates key financial functions into a single system that helps users set, track, and achieve their financial goals with confidence.",
      imageSrc: "/ak2.jpg",
      imageAlt: "Our Solution"
    },
    {
      title: "Key Features",
      content: [
        "AI-Driven Financial Guidance: Personalized recommendations for budgeting, saving, and investing based on real-time financial data.",
        "Global Investment Access: Curated, personalized investment opportunities with risk assessments for cross-border investing.",
        "Engaging Financial Education: Gamified courses and AR simulations to simplify complex financial concepts and boost financial literacy.",
        "Comprehensive Financial Dashboard: Integration of multiple accounts and currencies, providing users with a holistic view of their finances in real time."
      ],
      imageSrc: "/ak3.jpg",
      imageAlt: "Key Features"
    },
    {
      title: "Our Mission & The Future",
      content: "We strive to empower users by providing tools and insights that allow them to manage their finances independently and confidently. Our platform promotes financial well-being through a user-centered, AI-driven experience that prioritizes simplicity, data privacy, and global accessibility. Our vision extends beyond current offerings, with plans to enhance AI capabilities for predictive financial forecasting, expand globally with real-time exchange rate services, and collaborate with financial institutions to offer premium features and more personalized services. We're committed to helping users grow their financial knowledge and wealth sustainably while navigating the ever-changing financial landscape.",
      imageSrc: "/ak4.jpg",
      imageAlt: "Our Mission & The Future"
    },
    {
      title: "Why Choose Us",
      content: [
        "Personalized, real-time financial advice.",
        "A holistic solution for budgeting, saving, investing, and learning.",
        "An easy-to-use platform designed to adapt to your needs and goals.",
        "Through our platform, we aim to reduce financial uncertainty, promote smarter financial decision-making, and help users achieve sustainable financial growth."
      ],
      imageSrc: "/ak5.jpg",
      imageAlt: "Why Choose Us"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <div className="flex-grow">
        <div className="flex flex-col gap-9 px-3 py-12">
          {sections.map((section, index) => (
            <InfoCard
              key={index}
              title={section.title}
              content={section.content}
              imageSrc={section.imageSrc}
              imageAlt={section.imageAlt}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-center">Solutions</h2>
              <div className="grid grid-cols-2 gap-2">
                <ul className="space-y-2">
                  <li className="text-center">Asset Management</li>
                  <li className="text-center">Investment Banking</li>
                  <li className="text-center">AI-Based Financial Advice</li>
                </ul>
                <ul className="space-y-2">
                  <li className="text-center">Market Trends</li>
                  <li className="text-center">Stock Prediction</li>
                  <li className="text-center">Wealth Management</li>
                </ul>
              </div>
            </div>

            {/* Connect With Us Column */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-center">Connect With Us</h2>
              <ul className="space-y-2">
                <li className="text-center">Client Login</li>
                <li className="text-center">Alumni Network</li>
              </ul>
            </div>

            {/* Careers Column */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-center">Careers</h2>
              <ul className="space-y-2">
                <li className="text-center">Internships</li>
                <li className="text-center">Full-Time Roles</li>
              </ul>
            </div>
          </div>

          {/* Copyright and Links */}
          <div className="border-t border-blue-800 pt-6 mt-6">
            <p className="text-sm text-center">&copy; 2024 Your Company Name. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#" className="text-blue-300 hover:text-blue-200">Privacy Policy</a>
              <a href="#" className="text-blue-300 hover:text-blue-200">Terms of Service</a>
              <a href="#" className="text-blue-300 hover:text-blue-200">Contact Us</a>
              <a href="#" className="text-blue-300 hover:text-blue-200">Instagram</a>
              <a href="#" className="text-blue-300 hover:text-blue-200">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
