
import React from 'react';
import { STUDENTS_VIEWING_COURSES } from '../constants';
import CourseCard from './CourseCard';
import { Course } from '../types';

const StudentsViewing: React.FC = () => {
  return (
    <section className="container mx-auto py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-6">Students are viewing</h2>
      <div className="relative">
        <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 hide-scrollbar">
          {STUDENTS_VIEWING_COURSES.map((course: Course) => (
            <div key={course.id} className="flex-shrink-0 w-64">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentsViewing;