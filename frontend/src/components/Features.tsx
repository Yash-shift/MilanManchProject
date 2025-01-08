import React from 'react';
import { Users2, Utensils, Music, Camera } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Users2 className="h-8 w-8 text-amber-600" />,
      title: "Expert Planning",
      description: "Our experienced team ensures flawless event execution"
    },
    {
      icon: <Utensils className="h-8 w-8 text-amber-600" />,
      title: "Catering Excellence",
      description: "Exquisite cuisine tailored to your preferences"
    },
    {
      icon: <Music className="h-8 w-8 text-amber-600" />,
      title: "Entertainment",
      description: "Top-tier entertainment options for every occasion"
    },
    {
      icon: <Camera className="h-8 w-8 text-amber-600" />,
      title: "Photography",
      description: "Capturing your precious moments forever"
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-16">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-amber-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-amber-900 text-center mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;