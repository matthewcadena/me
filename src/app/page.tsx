"use client";
import React, { useEffect, useRef } from "react";
import Landing from "../components/landing/Landing";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Work from "../components/work/Work";
import Projects from "../components/projects/Projects";
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div>
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
    </div>
  );
}
