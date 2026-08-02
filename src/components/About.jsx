import React from 'react';

export default function About() {
  return (
    <section id="sobre" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-900 mb-4">Sobre Nós</h2>
          <p className="text-xl text-gray-600">Conheça a história da ANAPEF - Navegantes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-purple-50 rounded-lg p-8 text-center hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <div className="bg-purple-200 rounded-full p-4">
                <svg className="w-8 h-8 text-purple-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.5 1.5H5.75A2.25 2.25 0 003.5 3.75v12.5A2.25 2.25 0 005.75 18.5h8.5a2.25 2.25 0 002.25-2.25V8" />
                  <path d="M14 1.5v5h5" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-purple-900 mb-3">Nossa Missão</h3>
            <p className="text-gray-700">
              Acolher, informar, apoiar e lutar por mais qualidade de vida para pessoas com fibromialgia em Navegantes.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-purple-50 rounded-lg p-8 text-center hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <div className="bg-purple-200 rounded-full p-4">
                <svg className="w-8 h-8 text-purple-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-purple-900 mb-3">Nossos Valores</h3>
            <p className="text-gray-700">
              Empatia, solidariedade, transparência e compromisso com a transformação social e qualidade de vida.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-purple-50 rounded-lg p-8 text-center hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <div className="bg-purple-200 rounded-full p-4">
                <svg className="w-8 h-8 text-purple-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-purple-900 mb-3">Nossa Comunidade</h3>
            <p className="text-gray-700">
              Uma rede de apoio formada por pessoas com fibromialgia, familiares e profissionais de saúde.
            </p>
          </div>
        </div>

        {/* History Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-100 to-purple-50 rounded-lg p-12">
          <h3 className="text-3xl font-bold text-purple-900 mb-6">Nossa História</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            A ANAPEF - Associação Navegantina de Pessoas com Fibromialgia foi criada com o objetivo de unir, apoiar e dar voz às pessoas que vivem com fibromialgia em Navegantes, Santa Catarina.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Somos uma associação sem fins lucrativos, comprometida em promover informação, apoio emocional e lutar pelos direitos e qualidade de vida de todos os nossos associados.
          </p>
        </div>
      </div>
    </section>
  );
}
