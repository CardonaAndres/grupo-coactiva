import Link from 'next/link';

const services = [
  {
    number: '01',
    title: 'Cobro de Cartera Vencida',
    description: 'Recuperación de cartera con alta eficiencia a nivel nacional. 18 ejecutivos y 7 abogados especializados trabajando para maximizar resultados.',
    highlight: 'Obligaciones superiores a $10.000.000 COP',
  },
  {
    number: '02',
    title: 'Insolvencia Personal',
    description: 'Libérese de sus deudas por la vía legal. Aplicamos la Ley de la Segunda Oportunidad sin límite de monto. Protección integral de su patrimonio.',
    highlight: 'Sin límite de monto',
  },
  {
    number: '03',
    title: 'Insolvencia Empresarial',
    description: 'Reorganización y liquidación empresarial bajo la Ley 1116 de 2006. Preservar la empresa como unidad productiva o cerrar operaciones legalmente.',
    highlight: 'Reorganización y liquidación',
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-cyan-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            15 años de experiencia en recuperación de cartera y soluciones de insolvencia
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-cyan-800"
            >
              {/* Number */}
              <div className="text-6xl font-bold text-gray-100 mb-4">
                {service.number}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 -mt-12">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Highlight */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-bold text-cyan-800">
                  {service.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/servicios-de-cobranzas-en-grupo-coactiva"
            className="inline-flex items-center justify-center bg-cyan-800 hover:bg-cyan-900 text-white px-12 py-5 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </section>
  );
}