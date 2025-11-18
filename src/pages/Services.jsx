import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Static Website Development",
      description: "Fast, secure, and SEO-friendly static websites built with modern technologies.",
      features: ["Lightning fast loading", "SEO optimized", "Mobile responsive", "Secure hosting"]
    },
    {
      title: "Dynamic Website Development",
      description: "Interactive web applications with dynamic content management systems.",
      features: ["Content management", "User authentication", "Database integration", "Real-time updates"]
    },
    {
      title: "Management Applications",
      description: "Custom business management solutions to streamline your operations.",
      features: ["Workflow automation", "Data analytics", "User management", "Custom reporting"]
    },
    {
      title: "Enterprise Applications",
      description: "Scalable enterprise-grade applications for large organizations.",
      features: ["High scalability", "Security compliance", "Integration ready", "24/7 support"]
    },
    {
      title: "Mobile App Development",
      description: "Native and hybrid mobile applications for iOS and Android platforms.",
      features: ["Cross-platform", "Native performance", "App store ready", "Push notifications"]
    },
    {
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with payment integration and inventory management.",
      features: ["Payment gateway", "Inventory management", "Order tracking", "Analytics dashboard"]
    },
    {
      title: "SEO Services",
      description: "Search engine optimization to improve your online visibility and rankings.",
      features: ["Keyword research", "On-page SEO", "Technical SEO", "Performance tracking"]
    },
    {
      title: "AI Applications & Chatbots",
      description: "Intelligent AI solutions including chatbots for customer service automation.",
      features: ["Natural language processing", "24/7 availability", "Multi-platform", "Learning algorithms"]
    }
  ];

  return (
    <div className="services">
      <section className="services-hero section">
        <div className="container">
          <h1 className="section-title">Our Services</h1>
          <p className="section-subtitle">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>
      </section>

      <section className="services-grid section">
        <div className="container">
          <div className="grid grid-2">
            {services.map((service, index) => (
              <div key={index} className="service-detail-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="feature-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how we can help transform your business with technology.</p>
            <a href="/contact" className="btn">Contact Us Today</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;