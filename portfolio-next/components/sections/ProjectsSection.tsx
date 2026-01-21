import React, { useState, useEffect } from 'react';
import VideoBackground from '../VideoBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import AutomationModal from '../modals/AutomationModal';
import AppModal from '../modals/AppModal';
import WebModal from '../modals/WebModal';
import GameModal from '../modals/GameModal';
import MiscModal from '../modals/MiscModal';
import { Modal } from 'react-bootstrap';

const ProjectsSection: React.FC = () => {
  // State for handling modals
  const [showAutomationModal, setShowAutomationModal] = useState<boolean>(false);
  const [showAppModal, setShowAppModal] = useState<boolean>(false);
  const [showWebModal, setShowWebModal] = useState<boolean>(false);
  const [showGameModal, setShowGameModal] = useState<boolean>(false);
  const [showMiscModal, setShowMiscModal] = useState<boolean>(false);
  
  // Effect for initializing Owl Carousel
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('Owl Carousel would be initialized here in the traditional site');
    }
  }, []);

  return (
    <VideoBackground id="projects" videoSrc="/videos/Drone - 22059.mp4">
      <div className="container projects-content">
        <h2 id="projects-heading" data-aos="fade-down" className="section-title section-title-projects">Projects</h2>
        <hr data-aos="fade-down" />
        
        <div className="row">
          <div className="col-12">
            <div data-aos="fade-down" id="owl-testimonials" className="owl-carousel owl-theme">
              {/* Automation Projects */}
              <div data-aos="fade-down" className="item">
                <div className="testimonials-item vector-symbol">
                  <button 
                    onClick={() => setShowAutomationModal(true)}
                    className="btn-transparent"
                    style={{ background: 'transparent', border: 'none', color: 'inherit' }}
                  >
                    <FontAwesomeIcon 
                      icon={faCogs} 
                      data-aos="fade-down" 
                      style={{ fontSize: '8rem', color: '#e5e5e5', marginBottom: '20px' }}
                    />
                    <h4 className="text-content" style={{ fontSize: '3rem', fontWeight: 900, color: '#e5e5e5' }}>
                      Automation Projects
                    </h4>
                  </button>
                </div>
              </div>
              
              {/* App Development */}
              <div data-aos="fade-down" className="item">
                <div className="testimonials-item vector-symbol">
                  <button 
                    onClick={() => setShowAppModal(true)} 
                    className="btn-transparent"
                    style={{ background: 'transparent', border: 'none', color: 'inherit' }}
                  >
                    <FontAwesomeIcon 
                      icon={faCogs} 
                      data-aos="fade-down" 
                      style={{ fontSize: '8rem', color: '#e5e5e5', marginBottom: '20px' }}
                    />
                    <h4 className="text-content" style={{ fontSize: '3rem', fontWeight: 900, color: '#e5e5e5' }}>
                      App Development
                    </h4>
                  </button>
                </div>
              </div>
              
              {/* Web Development */}
              <div data-aos="fade-down" className="item">
                <div className="testimonials-item vector-symbol">
                  <button 
                    onClick={() => setShowWebModal(true)} 
                    className="btn-transparent"
                    style={{ background: 'transparent', border: 'none', color: 'inherit' }}
                  >
                    <FontAwesomeIcon 
                      icon={faCogs} 
                      data-aos="fade-down" 
                      style={{ fontSize: '8rem', color: '#e5e5e5', marginBottom: '20px' }}
                    />
                    <h4 className="text-content" style={{ fontSize: '3rem', fontWeight: 900, color: '#e5e5e5' }}>
                      Web Development
                    </h4>
                  </button>
                </div>
              </div>
              
              {/* Game Development */}
              <div data-aos="fade-down" className="item">
                <div className="testimonials-item vector-symbol">
                  <button 
                    onClick={() => setShowGameModal(true)} 
                    className="btn-transparent"
                    style={{ background: 'transparent', border: 'none', color: 'inherit' }}
                  >
                    <FontAwesomeIcon 
                      icon={faCogs} 
                      data-aos="fade-down" 
                      style={{ fontSize: '8rem', color: '#e5e5e5', marginBottom: '20px' }}
                    />
                    <h4 className="text-content" style={{ fontSize: '3rem', fontWeight: 900, color: '#e5e5e5' }}>
                      Game Development
                    </h4>
                  </button>
                </div>
              </div>
              
              {/* Miscellaneous */}
              <div data-aos="fade-down" className="item">
                <div className="testimonials-item vector-symbol">
                  <button 
                    onClick={() => setShowMiscModal(true)} 
                    className="btn-transparent"
                    style={{ background: 'transparent', border: 'none', color: 'inherit' }}
                  >
                    <FontAwesomeIcon 
                      icon={faCogs} 
                      data-aos="fade-down" 
                      style={{ fontSize: '8rem', color: '#e5e5e5', marginBottom: '20px' }}
                    />
                    <h4 className="text-content" style={{ fontSize: '3rem', fontWeight: 900, color: '#e5e5e5' }}>
                      Miscellaneous
                    </h4>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modals */}
      <Modal
        show={showAutomationModal}
        onHide={() => setShowAutomationModal(false)}
        dialogClassName="modal-xl"
        centered
      >
        <AutomationModal onClose={() => setShowAutomationModal(false)} />
      </Modal>
      
      <Modal
        show={showAppModal}
        onHide={() => setShowAppModal(false)}
        dialogClassName="modal-xl"
        centered
      >
        <AppModal onClose={() => setShowAppModal(false)} />
      </Modal>
      
      <Modal
        show={showWebModal}
        onHide={() => setShowWebModal(false)}
        dialogClassName="modal-xl"
        centered
      >
        <WebModal onClose={() => setShowWebModal(false)} />
      </Modal>
      
      <Modal
        show={showGameModal}
        onHide={() => setShowGameModal(false)}
        dialogClassName="modal-xl"
        centered
      >
        <GameModal onClose={() => setShowGameModal(false)} />
      </Modal>
      
      <Modal
        show={showMiscModal}
        onHide={() => setShowMiscModal(false)}
        dialogClassName="modal-xl"
        centered
      >
        <MiscModal onClose={() => setShowMiscModal(false)} />
      </Modal>
    </VideoBackground>
  );
};

export default ProjectsSection;
