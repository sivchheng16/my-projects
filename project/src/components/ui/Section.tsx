import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'alt' | 'dark' | 'image';
  backgroundImage?: string;
  spacing?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'default',
  backgroundImage,
  spacing = 'lg',
}) => {
  const bgStyles = {
    default: 'bg-cream',
    alt: 'bg-forest-50',
    dark: 'bg-forest-900 text-cream',
    image: `bg-cover bg-center bg-no-repeat ${backgroundImage ? '' : 'bg-gray-200'}`,
  };

  const spacingStyles = {
    none: '',
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-24 md:py-32',
  };

  const sectionStyle = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {};

  return (
    <section
      id={id}
      className={`${bgStyles[background]} ${spacingStyles[spacing]} ${className}`}
      style={sectionStyle}
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;