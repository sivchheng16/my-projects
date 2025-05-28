import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
  delay?: number;
  image?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  animate = false,
  delay = 0,
  image,
  hoverEffect = true,
}) => {
  const cardContent = (
    <div 
      className={`bg-white rounded-lg overflow-hidden shadow-md ${
        hoverEffect ? 'transition-all duration-300 hover:shadow-lg' : ''
      } ${className}`}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt="" 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
          />
        </div>
      )}
      <div className="p-5">{children}</div>
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: delay * 0.1 }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
};

export default Card;