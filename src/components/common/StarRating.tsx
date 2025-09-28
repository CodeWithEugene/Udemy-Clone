import React from 'react';
import Icon from './Icon';

interface StarRatingProps {
  rating: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, className }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className={`flex items-center ${className}`}>
      {Array(fullStars).fill(0).map((_, i) => <Icon key={`full-${i}`} type="starFull" className="text-yellow-500 h-4 w-4" />)}
      {/* Fix: Use a static key for the half star as 'i' is not in scope here. */}
      {halfStar && <Icon key="half" type="starFull" className="text-yellow-500 h-4 w-4" /> /* Using full for half for simplicity */}
      {Array(emptyStars).fill(0).map((_, i) => <Icon key={`empty-${i}`} type="starEmpty" className="text-yellow-500 h-4 w-4" />)}
    </div>
  );
};

export default StarRating;