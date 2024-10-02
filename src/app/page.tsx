import "./globals.css";
import React from "react";
import "font-awesome/css/font-awesome.css";

export default function Home() {
  return (
    <div className="font-poppins w-full">
      {/* Hero Section */}
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

        <div className="relative z-10 text-white flex flex-col items-start justify-center h-full space-y-2 p-4">
          <h1 className="text-6xl font-bold leading-tight">
            <span className="block">Redefining Banking,</span>
            <span className="block">Tailored for You</span>
          </h1>
          <p className="text-lg max-w-xl text-justify">
            Discover an all-in-one platform where AI-powered insights meet
            personalized financial education. From real-time money advice to
            fun, interactive courses, we make managing your finances effortless
            and engaging. Take charge of your financial journey today!
          </p>
          <p className="text-lg max-w-xl text-justify">
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
          
          <div className="bg-gray-800 rounded-lg overflow-hidden flex flex-col h-96">
            <img
              src="/ak1.jpg"
              alt="Feature 1"
              className="w-full object-cover h-64"
            />
            <div className ="p-4 flex flex-col flex-grow">
            <h3 className="font-bold text-lg">Feature Title 1 </h3>
            <p className="text-sm text-gray-300 mt-2 mb-4 flex-grow">
              Short description of Feature 1.
            </p>
            <button className="mt-auto text-blue-500">Learn More</button>
          </div>
          </div>

        
          <div className="bg-gray-800 rounded-lg overflow-hidden flex flex-col h-96">
            <img
              src="/ak2.jpg"
              alt="Feature 2"
              className="w-full object-cover h-64"
            />
            <div className ="p-4 flex flex-col flex-grow">
            <h3 className="font-bold text-lg">Feature Title 1 </h3>
            <p className="text-sm text-gray-300 mt-2 mb-4 flex-grow">
              Short description of Feature 1.
            </p>
            <button className="mt-auto text-blue-500">Learn More</button>
          </div>
          </div>

          
          <div className="bg-gray-800 rounded-lg overflow-hidden flex flex-col h-96">
            <img
              src="/ak3.jpg"
              alt="Feature 3"
              className="w-full object-cover h-64"
            />
            <div className ="p-4 flex flex-col flex-grow">
            <h3 className="font-bold text-lg">Feature Title 1 </h3>
            <p className="text-sm text-gray-300 mt-2 mb-4 flex-grow">
              Short description of Feature 1.
            </p>
            <button className="mt-auto text-blue-500">Learn More</button>
          </div>
          </div>

         
          <div className="bg-gray-800 rounded-lg overflow-hidden flex flex-col h-96">
            <img
              src="/ak4.jpg"
              alt="Feature 4"
              className="w-full object-cover h-64"
            />
            <div className ="p-4 flex flex-col flex-grow">
            <h3 className="font-bold text-lg">Feature Title 4 </h3>
            <p className="text-sm text-gray-300 mt-2 mb-4 flex-grow">
              Short description of Feature 1.
            </p>
            <button className="mt-auto text-blue-500">Learn More</button>
          </div>
          </div>

         
          <div className="bg-gray-800 rounded-lg overflow-hidden flex flex-col h-96">
            <img
              src="/ak5.jpg"
              alt="Feature 5"
              className="w-full object-cover h-64"
            />
            <div className ="p-4 flex flex-col flex-grow">
            <h3 className="font-bold text-lg">Feature Title 5 </h3>
            <p className="text-sm text-gray-300 mt-2 mb-4 flex-grow">
              Short description of Feature 5.
            </p>
            <button className="mt-auto text-blue-500">Learn More</button>
          </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden flex flex-col h-96">
            <img
              src="/ak6.jpg"
              alt="Feature 6"
              className="w-full object-cover h-64"
            />
            <div className ="p-4 flex flex-col flex-grow">
            <h3 className="font-bold text-lg">Feature Title 6 </h3>
            <p className="text-sm text-gray-300 mt-2 mb-4 flex-grow">
              Short description of Feature 1.
            </p>
            <button className="mt-auto text-blue-500">Learn More</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
