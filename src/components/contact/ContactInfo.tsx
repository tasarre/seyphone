import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Informations de contact</h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <Phone className="h-5 w-5 text-blue-600 mr-3" />
          <span>01 23 45 67 89</span>
        </div>
        <div className="flex items-center">
          <Mail className="h-5 w-5 text-blue-600 mr-3" />
          <span>contact@seyphone.fr</span>
        </div>
        <div className="flex items-center">
          <MapPin className="h-5 w-5 text-blue-600 mr-3" />
          <span>123 rue de la Réparation, Paris</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-blue-600 mr-3" />
          <div>
            <p>Lun - Ven: 9h - 19h</p>
            <p>Sam: 10h - 18h</p>
            <p>Dim: Fermé</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;