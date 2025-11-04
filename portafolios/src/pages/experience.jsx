import React from 'react';
import Navbar from '../components/navbar';
import DotGrid from '../components/animations/dotgrid.jsx';
import SplitText from '../components/animations/splittext.jsx';
import MyLogos from '../components/MyLogos.jsx';
import bansiLogo from '../assets/bansi.png';
import jabilLogo from '../assets/Jabil-Logo.png';
import caritasLogo from '../assets/caritas.jpg';

function Experience() {
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
            text={"Experience"}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-gray-300 font-bold font-opensans leading-tight"
            delay={20}
            duration={0.8}
            splitType='words'
            />  
          </div>

          {/* Experience Section */}
          <div className="max-w-6xl mx-auto space-y-16 lg:space-y-20">
            
            {/* Experience 1: Bansi */}
            <div className="relative w-full">
              <div className="bg-[#060010] border border-[#392e4e] rounded-[20px] p-6 lg:p-8 shadow-2xl backdrop-blur-sm hover:shadow-[0_12px_35px_rgba(0,255,64,0.15)] transition-all duration-300 min-h-[320px] lg:min-h-[350px]">
                
                {/* MyLogos sobresaliendo en esquina superior derecha */}
                <div className="absolute -top-10 -right-9 lg:-top-5 lg:-right-12 z-20 scale-75 lg:scale-100">
                  <MyLogos 
                    imageSrc={bansiLogo} 
                    badges={['C#', 'SQL Server', 'Informix']}
                    websiteUrl="https://www.bansi.com.mx"
                  />
                </div>

                {/* Contenido de la card */}
                <div className="pr-20 sm:pr-32 lg:pr-60">
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2">Software Engineer Internship</h3>
                    <h4 className="text-lg lg:text-xl xl:text-2xl text-green-400 font-semibold mb-2">Bansi S.A.</h4>
                    <span className="text-sm lg:text-base text-gray-400">May 2025 - Currently</span>
                  </div>
                  
                  <div className="space-y-3 text-gray-300 text-sm lg:text-base">
                    <p className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1 text-lg">•</span>
                      <span>Backend development for desktop applications using C#, applying structured and object-oriented programming principles.</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1 text-lg">•</span>
                      <span>Administration, maintenance, and design of databases in SQL Server and Informix, including creation and optimization of stored procedures.</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1 text-lg">•</span>
                      <span>Implementation of cybersecurity best practices in processes and applications, ensuring data integrity and confidentiality.</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1 text-lg">•</span>
                      <span>Team coordination and collaboration through Agile methodologies, improving efficiency in project delivery.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience 2: Jabil */}
            <div className="relative w-full">
              <div className="bg-[#060010] border border-[#392e4e] rounded-[20px] p-6 lg:p-8 shadow-2xl backdrop-blur-sm hover:shadow-[0_12px_35px_rgba(0,255,64,0.15)] transition-all duration-300 min-h-[360px] lg:min-h-[400px]">
                
                {/* MyLogos sobresaliendo en esquina superior derecha */}
                <div className="absolute -top-10 -right-9 lg:-top-5 lg:-right-12 z-20 scale-75 lg:scale-100">
                  <MyLogos 
                    imageSrc={jabilLogo} 
                    badges={['SAP ERP', 'Inventory Management', 'Logistics']}
                    websiteUrl="https://www.jabil.com"
                  />
                </div>

                {/* Contenido de la card */}
                <div className="pr-20 sm:pr-32 lg:pr-60">
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2">Inventory Control Leader</h3>
                    <h4 className="text-lg lg:text-xl xl:text-2xl text-green-400 font-semibold mb-2">Jabil</h4>
                    <span className="text-sm lg:text-base text-gray-400">April 2020 - May 2025</span>
                  </div>
                  
                  <div className="space-y-3 text-gray-300 text-sm lg:text-base">
                    <p className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1 text-lg">•</span>
                      <span>Conduct large-scale inventory analysis to ensure accuracy and efficiency in material traceability.</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1 text-lg">•</span>
                      <span>Designed and implemented applications and macros, significantly improving supply chain efficiency and cycle count procedures.</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1 text-lg">•</span>
                      <span>Advanced expertise in SAP for inventory control, including DII Projection, WIP DII, Aging, and Line Exception metrics.</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1 text-lg">•</span>
                      <span>Apply 4Qs methodology to identify, address, and prevent operational issues.</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1 text-lg">•</span>
                      <span>Supervise and lead a team, fostering a results-oriented work environment.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience 3: Caritas */}
            <div className="relative w-full">
              <div className="bg-[#060010] border border-[#392e4e] rounded-[20px] p-6 lg:p-8 shadow-2xl backdrop-blur-sm hover:shadow-[0_12px_35px_rgba(0,255,64,0.15)] transition-all duration-300 min-h-[320px] lg:min-h-[350px]">
                
                {/* MyLogos sobresaliendo en esquina superior derecha */}
                <div className="absolute -top-10 -right-9 lg:-top-5 lg:-right-12 z-20 scale-75 lg:scale-100">
                  <MyLogos 
                    imageSrc={caritasLogo} 
                    badges={['HTML', 'CSS', 'JavaScript']}
                    websiteUrl="https://caritasgdl1975.github.io/index.html"
                  />
                </div>

                {/* Contenido de la card */}
                <div className="pr-20 sm:pr-32 lg:pr-60">
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2">Web Developer</h3>
                    <h4 className="text-lg lg:text-xl xl:text-2xl text-green-400 font-semibold mb-2">Caritas GDL</h4>
                    <span className="text-sm lg:text-base text-gray-400">Ago 2023 - May 2024</span>
                  </div>
                  
                  <div className="space-y-3 text-gray-300 text-sm lg:text-base">
                    <p className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1 text-lg">•</span>
                      <span>Designed, developed, and successfully launched a fully functional website to improve the organization's online presence and accessibility.</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1 text-lg">•</span>
                      <span>Utilized HTML, CSS, and JavaScript to create a responsive and user-friendly interface.</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1 text-lg">•</span>
                      <span>Implemented modern web design practices to enhance navigation and engagement for visitors.</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1 text-lg">•</span>
                      <span>Effectively coordinated with stakeholders to meet requirements and deliver a high-quality solution within the given timeframe.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;