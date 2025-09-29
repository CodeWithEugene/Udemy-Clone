import React, { createContext, useState, useEffect } from 'react';
import { Course } from '../types';

interface LearningContextType {
  purchasedCourses: Course[];
  addPurchasedCourses: (courses: Course[]) => void;
  isCoursePurchased: (courseId: number) => boolean;
}

export const LearningContext = createContext<LearningContextType>({
  purchasedCourses: [],
  addPurchasedCourses: () => {},
  isCoursePurchased: () => false,
});

export const LearningProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [purchasedCourses, setPurchasedCourses] = useState<Course[]>(() => {
    try {
      const localData = window.localStorage.getItem('udemy_learning');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Error reading from local storage", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('udemy_learning', JSON.stringify(purchasedCourses));
    // Fix: Corrected syntax for the catch block, which was causing a parsing error. This also resolves the second error.
    } catch (error) {
      console.error("Error writing to local storage", error);
    }
  }, [purchasedCourses]);

  const addPurchasedCourses = (courses: Course[]) => {
    setPurchasedCourses(prevCourses => {
      const newCourses = courses.filter(course => !prevCourses.some(pc => pc.id === course.id));
      return [...prevCourses, ...newCourses];
    });
  };

  const isCoursePurchased = (courseId: number): boolean => {
    return purchasedCourses.some(course => course.id === courseId);
  };

  return (
    <LearningContext.Provider value={{ purchasedCourses, addPurchasedCourses, isCoursePurchased }}>
      {children}
    </LearningContext.Provider>
  );
};