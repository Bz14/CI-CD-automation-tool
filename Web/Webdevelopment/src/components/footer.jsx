import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-800 text-white py-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          {/* Contact Column */}
          <div className="text-center">
            <h3 className="font-bold mb-2">Contact</h3>
            <a href="mailto:contact@example.com" className="text-blue-400 hover:underline block">Contact Us</a>
            <a href="https://github.com/yourusername/yourproject" className="text-blue-400 hover:underline block">GitHub</a>
            <a href="https://twitter.com/yourproject" className="text-blue-400 hover:underline block">Twitter</a>
          </div>

          {/* Documentation Column */}
          <div className="text-center">
            <h3 className="font-bold mb-2">Documentation</h3>
            <a href="/docs" className="text-blue-400 hover:underline block">Getting Started</a>
            <a href="/api" className="text-blue-400 hover:underline block">API Reference</a>
            <a href="/faq" className="text-blue-400 hover:underline block">FAQ</a>
          </div>

          {/* Usage Column */}
          <div className="text-center">
            <h3 className="font-bold mb-2">How to Use</h3>
            <a href="/tutorials" className="text-blue-400 hover:underline block">Tutorials</a>
            <a href="/examples" className="text-blue-400 hover:underline block">Examples</a>
            <a href="/blog" className="text-blue-400 hover:underline block">Blog</a>
          </div>
        </div>

        <div className="text-center">
          <p className="mb-2">© {new Date().getFullYear()} Your Project Name. Under MIT License.</p>
          <p>
            <a href="/license" className="text-blue-400 hover:underline">View License</a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;