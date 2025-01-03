import React from 'react';
import { Shield, Clock, Leaf } from 'lucide-react';

const CommitmentSection = () => {
  const commitments = [
    {
      icon: Shield,
      title: "Qualité garantie",
      description: "Pièces d'origine et garantie de 6 mois sur toutes nos réparations"
    },
    {
      icon: Clock,
      title: "Rapidité",
      description: "La plupart des réparations effectuées en moins d'une heure"
    },
    {
      icon: Leaf,
      title: "Éco-responsable",
      description: "Engagement dans le recyclage et la réduction des déchets électroniques"
    }
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Nos Engagements</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {commitments.map((commitment) => (
          <div key={commitment.title} className="text-center">
            <commitment.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{commitment.title}</h3>
            <p className="text-gray-600">{commitment.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommitmentSection;