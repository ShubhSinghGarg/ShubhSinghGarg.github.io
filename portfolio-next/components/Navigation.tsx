import React, { useState, useEffect } from 'react';
import styles from '../styles/components/Navigation.module.scss';

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  // Function to determine which section is in viewport
  useEffect(() => {
    const handleScroll = (): void => {
      const sections = document.querySelectorAll<HTMLElement>('section, div[id]');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
          const id = section.getAttribute('id');
          if (id) {
            currentSection = id;
          }
        }
      });

      if (currentSection !== activeSection && currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Call once on mount to set initial active section
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  interface NavItem {
    id: string;
    label: string;
  }

  const navItems: NavItem[] = [
    { id: 'home', label: 'Intro' },
    { id: 'education', label: 'Education' },
    { id: 'services', label: 'Services' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'activities', label: 'Activities' },
    { id: 'honors', label: 'Honors' },
    { id: 'contact-me', label: 'Contact Me' }
  ];

  return (
    <nav
      data-aos="fade-left"
      data-aos-easeing="ease-in-quad"
      data-aos-anchor="#education"
      data-aos-once="true"
      className={styles.fixedSideNavbar}
      aria-label="Main navigation"
    >
      <ul className={styles.menu}>
        {navItems.map((item) => (
          <li 
            key={item.id}
            className={activeSection === item.id ? styles.active : ''}
          >
            <a className={styles.navLink} href={`#${item.id}`}>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
