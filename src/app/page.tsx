'use client';
import React, {useEffect, useRef} from 'react';
import Landing from '../components/landing/Landing';
import Header from '../components/header/Header';
import About from '../components/about/About';
import Work from '../components/work/Work';
import Projects from '../components/projects/Projects';

export default function Home() {
  
  return (
    <div>
      <Header />
      <Landing />
      <div id="about"><About /></div>
      <div id="work"><Work /></div>
      <div id="my-projects"><Projects /></div>
    </div>
  )
  
}
