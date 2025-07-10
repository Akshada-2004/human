 import React from 'react';
import './testimonial.css';

const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    </svg>
);

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check">
        <path d="M20 6 9 17l-5-5"/>
    </svg>
);

const HospitalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucude-hospital">
        <path d="M12 6v4"/>
        <path d="M14 14h-4"/>
        <path d="M14 18h-4"/>
        <path d="M14 22h-4"/>
        <path d="M14 2h-4C8.95 2 8.24 2.87 8 3 7.5 3 6.5 3 6 3c-2.76 0-5 2.24-5 5v14h22V8c0-2.76-2.24-5-5-5h-2c-.24-.13-.95-1-2-1Z"/>
        <path d="M14 22H5a2 2 0 0 1-2-2v-4"/>
        <path d="M14 22h5a2 2 0 0 0 2-2v-4"/>
        <path d="M12 2v2"/>
    </svg>
);

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

const Testimonial = () => {
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

    <section>

       <div className="container">
            <h1>Why Train Ambulance Over Other Transport</h1>
            <p className="subtitle">Compare the advantages of train ambulance services</p>

            <div className="cards-wrapper">
                {/* Road Ambulance Card */}
                <div className="card" style={{'--bullet-color': '#ff6b6b'}}>
                    <div className="icon-circle" style={{ backgroundColor: '#ffeaea', color: '#ff6b6b' }}>
                        <HeartIcon />
                    </div>
                    <h2>Road Ambulance</h2>
                    <ul>
                        <li>Limited to 4-6 hours safely</li>
                        <li>Traffic delays possible</li>
                        <li>Basic life support</li>
                        <li>Single patient focus</li>
                    </ul>
                </div>

                {/* Train Ambulance Card */}
                <div className="card" style={{'--bullet-color': '#4CAF50'}}>
                    <div className="icon-circle" style={{ backgroundColor: '#e6ffe6', color: '#4CAF50' }}>
                        <CheckIcon />
                    </div>
                    <h2>Train Ambulance</h2>
                    <ul>
                        <li>Safe for 24-48 hour journeys</li>
                        <li>No traffic concerns</li>
                        <li>Full ICU capabilities</li>
                        <li>Multiple patient support</li>
                        <li>Cost-effective for long distance</li>
                    </ul>
                </div>

                {/* Air Ambulance Card */}
                <div className="card" style={{'--bullet-color': '#5b7bff'}}>
                    <div className="icon-circle" style={{ backgroundColor: '#f0f5ff', color: '#5b7bff' }}>
                        <HospitalIcon />
                    </div>
                    <h2>Air Ambulance</h2>
                    <ul>
                        <li>Weather dependent</li>
                        <li>Very expensive</li>
                        <li>Limited equipment space</li>
                        <li>Airport logistics required</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    </div>
  );
};

export default Testimonial;
