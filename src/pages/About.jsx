import React from 'react';
import AboutSection from '../components/AboutSection';  
import './about.css'; // Assuming you have a CSS file for styling




const About = () => {
  return (
    <div>
  <AboutSection/>
    <section className="mission-section">
      <h2 className="mission-title">Our Mission</h2>
      <p className="mission-desc">
        To provide world-class emergency medical transportation that bridges the gap
        between critical care facilities across India, ensuring no family faces a
        medical emergency alone.
      </p>
      <div className="mission-grid">
        <div className="mission-card">
          <div className="icon-circle1 blue">🎯</div>
          <h3>Accessibility</h3>
          <p>Making quality medical transport accessible to every family</p>
        </div>
        <div className="mission-card">
          <div className="icon-circle1 green">🏅</div>
          <h3>Excellence</h3>
          <p>Maintaining the highest standards in medical care</p>
        </div>
        <div className="mission-card">
          <div className="icon-circle1 red">❤️</div>
          <h3>Compassion</h3>
          <p>Treating every patient with dignity and care</p>
        </div>
        <div className="mission-card">
          <div className="icon-circle1 blue">🕒</div>
          <h3>Reliability</h3>
          <p>Always there when you need us most</p>
        </div>
      </div>
    </section>


      <section className="core-values-section">
      <h2 className="core-title">Our Core Values</h2>
      <div className="core-grid">
        <div className="core-card">
          <div className="core-icon red">❤️</div>
          <h3>Compassion</h3>
          <p>
            We understand that behind every emergency call is a family in distress. Our team
            approaches every situation with empathy, ensuring patients and families feel
            supported throughout their journey.
          </p>
        </div>
        <div className="core-card">
          <div className="core-icon green">🕒</div>
          <h3>Speed</h3>
          <p>
            Time is critical in medical emergencies. Our rapid response team and streamlined
            processes ensure the fastest possible deployment while maintaining the highest
            safety standards.
          </p>
        </div>
        <div className="core-card">
          <div className="core-icon blue">🛡️</div>
          <h3>Safety</h3>
          <p>
            Every aspect of our service prioritizes patient safety. From state-of-the-art medical
            equipment to rigorously trained personnel, we never compromise on safety protocols.
          </p>
        </div>
      </div>
    </section>
</div>
  
  );
};

export default About;
