import React from 'react';
import Image from 'next/image';
import { Carousel, Modal } from 'react-bootstrap';

interface AutomationModalProps {
  onClose: () => void;
}

const AutomationModal: React.FC<AutomationModalProps> = ({ onClose }) => {
  return (
    <>
      {/* Modal Header */}
      {/* @ts-ignore - react-bootstrap v1.6.1 type compatibility */}
      <Modal.Header className="text-center" closeButton>
        <Modal.Title>Automating simple tasks in life</Modal.Title>
      </Modal.Header>

      {/* Modal body */}
      <Modal.Body className="text-center">
        <Carousel id="demo">
          {/* Sudoku Solver */}
          <Carousel.Item>
            <a 
              data-aos="fade-left" 
              href="https://github.com/ShubhSinghGarg/Sudoku_python" 
              target="_blank"
              rel="noreferrer"
              className="blend-link-dark"
            >
              <div className="img-container modalOne">
                <Image 
                  src="/img/Sudoku-solver.png" 
                  alt="Sudoku Solver" 
                  width={800}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <p className="modal-description">
                A simple Python program to solve a 9x9 sudoku grid, using dynamic programming
              </p>
            </a>
          </Carousel.Item>
          
          {/* WhatsApp Automation */}
          <Carousel.Item>
            <a 
              data-aos="fade-left" 
              href="https://github.com/ShubhSinghGarg/Whatsapp-Automation" 
              target="_blank"
              rel="noreferrer"
              className="blend-link-dark"
            >
              <div className="img-container modalTwo">
                <Image 
                  src="/img/Whatsapp_automation_bot.png" 
                  alt="WhatsApp Automation Bot" 
                  width={800}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <p className="modal-description">
                A simple bot that can provide real time updates on web based messaging services like whatsapp using web scrapping
              </p>
            </a>
          </Carousel.Item>
          
          {/* Petition Signer */}
          <Carousel.Item>
            <a 
              data-aos="fade-left" 
              href="https://github.com/ShubhSinghGarg/Petition-Signer" 
              target="_blank"
              rel="noreferrer"
              className="blend-link-dark"
            >
              <div className="img-container modalThree">
                <Image 
                  src="/img/Animated GIF-downsized.gif" 
                  alt="Petition Signer" 
                  width={800}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <p className="modal-description">
                A simple Bot that can sign a petition on one's behalf using web scrapping
              </p>
            </a>
          </Carousel.Item>
        </Carousel>
      </Modal.Body>

      {/* Modal footer */}
      <div className="text-center">
        <hr />
        <h5></h5>
      </div>
    </>
  );
};

export default AutomationModal;
