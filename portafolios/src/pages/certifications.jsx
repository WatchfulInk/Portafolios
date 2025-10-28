import React from 'react';
import Navbar from '../components/navbar';
import DotGrid from '../components/animations/dotgrid.jsx';

function Certifications() {
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-opensans">
              Certifications
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              TEXTO DE EJEMPLO :V
            </p>
          </div>

          {/* Certifications grid will go here */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-neutral-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl text-center">
                <div className="w-16 h-16 bg-green-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Certificación 1</h3>
                <p className="text-gray-300 mb-2">Institución</p>
                <span className="text-green-400 text-sm">2023</span>
              </div>
              
              <div className="bg-neutral-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl text-center">
                <div className="w-16 h-16 bg-green-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📜</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Certificación 2</h3>
                <p className="text-gray-300 mb-2">Institución</p>
                <span className="text-green-400 text-sm">2022</span>
              </div>
              
              <div className="bg-neutral-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl text-center">
                <div className="w-16 h-16 bg-green-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Certificación 3</h3>
                <p className="text-gray-300 mb-2">Institución</p>
                <span className="text-green-400 text-sm">2021</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;