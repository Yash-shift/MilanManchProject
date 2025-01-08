import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Who We Are",
      content: "At Milan Manch, we don’t just manage events; we craft unforgettable experiences that leave lasting impressions.",
      icon: "👥"
    },
    {
      title: "Our Goal",
      content: "As a premier event management company, Milan Manch is driven by the belief that every occasion deserves to be celebrated with perfection and style.",
      icon: "🎯"
    },
    {
      title: "Our Values",
      content: "Built on trust, innovation, and commitment to excellence, we're dedicated to delivering outstanding results for our clients.",
      icon: "⭐"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="bg-gradient-to-b from-amber-50 to-white min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <h1 className=" font-bold text-center mb-12 text-3xl  text-amber-900">About Us</h1>
        
        <div className="relative bg-white rounded-2xl shadow-xl p-8 overflow-hidden">
          <div className="flex justify-between items-center mb-8">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-blue-600" />
            </button>
            
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? 'text-amber-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ArrowRight className="w-6 h-6 text-blue-600" />
            </button>
          </div>

          <div className="relative h-80">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{slide.icon}</div>
                  <h2 className="text-2xl font-semibold  text-amber-900 mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-gray-600  leading-relaxed max-w-2xl mx-auto">
                    {slide.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

