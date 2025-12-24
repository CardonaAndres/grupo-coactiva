import Link from 'next/link';
import { WhatsAppIcon } from '@/global/components';

const services = [
  {
    id: 'cobro-cartera',
    title: 'Cobro de Cartera Vencida',
    subtitle: 'Alta eficiencia en recuperación a nivel nacional',
    description: 'La recuperación de cartera que realizamos en nuestra compañía se caracteriza por su alta eficiencia, posicionándonos a nivel nacional como una organización líder en el sector.',
    sections: [
      {
        title: 'Vía Prejurídica',
        content: '18 ejecutivos especializados con entrenamiento en PNL e inteligencia emocional. Modelo persona a persona con seguimiento de 20 días calendario.',
      },
      {
        title: 'Vía Jurídica',
        content: '7 abogados especializados con cobertura nacional. Enfoque estratégico y seguimiento procesal transparente.',
      },
    ],
    info: [
      { label: 'Cuantías', value: 'Obligaciones superiores a $10.000.000 COP' },
      { label: 'Costos', value: 'Entre 5% y 20% según ubicación, antigüedad y monto' },
    ],
  },
  {
    id: 'insolvencia-personal',
    title: 'Insolvencia Personal',
    subtitle: 'Libérese de sus deudas por la vía legal',
    description: 'Aplicamos la Ley de la Segunda Oportunidad, sin límite de monto. Figura jurídica que permite negociar integralmente con todos los acreedores.',
    benefits: [
      'Suspender embargos y procesos judiciales',
      'Renegociar obligaciones según capacidad de pago',
      'Proteger su patrimonio y bienes',
      'Extinción legal de deudas',
      'Recuperar estabilidad financiera',
    ],
    applies: 'Pérdida de ingresos, incapacidad de pago, embargos de bienes, pasivos superiores a activos',
  },
  {
    id: 'insolvencia-empresarial',
    title: 'Insolvencia Empresarial',
    subtitle: 'Reorganización y liquidación empresarial',
    description: 'Soluciones legales cuando una empresa pierde la capacidad de cumplir oportunamente con sus obligaciones financieras.',
    sections: [
      {
        title: 'Reorganización',
        content: 'Preservar la empresa como unidad productiva. Acuerdo con acreedores para fórmulas de pago viables bajo la Ley 1116 de 2006.',
      },
      {
        title: 'Liquidación',
        content: 'Cierre legal y ordenado de operaciones. Venta de activos, graduación de créditos y protección del deudor con liquidador especializado.',
      },
    ],
    signals: 'Incapacidad de pago, pérdida de valor económico, deterioro comercial, pasivos superiores a activos',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-cyan-900 via-cyan-800 to-cyan-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-cyan-100">
              Soluciones especializadas con 15 años de experiencia
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                {/* Header */}
                <div className="mb-10">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-xl text-cyan-800 font-semibold mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Sections Grid */}
                {service.sections && (
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {service.sections.map((section, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 border-l-4 border-cyan-800 p-6 rounded-r-lg"
                      >
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {section.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Info Boxes */}
                {service.info && (
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {service.info.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-cyan-50 border border-cyan-200 p-6 rounded-lg"
                      >
                        <h4 className="font-bold text-cyan-900 mb-2">
                          {item.label}
                        </h4>
                        <p className="text-gray-700">{item.value}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Benefits List */}
                {service.benefits && (
                  <div className="bg-linear-to-br from-green-50 to-emerald-50 border-l-4 border-green-600 p-8 rounded-r-lg mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-5">
                      Beneficios del Proceso
                    </h3>
                    <div className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 shrink-0"></div>
                          <p className="text-gray-700">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Applies/Signals */}
                {(service.applies || service.signals) && (
                  <div className="bg-linear-to-br from-amber-50 to-orange-50 border-l-4 border-amber-600 p-8 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.applies ? 'Aplica en casos de' : 'Señales de Alerta'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {service.applies || service.signals}
                    </p>
                  </div>
                )}

                {/* Divider */}
                {index < services.length - 1 && (
                  <div className="mt-20 border-t border-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-br from-cyan-900 to-cyan-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              ¿Necesita Asesoría Especializada?
            </h2>
            <p className="text-xl text-cyan-100 mb-10">
              Contáctenos hoy y descubra cómo podemos ayudarle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/573001234567?text=Hola,%20necesito%20información%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <WhatsAppIcon className='w-6 h-6' />
                Hablar con un Asesor
              </a>
              <Link
                href="/comunicate-con-grupo-coactiva"
                className="inline-flex items-center justify-center bg-white text-cyan-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-50 transition-all shadow-lg hover:shadow-xl"
              >
                Consulta Gratuita
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}