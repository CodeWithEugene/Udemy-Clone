
import React from 'react';

const InstructorBanner: React.FC = () => {
  return (
    <section className="container mx-auto py-12 px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="md:w-1/2 flex-shrink-0">
          <img 
            src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
            alt="An instructor teaching"
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Become an instructor</h2>
          <p className="text-lg mb-6">
            Instructors from around the world teach millions of learners on Udemy. We provide the tools and skills to teach what you love.
          </p>
          <a href="#" className="inline-block px-6 py-3 font-bold bg-gray-900 hover:bg-gray-800 text-white">
            Start teaching today
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstructorBanner;