import React, { useContext } from 'react';
import { LearningContext } from '../contexts/LearningContext';
import CourseCard from '../components/shared/CourseCard';
import Link from '../router/Link';
import Button from '../components/common/Button';

const MyLearningPage: React.FC = () => {
    const { purchasedCourses } = useContext(LearningContext);

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4 md:px-8">
                    <h1 className="text-4xl font-bold">My Learning</h1>
                </div>
            </div>

            <div className="container mx-auto py-12 px-4 md:px-8">
                {purchasedCourses.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {purchasedCourses.map(course => (
                           <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <h2 className="text-2xl font-bold mb-4">You haven't purchased any courses yet.</h2>
                        <p className="text-gray-600 mb-8">Start learning today by exploring our wide range of courses.</p>
                        <Link href="/">
                            <Button variant="primary" size="lg">Explore Courses</Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyLearningPage;
