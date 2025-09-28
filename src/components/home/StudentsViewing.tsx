import React, { useState, useEffect } from 'react';
import CourseCard from '../shared/CourseCard';
import { Course } from '../../types';
import { getCoursesByCategory } from '../../api/courses';

const StudentsViewing: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
        setLoading(true);
        const fetchedCourses = await getCoursesByCategory('Students viewing');
        setCourses(fetchedCourses);
        setLoading(false);
    };
    fetchCourses();
  }, []);

  return (
    <section className="container mx-auto py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-6">Students are viewing</h2>
      <div className="relative">
        <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 hide-scrollbar">
          {loading ? (
             Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex-shrink-0 w-64 bg-gray-200 h-72 animate-pulse rounded"></div>
             ))
          ) : (
            courses.map((course: Course) => (
              <div key={course.id} className="flex-shrink-0 w-64">
                <CourseCard course={course} />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default StudentsViewing;