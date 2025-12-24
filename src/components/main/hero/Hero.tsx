import Link from 'next/link';
import { WhatsAppService } from '@/global/services';
import { CheckCircle } from 'lucide-react';
import { WhatsAppIcon } from '@/global/components';

export const Hero = () => {
  return (
    <section className="relative bg-linear-to-br from-cyan-900 via-cyan-800 to-cyan-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>15 años de experiencia en recuperación de cartera</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Recuperamos su cartera vencida
            <span className="block text-cyan-300 mt-2">
              con eficiencia y respaldo legal
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-cyan-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Soluciones estratégicas en cobro prejurídico, procesos judiciales e insolvencia empresarial. Cobertura nacional.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href={WhatsAppService.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <WhatsAppIcon className='w-6 h-6' />
              Hablar con un Asesor
            </a>
            
            <Link
              href="/servicios-de-cobranzas-en-grupo-coactiva"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-cyan-900 transition-all duration-200 w-full sm:w-auto justify-center"
            >
              Ver Nuestros Servicios
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}