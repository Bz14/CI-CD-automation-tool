import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Step 1: Installation',
    description: 'Use the following command to install the CI/CD Automation Tool:',
    code: 'npx ci-tool init',
    icon: '🔧',
  },
  {
    title: 'Step 2: Generate Configuration',
    description: 'Run the command to generate your CI/CD workflow files:',
    code: 'ci-tool generate',
    icon: '⚙️',
  },
  {
    title: 'Step 3: Customize Your Pipeline',
    description: 'Specify options like Node.js version and package manager:',
    icon: '🛠️',
  },
  {
    title: 'Step 4: Validate Your Setup',
    description: 'Optionally validate your configuration before deployment.',
    icon: '✅',
  },
];

const GettingStarted = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-black via-darkBlue to-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-6 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How To Use
        </motion.h2>
        <motion.p
          className="text-center mb-8 text-gray-100 text-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Follow these simple steps to set up your CI/CD pipeline and streamline your development process.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex-1 md:flex-2 items-center mb-4">
                <span className="text-2xl mr-2">{step.icon}</span>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              </div>
              <p className='text-white'>{step.description}</p>
              {step.code && (
                <pre className="bg-gray-200 p-2 rounded mt-2">
                  <code>{step.code}</code>
                </pre>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: steps.length * 0.2 }}
        >
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Start Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default GettingStarted;