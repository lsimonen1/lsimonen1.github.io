import React from 'react'
import TabButton from './TabButton'
import { useState, useEffect } from 'react';
import { Card, Row, Col, Container, Navbar } from 'react-bootstrap';
function Contact() {

  const [colorState, setColorState] = useState();

  let color1 = 2;
  let counter = 1;

  useEffect(() => {
    const timer = setInterval(() => {
        if(color1<255 && color1 > 1){
            color1 = color1 + counter;

        }else{
            counter = counter * -1;
            color1 = color1 + counter;
        }
        setColorState(color1);
        },50)
        return () => clearInterval(timer);
  }, []);

// xs={5} md={3} lg={2} xl = {2} xxl={1}

  return (
    <div className = "basic1" style={{ margin: "0rem",height: "100%", background: "linear-gradient(to bottom right,rgba(00,"+colorState/1.5+","+colorState/1.5+",1),rgba(150,"+colorState/2+","+colorState/2+",1))"}}>
      <div className = "aboutMeDiv">
      
      </div>
      <Row>
      
      </Row>
      <Container fluid style={{ margin: "0rem", background: "transparent", height: "130vh"}}>
      <TabButton class = "col-2"title = 'Back' linkpage={"/"}/>
      <Card.Title style = {{paddingTop: '0.5rem', fontSize: '4rem'}}>About Me</Card.Title>
      <Row xs={1} s= {1} md={2} lg={3} xl={3} xxl={3}>
        {/* Repeat the following block for each card */}
        <Col>
        <Card id = "aboutmebutton" style={{flex: 1, border: "2px solid white", color: 'white', backgroundColor: 'transparent', 
       margin: "0.5rem", pasdding: "0.5rem", fontFamily: "Dosis"}}>
        <Card.Title style = {{paddingTop: '0.5rem'}}> Who am I?</Card.Title>
        <Card.Body>Hello! I am Lucas Simonen, a Computer Science undergraduate student at the University of Wisconsin-Madison,
 hailing from Waukesha, Wisconsin. As a junior, I am actively seeking new opportunities within the realm of computer science. One of my greatest interests is UI design.
  I'm captivated by the way design can shape user experiences and enhance the functionality of software.
  Whether it's creating visually appealing interfaces or crafting intuitive user journeys, I find it really fun to be able to work with something that is extremely functionable but also creative.</Card.Body>
       </Card>
        </Col>
        <Col>
        <Card id = "aboutmebutton" style={{flex: 1, border: "2px solid white", color: 'white', backgroundColor: 'transparent', 
       margin: "0.5rem", pasdding: "0.5rem", fontFamily: "Dosis"}}>
        <Card.Title style = {{paddingTop: '0.5rem'}}> Technical Skills</Card.Title>
        <Card.Body>Java (Intermediate), JavaScript (Intermediate), React (Intermediate), HTML (Advanced), CSS(Intermediate), Photoshop (Advanced), Lightroom (Advanced), Premiere Pro (Advanced), Illustrator (Intermediate), After Effects (Intermediate) and Dream Weaver (Intermediate).
        </Card.Body>
       </Card>
        </Col>
        <Col>
        <Card id = "aboutmebutton" style={{flex: 1, border: "2px solid white", color: 'white', backgroundColor: 'transparent', 
       margin: "0.5rem", pasdding: "0.5rem", fontFamily: "Dosis"}}>
        <Card.Title>Non-Technical Skills</Card.Title>
        <Card.Body>I am very personable and have developed lots of experience communicating effectively by working with customers as a concessionaire and waiter.
           I also bring a positive and constructive attitude to work, while being very resourceful and being able to adapt and learn from unfamiliar problems that come up wherever I work.
        </Card.Body>
       </Card>
        </Col>
        {/* End of card block */}
      </Row>
      </Container>
      <Navbar bg="transparent" variant="light" >
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

    



      
      
    </div>
  )
}

export default Contact
