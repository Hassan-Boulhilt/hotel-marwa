import React from 'react';
import RoomCard from './RoomCard';

interface RoomsSectionProps {
  onBookRoom: (roomId: number) => void;
}

export default function RoomsSection({ onBookRoom }: RoomsSectionProps) {
  const rooms = [
    {
      id: 1,
      name: "Presidential Suite",
      price: 599,
      image: "https://d64gsuwffb70l.cloudfront.net/68b0f371030b8d78657b93d7_1756427176736_6aaa3fd3.webp",
      amenities: ["King Bed", "City View", "Jacuzzi", "Butler Service", "Private Balcony"],
      description: "Ultimate luxury with panoramic city views and premium amenities."
    },
    {
      id: 2,
      name: "Executive Suite",
      price: 399,
      image: "https://d64gsuwffb70l.cloudfront.net/68b0f371030b8d78657b93d7_1756427178494_4e708a3e.webp",
      amenities: ["King Bed", "Work Desk", "Mini Bar", "City View", "Lounge Access"],
      description: "Perfect for business travelers with elegant comfort and productivity features."
    },
    {
      id: 3,
      name: "Deluxe Ocean View",
      price: 299,
      image: "https://d64gsuwffb70l.cloudfront.net/68b0f371030b8d78657b93d7_1756427180294_a150a6bc.webp",
      amenities: ["Queen Bed", "Ocean View", "Balcony", "Mini Fridge", "Free WiFi"],
      description: "Wake up to stunning ocean views in this comfortable and stylish room."
    },
    {
      id: 4,
      name: "Garden View Room",
      price: 199,
      image: "https://d64gsuwffb70l.cloudfront.net/68b0f371030b8d78657b93d7_1756427182085_75d792ac.webp",
      amenities: ["Double Bed", "Garden View", "Work Area", "Coffee Maker", "Free WiFi"],
      description: "Peaceful garden views with modern amenities for a relaxing stay."
    },
    {
      id: 5,
      name: "Superior Double",
      price: 249,
      image: "https://d64gsuwffb70l.cloudfront.net/68b0f371030b8d78657b93d7_1756427186278_a6ea89ef.webp",
      amenities: ["Double Bed", "City View", "Mini Bar", "Safe", "Room Service"],
      description: "Comfortable accommodation with city views and essential amenities."
    },
    {
      id: 6,
      name: "Family Suite",
      price: 349,
      image: "https://d64gsuwffb70l.cloudfront.net/68b0f371030b8d78657b93d7_1756427188215_2af36c10.webp",
      amenities: ["2 Beds", "Living Area", "Kitchenette", "Kids Area", "Connecting Rooms"],
      description: "Spacious family accommodation with separate living and sleeping areas."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Rooms & Suites</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully designed accommodations, each offering comfort, 
            style, and exceptional amenities for an unforgettable stay.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} onBook={onBookRoom} />
          ))}
        </div>
      </div>
    </section>
  );
}