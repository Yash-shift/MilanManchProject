import React from "react";
import { Users2, Utensils, Music, Camera } from "lucide-react";
import { NavLink } from "react-router-dom";

const Services = () => {
  const features = [
    {
      icon: <Utensils className="h-8 w-8 text-amber-600" />,
      title: "Wedding Planning",
      description:
        "Turn your dream into a reality with our expert planning and execution.",
      link: "/wedding",
    },
    {
      icon: <Users2 className="h-8 w-8 text-amber-600" />,
      title: "Corporate Events",
      link: "/corporate",
      description: "Professional events tailored for your corporate needs.",
    },
    {
      icon: <Music className="h-8 w-8 text-amber-600" />,
      title: "Social Gathering",
      link: "/social",
      description:
        "Host Birthday, Anniversary and other special events in style.",
    },
    // {
    //   icon: <Camera className="h-8 w-8 text-amber-600" />,
    //   title: "Photography",
    //   description: "Capturing your precious moments forever",
    // },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-16 relative group">
            Our Services
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 transition-all duration-1000 group-hover:w-full group-hover:h-0.8"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <NavLink to={feature.link}>
              <div
                key={index}
                className="p-6 bg-amber-50 rounded-xl hover:shadow-lg transition-shadow"
              >
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
