import React, { useEffect, useState } from 'react';
import Section from '../../components/UI/Section';
import Button from '../../components/UI/Button';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Strike Fire | Contact';
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // A lógica de envio do formulário ficaria aqui
    alert('Obrigado pela sua mensagem. Entraremos em contato em breve!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <>
      {/* Banner */}
      <div className="relative h-[40vh] min-h-[300px] w-full bg-secondary overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/1448346/pexels-photo-1448346.jpeg")',
            backgroundPosition: 'center',
            filter: 'brightness(40%)'
          }}
        />
        
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">Contact Us</h1>
            <p className="text-gray-lighter mt-4 max-w-xl mx-auto">
              Get in touch with the Strike Fire team
            </p>
          </div>
        </div>
      </div>

      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form de contato */}
          <div>
            <h2 className="text-2xl font-heading font-bold mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-dark font-medium mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-dark font-medium mb-2">
                    Endereço de Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-dark font-medium mb-2">
                    Número de Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-dark font-medium mb-2">
                    assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.5rem center', backgroundSize: '1.5em 1.5em' }}
                  >
                    <option value="">Selecione</option>
                    <option value="General Inquiry">Consulta geral</option>
                    <option value="Membership Information">Informações sobre membros</option>
                    <option value="Course Questions">Dúvidas sobre cursos</option>
                    <option value="Event Information">Informações do Evento</option>
                    <option value="Feedback">Opnião</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-dark font-medium mb-2">
                  Sua Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              
              <div>
                <Button type="submit" size="lg" className="flex items-center">
                  <Send className="w-4 h-4 mr-2" /> Enviar Mensagem
                </Button>
              </div>
            </form>
          </div>
          
          {/* Informações de Contato */}
          <div>
            <h2 className="text-2xl font-heading font-bold mb-6">Informações de Contato</h2>
            
            <div className="bg-gray-lighter p-6 rounded-lg mb-8">
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-dark">Nossa localização</h3>
                    <p className="text-gray-medium mt-1">Rua exemplo 123, bairo teste, Cidade - UF</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-dark">Envie-nos um Email</h3>
                    <p className="text-gray-medium mt-1">Email@strikefire.com</p>
                    <p className="text-gray-medium">EMail@strikefire.com</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-dark">Fale conosco</h3>
                    <p className="text-gray-medium mt-1">Principal: (99) 9-1234-5678</p>
                    <p className="text-gray-medium">Membros: (99) 9-1234-5678</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-dark">Horário de funcionamento</h3>
                    <div className="text-gray-medium mt-1">
                      <p>Segunda - Sexta: 14h - 22H</p>
                      <p>Sábados: 14h - 21h</p>
                      <p>Domingos e feríados: 14h - 18h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Google Maps */}
            <div className="rounded-lg overflow-hidden shadow-md h-[300px] bg-gray-lighter">
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-medium">
                  [A integração do Google Maps seria exibida aqui]
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Sessão de perguntas frequentes */}
      <Section bgColor="bg-gray-lighter">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-heading font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-gray-medium max-w-2xl mx-auto">
            Encontre respostas rápidas para perguntas comuns sobre o Strike Fire Shooting Club.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {[
              {
                "Pergunta": "Preciso ser membro para usar o estande?",
                "Resposta": "Sim, nossos estandes são exclusivos para membros e seus convidados. Oferecemos diferentes opções de associação, incluindo planos individuais, familiares e corporativos. Passes diários estão disponíveis para visitantes acompanhados por membros."
              },
              {
                "Pergunta": "Existe uma idade mínima para atirar na sua instalação?",
                "Resposta": "Os membros devem ter 18 anos ou mais para a associação geral. Oferecemos programas para jovens de 12 a 17 anos, desde que estejam sob supervisão dos pais e participem do nosso programa de certificação de segurança."
              },
              {
                "Pergunta": "Posso levar minhas próprias armas e munições?",
                "Resposta": "Sim, os membros podem trazer suas armas e munições pessoais, desde que cumpram nossos regulamentos de segurança e restrições de munição. Todas as armas devem ser transportadas descarregadas e em estojos ao entrar e sair da instalação."
              },
              {
                "Pergunta": "Vocês alugam armas?",
                "Resposta": "Sim, oferecemos aluguel de armas para uso dentro de nossa instalação. As opções de aluguel incluem diversos tipos de pistolas, rifles e espingardas. As taxas de aluguel variam conforme o tipo de arma, e os locatários devem comprar a munição em nossa loja especializada."
              },
              {
                "Pergunta": "Como faço para me inscrever em um curso ou evento?",
                "Resposta": "As inscrições para cursos e eventos podem ser realizadas online em nosso site, por telefone ou presencialmente em nossa instalação. A pré-inscrição e o pagamento são exigidos para a maioria dos cursos e eventos para garantir sua vaga."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg font-bold text-gray-dark mb-2">{faq.Pergunta}</h3>
                  <p className="text-gray-medium">{faq.Resposta}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-medium mb-4">
              Não encontrou o que procurava? Entre em contato conosco diretamente e teremos prazer em ajudar.
            </p>
            <Button variant="outline">Ver todas as perguntas frequentes</Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;