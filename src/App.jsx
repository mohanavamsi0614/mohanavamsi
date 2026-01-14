import './App.css'
import Home from './comps/home'
import About from './comps/about'
import Experience from './comps/experience'
import Skills from './comps/skills'
import Projects from './comps/projects'
import Contact from './comps/contact'
import Navbar from './comps/nav'

function App() {

  return (
    <div className=" h-full w-full bg-black flex-col">
      <Navbar />
      <Home id="home" />
      <About id="about" />
      <Experience />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
    </div>

  )
}

export default App  
