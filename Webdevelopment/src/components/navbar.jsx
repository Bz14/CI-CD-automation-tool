import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='bg-black'>
      <motion.div
        className="container flex justify-between items-center p-5 shadow-lg"
        initial="hidden"
        animate="visible"
        variants={navVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="logo flex items-center">
          <img src={logo} alt="Logo" className="h-16 w-16 rounded-full mr-2" />
          <h1 className="text-2xl font-bold text-white">Easy CI/CD</h1>
        </div>
        <div className="hidden md:flex nav-components">
          <ul className="flex list-none p-0">
            <li className="nav-component mx-4">
              <a href="#landing" className="text-white hover:text-blue-300 transition duration-300 text-xl">Home</a>
            </li>
            <li className="nav-component mx-4">
              <a href="#howToUse" className="text-white hover:text-blue-300 transition duration-300 text-xl">How to use</a>
            </li>
            <li className="nav-component mx-4">
              <a href="https://github.com/Bz14/CI-CD-automation-tool/blob/main/CONTRIBUTING.md"
            target="_blank" className="text-white hover:text-blue-300 transition duration-300 text-xl">Contribute</a>
            </li>
            <li className="nav-component mx-4">
              <a href="#community" className="text-white hover:text-blue-300 transition duration-300 text-xl">Community</a>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white focus:outline-none"
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
        {isOpen && (
          <div className="absolute top-16 right-0 w-full bg-black md:hidden">
            <ul className="flex flex-col items-center list-none p-5">
              <li className="nav-component">
                <a href="#landing" className="text-white hover:text-blue-300 transition duration-300">Home</a>
              </li>
              <li className="nav-component">
                <a href="#" className="text-white hover:text-blue-300 transition duration-300">How to use</a>
              </li>
              <li className="nav-component">
                <a href="#" className="text-white hover:text-blue-300 transition duration-300">Contribute</a>
              </li>
              <li className="nav-component">
                <a href="#" className="text-white hover:text-blue-300 transition duration-300">Community</a>
              </li>
            </ul>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Navbar;