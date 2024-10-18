import React, { useRef, useState } from "react";
import { Card, Col, Container, Row, Navbar, Button } from "react-bootstrap";
import { BackgroundFade } from "./BackgroundFade";
import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";

function Portfolio() {
  const { backgroundStyle } = BackgroundFade();
  const aboutMeRef = useRef(null);

  const navigate = useNavigate(); // Initialize the navigate hook

  const handleBackClick = () => {
    navigate("/"); // This will take the user back to the homepage ("/")
  };

  const [buttonColors, setButtonColors] = useState({
    button: "transparent",
  });

  function handleMouseEnter() {
    setButtonColors((prevColors) => ({
      ...prevColors,
      button: "rgb(228, 238, 243, 0.5)", // Update button color
    }));
  }

  // Handle mouse leave
  function handleMouseLeave() {
    setButtonColors((prevColors) => ({
      ...prevColors,
      button: "transparent", // Reset button color
    }));
  }

  return (
    <div className="namePage" style={{ background: "black", padding: "20px" }}>
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
        <Button onClick={handleBackClick} style={{
                border: "2px solid white",
                color: "white",
                backgroundColor: buttonColors.button,
                margin: "0.5rem",
                padding: "0.5rem",
                fontFamily: "Dosis",
              }}
              onMouseEnter={() => handleMouseEnter()}
              onMouseLeave={() => handleMouseLeave()}>
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
            />
          </Col>
          <Col md={6} lg={6}>
          <ProjectCard
              title="Java Script Graphics Town Project"
              iframeSrc="/portfolio/graphicsTown/for_students/final-grtown.html"
              description="Details about another exciting project involving web development and design."
            />
          </Col>
          <Col md={6} lg={6}>
          <ProjectCard
              title="Java Script Graphics Town Project"
              iframeSrc="/portfolio/graphicsTown/for_students/final-grtown.html"
              description="Details about another exciting project involving web development and design."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
