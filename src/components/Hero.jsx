import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-purple-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h2 className="text-5xl md:text-6xl font-bold text-purple-900 mb-6 leading-tight">
              Você não está sozinho na luta contra a fibromialgia.
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              A ANAPEF existe para acolher, informar, apoiar e lutar por mais qualidade de vida para todos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-purple-700 text-white px-8 py-3 rounded-lg hover:bg-purple-800 font-semibold flex items-center justify-center space-x-2">
                <span>Saiba Mais</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="border-2 border-purple-700 text-purple-700 px-8 py-3 rounded-lg hover:bg-purple-50 font-semibold">
                Seja Sócio
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-200 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=500&fit=crop" 
                alt="Grupo de apoio" 
                className="relative rounded-2xl shadow-xl w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
