import React, { useState, useEffect } from 'react';
import { getCourseById } from '../api/courses';
import { Course } from '../types';
import Icon from '../components/common/Icon';
import StarRating from '../components/common/StarRating';
import CourseSidebar from '../components/course/CourseSidebar';
import CourseContentAccordion from '../components/course/CourseContentAccordion';
import Link from '../router/Link';

interface CoursePageProps {
  courseId: number;
}

const CoursePage: React.FC<CoursePageProps> = ({ courseId }) => {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const fetchedCourse = await getCourseById(courseId);
        if (fetchedCourse) {
          setCourse(fetchedCourse);
        } else {
          setError('Course not found.');
        }
      } catch (err) {
        setError('Failed to fetch course data.');
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [courseId]);

  if (loading) {
    return <div className="text-center py-20">Loading course...</div>;
  }

  if (error || !course) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-3xl font-bold">{error || 'Course not found'}</h1>
        <p className="mt-4">Sorry, we couldn't find the course you were looking for.</p>
        <Link href="/" className="mt-6 inline-block px-6 py-3 font-bold bg-gray-900 hover:bg-gray-800 text-white">Go to homepage</Link>
      </div>
    );
  }

  return (
    <>
        <div className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-3xl">
                    <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
                    <p className="text-xl mb-4">{course.subtitle}</p>
                    <div className="flex items-center text-sm mb-2 flex-wrap">
                         {course.bestseller && <span className="bg-yellow-400 text-yellow-900 text-xs font-bold mr-2 px-2 py-1">Bestseller</span>}
                        <span className="text-yellow-400 font-bold mr-1">{course.rating.toFixed(1)}</span>
                        <StarRating rating={course.rating} />
                        <a href="#" className="text-purple-300 underline ml-2">({course.reviews.toLocaleString()} ratings)</a>
                        <span className="ml-4">{course.students?.toLocaleString()} students</span>
                    </div>
                    <p className="text-sm">Created by <a href="#" className="text-purple-300 underline">{course.instructor}</a></p>
                    <div className="flex items-center text-sm mt-2 space-x-4">
                        <span className="flex items-center"><Icon type="alert" className="h-4 w-4 mr-1"/> Last updated {course.lastUpdated}</span>
                        <span className="flex items-center"><Icon type="globe" className="h-4 w-4 mr-1"/> {course.language}</span>
                        <span className="flex items-center"><Icon type="closedCaption" className="h-4 w-4 mr-1"/> {course.language}</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mx-auto py-8 px-4 md:px-8">
            <div className="flex flex-col-reverse md:flex-row md:space-x-8">
                <div className="flex-grow">
                    {course.whatYoullLearn && (
                        <div className="border border-gray-200 p-6 mb-8">
                            <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-gray-800">
                                {course.whatYoullLearn.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <Icon type="check" className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    
                    <h2 className="text-2xl font-bold mb-4">Course content</h2>
                    <CourseContentAccordion course={course} />
                    
                    {course.requirements && (
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                            <ul className="list-disc list-inside space-y-1">
                                {course.requirements.map((req, index) => <li key={index}>{req}</li>)}
                            </ul>
                        </div>
                    )}

                    {course.longDescription && (
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold mb-4">Description</h2>
                            <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: course.longDescription.replace(/\n/g, '<br />') }} />
                        </div>
                    )}

                     {course.instructorBio && (
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold mb-4">Instructor</h2>
                             <h3 className="text-lg font-bold text-purple-600 underline">{course.instructor}</h3>
                             <p className="text-sm text-gray-500 mb-4">MS in Mechanical Engineering, Data Scientist</p>
                            <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: course.instructorBio.replace(/\n/g, '<br />') }} />
                        </div>
                    )}
                </div>

                <CourseSidebar course={course} />
            </div>
        </div>
    </>
  );
};

export default CoursePage;