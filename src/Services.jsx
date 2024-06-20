// Services.jsx
// import beachHouseInterior1 from './components/beachHouseInterior1.jpg'
// import beachHouseInterior2 from './components/beachHouseInterior2.jpg'
import React from 'react';
import ServiceCard from './ServiceCard'; // Assuming a ServiceCard component will be used for each service

const Services = () => {
  // Example data for services (you can replace with your actual data)
  const services = [
    {
      id: 1,
      title: 'Service 1',
      description: 'Description for Service 1',
      image: '/beachHouseInterior1.jpg', // Correct path if the image is in public folder
    },
    {
      id: 2,
      title: 'Service 2',
      description: 'Description for Service 2',
      image: '/beachHouseInterior2.jpg', // Correct path if the image is in public folder
    },
  ];
  

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-2xl font-bold text-center mb-4">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;


