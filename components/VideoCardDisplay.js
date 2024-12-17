import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Spinner, Alert, Button } from "react-bootstrap"; // Import react-bootstrap components
import { PlayCircleFilled } from "@mui/icons-material"; // MUI play button icon

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
                    position: "relative",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    {/* Video Thumbnail */}
                    <Card.Img
                      variant="top"
                      src={video.image}
                      alt={video.title}
                      style={{
                        height: "200px",
                        objectFit: "cover",
                        position: "relative",
                      }}
                    />

                    {/* Play Duration Overlay */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        right: "10px",
                        background: "rgba(0, 0, 0, 0.5)",
                        color: "white",
                        padding: "5px 10px",
                        borderRadius: "20px",
                      }}
                    >
                      {video.duration} min
                    </div>

                    {/* Play Button Overlay */}
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "white",
                        fontSize: "40px",
                        cursor: "pointer",
                      }}
                    >
                      <PlayCircleFilled style={{ fontSize: "50px" }} />
                    </div>
                  </div>

                  <Card.Body>
                    <Card.Title>{video.title}</Card.Title>
                    <Card.Text>{video.description}</Card.Text>

                    {/* Video Metadata */}
                    <div style={{ fontSize: "14px", color: "#888" }}>
                      <p>{video.views} views | {video.date}</p>
                    </div>

                    {/* Subscribe Button */}
                    <Button variant="danger" className="w-100">
                      Subscribe
                    </Button>
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
