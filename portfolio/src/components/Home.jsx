import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import './Home.css';

const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <button 
      className="cyber-home-btn"
      onClick={() => navigate('/')}
      aria-label="Return to home"
    >
      <FiHome className="cyber-home-icon" />
      <span className="cyber-btn-text">TERMINAL_</span>
    </button>
  );
};

export default HomeButton;