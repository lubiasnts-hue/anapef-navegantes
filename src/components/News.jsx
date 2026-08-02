import React from 'react';

export default function News() {
  const news = [
    {
      date: "12 de maio",
      title: "Maio Roxo: Mês de Conscientização da Fibromialgia",
      description: "Confira nossa programação especial para o mês de conscientização da fibromialgia.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop"
    },
    {
      date: "25 de abril",
      description: "Roda de Conversa: um espaço de escuta e acolhimento",
      title: "Próxima roda de conversa acontece no próximo sábado",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
    {
      date: "10 de abril",
      title: "1ª Caminhada em prol das pessoas com fibromialgia",
      description: "Um momento de união, empatia e visibilidade para a causa que merece ser ouvida.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="noticias" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-900 mb-4">Notícias e Atualizações</h2>
          <p className="text-xl text-gray-600">Fique por dentro das novidades da ANAPEF</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-purple-600 font-semibold mb-2">{item.date}</p>
                <h3 className="text-xl font-bold text-purple-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <a href="#" className="text-purple-700 font-semibold hover:text-purple-900">
                  Leia mais →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-purple-700 text-purple-700 px-8 py-3 rounded-lg hover:bg-purple-50 font-semibold">
            Ver Todas as Notícias
          </button>
        </div>
      </div>
    </section>
  );
}
