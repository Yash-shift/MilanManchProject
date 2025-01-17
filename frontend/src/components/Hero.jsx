// import React from 'react';
// import { Calendar, Star } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const Hero = () => {
//   const Navigate=useNavigate()
//   const goToServices = () => {
//     Navigate('/services');
//   };
//   return (
//     <div className="relative pt-24 pb-32 flex content-center items-center justify-center min-h-screen">
//       <div className="absolute top-0 w-full h-full bg-[url('./images/bg1.jpg')] bg-cover bg-center">
//         <span className="w-full left-0 h-full absolute opacity-50 bg-black"></span>
//       </div>
//       <div className="container relative mx-auto">
//         <div className="items-center flex flex-wrap">
//           <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
//             <div className="flex justify-center mb-8">
//               <Star className="h-12 w-12 text-amber-400" />
//             </div>
//             <h1 className="text-white font-semibold text-5xl mb-8">
//               Create Unforgettable Moments
//             </h1>
//             <p className="mt-4 text-lg text-gray-300">
//               From intimate gatherings to grand celebrations, we transform your vision into reality. Let us make your special day truly extraordinary.
//             </p>
//             <div className="mt-12">
//               <button  onClick={goToServices} className="bg-amber-600 text-white font-bold px-6 py-4 rounded-lg mr-4 hover:bg-amber-700 transition-colors">
//                 Plan Your Event
//               </button>
//               <button className="bg-transparent border-2 border-white text-white font-bold px-6 py-4 rounded-lg hover:bg-white/10 transition-colors">
//                 View Gallery
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import { ArrowRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const heroSlides = [
  {
    title: "Discover & Create Unforgettable Events",
    description:
      "Find and organize events that fuel your passions and create lasting memories. From conferences to concerts, we've got you covered.",
    image:
      "https://images.unsplash.com/photo-1513623935135-c896b59073c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Connect with Like-minded People",
    description:
      "Join a vibrant community of event enthusiasts and professionals. Network, learn, and grow together.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Host Events That Matter",
    description:
      "Transform your ideas into successful events. Our platform provides all the tools you need to create impactful experiences.",
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=1920",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const Navigate = useNavigate();
  const goToServices = () => {
    Navigate("/services");
  };
  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(
        (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative h-[600px] overflow-hidden">
      <div className="relative h-full w-full">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <div
                  className={`max-w-3xl transition-all duration-500 transform ${
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <h1 className="text-5xl font-semibold mb-6 text-white">
                    {slide.title}
                  </h1>
                  <p className=" mb-8 text-lg text-gray-300">
                    {slide.description}
                  </p>
                  <div className="flex gap-4">
                    <button
                      onClick={goToServices}
                      className="border bg-white   border-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 hover:text-amber-300 transition-all hover:scale-105"
                    >
                      Browse Events
                    </button>
                    <button className="border bg-white   border-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 hover:text-amber-300 transition-all hover:scale-105">
                      Create Event
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button> */}

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => !isTransitioning && setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
