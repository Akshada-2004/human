import React from 'react';
import { Train, Heart, Clock, Shield, Users, Phone } from 'lucide-react';
import './TrainAmbulanceSection.css';
import '../App.css';
import '../index.css';

const TrainAmbulanceSection = () => {
  return (
    <section id="services" className="train-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Our Specialty</span>
          <h2 className="section-title">India's Trusted Train Ambulance Provider</h2>
          <p className="section-description">
            When air ambulance isn't feasible and road transport is too risky, our specially equipped
            train ambulances provide the perfect solution for long-distance medical transfers.
          </p>
        </div>

        <div className="card">
          <div className="card-contentt">
            <div className="card-grid">
              <div className="card-info">
                <div className="icon-title">
                  <div className="icon-circle accent">
                    <Train />
                  </div>
                  <h3 className="card-title">Mobile ICU on Rails</h3>
                </div>

                <p className="card-description">
                  Our train ambulances are fully equipped mobile intensive care units that ensure
                  continuous medical monitoring and care during long-distance transfers...
                </p>

                <div className="features-grid">
                  <div className="feature-box">
                    <div className="feature-icon secondary"><Heart /></div>
                    <div>
                      <h4 className="feature-title">Advanced Life Support</h4>
                      <p className="tital-para" >Ventilators, monitors, and emergency medications</p>
                    </div>
                  </div>


                  <div className="feature-box">
                    <div className="feature-icon primary"><Users /></div>
                    <div>
                      <h4 className="feature-title">Expert Medical Team</h4>
                      <p className="tital-para" >Doctors, nurses, and paramedics onboard</p>
                    </div>
                  </div>

                  <div className="feature-box">
                    <div className="feature-icon accent"><Clock /></div>
                    <div>
                      <h4 className="feature-title">24/7 Availability</h4>
                      <p className="tital-para">Emergency response any time, any day</p>
                    </div>
                  </div>

                  <div className="feature-box">
                    <div className="feature-icon secondary"><Shield /></div>
                    <div>
                      <h4 className="feature-title">Safe Transfer</h4>
                      <p className="tital-para">Secure and stable transportation</p>
                    </div>
                  </div>
                </div>

                <button className="cta-button">
                  <Phone className="phone-icon" />
                  Book Train Ambulance
                </button>
              </div>

              <div className="illustration">
                <div className="illustration-wrapper">
                  <div className="compartment-header">
                    <h4>MEDICAL COMPARTMENT</h4>
                    <p>ICU Setup Inside Train</p>
                  </div>

                  <div className="equipment-grid">
                    <div className="equipment-box secondary" id='equipment-box-1'>
                      <div className="equipment-icon heart-beat"></div>
                      <div className="equipment-label">Patient Monitor</div>
                    </div>
                    <div className="equipment-box primary"id='equipment-box-2'>
                      <div className="equipment-icon"></div>
                      <div className="equipment-label">Ventilator</div>
                    </div>
                    <div className="equipment-box accent"id='equipment-box-3'>
                      <div className="equipment-icon animate-pulse"></div>
                      <div className="equipment-label">Defibrillator</div>
                    </div>
                    <div className="equipment-box secondary"id='equipment-box-1'>
                      <div className="equipment-icon"></div>
                      <div className="equipment-label">Oxygen Supply</div>
                    </div>
                  </div>

                  <div className="doctor-info">
                    <div className="doctor-circle">
                      <div className="inner-circle"></div>
                    </div>
                    <div>
                      <div className="doctor-title">Dr. On Board</div>
                      <div className="doctor-sub">24/7 Care</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="benefits-section">
          <h3 className="benefits-title">Why Choose Train Ambulance?</h3>
          <div className="benefits-grid">
            <div className="benefit-box">
              <div className="benefit-icon secondary"><Train /></div>
              <h4>Cost Effective</h4>
              <p>More affordable than air ambulance for long distances</p>
            </div>
            <div className="benefit-box">
              <div className="benefit-icon primary"><Shield /></div>
              <h4>Weather Independent</h4>
              <p>Not affected by weather conditions like aircraft</p>
            </div>
            <div className="benefit-box">
              <div className="benefit-icon accent heart-beat"><Heart /></div>
              <h4>Family Friendly</h4>
              <p>Space for family members to accompany patient</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainAmbulanceSection;
