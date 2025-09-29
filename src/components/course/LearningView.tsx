import React, { useState } from 'react';
import { Course, Lecture } from '../../types';
import Icon from '../common/Icon';
import Link from '../../router/Link';

const LearningView: React.FC<{ course: Course }> = ({ course }) => {
  const [currentLecture, setCurrentLecture] = useState<Lecture | null>(
    course.courseContent?.[0]?.lectures?.[0] || null
  );
  const [completedLectures, setCompletedLectures] = useState<Set<string>>(new Set());
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(course.courseContent ? [course.courseContent[0].sectionTitle] : [])
  );

  const getLectureId = (lecture: Lecture) => `${lecture.title}-${lecture.duration}`;

  const handleLectureSelect = (lecture: Lecture) => {
    setCurrentLecture(lecture);
  };

  const handleToggleComplete = (lecture: Lecture | null) => {
    if (!lecture) return;
    setCompletedLectures(prev => {
      const newSet = new Set(prev);
      const lectureId = getLectureId(lecture);
      if (newSet.has(lectureId)) {
        newSet.delete(lectureId);
      } else {
        newSet.add(lectureId);
      }
      return newSet;
    });
  };

  const toggleSection = (sectionTitle: string) => {
    setOpenSections(prev => {
        const newSet = new Set(prev);
        if (newSet.has(sectionTitle)) {
            newSet.delete(sectionTitle);
        } else {
            newSet.add(sectionTitle);
        }
        return newSet;
    });
  };

  const totalLectures = course.courseContent?.reduce((acc, section) => acc + section.lectures.length, 0) || 0;
  const completedCount = completedLectures.size;
  const progress = totalLectures > 0 ? (completedCount / totalLectures) * 100 : 0;

  return (
    <div className="fixed inset-0 bg-gray-100 z-50 flex font-sans">
      {/* Main Content - Video Player */}
      <main className="flex-1 flex flex-col bg-gray-900">
        <div className="bg-gray-800 text-white p-4 flex justify-between items-center h-16 flex-shrink-0 shadow-md">
            <Link href="/" className="flex-shrink-0">
                <img className="h-8 w-auto" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="Udemy" />
            </Link>
            <div className="border-l border-gray-600 pl-4 ml-4 flex-1 min-w-0">
                <h1 className="text-lg font-bold truncate" title={course.title}>{course.title}</h1>
            </div>
            <div className="ml-auto flex items-center space-x-4">
                <Link href="/my-learning" className="text-sm font-bold border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors">
                    Leave
                </Link>
            </div>
        </div>
        
        <div className="flex-1 bg-black flex items-center justify-center relative p-4">
            <div className="w-full max-w-5xl aspect-video bg-gray-900 flex flex-col items-center justify-center text-white rounded-lg">
                <Icon type="play" className="h-24 w-24 text-gray-500 mb-4 opacity-50"/>
                <h2 className="text-2xl font-bold text-center px-4">{currentLecture?.title || 'Select a lecture to begin'}</h2>
                <p className="text-gray-400 mt-2">Video Player Placeholder</p>
            </div>
        </div>

        <div className="bg-white p-4 border-t border-gray-200 h-28 flex-shrink-0 flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold">{currentLecture?.title}</h3>
                <p className="text-sm text-gray-600">Part of section: {course.courseContent?.find(s => s.lectures.some(l => getLectureId(l) === (currentLecture ? getLectureId(currentLecture) : '')) )?.sectionTitle}</p>
            </div>
            {currentLecture && (
                <button 
                    onClick={() => handleToggleComplete(currentLecture)}
                    className={`px-6 py-3 text-sm font-bold transition-colors flex items-center gap-2 ${completedLectures.has(getLectureId(currentLecture)) ? 'bg-green-100 text-green-800 border border-green-300' : 'border border-gray-900 text-gray-900 hover:bg-gray-100'}`}
                >
                   {completedLectures.has(getLectureId(currentLecture)) ? <Icon type="check" className="h-5 w-5"/> : null}
                   {completedLectures.has(getLectureId(currentLecture)) ? 'Completed' : 'Mark as Complete'}
                </button>
            )}
        </div>
      </main>

      {/* Sidebar - Course Content */}
      <aside className="w-96 bg-white border-l border-gray-200 flex flex-col flex-shrink-0">
        <div className="p-4 border-b">
          <h2 className="text-lg font-bold mb-2">Course content</h2>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">{completedCount} of {totalLectures} complete</p>
        </div>
        <div className="flex-1 overflow-y-auto">
          {course.courseContent?.map((section, index) => (
            <div key={index} className="border-b">
              <button 
                onClick={() => toggleSection(section.sectionTitle)}
                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
                aria-expanded={openSections.has(section.sectionTitle)}
              >
                <span className="font-bold text-left pr-2">{section.sectionTitle}</span>
                <Icon type={openSections.has(section.sectionTitle) ? 'minus' : 'plus'} className="h-5 w-5 flex-shrink-0" />
              </button>
              {openSections.has(section.sectionTitle) && (
                <ul>
                  {section.lectures.map((lecture, lectureIndex) => {
                     const lectureId = getLectureId(lecture);
                     const isCompleted = completedLectures.has(lectureId);
                     const isCurrent = currentLecture ? getLectureId(currentLecture) === lectureId : false;
                     return (
                      <li key={lectureIndex}>
                        <button 
                          onClick={() => handleLectureSelect(lecture)}
                          className={`w-full text-left p-4 flex items-start gap-3 text-sm transition-colors ${isCurrent ? 'bg-purple-100' : 'hover:bg-gray-50'}`}
                        >
                          <div className={`w-4 h-4 mt-0.5 flex-shrink-0 border-2 rounded-full flex items-center justify-center ${isCompleted ? 'bg-purple-600 border-purple-600' : 'border-gray-400'}`}>
                            {isCompleted && <Icon type="check" className="h-3 w-3 text-white"/>}
                          </div>
                          <div className="flex-1">
                            <p className={`${isCurrent ? 'font-bold text-purple-800' : 'text-gray-900'}`}>{lecture.title}</p>
                            <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                                <Icon type="play" className="h-3 w-3" />
                                {lecture.duration}
                            </p>
                          </div>
                        </button>
                      </li>
                     );
                  })}
                </ul>
              )}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default LearningView;