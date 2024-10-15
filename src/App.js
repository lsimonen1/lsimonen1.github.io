import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./components/About";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import HomeView from './components/HomeView';
function App() {
  return (

<div>
      <Routes>
        <Route path="/" element={<HomeView />}>        
          <Route index element={<HomeView />} />
          <Route path="/resume" element={<Link to={'google.com'}></Link>}></Route>
          <Route path="/aboutme" element={<Contact />}></Route>
          </Route>
      </Routes>
      </div>
  );
}


export default App;