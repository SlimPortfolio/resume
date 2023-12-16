import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import Intro from './Components/Intro';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import ProjectCard from './Components/ProjectCard';
import dlp from './Images/DLP.png'
function App() {
  return (
    <div className="">
      <header className="">
        <NavigationBar />
        <Intro />
        <AboutMe />
        <Skills />
        <ProjectCard picture={dlp}/>
      </header>
    </div>
  );
}

export default App;
