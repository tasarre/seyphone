import React from 'react';
import HistorySection from '../components/about/HistorySection';
import CommitmentSection from '../components/about/CommitmentSection';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
          À Propos de Seyphone
        </h1>
        <HistorySection />
        <CommitmentSection />
      </div>
    </div>
  );
};

export default AboutPage;