import React from 'react'
import { Card, Row, Col, Container, Image } from 'react-bootstrap';
import headshot from './headshot.PNG';
function About() {


  return (
    <div className="basic1" style={{ margin: "0rem", height: "100%", backgroundColor: 'transparent' }}>
      <hr></hr>

      <div className="aboutMeDiv">

      </div>
    
      <Container fluid style={{ margin: "0rem", background: "transparent" }}>

{
      //  <Image
       //   src={headshot} alt="Photo of Me"
       //   height={200}
       //   width={200}
       //   style={{ alignSelf: 'center', borderRadius: '25%', marginBottom: '10vh' }}
       // />
}
<Row xs={1} s={1} md={1} lg={3} xl={3} xxl={3}>
<Col></Col>
<Col><Card.Title  style={{ marginTop: '0', padding: '2rem', paddingBottom: '1rem', fontFamily: "Dosis", fontSize: '5vw', zIndex:1, color: 'white'}}>About Me</Card.Title>
</Col>
<Col></Col>

</Row>
        <Row xs={1} s={1} md={1} lg={3} xl={3} xxl={3}>
          <Col>

            <Card id="aboutmebutton" style={{
              flex: 1, border: "none", color: 'white', backgroundColor: 'transparent',
              margin: "0.5rem", pasdding: "0.5rem", fontFamily: "Dosis"
            }}>
              <Card.Title style={{ paddingTop: '0.5rem' }}> Who am I?</Card.Title>
              <Card.Body>Hello! My name is Lucas Simonen, and I hold a Bachelor of Science degree in Computer Science from the University of Wisconsin-Madison.
                I'm from Waukesha, Wisconsin. As a new gratuate as of December 2024, I am seeking opportunities to apply technical skills in agile software development teams. I have ambition to learn more about software development in new situations and contribute positively to collaborative projects.
                </Card.Body>
            </Card>
            
          </Col>
          <Col>
            <Card id="aboutmebutton" style={{
              flex: 1, border: "none", color: 'white', backgroundColor: 'transparent',
              margin: "0.5rem", pasdding: "0.5rem", fontFamily: "Dosis"
            }}>
              <Card.Title style={{ paddingTop: '0.5rem' }}> Technical Skills</Card.Title>
              <Card.Body>Java, JavaScript, Python, Vite, React/React Native, SQL, HTML, CSS, VSCode, Git, Photoshop, Lightroom, Premiere Pro, Illustrator, After Effects, and Dream Weaver.
              </Card.Body>
            </Card>
          </Col>
          <Col>

            <Card id="aboutmebutton" style={{
              flex: 1, border: "none", color: 'white', backgroundColor: 'transparent',
              margin: "0.5rem", pasdding: "0.5rem", fontFamily: "Dosis"
            }}>
              <Card.Title>Non-Technical Skills</Card.Title>
              <Card.Body>I am very personable and have developed lots of experience communicating effectively by working with customers in the past.
                I also bring a positive and constructive attitude to work, while being very resourceful and being able to adapt and learn from unfamiliar problems that come up wherever I work.
              </Card.Body>
            </Card>
          </Col>
          {/* End of card block */}
        </Row>
        <div style={{ height: "10vh" }}>

        </div>
      </Container>

      <hr></hr>
    </div>
  )
}

export default About
