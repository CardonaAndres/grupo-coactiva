import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';

const offices = [
  {
    city: 'Medellín',
    address: 'Calle 10 # 43B-40, Oficina 1101',
    phones: ['+57 (4) 444 5555', '+57 300 123 4567'],
  },
  {
    city: 'Bogotá',
    address: 'Carrera 7 # 32-16, Oficina 502',
    phones: ['+57 (1) 444 5555', '+57 310 123 4567'],
  },
];

const quickLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios-de-cobranzas-en-grupo-coactiva', label: 'Servicios' },
  { href: '/quienes-somos-grupo-coactiva', label: 'Nosotros' },
  { href: '/comunicate-con-grupo-coactiva', label: 'Contacto' },
];

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image 
                src="/imgs/logos/logo-full.png"
                alt="Grupo Coactiva S.A.S | Logo"
                width={140}
                height={40}
                className="w-25 sm:w-30 md:w-32.5 h-auto"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed border-l-4 border-cyan-800 pl-4">
              15 años de experiencia en recuperación de cartera y soluciones de insolvencia a nivel nacional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cyan-800 font-bold text-lg mb-6 uppercase tracking-wide">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-cyan-800 hover:pl-2 transition-all duration-200 inline-block font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cyan-800 font-bold text-lg mb-6 uppercase tracking-wide">
              Contacto
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+573001234567"
                className="flex items-center gap-3 text-gray-700 hover:text-cyan-800 transition-colors group"
              >
                <div className="bg-cyan-800 text-white p-2 rounded-lg group-hover:bg-cyan-900 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-medium">+57 300 123 4567</span>
              </a>
              <a
                href="mailto:info@grupocoactivasas.com"
                className="flex items-center gap-3 text-gray-700 hover:text-cyan-800 transition-colors group"
              >
                <div className="bg-cyan-800 text-white p-2 rounded-lg group-hover:bg-cyan-900 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-medium">info@grupocoactivasas.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Offices */}
        <div className="mt-16 pt-12 border-t-2 border-cyan-800">
          <h4 className="text-cyan-800 font-bold text-xl mb-8 text-center uppercase tracking-wide">
            Nuestras Sedes
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-2 border-cyan-800 hover:border-cyan-900 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-800 text-white p-3 rounded-lg shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-cyan-800 font-bold text-lg mb-3">
                      {office.city}
                    </h5>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {office.address}
                    </p>
                    <div className="space-y-2">
                      {office.phones.map((phone, idx) => (
                        <a
                          key={idx}
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="block text-cyan-800 hover:text-cyan-900 text-sm transition-colors font-semibold"
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

      {/* Bottom Bar */}
      <div className="bg-cyan-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="font-medium">
              © {currentYear} Grupo Coactiva S.A.S. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link
                href="/politica-de-privacidad-coactiva"
                className="hover:text-cyan-200 transition-colors font-medium underline-offset-4 hover:underline"
              >
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}