import React from 'react';
import MenuCard from './MenuCard';

export default function RestaurantSection() {
  const menuItems = [
    {
      id: 1,
      name: "Grilled Salmon",
      price: 32,
      image: "https://d64gsuwffb70l.cloudfront.net/68b0f371030b8d78657b93d7_1756427198462_5360c296.webp",
      description: "Fresh Atlantic salmon with lemon herb butter and seasonal vegetables",
      category: "Main Course"
    },
    {
      id: 2,
      name: "Beef Tenderloin",
      price: 45,
      image: "https://d64gsuwffb70l.cloudfront.net/68b0f371030b8d78657b93d7_1756427200246_3ff2b4ba.webp",
      description: "Prime cut beef with truffle sauce and roasted potatoes",
      category: "Main Course"
    },
    {
      id: 3,
      name: "Lobster Bisque",
      price: 18,
      image: "https://d64gsuwffb70l.cloudfront.net/68b0f371030b8d78657b93d7_1756427202031_90d432db.webp",
      description: "Rich and creamy lobster soup with cognac and fresh herbs",
      category: "Appetizer"
    },
    {
      id: 4,
      name: "Chocolate Soufflé",
      price: 14,
      image: "https://d64gsuwffb70l.cloudfront.net/68b0f371030b8d78657b93d7_1756427203794_d09e29c0.webp",
      description: "Warm chocolate soufflé with vanilla ice cream and berry coulis",
      category: "Dessert"
    },
    {
      id: 5,
      name: "Caesar Salad",
      price: 16,
      image: "https://d64gsuwffb70l.cloudfront.net/68b0f371030b8d78657b93d7_1756427206298_b60abb31.webp",
      description: "Crisp romaine lettuce with parmesan, croutons and house dressing",
      category: "Salad"
    },
    {
      id: 6,
      name: "Pan-Seared Duck",
      price: 38,
      image: "https://d64gsuwffb70l.cloudfront.net/68b0f371030b8d78657b93d7_1756427208710_163676eb.webp",
      description: "Duck breast with cherry glaze and wild rice pilaf",
      category: "Main Course"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Fine Dining Restaurant</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience culinary excellence with our chef's carefully crafted menu 
            featuring fresh, locally-sourced ingredients and international flavors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Restaurant Hours</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
              <div>
                <p className="font-semibold">Breakfast</p>
                <p>6:30 AM - 10:30 AM</p>
              </div>
              <div>
                <p className="font-semibold">Lunch</p>
                <p>12:00 PM - 3:00 PM</p>
              </div>
              <div>
                <p className="font-semibold">Dinner</p>
                <p>6:00 PM - 10:00 PM</p>
              </div>
              <div>
                <p className="font-semibold">Room Service</p>
                <p>24 Hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}