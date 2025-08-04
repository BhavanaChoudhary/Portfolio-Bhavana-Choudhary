import React from 'react'
import './Spinner.css'

export default function Spinner() {
  return (
    <div className="spinner-overlay">
      <div className="spinner-container">
        <div className="spinner" />
        <div className="spinner-text">Alert: You are entering a Futuristic World</div>
      </div>
    </div>
  )
}
