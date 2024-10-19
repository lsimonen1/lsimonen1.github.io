import React, { useRef, useState } from "react";
import { Card, Col, Container, Row, Navbar, Button } from "react-bootstrap";
import { BackgroundFade } from "./BackgroundFade";
import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";
import ParticlesBackground from "./ParticlesBackground";

const MemoizedParticlesBackground = React.memo(ParticlesBackground);

function Portfolio() {
  const { backgroundStyle } = BackgroundFade();
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
    <div className="namePage" style={{ background: "black", padding: "20px", position: "relative" }}>
      {/* Particle Background */}
      <MemoizedParticlesBackground />

      <div style={{ position: "relative", zIndex: 2 }}>
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
                title="Java Script Graphics Town Project"
                iframeSrc="/portfolio/graphicsTown/for_students/final-grtown.html"
                description="This project for my Computer Graphics class allowed me to dive into 3D modeling and animation using Three.js. I brought a town to life by creating detailed buildings, trees, and various elements, all while incorporating realistic animations to make it feel vibrant and dynamic. It was an incredibly rewarding experience that sharpened my skills in 3D design. If I were to revisit the project, I'd explore more online resources for object creation (I manually created all of the arrays for each face of each object which was very time consuming), which would free up time to experiment with exciting features like shaders. Overall, this project was a fantastic opportunity to grow creatively and technically."
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
                iframeSrc="/portfolio/Stealinginthewest.html"
                description="This movie poster was crafted during my sophomore year as a showcase of my Photoshop skills. I combined various media from different sources to create a fictional western film. While the composition, layout, and effects are original, I sourced images of actors and money to enhance the design. The inspiration for this poster came from iconic movie posters like 'A Fistful of Dollars' and other modular designs, blending classic elements with my own flair."
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
