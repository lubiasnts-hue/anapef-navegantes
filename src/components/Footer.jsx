import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">ANAPEF</h3>
            <p className="text-gray-400 text-sm">
              Associação Navegantina de Pessoas com Fibromialgia. Acolhendo, informando e lutando por qualidade de vida.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#sobre" className="hover:text-white">Sobre Nós</a></li>
              <li><a href="#direitos" className="hover:text-white">Nossos Direitos</a></li>
              <li><a href="#noticias" className="hover:text-white">Notícias</a></li>
              <li><a href="#eventos" className="hover:text-white">Eventos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📞 (47) 9752-0167</li>
              <li>📧 contato@anapef.org.br</li>
              <li>📍 Navegantes, SC</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-purple-700 p-3 rounded-full hover:bg-purple-800">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="bg-purple-700 p-3 rounded-full hover:bg-purple-800">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-3 1"/>
                </svg>
              </a>
              <a href="#" className="bg-purple-700 p-3 rounded-full hover:bg-purple-800">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16.5 7.5H7.5A2 2 0 005.5 9.5v5A2 2 0 007.5 16.5h9A2 2 0 0018.5 14.5v-5A2 2 0 0016.5 7.5z" fill="white"/>
                  <circle cx="12" cy="12" r="2.5" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2026 ANAPEF - Navegantes. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Política de Privacidade</a>
              <a href="#" className="hover:text-white">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
