import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import VideoCardDisplay from "../components/VideoCardDisplay";
import { Container } from "react-bootstrap"; // Import Container from react-bootstrap

export default function Home() {
  return (
    <>
      <Head>
        <title>Channel Page UI</title>
        <meta name="description" content="Responsive channel page with MUI and Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container> {/* Wrapping all content in a Container for consistent layout */}
        <Header />
        <HeroSection />
        <VideoCardDisplay />
      </Container>
    </>
  );
}
