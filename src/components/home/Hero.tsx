import React from 'react';
import { Wrench, Shield, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Votre solution de réparation</span>
            <span className="block text-yellow-400">mobile Android</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Experts en réparation de smartphones Android. Service rapide, professionnel et garanti.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="/services"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10 transition-colors"
              >
                Choisissez votre réparation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="relative bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Expertise technique</h3>
              <p className="mt-2 text-base text-gray-500">
                Techniciens qualifiés pour tous types de réparations Android
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Garantie assurée</h3>
              <p className="mt-2 text-base text-gray-500">
                Toutes nos réparations sont garanties 6 mois
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Service rapide</h3>
              <p className="mt-2 text-base text-gray-500">
                La plupart des réparations en moins d'une heure
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;