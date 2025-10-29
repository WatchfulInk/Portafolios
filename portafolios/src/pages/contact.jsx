import React from 'react';
import Navbar from '../components/navbar';
import DotGrid from '../components/animations/dotgrid.jsx';
import SplitText from '../components/animations/splittext.jsx';

function Contact() {
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
            text={"Contact"}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-gray-300 font-bold font-opensans leading-tight"
            delay={20}
            duration={0.8}
            splitType='words'
            />  
          </div>

          {/* Contact content */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-neutral-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6 text-green-400">Información de Contacto</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                        <span className="text-black text-lg">📧</span>
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-gray-300">tu-email@ejemplo.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                        <span className="text-black text-lg">💼</span>
                      </div>
                      <div>
                        <p className="font-semibold">LinkedIn</p>
                        <p className="text-gray-300">linkedin.com/in/tu-perfil</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                        <span className="text-black text-lg">🐱</span>
                      </div>
                      <div>
                        <p className="font-semibold">GitHub</p>
                        <p className="text-gray-300">github.com/tu-usuario</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-neutral-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-green-400">Envíame un Mensaje</h3>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nombre</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:outline-none focus:border-green-400 transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:outline-none focus:border-green-400 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Mensaje</label>
                    <textarea 
                      rows="5"
                      className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:outline-none focus:border-green-400 transition-colors resize-none"
                      placeholder="Cuéntame sobre tu proyecto..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-green-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-green-300 transition-colors duration-300"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;