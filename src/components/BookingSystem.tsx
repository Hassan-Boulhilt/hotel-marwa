import React, { useState } from 'react';

interface Booking {
  id: string;
  guestName: string;
  email: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalAmount: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
}

export default function BookingSystem() {
  const [bookings] = useState<Booking[]>([
    {
      id: 'BK001',
      guestName: 'John Smith',
      email: 'john@example.com',
      roomName: 'Presidential Suite',
      checkIn: '2024-02-15',
      checkOut: '2024-02-18',
      guests: 2,
      totalAmount: 1797,
      status: 'confirmed',
      createdAt: '2024-01-20'
    },
    {
      id: 'BK002',
      guestName: 'Sarah Johnson',
      email: 'sarah@example.com',
      roomName: 'Deluxe Ocean View',
      checkIn: '2024-02-20',
      checkOut: '2024-02-23',
      guests: 1,
      totalAmount: 897,
      status: 'confirmed',
      createdAt: '2024-01-22'
    }
  ]);

  const generateInvoice = (booking: Booking) => {
    alert(`Invoice generated for booking ${booking.id} and sent to ${booking.email}`);
  };

  const sendReminder = (booking: Booking) => {
    alert(`Reminder email sent to ${booking.email} for booking ${booking.id}`);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Booking Management</h2>
          <p className="text-xl text-gray-600">
            Manage reservations, send invoices, and automated reminders
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Booking ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Guest</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Room</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dates</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {booking.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{booking.guestName}</div>
                        <div className="text-sm text-gray-500">{booking.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {booking.roomName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {booking.checkIn} to {booking.checkOut}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${booking.totalAmount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                        booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                      <button
                        onClick={() => generateInvoice(booking)}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Invoice
                      </button>
                      <button
                        onClick={() => sendReminder(booking)}
                        className="text-green-600 hover:text-green-800 font-medium"
                      >
                        Remind
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Automation</h3>
            <p className="text-gray-600 text-sm mb-4">Automated confirmation emails, pre-arrival reminders, and post-stay follow-ups</p>
            <div className="text-2xl font-bold text-blue-600">98%</div>
            <div className="text-sm text-gray-500">Delivery Rate</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Invoice Generation</h3>
            <p className="text-gray-600 text-sm mb-4">Automatic PDF invoices with payment tracking and receipt management</p>
            <div className="text-2xl font-bold text-green-600">24/7</div>
            <div className="text-sm text-gray-500">Automated</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Smart Reminders</h3>
            <p className="text-gray-600 text-sm mb-4">Intelligent reminder system for check-in, special requests, and feedback</p>
            <div className="text-2xl font-bold text-purple-600">85%</div>
            <div className="text-sm text-gray-500">Response Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}