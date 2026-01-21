import React from 'react';
import Image from 'next/image';
import { Carousel, Modal } from 'react-bootstrap';

interface WebModalProps {
  onClose: () => void;
}

const WebModal: React.FC<WebModalProps> = ({ onClose }) => {
  return (
    <>
      {/* Modal Header */}
      {/* @ts-ignore - react-bootstrap v1.6.1 type compatibility */}
      <Modal.Header className="text-center" closeButton>
        <Modal.Title>Web Development</Modal.Title>
      </Modal.Header>

      {/* Modal body */}
      <Modal.Body className="text-center">
        <Carousel id="demo3">
          {/* Reuse Materials Site */}
          <Carousel.Item>
            <a 
              data-aos="fade-left" 
              href="ReuseMaterials.site" 
              target="_blank"
              rel="noreferrer"
              className="blend-link-dark"
            >
              <div className="img-container modalOne">
                <Image 
                  src="/img/Animated GIF-downsized.gif" 
                  alt="Reuse Materials Website" 
                  width={800}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <p className="modal-description">
                A short-lived self-help website that helped the visitors declutter their homes, by teaching 
                them fun DIY projects to recycle their day to day wastes, like plastics, clothes and metal.
              </p>
            </a>
          </Carousel.Item>
          
          {/* Portfolio Website */}
          <Carousel.Item>
            <a 
              data-aos="fade-left" 
              href="" 
              target="_blank"
              rel="noreferrer"
              className="blend-link-dark"
            >
              <div className="img-container modalTwo">
                <Image 
                  src="/img/inception.gif" 
                  alt="Portfolio Website" 
                  width={800}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <p className="modal-description">
                My portfolio Website
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

export default WebModal;
