import { useState, useEffect } from 'react'

import './App.css'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline/INDEX.JSX'

import { formacao } from "./data/formacao";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <main>
      <button 
        onClick={toggleTheme} 
        className="theme-toggle"
        aria-label="Alternar tema"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Timeline titulo={"Formação"} data={formacao}></Timeline>
      <section style={{height:900}}></section>
    </main>
  )
}

export default App
