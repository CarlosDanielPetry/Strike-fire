import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../UI/Section';
import Button from '../UI/Button';

const CTASection: React.FC = () => {
  return (
    <div className="relative bg-secondary py-16">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20" 
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/2116850/pexels-photo-2116850.jpeg")',
          backgroundPosition: 'center',
          filter: 'brightness(40%)'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Pronto para Elevar Suas Habilidades de Tiro ao Próximo Nível?
          </h2>
          
          <p className="text-gray-lighter text-lg mb-8 max-w-2xl mx-auto">
            Junte-se ao Strike Fire hoje e tenha acesso a instalações premium, treinamento especializado
            e uma comunidade de entusiastas dedicados ao tiro.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/membership">
              <Button size="lg">Torne-se Membro</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">Entre em Contato</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;