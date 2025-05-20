import React, { useState, useEffect } from 'react';
import Section from '../UI/Section';
import { QuoteIcon } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Miguel Silva",
    role: "Atirador Competitivo",
    comment: "O Strike Fire transformou minhas habilidades de tiro. Os instrutores são verdadeiros profissionais e as instalações são de classe mundial.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Sara Santos",
    role: "Membro Iniciante",
    comment: "Como alguém nova no esporte de tiro, estava nervosa no início, mas a equipe do Strike Fire me fez sentir confortável e confiante desde o primeiro dia.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Daniel Torres",
    role: "Policial",
    comment: "O treinamento tático no Strike Fire é excepcional. Melhorei significativamente minhas habilidades desde que me tornei membro do clube.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    name: "Juliana Pereira",
    role: "Membro há 3 Anos",
    comment: "O que mais amo no Strike Fire é a comunidade. Todos são solidários e apaixonados pelo esporte de tiro.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const next = () => {
    if (!animating) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setAnimating(false);
      }, 500);
    }
  };

  const prev = () => {
    if (!animating) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
        setAnimating(false);
      }, 500);
    }
  };

  const setTestimonial = (index: number) => {
    if (!animating && index !== currentIndex) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setAnimating(false);
      }, 500);
    }
  };

  return (
    <Section bgColor="bg-primary bg-opacity-5">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">O Que Nossos Membros Dizem</h2>
        <p className="text-gray-medium max-w-3xl mx-auto">
          Ouça a comunidade Strike Fire sobre suas experiências em nosso clube.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="absolute -top-5 left-10 text-primary">
            <QuoteIcon size={40} />
          </div>
          
          <div className={`transition-opacity duration-500 ${animating ? 'opacity-0' : 'opacity-100'}`}>
            <div className="mt-6">
              <p className="text-gray-dark text-lg italic mb-8">"{testimonials[currentIndex].comment}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-medium">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-6 right-6 flex space-x-3">
            <button 
              onClick={prev}
              className="w-10 h-10 rounded-full bg-gray-lighter flex items-center justify-center hover:bg-gray-light transition-colors"
              aria-label="Depoimento anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button 
              onClick={next}
              className="w-10 h-10 rounded-full bg-gray-lighter flex items-center justify-center hover:bg-gray-light transition-colors"
              aria-label="Próximo depoimento"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setTestimonial(index)}
              className={`w-3 h-3 rounded-full mx-2 transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-light'
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;