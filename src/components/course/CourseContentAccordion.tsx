import React, { useState } from 'react';
import { Course } from '../../types';
import Icon from '../common/Icon';

const CourseContentAccordion: React.FC<{ course: Course }> = ({ course }) => {
    const [openSections, setOpenSections] = useState<number[]>([0]);

    const toggleSection = (index: number) => {
        setOpenSections(prev => 
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    if (!course.courseContent) return null;

    const totalLectures = course.courseContent.reduce((acc, section) => acc + section.lectures.length, 0);
    const totalDuration = "22h 30m"; // Placeholder

    return (
        <div>
            <div className="flex justify-between items-center mb-2 text-sm">
                <span>{course.courseContent.length} sections</span>
                <span>{totalLectures} lectures</span>
                <span>{totalDuration} total length</span>
            </div>
            {course.courseContent.map((section, index) => (
                <div key={index} className="border border-gray-200 mb-1">
                    <button 
                        onClick={() => toggleSection(index)}
                        className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
                    >
                        <div className="flex items-center text-left">
                            <Icon type={openSections.includes(index) ? 'minus' : 'plus'} className="h-5 w-5 mr-4" />
                            <span className="font-bold">{section.sectionTitle}</span>
                        </div>
                        <span className="text-sm text-gray-600">{section.lectures.length} lectures</span>
                    </button>
                    {openSections.includes(index) && (
                        <ul className="p-4 bg-white divide-y divide-gray-100">
                            {section.lectures.map((lecture, lectureIndex) => (
                                <li key={lectureIndex} className="flex justify-between items-center py-2 text-sm">
                                    <div className="flex items-center">
                                        <Icon type="play" className="h-4 w-4 mr-3 text-gray-700" />
                                        <span className="text-gray-800">{lecture.title}</span>
                                    </div>
                                    <span className="text-gray-600">{lecture.duration}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CourseContentAccordion;