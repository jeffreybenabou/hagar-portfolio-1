import { Header } from './components/Header';
import { HomeSection } from './components/HomeSection';
import { Content } from './components/Content';
import { Skills } from './components/Skills';
import { Footer } from './Footer';
import { Mouse } from './components/Mouse';
import React from 'react';

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <div className="bg-[##D9D9D9]">
        <HomeSection/>
        <Mouse/>
        <Content/>
        <Skills/>
        <Footer/>
      </div>
    </div>
  );
};

export default Portfolio;
