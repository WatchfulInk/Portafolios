import React from 'react';
import Navbar from '../components/navbar';
import DotGrid from '../components/animations/dotgrid.jsx';
import SplitText from '../components/animations/splittext.jsx';
import MyPhoto from '../components/MyPhoto.jsx';
import MyLogos from '../components/MyLogos.jsx';
import meImage from '../assets/me.png';
import tecmilenioImage from '../assets/tecmilenio.png';
import { SiReact, SiTailwindcss, SiMysql, SiPython, SiDjango, SiGit, SiGithub, SiPostman, SiFigma, SiJavascript, SiHtml5, SiCss3, SiCplusplus, SiDatastax, SiBim, SiNetdata } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

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
          
          {/* Hero Section with Photo and Title */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              
              {/* Left Column - Photo, Title, Description and LinkedIn */}
              <div className="flex flex-col items-center text-center">
                {/* Photo */}
                <div className="mb-6">
                  <MyPhoto 
                    imageSrc={meImage}
                    badges={['Available to work']}
                  />
                </div>
                
                {/* Title and Description */}
                <div className="mb-6">
                  <SplitText
                    text={"Hey, I'm Alan"}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 font-opensans"
                    delay={20}
                    duration={0.8}
                    splitType='words'
                  />
                  <div className="text-base sm:text-lg lg:text-xl text-gray-300 mb-4">
                    <SplitText
                      text={"Fullstack Developer."}
                      className="inline-block"
                      delay={200}
                      duration={0.6}
                      splitType='words'
                    />
                  </div>
                </div>
                
                {/* LinkedIn Button */}
                <a 
                  href="https://www.linkedin.com/in/alanbella" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#060010] border-2 border-green-400 text-white rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 font-semibold shadow-lg hover:shadow-[0_0_20px_rgba(0,255,64,0.5)]"
                >
                  <FaLinkedin className="text-xl" />
                  LinkedIn
                </a>
              </div>

              {/* Right Column - Education and About Me Card */}
              <div className="flex flex-col gap-6">
                {/* Education Card */}
                <div className="bg-[#060010] border border-[#392e4e] rounded-[20px] p-6 shadow-2xl backdrop-blur-sm hover:shadow-[0_12px_35px_rgba(0,255,64,0.15)] transition-all duration-300 relative overflow-hidden">
                  {/* Tecmilenio Logo - Simplified version */}
                  <a 
                    href="https://tecmilenio.mx/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-green-400/30 hover:border-green-400 bg-white overflow-hidden group transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,64,0.5)]"
                  >
                    <img 
                      src={tecmilenioImage}
                      alt="Tecmilenio Logo"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                  
                  <div className="flex items-start gap-4 pr-20 sm:pr-24 lg:pr-28">
                    <div className="w-3 h-3 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-1">
                        Software Engineering
                      </h3>
                      <p className="text-base sm:text-lg text-white font-semibold mb-2">
                        Tecmilenio University
                      </p>
                      <p className="text-sm text-gray-400">
                        Ago 2022 - May 2026
                      </p>
                    </div>
                  </div>
                </div>

                {/* About Me Card */}
                <div className="bg-[#060010] border border-[#392e4e] rounded-[20px] p-6 lg:p-8 shadow-2xl backdrop-blur-sm hover:shadow-[0_12px_35px_rgba(0,255,64,0.15)] transition-all duration-300">
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-center">
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

          {/* Programming Languages Icons */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 text-gray-300">
              Technologies & Tools
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-6">
              {/* Icon Items */}
              <div className="flex flex-col items-center justify-center p-4 bg-[#060010] border border-[#392e4e] rounded-xl hover:border-green-400 hover:shadow-[0_0_20px_rgba(0,255,64,0.3)] transition-all duration-300 group">
                <SiReact className="text-4xl text-[#61DAFB] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs mt-2 text-gray-400">React</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-4 bg-[#060010] border border-[#392e4e] rounded-xl hover:border-green-400 hover:shadow-[0_0_20px_rgba(0,255,64,0.3)] transition-all duration-300 group">
                <SiPython className="text-4xl text-[#3776AB] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs mt-2 text-gray-400">Python</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-4 bg-[#060010] border border-[#392e4e] rounded-xl hover:border-green-400 hover:shadow-[0_0_20px_rgba(0,255,64,0.3)] transition-all duration-300 group">
                <SiJavascript className="text-4xl text-[#F7DF1E] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs mt-2 text-gray-400">JavaScript</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-4 bg-[#060010] border border-[#392e4e] rounded-xl hover:border-green-400 hover:shadow-[0_0_20px_rgba(0,255,64,0.3)] transition-all duration-300 group">
                <SiCplusplus className="text-4xl text-[#00599C] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs mt-2 text-gray-400">C#</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-4 bg-[#060010] border border-[#392e4e] rounded-xl hover:border-green-400 hover:shadow-[0_0_20px_rgba(0,255,64,0.3)] transition-all duration-300 group">
                <SiTailwindcss className="text-4xl text-[#06B6D4] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs mt-2 text-gray-400">Tailwind</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-4 bg-[#060010] border border-[#392e4e] rounded-xl hover:border-green-400 hover:shadow-[0_0_20px_rgba(0,255,64,0.3)] transition-all duration-300 group">
                <SiMysql className="text-4xl text-[#4479A1] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs mt-2 text-gray-400">MySQL</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-4 bg-[#060010] border border-[#392e4e] rounded-xl hover:border-green-400 hover:shadow-[0_0_20px_rgba(0,255,64,0.3)] transition-all duration-300 group">
                <SiDjango className="text-4xl text-[#092E20] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs mt-2 text-gray-400">Django</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-4 bg-[#060010] border border-[#392e4e] rounded-xl hover:border-green-400 hover:shadow-[0_0_20px_rgba(0,255,64,0.3)] transition-all duration-300 group">
                <SiGit className="text-4xl text-[#F05032] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs mt-2 text-gray-400">Git</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-4 bg-[#060010] border border-[#392e4e] rounded-xl hover:border-green-400 hover:shadow-[0_0_20px_rgba(0,255,64,0.3)] transition-all duration-300 group">
                <SiGithub className="text-4xl text-white group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs mt-2 text-gray-400">GitHub</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-4 bg-[#060010] border border-[#392e4e] rounded-xl hover:border-green-400 hover:shadow-[0_0_20px_rgba(0,255,64,0.3)] transition-all duration-300 group">
                <SiPostman className="text-4xl text-[#FF6C37] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs mt-2 text-gray-400">Postman</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-4 bg-[#060010] border border-[#392e4e] rounded-xl hover:border-green-400 hover:shadow-[0_0_20px_rgba(0,255,64,0.3)] transition-all duration-300 group">
                <SiFigma className="text-4xl text-[#F24E1E] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs mt-2 text-gray-400">Figma</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-4 bg-[#060010] border border-[#392e4e] rounded-xl hover:border-green-400 hover:shadow-[0_0_20px_rgba(0,255,64,0.3)] transition-all duration-300 group">
                <SiHtml5 className="text-4xl text-[#E34F26] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs mt-2 text-gray-400">HTML5</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-4 bg-[#060010] border border-[#392e4e] rounded-xl hover:border-green-400 hover:shadow-[0_0_20px_rgba(0,255,64,0.3)] transition-all duration-300 group">
                <SiCss3 className="text-4xl text-[#1572B6] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs mt-2 text-gray-400">CSS3</span>
              </div>
              
                <div className="flex flex-col items-center justify-center p-4 bg-[#060010] border border-[#392e4e] rounded-xl hover:border-green-400 hover:shadow-[0_0_20px_rgba(0,255,64,0.3)] transition-all duration-300 group">
                <SiNetdata className="text-4xl text-[#1572B6] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs mt-2 text-gray-400">Informix</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutMe;