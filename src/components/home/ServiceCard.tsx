import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import ServiceModal from '../services/ServiceModal';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  longDescription?: string;
}

const ServiceCard = ({ icon: Icon, title, description, price, longDescription }: ServiceCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const shadowStyle = isHovered
    ? '0 10px 15px 3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
    : '0 4px 6px 2px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)';

  return (
    <>
      <div 
        className="relative group bg-white p-6 rounded-lg cursor-pointer transition-all duration-300 ease-in-out"
        style={{
          boxShadow: shadowStyle
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        <div>
          <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-600 ring-4 ring-white">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-medium">
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-500">{description}</p>
          <p className="mt-2 text-sm font-semibold text-blue-600">{price}</p>
        </div>
      </div>

      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        icon={Icon}
        title={title}
        description={description}
        price={price}
        longDescription={longDescription}
      />
    </>
  );
};

export default ServiceCard;