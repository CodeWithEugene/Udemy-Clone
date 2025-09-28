
import React from 'react';
import { CATEGORIES } from '../constants';

const Categories: React.FC = () => {
  return (
    <section className="container mx-auto py-12 px-4 md:px-8">
      <h2 className="text-2xl font-bold mb-6">Featured topics by category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
        {CATEGORIES.slice(0, 4).map((category, index) => (
          <div key={index}>
            <h3 className="font-bold text-lg mb-3">{category}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-purple-600 font-bold hover:text-purple-800 underline">Python</a>
                <p className="text-sm text-gray-500">36,354,994 students</p>
              </li>
              <li>
                <a href="#" className="text-purple-600 font-bold hover:text-purple-800 underline">Web Development</a>
                <p className="text-sm text-gray-500">11,415,615 students</p>
              </li>
              <li>
                <a href="#" className="text-purple-600 font-bold hover:text-purple-800 underline">Machine Learning</a>
                <p className="text-sm text-gray-500">7,070,015 students</p>
              </li>
            </ul>
          </div>
        ))}
      </div>
       <a href="#" className="mt-6 inline-block px-4 py-2 text-sm font-bold border border-gray-900 text-gray-900 hover:bg-gray-100">
            Explore more topics
        </a>
    </section>
  );
};

export default Categories;
