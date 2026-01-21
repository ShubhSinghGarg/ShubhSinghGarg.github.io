import React, { useEffect } from 'react';
import Image from 'next/image';

const ActivitiesSection: React.FC = () => {
  useEffect(() => {
    // Initialize owl carousel for clubs
    if (typeof window !== 'undefined') {
      // We'll handle Owl Carousel initialization differently
      // In Next.js, we'll use the already loaded styles from public CSS
      // but won't try to initialize the jQuery plugin directly
      
      // This will be replaced with a pure React implementation or alternative
      console.log('Owl Carousel would be initialized here in the traditional site');
    }
  }, []);
  
  return (
    <div className="parallax-content activites-content" id="activities">
      <div className="container">
        <h2 id="activities-heading" data-aos="fade-down" className="section-title section-title-activities">Activities</h2>
        <hr data-aos="fade-down" />
        
        {/* Clubs Section */}
        <div className="container">
          <h3 data-aos="fade-down" className="section-subtitle section-subtitle-activities">Clubs</h3>
          
          <div className="row">
            <div className="col-12">
              <div data-aos="fade-down" id="owl-clubs" className="owl-carousel owl-theme">
                {/* UTD Blockchain Club */}
                <div data-aos="fade-down" className="item">
                  <div className="clubs-item">
                    <a href="https://www.utdcrypto.com/" target="_blank" rel="noreferrer">
                      <div className="club-img-container">
                        <Image 
                          className="club-img" 
                          src="/img/blockchain.png" 
                          alt="UTD Crypto" 
                          width={200}
                          height={200}
                          style={{ height: 'auto' }}
                        />
                      </div>
                      <h4>UT Dallas BlockChain Club</h4>
                    </a>
                    <div className="line-dec-2"></div>
                    <h5>Event Coordinator</h5>
                    <p>January 2020 - present</p>
                  </div>
                </div>
                
                {/* Code Burners */}
                <div data-aos="fade-down" className="item">
                  <div className="clubs-item">
                    <a href="https://cs.utdallas.edu/codeburners-16yr-club/" target="_blank" rel="noreferrer">
                      <div className="club-img-container">
                        <Image 
                          className="club-img" 
                          src="/img/codeburners.jpg" 
                          alt="Codeburners-2015" 
                          width={200}
                          height={200}
                          style={{ height: 'auto' }}
                        />
                      </div>
                      <h4>Code Burners</h4>
                    </a>
                    <div className="line-dec-2"></div>
                    <h5>Member</h5>
                  </div>
                </div>
                
                {/* Artificial Intelligence Society */}
                <div data-aos="fade-down" className="item">
                  <div className="clubs-item">
                    <a href="https://aisutd.org/" target="_blank" rel="noreferrer">
                      <div className="club-img-container">
                        <Image 
                          className="club-img" 
                          src="/img/AIS.jpg" 
                          alt="Artificial Intelligence Society" 
                          width={200}
                          height={200}
                          style={{ height: 'auto' }}
                        />
                      </div>
                      <h4>Artificial Inteligence Society</h4>
                    </a>
                    <div className="line-dec-2"></div>
                    <h5>Member</h5>
                  </div>
                </div>
                
                {/* ACM */}
                <div data-aos="fade-down" className="item">
                  <div className="clubs-item">
                    <a href="https://www.acmutd.co/about.html" target="_blank" rel="noreferrer">
                      <div className="club-img-container">
                        <Image 
                          className="club-img" 
                          src="/img/acm.png" 
                          alt="Association of Computing Machinery" 
                          width={200}
                          height={200}
                          style={{ height: 'auto' }}
                        />
                      </div>
                      <h4>ACM</h4>
                    </a>
                    <div className="line-dec-2"></div>
                    <h5>Member</h5>
                  </div>
                </div>
                
                {/* Computer Security Group */}
                <div data-aos="fade-down" className="item">
                  <div className="clubs-item">
                    <a href="https://cs.utdallas.edu/tag/computer-security-group-csg/" target="_blank" rel="noreferrer">
                      <div className="club-img-container">
                        <Image 
                          className="club-img" 
                          src="/img/csg.png" 
                          alt="Computer Security Group" 
                          width={200}
                          height={200}
                          style={{ height: 'auto' }}
                        />
                      </div>
                      <h4>Computer Security Group</h4>
                    </a>
                    <div className="line-dec-2"></div>
                    <h5>Member</h5>
                  </div>
                </div>
                
                {/* Student Game Developer Alliance */}
                <div data-aos="fade-down" className="item">
                  <div className="clubs-item">
                    <a href="https://utdallas.presence.io/organization/student-game-developer-association" target="_blank" rel="noreferrer">
                      <div className="club-img-container">
                        <Image 
                          className="club-img" 
                          src="/img/sgda.jpg" 
                          alt="Student Game Developer Alliance" 
                          width={200}
                          height={200}
                        />
                      </div>
                      <h4>Student Game Developer Alliance</h4>
                    </a>
                    <div className="line-dec-2"></div>
                    <h5>Member</h5>
                  </div>
                </div>
                
                {/* Club Improv */}
                <div data-aos="fade-down" className="item">
                  <div className="clubs-item">
                    <a href="https://www.facebook.com/clubimprovutd/" target="_blank" rel="noreferrer">
                      <div className="club-img-container">
                        <Image 
                          className="club-img" 
                          src="/img/club improv.png" 
                          alt="club improv" 
                          width={200}
                          height={200}
                        />
                      </div>
                      <h4>Club Improv</h4>
                    </a>
                    <div className="line-dec-2"></div>
                    <h5>Member</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hackathons Section */}
        <div className="container">
          <h3 data-aos="fade-down" className="section-subtitle section-subtitle-activities">Hackathons</h3>
          <div data-aos="fade-down" className="card-deck activity">
            <div className="card">
              <div className="card-body text-center">
                <div data-aos="fade-down" className="activity-img-container">
                  <Image 
                    src="/img/hackUTD.jpg" 
                    alt="Hack UTD" 
                    width={200}
                    height={150}
                  />
                </div>
                <h4 data-aos="fade-down" className="act-nm">Hack UTD</h4>
                <p data-aos="fade-down" className="act-des">
                  Biggest hackathon of North Texas hosted by ACM at UTD, where students have the oppurtunity to build 
                  anything they want alongside workshops and challenges.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-body text-center">
                <div data-aos="fade-down" className="activity-img-container">
                  <Image 
                    src="/img/gamejam.png" 
                    alt="Got Game" 
                    className="gotgame" 
                    width={200}
                    height={150}
                  />
                </div>
                <h4 data-aos="fade-down" className="act-nm">Game Jam</h4>
                <p data-aos="fade-down" className="act-des">
                  Hackathon hosted by SGDA at UTD, which focused on VR, but allowed AR and normal game development 
                  for either mobile or PC.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Extracurricular Section */}
        <div className="container" data-aos="fade-down">
          <h3 data-aos="fade-down" className="text-center">Extracurricular</h3>
          <div className="card-deck activity">
            <div className="card">
              <div className="card-body text-center">
                <a href="https://www.swacuho.org/" target="_blank" rel="noreferrer"> 
                  <div data-aos="fade-down" className="activity-img-container">
                    <Image 
                      src="/img/swacuho.jpg" 
                      alt="swacuho ra conference" 
                      width={200}
                      height={150}
                    />
                  </div>
                  <h4 data-aos="fade-down" className="act-nm">SWACUHO</h4>
                  <p data-aos="fade-down" className="act-des">
                    A two day program presenting RA's with resources and learning opportuinities based on the idea of 
                    community based development
                  </p>
                </a> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSection;
