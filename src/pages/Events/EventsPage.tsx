import React from 'react';
import Section from '../../components/UI/Section';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, User } from 'lucide-react';
import { eventsData as originalEventsData } from '../../data/events';

// Atualiza as datas dos eventos para o mês atual
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = String(today.getMonth() + 1).padStart(2, '0');
const baseDay = 5; // Dia inicial para eventos

const eventsData = (originalEventsData || []).map((event, idx) => {
  // Garante que cada evento tenha uma data válida no mês atual
  const day = String(baseDay + idx * 3).padStart(2, '0'); // espaça os eventos a cada 3 dias
  return {
    ...event,
    date: `${currentYear}-${currentMonth}-${day}`,
  };
});

// Definições de tipos e componentes movidas para fora do componente
type EventType = { id: string; title: string; time?: string; date?: string; category?: string; location?: string; shortDescription?: string; contact?: { name: string }; registration?: { fee?: number; open?: boolean } };

// Agrupa eventos por mês (usando chave "YYYY-MM" para evitar problemas de parsing)
const eventsByMonth: Record<string, EventType[]> = (eventsData || []).reduce((acc: Record<string, EventType[]>, event: EventType) => {
  if (!event.date) return acc;
  const [year, month] = event.date.split('-');
  const key = `${year}-${month}`; // Ex: "2025-06"
  if (!acc[key]) acc[key] = [];
  acc[key].push(event);
  return acc;
}, {});


const EventsPage: React.FC = () => {
  return (
    <>
      <Section>
        {/* Calendário Interativo de Eventos */}
        {Object.entries(eventsByMonth as Record<string, EventType[]>).map(
          ([monthKey, monthEvents]: [string, EventType[]]) => {
            // monthKey está no formato "YYYY-MM"
            const [year, month] = monthKey.split('-');
            const monthName = new Date(Number(year), Number(month) - 1, 1).toLocaleString('pt-BR', { month: 'long', year: 'numeric' });
            return (
              <div key={monthKey} className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-6 pb-3 border-b-2 border-primary inline-block">
                  Eventos de {monthName.charAt(0).toUpperCase() + monthName.slice(1)}
                </h2>
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
                              <span>
                                {event.date
                                  ? new Date(event.date.replace(/-/g, '/')).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
                                  : ''}
                              </span>
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
                              <span className="text-sm text-gray-medium">Contato: {event.contact?.name}</span>
                            </div>
                            
                            {event.registration && event.registration.fee !== undefined && (
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
                                {event.registration && event.registration.open ? "Inscreva-se Agora" : "Ver Detalhes"}
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            );
          }
        )}
        <div className="bg-secondary text-white p-4 rounded-t">
          <div className="text-center">
            <h3 className="text-lg font-bold">
              {new Date().toLocaleString('pt-BR', { month: 'long', year: 'numeric' }).replace(/^./, str => str.toUpperCase())}
            </h3>
          </div>
        </div>
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
      </Section>
    </>
  );
};

export default EventsPage;