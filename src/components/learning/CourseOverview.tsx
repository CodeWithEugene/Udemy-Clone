import React from 'react';
import { Course } from '../../types';
import Icon from '../common/Icon';

const CourseOverview: React.FC<{ course: Course }> = ({ course }) => {
    return (
        <div className="max-w-4xl space-y-8">
            <div>
                <h2 className="text-2xl font-bold mb-4">About this course</h2>
                {course.longDescription && (
                    <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: course.longDescription.replace(/\n/g, '<br />') }} />
                )}
            </div>
            
            {course.whatYoullLearn && (
                <div>
                    <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-gray-800 border p-4">
                        {course.whatYoullLearn.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <Icon type="check" className="h-5 w-5 mr-2 mt-1 flex-shrink-0 text-gray-700" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {course.requirements && (
                <div>
                    <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                    <ul className="list-disc list-inside space-y-1 text-gray-800">
                        {course.requirements.map((req, index) => <li key={index}>{req}</li>)}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CourseOverview;
