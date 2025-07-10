// import React, { useState, useEffect } from 'react';
// import './TestimonialsSection.css';

// const TestimonialsSection = () => {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   const testimonials = [
//     {
//       name: "Rajesh Kumar",
//       location: "Mumbai to Delhi",
//       rating: 5,
//       text: "During my mother's critical condition, MediTrain provided exceptional care. The medical team was professional and compassionate. They treated my mother like their own family member.",
//       relationship: "Son"
//     },
//     {
//       name: "Sunita Patel",
//       location: "Bangalore to Kolkata", 
//       rating: 5,
//       text: "I was scared about transferring my husband over such a long distance, but MediTrain made it seamless. The doctor and nurses were constantly monitoring him.",
//       relationship: "Wife"
//     },
//     {
//       name: "Dr. Amit Verma",
//       location: "Chennai to Hyderabad",
//       rating: 5,
//       text: "As a physician myself, I was impressed by the medical standards maintained by MediTrain. The equipment was state-of-the-art, and protocols were followed meticulously.",
//       relationship: "Doctor & Son"
//     }
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 6000);

//     return () => clearInterval(timer);
//   }, [testimonials.length]);

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const currentData = testimonials[currentTestimonial];

//   return (
//     <section className="testimonials-section section">
//       <div className="container">
//         <div className="section-header text-center">
//           <span className="section-tag">Testimonials</span>
//           <h2>Stories of Hope and Healing</h2>
//           <p className="section-description">
//             Read how MediTrain has touched lives and brought families together during their most challenging times.
//           </p>
//         </div>

//         <div className="testimonial-carousel">
//           <div className="testimonial-card">
//             <div className="stars">
//               {[...Array(currentData.rating)].map((_, i) => (
//                 <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//                   <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
//                 </svg>
//               ))}
//             </div>

//             <blockquote>
//               "{currentData.text}"
//             </blockquote>

//             <div className="testimonial-author">
//               <div className="author-avatar">
//                 <div className="avatar-circle"></div>
//               </div>
//               <div className="author-info">
//                 <div className="author-name">{currentData.name}</div>
//                 <div className="author-relationship">{currentData.relationship}</div>
//                 <div className="author-location">{currentData.location}</div>
//               </div>
//             </div>

//             <div className="carousel-controls">
//               <button onClick={prevTestimonial} className="carousel-btn">
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                   <polyline points="15,18 9,12 15,6" />
//                 </svg>
//               </button>

//               <div className="carousel-indicators">
//                 {testimonials.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentTestimonial(index)}
//                     className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
//                   />
//                 ))}
//               </div>

//               <button onClick={nextTestimonial} className="carousel-btn">
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                   <polyline points="9,18 15,12 9,6" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="trust-stats">
//           <div className="trust-stat">
//             <div className="trust-number">4.9</div>
//             <div className="trust-label">Average Rating</div>
//           </div>
//           <div className="trust-stat">
//             <div className="trust-number">500+</div>
//             <div className="trust-label">Happy Families</div>
//           </div>
//           <div className="trust-stat">
//             <div className="trust-number">100%</div>
//             <div className="trust-label">Satisfaction Rate</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;
import React, { useState, useEffect } from 'react';
import './testimonialssection.css';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai to Delhi",
      avatar: "bg-secondary",
      rating: 5,
      text: "During my mother's critical condition, MediTrain provided exceptional care. The medical team was professional and compassionate. They treated my mother like their own family member. The train ambulance was well-equipped and gave us peace of mind during the journey.",
      relationship: "Son"
    },
    {
      name: "Sunita Patel",
      location: "Bangalore to Kolkata",
      avatar: "bg-primary",
      rating: 5,
      text: "I was scared about transferring my husband over such a long distance, but MediTrain made it seamless. The doctor and nurses were constantly monitoring him, and they kept us informed every step of the way. Truly grateful for their service.",
      relationship: "Wife"
    },
    {
      name: "Dr. Amit Verma",
      location: "Chennai to Hyderabad",
      avatar: "bg-accent",
      rating: 5,
      text: "As a physician myself, I was impressed by the medical standards maintained by MediTrain. The equipment was state-of-the-art, and the medical protocols were followed meticulously. They provided excellent care for my elderly father.",
      relationship: "Doctor & Son"
    },
    {
      name: "Meera Reddy",
      location: "Pune to Ahmedabad",
      avatar: "bg-secondary",
      rating: 5,
      text: "The team went above and beyond to ensure my daughter was comfortable during the transfer. They explained everything clearly and were so patient with all our questions. The journey was smooth and safe. Highly recommended!",
      relationship: "Mother"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="header1">
          <span className="subtitle">What Families Say</span>
          <h2 className="title">Stories of Hope and Healing</h2>
          <p className="description">
            Read how MediTrain has touched lives and brought families together during their most challenging times.
          </p>
        </div>

        <div className="testimonial-card">
          <div className="stars">
            {[...Array(currentData.rating)].map((_, i) => (
              <Star key={i} className="star" />
            ))}
          </div>
          <blockquote className="testimonial-text">
            "{currentData.text}"
          </blockquote>
          <div className="author">
            <div className={`avatar ${currentData.avatar}`}>
              <div className="avatar-inner"></div>
            </div>
            <div>
              <div className="author-name">{currentData.name}</div>
              <div className="relationship">{currentData.relationship}</div>
              <div className="location">{currentData.location}</div>
            </div>
          </div>
          <div className="navigation">
            <button onClick={prevTestimonial} className="nav-button">
              <ChevronLeft className="icon" />
            </button>
            <div className="dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                />
              ))}
            </div>
            <button onClick={nextTestimonial} className="nav-button">
              <ChevronRight className="icon" />
            </button>
          </div>
        </div>

        <div className="testimonial-grid">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="testimonial-box">
              <div className="stars small">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="star-small" />
                ))}
              </div>
              <p className="snippet">
                "{testimonial.text.substring(0, 120)}..."
              </p>
              <div className="author-mini">
                <div className={`avatar-mini ${testimonial.avatar}`}>
                  <div className="avatar-inner-mini"></div>
                </div>
                <div>
                  <div className="name-mini">{testimonial.name}</div>
                  <div className="location-mini">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
