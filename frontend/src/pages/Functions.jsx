import React from "react";
import {
  Users2,
  Utensils,
  Music,
  Camera,
  Cake,
  PartyPopper,
  HeartIcon,
  Home,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

const Wedding = () => {
  const features = [
    {
      icon: <PartyPopper className="h-8 w-8 text-amber-600" />,
      title: "Lagna Patrika",
      description:
        "Sealing the Bond of Love and Tradition – Your Invitation to a New Beginning!",
      link: "/booking",
    },
    {
      icon: <Home className="h-8 w-8 text-amber-600" />,
      title: "Haldi Ceremony",
      description:
        "Application of turmeric paste on the bride and groom for purification and radiance.",
        
      link: "/booking"
    },
    {
      icon: <Music className="h-8 w-8 text-amber-600" />,
      title: "Mehendi Ceremony",
      description:
        "Henna application on the bride’s hands and feet, symbolizing beauty and joy.",
      link: "/booking"
    },
    {
      icon: <PartyPopper className="h-8 w-8 text-amber-600" />,
      title: "Same-Day Wedding",
      description:
        "Organize seamless and elegant weddings with our efficient planning services.",
      link: "/booking"
    },
    {
      icon: <HeartIcon className="h-8 w-8 text-amber-600" />,
      title: "Sangeet Ceremony",
      link: "/booking",
      description:
        "A musical night filled with dance, songs, and celebrations involving family and friends.",
    },
    {
        icon: <Cake className="h-8 w-8 text-amber-600" />,
        title: "Barat",
        description:
          "The groom’s procession to the wedding venue, accompanied by music and dancing.",
        link: "/booking"
      },
  ];
  const navigate = useNavigate();

  return (
    <div className="py-12 bg-white">
      {/* <BackButton></BackButton> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-16">
            Types of Wedding
          </h2>
        </div>
{/* onClick={() => navigate("/booking")} */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  "
          
        >
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

export default Wedding;
