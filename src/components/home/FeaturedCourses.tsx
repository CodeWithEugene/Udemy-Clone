import React, { useState, useEffect } from 'react';
import { COURSE_TABS } from '../../constants';
import CourseCard from '../shared/CourseCard';
import { Course } from '../../types';
import { getCoursesByCategory } from '../../api/courses';
import Button from '../common/Button';

const FeaturedCourses: React.FC = () => {
  const [activeTab, setActiveTab] = useState(COURSE_TABS[0]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
        setLoading(true);
        const fetchedCourses = await getCoursesByCategory(activeTab);
        setCourses(fetchedCourses);
        setLoading(false);
    };
    fetchCourses();
  }, [activeTab]);

  return (
    <section className="container mx-auto py-12 px-4 md:px-8">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold mb-2">A broad selection of courses</h2>
        <p className="text-xl text-gray-700 mb-6">
          Choose from over 210,000 online video courses with new additions published every month
        </p>
      </div>
      
      <div className="flex flex-wrap border-b border-gray-300 mb-6">
        {COURSE_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm md:text-base font-bold transition-colors duration-200 ${
              activeTab === tab
                ? 'text-gray-900 border-b-2 border-gray-900'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      
      <div className="border border-gray-200 p-6">
          <h3 className="text-2xl font-bold mb-2">Expand your career opportunities with {activeTab}</h3>
          <p className="max-w-3xl text-gray-700 mb-4">
              Take one of Udemy’s range of {activeTab} courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes {activeTab} perfect for beginners and veterans alike.
          </p>
          <Button variant="ghost" size="sm">Explore {activeTab}</Button>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => <div key={i} className="bg-gray-200 h-64 animate-pulse rounded"></div>)
              ) : (
                courses.map((course: Course) => (
                    <CourseCard key={course.id} course={course} />
                ))
              )}
          </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;