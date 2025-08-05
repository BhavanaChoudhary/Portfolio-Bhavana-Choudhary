import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './components/Portfolio'
import Project from './components/Project'
import AboutMe from './components/Aboutme';
import Skills from './components/Skills';
import './App.css'
import Achievements from './components/Achievements';
import OtherWorks from './components/OtherWorks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/otherworks" element={<OtherWorks />} />
      </Routes>
    </Router>
  )
}

export default App
