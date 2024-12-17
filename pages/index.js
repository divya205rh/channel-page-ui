import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import VideoCardDisplay from "../components/VideoCardDisplay";
import { Container, Row, Col } from "react-bootstrap"; // Import Container, Row, Col from react-bootstrap

export default function Home() {
  return (
    <>
      <Head>
        <title>Channel Page UI</title>
        <meta name="description" content="Responsive channel page with MUI and Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container fluid>
        {/* Header Section */}
        <Header />

        {/* Hero Section */}
        <HeroSection />

        {/* Profile Info Section */}
        <section className="my-5">
          <Row className="justify-content-center">
            <Col xs={12} sm={10} md={8}>
              <h3 className="text-center">Welcome to Our Channel</h3>
              <p className="text-center">
                Explore exciting content and videos here. Stay tuned for the latest updates and
                more exciting videos coming your way!
              </p>
            </Col>
          </Row>
        </section>

        {/* Featured Videos Section */}
        <section className="my-5">
          <VideoCardDisplay />
        </section>

        {/* Footer Section (Optional) */}
        <footer className="my-5">
          <Row className="justify-content-center">
            <Col xs={12} sm={10} md={8} className="text-center">
              <p>© 2024 Our Channel. All rights reserved.</p>
            </Col>
          </Row>
        </footer>
      </Container>
    </>
  );
}
