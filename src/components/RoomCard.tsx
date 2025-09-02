import React from 'react';

interface Room {
  id: number;
  name: string;
  price: number;
  image: string;
  amenities: string[];
  description: string;
}

interface RoomCardProps {
  room: Room;
  onBook: (roomId: number) => void;
}

export default function RoomCard({ room, onBook }: RoomCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={room.image} 
          alt={room.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          ${room.price}/night
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{room.name}</h3>
        <p className="text-gray-600 mb-4">{room.description}</p>
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Amenities:</h4>
          <div className="flex flex-wrap gap-2">
            {room.amenities.map((amenity, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                {amenity}
              </span>
            ))}
          </div>
        </div>
        <button 
          onClick={() => onBook(room.id)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}