import React from 'react';
import ServicesList from '../components/services/ServicesList';

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Nos Services
        </h1>
        <p className="text-lg text-gray-600">
          Découvrez notre gamme complète de services pour prendre soin de vos appareils
        </p>
      </div>
      <div className="mt-8">
        <ServicesList />
      </div>
    </div>
  );
};

export default ServicesPage;