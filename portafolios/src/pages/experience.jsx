import React from 'react';
import Navbar from '../components/navbar';
import DotGrid from '../components/animations/dotgrid.jsx';
import SplitText from '../components/animations/splittext.jsx';

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

          {/* Experience timeline will go here */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">

              <div className="bg-neutral-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-l-4 border-green-400">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <h3 className="text-2xl font-bold">Software Engineer Internship</h3>
                  <span className="text-green-400 font-semibold">May 2025 - Currently</span>
            </div>
                <h4 className="text-lg text-gray-300 mb-3">Bansi S.A.</h4>
                <p className="text-gray-300">- Backend development for desktop applications using C#, applying structured and object-oriented programming principles.</p>
                <p className="text-gray-300">- Administration, maintenance, and design of databases in SQL Server and Informix, including creation and optimization of stored procedures for efficient data processing.</p>
                <p className="text-gray-300">- Implementation of cybersecurity best practices in processes and applications, ensuring data integrity and confidentiality.</p>
                <p className="text-gray-300">- Team coordination and collaboration through Agile methodologies, improving efficiency in project delivery.</p>
              </div>
              
              <div className="bg-neutral-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-l-4 border-green-400">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <h3 className="text-2xl font-bold">Inventory Control Leader</h3>
                  <span className="text-green-400 font-semibold">April 2020 - May 2025</span>
                </div>
                <h4 className="text-lg text-gray-300 mb-3">Jabil</h4>
                <p className="text-gray-300">- Conduct large-scale inventory analysis to ensure accuracy and efficiency in material traceability.</p>
                <p className="text-gray-300">- Designed and implemented applications and macros, significantly improving supply chain efficiency and cycle count procedures.</p>
                <p className="text-gray-300">- Advanced expertise in SAP for inventory control, including DII Projection, WIP DII, Aging, and Line Exception metrics.</p>
                <p className="text-gray-300">- Apply 4Qs methodology to identify, address, and prevent operational issues.</p>
                <p className="text-gray-300">- Supervise and lead a team, fostering a results-oriented work environment.</p>
              </div>

                <div className="bg-neutral-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-l-4 border-green-400">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <h3 className="text-2xl font-bold">Web Developer</h3>
                  <span className="text-green-400 font-semibold">Ago 2023 - May 2024</span>
                </div>
                <h4 className="text-lg text-gray-300 mb-3">Caritas GDL</h4>
                <p className="text-gray-300">- Designed, developed, and successfully launched a fully functional website to improve the organizations online presence and accessibility.</p>
                <p className="text-gray-300">- Utilized HTML, CSS, and JavaScript to create a responsive and user-friendly interface.</p>
                <p className="text-gray-300">- Implemented modern web design practices to enhance navigation and engagement for visitors.</p>
                <p className="text-gray-300">- Effectively coordinated with stakeholders to meet requirements and deliver a high-quality solution within the given timeframe.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;