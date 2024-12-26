import React from 'react';
import { motion } from 'framer-motion';
import elsabeth from '../assets/el.jpg';
import mohamed from '../assets/mo.jpg';
import eyerus from '../assets/ey.jpg';
import eb from '../assets/eb.png';
import eden from '../assets/eden.jpg';
import etsub from '../assets/etsub.jpg';

const developers = [
  { src: eyerus, name: 'Eyerusalem Bezu' },
  { src: elsabeth, name: 'Elsabeth Zeleke' },
  { src: eden, name: 'Eden Nekr' },
  { src: eb, name: 'Fkreyohannes' },
  { src: etsub, name: 'Etsub Tilahun' },
  { src: mohamed, name: 'Mohamed Hashem' },
];

const Community = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-black via-darkBlue to-black">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Join the Community
        </motion.h2>
        <motion.p
          className="text-lg mb-[50px] text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your ideas and contributions can help make this project even better for everyone!
        </motion.p>

        <div className="overflow-hidden">
          <motion.div
            className="flex animate-scroll"
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{
              duration: 30,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {developers.map((dev, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center mx-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.img
                  src={dev.src}
                  alt={dev.name}
                  className="w-32 h-32 object-cover rounded-full"
                  whileHover={{ rotate: 10 }}
                />
                <p className="mt-2 text-white">{dev.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-16 mb-[50px]">
          <a
            href="https://github.com/Bz14/CI-CD-automation-tool/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white py-2 px-4 rounded-2xl"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;