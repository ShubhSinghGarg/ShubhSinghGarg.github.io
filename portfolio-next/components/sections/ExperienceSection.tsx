import React from 'react';
import Image from 'next/image';
import styles from '../../styles/components/sections/ExperienceSection.module.scss';

const ExperienceSection: React.FC = () => {
  return (
    <div className={styles.experienceContent} id="experience">
      <div className="container">
        <h2 id="experience-heading" data-aos="fade-down" className={`${styles.sectionTitle} ${styles.experienceTitle}`}>Experience</h2>
        
        <hr data-aos="fade-down" />
        
        {/* Peer Advisor */}
        <div className={styles.experienceItem}>
          <a href="https://www.utdallas.edu/reslife/pa/#:~:text=The%20role%20of%20the%20Peer,of%20University%20rules%20and%20regulations." target="_blank" rel="noreferrer">
            <div className={styles.imgExperienceWrapper} data-aos="fade-down">
              <Image 
                src="/img/utd.png" 
                alt="UTD Logo" 
                width={300} 
                height={150} 
                className={styles.imgExperience}
                style={{ height: 'auto' }}
              />
            </div>
          </a> 
          <h3 data-aos="fade-down" className={styles.sectionSubtitle}>Peer Advisor</h3>
          <h4 data-aos="fade-down" className={styles.employer}>Res Life</h4>
          <h5 data-aos="fade-down" className={styles.standoutInfo}>August 2019-Present</h5>
          <div data-aos="fade-down" className={styles.lineDec}></div>
          <p data-aos="fade-down" className={styles.jobDescription}>
            The role of the Peer Advisor is to assist students with academic, personal and housing concerns; 
            to serve as a resource and referral agent; to engage students in campus life; and to assist in the 
            interpretation and enforcement of University rules and regulations.
          </p>
        </div>
        
        <hr data-aos="fade-down" />
        
        {/* Conference Assistant */}
        <div className={styles.experienceItem}>
          <a href="https://www.utdallas.edu/reslife/ca/" target="_blank" rel="noreferrer">
            <div className={styles.imgExperienceWrapper} data-aos="fade-down">
              <Image 
                src="/img/utd.png" 
                alt="UTD Logo" 
                width={300} 
                height={150} 
                className={styles.imgExperience}
                style={{ height: 'auto' }}
              />
            </div>
          </a> 
          <h3 data-aos="fade-down" className={styles.sectionSubtitle}>Conference Assistant</h3>
          <h4 data-aos="fade-down" className={styles.employer}>Res Life</h4>
          <h5 data-aos="fade-down" className={styles.standoutInfo}>August 2019-Present</h5>
          <div data-aos="fade-down" className={styles.lineDec}></div>
          <p data-aos="fade-down" className={styles.jobDescription}>
            Conference Assistants (CAs) provide service and assistance to summer guests, assist in the daily operations 
            of the University Commons Residence Halls, and must possess exceptional customer service skills. CAs must be 
            knowledgeable of and able to implement university policies, as well as serve as a resource regarding inquiries 
            related to the campus and local community. CAs are the face of UTD to our summer guests and must serve as a 
            positive Comet role model. The CA position requires a genuine personal commitment, flexibility, and a good 
            understanding of the imprecise work hour description.
          </p>
        </div>
        
        <hr data-aos="fade-down" />
        
        {/* Inattentive blindness Exhibit */}
        <div className={styles.experienceItem}>
          <a href="#" target="_blank" rel="noreferrer">
            <div className={styles.imgExperienceWrapper} data-aos="fade-down">
              <Image 
                src="/img/utd.png" 
                alt="UTD Logo" 
                width={300} 
                height={150} 
                className={styles.imgExperience}
                style={{ height: 'auto' }}
              />
            </div>
          </a> 
          <h3 data-aos="fade-down" className={styles.sectionSubtitle}>Inattentive blindness Exhibit</h3>
          <h4 data-aos="fade-down" className={styles.employer}>Sci-Tech Discovery Center</h4>
          <h5 data-aos="fade-down" className={styles.standoutInfo}>August 2019-Present</h5>
          <div data-aos="fade-down" className={styles.lineDec}></div>
          <p data-aos="fade-down" className={styles.jobDescription}>
            Assembled a functioning Rig to simulate driving in a safe environment to showcase the effects of inattentive blindness 
            Useing Unity game engine to create the environment simulating a driving experience. Analog values like steering and 
            acceleration handled by prebuilt Arduino. Currently an active exhibition at 
            <a href="https://mindstretchingfun.org/" target="_blank" rel="noreferrer"> Sci-Tech Discovery Center.</a>
          </p>
        </div>
        
        <hr data-aos="fade-down" />
      </div>
    </div>
  );
};

export default ExperienceSection;
