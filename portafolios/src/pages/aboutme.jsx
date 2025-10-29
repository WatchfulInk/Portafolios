import React from 'react';
import Navbar from '../components/navbar';
import DotGrid from '../components/animations/dotgrid.jsx';
import SplitText from '../components/animations/splittext.jsx';

function AboutMe() {
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
              text={"About Me"}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-opensans"
              delay={20}
              duration={0.8}
              splitType='words'
            />
          </div>

          {/* Content sections will go here */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-neutral-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a Software Engineering in my 7th semester, set to graduate in May 2026. 
                My academic journey is complemented by specialized training in Logistics Management,
                Big Data, and DevOps, strengthening my ability to merge software development with data 
                driven decision-making and streamlined operations.
                My objective is to find and seize opportunities to start my career,
                as I am eager to gain programming experience in a company and travel 
                the world in search of new opportunities and knowledge. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;