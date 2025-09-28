
import React from 'react';
import { Course } from '../types';
import Icon from './Icon';

interface CourseCardProps {
  course: Course;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {Array(fullStars).fill(0).map((_, i) => <Icon key={`full-${i}`} type="starFull" className="text-yellow-500 h-4 w-4" />)}
      {halfStar && <Icon type="starHalf" className="text-yellow-500 h-4 w-4" />}
      {Array(emptyStars).fill(0).map((_, i) => <Icon key={`empty-${i}`} type="starEmpty" className="text-yellow-500 h-4 w-4" />)}
    </div>
  );
};

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <a href="#" className="flex flex-col h-full group">
      <div className="border border-gray-200 group-hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
        <img src={course.image} alt={course.title} className="w-full object-cover" />
        <div className="p-2 flex flex-col flex-grow">
          <h4 className="font-bold text-base leading-tight text-gray-900 mb-1">{course.title}</h4>
          <p className="text-xs text-gray-500 mb-2">{course.instructor}</p>
          <div className="flex items-center text-sm mb-1">
            <span className="font-bold text-yellow-800 mr-1">{course.rating.toFixed(1)}</span>
            <StarRating rating={course.rating} />
            <span className="text-xs text-gray-500 ml-1">({course.reviews.toLocaleString()})</span>
          </div>
          <div className="flex items-baseline mt-auto pt-2">
              <p className="font-bold text-base mr-2">{course.price}</p>
              {course.originalPrice && (
                  <p className="text-sm text-gray-500 line-through">{course.originalPrice}</p>
              )}
          </div>
          {course.bestseller && (
            <div className="mt-2">
                <span className="bg-yellow-200 text-yellow-800 text-xs font-bold px-2 py-1">Bestseller</span>
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

export default CourseCard;
