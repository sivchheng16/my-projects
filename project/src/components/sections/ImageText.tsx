import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

interface ImageTextProps {
  title: string;
  description: string | React.ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  buttonText?: string;
  buttonLink?: string;
  buttonVariant?: 'primary' | 'secondary' | 'outline' | 'text';
}

const ImageText: React.FC<ImageTextProps> = ({
  title,
  description,
  image,
  imageAlt,
  reverse = false,
  buttonText,
  buttonLink,
  buttonVariant = 'primary',
}) => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className={`grid grid-cols-1 ${reverse ? 'md:grid-cols-[55%_45%]' : 'md:grid-cols-[45%_55%]'} gap-8 md:gap-12 items-center`}>
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className={`${reverse ? 'md:order-2' : ''}`}
        >
          <div className="relative overflow-hidden rounded-lg shadow-xl">
            <img 
              src={image} 
              alt={imageAlt} 
              className="w-full h-auto object-cover" 
            />
            <div className="absolute inset-0 bg-forest-900/10 mix-blend-multiply"></div>
          </div>
        </motion.div>
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className={`${reverse ? 'md:order-1' : ''}`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-forest-900 mb-4">
            {title}
          </h2>
          
          <div className="text-gray-700 space-y-4 mb-6">
            {typeof description === 'string' ? (
              <p>{description}</p>
            ) : (
              description
            )}
          </div>
          
          {buttonText && buttonLink && (
            <Button 
              to={buttonLink} 
              variant={buttonVariant} 
              size="md"
              className="mt-2"
            >
              {buttonText}
            </Button>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ImageText;