import React from 'react';

export default function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-700 to-purple-600">
      <div className="max-w-4xl mx-auto text-center text-white">
        <div className="flex justify-center mb-6">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
        </div>
        <h2 className="text-4xl font-bold mb-4">Juntos Somos Mais Fortes!</h2>
        <p className="text-xl mb-8 opacity-90">
          Associe-se à ANAPEF e faça parte dessa rede de apoio e transformação. Juntos, podemos conquistar mais qualidade de vida e visibilidade para a fibromialgia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-700 px-8 py-3 rounded-lg hover:bg-gray-100 font-semibold transition transform hover:scale-105">
            Seja Sócio
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 font-semibold transition transform hover:scale-105">
            Saiba Mais
          </button>
        </div>
      </div>
    </section>
  );
}
