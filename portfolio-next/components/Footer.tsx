import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/components/Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.primaryButton}>
              <a href="#home">Back To Top</a>
            </div>
            <ul className={styles.socialLinks}>
              <li>
                <a href="https://www.facebook.com/shubh.garg.758/">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/shubhga61557216">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/reach-shubh-singh-garg/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="https://github.com/ShubhSinghGarg">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
            <p className={styles.copyright}>Shubh Singh Garg Official Website &copy; {new Date().getFullYear()}. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
