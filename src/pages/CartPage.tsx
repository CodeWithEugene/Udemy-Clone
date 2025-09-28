import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import Link from '../router/Link';
import Button from '../components/common/Button';
import Icon from '../components/common/Icon';
import { formatCurrency } from '../utils/formatters';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, cartTotal } = useContext(CartContext);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-4 md:px-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <h2 className="text-xl font-bold mb-4">{cartItems.length} Course{cartItems.length !== 1 && 's'} in Cart</h2>
            {cartItems.length === 0 ? (
              <div className="bg-white p-8 text-center border">
                <p className="text-gray-600 mb-4">Your cart is empty. Keep shopping to find a course!</p>
                <Link href="/">
                  <Button variant="primary">Keep shopping</Button>
                </Link>
              </div>
            ) : (
              <div className="bg-white border divide-y">
                {cartItems.map(course => (
                  <div key={course.id} className="flex flex-col sm:flex-row p-4 gap-4">
                    <img src={course.image} alt={course.title} className="w-full sm:w-32 h-auto object-cover"/>
                    <div className="flex-grow">
                      <h3 className="font-bold text-gray-900">{course.title}</h3>
                      <p className="text-sm text-gray-500">By {course.instructor}</p>
                    </div>
                    <div className="flex items-center sm:flex-col sm:items-end gap-4">
                      <button onClick={() => removeFromCart(course.id)} className="text-sm text-purple-600 hover:underline">
                        Remove
                      </button>
                      <p className="font-bold text-purple-600 text-lg">{formatCurrency(course.price)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="lg:w-1/3">
              <div className="bg-white p-6 border sticky top-24">
                <h2 className="text-xl font-bold text-gray-600 mb-2">Total:</h2>
                <p className="text-4xl font-black mb-4">{formatCurrency(cartTotal)}</p>
                <Button variant="primary" size="lg" className="w-full">Checkout</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;