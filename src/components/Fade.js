import React, { useEffect, useState } from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import Contact from "./Contact"
import { useRef } from "react";

function Fade() {


  const [button1color, setbutton1color] = useState('transparent')
  const [button2color, setbutton2color] = useState('transparent')
  const [button3color, setbutton3color] = useState('transparent')

  const [color1, setColor1State] = useState(151);
  const [color2, setColor2State] = useState(171);

  const [counter, setCounterState] = useState(1);

  const aboutMeRef = useRef(null);



  function goToPortfolio(){
    //aboutmescroll
    window.open('https://github.com/lsimonen1/portfolio');
  }
  function goToResume(){
    window.open('https://drive.google.com/file/d/1lsfyvSJ0GRxEWMkKWiImgSGXHmt2ZNf5/view?usp=sharing');
    
  }
 

  useEffect(() => {
    const timer = setInterval(() => {
        if(color1<200 && color1 > 110){
            setColor1State(color1 + counter)
            setColor2State(color1 + 20)
        }else{
            setCounterState(counter * -1)
            setColor1State(color1 + counter)
            

        }

        },80)
        return () => clearInterval(timer);
  }, []);


  function makeBackgroundWhite(){
    setbutton1color('rgb(228, 238, 243, 0.5)');
  }

  function makeBackgruondClear(){
    setbutton1color('transparent');

  }
  function makeBackground2White(){
    setbutton2color('rgb(228, 238, 243, 0.5)');
  }

  function makeBackgruond2Clear(){
    setbutton2color('transparent');

  }
  function makeBackground3White(){
    setbutton3color('rgb(228, 238, 243, 0.5)');
  }

  function makeBackgruond3Clear(){
    setbutton3color('transparent');

  }

  return <div style={{ height: "",margin: "0rem", background: "linear-gradient(to bottom right,rgba(10,"+color1+","+ color1/1.9+",1),rgba("+color1/2+","+ color2/1.5+","+ color2/1.3+",0.8))"}}>

<div className="namePage" style = {{}}>
  <div style = {{height: "100vh"}}>
      <div className="topHalf">
        
      
</div>
<Navbar bg="transparent" variant="light"  >
        <Navbar.Collapse className="justify-content-center" >
          <Navbar.Text >
            <a style = {{color: "white", fontFamily: "Dosis"}} href="https://www.linkedin.com/in/lucas-simonen-912801261/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </Navbar.Text>
          <span className="navbar-divider">|</span>
          <Navbar.Text>
            <a style = {{color: "white", fontFamily: "Dosis"}} href="https://wisc.joinhandshake.com/stu/users/32058183/" target="_blank" rel="noopener noreferrer">Handshake.com</a>
          </Navbar.Text>
          <span className="navbar-divider">|</span>
          <Navbar.Text style = {{color: "white", fontFamily: "Dosis"}}>Phone: (262) 646-0833</Navbar.Text>
          <span className="navbar-divider">|</span>
          <Navbar.Text style = {{color: "white", fontFamily: "Dosis"}}>Email: Lsimonen@wisc.edu</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <h1 class = "titleName" className = 'titleName' style = {{fontFamily: "Dosis"}}>Lucas Simonen</h1>
      <div className = 'majorName' style = {{padding:0, margin:0}}>
      <p style = {{padding:0, margin:0, fontFamily: "Dosis"}}>Computer Science Undergraduate at UW Madison</p>

      </div>
      <div style={{padding: "1rem"}}></div>
      <Container fluid style={{width: "50vw"}}>
      <Row  style={{alignItems: 'center', flex: 1, justifyContent: 'center'}} xs={1} s= {1} md={3} lg={3} xl={6} xxl={6}>
        <Col>
      <Card id = "portfoliobutton" style={{flex: 1, border: "2px solid white", color: 'white', backgroundColor: `${ button1color }`, 
      display: "flex", margin: "0.5rem", padding: "0.5rem", fontFamily: "Dosis"}} onMouseEnter={() => makeBackgroundWhite()} onMouseLeave={() => makeBackgruondClear()} onClick={goToPortfolio}>Portfolio</Card>
      </Col>
      <Col>
      <Card id = "resumebutton" style={{flex: 1, border: "2px solid white", color: 'white', backgroundColor: `${ button2color }`, 
      display: "flex", margin: "0rem", padding: "0.5rem", fontFamily: "Dosis"}} onMouseEnter={() => makeBackground2White()} onMouseLeave={() => makeBackgruond2Clear()} onClick={goToResume}>Resume</Card>
     </Col>
     <Col>
      <Card id = "aboutmebutton" style={{flex: 1, border: "2px solid white", color: 'white', backgroundColor: `${ button3color }`, 
      display: "flex", margin: "0.5rem", padding: "0.5rem", fontFamily: "Dosis"}} onMouseEnter={() => makeBackground3White()} onMouseLeave={() => makeBackgruond3Clear()} onClick={() =>
        window.scrollTo({
          top: aboutMeRef.current.offsetTop,
          behavior: "smooth"
        })
      }>About Me</Card>
      </Col>
      </Row>
      
      
      </Container>
      
      </div>
      <Container ref={aboutMeRef} fluid style={{width: "80vw"}}>
      <Contact ></Contact>
      
      </Container>
    
      </div>
      <Navbar bg="transparent" variant="light"  >
        <Navbar.Collapse className="justify-content-center" >
          <Navbar.Text >
            <a style = {{color: "white", fontFamily: "Dosis"}} href="https://www.linkedin.com/in/lucas-simonen-912801261/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </Navbar.Text>
          <span className="navbar-divider">|</span>
          <Navbar.Text>
            <a style = {{color: "white", fontFamily: "Dosis"}} href="https://wisc.joinhandshake.com/stu/users/32058183/" target="_blank" rel="noopener noreferrer">Handshake.com</a>
          </Navbar.Text>
          <span className="navbar-divider">|</span>
          <Navbar.Text style = {{color: "white", fontFamily: "Dosis"}}>Phone: (262) 646-0833</Navbar.Text>
          <span className="navbar-divider">|</span>
          <Navbar.Text style = {{color: "white", fontFamily: "Dosis"}}>Email: Lsimonen@wisc.edu</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

  </div>;
}

export default Fade;