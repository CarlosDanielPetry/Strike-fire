import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../Logo/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-light mb-6">
              Clube de tiro dedicado ao treinamento, competições e manuseio responsável de armas de fogo.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-light hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-light hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-light hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-light hover:text-primary transition-colors">Início</Link></li>
              <li><Link to="/about" className="text-gray-light hover:text-primary transition-colors">Sobre</Link></li>
              <li><Link to="/courses" className="text-gray-light hover:text-primary transition-colors">Cursos</Link></li>
              <li><Link to="/events" className="text-gray-light hover:text-primary transition-colors">Eventos</Link></li>
              <li><Link to="/contact" className="text-gray-light hover:text-primary transition-colors">Contato</Link></li>
              <li><Link to="/membership" className="text-gray-light hover:text-primary transition-colors">Associação</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Programas de Treinamento</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-gray-light hover:text-primary transition-colors">Curso para Iniciantes</Link></li>
              <li><Link to="/courses" className="text-gray-light hover:text-primary transition-colors">Tiro Avançado</Link></li>
              <li><Link to="/courses" className="text-gray-light hover:text-primary transition-colors">Treinamento Tático</Link></li>
              <li><Link to="/courses" className="text-gray-light hover:text-primary transition-colors">Tiro Competitivo</Link></li>
              <li><Link to="/courses" className="text-gray-light hover:text-primary transition-colors">Certificação de Segurança</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contate-nos</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-2 mt-0.5" />
                <span className="text-gray-light">Rua do Stand de Tiro, 123, São Paulo, SP 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-2" />
                <span className="text-gray-light">(11) 1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-2" />
                <span className="text-gray-light">Email@strikefire.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-light text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Clube de Tiro Strike Fire. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 text-sm text-gray-light">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">Política de Privacidade</Link>
              <Link to="/terms-of-service" className="hover:text-primary transition-colors">Termos de Serviço</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;