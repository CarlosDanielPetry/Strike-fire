import React, { useEffect } from 'react';
import Section from '../../components/UI/Section';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import { Link } from 'react-router-dom';
import { coursesData } from '../../data/courses';
import { Search, Filter } from 'lucide-react';

const CoursesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Strike Fire | Courses';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Banner */}
      <div className="relative h-[40vh] min-h-[300px] w-full bg-secondary overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/7314541/pexels-photo-7314541.jpeg")',
            backgroundPosition: 'center',
            filter: 'brightness(40%)'
          }}
        />
        
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">Programas de treinamento</h1>
            <p className="text-gray-lighter mt-4 max-w-xl mx-auto">
              Cursos abrangentes para todos os níveis de habilidade.
            </p>
          </div>
        </div>
      </div>

      {/* Busca e Filtro */}
      <Section bgColor="bg-white">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search courses..." 
                className="w-full md:w-64 pl-10 pr-4 py-2 bg-gray-lighter border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-medium w-4 h-4" />
            </div>
          </div>
          
          <div className="flex space-x-4">
            <div className="relative">
              <select className="appearance-none pl-3 pr-8 py-2 bg-gray-lighter border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                <option value="">Todos os níveis</option>
                <option value="beginner">Iniciante</option>
                <option value="intermediate">Intermediário</option>
                <option value="advanced">Avançado</option>
              </select>
              <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-medium w-4 h-4" />
            </div>
            
            <div className="relative">
              <select className="appearance-none pl-3 pr-8 py-2 bg-gray-lighter border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                <option value="">Todos os tipos</option>
                <option value="pistol">Pistola</option>
                <option value="rifle">Rifles</option>
                <option value="shotgun">Espingardas</option>
                <option value="tactical">Táticos</option>
              </select>
              <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-medium w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Grade de cursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <Card key={course.id} hoverable className="h-full flex flex-col">
              <img
                src={course.image}
                alt={course.title}
                className="h-48 w-full object-cover rounded-t-lg"
              />
              <div className="flex-grow p-4 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <span className="bg-primary text-white text-sm font-medium px-2.5 py-0.5 rounded">
                    {course.level}
                  </span>
                </div>
                <p className="text-gray-medium mb-2">{course.shortDescription}</p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-dark font-medium">Duração:</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-dark font-medium">Próxima sessão:</span>
                    <span>{course.schedule.upcoming[0].date}</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center p-4 border-t">
                <span className="font-bold text-lg">${course.price}</span>
                <Link to={`/courses/${course.id}`}>
                  <Button variant="primary" size="sm">Leia Mais</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      
      {/* Requisição de cursos */}
      <Section bgColor="bg-primary bg-opacity-5">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Não encontrou o que procurava?</h2>
          <p className="text-gray-medium max-w-2xl mx-auto mb-8">
            Nós podemos criar um programa de treino indivual, para grupos ou organizações.
            Entre em contato conosco para nós contar suas necessidades e objetivos.
          </p>
          <Link to="/contact">
            <Button size="lg">Solicite um curso personalizado</Button>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default CoursesPage;