import React from 'react';
import './why.css';

const features = [
  {
    icon: '👨‍⚕️',
    title: 'Experienced Medical Team',
    desc: 'Our certified doctors, nurses, and paramedics have years of experience in emergency care and critical patient transport.',
    color: '#e9f8f1',
  },
  {
    icon: '🛡️',
    title: 'Advanced Life Support Systems',
    desc: 'State-of-the-art medical equipment including ventilators, monitors, defibrillators, and emergency medications.',
    color: '#f1f4f7',
  },
  {
    icon: '⏰',
    title: '24/7 Availability',
    desc: 'Round-the-clock emergency response team ready to assist you during any medical emergency, day or night.',
    color: '#fff0f0',
  },
  {
    icon: '📞',
    title: 'Nationwide Connectivity',
    desc: 'Comprehensive coverage across India with established networks in major cities and towns for seamless transfers.',
    color: '#e9f8f1',
  },
];

const Why = () => {
  return (
    <div>

    <section className="why-choose-section">
      <h2 className="why-title">Why Choose MediTrain</h2>
      <p className="why-subtitle">
        When your loved one needs emergency medical transport, trust matters most.
        Here's why families choose MediTrain for their critical medical transfers.
      </p>

      <div className="why-grid">
        {features.map((item, idx) => (
          <div className="why-card" key={idx}>
            <div
              className="why-icon"
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </div>
            <h4 className="why-card-title">{item.title}</h4>
            <p className="why-card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="why-cta">
      <h2 className="why-cta-title">Ready to Experience the MediTrain Difference?</h2>
      <p className="why-cta-desc">
        Contact us today to learn more about our services or to schedule a transfer.
      </p>
      <button className="why-cta-button">Get in Touch</button>    
</section>
      
    </div>
  );
};

export default Why;
// This component can be imported and used in your main application file (e.g., App.jsx) to display the "Why Choose Us" section.