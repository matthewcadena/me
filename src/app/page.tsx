"use client";
import React, { useEffect, useState } from "react";
import Landing from "../components/landing/Landing";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Work from "../components/work/Work";
import Projects from "../components/projects/Projects";
import Footer from "../components/footer/Footer";
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Header />
      <Landing />
      <div id="about">
        <About />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="my-projects">
        <Projects />
      </div>
      <Footer />
    </>
  );
}
