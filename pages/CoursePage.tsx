import React, { useState } from 'react';
import { findCourseById } from '../constants';
import { Course } from '../types';
import Icon from '../components/Icon';

interface CoursePageProps {
  courseId: number;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <div className="flex items-center">
      {Array(fullStars).fill(0).map((_, i) => <Icon key={`full-${i}`} type="starFull" className="text-yellow-500 h-4 w-4" />)}
      {halfStar && <Icon type="starHalf" className="text-yellow-500 h-4 w-4" />}
      {Array(emptyStars).fill(0).map((_, i) => <Icon key={`empty-${i}`} type="starEmpty" className="text-yellow-500 h-4 w-4" />)}
    </div>
  );
};

const CourseContentAccordion: React.FC<{ course: Course }> = ({ course }) => {
    const [openSections, setOpenSections] = useState<number[]>([]);

    const toggleSection = (index: number) => {
        setOpenSections(prev => 
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    if (!course.courseContent) return null;

    return (
        <div>
            {course.courseContent.map((section, index) => (
                <div key={index} className="border border-gray-200 mb-1">
                    <button 
                        onClick={() => toggleSection(index)}
                        className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
                    >
                        <span className="font-bold text-left">{section.sectionTitle}</span>
                        <Icon type={openSections.includes(index) ? 'minus' : 'plus'} className="h-5 w-5" />
                    </button>
                    {openSections.includes(index) && (
                        <ul className="p-4 bg-white">
                            {section.lectures.map((lecture, lectureIndex) => (
                                <li key={lectureIndex} className="flex justify-between items-center py-2 text-sm">
                                    <div className="flex items-center">
                                        <Icon type="play" className="h-4 w-4 mr-2 text-gray-600" />
                                        <span>{lecture.title}</span>
                                    </div>
                                    <span>{lecture.duration}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

const CoursePage: React.FC<CoursePageProps> = ({ courseId }) => {
  const course = findCourseById(courseId);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.location.hash = path;
  };

  if (!course) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-3xl font-bold">Course not found</h1>
        <p className="mt-4">
          Sorry, we couldn't find the course you were looking for.
        </p>
        <a href="#/" onClick={(e) => handleNav(e, '/')} className="mt-6 inline-block px-6 py-3 font-bold bg-gray-900 hover:bg-gray-800 text-white">Go to homepage</a>
      </div>
    );
  }

  const CourseSidebar: React.FC<{ course: Course }> = ({ course }) => (
    <div className="w-full md:w-80 lg:w-96 flex-shrink-0">
        <div className="md:sticky md:top-24">
             <div className="bg-white shadow-lg border border-gray-200">
                <img src={course.image} alt={course.title} className="w-full object-cover" />
                <div className="p-4">
                    <div className="flex items-baseline mb-2">
                        <p className="font-bold text-3xl mr-2">{course.price}</p>
                        {course.originalPrice && (
                            <p className="text-lg text-gray-500 line-through">{course.originalPrice}</p>
                        )}
                    </div>
                    <a href="#" className="w-full block text-center px-6 py-3 font-bold bg-purple-600 hover:bg-purple-700 text-white mb-2">Add to cart</a>
                    <a href="#" className="w-full block text-center px-6 py-3 font-bold border border-gray-900 text-gray-900 hover:bg-gray-100 mb-4">Buy now</a>
                    <p className="text-xs text-center text-gray-600 mb-4">30-Day Money-Back Guarantee</p>

                    <h3 className="font-bold mb-2">This course includes:</h3>
                    <ul className="text-sm space-y-2 text-gray-700">
                        <li className="flex items-center"><Icon type="play" className="h-5 w-5 mr-2" /> 22 hours on-demand video</li>
                        <li className="flex items-center"><Icon type="infinity" className="h-5 w-5 mr-2" /> Full lifetime access</li>
                        <li className="flex items-center"><Icon type="mobile" className="h-5 w-5 mr-2" /> Access on mobile and TV</li>
                        <li className="flex items-center"><Icon type="trophy" className="h-5 w-5 mr-2" /> Certificate of completion</li>
                    </ul>
                    <div className="flex justify-between mt-4 text-sm font-bold">
                        <a href="#" className="hover:text-purple-600 underline">Share</a>
                        <a href="#" className="hover:text-purple-600 underline">Gift this course</a>
                        <a href="#" className="hover:text-purple-600 underline">Apply Coupon</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );

  return (
    <>
        {/* Top Banner */}
        <div className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-3xl">
                    <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
                    <p className="text-xl mb-4">{course.subtitle}</p>
                    <div className="flex items-center text-sm mb-2">
                         {course.bestseller && <span className="bg-yellow-400 text-yellow-900 text-xs font-bold mr-2 px-2 py-1">Bestseller</span>}
                        <span className="text-yellow-400 font-bold mr-1">{course.rating.toFixed(1)}</span>
                        <StarRating rating={course.rating} />
                        <a href="#" className="text-purple-300 underline ml-2">({course.reviews.toLocaleString()} ratings)</a>
                        <span className="ml-2">{course.students?.toLocaleString()} students</span>
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

        {/* Main Content */}
        <div className="container mx-auto py-8 px-4 md:px-8">
            <div className="flex flex-col-reverse md:flex-row md:space-x-8">
                {/* Left side */}
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
                            <p className="text-gray-700 whitespace-pre-line">{course.longDescription}</p>
                        </div>
                    )}

                     {course.instructorBio && (
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold mb-4">Instructor</h2>
                             <h3 className="text-lg font-bold text-purple-600 underline">{course.instructor}</h3>
                             <p className="text-sm text-gray-500 mb-4">MS in Mechanical Engineering, Data Scientist</p>
                            <p className="text-gray-700 whitespace-pre-line">{course.instructorBio}</p>
                        </div>
                    )}
                </div>

                {/* Right side - Sidebar */}
                <CourseSidebar course={course} />
            </div>
        </div>
    </>
  );
};

export default CoursePage;