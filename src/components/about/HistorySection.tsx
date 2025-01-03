import React from 'react';

const HistorySection = () => {
  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Notre Histoire</h2>
        <div className="prose prose-blue mx-auto">
          <p className="text-gray-600 leading-relaxed">
            Fondé en 2015, Seyphone est né de la passion pour la technologie et d'un constat simple : 
            le besoin d'un service de réparation mobile professionnel, transparent et fiable. 
            Fort de 10 années d'expérience dans la réparation de 
            smartphones, a décidé de créer un service qui place la qualité et la satisfaction client 
            au cœur de ses priorités.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Au fil des années, nous avons développementé une expertise pointue dans la réparation des 
            appareils Android, formé une équipe de techniciens qualifiés et établi des partenariats 
            solides avec les meilleurs fournisseurs de pièces détachées.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;