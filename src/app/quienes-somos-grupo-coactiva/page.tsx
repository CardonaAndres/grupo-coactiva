import Image from 'next/image';
import { WhatsAppService } from '@/global/services';
import { Award, Target, Shield, Users } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Respaldo Jurídico',
    description: 'Asesoría legal estratégica, personalizada y efectiva en cada caso.',
  },
  {
    icon: Target,
    title: 'Enfoque Estratégico',
    description: 'Combinamos estrategia legal, negociación y eficiencia para resultados óptimos.',
  },
  {
    icon: Users,
    title: 'Equipo Especializado',
    description: '18 ejecutivos y 7 abogados especializados en recuperación y procesos judiciales.',
  },
  {
    icon: Award,
    title: '15 Años de Experiencia',
    description: 'Líderes a nivel nacional en recuperación de cartera e insolvencia.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-cyan-900 via-cyan-800 to-cyan-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              ¿Quiénes Somos?
            </h1>
            <p className="text-lg text-cyan-100">
              Líderes en recuperación de cartera y soluciones de insolvencia con 15 años de experiencia
            </p>
          </div>
        </div>
      </section>

      {/* Leader Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="relative h-96 md:h-full bg-gray-200">
                  <Image
                    src="/imgs/people/esteban-restrepo.png"
                    alt="Esteban Restrepo - Director Jurídico Grupo Coactiva"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Esteban Restrepo
                  </h2>
                  <p className="text-cyan-700 font-semibold mb-6">
                    Socio-Fundador y Director Jurídico
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Con <strong>15 años de experiencia</strong> en el manejo integral del <strong>cobro de cartera empresarial</strong>, procesos <strong>prejurídicos y jurídicos</strong>, e <strong>insolvencias de persona natural y jurídica</strong>.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Su enfoque combina <strong>estrategia legal, negociación y eficiencia</strong>, permitiendo a empresas y personas <strong>recuperar su estabilidad financiera</strong> con un <strong>respaldo jurídico real y confiable</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Grupo Coactiva S.A.S
              </h2>
              <div className="w-20 h-1 bg-cyan-700 mx-auto"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                En Grupo Coactiva S.A.S. acompañamos a empresas y personas en la <strong>solución de sus obligaciones financieras</strong>, brindando <strong>asesoría legal estratégica, personalizada y efectiva</strong>, orientada a la <strong>protección del patrimonio</strong> y la <strong>recuperación de la estabilidad económica</strong>.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Trabajamos con <strong>rigor, compromiso y responsabilidad</strong>, convencidos de que <strong>siempre existe una solución legal adecuada para cada situación</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nuestros Valores
              </h2>
              <p className="text-gray-600">
                Comprometidos con la excelencia y el servicio personalizado
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
                  >
                    <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-cyan-700" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para recuperar su estabilidad financiera?
            </h2>
            <p className="text-gray-600 mb-8">
              Contáctenos hoy y descubra cómo podemos ayudarle con soluciones legales efectivas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WhatsAppService.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Hablar con un Asesor
              </a>
              <a
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-cyan-700 hover:bg-cyan-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
              >
                Solicitar Consulta
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}