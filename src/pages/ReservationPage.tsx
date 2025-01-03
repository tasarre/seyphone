import React from 'react';
import ReservationForm from '../components/reservation/ReservationForm';

const ReservationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
          Réserver une Réparation
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <ReservationForm />
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;