import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  animate?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  animate = true,
}) => {
  const containerClass = `space-y-2 ${centered ? 'text-center' : ''} ${className}`;
  
  const titleClass = `font-serif text-3xl md:text-4xl font-semibold tracking-tight ${titleClassName}`;
  
  const subtitleClass = `text-lg text-gray-600 max-w-3xl ${
    centered ? 'mx-auto' : ''
  } ${subtitleClassName}`;

  if (animate) {
    return (
      <div className={containerClass}>
        <motion.h2 
          className={titleClass}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p 
            className={subtitleClass}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    );
  }
  
  return (
    <div className={containerClass}>
      <h2 className={titleClass}>{title}</h2>
      {subtitle && <p className={subtitleClass}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;