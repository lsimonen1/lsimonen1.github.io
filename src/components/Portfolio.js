import React from "react";
import ProjectCard from "./ProjectCard";
import ParticlesBackground from "./ParticlesBackground";
import { Link } from "react-router-dom";
function Portfolio() {
  return (
    <div
      className="namePage"
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "flex-start",
        padding: "0",
        margin: "0",
        overflow: "hidden",
      }}
    >
      <ParticlesBackground />
      
      {/* Main content container with border */}
      <div
        className="contentContainer"
        style={{
          position: "relative",
          height: "calc(100vh - 6rem)",
          width: "calc(100vw - 6rem)",
          margin: "3rem",
          border: "0.3rem solid white",
          padding: "0rem",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Title and Links Container */}
        <div style={{
          position: "sticky", // Sticks to top when scrolling
          top: 0,
          zIndex: 2,
          padding: "1rem",
          paddingLeft: "0rem",
        }}>
          <h1
            className="titleName"
            style={{
              color: "white",
              paddingLeft: "0.5rem",
              fontSize: "clamp(2rem, 5vw, 5rem)",
              fontWeight: "300",
              fontFamily: "'Silkscreen', cursive",
              margin: "0",
              marginBottom: "0rem",
            }}
          >
            Lucas Simonen
          </h1>

          <nav className="navLinks"
  style={{
    display: "flex",
    flexDirection: "column",
  }}>
    <Link
      to="/"
      style={{
        color: "white",
        fontSize: "clamp(1rem, 3vw, 1.5rem)",
        fontFamily: "'Silkscreen', cursive",
        textDecoration: "none",
        padding: "0.5rem",
        paddingLeft: "1rem",
        paddingBottom: "0rem",
        paddingTop: "0rem",
        transition: "all 0.3s ease",
        ':hover': {
          color: "#ff5500",
          fontSize: "clamp(1.1rem, 3.3vw, 1.65rem)",
          textShadow: "0 0 8px rgba(255,85,0,0.5)"
        }
      }}
    >
      Home
    </Link>
    <Link
      to="/portfolio"
      style={{
        color: "#00aaff",
        fontSize: "clamp(1.1rem, 3.3vw, 1.65rem)",
        fontFamily: "'Silkscreen', cursive",
        textDecoration: "none",
        padding: "0.5rem",
        paddingLeft: "1rem",
        paddingBottom: "0rem",
        paddingTop: "0rem",
        textShadow: "0 0 8px rgba(0,170,255,0.5)"
      }}
    >
      Projects
    </Link>
    <Link
      to="/resume"
      style={{
        color: "white",
        fontSize: "clamp(1rem, 3vw, 1.5rem)",
        fontFamily: "'Silkscreen', cursive",
        textDecoration: "none",
        padding: "0.5rem",
        paddingLeft: "1rem",
        paddingBottom: "0rem",
        paddingTop: "0rem",
        transition: "all 0.3s ease",
        ':hover': {
          color: "#00ffaa",
          fontSize: "clamp(1.1rem, 3.3vw, 1.65rem)",
          textShadow: "0 0 8px rgba(0,255,170,0.5)"
        }
      }}
    >
      Resume
    </Link>
    <Link
      to="/contact"
      style={{
        color: "white",
        fontSize: "clamp(1rem, 3vw, 1.5rem)",
        fontFamily: "'Silkscreen', cursive",
        textDecoration: "none",
        padding: "0.5rem",
        paddingLeft: "1rem",
        paddingBottom: "0rem",
        paddingTop: "0rem",
        transition: "all 0.3s ease",
        ':hover': {
          color: "#ff00aa",
          fontSize: "clamp(1.1rem, 3.3vw, 1.65rem)",
          textShadow: "0 0 8px rgba(255,0,170,0.5)"
        }
      }}
    >
      Contact
    </Link>
  </nav>
        </div>

        {/* Scrollable Content Area */}
        <div style={{
          flex: 1,
          overflow: "auto",
          padding: "0 2rem 2rem 2rem",
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            paddingTop: "1rem",
          }}>
            <ProjectCard
              title="Demo Video of KIKOFF"
              iframeSrc="https://www.youtube.com/embed/1OO3XmG2GDQ?si=4wPbvzy3ddFT0pMj"
              description="Here is a demo video of my team’s app, KIKOFF, narrated by one of our team members, Sarah. The app was designed to help people play sports with one another without the need to wait or pay for an intramural league. The core idea was to allow users to find and join sports games in a way similar to online video game matchmaking. This approach ensures a seamless and fair matchmaking experience for users playing sports that don’t require a referee, such as tennis, basketball, or spikeball. The application was developed in React Native with Google Firebase as our database and API solution. My key responsibilities in the project included: * Designing and implementing Firebase-powered backend functionalities to efficiently manage user data storage and retrieval. * Building interactive chat functionalities, enabling real-time communication between users through Firebase API calls. * Developing the user events page with seamless UI/UX integration in React Native, allowing users to create and view events and chats effortlessly."
              width="100%"
              height="300px"
            />
            
            <ProjectCard
              title="Java Script Graphics Town Project"
              iframeSrc="https://lsimonen1.github.io/portfoliofile1/"
              description="This project for my Computer Graphics class allowed me to do some 3D modeling and animation using Three.js. I brought a small intersection to life by creating buildings, trees, and vehicles, all while incorporating animations to make it feel more realistic. I thought it was an incredibly rewarding experience that sharpened my skills in 3D design. If I were to revisit the project, I'd explore more online resources for object creation (I manually created all of the arrays for each face of each object which was very time consuming), which would free up time to experiment with exciting features like shaders and a more complex city structure. Overall, this project was a fantastic opportunity to grow creatively and technically."
              width="100%"
              height="300px"
            />
            
            <ProjectCard
              title="React Personal Website"
              iframeSrc="/"
              description="This is a Website I using the React framework. I Integrated CSS and various design libraries (e.g. Bootstrap, Bootstrap Nav, Particle Effects, etc.) to enhance the visual appeal. I Deployed the website using a CI/CD pipeline with GitHub for continuous integration and delivery."
              width="100%"
              height="300px"
            />
            
            <ProjectCard
              title="Fake Movie Poster"
              iframeSrc="https://lsimonen1.github.io/portfolioFile2/"
              description="This movie poster was crafted during my sophomore year as a showcase of my Photoshop skills. I combined various media from different sources to create a fictional western film. While the composition, layout, and effects are original, I sourced images of actors and money to enhance the design. The inspiration for this poster came from iconic movie posters like 'A Fistful of Dollars' and other modular designs."
              width="100%"
              height="450px"
            />
            
            <div style={{ 
              gridColumn: "1 / -1",
              textAlign: "center",
              padding: "2rem"
            }}>
              <h1 style={{
                color: "white",
                fontFamily: "'Silkscreen', cursive",
              }}>
                More to be added soon
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Shared styles
const navLinkStyle = {
  color: "white",
  fontSize: "clamp(1rem, 3vw, 1.5rem)",
  fontFamily: "'Silkscreen', cursive",
  textDecoration: "none",
  padding: "0.5rem",
  paddingLeft: "1rem",
  transition: "all 0.3s ease",
  ':hover': {
    color: "#ff5500",
    fontSize: "clamp(1.1rem, 3.3vw, 1.65rem)",
    textShadow: "0 0 8px rgba(255,85,0,0.5)"
  }
};

export default Portfolio;