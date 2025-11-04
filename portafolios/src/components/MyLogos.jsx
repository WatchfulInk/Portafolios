import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitText from './animations/splittext.jsx';

const MyLogos = ({ 
  imageSrc = '../assets/me.png', 
  badges = [],
  websiteUrl = null
}) => {
  const containerRef = useRef(null);
  const mobileBadgeRefs = useRef([]);
  const desktopBadgeRefs = useRef([]);

  useEffect(() => {
    // Limpiar animaciones previas
    gsap.killTweensOf([...mobileBadgeRefs.current, ...desktopBadgeRefs.current]);
    
    // Animación de las viñetas móviles
    mobileBadgeRefs.current.forEach((badge, index) => {
      if (badge) {
        // Reset inicial
        gsap.set(badge, { opacity: 0, scale: 0.8, y: -10 });
        
        // Animación de entrada
        gsap.to(badge, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.3,
          delay: 0.3 + (index * 0.1),
          ease: "back.out(1.7)"
        });

        // Animación de flotación
        gsap.to(badge, {
          y: -4,
          duration: 1.5 + (index * 0.2),
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
          delay: 0.6 + (index * 0.2)
        });
      }
    });

    // Animación de las viñetas desktop
    desktopBadgeRefs.current.forEach((badge, index) => {
      if (badge) {
        // Reset inicial
        gsap.set(badge, { opacity: 0, scale: 0.8, x: -20 });
        
        // Animación de entrada
        gsap.to(badge, {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.3,
          delay: 0.3 + (index * 0.1),
          ease: "back.out(1.7)"
        });

        // Animación de flotación
        gsap.to(badge, {
          y: -8,
          duration: 1.5 + (index * 0.2),
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
          delay: 0.6 + (index * 0.2)
        });
      }
    });

    // Animación de entrada de la imagen
    const imageElement = containerRef.current?.querySelector('.profile-image');
    if (imageElement) {
      gsap.fromTo(imageElement,
        {
          opacity: 0,
          scale: 0.5,
          rotation: -10
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          delay: 0.1,
          ease: "elastic.out(1, 0.8)"
        }
      );
    }

    // Cleanup function
    return () => {
      gsap.killTweensOf([...mobileBadgeRefs.current, ...desktopBadgeRefs.current]);
    };
  }, [badges]);

  return (
    <div 
      ref={containerRef}
      className="flex flex-col items-center justify-center w-48 sm:w-56 lg:w-64"
    >
      {/* Viñetas por encima en móviles */}
      <div className="flex flex-wrap justify-center gap-2 mb-4 lg:hidden">
        {badges.map((text, index) => (
          <div
            key={`mobile-${index}`}
            ref={el => {
              if (el) mobileBadgeRefs.current[index] = el;
            }}
            className="bg-green-400 text-black px-2 py-1 rounded-full font-bold text-xs shadow-lg cursor-pointer hover:bg-green-300 transition-colors duration-200"
            style={{ zIndex: 5 }}
          >
            <SplitText
              text={text}
              tag="span"
              className="inline-block"
              delay={300 + (index * 50)}
              duration={0.3}
              splitType="words"
              from={{ opacity: 0, y: 10 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0}
              ease="power2.out"
            />
          </div>
        ))}
      </div>

      {/* Contenedor de imagen con viñetas flotantes para desktop */}
      <div className="relative flex items-center justify-center">
        {websiteUrl ? (
          <a 
            href={websiteUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative block"
          >
            {/* Aro verde exterior */}
            <div className="absolute inset-0 rounded-full border-4 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-slow" 
                 style={{ padding: '4px' }}>
            </div>
            
            {/* Segundo aro verde */}
            <div className="absolute inset-0 rounded-full border-2 border-green-400/50 group-hover:border-green-400 transition-all duration-300" 
                 style={{ transform: 'scale(1.1)' }}>
            </div>
            
            <div 
              className="profile-image w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-2 sm:border-2 lg:border-3 border-green-400/30 group-hover:border-green-400 shadow-2xl transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(0,255,64,0.5)]"
              style={{
                background: '#ffffff'
              }}
            >
              <img 
                src={imageSrc}
                alt="Company Logo"
                className="w-full h-full object-contain p-4 sm:p-5 lg:p-6 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </a>
        ) : (
          <div 
            className="profile-image w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-2 sm:border-2 lg:border-3 border-green-400/30 shadow-2xl"
            style={{
              background: '#ffffff'
            }}
          >
            <img 
              src={imageSrc}
              alt="Company Logo"
              className="w-full h-full object-contain p-4 sm:p-5 lg:p-6"
            />
          </div>
        )}

        {/* Viñetas flotantes solo para desktop */}
        <div className="hidden lg:block">
          {badges.map((text, index) => (
            <div
              key={`desktop-${index}`}
              ref={el => {
                if (el) desktopBadgeRefs.current[index] = el;
              }}
              className={`absolute bg-green-400 text-black px-3 py-1.5 rounded-full font-bold text-xs shadow-lg cursor-pointer hover:bg-green-300 transition-colors duration-200 ${
                index === 0 ? 'top-0 -right-8' :
                index === 1 ? 'bottom-2 -left-10' :
                'top-24 -right-12'
              }`}
              style={{
                whiteSpace: 'nowrap',
                zIndex: 5
              }}
            >
              <SplitText
                text={text}
                tag="span"
                className="inline-block"
                delay={300 + (index * 50)}
                duration={0.3}
                splitType="words"
                from={{ opacity: 0, y: 10 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0}
                ease="power2.out"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyLogos;
