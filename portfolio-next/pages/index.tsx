import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Navigation from '../components/Navigation';
import VideoBackground from '../components/VideoBackground';
import HomeSection from '../components/sections/HomeSection';

// Lazy load sections that are below the fold for better performance
const EducationSection = dynamic(() => import('../components/sections/EducationSection'), {
  loading: () => <div className="section-loading">Loading...</div>
});
const ServicesSection = dynamic(() => import('../components/sections/ServicesSection'), {
  loading: () => <div className="section-loading">Loading...</div>
});
const ExperienceSection = dynamic(() => import('../components/sections/ExperienceSection'), {
  loading: () => <div className="section-loading">Loading...</div>
});
const ProjectsSection = dynamic(() => import('../components/sections/ProjectsSection'), {
  loading: () => <div className="section-loading">Loading...</div>
});
const ActivitiesSection = dynamic(() => import('../components/sections/ActivitiesSection'), {
  loading: () => <div className="section-loading">Loading...</div>
});
const HonorsSection = dynamic(() => import('../components/sections/HonorsSection'), {
  loading: () => <div className="section-loading">Loading...</div>
});
const ContactSection = dynamic(() => import('../components/sections/ContactSection'), {
  loading: () => <div className="section-loading">Loading...</div>
});
const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <div className="footer-loading">Loading...</div>
});

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Shubh Singh Garg | Portfolio</title>
        <meta name="description" content="Professional portfolio of Shubh Singh Garg - Computer Science student, programmer, developer, and designer specializing in web development, mobile apps, and game development." />
        <meta name="keywords" content="Shubh Singh Garg, portfolio, computer science, programmer, developer, designer, web development, mobile apps, game development, UTD" />
        <meta name="author" content="Shubh Singh Garg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Shubh Singh Garg | Portfolio" />
        <meta property="og:description" content="Professional portfolio showcasing projects in web development, mobile applications, game development, and automation." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://shubhsinghgarg.github.io/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shubh Singh Garg | Portfolio" />
        <meta name="twitter:description" content="Professional portfolio showcasing projects in web development, mobile applications, game development, and automation." />
        <meta name="twitter:image" content="/og-image.jpg" />
        
        {/* Additional SEO and accessibility meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://shubhsinghgarg.github.io/" />
      </Head>

      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      <Navigation />

      <main id="main-content">
        <div id="home" className="section">
          <HomeSection />
        </div>

        <section id="education" className="section" aria-labelledby="education-heading">
          <EducationSection />
        </section>

        <section id="services" className="section" aria-labelledby="services-heading">
          <ServicesSection />
        </section>

        <section id="experience" className="section" aria-labelledby="experience-heading">
          <ExperienceSection />
        </section>

        <section id="projects" className="section" aria-labelledby="projects-heading">
          <ProjectsSection />
        </section>

        <section id="activities" className="section" aria-labelledby="activities-heading">
          <ActivitiesSection />
        </section>

        <section id="honors" className="section" aria-labelledby="honors-heading">
          <HonorsSection />
        </section>

        <section id="contact-me" className="section" aria-labelledby="contact-heading">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
