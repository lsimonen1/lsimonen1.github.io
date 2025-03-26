import React from "react";
import ParticlesBackground from "./ParticlesBackground";
import { Link } from "react-router-dom";
function ResumePage() {
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
          overflow: "auto", // Allows scrolling for portfolio content
        }}
      >
        {/* Title and Links Container (same as home) */}
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
        color: "white",
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
        color: "#00aaff",
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

        {/* Resume Container */}
        <div
          style={{
            position: "absolute",
            top: "12rem", // Adjusted to account for header
            right: "2rem",
            width: "60%",
            height: "calc(100% - 14rem)",
            border: "2px solid white",
            borderRadius: "5px",
            overflow: "hidden",
          }}
          className="resume-container"
        >
          <iframe
            src="https://lsimonen1.github.io/resumeFile/"
            title="Resume"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              // Disable browser controls
              scrolling: "no",
              margin: "0",
              padding: "0",
              // Disable zoom/scale controls
              sandbox: "allow-scripts allow-same-origin",
              // Disable text selection
              userSelect: "none",
              // Disable iframe scrollbars
              overflow: "hidden",
            }}
          />
        </div>

        {/* Responsive CSS */}
        <style>{`
          /* Mobile styles */
          @media (max-width: 768px) {
            .contentContainer {
              overflow: auto;
            }
            .resume-container {
              position: relative !important;
              width: calc(100% - 2rem) !important;
              height: 70vh !important;
              top: auto !important;
              right: auto !important;
              margin: 1rem !important;
            }
            iframe {
              -webkit-overflow-scrolling: touch;
            }
          }
          
          /* Disable scrollbars globally */
          ::-webkit-scrollbar {
            display: none;
          }
          body {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
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

export default ResumePage;