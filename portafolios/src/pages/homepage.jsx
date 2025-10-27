import React from 'react';
import Navbar from '../components/navbar';
import DotGrid from './../components/animations/dotgrid.jsx';
import SplitText from '../components/animations/splittext.jsx';
import { LogoLoop } from '../components/animations/LogoLoop.jsx';
import MyPhoto from '../components/MyPhoto.jsx';
import meImage from '../assets/me.png';
import { SiReact, SiTailwindcss, SiMysql, SiPython, SiDjango, SiGit, SiGithub, SiPostman, SiFigma,  SiJavascript } from 'react-icons/si';

const techLogos = [

  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org/" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com/" },
  { node: <SiDjango />, title: "Django", href: "https://www.djangoproject.com/" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com/" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com/" },
  { node: <SiPostman />, title: "Postman", href: "https://www.postman.com/" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com/" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },

];

function Homepage() {
  return (
    <div className="bg-[#0B0614] min-h-screen text-white relative overflow-hidden">
      {/* background animation */}
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
      {/* Text of Introduction */}
      <div className="relative" style={{ zIndex: 10 }}>
        <Navbar />
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between text-center lg:text-left m-auto min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] lg:h-[75vh] px-4 sm:px-8 md:px-16 lg:px-[10vh] gap-6 lg:gap-8 py-4">
          
          {/* Contenido de texto */}
          <div className="flex flex-col items-center lg:items-start">
            <SplitText
            text={"Alan Hernandez"}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 lg:mb-4 font-opensans leading-tight"
            delay={15}
            duration={0.8}
            />  
            
            <SplitText
            text={"Software Development Engineer"}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-gray-300 font-bold font-opensans leading-tight"
            delay={15}
            duration={0.8}
            />  
          </div>

          {/* Componente MyPhoto - responsive para todas las pantallas */}
          <div className="flex justify-center lg:justify-end w-full lg:w-auto mt-6 lg:mt-0 lg:px-30">
            <MyPhoto 
              imageSrc={meImage}
              badges={[
                  "Efficient algorithms",
                  "Structured logic",
                  "Agile development"
              ]}
            />
          </div>
        </div>
      </div>
      {/* Logos at the bottom */}
      <div className="absolute bottom-2 sm:bottom-4 w-full flex items-center justify-center py-4 sm:py-6 lg:py-10">
        <LogoLoop
          logos={techLogos}
          speed={40}
          direction="right"
          logoHeight={32}
          gap={24}
          pauseOnHover
          scaleOnHover
          className="sm:scale-110 lg:scale-125"
        />
       </div>
    </div>
    
  );
}

export default Homepage;
