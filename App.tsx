import type React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Careers from './pages/Careers';
import Compliance from './pages/Compliance';
import Consulting from './pages/Consulting';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Insights from './pages/Insights';
import ITServices from './pages/ITServices';
import Mission from './pages/Mission';
import People from './pages/People';
import Services from './pages/Services';
import Strategy from './pages/Strategy';
import Trading from './pages/Trading';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/mission" element={<Mission />} />
              <Route path="/about/strategy" element={<Strategy />} />
              <Route path="/about/people" element={<People />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/about/careers" element={<Careers />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/trading" element={<Trading />} />
              <Route path="/services/consulting" element={<Consulting />} />
              <Route path="/services/it" element={<ITServices />} />
              <Route path="/compliance" element={<Compliance />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
