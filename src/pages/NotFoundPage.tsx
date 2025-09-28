import React from 'react';
import Link from '../router/Link';
import Button from '../components/common/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="container mx-auto py-20 px-4 text-center">
      <h1 className="text-5xl font-black text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-gray-600 mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/">
        <Button variant="primary" size="lg">Go to Homepage</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;