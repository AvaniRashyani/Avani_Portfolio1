//import logo from './logo.svg';
import './App.css';
import Intro1 from './Components/Intro/Intro1';
import Navbar from './Components/Navbar';
import Skill from './Components/skills/Skill';
import ski from './Components/ski/Ski1';
import Ski1 from './Components/ski/Ski1';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import Photosex from './Components/photosex/Photosex';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Photosex/>
      <Intro1 id='Intro1'/>
      <Skill/>
      <Ski1/>
      <Contact/>
      < Footer/>
   
        
    </div>
  );
}

export default App;
