import React from 'react';
import Navbar from '../components/navbar';
import DotGrid from '../components/animations/dotgrid.jsx';
import SplitText from '../components/animations/splittext.jsx';

function Projects() {
  return (
    <div className="bg-[#0B0614] min-h-screen text-white relative overflow-hidden">
      {/* Background animation */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <DotGrid
          dotSize={2}
          gap={25}
          baseColor="#2E2E2E"   
          activeColor="#00FF40" 
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
        
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20 py-12">
          <div className="text-center mb-12">
            <SplitText
            text={"Projects"}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-gray-300 font-bold font-opensans leading-tight"
            delay={20}
            duration={0.8}
            splitType='words'
            />  
          </div>

          {/* Projects grid will go here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-neutral-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold mb-4">Proyecto 1</h3>
              <p className="text-gray-300">Descripción del proyecto...</p>
            </div>
            
            <div className="bg-neutral-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold mb-4">Proyecto 2</h3>
              <p className="text-gray-300">Descripción del proyecto...</p>
            </div>
            
            <div className="bg-neutral-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold mb-4">Proyecto 3</h3>
              <p className="text-gray-300">Descripción del proyecto...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;