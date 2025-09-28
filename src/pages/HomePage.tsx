import React from 'react';
import Hero from '../components/home/Hero';
import Partners from '../components/home/Partners';
import FeaturedCourses from '../components/home/FeaturedCourses';
import StudentsViewing from '../components/home/StudentsViewing';
import LearningBanner from '../components/home/LearningBanner';
import TopCategories from '../components/home/TopCategories';
import Categories from '../components/home/Categories';
import InstructorBanner from '../components/home/InstructorBanner';

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <Partners />
            <FeaturedCourses />
            <StudentsViewing />
            <LearningBanner />
            <TopCategories />
            <Categories />
            <InstructorBanner />
        </>
    );
};

export default HomePage;