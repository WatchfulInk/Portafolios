import clsx from "clsx";
import React from "react";
import SplitText from "./animations/splittext";
import perfil from "../assets/perfil.png";

// Navigation links for the navbar
const navigation = [
  { name: 'Home', href: '/' , current: true },
  { name: 'About me', href: '/Aboutme', current: false },
  { name: 'Projects', href: '/Projects', current: false },
  { name: 'Knowledge', href: '/Knowledge', current: false },
  { name: 'Experience', href: '/Experience', current: false },
  { name: 'Certifications', href: '/Certifications', current: false },
  { name: 'Contact', href: '/Contact', current: false },
];

function Navbar() {
  return (
    <nav className="bg-neutral-800 p-3 sm:p-5 sticky top-0 z-50 shadow-lg backdrop-blur-sm bg-opacity-95">
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto px-2 sm:px-4 gap-3 sm:gap-0">
        
        {/* Logo/Perfil */}
        <div className="flex items-center group cursor-pointer">
          <img
            src={perfil}
            alt="Foto de perfil"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-lg border-2 sm:border-4 border-white transition-transform duration-300 group-hover:scale-110 group-hover:border-green-400"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap items-center justify-center gap-1 sm:space-x-1 font-opensans text-white font-bold text-xs sm:text-sm md:text-base">
          {navigation.map((item, index) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className={clsx(
                  "relative px-2 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 block overflow-hidden group",
                  {
                    'hover:text-green-400  hover:bg-opacity-30': item.current,
                    'hover:text-red-400  hover:bg-opacity-20': !item.current
                  }
                )}
              >
                {/* Underline effect */}
                <span className={clsx(
                  "absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300",
                  {
                    'bg-green-400 scale-x-0 group-hover:scale-x-100': item.current,
                    'bg-red-400 scale-x-0 group-hover:scale-x-100': !item.current
                  }
                )} />

                {/* Animated Text */}
                <SplitText
                  text={item.name}
                  tag="span"
                  className="inline-block relative z-10"
                  delay={40 + (index * 20)}
                  duration={0.6}
                  splitType="chars"
                  from={{ opacity: 0, y: 20, rotationX: -90 }}
                  to={{ opacity: 1, y: 0, rotationX: 0 }}
                  threshold={0}
                  rootMargin="0px"
                  ease="back.out(1.2)"

                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
