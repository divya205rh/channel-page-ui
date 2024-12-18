import React, { useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { CheckCircle } from "@mui/icons-material"; // MUI Check Circle for verification badge
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

export default function Header() {
  const [showMore, setShowMore] = useState(false);

  const handleToggleDescription = () => {
    setShowMore(!showMore);
  };

  const descriptionText =
    "Welcome to the official channel! Here you will find a classic concoction of method, skill, and madness. Stay tuned for exciting updates and content!";

  const cardStyle = {
    width: "100vw", // Full screen width
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "0", // No gap between sections
  };

  return (
    <header>
      {/* Header Card Section */}
      <div
        style={{
          backgroundImage: "url('/banner-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: "40px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card style={cardStyle}>
          <Row>
            <Col xs={12} md={4} className="d-flex flex-column align-items-start">
              <img
                src="images/profile.jpg" // Replace with your image path
                alt="Profile"
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  height: "auto",
                  objectFit: "cover",
                  marginBottom: "10px",
                }}
              />
              <h3 style={{ textAlign: "left", margin: "10px 0" }}>RAVICHANDRAN ASHWIN</h3>
            </Col>
            <Col xs={12} md={8}>
              <h5 style={{ textAlign: "left", marginBottom: "10px" }}>
                "I AM A CLASSIC CONCOCTION OF METHOD, SKILL AND MADNESS"
              </h5>
              <p>- RAVICHANDRAN ASHWIN</p>

              {/* Social Media Links */}
              <div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <Facebook style={{ marginRight: "10px" }} />
                  <span>facebook.com/RaviAshwin</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <Twitter style={{ marginRight: "10px" }} />
                  <span>twitter.com/RaviAshwin</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <Instagram style={{ marginRight: "10px" }} />
                  <span>instagram.com/RaviAshwin</span>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </div>

      {/* Creator Information Section */}
      <Card style={cardStyle}>
        <Row>
          {/* Profile Picture */}
          <Col xs={12} md={2} className="d-flex justify-content-center align-items-center">
            <img
              alt="Profile"
              src="images/profile1.jpg"
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "80px",
                objectFit: "cover",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Col>
          {/* Channel Name, Verification Badge, Subscriber Count */}
          <Col xs={12} md={7}>
            <h4 style={{ display: "flex", alignItems: "center", margin: 0 }}>
              RAVICHANDRAN ASHWIN
              <CheckCircle style={{ color: "#4285F4", marginLeft: "10px" }} />
            </h4>
            <p style={{ margin: "5px 0" }}>
              <strong>1.2M Subscribers</strong> • <strong>150 Videos</strong>
            </p>
            <div>
              {/* Description Text */}
              <p style={{ margin: "5px 0", maxHeight: showMore ? "none" : "50px", overflow: "hidden" }}>
                {descriptionText}
              </p>
              <Button
                variant="link"
                onClick={handleToggleDescription}
                style={{ padding: 0, textDecoration: "underline" }}
              >
                {showMore ? "Show Less" : "Show More"}
              </Button>
            </div>
          </Col>
        </Row>
        {/* Subscribe Button at Bottom */}
        <Row>
          <Col className="d-flex justify-content-center" style={{ marginTop: "20px" }}>
            <Button variant="danger" style={{ fontWeight: "bold", padding: "10px 20px" }}>
              SUBSCRIBE
            </Button>
          </Col>
        </Row>
      </Card>
    </header>
  );
}
