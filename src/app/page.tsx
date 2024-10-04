import "./globals.css";
import React from "react";
import "font-awesome/css/font-awesome.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-poppins w-full">
      <div className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
        >
          <source src="/citi.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 text-white flex flex-col items-start justify-center h-full space-y-2 p-12">
          <h1 className="text-6xl font-bold leading-tight">
            <span className="block">Redefining Banking,</span>
            <span className="block">Tailored for You</span>
          </h1>
          <p className="text-lg max-w-xl text-justify p-2">
            Discover an all-in-one platform where AI-powered insights meet
            personalized financial education. From real-time money advice to
            fun, interactive courses, we make managing your finances effortless
            and engaging. Take charge of your financial journey today!
          </p>
          <p className="text-lg max-w-xl text-justify p-2">
            Join us to explore market opportunities and build a better financial
            future.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-bold uppercase rounded flex items-center space-x-2 hover:bg-blue-500 transition duration-300 ease-in-out">
            <span>Explore Now</span>
            <i className="transition-transform duration-300 ease-in-out transform hover:translate-x-1" />
          </button>
        </div>
      </div>

      <div className="relative z-10 text-white p-8">
        <h2 className="text-4xl font-bold mb-2">
          One Step Solution for All Your Problems
        </h2>
        <div className="text-lg mb-4">
          Discover our features tailored to simplify your financial journey.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              img: "/ak1.jpg",
              title: "Personalized Money Insights",
              desc: "Get tailored financial advice based on your spending patterns.",
            },
            {
              img: "/ak2.jpg",
              title: "Global Investment Opportunities",
              desc: "Explore curated global investment options with personalized risk assessments.",
            },
            {
              img: "/ak3.jpg",
              title: "Interactive Financial Learning",
              desc: "Master money management with fun, gamified courses and AR simulations.",
            },
            {
              img: "/ak4.jpg",
              title: "Smart Budget Planning Tools",
              desc: "Create custom budgets, track spending, and optimize savings effortlessly.",
            },
            {
              img: "/ak5.jpg",
              title: "AI-Powered Financial Advisor",
              desc: "Receive instant guidance on saving, spending, and investing based on your needs.",
            },
            {
              img: "/ak6.jpg",
              title: "Real-Time Expense Tracking",
              desc: "Track your spending in real-time across multiple currencies and accounts.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden flex flex-col h-96 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg"
            >
              <Image
                src={feature.img}
                alt={`Feature ${index + 1}`}
                className="w-full object-cover h-64"
                width={256}
                height={256}
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-bold text-lg">{feature.title}</h3>
                <p className="text-sm text-gray-300 mt-2 flex-grow">
                  {feature.desc}
                </p>
                <div className="flex justify-end">
                  <button className="text-blue-500 hover:text-blue-400 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 bg-gray-900 text-white p-8">
        <h2 className="text-4xl font-bold mb-6 text-center">
          What Our Customers Are Saying
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Jessica M.",
              role: "Marketing Manager",
              testimonial:
                "Citi's personalized money insights have truly changed how I manage my finances. I used to struggle with tracking spending and identifying areas to save, but now, the app provides tailored suggestions that align perfectly with my lifestyle. It feels like having a personal financial advisor in my pocket!",
            },
            {
              name: "David L.",
              role: "Small Business Owner",
              testimonial:
                "As someone who's always been hesitant about international investments, Citi's global investment opportunities feature gave me the confidence to diversify. The platform's insights into global markets, combined with real-time risk assessments, have been a game-changer in my investment strategy.",
            },
            {
              name: "Emily R.",
              role: "College Student",
              testimonial:
                "The interactive financial learning tools are simply fantastic! Citi has made learning about personal finance fun and engaging. The gamified courses kept me interested, and I now feel equipped with the knowledge to make smarter financial decisions.",
            },
            {
              name: "Michael T.",
              role: "Freelance Designer",
              testimonial:
                "The AI-powered financial advisor and real-time expense tracking have completely transformed how I manage my day-to-day finances. The app sends me instant advice on spending, saving, and even investing, all based on my unique habits.",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <p className="text-sm text-gray-300 mb-4">
                {testimonial.testimonial}
              </p>
              <div className="text-right">
                <h3 className="font-bold">{testimonial.name}</h3>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-6xl font-bold mb-2">30K+</h3>
              <p className="text-lg">Users Across the Globe</p>
            </div>
            <div>
              <h3 className="text-6xl font-bold mb-2">500K+</h3>
              <p className="text-lg">Total Sign-ups</p>
            </div>
            <div>
              <h3 className="text-6xl font-bold mb-2">98%</h3>
              <p className="text-lg">Customer Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-blue-900 text-white p-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Sign up for our newsletter to receive the latest updates, tips, and
            offers directly in your inbox. Stay informed and make the most of
            your financial journey!
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center max-w-2xl mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-auto px-4 py-2 rounded bg-white text-black focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-2 rounded transition duration-300 ease-in-out">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="relative z-10 bg-blue-900 text-white py-8">
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
              <h2 className="text-2xl font-bold mb-4 text-center">
                Connect With Us
              </h2>
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
            <p className="text-sm text-center">
              &copy; 2024 Your Company Name. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#" className="text-blue-300 hover:text-blue-200">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-300 hover:text-blue-200">
                Terms of Service
              </a>
              <a href="#" className="text-blue-300 hover:text-blue-200">
                Contact Us
              </a>
              <a href="#" className="text-blue-300 hover:text-blue-200">
                Instagram
              </a>
              <a href="#" className="text-blue-300 hover:text-blue-200">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
