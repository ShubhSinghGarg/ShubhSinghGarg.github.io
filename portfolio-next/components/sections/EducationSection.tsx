import React from 'react';
import Image from 'next/image';
import styles from '../../styles/components/sections/EducationSection.module.scss';

const EducationSection: React.FC = () => {
  return (
    <section className={styles.educationContent} id="education">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div data-aos="fade-down" className="col-4 offset-4 col-adjustment">
            <h2 id="education-heading" className={`${styles.sectionTitle} ${styles.educationTitle}`}>Education</h2>
          </div>
        </div>
        
        <hr data-aos="fade-down" />
        
        {/* University Info */}
        <div className="row">
          <div className="col-7">    
            <h4 data-aos="fade-down" className={styles.textEducation}>
              <strong>The University of Texas at Dallas</strong> - Expected Graduation Date: May 2022
            </h4>
            <div data-aos="fade-down" className={styles.lineDec}></div>
            <h4 data-aos="fade-down" className={styles.textEducation}>
              <strong>Major</strong> - Bachelor of Science in Computer Science
            </h4>
            <h4 data-aos="fade-down" className={styles.textEducation}>
              <strong>Minor</strong> - Entrepneurship
            </h4>
            <div data-aos="fade-down" className={styles.lineDec}></div>
            <h4 data-aos="fade-down" className={styles.textEducation}>
              <strong>Cumullative GPA</strong> - 3.89
            </h4>
          </div>
          <div className="col-4 offset-1">
            <a href="http://cs.utdallas.edu/computingscholars/" target="_blank" rel="noreferrer">
              <div className={styles.imgEducationWrapper} data-aos="fade-down">
                <Image
                  src="/img/utd.png"
                  alt="UTD Emblem"
                  width={300}
                  height={200}
                  className={styles.imgEducation}
                  style={{ height: 'auto', width: 'auto' }}
                />
              </div>
            </a>
          </div>
        </div>
        
        {/* Coursework */}
        <div className="row">
          <div className="col-4 offset-4" data-aos="fade-down">
            <h3 className={styles.sectionSubtitle}>Relevant Coursework</h3>
          </div>
        </div>
        
        <div data-aos="fade-down" className={`row ${styles.cardDeck}`}>
          {/* Freshman Year */}
          <div className={`${styles.cardItem} text-white mb-2`}>
            <div className={styles.cardBody}>
              <h4 className="text-center" data-aos="fade-down">Freshmen Year<br /></h4>
              <h5 data-aos="fade-down" className="text-center">(2018-19)</h5>
              <div data-aos="fade-down" className={styles.lineDec2}></div>
              <p data-aos="fade-down" className=" ">Programming fundamentals</p>
              <p data-aos="fade-down" className=" ">Computer Science 1</p>
              <p data-aos="fade-down" className=" ">Discreet Math 1</p>
            </div>
          </div>
          
          {/* Sophomore Year */}
          <div className={`${styles.cardItem} text-white mb-2`}>
            <div className={styles.cardBody}>
              <h4 className="text-center" data-aos="fade-down">Sophomore Year<br /></h4>
              <h5 data-aos="fade-down" className="text-center">(2019-20)</h5>
              <div data-aos="fade-down" className={styles.lineDec2}></div>
              <p data-aos="fade-down" className=" ">Computer Science 2</p>
              <p data-aos="fade-down" className=" ">Discrete Mathematics for Computing 2</p>
              <p data-aos="fade-down" className=" ">Probability and Statistics in computer Science</p>
              <p data-aos="fade-down" className=" ">Algorithm analysis &amp; Data Structures </p>
              <p data-aos="fade-down" className=" ">C/C++ Programmming in UNIX Environment</p>
              <p data-aos="fade-down" className=" ">Computer Architecture</p>
              <p data-aos="fade-down" className=" ">Organization of programming paradigms</p>
            </div>
          </div>
          
          {/* Junior Year */}
          <div className={`${styles.cardItem} text-white mb-2`}>
            <div className={styles.cardBody}>
              <h4 className="text-center" data-aos="fade-down">Junior Year<br /></h4>
              <h5 data-aos="fade-down" className="text-center">(2020-21)</h5>
              <div data-aos="fade-down" className={styles.lineDec2}></div>
            </div>
          </div>
          
          {/* Senior Year */}
          <div className={`${styles.cardItem} text-white mb-2`}>
            <div className={styles.cardBody}>
              <h4 className="text-center" data-aos="fade-down">Senior Year<br /></h4>
              <h5 data-aos="fade-down" className="text-center">(2021-22)</h5>
              <div data-aos="fade-down" className={styles.lineDec2}></div>
            </div>
          </div>
        </div>
        
        {/* Technical Skills */}
        <div className="row">
          <div className="col-4 offset-4" data-aos="fade-down">
            <h3 className={styles.sectionSubtitle}>Technical Skills</h3>
          </div>
        </div>
        
        <div data-aos="fade-down" className={`row ${styles.cardDeck}`}>
          {/* Programming Languages */}
          <div className={`${styles.cardItem} text-white mb-2`}>
            <div className={styles.cardBody}>
              <h4 className="text-center" data-aos="fade-down">Proficient Programming Languages<br /></h4>
              <div data-aos="fade-down" className={styles.lineDec2}></div>
              <p data-aos="fade-down" className=" ">Python</p>
              <p data-aos="fade-down" className=" ">C++</p>
              <p data-aos="fade-down" className=" ">Java</p>
              <p data-aos="fade-down" className=" ">C#</p>
              <p data-aos="fade-down" className=" ">HTML</p>
              <p data-aos="fade-down" className=" ">CSS</p>
              <p data-aos="fade-down" className=" ">JavaScript</p>
              <p data-aos="fade-down" className=" ">Racket</p>
              <p data-aos="fade-down" className=" ">Prolog</p>
            </div>
          </div>
          
          {/* Software Experience */}
          <div className={`${styles.cardItem} text-white mb-2`}>
            <div className={styles.cardBody}>
              <h4 className="text-center" data-aos="fade-down">Experience with softwares<br /></h4>
              <div data-aos="fade-down" className={styles.lineDec2}></div>
              <p data-aos="fade-down" className=" ">Android Studio </p>
              <p data-aos="fade-down" className=" ">Adobe Photoshop</p>
              <p data-aos="fade-down" className=" ">Adobe Animate</p>
              <p data-aos="fade-down" className=" ">Adobe Illustrator</p>
              <p data-aos="fade-down" className=" ">Adobe After-effects</p>
              <p data-aos="fade-down" className=" ">Adobe DreamWeaver</p>
              <p data-aos="fade-down" className=" ">Unity Game Engine</p>
              <p data-aos="fade-down" className=" ">Blender</p>
              <p data-aos="fade-down" className=" ">Microsoft Office</p>
              <p data-aos="fade-down" className=" ">Google productivity Applications</p>
            </div>
          </div>
          
          {/* Operating Systems */}
          <div className={`${styles.cardItem} text-white mb-2`}>
            <div className={styles.cardBody}>
              <h4 className="text-center" data-aos="fade-down">Operating Systems<br /></h4>
              <div data-aos="fade-down" className={styles.lineDec2}></div>
              <p data-aos="fade-down" className=" ">Windows</p>
              <p data-aos="fade-down" className=" ">Linux</p>
              <p data-aos="fade-down" className=" ">Android</p>
              <p data-aos="fade-down" className=" ">IOS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
