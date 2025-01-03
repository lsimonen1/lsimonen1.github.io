import React, { useState } from "react";
import { Col, Container, Row, Navbar, Button } from "react-bootstrap";
// import { BackgroundFade } from "./BackgroundFade";
import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";
import ParticlesBackground from "./ParticlesBackground";

const MemoizedParticlesBackground = React.memo(ParticlesBackground);

function Portfolio() {
  // const { backgroundStyle } = BackgroundFade();
  const navigate = useNavigate(); // Initialize the navigate hook

  const [buttonColors, setButtonColors] = useState({
    button: "transparent",
  });

  const handleBackClick = () => {
    navigate("/"); // Navigate back to home
  };

  function handleMouseEnter() {
    setButtonColors({
      button: "rgb(228, 238, 243, 0.5)", // Update button color
    });
  }

  function handleMouseLeave() {
    setButtonColors({
      button: "transparent", // Reset button color
    });
  }

  return (
    <div style={{ background: "black", minHeight: "100vh", position: "relative" }}>
      {/* Particle Background */}
      <MemoizedParticlesBackground />

      {/* Content Overlay */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Navbar for links */}
        <Navbar bg="transparent" variant="light">
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text>
              <a
                style={{ color: "white", fontFamily: "Dosis" }}
                href="https://www.linkedin.com/in/lucas-simonen-912801261/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Navbar.Text>
            <span className="navbar-divider">|</span>
            <Navbar.Text>
              <a
                style={{ color: "white", fontFamily: "Dosis" }}
                href="https://wisc.joinhandshake.com/stu/users/32058183/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Handshake.com
              </a>
            </Navbar.Text>
            <span className="navbar-divider">|</span>
            <Navbar.Text style={{ color: "white", fontFamily: "Dosis" }}>
              Phone: (262) 646-0833
            </Navbar.Text>
            <span className="navbar-divider">|</span>
            <Navbar.Text style={{ color: "white", fontFamily: "Dosis" }}>
              Email: Lsimonen@wisc.edu
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>

        <h1 style={{ color: "white", fontFamily: "Dosis", textAlign: "center" }}>
          My Portfolio
        </h1>

        <div style={{ position: "absolute", top: "20px", left: "20px" }}>
          <Button
            onClick={handleBackClick}
            style={{
              border: "2px solid white",
              color: "white",
              backgroundColor: buttonColors.button,
              margin: "0.5rem",
              padding: "0.5rem",
              fontFamily: "Dosis",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Back to Home
          </Button>
        </div>

        <Container>
          <Row className="justify-content-center">
          <Col md={6} lg={6}>
              <ProjectCard
                title="Demo Video of KIKOFF"
                iframeSrc="https://www.youtube.com/embed/1OO3XmG2GDQ?si=4wPbvzy3ddFT0pMj"
                description="Here is a demo video of my team’s app, KIKOFF, narrated by one of our team members, Sarah. The app was designed to help people play sports with one another without the need to wait or pay for an intramural league. The core idea was to allow users to find and join sports games in a way similar to online video game matchmaking. This approach ensures a seamless and fair matchmaking experience for users playing sports that don’t require a referee, such as tennis, basketball, or spikeball.
The application was developed in React Native with Google Firebase as our database and API solution. My key responsibilities in the project included:
* Designing and implementing Firebase-powered backend functionalities to efficiently manage user data storage and retrieval.
* Building interactive chat functionalities, enabling real-time communication between users through Firebase API calls.
* Developing the user events page with seamless UI/UX integration in React Native, allowing users to create and view events and chats effortlessly."
                width="100%"
                height="300px"
              />
            </Col>
            <Col md={6} lg={6}>
              <ProjectCard
                title="Java Script Graphics Town Project"
                iframeSrc="https://lsimonen1.github.io/portfoliofile1/"
                description="This project for my Computer Graphics class allowed me to do some 3D modeling and animation using Three.js. I brought a small intersection to life by creating buildings, trees, and vehicles, all while incorporating animations to make it feel more realistic. I thought it was an incredibly rewarding experience that sharpened my skills in 3D design. If I were to revisit the project, I'd explore more online resources for object creation (I manually created all of the arrays for each face of each object which was very time consuming), which would free up time to experiment with exciting features like shaders and a more complex city structure. Overall, this project was a fantastic opportunity to grow creatively and technically."
                width="100%"
                height="300px"
              />
            </Col>
            <Col md={6} lg={6}>
              <ProjectCard
                title="React Personal Website"
                iframeSrc="/"
                description="This is a Website I using the React framework. I Integrated CSS and various design libraries (e.g. Bootstrap, Bootstrap Nav, Particle Effects, etc.) to enhance the visual appeal. I Deployed the website using a CI/CD pipeline with GitHub for continuous integration and delivery."
                width="100%"
                height="300px"
              />
            </Col>
            <Col md={6} lg={6}>
              <ProjectCard
                title="Fake Movie Poster"
                iframeSrc="https://lsimonen1.github.io/portfolioFile2/"
                description="This movie poster was crafted during my sophomore year as a showcase of my Photoshop skills. I combined various media from different sources to create a fictional western film. While the composition, layout, and effects are original, I sourced images of actors and money to enhance the design. The inspiration for this poster came from iconic movie posters like 'A Fistful of Dollars' and other modular designs."
                width="60%"
                height="450px"
              />
            </Col>
            <Col md={6} lg={6}>
              <h1
                style={{
                  color: "white",
                  fontFamily: "Dosis",
                  textAlign: "center",
                  paddingTop: "300px",
                }}
              >
                More to be added soon
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Portfolio;
