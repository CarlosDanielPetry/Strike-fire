import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  containerClassName?: string;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  bgColor = 'bg-white',
  containerClassName = '' 
}) => {
  return (
    <section className={`py-12 md:py-16 ${bgColor} ${className}`}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
};

export default Section;