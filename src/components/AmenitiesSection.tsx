import React from 'react';

export default function AmenitiesSection() {
  const amenities = [
    {
      icon: '🏊‍♂️',
      title: 'Swimming Pool',
      description: 'Olympic-size outdoor pool with poolside service'
    },
    {
      icon: '💆‍♀️',
      title: 'Spa & Wellness',
      description: 'Full-service spa with massage and beauty treatments'
    },
    {
      icon: '🏋️‍♂️',
      title: 'Fitness Center',
      description: '24/7 state-of-the-art gym with personal trainers'
    },
    {
      icon: '🅿️',
      title: 'Valet Parking',
      description: 'Complimentary valet parking for all guests'
    },
    {
      icon: '📶',
      title: 'Free WiFi',
      description: 'High-speed internet throughout the property'
    },
    {
      icon: '🍽️',
      title: 'Room Service',
      description: '24-hour room service with gourmet menu'
    },
    {
      icon: '🧳',
      title: 'Concierge',
      description: 'Personal concierge service for all your needs'
    },
    {
      icon: '🚗',
      title: 'Airport Shuttle',
      description: 'Complimentary shuttle service to/from airport'
    }
  ];

  return (
    <section id="amenities" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Hotel Amenities</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of luxury amenities designed to make your stay exceptional and memorable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl mb-4">{amenity.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{amenity.title}</h3>
              <p className="text-gray-600 text-sm">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}