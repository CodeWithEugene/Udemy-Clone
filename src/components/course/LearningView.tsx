import React, { useState, useEffect, useRef } from 'react';
import { Course, Lecture, CourseContentSection } from '../../types';
import Icon from '../common/Icon';
import Link from '../../router/Link';
import CourseOverview from '../learning/CourseOverview';
import CourseQA from '../learning/CourseQA';
import CourseNotes from '../learning/CourseNotes';
import CourseAnnouncements from '../learning/CourseAnnouncements';
import CourseReviews from '../learning/CourseReviews';


const LearningView: React.FC<{ course: Course }> = ({ course }) => {
  const [currentLecture, setCurrentLecture] = useState<Lecture | null>(
    course.courseContent?.[0]?.lectures?.[0] || null
  );
  const [completedLectures, setCompletedLectures] = useState<Set<string>>(new Set());
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(course.courseContent ? [course.courseContent[0].sectionTitle] : [])
  );
  const [activeTab, setActiveTab] = useState('Overview');


  const activeLectureRef = useRef<HTMLButtonElement>(null);

  const getLectureId = (lecture: Lecture) => `${lecture.title}-${lecture.duration}`;

  const allLectures: { lecture: Lecture, section: CourseContentSection }[] = 
    course.courseContent?.flatMap(section => 
        section.lectures.map(lecture => ({ lecture, section }))
    ) || [];
  
  const currentLectureIndex = allLectures.findIndex(
    ({ lecture }) => currentLecture && getLectureId(lecture) === getLectureId(currentLecture)
  );

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

  const handleNextLecture = () => {
    if (currentLectureIndex < allLectures.length - 1) {
      const next = allLectures[currentLectureIndex + 1];
      setCurrentLecture(next.lecture);
      // Ensure the section of the next lecture is open
      setOpenSections(prev => new Set(prev).add(next.section.sectionTitle));
    }
  };

  const handlePreviousLecture = () => {
    if (currentLectureIndex > 0) {
      const prev = allLectures[currentLectureIndex - 1];
      setCurrentLecture(prev.lecture);
      // Ensure the section of the previous lecture is open
      setOpenSections(prev => new Set(prev).add(prev.section.sectionTitle));
    }
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

  useEffect(() => {
    // Scroll the active lecture into view when it changes
    activeLectureRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
    });
  }, [currentLecture]);


  const totalLectures = course.courseContent?.reduce((acc, section) => acc + section.lectures.length, 0) || 0;
  const completedCount = completedLectures.size;
  const progress = totalLectures > 0 ? (completedCount / totalLectures) * 100 : 0;
  const currentSection = allLectures[currentLectureIndex]?.section;

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return <CourseOverview course={course} />;
      case 'Q&A':
        return <CourseQA />;
      case 'Notes':
        return <CourseNotes />;
      case 'Announcements':
        return <CourseAnnouncements />;
      case 'Reviews':
        return <CourseReviews course={course} />;
      default:
        return null;
    }
  };


  return (
    <div className="fixed inset-0 bg-gray-100 z-50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center h-16 flex-shrink-0 shadow-md z-10">
          <div className="flex items-center gap-4">
              <Link href="/" className="flex-shrink-0">
                  <img className="h-8 w-auto" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="Udemy" />
              </Link>
              <div className="border-l border-gray-600 pl-4">
                  <h1 className="text-md font-bold truncate" title={course.title}>{course.title}</h1>
              </div>
          </div>
          <div className="flex items-center space-x-6">
              <div className="flex items-center gap-2">
                <Icon type="starFull" className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-bold">Leave a rating</span>
              </div>
              <div className="relative">
                  <div className="w-24 h-2 bg-gray-600 rounded-full">
                      <div className="bg-white h-2 rounded-full" style={{ width: `${progress}%` }}></div>
                  </div>
                  <span className="text-xs ml-2">{Math.round(progress)}% complete</span>
              </div>
              <button className="text-sm font-bold border border-white px-3 py-1.5 hover:bg-white hover:text-black transition-colors">
                  Share
              </button>
          </div>
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Main Content */}
        <main className="flex-1 flex flex-col bg-white overflow-y-auto">
          <div className="flex-1 bg-black flex items-center justify-center p-4">
              <div className="w-full max-w-5xl aspect-video bg-gray-900 flex flex-col items-center justify-center text-white rounded-lg">
                  <Icon type="play" className="h-24 w-24 text-gray-500 mb-4 opacity-50"/>
                  <h2 className="text-2xl font-bold text-center px-4">{currentLecture?.title || 'Select a lecture to begin'}</h2>
                  <p className="text-gray-400 mt-2">Video Player Placeholder</p>
              </div>
          </div>

          <div className="border-b border-gray-200">
            <nav className="px-8 flex space-x-8">
              {['Overview', 'Q&A', 'Notes', 'Announcements', 'Reviews'].map(tab => (
                <button 
                  key={tab} 
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 text-sm font-bold ${activeTab === tab ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
              <div className="flex justify-between items-center mb-4">
                  <button onClick={handlePreviousLecture} disabled={currentLectureIndex === 0} className="px-4 py-2 text-sm font-bold border border-gray-800 text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100">
                      Previous lecture
                  </button>
                  <button 
                      onClick={() => handleToggleComplete(currentLecture)}
                      className={`px-4 py-2 text-sm font-bold flex items-center gap-2 ${completedLectures.has(getLectureId(currentLecture!)) ? 'bg-purple-600 text-white' : 'border border-gray-800 text-gray-800 hover:bg-gray-100'}`}
                  >
                     <div className={`w-4 h-4 border-2 rounded-sm flex items-center justify-center ${completedLectures.has(getLectureId(currentLecture!)) ? 'border-purple-600 bg-purple-600' : 'border-gray-800'}`}>
                        {completedLectures.has(getLectureId(currentLecture!)) && <Icon type="check" className="h-3 w-3 text-white"/>}
                     </div>
                     {completedLectures.has(getLectureId(currentLecture!)) ? 'Completed' : 'Mark as Complete'}
                  </button>
                  <button onClick={handleNextLecture} disabled={currentLectureIndex >= allLectures.length - 1} className="px-4 py-2 text-sm font-bold bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700">
                      Next lecture
                  </button>
              </div>
              <h2 className="text-2xl font-bold mt-8">{currentLecture?.title}</h2>
              <p className="text-sm text-gray-500">Section {course.courseContent?.findIndex(s => s === currentSection) + 1}, Lecture {currentLectureIndex + 1}</p>
              
              <div className="mt-8">
                {renderTabContent()}
              </div>
          </div>
        </main>

        {/* Sidebar - Course Content */}
        <aside className="w-96 bg-gray-50 border-l border-gray-200 flex flex-col flex-shrink-0">
          <div className="p-4 border-b bg-white">
            <h2 className="text-lg font-bold">Course content</h2>
          </div>
          <div className="flex-1 overflow-y-auto">
            {course.courseContent?.map((section, index) => (
              <div key={index} className="border-b bg-white">
                <button 
                  onClick={() => toggleSection(section.sectionTitle)}
                  className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 border-b"
                  aria-expanded={openSections.has(section.sectionTitle)}
                >
                  <span className="font-bold text-left pr-2 text-sm">{section.sectionTitle}</span>
                  <Icon type={openSections.has(section.sectionTitle) ? 'minus' : 'plus'} className="h-5 w-5 flex-shrink-0 text-gray-600" />
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
                            ref={isCurrent ? activeLectureRef : null}
                            onClick={() => handleLectureSelect(lecture)}
                            className={`w-full text-left p-3 flex items-start gap-3 text-sm transition-colors ${isCurrent ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                          >
                             <input 
                                type="checkbox" 
                                className="mt-1 flex-shrink-0 accent-purple-700" 
                                checked={isCompleted} 
                                onChange={() => handleToggleComplete(lecture)}
                                readOnly
                             />

                            <div className="flex-1">
                              <p className={`${isCurrent ? 'font-bold text-gray-900' : 'text-gray-800'}`}>{lecture.title}</p>
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
    </div>
  );
};

export default LearningView;