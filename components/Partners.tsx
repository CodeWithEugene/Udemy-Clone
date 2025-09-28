
import React from 'react';

const logos = [
  { name: 'Nasdaq', src: 'https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg' },
  { name: 'Volkswagen', src: 'https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg' },
  { name: 'Box', src: 'https://s.udemycdn.com/partner-logos/v4/box-dark.svg' },
  { name: 'NetApp', src: 'https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg' },
  { name: 'Eventbrite', src: 'https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg' },
];

const Partners: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8 px-4 text-center">
        <p className="text-lg text-gray-600 mb-6">Trusted by over 15,000 companies and millions of learners around the world</p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12 lg:gap-x-16">
          {logos.map((logo) => (
            <img key={logo.name} src={logo.src} alt={logo.name} className="h-8 md:h-10 lg:h-11 opacity-70" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
