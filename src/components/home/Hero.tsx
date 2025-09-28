import React, { useState, useEffect, useCallback } from 'react';
import Icon from '../common/Icon';
import { HERO_SLIDES } from '../../constants';

const Hero: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = useCallback(() => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? HERO_SLIDES.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }, [currentIndex]);

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === HERO_SLIDES.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex]);

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        const timer = setTimeout(goToNext, 5000);
        return () => clearTimeout(timer);
    }, [currentIndex, goToNext]);


    return (
        <div className="relative w-full h-[400px] mb-8 group">
            <div className="w-full h-full overflow-hidden">
                <div 
                    className="w-full h-full whitespace-nowrap transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {HERO_SLIDES.map((slide, index) => (
                        <div key={index} className="inline-block w-full h-full">
                            <img src={slide.url} alt={slide.alt} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
            
            <button onClick={goToPrevious} className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity z-20" aria-label="Previous slide">
                <Icon type="chevronLeft" />
            </button>
            <button onClick={goToNext} className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity z-20" aria-label="Next slide">
                <Icon type="chevronRight" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                {HERO_SLIDES.map((_, slideIndex) => (
                    <button 
                        key={slideIndex} 
                        onClick={() => goToSlide(slideIndex)}
                        className={`w-3 h-3 rounded-full transition-colors ${currentIndex === slideIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
                        aria-label={`Go to slide ${slideIndex + 1}`}
                    />
                ))}
            </div>

            <div className="absolute top-8 left-4 sm:left-8 md:left-16 lg:left-24 max-w-md bg-white p-6 shadow-lg z-10">
                <h1 className="text-3xl md:text-4xl font-black mb-2 leading-tight">Learning that gets you</h1>
                <p className="text-lg md:text-xl mb-4">
                    Skills for your present (and your future). Get started with us.
                </p>
                <form className="w-full mt-4">
                    <div className="flex items-center border border-gray-900 bg-white focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-900">
                        <input
                            type="text"
                            placeholder="What do you want to learn?"
                            className="w-full px-4 py-3 border-none focus:outline-none bg-transparent"
                            aria-label="Search for anything"
                        />
                        <button type="submit" className="bg-gray-900 text-white p-3 hover:bg-gray-700 transition-colors" aria-label="Submit search">
                            <Icon type="search" className="h-6 w-6" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Hero;