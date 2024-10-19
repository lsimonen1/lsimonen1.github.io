import React, { useRef, useState, useMemo } from "react";
import { Card, Col, Container, Row, Navbar } from "react-bootstrap";
import About from "./About";
import { BackgroundFade } from "./BackgroundFade";
import ParticlesBackground from './ParticlesBackground';
import { Link } from "react-router-dom";

const MemoizedParticlesBackground = React.memo(ParticlesBackground);

function HomeView() {
  const { backgroundStyle } = BackgroundFade();
  const aboutMeRef = useRef(null);

  const [buttonColors, setButtonColors] = useState({
    button1: "transparent",
    button2: "transparent",
    button3: "transparent",
  });

  function handleMouseEnter(button) {
    setButtonColors((prevColors) => ({
      ...prevColors,
      [button]: "rgb(228, 238, 243, 0.5)",
    }));
  }

  function handleMouseLeave(button) {
    setButtonColors((prevColors) => ({
      ...prevColors,
      [button]: "transparent",
    }));
  }

  return (
    <div className="namePage" style={{ background: "black", position: "relative" }}>
      <MemoizedParticlesBackground />
      
      <div style={{ height: "100vh", position: "relative", zIndex: 1 }}>
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
          <h1 className="titleName" style={{ fontFamily: "Dosis" }}>
            Lucas Simonen
          </h1>
          <div className="majorName" style={{ padding: 0, margin: 0 }}>
            <p style={{ padding: 0, margin: 0, fontFamily: "Dosis" }}>
              Computer Science Undergraduate at UW Madison
            </p>
          </div>
          <div style={{ padding: "1rem" }}></div>
          <Container fluid style={{ width: "50vw" }}>
            <Row
              style={{
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
              }}
              xs={1}
              md={3}
            >
              <Col>
              <Link to="/portfolio"
              style={{ textDecoration: "none" }}>
                <Card
                  style={{
                    border: "2px solid white",
                    color: "white",
                    backgroundColor: buttonColors.button1,
                    margin: "0.5rem",
                    padding: "0.5rem",
                    fontFamily: "Dosis",
                  }}
                  onMouseEnter={() => handleMouseEnter("button1")}
                  onMouseLeave={() => handleMouseLeave("button1")}
                >
                  Portfolio
                </Card>
                </Link>
              </Col>
              <Col>
              <Link to="/resume"
              style={{ textDecoration: "none" }}>
                <Card
                  style={{
                    border: "2px solid white",
                    color: "white",
                    backgroundColor: buttonColors.button2,
                    margin: "0.5rem",
                    padding: "0.5rem",
                    fontFamily: "Dosis",
                  }}
                  onMouseEnter={() => handleMouseEnter("button2")}
                  onMouseLeave={() => handleMouseLeave("button2")}
                >
                  Resume
                </Card>
                </Link>
              </Col>
              <Col>
                <Card
                  style={{
                    border: "2px solid white",
                    color: "white",
                    backgroundColor: buttonColors.button3,
                    margin: "0.5rem",
                    padding: "0.5rem",
                    fontFamily: "Dosis",
                  }}
                  onMouseEnter={() => handleMouseEnter("button3")}
                  onMouseLeave={() => handleMouseLeave("button3")}
                  onClick={() =>
                    window.scrollTo({
                      top: aboutMeRef.current.offsetTop,
                      behavior: "smooth",
                    })
                  }
                >
                  About Me
                </Card>
              </Col>
            </Row>
          </Container>


      </div>
      
      <Container ref={aboutMeRef} fluid style={{ width: "80vw" }}>
        <About />
      </Container>
    </div>
  );
}

export default React.memo(HomeView);