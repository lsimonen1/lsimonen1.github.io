import React from "react";
import ParticlesBackground from "./ParticlesBackground";
import { Link } from "react-router-dom";
function Contact() {
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
      
      {/* Main content container with border (matches home page) */}
      <div
        style={{
          position: "relative",
          height: "calc(100vh - 6rem)",
          width: "calc(100vw - 6rem)",
          margin: "3rem",
          border: "0.3rem solid white",
          padding: "0rem",
          boxSizing: "border-box",
        }}
      >
        {/* Title and Links Container */}
        <div style={{
          position: "sticky", // Sticks to top when scrolling
          top: 0,
          backgroundColor: "black",
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

        {/* Contact Content */}
        <div
          style={{
            color: "white",
            fontFamily: "'Silkscreen', cursive",
            fontSize: "clamp(0.8rem, 1.5vw, 1.2rem)",
            maxWidth: "600px",
            marginLeft: "1rem",
            borderTop: "1px solid white",
            paddingTop: "1rem",
          }}
        >
          <div style={{ marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: "clamp(1.2rem, 2vw, 1.8rem)" }}>Get in Touch</h2>
            <p>Feel free to reach out for opportunities or collaborations!</p>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "clamp(1rem, 1.8vw, 1.5rem)" }}>Email</h3>
            <a 
              href="mailto:lucasimonen@gmail.com" 
              style={{ 
                color: "#00aaff",
                textDecoration: "none",
                ':hover': {
                  textDecoration: "underline"
                }
              }}
            >
              lucasimonen@gmail.com
            </a>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "clamp(1rem, 1.8vw, 1.5rem)" }}>Phone</h3>
            <p>(262) 646-0833</p>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "clamp(1rem, 1.8vw, 1.5rem)" }}>LinkedIn</h3>
            <a 
              href="https://www.linkedin.com/in/lucas-simonen-912801261/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: "#00aaff",
                textDecoration: "none",
                ':hover': {
                  textDecoration: "underline"
                }
              }}
            >
              linkedin.com/in/lucas-simonen-912801261/
            </a>
          </div>

          <div>
            <h3 style={{ fontSize: "clamp(1rem, 1.8vw, 1.5rem)" }}>Handshake</h3>
            <a 
              href="https://wisc.joinhandshake.com/profiles/sgn6sw" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: "#00aaff",
                textDecoration: "none",
                ':hover': {
                  textDecoration: "underline"
                }
              }}
            >
              wisc.joinhandshake.com/profiles/sgn6sw
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;