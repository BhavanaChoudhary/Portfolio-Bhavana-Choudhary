import React, { useRef, useEffect, useState } from 'react';
import './Skills.css';
import videoSrc from '../assets/video.mp4';
import HomeButton from './Home';
import TopBar from './TopBar';
import SideBar from './SideBar';

// Import skill icons
import { FaReact, FaJava, FaPython, FaJs, FaGitAlt, FaGithub, FaNode, FaUbuntu, FaWindows ,FaRobot} from 'react-icons/fa';
import { SiSpringboot, SiMongodb, SiPostman, SiOpencv, SiGooglecloud, SiExpress } from 'react-icons/si';
import { DiMysql, DiNodejs } from 'react-icons/di';

const Skills = () => {
  const videoRef = useRef(null);
  const [positions, setPositions] = useState([]);
  const containerRef = useRef(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);
  const lastTimeRef = useRef(0);
  const isAnimatingRef = useRef(false);

  // Skill data with corresponding icons
  const skills = [
    { name: 'Java', icon: <FaJava size={50} />, color: '#f89820' },
    { name: 'JavaScript', icon: <FaJs size={50} />, color: '#f0db4f' },
    { name: 'Python', icon: <FaPython size={50} />, color: '#3776ab' },
    { name: 'React', icon: <FaReact size={50} />, color: '#61dbfb' },
    { name: 'Node.js', icon: <FaNode size={50} />, color: '#3c873a' },
    { name: 'Spring Boot', icon: <SiSpringboot size={50} />, color: '#6db33f' },
    { name: 'MongoDB', icon: <SiMongodb size={50} />, color: '#4db33d' },
    { name: 'SQL', icon: <DiMysql size={50} />, color: '#00758f' },
    { name: 'Git', icon: <FaGitAlt size={50} />, color: '#f34f29' },
    { name: 'GitHub', icon: <FaGithub size={50} />, color: '#4078c0' },
    { name: 'Postman', icon: <SiPostman size={50} />, color: '#ff6c37' },
    { name: 'OpenCV', icon: <SiOpencv size={50} />, color: '#5c3ee8' },
    { name: 'GCP', icon: <SiGooglecloud size={50} />, color: '#4285f4' },
    { name: 'Ubuntu', icon: <FaUbuntu size={50} />, color: '#e95420' },
    { name: 'Windows', icon: <FaWindows size={50} />, color: '#0078d4' },
    // { name: 'Express', icon: <SiExpress size={50} />, color: '#000000' },
    { name: 'n8n', icon: <FaRobot size={50} />, color: '#ff6b55' }  // Using Spring Boot icon as placeholder for n8n
  ];

  // Function to initialize positions with proper spacing
  const initializePositions = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;
      
      // Adjust margin based on screen size
      const margin = window.innerWidth < 768 ? 30 : 50;
      
      const initialPositions = skills.map(() => ({
        x: Math.random() * (containerWidth - 100) + 50,
        y: Math.random() * (containerHeight - 100) + 50,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        angle: Math.random() * Math.PI * 2,
        floatSpeed: 0.1 + Math.random() * 0.2,
        amplitude: 2 + Math.random() * 1.5
      }));
      
      setPositions(initialPositions);
    }
  };

  // Initialize positions with proper spacing
  useEffect(() => {
    initializePositions();
    
    // Add resize event listener
    const handleResize = () => {
      initializePositions();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    
    const animate = (timestamp) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const deltaTime = Math.min((timestamp - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = timestamp;
      
      if (containerRef.current && positions.length > 0) {
        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerRef.current.offsetHeight;
        const { x: mouseX, y: mouseY } = mousePosRef.current;
        
        // Adjust repulsion radius and margin based on screen size
        const isMobile = window.innerWidth < 768;
        const repulsionRadius = isMobile ? 100 : 200;
        const margin = isMobile ? 30 : 50;
        
        const newPositions = positions.map(pos => {
          let { x, y, vx, vy, angle, floatSpeed, amplitude } = pos;
          
          // Floating motion
          const timeFactor = timestamp * 0.0003;
          const floatX = Math.cos(angle + timeFactor * floatSpeed) * amplitude +
                        Math.sin(angle * 1.7 + timeFactor * floatSpeed * 1.3) * (amplitude * 0.6);
          const floatY = Math.sin(angle + timeFactor * floatSpeed * 1.2) * amplitude +
                        Math.cos(angle * 0.8 + timeFactor * floatSpeed * 0.8) * (amplitude * 0.8);
          
          // Mouse repulsion (or touch for mobile)
          const dx = x - mouseX;
          const dy = y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < repulsionRadius) {
            const repulsionStrength = isMobile ? 0.1 : 0.15;
            const force = Math.pow(1 - distance / repulsionRadius, 2) * repulsionStrength;
            const angleToMouse = Math.atan2(dy, dx);
            
            vx += Math.cos(angleToMouse) * force * deltaTime * 50;
            vy += Math.sin(angleToMouse) * force * deltaTime * 50;
          }
          
          // Apply velocity with damping
          const damping = Math.pow(0.4, deltaTime);
          vx *= damping;
          vy *= damping;
          
          // Update position
          x += (vx + floatX) * deltaTime * 50;
          y += (vy + floatY) * deltaTime * 50;
          
          // Boundary handling with responsive margins
          const bounceDamping = 0.85;
          const elasticity = 0.95;
          
          if (x < margin) {
            x = margin;
            vx = Math.abs(vx) * bounceDamping * elasticity;
          } else if (x > containerWidth - margin) {
            x = containerWidth - margin;
            vx = -Math.abs(vx) * bounceDamping * elasticity;
          }
          
          if (y < margin) {
            y = margin;
            vy = Math.abs(vy) * bounceDamping * elasticity;
          } else if (y > containerHeight - margin) {
            y = containerHeight - margin;
            vy = -Math.abs(vy) * bounceDamping * elasticity;
          }
          
          return { ...pos, x, y, vx, vy, angle: angle + deltaTime * 0.4 };
        });
        
        setPositions(newPositions);
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      isAnimatingRef.current = false;
      cancelAnimationFrame(animationRef.current);
    };
  }, [positions]);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mousePosRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
  };

  // Handle touch events for mobile devices
  const handleTouchMove = (e) => {
    if (containerRef.current && e.touches.length > 0) {
      const rect = containerRef.current.getBoundingClientRect();
      mousePosRef.current = {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      };
    }
  };

  // Video play handler
  useEffect(() => {
    const handleVideoPlay = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (err) {
        console.log("Video play failed:", err);
      }
    };
    handleVideoPlay();
  }, []);

  return (
    <>
      <TopBar />
      <SideBar />
      <HomeButton />
      
      <div 
        className="skills-container" 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchMove}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Glitch effect overlay */}
        <div className="glitch-overlay"></div>

        <div className="skills-content">
          <h1 className="cyberpunk-heading">
            <span className="cyberpunk-glitch">MY_SKILLS.EXE</span>
          </h1>
          
          <div className="cyberpunk-terminal">
            <div className="terminal-header">
              <span className="terminal-button red"></span>
              <span className="terminal-button yellow"></span>
              <span className="terminal-button green"></span>
              <span className="terminal-title">skills_terminal_v2.4</span>
            </div>
            
            <div className="terminal-body">
        <div className="terminal-category">
          <span className="terminal-prompt">{'>'}</span>
          <span className="terminal-command">Languages</span>
        </div>
        <p className="terminal-items">Java • JavaScript • Python • SQL • HTML/CSS</p>
        
        <div className="terminal-category">
          <span className="terminal-prompt">{'>'}</span>
          <span className="terminal-command">Frameworks</span>
        </div>
        <p className="terminal-items">Spring Boot • React.js • Express</p>
        
        <div className="terminal-category">
          <span className="terminal-prompt">{'>'}</span>
          <span className="terminal-command">AI/ML</span>
        </div>
        <p className="terminal-items">LLMs • OpenCV • Prompt Engineering • n8n</p>
        
        <div className="terminal-category">
          <span className="terminal-prompt"> {'>'}</span>
          <span className="terminal-command">Databases</span>
        </div>
        <p className="terminal-items">MongoDB • SQL</p>
        
        <div className="terminal-category">
          <span className="terminal-prompt"> {'>'}</span>
          <span className="terminal-command">Tools</span>
        </div>
        <p className="terminal-items">Git • GitHub • Postman</p>
        
        <div className="terminal-category">
          <span className="terminal-prompt">{'>'}</span>
          <span className="terminal-command">Platforms</span>
        </div>
        <p className="terminal-items">GCP • Ubuntu • Windows</p>
      </div>
    </div>
  </div>
        {/* Floating skills icons */}
        {positions.length === skills.length && skills.map((skill, index) => (
          <div 
            key={skill.name}
            className="skill-icon"
            style={{
              left: `${positions[index].x}px`,
              top: `${positions[index].y}px`,
              transform: 'translate(-50%, -50%)',
              color: skill.color,
              textShadow: `0 0 10px ${skill.color}`,
              transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
            }}
          >
            <div className="icon-container">
              {skill.icon}
              <span className="skill-tooltip">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
