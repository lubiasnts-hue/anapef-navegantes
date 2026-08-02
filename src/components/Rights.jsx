import React from 'react';

export default function Rights() {
  const rights = [
    {
      title: "Reconhecimento Legal",
      description: "A fibromialgia é reconhecida pela OMS e pelo INSS como doença incapacitante.",
      icon: "⚖️"
    },
    {
      title: "Benefício por Incapacidade",
      description: "Pessoas com fibromialgia grave podem solicitar auxílio-doença ou aposentadoria por invalidez.",
      icon: "💼"
    },
    {
      title: "Atendimento Prioritário",
      description: "Direito a atendimento prioritário em órgãos públicos e instituições de saúde.",
      icon: "🏥"
    },
    {
      title: "Acesso a Medicamentos",
      description: "Acesso a medicamentos específicos através do SUS e programas de assistência farmacêutica.",
      icon: "💊"
    },
    {
      title: "Isenção de Impostos",
      description: "Possibilidade de isenção de ICMS na compra de medicamentos e equipamentos.",
      icon: "📋"
    },
    {
      title: "Direito ao Trabalho",
      description: "Proteção contra discriminação no ambiente de trabalho e direito a adaptações.",
      icon: "👥"
    }
  ];

  return (
    <section id="direitos" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-900 mb-4">Nossos Direitos</h2>
          <p className="text-xl text-gray-600">Conheça os direitos garantidos por lei para pessoas com fibromialgia</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rights.map((right, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">{right.icon}</div>
              <h3 className="text-xl font-bold text-purple-900 mb-3">{right.title}</h3>
              <p className="text-gray-700">{right.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-purple-700 text-white rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Saiba Mais Sobre Seus Direitos</h3>
          <p className="text-lg mb-8">
            Entre em contato conosco para receber orientações personalizadas sobre seus direitos e como acessá-los.
          </p>
          <button className="bg-white text-purple-700 px-8 py-3 rounded-lg hover:bg-gray-100 font-semibold">
            Fale Conosco
          </button>
        </div>
      </div>
    </section>
  );
}
