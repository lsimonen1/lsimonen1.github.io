import 'bootstrap/dist/css/bootstrap.min.css';
import Fade from "./components/Fade";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

          //<Route path="*" element={<BadgerNoMatch />} />

function App() {
  return (

<div>
      <Routes>
        <Route path="/" element={<Fade />}>        
          <Route index element={<Fade />} />
          <Route path="/resume" element={<Link to={'google.com'}></Link>}></Route>
          <Route path="/aboutme" element={<Contact />}></Route>
          </Route>
      </Routes>
      </div>
  );
}


export default App;