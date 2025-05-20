import React, { useEffect } from 'react';
import Section from '../../components/UI/Section';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, User } from 'lucide-react';
import { eventsData } from '../../data/events';

const EventsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Strike Fire | Events';
    window.scrollTo(0, 0);
  }, []);

  // Agrupar eventos por mês
  const eventsByMonth: Record<string, typeof eventsData> = {};

  eventsData.forEach(event => {
    const dateParts = event.date.split(',')[0].split(' ');
    const month = dateParts[0];
    if (!eventsByMonth[month]) {
      eventsByMonth[month] = [];
    }
    eventsByMonth[month].push(event);
  });

  return (
    <>
      {/* Banner Principal */}
      <div className="relative h-[40vh] min-h-[300px] w-full bg-secondary overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/8108097/pexels-photo-8108097.jpeg")',
            backgroundPosition: 'center',
            filter: 'brightness(40%)'
          }}
        />
        
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">Eventos e Competições</h1>
            <p className="text-gray-lighter mt-4 max-w-xl mx-auto">
              Fique conectado com a comunidade Strike Fire
            </p>
          </div>
        </div>
      </div>

      {/* Categorias de Eventos */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { name: "Competições", icon: "🏆", description: "Teste suas habilidades contra outros participantes" },
            { name: "Eventos de Treinamento", icon: "🎯", description: "Oficinas e seminários especiais" },
            { name: "Encontros Sociais", icon: "👥", description: "Conecte-se com outros entusiastas" },
            { name: "Programas Juvenis", icon: "🧒", description: "Eventos para jovens atiradores" }
          ].map((category, index) => (
            <div key={index} className="bg-gray-lighter rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{category.icon}</div>
              <h3 className="font-heading font-bold text-lg mb-2">{category.name}</h3>
              <p className="text-gray-medium text-sm">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Linha do Tempo de Eventos */}
        {Object.entries(eventsByMonth).map(([month, monthEvents]) => (
          <div key={month} className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-6 pb-3 border-b-2 border-primary inline-block">
              Eventos de {month}
            </h2>
            
            <div className="space-y-6">
              {monthEvents.map((event) => (
                <Card key={event.id} className="overflow-visible">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 p-5 flex items-center justify-center bg-secondary text-white">
                      <div className="text-center">
                        <div className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full mb-3">
                          {event.category}
                        </div>
                        <h3 className="font-heading font-bold text-xl mb-2">{event.title}</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center justify-center">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center justify-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-3/4 p-5">
                      <p className="text-gray-medium mb-4">{event.shortDescription}</p>
                      
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div>
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-2 text-primary" />
                            <span className="text-sm text-gray-medium">Contato: {event.contact.name}</span>
                          </div>
                          
                          {event.registration.fee !== undefined && (
                            <div className="mt-1">
                              <span className="font-medium">
                                {event.registration.fee === 0 
                                  ? "Evento Gratuito" 
                                  : `Taxa de Inscrição: $${event.registration.fee}`}
                              </span>
                            </div>
                          )}
                        </div>
                        
                        <div className="mt-4 sm:mt-0">
                          <Link to={`/events/${event.id}`}>
                            <Button>
                              {event.registration.open ? "Inscreva-se Agora" : "Ver Detalhes"}
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </Section>
      
      {/* Calendário de Eventos */}
      <Section bgColor="bg-gray-lighter">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-heading font-bold mb-4">Calendário de Eventos</h2>
          <p className="text-gray-medium max-w-2xl mx-auto">
            Veja nosso calendário completo de eventos futuros e planeje suas visitas ao Strike Fire.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="rounded border border-gray-light">
            <div className="bg-secondary text-white p-4 rounded-t">
              <div className="text-center">
                <h3 className="text-lg font-bold">Junho 2025</h3>
              </div>
            </div>
            
            <div className="grid grid-cols-7 text-center font-medium border-b border-gray-light">
              <div className="p-2 border-r border-gray-light">Dom</div>
              <div className="p-2 border-r border-gray-light">Seg</div>
              <div className="p-2 border-r border-gray-light">Ter</div>
              <div className="p-2 border-r border-gray-light">Qua</div>
              <div className="p-2 border-r border-gray-light">Qui</div>
              <div className="p-2 border-r border-gray-light">Sex</div>
              <div className="p-2">Sáb</div>
            </div>
            
            <div className="grid grid-cols-7 text-center">
              {/* Semana 1 */}
              <div className="p-2 h-24 border-r border-b border-gray-light text-gray-light">26</div>
              <div className="p-2 h-24 border-r border-b border-gray-light text-gray-light">27</div>
              <div className="p-2 h-24 border-r border-b border-gray-light text-gray-light">28</div>
              <div className="p-2 h-24 border-r border-b border-gray-light text-gray-light">29</div>
              <div className="p-2 h-24 border-r border-b border-gray-light text-gray-light">30</div>
              <div className="p-2 h-24 border-r border-b border-gray-light text-gray-light">31</div>
              <div className="p-2 h-24 border-b border-gray-light">1</div>
              
              {/* Semana 2 */}
              <div className="p-2 h-24 border-r border-b border-gray-light">2</div>
              <div className="p-2 h-24 border-r border-b border-gray-light">3</div>
              <div className="p-2 h-24 border-r border-b border-gray-light">4</div>
              <div className="p-2 h-24 border-r border-b border-gray-light">5</div>
              <div className="p-2 h-24 border-r border-b border-gray-light">6</div>
              <div className="p-2 h-24 border-r border-b border-gray-light">7</div>
              <div className="p-2 h-24 border-b border-gray-light relative">
                8
                <div className="absolute bottom-1 left-1 right-1">
                  <div className="bg-primary text-white text-xs p-1 rounded truncate">Introdução Feminina</div>
                </div>
              </div>
              
              {/* Semana 3 */}
              <div className="p-2 h-24 border-r border-b border-gray-light">9</div>
              <div className="p-2 h-24 border-r border-b border-gray-light">10</div>
              <div className="p-2 h-24 border-r border-b border-gray-light">11</div>
              <div className="p-2 h-24 border-r border-b border-gray-light">12</div>
              <div className="p-2 h-24 border-r border-b border-gray-light">13</div>
              <div className="p-2 h-24 border-r border-b border-gray-light relative">
                14
                <div className="absolute bottom-1 left-1 right-1">
                  <div className="bg-secondary text-white text-xs p-1 rounded truncate">Orientação</div>
                </div>
              </div>
              <div className="p-2 h-24 border-b border-gray-light relative">
                15
                <div className="absolute bottom-1 left-1 right-1">
                  <div className="bg-primary text-white text-xs p-1 rounded truncate">Pistola para Iniciantes</div>
                </div>
              </div>
              
              {/* Semanas adicionais continuariam aqui */}
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-medium mb-4">
              Nosso calendário de eventos é atualizado regularmente. Volte sempre ou inscreva-se no nosso boletim informativo
              para as últimas informações.
            </p>
            <Button variant="outline">Inscrever-se no Calendário</Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default EventsPage;