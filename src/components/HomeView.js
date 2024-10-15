
import React, { useRef, useState } from "react";
import { Card, Col, Container, Row, Navbar } from "react-bootstrap";
import About from "./About";
import { useBackgroundFade } from "./BackgroundFade";
import ParticlesBackground from './ParticlesBackground';


function HomeView() {
  const { backgroundStyle } = useBackgroundFade();
  const aboutMeRef = useRef(null);

  // Single state for button background colors
  const [buttonColors, setButtonColors] = useState({
    button1: "transparent",
    button2: "transparent",
    button3: "transparent",
  });

  // Single function to handle mouse enter and leave
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

  function goToPortfolio() {
    window.open("https://github.com/lsimonen1/portfolio");
  }

  function goToResume() {
    window.open(
      "https://drive.google.com/file/d/1lsfyvSJ0GRxEWMkKWiImgSGXHmt2ZNf5/view?usp=sharing"
    );
  }

  return (
    <useBackgroundFade>
      <div className="namePage" style={{}}>
        <div style={{ height: "100vh" }}>
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
                  onClick={goToPortfolio}
                >
                  Portfolio
                </Card>
              </Col>
              <Col>
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
                  onClick={goToResume}
                >
                  Resume
                </Card>
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
      </useBackgroundFade>
  );
}

export default HomeView;
