import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { LearningContext } from '../contexts/LearningContext';
import Button from '../components/common/Button';
import { formatCurrency } from '../utils/formatters';
import Link from '../router/Link';

const CheckoutPage: React.FC = () => {
  const { cartItems, cartTotal, clearCart } = useContext(CartContext);
  const { addPurchasedCourses } = useContext(LearningContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length > 0) {
      addPurchasedCourses(cartItems);
      clearCart();
      window.location.hash = '/order-success';
    }
  };

  if (cartItems.length === 0) {
      return (
          <div className="container mx-auto py-20 px-4 text-center">
              <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
              <p className="text-gray-600 mb-8">You can't checkout without any courses in your cart.</p>
              <Link href="/">
                  <Button variant="primary">Go to Homepage</Button>
              </Link>
          </div>
      )
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-4 md:px-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Checkout Form */}
          <div className="lg:w-2/3 bg-white p-8 border rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Billing details</h2>
            <form onSubmit={handleCheckout}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md mb-6">
                  <h3 className="font-bold mb-2">Dummy Payment Info</h3>
                  <p className="text-sm text-gray-600">This is a demo application. No real payment will be processed. Fill in the details above and click complete purchase.</p>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Complete Purchase
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 border rounded-lg shadow-sm sticky top-24">
              <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-4 mb-4 border-b pb-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded"/>
                    <div className="flex-grow">
                      <p className="font-semibold text-sm leading-tight">{item.title}</p>
                    </div>
                    <p className="font-bold text-sm">{formatCurrency(item.price)}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center mb-4">
                <p className="font-bold text-lg">Total:</p>
                <p className="text-2xl font-black">{formatCurrency(cartTotal)}</p>
              </div>
              <p className="text-xs text-gray-500 text-center">By completing your purchase you agree to our Terms of Service.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
