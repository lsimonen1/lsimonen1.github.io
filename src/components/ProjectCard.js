import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function ProjectCard({ title, iframeSrc, description, width, height }) {
  const [showModal, setShowModal] = useState(false);
  const [buttonColor, setButtonColor] = useState("transparent");

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      {/* Project Card */}
      <div
        style={{
          border: "2px solid white",
          borderRadius: "5px",
          padding: "1rem",
          marginBottom: "2rem",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          fontFamily: "'Silkscreen', cursive",
        }}
      >
        {/* Title */}
        <h2
          style={{
            fontSize: "clamp(1rem, 2vw, 1.5rem)",
            marginBottom: "1rem",
            borderBottom: "1px solid white",
            paddingBottom: "0.5rem",
          }}
        >
          {title}
        </h2>

        {/* Project Embed */}
        <div style={{ 
          display: "flex", 
          justifyContent: "center",
          marginBottom: "1rem"
        }}>
          <iframe
            src={iframeSrc}
            width={width}
            height={height}
            title={title}
            style={{ 
              border: '2px solid white',
              borderRadius: "5px"
            }}
          />
        </div>

        {/* Read More Button */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={handleOpenModal}
            style={{
              border: "2px solid white",
              color: "white",
              backgroundColor: buttonColor,
              padding: "0.5rem 1rem",
              fontFamily: "'Silkscreen', cursive",
              fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={() => setButtonColor("rgba(255, 255, 255, 0.2)")}
            onMouseLeave={() => setButtonColor("transparent")}
          >
            Read More
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal 
        show={showModal} 
        onHide={handleCloseModal} 
        centered
        contentStyle={{
          backgroundColor: "black",
          color: "white",
          border: "2px solid white",
          fontFamily: "'Silkscreen', cursive",
        }}
      >
        <Modal.Header closeButton style={{ borderBottom: "1px solid white" }}>
          <Modal.Title style={{ fontFamily: "'Silkscreen', cursive" }}>
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ whiteSpace: "pre-line" }}>{description}</div>
        </Modal.Body>
        <Modal.Footer style={{ borderTop: "1px solid white" }}>
          <button
            onClick={handleCloseModal}
            style={{
              border: "2px solid white",
              color: "white",
              backgroundColor: "transparent",
              padding: "0.25rem 0.75rem",
              fontFamily: "'Silkscreen', cursive",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCard;