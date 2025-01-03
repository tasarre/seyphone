import React from 'react';

interface PricingSummaryProps {
  formData: {
    name: string;
    phone: string;
    email: string;
    device: string;
    service: string;
  };
  estimatedPrice: string;
}

const getServiceLabel = (serviceType: string): string => {
  switch (serviceType) {
    case 'screen':
      return 'Réparation écran';
    case 'battery':
      return 'Remplacement batterie';
    case 'connectivity':
      return 'Problème de connectique';
    case 'software':
      return 'Problème logiciel';
    case 'water_damage':
      return "Dégâts par l'eau";
    default:
      return '';
  }
};

const PricingSummary: React.FC<PricingSummaryProps> = ({ formData, estimatedPrice }) => {
  const serviceLabel = getServiceLabel(formData.service);

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Récapitulatif</h3>
      <div className="space-y-4">
        {formData.name && (
          <div className="flex justify-between">
            <span className="text-gray-600">Client</span>
            <span className="font-medium">{formData.name}</span>
          </div>
        )}
        
        {formData.device && (
          <div className="flex justify-between">
            <span className="text-gray-600">Appareil</span>
            <span className="font-medium">{formData.device}</span>
          </div>
        )}

        <div className="flex justify-between">
          <span className="text-gray-600">Service sélectionné</span>
          <span className="font-medium">{serviceLabel || '-'}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Prix estimé</span>
          <span className="font-medium">{formData.service ? `À partir de ${estimatedPrice}` : '-'}</span>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <div className="flex justify-between">
            <span className="font-medium">Total estimé</span>
            <span className="font-medium text-blue-600">{formData.service ? `À partir de ${estimatedPrice}` : '-'}</span>
          </div>
          {formData.service && (
            <p className="text-sm text-gray-500 mt-2">
              *Le prix final peut varier en fonction de l'état de l'appareil
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingSummary;