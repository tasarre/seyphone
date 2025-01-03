import React from 'react';

const Map = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937586!2d2.3470723!3d48.8534951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671e5767a9f93%3A0x1c4282741c7dc937!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1615474696314!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;