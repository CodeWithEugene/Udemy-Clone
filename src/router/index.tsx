import React from 'react';
import { useRouter } from '../hooks/useRouter';
import HomePage from '../pages/HomePage';
import CoursePage from '../pages/CoursePage';
import NotFoundPage from '../pages/NotFoundPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import OrderSuccessPage from '../pages/OrderSuccessPage';
import MyLearningPage from '../pages/MyLearningPage';

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
  
  if (path === '/checkout') {
    return <CheckoutPage />;
  }

  if (path === '/order-success') {
    return <OrderSuccessPage />;
  }

  if (path === '/my-learning') {
    return <MyLearningPage />;
  }

  return <NotFoundPage />;
};

export default Router;
