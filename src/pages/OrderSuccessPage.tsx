import React from 'react';
import Link from '../router/Link';
import Button from '../components/common/Button';
import Icon from '../components/common/Icon';

const OrderSuccessPage: React.FC = () => {
  return (
    <div className="container mx-auto py-20 px-4 text-center">
      <div className="inline-block bg-green-100 p-4 rounded-full mb-6">
          <Icon type="check" className="h-16 w-16 text-green-600" />
      </div>
      <h1 className="text-4xl font-black text-gray-800 mb-4">Thank you for your purchase!</h1>
      <p className="text-xl text-gray-600 mb-8">
        Your order was successful. You can now access your courses in the "My Learning" section.
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/my-learning">
            <Button variant="primary" size="lg">Go to My Learning</Button>
        </Link>
        <Link href="/">
            <Button variant="ghost" size="lg">Continue Shopping</Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
