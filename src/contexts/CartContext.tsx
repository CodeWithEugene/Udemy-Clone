import React, { createContext, useState, useEffect } from 'react';
import { Course } from '../types';

interface CartContextType {
  cartItems: Course[];
  addToCart: (course: Course) => void;
  removeFromCart: (courseId: number) => void;
  clearCart: () => void;
  cartTotal: number;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  cartTotal: 0,
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Course[]>(() => {
    try {
      const localData = window.localStorage.getItem('udemy_cart');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Error reading from local storage", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('udemy_cart', JSON.stringify(cartItems));
    } catch (error) {
      console.error("Error writing to local storage", error);
    }
  }, [cartItems]);

  const addToCart = (course: Course) => {
    setCartItems(prevItems => {
      if (prevItems.find(item => item.id === course.id)) {
        return prevItems; // Already in cart
      }
      return [...prevItems, course];
    });
  };

  const removeFromCart = (courseId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== courseId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};