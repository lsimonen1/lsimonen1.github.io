import React, { useState } from "react";
import { Card, Container, Navbar, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ResumePage() {
  const navigate = useNavigate(); 

  const handleBackClick = () => {
    navigate("/"); 
  };

  const [buttonColors, setButtonColors] = useState({
    button: "transparent",
  });

  function handleMouseEnter() {
    setButtonColors((prevColors) => ({
      ...prevColors,
      button: "rgb(228, 238, 243, 0.5)", 
    }));
  }

  function handleMouseLeave() {
    setButtonColors((prevColors) => ({
      ...prevColors,
      button: "transparent", // Reset button color
    }));
  }

  return (
    <div style={{ background: "black", minHeight: "100vh", padding: "20px" }}>
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
        My Resume
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

      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <Card style={{ width: "80%", background: "rgba(255, 255, 255, 0.1)", color: "white" }}>
          <Card.Body>
            <iframe
              src="/portfolio/LUCAS_SIMONEN_RESUMECS_09242024.pdf" 
              title="Resume"
              style={{ width: "100%", height: "1200px", border: "none" }}
            ></iframe>
            
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default ResumePage;
