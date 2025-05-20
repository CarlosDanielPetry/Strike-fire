import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="relative">
        <span className="text-primary font-heading font-bold text-3xl">S</span>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-sm transform rotate-45" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-heading font-extrabold text-xl tracking-wider text-white">STRIKE</span>
        <span className="font-heading font-extrabold text-xl tracking-wider text-white">FIRE</span>
      </div>
    </div>
  );
};

export default Logo;