import React, { useState, useEffect } from 'react';
import './portfolio.css';
import heroImage from '../assets/image.jpeg';

// React Icons
import { FaGithub, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FiExternalLink, FiMail } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Food Ordering Platform",
    description: "A fully responsive e-commerce platform built with React, Node.js, and MongoDB. Features include email notifications, product search etc.",
    image: "https://i.ibb.co/p6Z8t10Q/Screenshot-2025-03-14-011758.png",
    skills: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "NodeMailer"],
    demoUrl: "https://great-indian-resturant-frontend.vercel.app/",
    githubUrl: "https://github.com/kprince612/Great-Indian-Resturant_frontend",
  },
  {
    id: 2,
    title: "Chat Room Application",
    description: "A Real-Time chat application with real-time updates and includes google authentication, filtering of letters, and team collaboration features. Built with React, Supabase, and Tailwind CSS.",
    image: "https://i.ibb.co/FkCktgtZ/Screenshot-2025-03-14-013327.png",
    skills: ["React", "Supabase", "Tailwind CSS", "Framer Motion", "Google Authentication", "Next.js"],
    demoUrl: "https://chat-app1-psi.vercel.app/",
    githubUrl: "https://github.com/kprince612/ChatApp_Supabase",
  },
  {
    id: 3,
    title: "Online Bus Booking Application",
    description: "A fully responsive Ticket Booking platform built with React, Node.js, Tailwind CSS and MongoDB. Features include email notifications, Bus Searching, QR Code Ticket etc. Admin Panel for Admin.",
    image: "https://i.ibb.co/kV5k694G/Screenshot-2025-03-14-012542.png",
    skills: ["React", "MongoDB", "Express", "Node.js", "NodeMailer"],
    demoUrl: "https://dtc-bus-end-user.vercel.app/",
    githubUrl: "https://github.com/kprince612/dtc_bus_end_user",
  },
];

const experience = [
  {
    id: 1,
    role: "Software Developer Intern",
    company: "Humm Info Care",
    duration: "May 2025 – August 2025",
    details: [
      "Add new features to the mobile app and website, and improve the UI/UX of existing features using React Native and React.",
      "Optimized code for improved performance and resolved issues in APIs, design, and overall functionality."
    ]
  },
];

const socialLinks = {
  github: "https://github.com/kprince612/",
  linkedin: "https://www.linkedin.com/in/prince-khandelwal-46413a288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  email: "khandelwalprince612@gmail.com",
};

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="logo">Portfolio</a>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="nav-link" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>About</a></li>
            {/* <li><a href="#skills" className="nav-link" onClick={() => scrollToSection('skills')}>Skills</a></li> */}
            <li><a href="#experience" className="nav-link" onClick={() => scrollToSection('experience')}>Experience</a></li>
            <li><a href="#projects" className="nav-link" onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              Hi, I'm <span className="highlight">Prince Khandelwal</span>
            </h1>
            <p>
              A passionate Full-Stack Developer creating digital experiences 
              that make a difference. I love building beautiful, functional 
              applications that solve real-world problems.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">
                <a href="https://drive.google.com/file/d/1j4cnA4t8v01PHI1yGVHRRhnjia8_U1rO/view?usp=drivesdk" style={{ color: 'inherit', textDecoration: 'none' }}>Resume</a>
              </button>
              <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Prince Khandelwal - Full Stack Developer" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="section-container">
          <h2 className="section-title fade-in">About Me</h2>
          <div className="about-content fade-in">
            <div className="about-image">
              <img src={heroImage} alt="About Prince Khandelwal" />
            </div>
            <div className="about-text">
              <p>
                Hi, I’m Prince, a passionate Full-Stack Developer and App Developer with a strong foundation in C/C++, Python, and JavaScript. I am currently pursuing my B.Tech in Computer Science and Engineering from Rajasthan Technical University, Kota, with a CGPA of 9.14.
              </p>
              <p>
                I’m enthusiastic about solving real-world problems using technology and continuously learning modern tools and frameworks like React, Node.js, Next.js, Prisma, Tailwind CSS, and more.
              </p>
              <p>
                When I’m not coding, I love exploring new ideas, collaborating with like-minded people, and pushing my limits through challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience">
        <div className="section-container">
          <h2 className="section-title fade-in">Experience</h2>
          <div className="experience-grid fade-in">
            {experience.map((exp) => (
              <div key={exp.id} className="experience-card">
                <h3>{exp.role} <span className="company">@ {exp.company}</span></h3>
                <p className="duration">{exp.duration}</p>
                <ul>
                  {exp.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <div className="section-container">
          <h2 className="section-title fade-in">Featured Projects</h2>
          <div className="projects-grid fade-in">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-skills">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-link demo-btn"
                    >
                      <FiExternalLink className="btn-icon" /> Live Demo
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-link github-btn"
                    >
                      <FaGithub className="btn-icon" /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="section-container">
          <h2 className="section-title fade-in">Get In Touch</h2>
          <div className="contact-content fade-in">
            <div className="contact-info">
              <h3>Let's work together!</h3>
              <p>
                I'm always interested in new opportunities and collaborations. 
                Whether you have a project in mind or just want to chat about tech, 
                feel free to reach out!
              </p>

              <div className="contact-item">
                <div className="contact-icon"><FiMail /></div>
                <div>
                  <strong>Email</strong>
                  <p>{socialLinks.email}</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><FaPhoneAlt /></div>
                <div>
                  <strong>Phone</strong>
                  <p>+91 9785086019</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><FaMapMarkerAlt /></div>
                <div>
                  <strong>Location</strong>
                  <p>Kota, Rajasthan, India</p>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="social-links">
          <a href={socialLinks.github} className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href={socialLinks.linkedin} className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href={`mailto:${socialLinks.email}`} className="social-link" aria-label="Email">
            <FiMail />
          </a>
        </div>
        {/* <p>&copy; 2024 Prince Khandelwal. All rights reserved.</p> */}
      </footer>
    </div>
  );
};

export default Portfolio;
