
import React from 'react';
import Icon from './Icon';
import { FOOTER_LINKS } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 lg:px-8 py-8">
                <div className="flex flex-wrap justify-between mb-8">
                    <div className="w-full sm:w-1/2 lg:w-auto mb-6 lg:mb-0">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
                                <div key={title}>
                                    <ul>
                                        {links.map((link, index) => (
                                            <li key={index} className="mb-2">
                                                <a href="#" className="text-sm text-gray-300 hover:underline">{link}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-auto">
                        <button className="flex items-center justify-center border border-white px-4 py-2 text-sm hover:bg-gray-800 w-full sm:w-auto">
                            <Icon type="globe" className="mr-2"/>
                            <span>English</span>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-6">
                    <img className="h-8 w-auto mb-4 sm:mb-0" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="Udemy" />
                    <p className="text-xs text-gray-400">&copy; 2024 Udemy, Inc.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
