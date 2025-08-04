import React, { useState } from 'react';
import './Achievements.css';
import TopBar from './TopBar';
import SideBar from './SideBar';
import HomeButton from './Home';

// Import all certificate images
import aiCertificate from '../assets/AI4ComUnity_Winners_Certificate.jpg';
import srishtihackathon1 from '../assets/srishtihackathon1.png';
import srishtihackathon2 from '../assets/srishtihackathon2.jpg';
import codenza1 from '../assets/codenza.png';
import codenza2 from '../assets/codenza2.jpg';
import bigo1 from '../assets/bigo1.jpg';
import bigo2 from '../assets/BigO.jpg';
import achievers from '../assets/Achievers.jpg';
import academic1 from '../assets/academic.jpeg';
import academic2 from '../assets/academic2.jpeg';

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);

  const achievements = [
    {
      title: "AI4ComUnity Hackathon",
      year: "2025",
      description: "Winner - Successfully designed and implemented an AI-ML based solution focused on industrial monitoring and maintenance systems during the competition timeframe",
      certificates: [aiCertificate],
    },
    {
      title: "Srishti Hackathon",
      year: "2025",
      description: "Winner - Developed and presented a fully functional project utilizing the Dwani API to address public welfare challenges within the given constraints",
      certificates: [srishtihackathon1, srishtihackathon2],
    },
    {
      title: "Codenza Coding Competition",
      year: "2025",
      description: "Winner - Secured first place in this competitive programming event hosted on Hackerrank platform with participation from 200+ skilled coders",
      certificates: [codenza1, codenza2],
    },
    {
      title: "Binary Battle 2.0",
      year: "2024",
      description: "Winner - Earned top honors in this website design competition by creating an innovative and technically proficient web solution",
      certificates: [bigo2],
    },
    {
      title: "Achievers Of College",
      year: "2025",
      description: "Overall Champions - Led team to victory across multiple events during the annual college festival through exceptional performance",
      certificates: [achievers],
    },
    {
      title: "The Big O Coding",
      year: "2025",
      description: "Winner - Demonstrated superior problem-solving skills to emerge victorious in this technical coding competition featuring algorithmic challenges",
      certificates: [bigo1],
    },
    {
      title: "Academic Excellence",
      year: "2023-2024",
      description: "Top Performer - Recognized as the highest achiever in the Computer Science Engineering department at AIT based on academic results",
      certificates: [academic2, academic1],
    }
];

  const nextAchievement = () => {
    setCurrentIndex((prev) => (prev === achievements.length - 1 ? 0 : prev + 1));
    setCurrentCertificateIndex(0);
  };

  const prevAchievement = () => {
    setCurrentIndex((prev) => (prev === 0 ? achievements.length - 1 : prev - 1));
    setCurrentCertificateIndex(0);
  };

  const nextCertificate = () => {
    const currentCerts = achievements[currentIndex].certificates;
    setCurrentCertificateIndex((prev) => (prev === currentCerts.length - 1 ? 0 : prev + 1));
  };

  const prevCertificate = () => {
    const currentCerts = achievements[currentIndex].certificates;
    setCurrentCertificateIndex((prev) => (prev === 0 ? currentCerts.length - 1 : prev - 1));
  };

  return (
    <div className="achievements-container">
      <HomeButton />
      <TopBar />
      <SideBar />

      <div className="space-background"></div>

      <div className="achievements-main-content">
        {/* Floating image */}
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
              <div className="achievement-title">{achievements[currentIndex].title}</div>
              <div className="achievement-year">{achievements[currentIndex].year}</div>
              <div className="achievement-description">{achievements[currentIndex].description}</div>

              <div className="certificate-preview">
                <div className="certificate-wrapper">
                  <img
                    src={achievements[currentIndex].certificates[currentCertificateIndex]}
                    alt={`Certificate ${currentCertificateIndex + 1}`}
                    className="certificate-image"
                  />
                </div>
              </div>

              {/* Certificate Nav (Below the image) */}
              {achievements[currentIndex].certificates.length > 1 && (
                <div className="certificate-nav">
                  <button className="cert-nav-btn" onClick={prevCertificate}>←</button>
                  <span className="cert-counter">
                    {currentCertificateIndex + 1} / {achievements[currentIndex].certificates.length}
                  </span>
                  <button className="cert-nav-btn" onClick={nextCertificate}>→</button>
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
                onClick={() => {
                  setCurrentIndex(index);
                  setCurrentCertificateIndex(0);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
