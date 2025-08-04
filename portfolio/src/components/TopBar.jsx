// components/TopBar.jsx
import React from 'react'
import styled from 'styled-components'

const OverlayBar = styled.div`
  position: fixed;
  top: 20px;
  left: 25%;
  right: 25%;
  height: 35px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    height: 30px;
    gap: 12px;
    left: 10px;
    right: 10px;
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    height: auto;
    padding: 5px 10px;
    gap: 10px;
  }
`

const Link = styled.a`
  color: #00fff7;
  font-family: 'Orbitron', monospace;
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }

  @media (max-width: 480px) {
    font-size: 9px;
  }
`

export default function TopBar() {
  return (
    <OverlayBar>
      <Link href="/about">About Me</Link>
      <Link href="/skills">Skills</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/achievements">Achievements</Link>
      <Link href="/otherworks">Other Works</Link>
    </OverlayBar>
  )
}
