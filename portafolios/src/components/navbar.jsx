import clsx from "clsx";
import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import SplitText from "./animations/splittext";
import perfil from "../assets/perfil.png";

// Navigation links for the navbar
const navigation = [
  { name: 'Home', href: '/' , current: true },
  { name: 'About me', href: '/Aboutme', current: true },
  { name: 'Projects', href: '/Projects', current: false },
  { name: 'Knowledge', href: '/Knowledge', current: true },
  { name: 'Experience', href: '/Experience', current: true },
  { name: 'Certifications', href: '/Certifications', current: true },
  { name: 'Contact', href: '/Contact', current: true },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animación del menú móvil con GSAP
  useEffect(() => {
    const menuItems = document.querySelectorAll('.mobile-menu-item');
    
    if (isMenuOpen) {
      gsap.fromTo('.mobile-menu', 
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
      
      gsap.fromTo(menuItems,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, delay: 0.1, ease: "back.out(1.7)" }
      );
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-neutral-800 p-3 sm:p-5 sticky top-0 z-50 shadow-lg backdrop-blur-sm bg-opacity-95">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-2 sm:px-4">
        
        {/* Logo/Perfil */}
        <div className="flex items-center group cursor-pointer">
          <img
            src={perfil}
            alt="Foto de perfil"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-lg border-2 sm:border-4 border-white transition-transform duration-300 group-hover:scale-110 group-hover:border-green-400"
          />
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-1 font-opensans text-white font-bold">
          {navigation.map((item, index) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className={clsx(
                  "relative px-4 py-2 rounded-lg transition-all duration-300 block overflow-hidden group",
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

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none group"
          aria-label="Toggle menu"
        >
          <span className={clsx(
            "w-6 h-0.5 bg-white transition-all duration-300 transform origin-center",
            isMenuOpen ? "rotate-45 translate-y-1" : ""
          )}></span>
          <span className={clsx(
            "w-6 h-0.5 bg-white transition-all duration-300",
            isMenuOpen ? "opacity-0" : ""
          )}></span>
          <span className={clsx(
            "w-6 h-0.5 bg-white transition-all duration-300 transform origin-center",
            isMenuOpen ? "-rotate-45 -translate-y-1" : ""
          )}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="mobile-menu md:hidden mt-4 pb-4">
          <ul className="flex flex-col space-y-2 font-opensans text-white font-bold">
            {navigation.map((item, index) => (
              <li key={item.name} className="mobile-menu-item">
                <a 
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={clsx(
                    "block px-4 py-3 rounded-lg transition-all duration-300 hover:bg-green-600 hover:text-white hover:bg-opacity-10",
                    {
                      'text-green-500 bg-neutral-700 bg-opacity-10': item.current,
                      'hover:text-red-400 hover:bg-red-500 bg-rose-700': !item.current
                    }
                  )}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
