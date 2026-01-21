import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.scss';

// Import Bootstrap directly
import 'bootstrap/dist/css/bootstrap.min.css';

// Initialize Font Awesome to prevent flickering
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Import AOS on the client-side only
    const AOS = require('aos');
    require('aos/dist/aos.css');

    // Import Bootstrap JS on the client-side
    require('bootstrap/dist/js/bootstrap.bundle.min.js');

    // Initialize AOS with original settings to match reference
    AOS.init({
      offset: 200,
      duration: 1000,
      once: true
    });
    
    // Handle smooth scrolling for navigation links
    const handleNavClick = (e: Event) => {
      const target = (e.target as Element)?.closest('a[href^="#"]') as HTMLAnchorElement;
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href');
        if (id !== '#') {
          const element = document.querySelector(id!);
          if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
            
            // Update hash
            window.history.pushState(null, '', id!);
          }
        }
      }
    };

    // Add event listener for navigation clicks
    document.body.addEventListener('click', handleNavClick);

    return () => {
      // Clean up event listeners
      document.body.removeEventListener('click', handleNavClick);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
