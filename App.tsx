
import React from 'react';
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

const App: React.FC = () => {
  return (
    <div className="bg-white font-sans text-gray-900">
      <Header />
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
      <Footer />
    </div>
  );
};

export default App;