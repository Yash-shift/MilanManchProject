import React from 'react';

const Events = () => {
  const allEvents = [
    {
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
      title: "Royal Wedding Gala",
      date: "March 15, 2024",
      location: "Grand Palace Hall",
      category: "Wedding"
    },
    {
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80",
      title: "Corporate Summit",
      date: "March 20, 2024",
      location: "Business Convention Center",
      category: "Corporate"
    },
    {
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80",
      title: "Music Festival",
      date: "April 5, 2024",
      location: "City Park Amphitheater",
      category: "Entertainment"
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-8">Our Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allEvents.map((event, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-amber-700 bg-amber-100 rounded-full mb-2">
                  {event.category}
                </span>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2">{event.date}</p>
                <p className="text-gray-600">{event.location}</p>
                <button className="mt-4 w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;