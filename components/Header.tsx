
import React, { useState } from 'react';
import Icon from './Icon';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Mobile Menu Button */}
                    <button 
                        className="lg:hidden p-2 -ml-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Open menu"
                    >
                        <Icon type="menu" />
                    </button>

                    {/* Logo */}
                    <a href="#" className="flex-shrink-0">
                        <img className="h-8 w-auto" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy" />
                    </a>

                    {/* Desktop Categories */}
                    <nav className="hidden lg:flex items-center">
                        <a href="#" className="text-sm text-gray-700 hover:text-purple-600 px-3">Categories</a>
                    </nav>

                    {/* Search Bar */}
                    <form className="hidden sm:flex-1 mx-4 lg:flex">
                        <div className="relative w-full max-w-lg mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <Icon type="search" className="text-gray-500" />
                            </span>
                            <input
                                type="text"
                                placeholder="Search for anything"
                                className="w-full pl-10 pr-4 py-2 border border-gray-900 rounded-full bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900"
                            />
                        </div>
                    </form>

                    {/* Desktop Links */}
                    <nav className="hidden lg:flex items-center space-x-2">
                        <a href="#" className="text-sm text-gray-700 hover:text-purple-600 px-3 py-2">Udemy Business</a>
                        <a href="#" className="text-sm text-gray-700 hover:text-purple-600 px-3 py-2">Teach on Udemy</a>
                    </nav>
                    
                    {/* Icons and Buttons */}
                    <div className="flex items-center space-x-2">
                        <a href="#" className="p-2 sm:hidden text-gray-700 hover:text-purple-600">
                           <Icon type="search" />
                        </a>
                        <a href="#" className="p-2 text-gray-700 hover:text-purple-600">
                            <Icon type="cart" />
                        </a>
                        <div className="hidden sm:flex items-center space-x-2">
                            <a href="#" className="px-4 py-2 text-sm font-bold border border-gray-900 text-gray-900 hover:bg-gray-100">Log in</a>
                            <a href="#" className="px-4 py-2 text-sm font-bold border border-gray-900 bg-gray-900 text-white">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden p-4 border-t">
                    <nav className="flex flex-col space-y-4">
                        <a href="#" className="text-base text-gray-700 hover:text-purple-600">Categories</a>
                        <a href="#" className="text-base text-gray-700 hover:text-purple-600">Udemy Business</a>
                        <a href="#" className="text-base text-gray-700 hover:text-purple-600">Teach on Udemy</a>
                        <div className="flex space-x-2 pt-4">
                            <a href="#" className="flex-1 text-center px-4 py-2 font-bold border border-gray-900 text-gray-900 hover:bg-gray-100">Log in</a>
                            <a href="#" className="flex-1 text-center px-4 py-2 font-bold border border-gray-900 bg-gray-900 text-white">Sign up</a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
