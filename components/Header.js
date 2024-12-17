import React from "react";
import { Navbar, Nav, Container, NavDropdown, Row, Col, Button } from "react-bootstrap"; // React Bootstrap components
import { Facebook, Twitter, Instagram } from "@mui/icons-material"; // MUI Social Icons
import { Avatar } from "@mui/material"; // MUI Avatar for profile image

export default function Header() {
  return (
    <header>
      {/* Header Section with Banner Image */}
      <div
        style={{
          backgroundImage: "url('/banner-image.jpg')",  // Replace with your banner image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "250px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", bottom: "20px", left: "20px" }}>
          {/* Profile Image and Channel Name */}
          <Avatar
            alt="Profile"
            src="/profile.jpg" // Replace with your profile image URL
            sx={{ width: 80, height: 80, border: "3px solid white" }}
          />
          <div style={{ marginTop: "10px" }}>
            <h3>Our Channel</h3>
            <p>Your channel tagline</p>
            <div>
              {/* Social Media Links */}
              <Button variant="link" style={{ color: "white" }}>
                <Facebook />
              </Button>
              <Button variant="link" style={{ color: "white" }}>
                <Twitter />
              </Button>
              <Button variant="link" style={{ color: "white" }}>
                <Instagram />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Our Channel</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
