import { Course } from '../types';
import { ALL_COURSES } from './mock';

// Simulate network delay
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const getCoursesByCategory = async (category: string): Promise<Course[]> => {
  await delay(100); // Simulate API latency
  if (category === 'Students viewing') {
      return ALL_COURSES.slice(5, 11);
  }
  return ALL_COURSES.filter(course => course.category === category);
};

export const getCourseById = async (id: number): Promise<Course | undefined> => {
  await delay(100); // Simulate API latency
  return ALL_COURSES.find(course => course.id === id);
};