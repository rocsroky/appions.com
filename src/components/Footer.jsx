import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Appions Technologies</h3>
            <p>Powering Technology with unstoppable energy and intelligence</p>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>AI Solutions</li>
              <li>E-commerce</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@appions.com</p>
            <p>Phone: +91 8830394388</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Appions Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;