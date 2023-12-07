import React from 'react'
import TabButton from './TabButton'
import img from './StealingInTheWestt.png'
import logo1 from './project1.gif'
import logo2 from './project2.gif'
import { useState, useEffect } from 'react'

import { Navbar, Col, Row, Container, Card, Image } from 'react-bootstrap'





/*




        


        

 <p>More to come soon! Website is still under construction</p>

        */

function Portfolio() {

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

  return (
    <div className = "basic1" style={{ margin: "0rem",height: "100%", background: "linear-gradient(to bottom right,rgba(00,"+colorState/1.5+","+colorState/1.5+",1),rgba(150,"+colorState/2+","+colorState/2+",1))"}}>
    <div className = "aboutMeDiv">
    
    </div>
    <Row>
    
    </Row>
    <Container fluid style={{ margin: "0rem", background: "transparent", height: "240vh"}}>
    <TabButton class = "col-2"title = 'Back' linkpage={"/"}/>
    <Card.Title style = {{paddingTop: '0.5rem', fontSize: '4rem'}}>Some of My Projects</Card.Title>
    <Row xs={1} s= {1} md={2} lg={2} xl={2} xxl={2}>
      {/* Repeat the following block for each card */}
      <Col>
      <Card id = "aboutmebutton" style={{flex: 1,display:"flex", border: "2px solid white", color: 'white', backgroundColor: 'transparent', 
     margin: "0.5rem", pasdding: "0.5rem", fontFamily: "Dosis"}}>
      <Card.Title style = {{paddingTop: '0.5rem'}}> Two 2D Helicopters flying I made for CS 559 with JS.</Card.Title>
      <Image
    img src={logo2} alt="project 1"
    height={350}
    width={300}
    style={{ alignSelf: 'center' }}
/>
     </Card>
      </Col>
      <Col>
      <Card id = "aboutmebutton" style={{flex: 1, border: "2px solid white", color: 'white', backgroundColor: 'transparent', 
     margin: "0.5rem", pasdding: "0.5rem", fontFamily: "Dosis"}}>
      <Card.Title style = {{paddingTop: '0.5rem'}}>Small graphics town project I made for CS 559 with JS.</Card.Title>
      <Image
    img src={logo1} alt="project 2"
    height={350}
    width={300}
    style={{ alignSelf: 'center' }}
/>
     </Card>
      </Col>
      <Col>
      <Card id = "aboutmebutton" style={{flex: 1, border: "2px solid white", color: 'white', backgroundColor: 'transparent', 
     margin: "0.5rem", pasdding: "0.5rem", fontFamily: "Dosis"}}>
      <Card.Title>Movie poster I designed for COM-ARTS 155</Card.Title>
    
      <Image
    img src={img} alt="project 3"
    height={350}
    width={300}
    style={{ alignSelf: 'center' }}
/>
     </Card>
      </Col>
      <Col>
      <Card id = "aboutmebutton" style={{flex: 1, border: "2px solid white", color: 'white', backgroundColor: 'transparent', 
     margin: "0.5rem", pasdding: "0.5rem", fontFamily: "Dosis"}}>
      <Card.Title>More to come soon! This website is a work in progress and was made during my free time to show some of my skills in react!</Card.Title>
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

export default Portfolio
