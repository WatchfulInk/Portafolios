import React from 'react';
import Navbar from '../components/navbar';
import DotGrid from '../components/animations/dotgrid.jsx';
import SplitText from '../components/animations/splittext.jsx';
import { MagicBento } from '../components/animations/magicbento.jsx';

function Projects() {
  return (
    <div className="bg-[#0B0614] min-h-screen text-white relative overflow-hidden page-container">
      {/* Background animation */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <DotGrid
          dotSize={2}
          gap={25}
          baseColor="#2E2E2E"   
          activeColor="#9D7BED" 
          proximity={100}
          shockRadius={200}
          shockStrength={2}
          resistance={400}
          returnDuration={2.0}
          className="pointer-events-auto"
        />
      </div>

      {/* Content */}
      <div className="relative" style={{ zIndex: 10 }}>
        <Navbar />
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 max-w-full">
          <div className="text-center">
            <SplitText
            text={"Projects"}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-gray-300 font-bold font-opensans leading-tight"
            delay={20}
            duration={0.8}
            splitType='words'
            />  
          </div>

          {/* Projects grid */}
          <div className="flex justify-center w-full">
            <MagicBento 
              textAutoHide={true}
              enableStars={false}
              enableSpotlight={false}
              enableBorderGlow={false}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={false}
              spotlightRadius={false}
              particleCount={15}
              glowColor="0, 255, 64"
              projectsData={[
                {
                  title: 'Dogstal Page',
                  description: 'Page about pets training and care',
                  label: 'Website',
                  tech: ['React', 'JavaScript', 'Tailwind CSS'],
                  status: 'Progress',
                  link: 'https://github.com'
                },
                {
                  title: 'Macro Tools',
                  description: 'A set of tools for automating repetitive tasks in spreadsheets.',
                  label: 'Macro',
                  tech: ['Visual Basic', 'Excel', 'SAP'],
                  status: 'Completed',
                  link: 'https://github.com'
                },
                                {
                  title: 'CLASIFICADO',
                  description: '#%$%&$$%&',
                  label: '$%&/',
                  tech: ['#$%#'],
                  status: 'Progress',
                  link: 'https://github.com'
                },
                                {
                  title: 'CLASIFICADO',
                  description: '#%$%&$$%&',
                  label: '$%&/',
                  tech: ['#$%#'],
                  status: 'Progress',
                  link: 'https://github.com'
                },
                                {
                  title: 'CLASIFICADO',
                  description: '#%$%&$$%&',
                  label: '$%&/',
                  tech: ['#$%#'],
                  status: 'Progress',
                  link: 'https://github.com'
                },
                                {
                  title: 'CLASIFICADO',
                  description: '#%$%&$$%&',
                  label: '$%&/',
                  tech: ['#$%#'],
                  status: 'Progress',
                  link: 'https://github.com'
                }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;