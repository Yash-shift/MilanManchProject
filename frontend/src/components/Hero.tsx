import React from 'react';
import { Calendar, Star } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-24 pb-32 flex content-center items-center justify-center min-h-screen">
      <div className="absolute top-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <span className="w-full h-full absolute opacity-50 bg-black"></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="flex justify-center mb-8">
              <Star className="h-12 w-12 text-amber-400" />
            </div>
            <h1 className="text-white font-semibold text-5xl mb-8">
              Create Unforgettable Moments
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              From intimate gatherings to grand celebrations, we transform your vision into reality. Let us make your special day truly extraordinary.
            </p>
            <div className="mt-12">
              <button className="bg-amber-600 text-white font-bold px-6 py-4 rounded-lg mr-4 hover:bg-amber-700 transition-colors">
                Plan Your Event
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold px-6 py-4 rounded-lg hover:bg-white/10 transition-colors">
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;