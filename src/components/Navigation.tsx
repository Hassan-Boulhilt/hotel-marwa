import React, { useState } from 'react';

interface NavigationProps {
  onBookNow: () => void;
}

export default function Navigation({ onBookNow }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              <span className="text-blue-600">Grand</span>
              <span className="text-yellow-500">Vista</span>
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#rooms" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Rooms</a>
            <a href="#restaurant" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Restaurant</a>
            <a href="#amenities" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Amenities</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Contact</a>
            <button 
              onClick={onBookNow}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Book Now
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a 
                href="#rooms" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Rooms
              </a>
              <a 
                href="#restaurant" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Restaurant
              </a>
              <a 
                href="#amenities" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Amenities
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <button 
                onClick={() => {
                  onBookNow();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 bg-blue-600 text-white rounded-lg font-medium"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}