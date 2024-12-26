import React from 'react';
import { motion } from 'framer-motion';

const Landing = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id='#landing' className='bg-gradient-to-b from-black via-darkBlue to-black'>
    <div className="container flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-black via-darkBlue to-black text-white text-center p-5">
      <motion.h3
        className="text-4xl md:text-7xl font-bold"
        initial="hidden"
        animate="visible"
        variants={headingVariants}
        transition={{ duration: 0.5 }}
      >
        Effortless CI/CD Automation for Developers
      </motion.h3>
      <motion.p
        className="mt-4 text-lg md:text-2xl max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={paragraphVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Transform the way you build and deploy software with our intuitive tool that simplifies CI/CD workflows.
      </motion.p>
      <a
            href="https://github.com/Bz14/CI-CD-automation-tool/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white py-2 px-4 rounded-2xl mt-5"
          >
            Get Involved
          </a>
    </div>
    </div>
  );
};

export default Landing;