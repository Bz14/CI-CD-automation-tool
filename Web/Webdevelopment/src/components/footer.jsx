import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const columns = [
    {
      title: 'Contact',
      links: [
        { href: '', label: 'LinkedIn' },
        { href: 'https://github.com/Bz14/CI-CD-automation-tool', label: 'GitHub' },
        { href: '', label: 'Medium' },
      ],
    },
    {
      title: 'Documentation',
      links: [
        { href: 'https://github.com/Bz14/CI-CD-automation-tool/blob/main/CONTRIBUTING.md', label: 'Contribution Guideline' },
        { href: 'https://github.com/Bz14/CI-CD-automation-tool/blob/main/README.md', label: 'README' },
      ],
    },
    {
      title: 'How to Use',
      links: [
        { href: '#howToUse', label: 'Steps' },
        { href: '#howToUse', label: 'Examples' },
      ],
    },
  ];

  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.3, 
      },
    }),
  };

  return (
    <motion.footer
      className="bg-gray-800 text-white p-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          {columns.map((column, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={columnVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <h3 className="font-bold mb-2 text-lg">{column.title}</h3>
              {column.links.map((link, i) => (
                <a key={i} href={link.href} className="text-blue-400 hover:underline block mb-1">
                  {link.label}
                </a>
              ))}
            </motion.div>
          ))}
        </div>

        <hr className="my-6 border-gray-600 " />

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: columns.length * 0.3 + 0.3 }} 
        >
          <p className="mb-2">© {new Date().getFullYear()} Under MIT License.</p>
          <p>
            <a href="https://github.com/Bz14/CI-CD-automation-tool/blob/main/LICENSE" className="text-blue-400 hover:underline">View License</a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;