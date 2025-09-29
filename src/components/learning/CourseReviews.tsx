import React from 'react';
import { Course } from '../../types';
import Icon from '../common/Icon';
import StarRating from '../common/StarRating';

const reviews = [
    {
        id: 1,
        author: 'Alice Johnson',
        rating: 5,
        date: '2 weeks ago',
        comment: 'This is by far the best Python course I have ever taken. Jose explains everything clearly and the projects are very practical. Highly recommended for anyone wanting to learn Python.'
    },
    {
        id: 2,
        author: 'Bob Williams',
        rating: 4,
        date: '1 month ago',
        comment: 'A very comprehensive course. A bit fast-paced at times, but you can always re-watch the videos. The instructor is very knowledgeable. The section on object-oriented programming was particularly helpful.'
    },
    {
        id: 3,
        author: 'Charlie Brown',
        rating: 5,
        date: '3 months ago',
        comment: 'Absolutely fantastic! I went from knowing nothing about programming to being able to build my own applications. The content is well-structured and easy to follow. Thank you!'
    }
];

const CourseReviews: React.FC<{ course: Course }> = ({ course }) => {
    const ratingDistribution = [75, 15, 5, 3, 2]; // Placeholder percentages for 5 to 1 stars

    return (
        <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">Student Feedback</h2>
            
            <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="text-center">
                    <p className="text-6xl font-black text-yellow-600">{course.rating.toFixed(1)}</p>
                    <StarRating rating={course.rating} className="justify-center mt-2"/>
                    <p className="text-lg font-bold text-yellow-700 mt-1">Course Rating</p>
                </div>
                <div className="flex-grow">
                    {ratingDistribution.map((percent, index) => {
                        const starCount = 5 - index;
                        return (
                            <div key={starCount} className="flex items-center gap-4 mb-1">
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: `${percent}%` }}></div>
                                </div>
                                <StarRating rating={starCount} />
                                <span className="text-sm text-purple-700 font-semibold w-12 text-right">{percent}%</span>
                            </div>
                        )
                    })}
                </div>
            </div>

            <h3 className="text-xl font-bold mb-4">Reviews</h3>
            <div className="space-y-6">
                {reviews.map(review => (
                    <div key={review.id} className="flex items-start gap-4 border-t pt-6">
                        <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                            {review.author.charAt(0)}
                        </div>
                        <div className="flex-grow">
                            <p className="font-bold">{review.author}</p>
                            <div className="flex items-center gap-2 mb-2">
                                <StarRating rating={review.rating} />
                                <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseReviews;
