import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap"; // Import necessary components from react-bootstrap

export default function HeroSection() {
  return (
    <section
      style={{
        background: "url('/hero-image.jpg') center center/cover", // Add a background image (make sure it's in the public folder)
        padding: "100px 0", // Increase the padding for better spacing
        color: "#fff", // Text color to white for contrast with dark background
        textAlign: "center",
      }}
    >
      <Container>
        <Row>
          <Col md={8} lg={6} className="d-flex flex-column justify-content-center">
            <h2>Welcome to Our Channel!</h2>
            <p>Explore exciting content and videos here.</p>
            <Button variant="primary" size="lg">
              Explore Now
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
