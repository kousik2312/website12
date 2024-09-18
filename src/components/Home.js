import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const Home = () => {
  const message = "Join us in taking your business online and expanding its reach globally. Together, we’ll transform your digital presence and unlock new opportunities for growth. Let’s build the future of your business, starting today!";
  
  const textRef = useRef(null);
  const timeoutRef = useRef(null);

  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [testimonials] = useState([
    { name: "John Doe", content: "WaveCrestIT helped us boost our online presence with a stellar website!" },
    { name: "Jane Smith", content: "Their customer support is top-notch, and the team is very responsive." },
    { name: "Mike Lee", content: "Our mobile app is performing beautifully thanks to WaveCrestIT." },
    { name: "Sara K.", content: "The best web development service I’ve experienced so far!" },
    { name: "David R.", content: "WaveCrestIT understood our vision and delivered beyond expectations." }
  ]);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePreviousTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Typing effect for the main message
  useEffect(() => {
    let index = 0;

    const typeText = () => {
      if (index < message.length) {
        if (textRef.current) {
          textRef.current.textContent += message.charAt(index);
          index++;
        }
        timeoutRef.current = setTimeout(typeText, 50);
      }
    };

    if (textRef.current) {
      textRef.current.textContent = '';
    }

    typeText();

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [message]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="home-container">
      {/* Typing Effect and Free Estimate Button */}
      <div className="sentence-section" id="home">
        <h1 ref={textRef}></h1>
        <button className="get-free-estimate" onClick={() => setIsEstimateModalOpen(true)}>Get Free Estimate</button>
      </div>

      {/* About Us Section */}
      <div className="about-section" id="about">
        <h2>About WaveCrestIT</h2>
        <p>
          At WaveCrestIT, we pride ourselves on being more than just a technology provider; we are your strategic partner in navigating the digital landscape. Our commitment to delivering tailored digital solutions is grounded in our deep understanding of how technology can transform businesses and drive measurable results.
        </p>
        <p>
          Our team of experts knows that in today’s fast-paced digital world, every business is unique. That’s why we take the time to understand your specific challenges, goals, and vision. Whether you are just starting your digital journey or looking to refine and enhance your existing online presence, we have the experience and tools to help you succeed.
        </p>
        <p>
          We specialize in creating customized websites and mobile applications that are not only functional but also reflect the heart of your business. Each project we undertake is meticulously designed to resonate with your target audience, ensuring that your digital platforms are user-friendly, visually appealing, and optimized for conversions.
        </p>
        <p>
          At WaveCrestIT, we believe in building long-term relationships with our clients. Our customer-centric approach ensures that we work closely with you throughout the entire process, offering insights and advice at every step.
        </p>
        <p>
          When you partner with us, you’re not just getting a service provider—you’re getting a dedicated team invested in your success. We measure our success by your growth, and we’re here to support you through every stage of your business’s digital evolution.
        </p>
      </div>

      <div className="services-container" id="services">
  <h2 className="section-title">Our Services</h2>
  <div className="services-grid">
    <div className="service-card">
      <div className="service-front">
        <img src="/service1.jpg" alt="Website Development" />
        <p className="service-title">Website Development</p>
      </div>
      <div className="service-back">
        <p>We build responsive and engaging websites that convert!</p>
        <Link to="/services/website-development">Learn More</Link>
      </div>
    </div>

    <div className="service-card">
      <div className="service-front">
        <img src="/service2.jpg" alt="Enhancing Websites" />
        <p className="service-title">Enhancing Websites</p>
      </div>
      <div className="service-back">
        <p>We upgrade and improve your existing websites to meet modern standards.</p>
        <Link to="/services/enhancing-websites">Learn More</Link>
      </div>
    </div>

    <div className="service-card">
      <div className="service-front">
        <img src="/service3.jpg" alt="Mobile Application Development" />
        <p className="service-title">Mobile Application Development</p>
      </div>
      <div className="service-back">
        <p>Get mobile solutions that drive engagement and increase accessibility.</p>
        <Link to="/services/mobile-application-development">Learn More</Link>
      </div>
    </div>

    <div className="service-card">
      <div className="service-front">
        <img src="/service4.jpg" alt="Analyzing" />
        <p className="service-title">Analyzing</p>
      </div>
      <div className="service-back">
        <p>We provide data-driven insights to help you understand customer behavior.</p>
        <Link to="/services/analyzing">Learn More</Link>
      </div>
    </div>

    <div className="service-card">
      <div className="service-front">
        <img src="/service5.jpg" alt="Marketing" />
        <p className="service-title">Marketing</p>
      </div>
      <div className="service-back">
        <p>Expand your brand reach through targeted digital marketing strategies.</p>
        <Link to="/services/marketing">Learn More</Link>
      </div>
    </div>

    <div className="service-card">
      <div className="service-front">
        <img src="/service6.jpg" alt="Live Support" />
        <p className="service-title">Live Support</p>
      </div>
      <div className="service-back">
        <p>Provide 24/7 customer support to assist your clients in real-time.</p>
        <Link to="/services/live-support">Learn More</Link>
      </div>
    </div>
  </div>
</div>

      {/* Call to Action Section */}
      <div className="consultation-section">
        <p>We don’t just build websites and apps; we build digital experiences that connect with your audience and achieve your business goals.</p>
        <button className="get-consultation" onClick={() => setIsConsultationModalOpen(true)}>Get a Free Consultation</button>
      </div>

      {/* Testimonial Slider */}
      <div className="testimonial-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-slider">
          <div className="testimonial-content">
            <p>{testimonials[currentTestimonial].content}</p>
            <p><strong>- {testimonials[currentTestimonial].name}</strong></p>
          </div>
          <button className="prev-button" onClick={handlePreviousTestimonial}>←</button>
          <button className="next-button" onClick={handleNextTestimonial}>→</button>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="contact-us-section" id="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <label>
            Name:
            <input 
              type="text"
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              placeholder="Your Name" 
              required 
              />
            </label>
            <label>
              Email:
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                placeholder="Your Email" 
                required 
              />
            </label>
            <label>
              Phone:
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleInputChange} 
                placeholder="Your Phone Number" 
                required 
              />
            </label>
            <label>
              Message:
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleInputChange} 
                placeholder="Your Message" 
                required
              ></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      
        {/* Modal for Free Estimate */}
        <Modal 
          isOpen={isEstimateModalOpen} 
          onClose={() => setIsEstimateModalOpen(false)} 
          title="Get Free Estimate"
        />
      
        {/* Modal for Free Consultation */}
        <Modal 
          isOpen={isConsultationModalOpen} 
          onClose={() => setIsConsultationModalOpen(false)} 
          title="Get Free Consultation"
        />
      </div>
    );
  };
  
  export default Home;