import React from 'react';
import Router from './src/router';
import { CartProvider } from './src/contexts/CartContext';
import { LearningProvider } from './src/contexts/LearningContext';
import Header from './src/components/layout/Header';
import Footer from './src/components/layout/Footer';

const App: React.FC = () => {
  return (
    <LearningProvider>
      <CartProvider>
        <div className="font-sans text-gray-900">
          <Header />
          <main>
            <Router />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </LearningProvider>
  );
};

export default App;
