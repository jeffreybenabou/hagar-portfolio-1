import React, { useState } from 'react';
import { WorkDetails } from './WorkDetails';
import { PortfolioButton } from './PortfolioButton';

export interface WorkInterface {
    title: string,
    iconPath: string,
    description: string,
    mainImagePath: string,
    figmaLink: string,
    designProcess: string,
    designProcessDescription?: string,
    screenshot?: string,
    realScreenShot?: string,
    personas: { name: string, age: string, education: string },
    colorPalette?: {
        explanation: string,
        colors: string[]
    },
    personaData?: {
        women: {
            name: string;
            info: Array<{ title: string; subtitle: string }>;
            goals: string[];
            painPoints: string[];
        };
        men: {
            name: string;
            info: Array<{ title: string; subtitle: string }>;
            goals: string[];
            sideGoals: string[];
        };
    }
}

export interface ImageInterface {
    src: string,
    tags: string[],
    name: string,
    workItem: WorkInterface
}

export const Content = () => {
  const [allImages] = useState<ImageInterface[]>([
    {
      src: './work1.png',
      tags: ['Task', 'Mobile App'],
      name: 'Effitask',
      workItem: {
        title: 'Mobile app',
        iconPath: './effitask.svg',
        realScreenShot: './public/effitask_real.png',
        description: 'EffiTask is a smart task management app that lets you create, share,<br/>and manage tasks effortlessly. It features customizable categories,<br/>built-in chat, task sharing with friends, image and description<br/>attachments, participant management, and deadline scheduling—all<br/>in one place for an efficient and seamless experience.',
        mainImagePath: './work1.png',
        figmaLink: 'https://figma.com/project-one',
        designProcess: 'Design process details for Project One',
        designProcessDescription: 'The app design process included in-depth research of the target audience to shape an intuitive and user-friendly UX experience, creating wireframes for the app structure, and planning a clear screen flow. Then, we developed a UI with a clean and modern design language.<br/>Finally, we conducted usability testing, improvements, and optimization to launch a professional and user-friendly app for task management and collaboration.',
        personas: { name: 'John Doe', age: '28', education: 'Bachelor\'s in Design' },
        colorPalette: {
          explanation: 'The design focuses on a monochromatic gray palette to create a clean, modern, and organized look. Carefully selected pink accents highlight important details, adding a sense of vibrancy and softness.\n\nThe combination of gray and pink achieves a perfect balance between simplicity and freshness, enhancing the user experience with an intuitive and pleasant interface.',
          colors: ['#F95D8C', '#2D2D2D', '#FBFBFB', '#FFFFFF', '#969696', '#E1E1E1', '#F3F3F3'],
        },
        personaData: {
          women: {
            name: 'Yael',
            info: [
              { title: 'Age:', subtitle: '28 years old' },
              { title: 'Education:', subtitle: 'Communication student' },
              {
                title: 'Background:',
                subtitle: 'Lives in a rented apartment in Tel Aviv. Balances studies, a part-time job at a café, and an active social life. She is familiar with task management apps but struggles to stick with them due to her busy schedule and lack of patience for complex interfaces.',
              },
            ],
            goals: [
              'Maintain a clear daily schedule without forgetting academic tasks or work shifts.',
              'Receive smart reminders that fit her dynamic lifestyle.',
              'Enjoy a simple interface that can be customized to her personal needs.',
            ],
            painPoints: [
              'Feeling overwhelmed due to task overload.',
              'Lack of synchronization between academic and work tasks.',
              'Impatience with cumbersome interfaces.',
            ],
          },
          men: {
            name: 'Yossi',
            info: [
              { title: 'Age:', subtitle: '38' },
              { title: 'Education:', subtitle: 'Digital marketing course' },
              {
                title: 'Background:',
                subtitle: 'A freelance digital marketer, married with two children, living in the Shfela region. Manages projects for multiple clients simultaneously and needs time management tools to maintain a balance between work and family. Prefers simple and efficient solutions.',
              },
            ],
            goals: [
              'Clearly prioritize tasks based on urgency and deadlines.',
              'Easily share tasks with clients when needed.',
              'Receive smart reminders for upcoming or urgent tasks.',
            ],
            sideGoals: [
              'Task overload leading to forgetting important details.',
              'Struggles to maintain order and prioritize tasks.',
              'Difficulty handling complex interfaces or unclear features.',
            ],
          },
        },
        screenshot: './public/effittask_wireframe.png',
      },
    },
    {
      src: './public/ocean.png',
      tags: ['discover', 'Mobile app'],
      name: 'OceanID',
      workItem: {
        title: 'Mobile Design',
        iconPath: '/path/to/icon2.png',
        description: 'Description for Project Two',
        mainImagePath: './public/mainImage2.png',
        figmaLink: 'https://figma.com/project-two',
        designProcess: 'Design process details for Project Two',
        personas: { name: 'Jane Smith', age: '32', education: 'Master\'s in UX Design' },
      },
    },
    {
      src: './public/work3.png',
      tags: ['E-commerce', 'Web Design'],
      name: 'ShopFlow',
      workItem: {
        title: 'E-commerce Website',
        iconPath: './shopflow.svg',
        description: 'A modern e-commerce platform with intuitive navigation and seamless checkout experience.',
        mainImagePath: './public/work3.png',
        figmaLink: 'https://figma.com/project-three',
        designProcess: 'Design process details for ShopFlow',
        personas: { name: 'Sarah Wilson', age: '35', education: 'MBA in Business' },
      },
    },
    {
      src: './public/work4.png',
      tags: ['Health', 'Mobile App'],
      name: 'MediTrack',
      workItem: {
        title: 'Healthcare App',
        iconPath: './meditrack.svg',
        description: 'Personal health tracking app for medication reminders and health monitoring.',
        mainImagePath: './public/work4.png',
        figmaLink: 'https://figma.com/project-four',
        designProcess: 'Design process details for MediTrack',
        personas: { name: 'Robert Chen', age: '42', education: 'Medical Background' },
      },
    },
  ]);

  const [showAllWorks, setShowAllWorks] = useState(false);
  const [selectedWork, setSelectedWork] = useState<ImageInterface>(null);

  // Show only first 2 items initially, or all items when showAllWorks is true
  const visibleImages = showAllWorks ? allImages : allImages.slice(0, 2);

  const handleToggleWorks = () => {
    setShowAllWorks(!showAllWorks);
  };

  return (
    <>
      {selectedWork && (
        <WorkDetails work={selectedWork.workItem} onClose={() => setSelectedWork(null)}/>
      )}
      <section
        id="portfolio"
        className="w-full sm:px-[150px] px-6 py-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-[65px] text-left">MY WORK</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedWork(image)}
              className="cursor-pointer group"
            >
              <div
                className="w-full h-auto transition-all duration-[10ms] ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] rounded-[30px] overflow-hidden bg-gray-300 aspect-[3/2]"
              >
                <img
                  src={image.src}
                  alt={image.name}
                  className="w-full h-full object-cover transition-transform duration-[100ms] ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] group-hover:scale-105"
                />
              </div>
              <div className="mt-2 text-[17px] font-normal text-black leading-normal font-inter">
                {image.tags.join(' ∙ ')}
              </div>
              <div
                className="mt-2 text-[32px] font-bold text-black leading-normal font-inter relative group-hover:scale-105 transition-transform duration-300 inline-block">
                {image.name}
                <div
                  className="absolute bottom-0 left-0 h-[2px] bg-black w-0 transition-all duration-300 ease-out group-hover:w-full"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Toggle works button - always visible */}
        <div className="flex justify-center mt-20 mb-[240px]">
          <PortfolioButton
            onClick={handleToggleWorks}
            className={'border-amber-950'}
            backgroundColor="transparent"
            textColor="#000000"
            borderColor="#EBEEF0"
            text={showAllWorks ? 'Hide works' : 'See all my works'}
          />
        </div>
      </section>
    </>
  );
};
