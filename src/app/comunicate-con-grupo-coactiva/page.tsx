import { MapPin, Phone, Mail } from 'lucide-react';

const offices = [
  {
    city: 'Medellín',
    address: 'Calle 10 # 43B-40, Oficina 1101',
    phones: ['+57 (4) 444 5555', '+57 300 123 4567'],
    email: 'medellin@grupocoactivasas.com',
  },
  {
    city: 'Bogotá',
    address: 'Carrera 7 # 32-16, Oficina 502',
    phones: ['+57 (1) 444 5555', '+57 310 123 4567'],
    email: 'bogota@grupocoactivasas.com',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-cyan-900 via-cyan-800 to-cyan-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Contáctenos
            </h1>
            <p className="text-lg text-cyan-100">
              Estamos listos para ayudarle con sus necesidades de recuperación de cartera e insolvencia
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Solicite una Consulta Gratuita
              </h2>
              <form action="/api/contact" method="POST" className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition"
                      placeholder="Juan Pérez"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition"
                      placeholder="Nombre de su empresa"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition"
                      placeholder="correo@ejemplo.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition"
                      placeholder="+57 300 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition resize-none"
                    placeholder="Cuéntenos brevemente sobre su situación..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-4 rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  Enviar Consulta
                </button>

                <p className="text-xs text-gray-500 text-center">
                  * Campos obligatorios. Sus datos están protegidos según nuestra política de privacidad.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Info Cards */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-cyan-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Teléfono</h4>
                      <a href="tel:+573001234567" className="text-gray-600 hover:text-cyan-700 transition-colors">
                        +57 300 123 4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-cyan-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a href="mailto:info@grupocoactivasas.com" className="text-gray-600 hover:text-cyan-700 transition-colors">
                        info@grupocoactivasas.com
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Offices */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Nuestras Sedes
                </h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="pb-6 border-b border-gray-200 last:border-0 last:pb-0">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-cyan-700 shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{office.city}</h4>
                          <p className="text-gray-600 text-sm mb-2">{office.address}</p>
                          <div className="space-y-1">
                            {office.phones.map((phone, idx) => (
                              <a
                                key={idx}
                                href={`tel:${phone.replace(/\s/g, '')}`}
                                className="block text-sm text-cyan-700 hover:text-cyan-800 transition-colors"
                              >
                                {phone}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}