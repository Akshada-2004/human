// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'; // This should include AboutSection inside it
import About from './pages/About';
import Service from './pages/Service'; // Assuming you have a Service page
import Why from './pages/Why';
// import Testimonial from './pages/Testimonials'; // Assuming you have a Testimonial page
import './index.css'; // Assuming you have a global CSS file
import './App.css';
import AboutSection from './components/AboutSection'; 
import TrainAmbulanceSection from './components/TrainAmbulanceSection';
import WhyChooseUs from './components/WhyChooseUs'; // Assuming you have this component 
import TestimonialsSection from './components/TestimonialsSection'; // Assuming you have this component
import ContactSection from './components/ContactSection'; 
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutSection" element={<AboutSection />} />
        <Route path="/TrainAmbulanceSection" element={<TrainAmbulanceSection />} />
        <Route path="/WhyChooseUs" element={<WhyChooseUs />} />
        <Route path="/TestimonialsSection" element={<TestimonialsSection />} />
        <Route path="/ContactSection" element={<ContactSection />} />
<Route path="/About" element={<About />} />
<Route path="/Service" element={<Service />} />
        <Route path="/Why" element={<Why />} />
        {/* Uncomment the line below if you have a Testimonials page */}
{/* <Route path="/Testimonials" element={<Testimonials />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
