import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                <span>01 23 45 67 89</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@seyphone.fr</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                <span>123 rue de la Réparation, Paris</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Nos services
                </a>
              </li>
              <li>
                <a href="/reservation" className="text-gray-400 hover:text-white transition-colors">
                  Réservation
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Horaires d'ouverture</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Lundi - Vendredi: 9h - 19h</li>
              <li>Samedi: 10h - 18h</li>
              <li>Dimanche: Fermé</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Seyphone. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;