import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      image: "🛒"
    },
    {
      title: "Healthcare Management System",
      category: "Enterprise Application",
      description: "Comprehensive healthcare management system for hospitals with patient records, appointment scheduling, and billing.",
      technologies: ["Angular", "Java Spring", "PostgreSQL", "Docker"],
      image: "🏥"
    },
    {
      title: "AI Chatbot for Customer Service",
      category: "AI Application",
      description: "Intelligent chatbot with natural language processing for automated customer support and query resolution.",
      technologies: ["Python", "TensorFlow", "NLP", "REST API"],
      image: "🤖"
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure mobile banking application with biometric authentication, transaction history, and real-time notifications.",
      technologies: ["React Native", "Firebase", "Biometric API", "Push Notifications"],
      image: "📱"
    },
    {
      title: "Restaurant Management System",
      category: "Management Application",
      description: "Complete restaurant management solution with POS system, inventory tracking, and staff management.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Payment Gateway"],
      image: "🍽️"
    },
    {
      title: "Real Estate Portal",
      category: "Web Development",
      description: "Property listing platform with advanced search filters, virtual tours, and agent management system.",
      technologies: ["Next.js", "Express.js", "MongoDB", "Google Maps API"],
      image: "🏠"
    },
    {
      title: "Learning Management System",
      category: "Enterprise Application",
      description: "Educational platform with course management, video streaming, assessments, and progress tracking.",
      technologies: ["React", "Django", "PostgreSQL", "Video Streaming"],
      image: "📚"
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile Development",
      description: "Cross-platform fitness app with workout tracking, nutrition planning, and social features.",
      technologies: ["Flutter", "Firebase", "Health APIs", "Social Integration"],
      image: "💪"
    }
  ];

  return (
    <div className="portfolio">
      <section className="portfolio-hero section">
        <div className="container">
          <h1 className="section-title">Our Portfolio</h1>
          <p className="section-subtitle">
            Showcasing our successful projects and innovative solutions
          </p>
        </div>
      </section>

      <section className="portfolio-grid section">
        <div className="container">
          <div className="grid grid-2">
            {projects.map((project, index) => (
              <div key={index} className="portfolio-card">
                <div className="project-image">
                  <span className="project-icon">{project.image}</span>
                </div>
                <div className="project-content">
                  <div className="project-category">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Have a Project in Mind?</h2>
            <p>Let's bring your ideas to life with our expertise and innovation.</p>
            <a href="/contact" className="btn">Start Your Project</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;