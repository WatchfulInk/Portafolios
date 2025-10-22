import React from 'react';
import Navbar from '../components/navbar';
import DotGrid from './../components/animations/dotgrid.jsx';
import SplitText from '../components/animations/splittext.jsx';

function Homepage() {
  return (
    <div className="bg-[#0B0614] min-h-screen text-white relative overflow-hidden">
      {/* background animation */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <DotGrid
          dotSize={6}
          gap={20}
          baseColor="#2E2E2E"   
          activeColor="#00FF40" 
          proximity={150}
          shockRadius={300}
          shockStrength={3}
          resistance={500}
          returnDuration={2.0}
          className="pointer-events-auto"
        />
      </div>

      <div className="relative" style={{ zIndex: 10 }}>
        <Navbar />
        <div className="flex flex-col items-start justify-center text-center m-auto h-[80vh] px-[20vh] ">

          <SplitText
          text={"Alan Hernandez"}
          className="text-6xl font-bold mb-4 font-opensans"
          delay={10}
          duration={0.8}
          />  
          
          <SplitText
          text={"Software Development Engineer"}
          className="text-5xl text-gray-300 font-bold font-opensans"
          delay={10}
          duration={0.8}
          />  
        </div>
      </div>
    </div>
  );
}

export default Homepage;
