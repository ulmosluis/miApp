// ServiceCard.jsx

import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="flex flex-col items-center bg-white p-4 shadow-md">
      <img src={service.image} alt={service.title} className="rounded-lg mb-4" />
      <h3 className="text-xl font-bold">{service.title}</h3>
      <p className="text-center">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
