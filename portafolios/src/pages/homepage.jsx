import React from 'react';
import Navbar from '../components/navbar';
import DotGrid from './../components/animations/dotgrid.jsx';
import SplitText from '../components/animations/splittext.jsx';
import { LogoLoop } from '../components/animations/LogoLoop.jsx';
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
          dotSize={3}
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
      {/* Text of Introduction */}
      <div className="relative" style={{ zIndex: 10 }}>
        <Navbar />
        <div className="flex flex-col items-start justify-center text-center m-auto h-[45vh] sm:h-[50vh] md:h-[75vh] px-4 sm:px-8 md:px-16 lg:px-[10vh]">

          <SplitText
          text={"Alan Hernandez"}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 font-opensans"
          delay={15}
          duration={0.8}
          />  
          
          <SplitText
          text={"Software Development Engineer"}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-300 font-bold font-opensans"
          delay={15}
          duration={0.8}
          />  
        </div>
      </div>
      {/* Logos at the bottom */}
      <div className="absolute bottom-4 w-full flex items-center justify-center py-10">
        <LogoLoop
          logos={techLogos}
          speed={50}
          direction="right"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
        />
       </div>
    </div>
    
  );
}

export default Homepage;
