import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import backgroundProject from '../assets/backgroundproject.jpeg';
import rocket from '../assets/rocket.png';
import TopBar from './TopBar';
import SideBar from './SideBar';
import HomeButton from './Home';

// Import fonts (add these to your HTML or CSS)
const fontPrimary = "'Orbitron', sans-serif"; // Futuristic tech font
const fontSecondary = "'Rajdhani', sans-serif"; // Clean modern font
const fontAccent = "'Titillium Web', sans-serif"; // Technical looking font
// Sample project data
const projects = [
  {
    id: 1,
    title: "FaceAura - AI Forensic Sketch System",
    description: "Developed an interactive forensic sketching tool with voice-guided facial reconstruction using Hidden Markov Models. Features include drag-resize UI components, real-time canvas rendering, and secure API communication for law enforcement applications.",
    tags: ["React", "Konva", "HMM", "Express.js", "MongoDB", "Multer", "Web Speech API"],
    github: "https://github.com/BhavanaChoudhary/forensic-face-sketch",
    demo: "https://drive.google.com/file/d/1EWpRgDTPngPoMrEfFPPbMvkrG006PSSM/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Full-Stack Food Delivery Web App",
    description: "Built a complete food ordering platform with real-time order tracking, JWT authentication, and responsive UI. Implemented WebSocket integration for live updates and Web Speech API for enhanced accessibility.",
    tags: ["React 19", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "WebSocket"],
    github: "https://github.com/BhavanaChoudhary/E-COM-food",
    demo: "https://food-delivery-tomato-nrzv.onrender.com/"
  },
  {
    id: 3,
    title: "Employee Management System (EMS) - Ongoing",
    description: "Developing a comprehensive HR solution with CRUD operations for employee records. Currently implementing Spring Boot backend with React frontend for seamless data management and reporting.",
    tags: ["Spring Boot", "React.js", "MySQL", "JPA", "Hibernate", "REST API"],
    
  },
  {
    id: 4,
    title: "Doctor's Space - Medical Portal",
    description: "Created a healthcare platform connecting patients with specialists, featuring appointment scheduling, telemedicine integration, and prescription management systems.",
    tags: ["React", "Node.js", "MongoDB", "WebRTC", "JWT Auth"],
    github: "https://github.com/BhavanaChoudhary/Promptathon",
    demo: "https://drive.google.com/file/d/1wjou4Qk3_wHvcFTk-9WDDnL81un_8AEL/view?usp=drive_link"
  }
];

const float = keyframes`
  0%, 100% {
    transform: translate(-50%, 0) scale(1);
    filter: drop-shadow(0 0 30px rgba(0, 255, 255, 0.9));
  }
  50% {
    transform: translate(-50%, -50px) scale(1.05);
    filter: drop-shadow(0 0 50px rgba(0, 255, 255, 1.2));
  }
`;

const ProjectContainer = styled.div`
  background:
    linear-gradient(rgba(0, 10, 20, 0.8), rgba(0, 20, 40, 0.8)),
    url(${backgroundProject}) no-repeat center center/cover fixed;
  width: 100vw;
`;

const Rocket = styled.img`
  position: fixed;
  right: -200px; /* Position from the right instead of center */
  bottom: ${props => props.scrollProgress === 0 ? '0' : `${props.scrollProgress * 100}vh`};
  width: 450px; /* Adjusted width */
  height: 630px; /* Adjusted height */
  object-fit: contain;
  transform: translate(0, 0); /* Removed horizontal translation */
  animation: ${float} 4s ease-in-out infinite;
  z-index: 3;
  filter: drop-shadow(0 0 30px rgba(0, 255, 255, 0.9));
  transition: bottom ${props => props.transitionDuration || 0.8}s cubic-bezier(0.25, 0.1, 0.25, 1);
  will-change: bottom;

  @media (max-width: 768px) {
    width: 200px;
    height: 280px;
    right: 20px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 210px;
    right: 10px;
  }
`;

const StyledTopBar = styled(TopBar)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  z-index: 10;

  @media (max-width: 768px) {
    height: 40px;
  }

  @media (max-width: 480px) {
    height: 35px;
  }
`;

const StyledSideBar = styled(SideBar)`
  position: fixed;
  left: 0;
  top: 50px;
  width: 60px;
  height: calc(100vh - 50px);
  z-index: 10;

  @media (max-width: 768px) {
    width: 45px;
    top: 40px;
    height: calc(100vh - 40px);
  }

  @media (max-width: 480px) {
    width: 35px;
    top: 35px;
    height: calc(100vh - 35px);
  }
`;

const ContentBox = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  z-index: 2;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;

  h1 {
    color: #0ff;
    font-size: 2.5rem;
    margin-bottom: 1.2rem;
    text-shadow: 0 0 10px #0ff, 0 0 30px #000;
    font-family: ${fontPrimary};
    letter-spacing: 2px;
    font-weight: 500;
  }

  p {
    font-size: 1.3rem;
    line-height: 1.8;
    color: #e0e0e0;
    text-shadow: 0 0 6px #000;
    max-width: 800px;
    margin: 0 auto 2rem;
    font-family: ${fontAccent};
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.2rem;
      letter-spacing: 1px;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

const ScrollPrompt = styled.p`
  color: rgba(0, 255, 255, 0.7);
  font-size: 1.1rem;
  margin-top: 2rem;
  position: relative;
  font-family: ${fontSecondary};
  letter-spacing: 3px;
  text-transform: uppercase;
  
  &::after {
    content: '';
    display: block;
    width: 2px;
    height: 50px;
    background: linear-gradient(to bottom, #0ff, transparent);
    margin: 15px auto 0;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-15px); }
    60% { transform: translateY(-7px); }
  }
`;

const ProjectSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  position: relative;
  opacity: ${props => props.isActive ? 1 : 0};
  transform: translateY(${props => props.isActive ? '0' : '50px'});
  transition: opacity 0.8s ease, transform 0.8s ease;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto;

  h2 {
    color: #0ff;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1.5rem;
    text-shadow: 0 0 10px #0ff, 0 0 20px #000;
    font-family: ${fontPrimary};
    letter-spacing: 1px;
  }

  p {
    font-size: 1.0rem;
    line-height: 1.8;
    color: #e0e0e0;
    text-align: center;
    text-shadow: 0 0 6px #000;
    max-width: 700px;
    margin: 0 auto 2.5rem;
    font-family: ${fontAccent};
  }

  .project-links {
    display: flex;
    gap: 20px;
    margin-bottom: 2rem;
    
    a {
      color: #0ff;
      font-family: ${fontSecondary};
      font-size: 1rem;
      text-decoration: none;
      border: 1px solid #0ff;
      padding: 8px 20px;
      border-radius: 25px;
      transition: all 0.3s ease;
      
      &:hover {
        background: rgba(0, 255, 255, 0.2);
        transform: translateY(-3px);
      }
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin-top: 30px;
    max-width: 600px;
  }

  .tag {
    background: rgba(0, 255, 255, 0.1);
    color: #0ff;
    padding: 8px 18px;
    border-radius: 25px;
    font-size: 0.85rem;
    border: 1px solid #0ff;
    font-family: ${fontSecondary};
    letter-spacing: 0.5px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.3rem;
    }
    p {
      font-size: 0.9rem;
    }
    .tag {
      padding: 6px 14px;
      font-size: 0.75rem;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.1rem;
    }
    p {
      font-size: 0.8rem;
    }
    .tag {
      padding: 4px 10px;
      font-size: 0.7rem;
    }
  }
`;


export default function Project() {
  const containerRef = useRef(null);
  const [sectionProgress, setSectionProgress] = useState(0); // 0 (bottom) to 1 (top)
  const [activeProject, setActiveProject] = useState(0);
  const [prevProgress, setPrevProgress] = useState(0);
  const [transitionDuration, setTransitionDuration] = useState(0.5);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const projectSections = container.querySelectorAll('section');
      let found = false;

      projectSections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionHeight = section.offsetHeight;
        const scrollTop = window.scrollY;

        if (!found && scrollTop + window.innerHeight / 2 >= sectionTop && scrollTop + window.innerHeight / 2 < sectionTop + sectionHeight) {
          setActiveProject(index);

          const progress = Math.min(
            Math.max((scrollTop - sectionTop) / (sectionHeight - window.innerHeight), 0),
            1
          );

          if (progress > prevProgress) {
            setTransitionDuration(1.5);
          } else {
            setTransitionDuration(0.3);
          }

          setPrevProgress(progress);
          setSectionProgress(progress);
          found = true;
        }
      });

      if (!found) {
        setSectionProgress(0);
        setTransitionDuration(0.3);
        setPrevProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevProgress]);

  useEffect(() => {
    setSectionProgress(0);
    setTransitionDuration(0.3);
    setPrevProgress(0);
  }, [activeProject]);
 return (
    <ProjectContainer ref={containerRef}>
      <StyledTopBar />
      <StyledSideBar />
      <HomeButton/>

      <Rocket
        src={rocket}
        alt="Floating Rocket"
        scrollProgress={sectionProgress}
        transitionDuration={transitionDuration}
        key={activeProject + '-' + (sectionProgress === 0)}
      />

      <ContentBox>
        <h1>My Projects</h1>
        <p>Scroll down to launch this rocket and explore my recent works in the field of technology and innovation.</p>
        <ScrollPrompt>Scroll Down</ScrollPrompt>
      </ContentBox>

      {projects.map((project, index) => (
        <ProjectSection
          key={project.id}
          isActive={activeProject === index}
        >
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          
          {(project.github || project.demo) && (
            <div className="project-links">
              {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
              {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
            </div>
          )}

          <div className="tags">
            {project.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </ProjectSection>
      ))}
    </ProjectContainer>
  );
}