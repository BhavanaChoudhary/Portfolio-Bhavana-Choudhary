import React, { useState } from 'react';
import './Achievements.css';
import TopBar from './TopBar';
import SideBar from './SideBar';
import HomeButton from './Home';
// Import certificate images
import aiCertificate from '../assets/AI4ComUnity_Winners_Certificate.jpg';

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const achievements = [
    {
      title: "AI4ComUnity Hackathon",
      year: "2025",
      description: "Winner - State level AI competition",
      certificate: aiCertificate
    },
    {
      title: "Srishti Hackathon",
      year: "2025",
      description: "Winner - Innovative design competition",
      certificate: null // PDF file, will handle later
    },
    {
      title: "Academic Excellence",
      year: "2023, 2024",
      description: "Top Performer - Dept of CSE, AIT",
      certificate: null // Will add later
    },
    {
      title: "Binary Battle 2.0",
      year: "2024",
      description: "Winner - Website Design competition",
      certificate: null // Will add later
    },
    {
      title: "The Big O Coding",
      year: "2025",
      description: "Winner - Algorithmic programming",
      certificate: null // Will add later
    },
    {
      title: "Codenza State Level",
      year: "2025",
      description: "Winner - Coding competition",
      certificate: null // PDF file, will handle later
    }
  ];

  const nextAchievement = () => {
    setCurrentIndex((prev) => (prev === achievements.length - 1 ? 0 : prev + 1));
  };

  const prevAchievement = () => {
    setCurrentIndex((prev) => (prev === 0 ? achievements.length - 1 : prev - 1));
  };

  return (
    <div className="achievements-container">
      <HomeButton />
      <TopBar />
      <SideBar />
      
      <div className="space-background"></div>
      
      <div className="achievements-main-content">
        {/* Floating 3D Image */}
        <div className="floating-image-container">
          <img src="/assets/pic1.png" alt="Achievement" className="floating-image" />
          <div className="glow-effect"></div>
        </div>
        
        {/* Carousel */}
        <div className="carousel-container">
          <div className="carousel-header">
            <h1>ACHIEVEMENTS</h1>
            <div className="divider"></div>
          </div>
          
          <div className="carousel-body">
            <button className="carousel-nav left" onClick={prevAchievement}>
              <span className="arrow">←</span>
            </button>
            
            <div className="carousel-slide">
              <div className="achievement-title">
                {achievements[currentIndex].title}
              </div>
              <div className="achievement-year">
                {achievements[currentIndex].year}
              </div>
              <div className="achievement-description">
                {achievements[currentIndex].description}
              </div>
              
              {achievements[currentIndex].certificate ? (
                <div className="certificate-preview">
                  <div className="certificate-wrapper">
                    <img 
                      src={achievements[currentIndex].certificate} 
                      alt={`${achievements[currentIndex].title} Certificate`}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </div>
                </div>
              ) : (
                <div className="certificate-preview">
                  <div className="certificate-wrapper">
                    <div style={{ 
                      width: '100%', 
                      height: '100%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      color: '#6495ED',
                      fontSize: '1rem',
                      background: 'rgba(0, 0, 0, 0.1)'
                    }}>
                      Certificate will be available soon
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <button className="carousel-nav right" onClick={nextAchievement}>
              <span className="arrow">→</span>
            </button>
          </div>
          
          <div className="carousel-dots">
            {achievements.map((_, index) => (
              <div 
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;