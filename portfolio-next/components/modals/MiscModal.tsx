import React from 'react';
import Image from 'next/image';
import { Carousel, Modal } from 'react-bootstrap';

interface MiscModalProps {
  onClose: () => void;
}

const MiscModal: React.FC<MiscModalProps> = ({ onClose }) => {
  return (
    <>
      {/* Modal Header */}
      {/* @ts-ignore - react-bootstrap v1.6.1 type compatibility */}
      <Modal.Header className="text-center" closeButton>
        <Modal.Title>Miscellaneous Projects</Modal.Title>
      </Modal.Header>

      {/* Modal body */}
      <Modal.Body className="text-center">
        <Carousel id="demo5">
          {/* Chat Bot */}
          <Carousel.Item>
            <a 
              data-aos="fade-left" 
              href="https://github.com/ShubhSinghGarg/Chat-Bot" 
              target="_blank"
              rel="noreferrer"
              className="blend-link-dark"
            >
              <div className="img-container modalOne">
                <Image 
                  src="/img/simpleBot.png" 
                  alt="Chat Bot" 
                  width={800}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <p className="modal-description">
                A Chat Bot that can reply to basic conversation, and can also tell the weather and tell jokes
              </p>
            </a>
          </Carousel.Item>
          
          {/* Calculator */}
          <Carousel.Item>
            <a 
              data-aos="fade-left" 
              href="https://github.com/ShubhSinghGarg/Calculator-Java" 
              target="_blank"
              rel="noreferrer"
              className="blend-link-dark"
            >
              <div className="img-container modalTwo">
                <Image 
                  src="/img/calculator-code.png" 
                  alt="Calculator Project" 
                  width={800}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <p className="modal-description">
                A close simuilation of the Hex calculaotr in windows
              </p>
            </a>
          </Carousel.Item>
          
          {/* File Recovery System */}
          <Carousel.Item>
            <a 
              data-aos="fade-left" 
              href="https://cs.utdallas.edu/people/faculty/gupta-neeraj/" 
              target="_blank"
              rel="noreferrer"
              className="blend-link-dark"
            >
              <div className="img-container modalThree">
                <Image 
                  src="/img/Animated GIF-downsized.gif" 
                  alt="File Recovery System" 
                  width={800}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <p className="modal-description">
                Contributed to an open souce project to create a file recovery system for linux, 
                under teh guidance of Dr. Neeraj Gupta
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

export default MiscModal;
