import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Who We Are",
      content: "At Milan Manch, we don’t just manage events; we craft unforgettable experiences that leave lasting impressions. Founded with a passion for bringing dreams to life, we are your partners in creating moments that matter.",
      icon: "👥"
    },
    {
      title: "Our Goal",
      content: "As a premier event management company, Milan Manch is driven by the belief that every occasion deserves to be celebrated with perfection and style. Be it a grand wedding, a sophisticated corporate gathering, a lively social event, or a themed celebration that breaks all conventions, our dedicated team ensures your vision becomes a reality.",
      icon: "🎯"
    },
    {
      title: "Our Values",
      content: "Built on trust, innovation, and commitment to excellence, we're dedicated to delivering outstanding results for our clients.",
      icon: "⭐"
    },
    {
      title: "Our Team",
      content: "Our team comprises industry experts with years of experience in handling events of all scales and types. Precision, punctuality, and professionalism are the hallmarks of Milan Manch, ensuring that every detail is managed flawlessly. With a commitment to excellence, we bring your vision to life with creativity and care",
      icon: "🤝"
    },
    {
      title: "What Sets Us Apart",
      content: "At Milan Manch, we know that the heart of every event lies in the emotions it evokes. That’s why we pour our soul into every detail—designing décor that speaks to your essence, curating experiences that captivate, and orchestrating events that feel like poetry in motion.",
      icon: "📌"
    },
    {
      title: "Corporate Expertise",
      content: "Milan Manch aims to be the go-to name for corporate India, offering services like brand launches, team-building retreats, conferences, and milestone celebrations that align with organizational goals.",
      icon: "💡"
    },
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div  id="aboutus" className="bg-gradient-to-b from-amber-50 to-white min-h-screen flex items-center justify-center p-4">
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

