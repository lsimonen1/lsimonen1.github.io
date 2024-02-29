import React from 'react'
import TabButton from './TabButton'
import { useState, useEffect } from 'react';
import { Card, Row, Col, Container, Navbar, Image } from 'react-bootstrap';
import headshot from './headshot.PNG';
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
    <div className = "basic1" style={{ margin: "0rem",height: "100%", backgroundColor: 'transparent'}}>
      <hr></hr>

      <div className = "aboutMeDiv">
      
      </div>
      <Row>
      
      </Row>
      <Container fluid style={{ margin: "0rem", background: "transparent"}}>
      
      <Card.Title class = "titleName" className = 'titleName' style = {{marginTop: '0', paddingTop: '0.5rem',paddingBottom: '1rem', fontFamily: "Dosis", fontSize: '5vw'}}>About Me</Card.Title>

      <Image
    img src={headshot} alt="Photo of Lucas"
    height={300}
    width={320}
    style={{ alignSelf: 'center', borderRadius: '25%', marginBottom: '10vh' }}
/>
      <Row xs={1} s= {1} md={1} lg={3} xl={3} xxl={3}>
        {/* Repeat the following block for each card */}
        <Col>
        <Card id = "aboutmebutton" style={{flex: 1, border: "none", color: 'white', backgroundColor: 'transparent', 
       margin: "0.5rem", pasdding: "0.5rem", fontFamily: "Dosis"}}>
        <Card.Title style = {{paddingTop: '0.5rem'}}> Who am I?</Card.Title>
        <Card.Body>Hello! I am Lucas Simonen, a Computer Science undergraduate student at the University of Wisconsin-Madison,
 hailing from Waukesha, Wisconsin. As a junior, I am seeking opportunities to apply technical skills in agile software development teams. I have ambition to learn more about software development in new situations and contribute positively to collaborative projects. One of my greatest interests right now is UI design.
  I'm captivated by the way design can shape user experiences and enhance the functionality of software.
  Whether it's creating visually appealing interfaces or working on the backend of projects, I really look forward to working on a project that can push my technical knowledge and that other people can use.</Card.Body>
       </Card>
        </Col>
        <Col>
        <Card id = "aboutmebutton" style={{flex: 1, border: "none", color: 'white', backgroundColor: 'transparent', 
       margin: "0.5rem", pasdding: "0.5rem", fontFamily: "Dosis"}}>
        <Card.Title style = {{paddingTop: '0.5rem'}}> Technical Skills</Card.Title>
        <Card.Body>Java (Intermediate), JavaScript (Intermediate), React/React Native (Intermediate), SQL (Beginner), HTML (Advanced), CSS(Intermediate), VSCode (Advanced), Git (Intermediate), Photoshop (Advanced), Lightroom (Advanced), Premiere Pro (Advanced), Illustrator (Intermediate), After Effects (Intermediate) and Dream Weaver (Intermediate).
        </Card.Body>
       </Card>
        </Col>
        <Col>
        <Card id = "aboutmebutton" style={{flex: 1, border: "none", color: 'white', backgroundColor: 'transparent', 
       margin: "0.5rem", pasdding: "0.5rem", fontFamily: "Dosis"}}>
        <Card.Title>Non-Technical Skills</Card.Title>
        <Card.Body>I am very personable and have developed lots of experience communicating effectively by working with customers as a concessionaire and waiter.
           I also bring a positive and constructive attitude to work, while being very resourceful and being able to adapt and learn from unfamiliar problems that come up wherever I work.
        </Card.Body>
       </Card>
        </Col>
        {/* End of card block */}
      </Row>
      <div style={{height: "10vh"}}>

    </div>
      </Container>
      

    



      
      <hr></hr>
    </div>
  )
}

export default Contact
