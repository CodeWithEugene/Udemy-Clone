import React from 'react';
import { TOP_CATEGORIES } from '../../constants';
import { IconType } from '../../types';
import Icon from '../common/Icon';

const CategoryIcon: React.FC<{ type: string }> = ({ type }) => {
    const iconMap: { [key: string]: IconType } = {
        design: 'starFull', 
        development: 'search', 
        marketing: 'cart',
        it: 'mobile',
        personal: 'heart',
        business: 'trophy',
        photography: 'play',
        music: 'infinity',
    };
    return <Icon type={iconMap[type]} className="h-12 w-12 mx-auto mb-4 text-gray-800" />;
};

const TopCategories: React.FC = () => {
    return (
        <section className="container mx-auto py-12 px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-8">Top categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {TOP_CATEGORIES.map((category) => (
                    <a key={category.name} href="#" className="block p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 text-center">
                        <CategoryIcon type={category.icon} />
                        <h3 className="font-bold text-lg text-gray-900">{category.name}</h3>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default TopCategories;