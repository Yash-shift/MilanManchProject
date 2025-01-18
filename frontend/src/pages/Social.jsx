


// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import bg1 from "../images/bg1.jpg";
// import bg2 from "../images/bg3.jpg";

// const slides = [
//   {
//     title: "Who We Are",
//     description: "At Milan Manch, we don’t just manage events; we craft unforgettable experiences that leave lasting impressions.",
//     image: bg2 //"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
//   },
//   {
//     title: "Our Mission",
//     description: "As a premier event management company, Milan Manch is driven by the belief that every occasion deserves to be celebrated with perfection and style.",
//    image: bg1 //"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
//   },
//   {
//     title: "Our Values",
//     description: "Built on trust, innovation, and commitment to excellence, we're dedicated to delivering outstanding results for our clients.",
//     image: bg2 //"https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
//   },
//   {
//     title: "Leadership",
//     description: "Under the visionary leadership of Praveen Kumar, CEO and Managing Director, Milan Manch has grown into a name synonymous with excellence and creativity.",
//     image: bg1
//   }
  
// ];

// const Wedding=()=> {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div className="relative w-full max-w-7xl  bg-amber-50 mx-auto h-[600px] overflow-hidden mb-4 pb-5 rounded-xl">

//       <div 
//         className="absolute inset-0 transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
        
//         <div className="flex h-full">
          
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className="w-full h-full flex-shrink-0 relative"
//               style={{ width: '100%' }}
//             >
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
              
//               <div className="absolute inset-0 bg-black bg-opacity-50">
//                 <div className=" text-center text-4xl font-bold mt-2  text-white">WEDDINGS WE OFFER </div>
//                 <div className="flex flex-col justify-center h-full px-12 text-white">
//                   <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
//                   <p className="text-lg text-gray-300 max-w-2xl">{slide.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors duration-200"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft className="w-6 h-6 text-gray-800" />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors duration-200"
//         aria-label="Next slide"
//       >
//         <ChevronRight className="w-6 h-6 text-gray-800" />
//       </button>

//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-2 h-2 rounded-full transition-colors duration-200 ${
//               currentSlide === index ? 'bg-white' : 'bg-white/50'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
// export default Wedding;
import React from "react";
import { Users2, Utensils, Music, Camera } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const Social=() => {
  const features = [
    {
      icon: <Utensils className="h-8 w-8 text-amber-600" />,
      title: "Birthday",
      description:
        "Experience the beauty and rituals of a traditional Hindu wedding.",
      
    },
    {
      icon: <Users2 className="h-8 w-8 text-amber-600" />,
      title: "Anniversary",
      description: "Plan your perfect wedding at breathtaking locations around the world.",
    },
    {
      icon: <Music className="h-8 w-8 text-amber-600" />,
      title: "Engagement Ceremony",
      description:
        "Create unforgettable memories with unique themes and creative designs.",
    },
    {
      icon: <Camera className="h-8 w-8 text-amber-600" />,
      title: "Roka Ceremony",
      description: "Organize seamless and elegant weddings with our efficient planning services.",
    },
    {
        icon: <Camera className="h-8 w-8 text-amber-600" />,
        title: "Baby Shower (Godh Bharai)",
        description: "Organize seamless and elegant weddings with our efficient planning services.",
      },
  ];

  const navigate=useNavigate()

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-16">
            Types of Wedding
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" onClick={()=>navigate("/booking")}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-amber-50 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-amber-900 text-center mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Social;
