import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Automated Workflow Generation',
      description: 'Eliminate manual configurations with our intelligent automation that generates workflows tailored to your project needs.',
      icon: '🔄', // Placeholder for an icon
    },
    {
      title: 'Framework Agnostic',
      description: 'Whether you’re using React, Node.js, or any other framework, our tool supports all major technologies to ensure flexibility.',
      icon: '🌐', // Placeholder for an icon
    },
    {
      title: 'Predefined Templates',
      description: 'Access a library of predefined templates that adhere to industry best practices, saving you time and effort.',
      icon: '📋', // Placeholder for an icon
    },
    {
      title: 'User-Friendly Interface',
      description: 'Designed with developers in mind, our intuitive interface simplifies the CI/CD setup process, making it accessible for everyone.',
      icon: '👩‍💻', // Placeholder for an icon
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black via-darkBlue to-black text-white">
      <h2 className="text-4xl font-bold text-center mb-8">Key Features</h2>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  justify-center">
        {features.map((feature, index) => (
          <div key={index} className="items-center max-w-xs m-4 p-5 bg-gray-800 rounded-lg shadow-lg">
            <div className="text-4xl text-center mb-4">{feature.icon}</div>
            <h3 className="items-center text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;