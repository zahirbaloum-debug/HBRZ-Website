import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Mission from './pages/Mission';
import Strategy from './pages/Strategy';
import People from './pages/People';
import Insights from './pages/Insights';
import Careers from './pages/Careers';
import Services from './pages/Services';
import Trading from './pages/Trading';
import Consulting from './pages/Consulting';
import ITServices from './pages/ITServices';
import Compliance from './pages/Compliance';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <HashRouter>
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
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;