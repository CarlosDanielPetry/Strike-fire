import React, { useEffect } from 'react';
import HeroSection from '../../components/Home/HeroSection';
import FeaturedCourses from '../../components/Home/FeaturedCourses';
import AboutPreview from '../../components/Home/AboutPreview';
import UpcomingEvents from '../../components/Home/UpcomingEvents';
import TestimonialsSection from '../../components/Home/TestimonialsSection';
import CTASection from '../../components/Home/CTASection';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Strike Fire | Home';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <FeaturedCourses />
      <AboutPreview />
      <UpcomingEvents />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default HomePage;