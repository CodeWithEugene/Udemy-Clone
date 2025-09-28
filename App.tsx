import React from 'react';
import Router from './src/router';
import { CartProvider } from './src/contexts/CartContext';
import Header from './src/components/layout/Header';
import Footer from './src/components/layout/Footer';

const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="font-sans text-gray-900">
        <Header />
        <main>
          <Router />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;