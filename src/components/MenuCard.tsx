import React from 'react';

interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img 
        src={item.image} 
        alt={item.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
          <span className="text-lg font-bold text-blue-600">${item.price}</span>
        </div>
        <p className="text-gray-600 text-sm">{item.description}</p>
        <div className="mt-3">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
            {item.category}
          </span>
        </div>
      </div>
    </div>
  );
}