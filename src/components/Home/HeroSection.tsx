import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import { HOME_IMAGES } from '../../constants/images';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] w-full bg-secondary overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url("${HOME_IMAGES.HERO_BG}")`,
          backgroundPosition: 'center',
          filter: 'brightness(40%)'
        }}
      />
      
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="max-w-3xl text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
            PRECISÃO. DISCIPLINA. <span className="text-primary">EXCELÊNCIA.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-lighter mb-8 max-w-2xl mx-auto">
            Junte-se ao Clube de Tiro Strike Fire e experimente treinamento de classe mundial, 
            instalações modernas e uma comunidade dedicada ao esporte de tiro.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/membership">
              <Button size="lg">Torne-se Membro</Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline" size="lg">Explorar Cursos</Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;