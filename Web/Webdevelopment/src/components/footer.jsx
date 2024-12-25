import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-800 text-white p-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          <div className="text-center">
            <h3 className="font-bold mb-2">Contact</h3>
            <a href="" className="text-blue-400 hover:underline block">Contact Us</a>
            <a href="" className="text-blue-400 hover:underline block">GitHub</a>
            <a href="" className="text-blue-400 hover:underline block">Medium</a>
          </div>

          <div className="text-center">
            <h3 className="font-bold mb-2">Documentation</h3>
            <a href="" className="text-blue-400 hover:underline block">Contribution Guidline</a>
            <a href="" className="text-blue-400 hover:underline block">README</a>
            <a href="" className="text-blue-400 hover:underline block"></a>
          </div>

          <div className="text-center">
            <h3 className="font-bold mb-2">How to Use</h3>
            <a href="" className="text-blue-400 hover:underline block">Steps</a>
            <a href="" className="text-blue-400 hover:underline block">Examples</a>
            <a href="" className="text-blue-400 hover:underline block"></a>
          </div>
        </div>

        <div className="text-center">
          <p className="mb-2">© {new Date().getFullYear()} Under MIT License.</p>
          <p>
            <a href="/license" className="text-blue-400 hover:underline">View License</a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;