import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="ANAPEF Logo" className="h-16 w-16" />
            <div className="text-left">
              <h1 className="text-xl font-bold text-purple-700">ANAPEF</h1>
              <p className="text-xs text-gray-600">Navegantes</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-purple-700 font-medium">Início</a>
            <a href="#sobre" className="text-gray-700 hover:text-purple-700 font-medium">Sobre Nós</a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-purple-700 font-medium flex items-center">
                Fibromialgia
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <div className="hidden group-hover:block absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg">
                <a href="#direitos" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Direitos</a>
                <a href="#informacoes" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Informações</a>
              </div>
            </div>
            <a href="#noticias" className="text-gray-700 hover:text-purple-700 font-medium">Notícias</a>
            <a href="#eventos" className="text-gray-700 hover:text-purple-700 font-medium">Eventos</a>
            <a href="#contato" className="text-gray-700 hover:text-purple-700 font-medium">Contato</a>
            <button className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
              <span>Doe Agora</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#home" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 rounded">Início</a>
            <a href="#sobre" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 rounded">Sobre Nós</a>
            <a href="#direitos" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 rounded">Direitos</a>
            <a href="#noticias" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 rounded">Notícias</a>
            <a href="#eventos" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 rounded">Eventos</a>
            <a href="#contato" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 rounded">Contato</a>
            <button className="w-full bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800">
              Doe Agora
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
