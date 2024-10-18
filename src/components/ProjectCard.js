import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";

function ProjectCard({ title, iframeSrc, description }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

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
    <>
      <Card
        style={{
          margin: "20px",
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "rgba(255, 255, 255, 0.15)"
        }}
      >
        <Card.Body>
          <div className="justify-content-center">
            <Card.Title style={{ color: "white", fontFamily: "Dosis", textAlign: "center" }}>{title}</Card.Title>
            <Button
              variant="primary"
              onClick={handleOpenModal}
              style={{
                border: "2px solid white",
                color: "white",
                backgroundColor: buttonColors.button,
                margin: "0.5rem",
                padding: "0.5rem",
                fontFamily: "Dosis",
              }}
              onMouseEnter={() => handleMouseEnter()}
              onMouseLeave={() => handleMouseLeave()}
            >
              Read More
            </Button>
          </div>
          <iframe
            src={iframeSrc}
            width="100%"
            height="300px"
            title={title}
            style={{ border: 'none', borderRadius: "10px" }}
          />
        </Card.Body>
      </Card>

      {/* Modal for displaying additional info */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{description}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}


export default ProjectCard;
