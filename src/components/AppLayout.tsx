import React, { useState } from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import RoomsSection from './RoomsSection';
import RestaurantSection from './RestaurantSection';
import AmenitiesSection from './AmenitiesSection';
import BookingSystem from './BookingSystem';
import BookingModal from './BookingModal';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);
  const [selectedRoomName, setSelectedRoomName] = useState('');

  const handleBookRoom = (roomId: number) => {
    const roomNames = {
      1: 'Presidential Suite',
      2: 'Executive Suite', 
      3: 'Deluxe Ocean View',
      4: 'Garden View Room',
      5: 'Superior Double',
      6: 'Family Suite'
    };
    setSelectedRoomId(roomId);
    setSelectedRoomName(roomNames[roomId as keyof typeof roomNames] || '');
    setIsBookingModalOpen(true);
  };

  const handleBookNow = () => {
    setSelectedRoomId(1);
    setSelectedRoomName('Presidential Suite');
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onBookNow={handleBookNow} />
      <HeroSection onBookNow={handleBookNow} />
      <div id="rooms">
        <RoomsSection onBookRoom={handleBookRoom} />
      </div>
      <div id="restaurant">
        <RestaurantSection />
      </div>
      <div id="amenities">
        <AmenitiesSection />
      </div>
      <div id="contact">
        <BookingSystem />
      </div>
      <Footer />
      
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        roomId={selectedRoomId}
        roomName={selectedRoomName}
      />
    </div>
  );
};

export default AppLayout;