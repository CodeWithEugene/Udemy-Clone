import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCourses from './components/FeaturedCourses';
import Categories from './components/Categories';
import LearningBanner from './components/LearningBanner';
import Footer from './components/Footer';
import TopCategories from './components/TopCategories';
import Partners from './components/Partners';
import StudentsViewing from './components/StudentsViewing';
import InstructorBanner from './components/InstructorBanner';
import CoursePage from './pages/CoursePage';

const HomePage: React.FC = () => (
  <main>
    <Hero />
    <Partners />
    <FeaturedCourses />
    <StudentsViewing />
    <LearningBanner />
    <TopCategories />
    <Categories />
    <InstructorBanner />
  </main>
);

const App: React.FC = () => {
  // Get path from hash, remove the '#' prefix. Default to '/' for the homepage.
  const [path, setPath] = useState(window.location.hash.substring(1) || '/');

  useEffect(() => {
    const onHashChange = () => {
      setPath(window.location.hash.substring(1) || '/');
    };

    window.addEventListener('hashchange', onHashChange);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  let pageContent;
  const courseMatch = path.match(/^\/course\/(\d+)/);

  if (courseMatch) {
    const courseId = parseInt(courseMatch[1], 10);
    pageContent = <CoursePage courseId={courseId} />;
  } else {
    pageContent = <HomePage />;
  }

  return (
    <div className="bg-white font-sans text-gray-900">
      <Header />
      {pageContent}
      <Footer />
    </div>
  );
};

export default App;