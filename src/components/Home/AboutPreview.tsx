import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../UI/Section';
import Button from '../UI/Button';
import { Award, Shield, Target, Users } from 'lucide-react';

const AboutPreview: React.FC = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Instrução Especializada",
      description: "Aprenda com instrutores certificados com anos de experiência profissional."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Segurança em Primeiro Lugar",
      description: "Nossa principal prioridade é garantir um ambiente seguro para todos os membros e visitantes."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Treinamento Competitivo",
      description: "Programas de treinamento especializados para atiradores competitivos."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Comunidade",
      description: "Junte-se a uma comunidade apaixonada de entusiastas e profissionais do tiro."
    }
  ];

  return (
    <Section bgColor="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary rounded-lg opacity-20"></div>
            <img 
              src="https://images.pexels.com/photos/9509145/pexels-photo-9509145.jpeg" 
              alt="Estande de tiro" 
              className="rounded-lg shadow-lg relative z-10 w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-lg opacity-20"></div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Sobre o Clube de Tiro Strike Fire
          </h2>
          
          <p className="text-gray-medium mb-6">
            Fundado em 2010, o Strike Fire cresceu para se tornar um dos principais
            clubes de tiro da região, oferecendo instalações modernas e programas
            de treinamento abrangentes para atiradores de todos os níveis.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-start">
                <div className="mb-3">{feature.icon}</div>
                <h3 className="font-heading font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-medium">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <Link to="/about">
            <Button>Saiba Mais Sobre Nós</Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default AboutPreview;