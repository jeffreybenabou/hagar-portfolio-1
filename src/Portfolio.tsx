import { HomeSection } from './components/HomeSection';
import { Content, ImageInterface } from './components/Content';
import { Skills } from './components/Skills';
import { Footer } from './Footer';
import { Mouse } from './components/Mouse';
import React, { useState } from 'react';
import { WorkDetails } from './components/WorkDetails';
import { Header } from './components/Header';

const Portfolio = () => {
  const [selectedWork, setSelectedWork] = useState<ImageInterface | null>(null);

  const closeWorkDetails = () => {
    setSelectedWork(null);
  };

  return (
    <div>
      <Header onCloseWorkDetails={closeWorkDetails}/>
      <div className="min-h-screen flex flex-col">
        {selectedWork && (
          <WorkDetails work={selectedWork.workItem} onClose={closeWorkDetails}/>
        )}
        <div className="bg-[##D9D9D9]">
          <HomeSection/>
          <Mouse/>
          <Content selectedWork={selectedWork} setSelectedWork={setSelectedWork}/>
          <Skills/>
          <Footer/>
        </div>
      </div>
    </div>

  );
};

export default Portfolio;
