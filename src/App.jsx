import { useState } from 'react'
import './App.css'
import Home from './comps/home'
import About from './comps/about'
import Skills from './comps/skills'
import Projects from './comps/projects'
import Contact from './comps/contact'
import Navbar from './comps/nav'

function App() {
  const [count, setCount] = useState(0)

  return (
            <div className=" h-full w-full bg-black flex-col">
            <Navbar/>
    <Home id="home"/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
            </div>

  )
}

export default App
