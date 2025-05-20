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
        {featuredCourses.map((course) => (
          <Card key={course.id} hoverable className="h-full flex flex-col">
            <Card.Image
              src={course.image}
              alt={course.title}
              className="h-48"
            />
            <Card.Content className="flex-grow">
              <div className="flex justify-between items-start mb-3">
                <Card.Title>{course.title}</Card.Title>
                <span className="bg-primary text-white text-sm font-medium px-2.5 py-0.5 rounded">
                  {course.level}
                </span>
              </div>
              <Card.Description>{course.shortDescription}</Card.Description>
            </Card.Content>
            <Card.Footer className="flex justify-between items-center">
              <span className="font-bold text-lg">R$ {course.price}</span>
              <Link to={`/courses/${course.id}`}>
                <Button variant="primary" size="sm">Saiba Mais</Button>
              </Link>
            </Card.Footer>
          </Card>
        ))}
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