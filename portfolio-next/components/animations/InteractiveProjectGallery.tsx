import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faCode, faGamepad, faMobile, faGlobe } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/components/animations/InteractiveProjectGallery.module.scss';

interface ProjectItem {
  id: string;
  title: string;
  icon: any;
  color: string;
  description: string;
  onClick: () => void;
}

interface InteractiveProjectGalleryProps {
  projects: ProjectItem[];
  className?: string;
}

const InteractiveProjectGallery: React.FC<InteractiveProjectGalleryProps> = ({
  projects,
  className = ''
}) => {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initial animation for project items
    const projectElements = Object.values(projectRefs.current).filter(Boolean);
    
    gsap.fromTo(projectElements, 
      {
        opacity: 0,
        y: 100,
        scale: 0.8,
        rotationY: -15
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationY: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 0.5
      }
    );

    // Floating animation for all projects
    projectElements.forEach((element, index) => {
      if (!element) return;
      
      gsap.to(element, {
        y: `+=${5 + index * 2}`,
        duration: 3 + index * 0.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: index * 0.3
      });
    });

    return () => {
      gsap.killTweensOf(projectElements);
    };
  }, [projects]);

  const handleProjectHover = (projectId: string, isEntering: boolean) => {
    const element = projectRefs.current[projectId];
    if (!element) return;

    if (isEntering) {
      setHoveredProject(projectId);
      gsap.to(element, {
        scale: 1.1,
        rotationY: 5,
        z: 50,
        duration: 0.3,
        ease: "power2.out"
      });
      
      // Create particle effect
      createParticleEffect(element);
    } else {
      setHoveredProject(null);
      gsap.to(element, {
        scale: 1,
        rotationY: 0,
        z: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleProjectClick = (project: ProjectItem) => {
    const element = projectRefs.current[project.id];
    if (!element) return;

    setActiveProject(project.id);
    
    // Click animation
    gsap.to(element, {
      scale: 0.95,
      duration: 0.1,
      ease: "power2.out",
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        project.onClick();
        setActiveProject(null);
      }
    });
  };

  const createParticleEffect = (element: HTMLDivElement) => {
    const rect = element.getBoundingClientRect();
    const particles = [];
    
    for (let i = 0; i < 8; i++) {
      const particle = document.createElement('div');
      particle.className = styles.particle;
      particle.style.position = 'absolute';
      particle.style.width = '4px';
      particle.style.height = '4px';
      particle.style.backgroundColor = '#ffffff';
      particle.style.borderRadius = '50%';
      particle.style.pointerEvents = 'none';
      particle.style.left = `${rect.left + rect.width / 2}px`;
      particle.style.top = `${rect.top + rect.height / 2}px`;
      
      document.body.appendChild(particle);
      particles.push(particle);
      
      gsap.to(particle, {
        x: (Math.random() - 0.5) * 100,
        y: (Math.random() - 0.5) * 100,
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          document.body.removeChild(particle);
        }
      });
    }
  };

  return (
    <div ref={containerRef} className={`${styles.galleryContainer} ${className}`}>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={el => { projectRefs.current[project.id] = el; }}
            className={`${styles.projectItem} ${
              hoveredProject === project.id ? styles.hovered : ''
            } ${activeProject === project.id ? styles.active : ''}`}
            onMouseEnter={() => handleProjectHover(project.id, true)}
            onMouseLeave={() => handleProjectHover(project.id, false)}
            onClick={() => handleProjectClick(project)}
            style={{ '--project-color': project.color } as React.CSSProperties}
          >
            <div className={styles.projectIcon}>
              <FontAwesomeIcon icon={project.icon} />
            </div>
            
            <div className={styles.projectContent}>
              <h4 className={styles.projectTitle}>{project.title}</h4>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
            
            <div className={styles.projectGlow}></div>
            <div className={styles.projectRipple}></div>
          </div>
        ))}
      </div>
      
      {/* Background particles */}
      <div ref={particlesRef} className={styles.backgroundParticles}>
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className={styles.backgroundParticle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveProjectGallery;
