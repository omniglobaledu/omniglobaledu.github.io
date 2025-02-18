import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Destinations from '../components/Destinations';
import BlogSection from '../components/Blog/BlogSection';
import FAQ from '../components/FAQ';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import GalleryGrid from '../components/Gallery/GalleryGrid';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Destinations />
      <BlogSection  /> 
      <FAQ />
      <Partners />
      <GalleryGrid/>
      <Testimonials />
      <Contact />
    </>
  );
}