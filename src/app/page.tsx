'use client';
import React, {useEffect} from 'react';
import Landing from '../components/landing/Landing';
import Header from '../components/header/Header';
import About from '../components/about/About';
import Work from '../components/work/Work';

export default function Home() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])
  
  return (
    <>
      <Header />
      <Landing />
      <div id="about"><About /></div>
      <div id="work"><Work /></div>
      
    </>
  )
  
}
