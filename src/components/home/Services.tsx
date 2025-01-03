import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../../data/services';

const Services = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos services de réparation
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Des solutions professionnelles pour tous vos problèmes de smartphone
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/services"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Voir tous nos services
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;