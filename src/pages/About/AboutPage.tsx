import React, { useEffect } from 'react';
import Section from '../../components/UI/Section';
import { Shield, Award, Target, Users, Clock, MapPin } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Strike Fire | About Us';
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Segurança",
      description: "A segurança é nossa maior prioridade. Implementamos protocolos rigorosos e treinamos todos os membros sobre manuseio e procedimentos adequados."
    },
    {
      icon: <Award className="w-10 h-10 text-primary" />,
      title: "Excelência",
      description: "Buscamos a excelência em todos os aspectos do nosso clube, desde a manutenção das instalações até a qualidade do ensino."
    },
    {
      icon: <Target className="w-10 h-10 text-primary" />,
      title: "Precisão",
      description: "Promovemos precisão e desenvolvimento de habilidades por meio de treinamento dedicado e oportunidades de prática."
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "comunidade",
      description: "Nós promovemos uma comunidade solidária de entusiastas que compartilham conhecimento e experiência."
    }
  ];

  return (
    <>
      {/* Banner */}
      <div className="relative h-[40vh] min-h-[300px] w-full bg-secondary overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/2116850/pexels-photo-2116850.jpeg")',
            backgroundPosition: 'center',
            filter: 'brightness(40%)'
          }}
        />
        
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">Sobre nós</h1>
            <p className="text-gray-lighter mt-4 max-w-xl mx-auto">
              Leia mais sobre nossa história, valores e visão.
            </p>
          </div>
        </div>
      </div>

      {/* Nossa história */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6">Nossa história</h2>
            <p className="text-gray-medium mb-4">
              Fundado em 2010, o Strike Fire Shooting Club começou como um pequeno grupo de entusiastas do tiro que queriam criar
              uma comunidade dedicada ao manuseio responsável de armas de fogo e à pontaria.
            </p>
            <p className="text-gray-medium mb-4">
              O que começou como um campo de tiro modesto com instalações básicas cresceu e se tornou um dos principais clubes de tiro da região,
              oferecendo equipamentos de última geração, instrução profissional e uma comunidade vibrante de membros.
            </p>
            <p className="text-gray-medium">
              Ao longo dos anos, expandimos nossas instalações para incluir diversos campos de tiro internos e externos, áreas de treinamento
              especializadas e um clube confortável. Nossa equipe de instrutores cresceu e agora inclui profissionais certificados com experiência
              em tiro militar, policial e competitivo.
            </p>
          </div>
          <div>
            <img 
              src="https://images.pexels.com/photos/9509145/pexels-photo-9509145.jpeg" 
              alt="Strike Fire shooting range" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </Section>
      
      {/* Nossos Valores */}
      <Section bgColor="bg-gray-lighter">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold mb-4">Nossos valores</h2>
          <p className="text-gray-medium max-w-2xl mx-auto">
            Na Strike Fire, somos guiados por quatro valores fundamentais que norteiam tudo o que fazemos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="font-heading font-bold text-xl mb-3">{value.title}</h3>
              <p className="text-gray-medium">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Nossas instalações */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold mb-4">Nossas Instalações</h2>
          <p className="text-gray-medium max-w-2xl mx-auto">
            A Strike Fire oferece instalações modernas e bem conservadas, projetadas para segurança e ótima experiência de tiro.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-secondary text-white rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/8108097/pexels-photo-8108097.jpeg" 
              alt="Indoor Shooting Range" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-heading font-bold text-xl mb-3">Faixa Interna</h3>
              <p className="text-gray-light mb-4">
                Nosso campo de tiro interno com clima controlado conta com 20 pistas com sistemas de alvos automatizados e ventilação avançada.
              </p>
              <ul className="space-y-2 text-gray-light">
                <li className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-primary" />
                  <span>Aberto 7 dias por semana, das 14h às 22h</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  <span>Edifício principal, térreo</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-secondary text-white rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/934718/pexels-photo-934718.jpeg" 
              alt="Outdoor Shooting Range" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-heading font-bold text-xl mb-3">Espaço ao ar livre</h3>
              <p className="text-gray-light mb-4">
                Nosso amplo campo de tiro ao ar livre oferece diversas estações de tiro para rifles e prática de longo alcance.
              </p>
              <ul className="space-y-2 text-gray-light">
                <li className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-primary" />
                  <span>Aberto de quarta a domingo, das 14h às 18h</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  <span>Propriedade Leste</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-secondary text-white rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/5794799/pexels-photo-5794799.jpeg" 
              alt="Training Center" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-heading font-bold text-xl mb-3">Centro de Treinamento</h3>
              <p className="text-gray-light mb-4">
                Nosso centro de treinamento dedicado inclui salas de aula e áreas de simulação para instrução abrangente.
              </p>
              <ul className="space-y-2 text-gray-light">
                <li className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-primary" />
                  <span>Aberto para aulas agendadas</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  <span>Prédio principal, segundo andar</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Nossa equipe */}
      <Section bgColor="bg-gray-lighter">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold mb-4">Conheça nossa equipe</h2>
          <p className="text-gray-medium max-w-2xl mx-auto">
            Nossa experiente equipe de profissionais se dedica a fornecer instruções e serviços excepcionais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Robert Wilson",
              title: "Fundador e chefe de instrutores",
              image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
              bio: "Militar com mais de 10 anos de experiência em treinamento de tiro."
            },
            {
              name: "Emma Davis",
              title: "Gerente de Operações",
              image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
              bio: "supervisora de operações diárias e responsávelpela segurança do clube."
            },
            {
              name: "James Martinez",
              title: "Instrutor de Tiro",
              image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
              bio: "Campeão nacional de tiro e instrutor certificado."
            },
            {
              name: "Sophia Chen",
              title: "Gerente de Comunidade",
              image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
              bio: "Responsável por eventos e atividades sociais do clube."
            }
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl">{member.name}</h3>
                <p className="text-primary mb-3">{member.title}</p>
                <p className="text-gray-medium">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default AboutPage;