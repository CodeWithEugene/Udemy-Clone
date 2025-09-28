
import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="relative w-full mb-8">
            <div className="w-full">
                <img 
                    src="https://img-c.udemycdn.com/notices/web_banner/image_udlite/92a75241-118c-4f36-a384-599141519965.jpg"
                    alt="A person working on a laptop"
                    className="w-full h-auto object-cover max-h-[400px]"
                />
            </div>
            <div className="absolute top-8 left-4 sm:left-8 md:left-16 lg:left-24 max-w-md bg-white p-6 shadow-lg">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Learning that gets you</h1>
                <p className="text-lg md:text-xl">
                    Skills for your present (and your future). Get started with us.
                </p>
            </div>
        </div>
    );
};

export default Hero;
