import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../UI/Section';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { eventsData } from '../../data/events';

const UpcomingEvents: React.FC = () => {
  const upcomingEvents = eventsData.slice(0, 3);

  return (
    <Section bgColor="bg-secondary text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Próximos Eventos</h2>
        <p className="text-gray-light max-w-3xl mx-auto">
          Participe de competições, workshops e eventos especiais. Mantenha-se conectado com a
          comunidade Strike Fire.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {upcomingEvents.map((event) => (
          <Card key={event.id} hoverable className="bg-gray-dark text-white border border-gray-800 h-full flex flex-col">
            <Card.Content className="flex-grow">
              <div className="bg-primary text-white inline-block px-3 py-1 rounded-full text-sm font-medium mb-4">
                {event.category}
              </div>
              <Card.Title className="text-white">{event.title}</Card.Title>
              
              <div className="space-y-3 mb-4 mt-4">
                <div className="flex items-center text-gray-light">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-light">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-light">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{event.location}</span>
                </div>
              </div>
              
              <Card.Description className="text-gray-light">
                {event.shortDescription}
              </Card.Description>
            </Card.Content>
            
            <Card.Footer className="bg-gray-dark border-t border-gray-800">
              <Link to={`/events/${event.id}`} className="w-full">
                <Button variant="primary" size="sm" fullWidth>Ver Detalhes</Button>
              </Link>
            </Card.Footer>
          </Card>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/events">
          <Button variant="outline">Ver Todos os Eventos</Button>
        </Link>
      </div>
    </Section>
  );
};

export default UpcomingEvents;