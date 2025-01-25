import React from "react";
import { Users2, Utensils, Music, Camera, Cake, PartyPopper, Gift } from "lucide-react";
import { NavLink } from "react-router-dom";

const Services = () => {
  const features = [
    {
      id: 1,
      icon: <PartyPopper className="h-8 w-8 text-amber-600" />,
      title: "Wedding Planning",
      description: "Turn your dream into a reality with our expert planning and execution.",
      link: "/wedding",
    },
    {
      id: 2,
      icon: <Users2 className="h-8 w-8 text-amber-600" />,
      title: "Corporate Events",
      description: "Professional events tailored for your corporate needs.",
      link: "/corporate",
    },
    {
      id: 3,
      icon: <Gift className="h-8 w-8 text-amber-600" />,
      title: "Social Gathering",
      description: "Host Birthday, Anniversary and other special events in style.",
      link: "/booking",
    },
  ];

  return (
    <div id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-16 relative group">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <NavLink to={feature.link} key={feature.id}>
              <div className="p-6 bg-amber-50 rounded-xl hover:shadow-xl transition-shadow relative group">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-amber-900 text-center mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
