import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../UI/Section';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { coursesData } from '../../data/courses';

const FeaturedCourses: React.FC = () => {
  const featuredCourses = coursesData.slice(0, 3);

  return (
    <Section bgColor="bg-gray-lighter">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Programas de Treinamento Populares</h2>
        <p className="text-gray-medium max-w-3xl mx-auto">
          Nossos instrutores especialistas oferecem cursos abrangentes para todos os níveis,
          desde iniciantes até atiradores competitivos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Curso 1 */}
        <Card hoverable className="h-full flex flex-col">
          {/* Curso 1: Para alterar o diretório da imagem, modifique o caminho abaixo */}
          <img
            src={import.meta.env.BASE_URL + "../Images/Cursos/Curso-de-iniciantes-pistola.svg"}
            alt={featuredCourses[0].title}
            className="h-48 w-full object-cover rounded-t"
          />
          <div className="flex-grow p-4 flex flex-col">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-lg">{featuredCourses[0].title}</h3>
              <span className="bg-primary text-white text-sm font-medium px-2.5 py-0.5 rounded">
          {featuredCourses[0].level}
              </span>
            </div>
            <p className="text-gray-700 mb-4">{featuredCourses[0].shortDescription}</p>
          </div>
          <div className="flex justify-between items-center px-4 pb-4">
            <span className="font-bold text-lg">R$ {featuredCourses[0].price}</span>
            <Link to={`/courses/${featuredCourses[0].id}`}>
              <Button variant="primary" size="sm">Saiba Mais</Button>
            </Link>
          </div>
        </Card>

        {/* Curso 2 */}
        <Card hoverable className="h-full flex flex-col">
          {/* Curso 2: Para alterar o diretório da imagem, modifique o caminho abaixo */}
          <img
            src={import.meta.env.BASE_URL + "../Images/Cursos/Curso-de-iniciantes-pistola.svg"}
            alt={featuredCourses[1].title}
            className="h-48 w-full object-cover rounded-t"
          />
          <div className="flex-grow p-4 flex flex-col">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-lg">{featuredCourses[1].title}</h3>
              <span className="bg-primary text-white text-sm font-medium px-2.5 py-0.5 rounded">
          {featuredCourses[1].level}
              </span>
            </div>
            <p className="text-gray-700 mb-4">{featuredCourses[1].shortDescription}</p>
          </div>
          <div className="flex justify-between items-center px-4 pb-4">
            <span className="font-bold text-lg">R$ {featuredCourses[1].price}</span>
            <Link to={`/courses/${featuredCourses[1].id}`}>
              <Button variant="primary" size="sm">Saiba Mais</Button>
            </Link>
          </div>
        </Card>

        {/* Curso 3 */}
        <Card hoverable className="h-full flex flex-col">
          {/* Curso 3: Para alterar o diretório da imagem, modifique o caminho abaixo */}
          <img
            src={import.meta.env.BASE_URL + "../Images/Cursos/Curso-de-iniciantes-pistola.svg"}
            alt={featuredCourses[2].title}
            className="h-48 w-full object-cover rounded-t"
          />
          <div className="flex-grow p-4 flex flex-col">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-lg">{featuredCourses[2].title}</h3>
              <span className="bg-primary text-white text-sm font-medium px-2.5 py-0.5 rounded">
          {featuredCourses[2].level}
              </span>
            </div>
            <p className="text-gray-700 mb-4">{featuredCourses[2].shortDescription}</p>
          </div>
          <div className="flex justify-between items-center px-4 pb-4">
            <span className="font-bold text-lg">R$ {featuredCourses[2].price}</span>
            <Link to={`/courses/${featuredCourses[2].id}`}>
              <Button variant="primary" size="sm">Saiba Mais</Button>
            </Link>
          </div>
        </Card>
      </div>

      <div className="text-center mt-10">
        <Link to="/courses">
          <Button variant="outline">Ver Todos os Cursos</Button>
        </Link>
      </div>
    </Section>
  );
};

export default FeaturedCourses;