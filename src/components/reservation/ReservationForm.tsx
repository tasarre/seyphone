import React, { useState } from 'react';
import PricingSummary from './PricingSummary';

const getEstimatedPrice = (serviceType: string): string => {
  switch (serviceType) {
    case 'screen':
      return '69€';
    case 'battery':
      return '39€';
    case 'connectivity':
      return '49€';
    case 'software':
      return '29€';
    case 'water_damage':
      return '59€';
    default:
      return '0€';
  }
};

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    device: '',
    service: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ajoutez ici la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
  };

  const estimatedPrice = getEstimatedPrice(formData.service);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nom et prénom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Numéro de téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Adresse e-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="device" className="block text-sm font-medium text-gray-700">
            Modèle d'appareil
          </label>
          <input
            type="text"
            id="device"
            name="device"
            value={formData.device}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700">
            Type de réparation
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="">Sélectionnez un service</option>
            <option value="screen">Réparation écran</option>
            <option value="battery">Remplacement batterie</option>
            <option value="connectivity">Problème de connectique</option>
            <option value="software">Problème logiciel</option>
            <option value="water_damage">Dégats par l'eau</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Réserver
        </button>
      </form>

      <div className="sticky top-6">
        <PricingSummary formData={formData} estimatedPrice={estimatedPrice} />
      </div>
    </div>
  );
};

export default ReservationForm;