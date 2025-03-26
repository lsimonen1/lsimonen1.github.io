import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import HomeView from './components/HomeView';
import Portfolio from './components/Portfolio';
import ResumePage from './components/ResumePage';
import Contact from './components/Contact'
import ParticlesBackground from './components/ParticlesBackground';
function App() {
  return (

<div>
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
          <Route index element={<HomeView />} />
          <Route path="/resume" element={<ResumePage />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      </div>
  );
}


export default App;