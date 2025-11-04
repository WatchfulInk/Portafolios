import React from 'react';
import Navbar from '../components/navbar';
import DotGrid from '../components/animations/dotgrid.jsx';
import SplitText from '../components/animations/splittext.jsx';
import MagicCard from '../components/animations/magiccard.jsx';

function Certifications() {
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
            text={"Certificates & Awards"}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-gray-300 font-bold font-opensans leading-tight"
            delay={20}
            duration={0.8}
            splitType='words'
            />  
          </div>
          <div className="text-center mb-12">
            <SplitText
            text={"TOP"}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-gray-300 font-bold font-opensans leading-tight"
            delay={20}
            duration={0.8}
            splitType='words'
            />  
          </div>

          {/* Certifications grid will go here */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <MagicCard
                icon="🏆"
                title="Logistics and supply chain"
                institution="Tecmilenio University"
                year="2025"
                enableStars={false}
                enableTilt={false}
                enableMagnetism={true}
                enableBorderGlow={false}
              />
              
              <MagicCard
                icon="📜"
                title="AWS Data Engineering"
                institution="AWS Academy / Tecmilenio University"
                year="2025"
                enableStars={false}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                glowColor="0, 255, 64"
                enableBorderGlow={false}
              />
              
              <MagicCard
                icon="🎓"
                title="DevOps"
                institution="Tecmilenio University"
                year="In Progress"
                enableStars={false}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                glowColor="0, 255, 64"
                enableBorderGlow={false}
              />
            </div>
          </div>

            <div className="text-center mb-12 py-12">
            <SplitText
            text={"ALL"}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-gray-300 font-bold font-opensans leading-tight"
            delay={20}
            duration={0.8}
            splitType='words'
            />  
            </div>
        
        {/* Certifications grid will go here */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <MagicCard
                icon="🏆"
                title="Certificación 1"
                institution="Institución"
                year="2023"
                enableStars={false}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                glowColor="0, 255, 64"
                enableBorderGlow={false}
              />
              
              <MagicCard
                icon="📜"
                title="Certificación 2"
                institution="Institución"
                year="2022"
                enableStars={false}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                glowColor="0, 255, 64"
                enableBorderGlow={false}
              />
              
              <MagicCard
                icon="🎓"
                title="Certificación 3"
                institution="Institución"
                year="2021"
                enableStars={false}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                glowColor="0, 255, 64"
                enableBorderGlow={false}
              />

              <MagicCard
                icon="🎓"
                title="Certificación 3"
                institution="Institución"
                year="2021"
                enableStars={false}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                glowColor="0, 255, 64"
                enableBorderGlow={false}
              />
              
              <MagicCard
                icon="🎓"
                title="Certificación 3"
                institution="Institución"
                year="2021"
                enableStars={false}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                glowColor="0, 255, 64"
                enableBorderGlow={false}
              />
              
              <MagicCard
                icon="🎓"
                title="Certificación 3"
                institution="Institución"
                year="2021"
                enableStars={false}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                glowColor="0, 255, 64"
                enableBorderGlow={false}
              />
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Certifications;