import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import VideoCardDisplay from "../components/VideoCardDisplay";
import { Container, Row, Col } from "react-bootstrap"; // Import Container from react-bootstrap

export default function Home() {
  return (
    <>
      <Head>
        <title>Channel Page UI</title>
        <meta name="description" content="Responsive channel page with MUI and Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        {/* Header Section */}
        <Header />

        {/* Hero Section */}
        <HeroSection />

        {/* Profile Info Section (Optional - If you want to display channel details like description) */}
        <section className="my-5">
          <Row className="justify-content-center">
            <Col xs={12} sm={10} md={8}>
              <h3>Welcome to Our Channel</h3>
              <p>
                Explore exciting content and videos here. Stay tuned for the latest updates and
                more exciting videos coming your way!
              </p>
            </Col>
          </Row>
        </section>

        {/* Featured Videos Section */}
        <VideoCardDisplay />
      </Container>
    </>
  );
}
