
import React from 'react';

const LearningBanner: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2 text-center md:text-left">
            <img 
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" 
              alt="Udemy Business" 
              className="h-10 mx-auto md:mx-0 mb-4"
            />
            <h2 className="text-3xl font-bold mb-4">Upskill your team with Udemy Business</h2>
            <ul className="space-y-3 mb-6 text-lg">
              <li className="flex items-start"><span className="text-xl mr-2">✓</span>Unlimited access to 25,000+ top Udemy courses, anytime, anywhere</li>
              <li className="flex items-start"><span className="text-xl mr-2">✓</span>International course collection in 14 languages</li>
              <li className="flex items-start"><span className="text-xl mr-2">✓</span>Top certifications in tech and business</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#" className="px-6 py-3 font-bold bg-purple-600 hover:bg-purple-700 text-white text-center">Get Udemy Business</a>
                <a href="#" className="px-6 py-3 font-bold bg-white hover:bg-gray-200 text-gray-900 text-center">Learn more</a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://s.udemycdn.com/home/non-student-cta/UB_Promo_800x800.jpg"
              alt="People collaborating"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningBanner;
