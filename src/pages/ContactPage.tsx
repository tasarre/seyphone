import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import Map from '../components/contact/Map';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Contactez-nous
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <ContactInfo />
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;