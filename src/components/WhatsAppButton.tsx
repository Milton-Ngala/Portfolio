'use client';

import { motion } from 'framer-motion';
import { WhatsAppOutlined } from '@ant-design/icons';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi Milton, I'd like to discuss a project with you.");
    window.open(`https://wa.me/254741760092?text=${message}`, '_blank');
  };

  return (
    <motion.button
      onClick={openWhatsApp}
      aria-label="Chat on WhatsApp"
      className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <WhatsAppOutlined style={{ fontSize: 24 }} />
    </motion.button>
  );
};

export default WhatsAppButton;
