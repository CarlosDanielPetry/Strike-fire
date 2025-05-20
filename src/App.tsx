import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import CoursesPage from './pages/Courses/CoursesPage';
import EventsPage from './pages/Events/EventsPage';
import ContactPage from './pages/Contact/ContactPage';
import MembershipPage from './pages/Membership/MembershipPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/membership" element={<MembershipPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;