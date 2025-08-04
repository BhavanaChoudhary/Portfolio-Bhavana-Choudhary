import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import TopBar from './TopBar';
import SideBar from './SideBar';
import buildingImage from '../assets/building.jpg';
import RoboModel from './RoboModel';
import HomeButton from './Home';

const AboutMe = () => {
  return (
    <div className="about-page">
      <HomeButton />
      <TopBar />
      <SideBar />
      <div
        className="about-container"
        style={{
          backgroundImage: `url(${buildingImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="content">
          <div className="model-container">
            <Canvas camera={{ position: [0, 1, 5], fov: 60 }}>
              <ambientLight intensity={1.2} />
              <directionalLight position={[2, 5, 2]} intensity={1} />
              <pointLight position={[0, 2, 3]} intensity={1.5} />
              <RoboModel />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </div>
          <div className="text-content">
            <h1>About Me</h1>
            <div className="cyber-text">
              <p>
                I am <span className="neon-name">Bhavana B Choudhary</span>, currently pursuing my B.E. in Computer Science Engineering (9.56 CGPA). My expertise spans <span className="neon-tech">Java, Spring Boot, React</span>, and MERN stack, with specialization in <span className="neon-tech">AI applications</span> and automation workflows including OS, Networks, and Database Integrations (MySQL, MongoDB).
              </p>
              <p>
                My adaptability shines through multiple <span className="neon-highlight">hackathon wins</span> and diverse projects from AI-powered forensic sketching, Food delivery Application, Doctor's Space, Industrial Management and ongoing works in AR/VR. My NGO web design served as open-source contribution creating real-world impact.
              </p>
              <p>
                Beyond coding, I possess strong <span className="neon-highlight">soft skills</span> – effective communication, collaborative problem-solving, and leadership honed through team projects.
              </p>
              <p className="neon-footnote">
                [When not coding: design × dance × books × tech exploration]
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Share+Tech+Mono&display=swap');

        .about-page {
          position: relative;
          width: 100%;
          min-height: 100vh;
        }

        .about-container {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 30px 40px 30px;
        }

        .about-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          z-index: 1;
        }

        .content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          justify-content: center;
          align-items: center;
          max-width: 1200px;
          width: 100%;
          padding: 0 40px;
        }

        .model-container {
          flex: 1 1 350px;
          height: 70vh;
          max-width: 500px;
          min-width: 300px;
        }

        .text-content {
          flex: 1 1 350px;
          max-width: 600px;
          padding: 40px;
          color: #fff;
        }

        h1 {
          font-family: 'Major Mono Display', monospace;
          font-size: 2.8rem;
          margin-bottom: 1.5rem;
          color: #4cffaf;
          text-shadow: 0 0 10px rgba(76, 255, 175, 0.7);
          letter-spacing: -1px;
        }

        .cyber-text {
          font-family: 'Share Tech Mono', monospace;
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.9);
        }

        .cyber-text p {
          margin-bottom: 1.2em;
          text-shadow: 0 0 2px rgba(255, 255, 255, 0.3);
        }

        .neon-name {
          color: #ffffff;
          font-weight: bold;
          text-shadow: 0 0 5px #ffffff;
        }

        .neon-tech {
          color: #4cffaf;
          text-shadow: 0 0 5px #4cffaf;
        }

        .neon-highlight {
          color: #ff9ff3;
          text-shadow: 0 0 5px #ff9ff3;
        }

        .neon-footnote {
          color: #a1a1ff;
          font-style: italic;
          margin-top: 1.5rem;
          font-size: 0.9rem;
          text-shadow: 0 0 5px rgba(161, 161, 255, 0.7);
        }

        @media (max-width: 1024px) {
          .about-container {
            padding: 60px 20px 30px 20px;
          }

          .content {
            padding: 0 20px;
          }

          h1 {
            font-size: 2.4rem;
          }

          .cyber-text {
            font-size: 0.95rem;
          }

          .model-container {
            height: 60vh;
          }
        }

        @media (max-width: 768px) {
          .about-container {
            flex-direction: column;
            padding: 40px 10px 30px 10px;
          }

          .content {
            flex-direction: column;
            text-align: center;
            padding: 0 10px;
          }

          .model-container {
            width: 100%;
            height: 45vh;
            min-width: unset;
            margin-bottom: 20px;
          }

          .text-content {
            max-width: 100%;
            padding: 20px;
          }

          h1 {
            font-size: 2rem;
          }

          .cyber-text {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .about-container {
            padding-top: 30px;
          }

          .model-container {
            height: 40vh;
          }

          h1 {
            font-size: 1.6rem;
          }

          .cyber-text {
            font-size: 0.85rem;
          }

          .text-content {
            padding: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutMe;
