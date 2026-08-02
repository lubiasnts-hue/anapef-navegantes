import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="ANAPEF Logo" className="h-20 w-20 rounded-full" />
            <div className="text-left">
              <h1 className="text-2xl font-bold text-gray-900">ANAPEF</h1>
              <p className="text-xs text-gray-600 leading-tight">Associação Navegantina de<br/>Pessoas com Fibromialgia</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-gray-700 hover:text-purple-700 font-medium transition">Início</a>
            <a href="#sobre" className="text-gray-700 hover:text-purple-700 font-medium transition">Sobre Nós</a>
            <a href="#direitos" className="text-gray-700 hover:text-purple-700 font-medium transition">Direitos</a>
            <a href="#noticias" className="text-gray-700 hover:text-purple-700 font-medium transition">Notícias</a>
            <a href="#contato" className="text-gray-700 hover:text-purple-700 font-medium transition">Contato</a>
            <button className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 font-semibold transition flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
              <span>Doe Agora</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-gray-200">
            <a href="#home" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 rounded transition">Início</a>
            <a href="#sobre" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 rounded transition">Sobre Nós</a>
            <a href="#direitos" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 rounded transition">Direitos</a>
            <a href="#noticias" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 rounded transition">Notícias</a>
            <a href="#contato" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 rounded transition">Contato</a>
            <button className="w-full bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 font-semibold transition">
              Doe Agora
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
