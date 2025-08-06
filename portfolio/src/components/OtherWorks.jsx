// OtherWorks.jsx
import React, { Suspense, useState } from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import WorkModel from './WorkModel';
import building2 from '../assets/backgroundproject.jpg';
import TopBar from './TopBar';
import SideBar from './SideBar';
import HomeButton from './Home';

const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-image: url(${building2});
  background-size: cover;
  background-position: center;
`;

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 11;
  mix-blend-mode: screen;
  opacity: 0.7;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 12;
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  box-sizing: border-box;
  overflow-y: auto;
  margin: 0 auto;
  margin-top: 10%;

  @media (min-width: 768px) {
    padding: 2rem;
    width: 80%;
    max-width: 1200px;
  }
  @media (min-width: 1024px) {
    padding: 2rem;
    width: 80%;
    max-width: 1200px;
    left: 17%;
  }
`;

const InnerContainer = styled.div`
  width: 90%;
  display: flex;
  font-size: 0.5rem;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  padding: 1.5rem;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 255, 247, 0.2);
  box-shadow: 0 0 40px rgba(0, 255, 247, 0.1);
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 2rem;
    width: 85%;
  }
`;

const Title = styled.h1`
  color: #00fff7;
  font-family: 'Space Grotesk', 'Rajdhani', sans-serif;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 500;
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: 0 0 15px rgba(0, 255, 247, 0.4);
  letter-spacing: 0.5px;
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.85);
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: clamp(0.8rem, 1.8vw, 1rem);
  text-align: center;
  margin-bottom: 2rem;
  max-width: 700px;
  line-height: 1.5;
  font-weight: 400;
  padding: 0 0.5rem;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterButton = styled.button`
  background: ${({ active }) => active ? '#00fff7' : 'transparent'};
  color: ${({ active }) => active ? '#000' : '#00fff7'};
  border: 1px solid #00fff7;
  border-radius: 8px;
  padding: 0.5rem 1.2rem;
  font-family: 'Exo 2', 'Orbitron', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-transform: uppercase;
  letter-spacing: 0.8px;

  &:hover {
    background: ${({ active }) => active ? '#00fff7' : 'rgba(0, 255, 247, 0.15)'};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 247, 0.2);
  }
`;

const WorksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
  padding: 0 0.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const WorkCard = styled.div`
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(0, 255, 247, 0.3);
  border-radius: 10px;
  padding: 1.2rem;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  cursor: pointer;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 255, 247, 0.8);
    box-shadow: 0 8px 20px rgba(0, 255, 247, 0.3);
    background: rgba(0, 0, 0, 0.6);
  }
`;

const WorkTitle = styled.h3`
  color: #00fff7;
  font-family: 'Orbitron', monospace;
  font-size: 1rem;
  margin-bottom: 0.8rem;
  line-height: 1.3;
`;

const WorkDescription = styled.p`
  color: rgba(204, 204, 204, 0.9);
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: 0.8rem;
  line-height: 1.4;
`;

const OtherWorks = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const works = [
    {
      title: "Accenture Nordics Software Engineering Simulation",
      description: "Training on cloud integration, cybersecurity, and secure coding practices",
      category: "Certifications"
    },
    {
      title: "BCG GenAI Certification",
      description: "Developed AI-powered financial chatbot using Python and pandas",
      category: "Certifications"
    },
    {
      title: "SAWIT.AI Learnathon - Fundamentals of Generative AI",
      description: "GUVI, HCLTech, Google For Developers (Oct 2024)",
      category: "Certifications"
    },
    {
      title: "React JS Certification",
      description: "Udemy — Meta Brains",
      category: "Certifications"
    },
    {
      title: "Java, Spring Boot & Microservices Certification",
      description: "Udemy - OOPS, Advanced Java, JDBC, MVC & Microservices",
      category: "Certifications"
    },
    {
      title: "Full Stack Certification",
      description: "Coursera",
      category: "Certifications"
    },
    {
      title: "Google Cloud Certifications",
      description: "AI Agent, Prompt Vertex AI, VMs and other GCP technologies",
      category: "Certifications"
    },
    {
      title: "Sanskar NGO - Volunteer Web Developer",
      description: "Jul 2024 - Present | Built responsive NGO website with donation integration and contact forms using HTML, CSS, JavaScript. Maintained project documentation on GitHub and authored technical blogs.",
      category: "Experience"
    },
    {
      title: "PSTPL Steel & Pipes Business Website",
      description: "Developed a complete business website for steel and pipes industry  with responsive design and modern features Link : https://bhavanachoudhary.github.io/PSTPL/",
      category: "Experience"
    }
  ];

  const filters = ['All', 'Experience', 'Certifications'];

  const filteredWorks = activeFilter === 'All' 
    ? works 
    : works.filter(work => work.category === activeFilter);

  return (
    <Container>
      <TopBar/>
      <SideBar/>
      <HomeButton/>
      <BackgroundImage />
      <CanvasContainer>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          gl={{ preserveDrawingBuffer: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <pointLight position={[-10, -10, -10]} intensity={1} />
            <WorkModel />
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              enableRotate={true}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
      </CanvasContainer>

      <ContentContainer>
        <InnerContainer>
          <Title>Other Works</Title>
          <Subtitle>
            Explore my diverse portfolio of creative projects, research, and contributions 
            beyond traditional development work.
          </Subtitle>

          <FilterContainer>
            {filters.map(filter => (
              <FilterButton
                key={filter}
                active={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </FilterButton>
            ))}
          </FilterContainer>
          
          <WorksGrid>
            {filteredWorks.map((work, index) => (
              <WorkCard key={index}>
                <WorkTitle>{work.title}</WorkTitle>
                <WorkDescription>{work.description}</WorkDescription>
              </WorkCard>
            ))}
          </WorksGrid>
        </InnerContainer>
      </ContentContainer>
    </Container>
  );
};

export default OtherWorks;