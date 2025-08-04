// components/SideBar.jsx
import React from 'react'
import styled from 'styled-components'

const VerticalOverlayBar = styled.div`
  position: fixed;
  top: 450px;
  left: 15px;
  width: 28px;
  height: 180px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  z-index: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 8px 0;

  @media (max-width: 768px) {
    top: 520px; /* moved lower */
    left: 10px;
    width: 32px;
    height: 160px;
    gap: 20px;
  }

  @media (max-width: 480px) {
    top: 350px; /* moved even lower */
    left: 8px;
    width: 30px;
    height: 150px;
    gap: 18px;
  }
`

const IconLink = styled.a`
  color: #00fff7;
  font-family: 'Orbitron', monospace;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;

  svg {
    fill: #00fff7;
    width: 18px;
    height: 18px;
    transition: fill 0.3s ease;

    @media (max-width: 768px) {
      width: 16px;
      height: 16px;
    }

    @media (max-width: 480px) {
      width: 14px;
      height: 14px;
    }
  }

  span {
    opacity: 0;
    white-space: nowrap;
    transition: opacity 0.3s ease;
    position: absolute;
    left: 26px;
    font-size: 12px;
    color: #00fff7;

    @media (max-width: 768px) {
      font-size: 11px;
    }

    @media (max-width: 480px) {
      font-size: 10px;
      left: 22px;
    }
  }

  &:hover span {
    opacity: 1;
  }

  &:hover svg {
    fill: #ffffff;
  }
`

export default function SideBar() {
  return (
    <VerticalOverlayBar>
      <IconLink href="https://drive.google.com/file/d/1bR1YNvYcwBv7kXe-QSdYea2ukpiTR6QR/view?usp=sharing" title="Resume">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zM13 3.5L18.5 9H13V3.5zM8 12h8v2H8v-2zm0 4h8v2H8v-2z" />
        </svg>
        <span>Resume</span>
      </IconLink>

      <IconLink href="https://www.linkedin.com/in/bhavana-b-choudhary-348a3b278/" target="_blank" title="LinkedIn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.5c0-1.8 0-4-2.4-4s-2.8 1.9-2.8 3.9V24h-5V8z" />
        </svg>
        <span>LinkedIn</span>
      </IconLink>

      <IconLink href="https://github.com/BhavanaChoudhary" target="_blank" rel="noopener noreferrer" title="Github">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.763-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.1.823 2.22 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        <span>Github</span>
      </IconLink>
    </VerticalOverlayBar>
  )
}
