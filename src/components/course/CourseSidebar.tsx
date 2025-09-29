import React, { useContext } from 'react';
import { Course } from '../../types';
import Icon from '../common/Icon';
import Button from '../common/Button';
import { CartContext } from '../../contexts/CartContext';
import { LearningContext } from '../../contexts/LearningContext';
import { formatCurrency } from '../../utils/formatters';
import Link from '../../router/Link';

const CourseSidebar: React.FC<{ course: Course }> = ({ course }) => {
    const { cartItems, addToCart } = useContext(CartContext);
    const { isCoursePurchased } = useContext(LearningContext);

    const isInCart = cartItems.some(item => item.id === course.id);
    const isPurchased = isCoursePurchased(course.id);

    return (
        <div className="w-full md:w-80 lg:w-96 flex-shrink-0">
            <div className="md:sticky md:top-24">
                 <div className="bg-white shadow-lg border border-gray-200">
                    <img src={course.image} alt={course.title} className="w-full object-cover" />
                    <div className="p-4">
                        {isPurchased ? (
                            <div>
                                <Link href={`/course/${course.id}`} className="w-full block">
                                    <Button variant="primary" size="md" className="w-full">
                                        Go to course
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <>
                                <div className="flex items-baseline mb-2">
                                    <p className="font-bold text-3xl mr-2">{formatCurrency(course.price)}</p>
                                    {course.originalPrice && (
                                        <p className="text-lg text-gray-500 line-through">{formatCurrency(course.originalPrice)}</p>
                                    )}
                                </div>
                                
                                <div className="flex items-center space-x-2">
                                    {isInCart ? (
                                        <Link href="/cart" className="w-full">
                                            <Button variant="ghost" size="md" className="w-full">Go to cart</Button>
                                        </Link>
                                    ) : (
                                        <Button variant="primary" size="md" className="w-full" onClick={() => addToCart(course)}>
                                            Add to cart
                                        </Button>
                                    )}
                                    <Button variant="ghost" className="px-3 h-12"><Icon type="heart" /></Button>
                                </div>
                                
                                <p className="text-xs text-center text-gray-600 my-4">30-Day Money-Back Guarantee</p>
                            </>
                        )}

                        <h3 className="font-bold mb-2 mt-4">This course includes:</h3>
                        <ul className="text-sm space-y-2 text-gray-700">
                            <li className="flex items-center"><Icon type="play" className="h-5 w-5 mr-2" /> 22 hours on-demand video</li>
                            <li className="flex items-center"><Icon type="infinity" className="h-5 w-5 mr-2" /> Full lifetime access</li>
                            <li className="flex items-center"><Icon type="mobile" className="h-5 w-5 mr-2" /> Access on mobile and TV</li>
                            <li className="flex items-center"><Icon type="trophy" className="h-5 w-5 mr-2" /> Certificate of completion</li>
                        </ul>

                        {!isPurchased && (
                             <div className="flex justify-between mt-4 text-sm font-bold">
                                <a href="#" className="hover:text-purple-600 underline">Share</a>
                                <a href="#" className="hover:text-purple-600 underline">Gift this course</a>
                                <a href="#" className="hover:text-purple-600 underline">Apply Coupon</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseSidebar;
