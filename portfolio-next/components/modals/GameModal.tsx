import React from 'react';
import Image from 'next/image';
import { Carousel, Modal } from 'react-bootstrap';

interface GameModalProps {
  onClose: () => void;
}

const GameModal: React.FC<GameModalProps> = ({ onClose }) => {
  return (
    <>
      {/* Modal Header */}
      {/* @ts-ignore - react-bootstrap v1.6.1 type compatibility */}
      <Modal.Header className="text-center" closeButton>
        <Modal.Title>Game Development</Modal.Title>
      </Modal.Header>

      {/* Modal body */}
      <Modal.Body className="text-center">
        <Carousel id="demo4">
          {/* Anger of the Werewolf */}
          <Carousel.Item>
            <a 
              data-aos="fade-left" 
              href="" 
              target="_blank"
              rel="noreferrer"
              className="blend-link-dark"
            >
              <div className="img-container modalOne">
                <Image 
                  src="/img/anger of the warewolf.PNG" 
                  alt="Anger of the Werewolf" 
                  width={800}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <p className="modal-description">
                A Action Adventure 2-D RPG, about a orphan child that can transform into a warewolf when angered, 
                Made with unity game engine, Assets created in Photoshop
              </p>
            </a>
          </Carousel.Item>
          
          {/* Pac VR */}
          <Carousel.Item>
            <a 
              data-aos="fade-left" 
              href="" 
              target="_blank"
              rel="noreferrer"
              className="blend-link-dark"
            >
              <div className="img-container-dual">
                <div className="img-half">
                  <Image 
                    src="/img/pac-vr-1.png" 
                    alt="Pac VR Screenshot 1" 
                    width={400}
                    height={250}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div className="img-half">
                  <Image 
                    src="/img/pac-vr-2.png" 
                    alt="Pac VR Screenshot 2" 
                    width={400}
                    height={250}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
              <p className="modal-description">
                A VR game Made in 48 hrs, by a team of 5. Made in Unity Game engine with Google VR, 
                Assets created in blender
              </p>
            </a>
          </Carousel.Item>
          
          {/* Another Game Project */}
          <Carousel.Item>
            <a 
              data-aos="fade-left" 
              href="" 
              target="_blank"
              rel="noreferrer"
              className="blend-link-dark"
            >
              <div className="img-container modalThree">
                <Image 
                  src="/img/Animated GIF-downsized.gif" 
                  alt="Game Project" 
                  width={800}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <p className="modal-description">
                A simple Pyhton program to solve a 9x9 sudoku grid, using dynamic programming
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

export default GameModal;
