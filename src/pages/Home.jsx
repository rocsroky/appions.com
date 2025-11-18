import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Appions Technologies
            </h1>
            <p className="hero-subtitle">
              Powering Technology with unstoppable energy and intelligence
            </p>
            <p className="hero-description">
              We deliver cutting-edge technology solutions that transform businesses 
              and drive innovation across industries.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn">Our Services</Link>
              <Link to="/portfolio" className="btn btn-outline">View Portfolio</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features section">
        <div className="container">
          <h2 className="section-title">Why Choose Appions?</h2>
          <div className="grid grid-3">
            <div className="card">
              <div className="feature-icon">🚀</div>
              <h3>Innovation First</h3>
              <p>We leverage the latest technologies to create solutions that give you a competitive edge.</p>
            </div>
            <div className="card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Our optimized development process ensures rapid delivery without compromising quality.</p>
            </div>
            <div className="card">
              <div className="feature-icon">🎯</div>
              <h3>Results Driven</h3>
              <p>We focus on measurable outcomes that directly impact your business growth.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-preview section">
        <div className="container">
          <h2 className="section-title">Our Core Services</h2>
          <div className="grid grid-2">
            <div className="service-card">
              <h3>Web Development</h3>
              <p>Static & dynamic websites, enterprise applications, and e-commerce solutions.</p>
            </div>
            <div className="service-card">
              <h3>Mobile Development</h3>
              <p>Native and hybrid mobile applications for iOS and Android platforms.</p>
            </div>
            <div className="service-card">
              <h3>AI Solutions</h3>
              <p>Intelligent chatbots and AI-powered applications to automate your business.</p>
            </div>
            <div className="service-card">
              <h3>SEO & Marketing</h3>
              <p>Search engine optimization to boost your online visibility and reach.</p>
            </div>
          </div>
          <div className="text-center" style={{marginTop: '40px'}}>
            <Link to="/services" className="btn">View All Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;