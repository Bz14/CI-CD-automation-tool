import React from 'react';
import { motion } from 'framer-motion';
import elsabeth from '../assets/el.jpg';
import mohamed from '../assets/mo.jpg';
import eyerus from '../assets/ey.jpg';
import eb from '../assets/eb.png';
import eden from '../assets/eden.jpg';
import etsub from '../assets/etsub.jpg';

const Community = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-black via-darkBlue to-black">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Join the Community
        </motion.h2>
        <motion.p
          className="text-lg mb-6 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your ideas and contributions can help make this project even better for everyone!
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            { src: eyerus, name: 'Eyerusalem Bezu' },
            { src: elsabeth, name: 'Elsabeth Zeleke' },
            { src: eden, name: 'Eden Nekr' },
            { src: eb, name: 'Fkreyohannes' },
            { src: etsub, name: 'Etsub Tilahun' },
          ].map((dev, index) => (
            <div key={index} className="flex flex-col items-center">
              <motion.img
                src={dev.src}
                alt={dev.name}
                className="w-32 h-32 object-cover rounded-full"
                initial={{ x: -50 }} // Start slightly left
                animate={{ x: 0 }} // Move to original position
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 10,
                  delay: index * 0.1, // Staggered effect
                }}
              />
              <p className="mt-2 text-white">{dev.name}</p>
            </div>
          ))}
        </div>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="/join" className="bg-white text-gray-500 py-2 px-4 rounded">
            Get Involved
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;