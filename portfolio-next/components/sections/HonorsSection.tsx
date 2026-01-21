import React from 'react';
import Image from 'next/image';

const HonorsSection: React.FC = () => {
  return (
    <div id="honors" className="">
      <div className="container" data-aos="fade-down">
        <h1 id="honors-heading" data-aos="fade-down" className="section-title section-title-honors">Honors</h1>
        <hr data-aos="fade-down" style={{ borderWidth: '2px', width: '50%', paddingTop: '0px', marginTop: '0px', paddingBottom: '20px' }} />

        {/* Computer Science Computing Scholars */}
        <div className="row"> 
          <div className="col-8">
            <h3 style={{ fontFamily: 'RR', fontWeight: 'bold' }} data-aos="fade-right" className="">
              Computer Science Computing Scholars Honors Program Student
            </h3>
            <p style={{ fontFamily: 'RR' }} data-aos="fade-right" className="">
              Intense Bachelor of Science in Computer Science Degree Program created for exceptionally 
              gifted students who wish to pursue a demanding course of study enriched throughout with research experiences.
            </p>
          </div>
          <div className="col-3 offset-1">
            <a href="http://cs.utdallas.edu/computingscholars/" target="_blank" rel="noreferrer">
              <div className="honor-img-container" data-aos="fade-right">
                <Image 
                  className="rightImage" 
                  src="/img/cs2.png" 
                  alt="Computing Scholars" 
                  width={200}
                  height={150}
                />
              </div>
            </a>
          </div>
        </div>
        
        <hr data-aos="fade-down" style={{ paddingBottom: '30px' }} />
          
        {/* AES Scholarship */}
        <div className="row"> 
          <div className="col-3">
            <a href="https://www.utdallas.edu/enroll/freshman/aes/" target="_blank" rel="noreferrer">
              <div className="honor-img-container" data-aos="fade-left">
                <Image 
                  className="leftImage1" 
                  src="/img/aes.jpg" 
                  alt="AES Scholarship" 
                  width={200}
                  height={150}
                />
              </div>
            </a>
          </div> 
          <div className="col-8 offset-1">
            <h3 style={{ fontFamily: 'RR', fontWeight: 'bold' }} data-aos="fade-left" className="">
              UT Dallas AES Scholarship Awarded (Distinction Level)
            </h3>
            <p style={{ fontFamily: 'RR' }} data-aos="fade-left" className="">
              This scholarship is awarded on merit-based factors such as rigor of high school curriculum, 
              grades in all coursework, SAT or ACT scores, clas rank, etc.
            </p>
          </div>
        </div>  
        
        <hr data-aos="fade-down" style={{ paddingBottom: '30px' }} />        

        {/* Dean's List */}
        <div className="row"> 
          <div className="col-8">
            <h3 style={{ fontFamily: 'RR', fontWeight: 'bold' }} data-aos="fade-right" className="">
              Dean&apos;s List (
              <a href="https://www.utdallas.edu/news/students/fall-2018-deans-list/" target="_blank" rel="noreferrer" className="blend-link">
                Fall 2018
              </a> &amp; 
              <a href="https://www.utdallas.edu/current/deans-list/fall-2019/" target="_blank" rel="noreferrer" className="blend-link">
                Spring 2019
              </a>)
            </h3>
            <p style={{ fontFamily: 'RR' }} data-aos="fade-right" className="">
              This is a list of students that have completed at least 12 credit hours and rank among the 
              top 10% of students based on their grade-point average for that semester.
            </p>
          </div>
          <div className="col-3 offset-1">
            <div className="honor-img-container" data-aos="fade-right">
              <Image 
                className="rightImage" 
                src="/img/dean.jpg" 
                alt="Dean's List" 
                width={200}
                height={150}
              />
            </div>
          </div> 
        </div>
        
        <hr data-aos="fade-down" style={{ paddingBottom: '30px' }} />          
      </div>
    </div>
  );
};

export default HonorsSection;
