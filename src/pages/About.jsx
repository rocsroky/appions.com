import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero section">
        <div className="container">
          <h1 className="section-title">About Appions Technologies</h1>
          <p className="section-subtitle">
            Powering Technology with unstoppable energy and intelligence
          </p>
        </div>
      </section>

      <section className="about-content section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Our Mission</h2>
              <p>
                At Appions Technologies, we believe in transforming businesses through 
                innovative technology solutions. Our mission is to empower organizations 
                with cutting-edge digital tools that drive growth, efficiency, and success.
              </p>
              <p>
                We combine technical expertise with creative thinking to deliver solutions 
                that not only meet current needs but also prepare our clients for future challenges.
              </p>
            </div>
            <div>
              <h2>Our Vision</h2>
              <p>
                To be the leading technology partner for businesses worldwide, known for 
                our innovation, reliability, and commitment to excellence. We envision a 
                future where technology seamlessly integrates with business processes to 
                create unprecedented value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="grid grid-3">
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>We constantly explore new technologies and methodologies to stay ahead of the curve.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Partnership</h3>
              <p>We build long-term relationships with our clients, becoming their trusted technology partner.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Excellence</h3>
              <p>We maintain the highest standards in everything we do, from code quality to customer service.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔒</div>
              <h3>Security</h3>
              <p>We prioritize security in all our solutions, ensuring your data and systems are protected.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📈</div>
              <h3>Growth</h3>
              <p>We focus on solutions that scale with your business and drive measurable results.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h3>Global Reach</h3>
              <p>We serve clients worldwide, bringing local expertise with global perspective.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats section">
        <div className="container">
          <div className="grid grid-3">
            <div className="stat-card">
              <h3>100+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-card">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;