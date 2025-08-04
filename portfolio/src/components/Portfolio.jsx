import React from 'react'
import ModelViewer from './ModelViewer'
import './PortFolio.css'

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="futuristic-text">
        <h1>Bhavana Choudhary</h1>
        <br></br>
        <p>Developer | Problem Solver | Creative Thinker</p>
      </div>
      <ModelViewer />
    </div>
  )
}
