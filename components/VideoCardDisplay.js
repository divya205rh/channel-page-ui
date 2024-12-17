import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap"; // Import react-bootstrap components

export default function VideoCardDisplay() {
  const [videoData, setVideoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the public folder
    fetch("/videos.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch video data");
        }
        return response.json();
      })
      .then((data) => {
        setVideoData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading JSON:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <section style={{ padding: "40px 0", backgroundColor: "#f9f9f9" }}>
      <Container>
        <h3
          className="text-center"
          style={{ marginBottom: "40px", color: "black" }}
        >
          Featured Videos
        </h3>

        {/* Loading State */}
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
            <p>Loading videos...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <Alert variant="danger" className="text-center">
            {error}
          </Alert>
        )}

        {/* Video Cards */}
        {!loading && !error && (
          <Row>
            {videoData.map((video) => (
              <Col xs={12} sm={6} md={4} lg={3} key={video.id} className="mb-4">
                <Card
                  className="shadow-sm"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={video.image}
                    alt={video.title}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <Card.Body>
                    <Card.Title>{video.title}</Card.Title>
                    <Card.Text>{video.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
}
