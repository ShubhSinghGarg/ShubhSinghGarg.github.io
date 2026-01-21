import React from 'react';
import Image from 'next/image';
import { Carousel, Modal } from 'react-bootstrap';

interface AppModalProps {
  onClose: () => void;
}

const AppModal: React.FC<AppModalProps> = ({ onClose }) => {
  return (
    <>
      {/* Modal Header */}
      {/* @ts-ignore - react-bootstrap v1.6.1 type compatibility */}
      <Modal.Header className="text-center" closeButton>
        <Modal.Title>Mobile Applications</Modal.Title>
      </Modal.Header>

      {/* Modal body */}
      <Modal.Body className="text-center">
        <Carousel id="demo2">
          {/* Temperature from Cricket App */}
          <Carousel.Item>
            <a 
              data-aos="fade-left" 
              href="https://github.com/ShubhSinghGarg/Temp-from-crickets" 
              target="_blank"
              rel="noreferrer"
              className="blend-link-dark"
            >
              <div className="img-container modalOne">
                <Image 
                  src="/img/Animated GIF-downsized.gif" 
                  alt="Temperature from Crickets App" 
                  width={800}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <p className="modal-description">
                A App that can estimate the temperature outside based on the number of cricket chirps per minute
              </p>
            </a>
          </Carousel.Item>
          
          {/* SA ID App */}
          <Carousel.Item>
            <a 
              data-aos="fade-left" 
              href="https://github.com/ShubhSinghGarg/SA_ID" 
              target="_blank"
              rel="noreferrer"
              className="blend-link-dark"
            >
              <div className="img-container modalTwo">
                <Image 
                  src="/img/Animated GIF-downsized.gif" 
                  alt="South African ID App" 
                  width={800}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <p className="modal-description">
                An Android App to decode information in a South African national citizen identification number
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

export default AppModal;
