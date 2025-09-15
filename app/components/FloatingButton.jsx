'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, Phone, MessageSquare, X } from 'lucide-react';

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const buttonVariants = {
    hidden: { 
      scale: 0, 
      opacity: 0,
      y: 20 
    },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        delay: i * 0.1,
      }
    }),
    hover: {
      scale: 1.1,
      boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const mainButtonVariants = {
    open: { 
      rotate: 180,
      scale: 1.1,
      backgroundColor: "#16a34a"
    },
    closed: { 
      rotate: 0,
      scale: 1,
      backgroundColor: "#22c55e"
    }
  };

  const iconVariants = {
    open: { rotate: 90, scale: 1.2 },
    closed: { rotate: 0, scale: 1 }
  };

  const menuItems = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:contact@example.com',
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      href: 'https://wa.me/1234567890',
    },
    {
      icon: Phone,
      label: 'Phone',
      href: 'tel:+1234567890',
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 flex flex-col items-center space-y-3 mb-2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.label}
                custom={index}
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="relative"
              >
                <a
                  href={item.href}
                  target={item.label === 'WhatsApp' ? '_blank' : undefined}
                  rel={item.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                  className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30 transition-colors duration-200 group"
                  aria-label={item.label}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="absolute right-full mr-2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {item.label}
                  </span>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Chat Button */}
      <motion.button
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-colors duration-200"
        onClick={toggleMenu}
        variants={mainButtonVariants}
        animate={isOpen ? "open" : "closed"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat menu" : "Open chat menu"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="close-icon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat-icon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FloatingChatButton;