import React from 'react';

interface HeroSectionProps {
  onBookNow: () => void;
}

export default function HeroSection({ onBookNow }: HeroSectionProps) {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://d64gsuwffb70l.cloudfront.net/68b0f371030b8d78657b93d7_1756427170905_4ad59713.webp')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to 
            <span className="block text-yellow-400">Grand Vista Hotel</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience luxury and comfort in the heart of the city. 
            Your perfect stay awaits with world-class amenities and exceptional service.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button 
              onClick={onBookNow}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 w-full sm:w-auto"
            >
              Book Your Stay
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 w-full sm:w-auto">
              Explore Rooms
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}