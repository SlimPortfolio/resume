import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import Intro from './Components/Intro';
import AboutMe from './Components/AboutMe';

function App() {
  return (
    <div className="">
      <header className="">
        <NavigationBar />
        <Intro />
        <AboutMe />
      </header>
    </div>
  );
}

export default App;
