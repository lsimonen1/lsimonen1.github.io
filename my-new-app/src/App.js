import AboutMe from "./components/AboutMe";
import HomeView from "./components/HomeView";
import 'bootstrap/dist/css/bootstrap.min.css';
import Fade from "./components/Fade";

function App() {
  return (
    <div className="App">
      <Fade />
      <div className = "aboutMeDiv">
        
      <AboutMe />
      

      </div>
    </div>
  );
}


export default App;