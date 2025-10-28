import React from 'react';
import Navbar from '../components/navbar';
import DotGrid from '../components/animations/dotgrid.jsx';

function Experience() {
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
              Experience
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              TEXTO DE EJEMPLO
            </p>
          </div>

          {/* Experience timeline will go here */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-neutral-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-l-4 border-green-400">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <h3 className="text-2xl font-bold">Puesto de Trabajo 1</h3>
                  <span className="text-green-400 font-semibold">2023 - Presente</span>
                </div>
                <h4 className="text-lg text-gray-300 mb-3">Empresa XYZ</h4>
                <p className="text-gray-300">Descripción de responsabilidades y logros...</p>
              </div>
              
              <div className="bg-neutral-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-l-4 border-green-400">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <h3 className="text-2xl font-bold">Puesto de Trabajo 2</h3>
                  <span className="text-green-400 font-semibold">2021 - 2023</span>
                </div>
                <h4 className="text-lg text-gray-300 mb-3">Empresa ABC</h4>
                <p className="text-gray-300">Descripción de responsabilidades y logros...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;