import React from 'react';
import { useRouter } from '../hooks/useRouter';
import HomePage from '../pages/HomePage';
import CoursePage from '../pages/CoursePage';
import NotFoundPage from '../pages/NotFoundPage';
import CartPage from '../pages/CartPage';

const Router: React.FC = () => {
  const path = useRouter();

  if (path === '/') {
    return <HomePage />;
  }

  const courseMatch = path.match(/^\/course\/(\d+)/);
  if (courseMatch) {
    const courseId = parseInt(courseMatch[1], 10);
    return <CoursePage courseId={courseId} />;
  }

  if (path === '/cart') {
    return <CartPage />;
  }

  return <NotFoundPage />;
};

export default Router;