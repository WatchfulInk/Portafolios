import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitText from './animations/splittext.jsx';

const MyPhoto = ({ 
  imageSrc = "/src/assets/perfil.png", 
  badges = []
}) => {
  const containerRef = useRef(null);
  const badgeRefs = useRef([]);

  useEffect(() => {
    // Animación de las viñetas verdes con GSAP
    badgeRefs.current.forEach((badge, index) => {
      if (badge) {
        // Animación de flotación suave
        gsap.to(badge, {
          y: -8,
          duration: 2 + (index * 0.3),
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
          delay: index * 0.5
        });

        // Animación de entrada inicial
        gsap.fromTo(badge, 
          { 
            opacity: 0, 
            scale: 0.8, 
            x: -20 
          },
          { 
            opacity: 1, 
            scale: 1, 
            x: 0, 
            duration: 0.6, 
            delay: 1.2 + (index * 0.2),
            ease: "back.out(1.7)" 
          }
        );
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
          duration: 1.2,
          delay: 0.5,
          ease: "elastic.out(1, 0.8)"
        }
      );
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="flex flex-col items-center justify-center w-64 sm:w-80 lg:w-96"
    >
      {/* Viñetas por encima en móviles */}
      <div className="flex flex-wrap justify-center gap-2 mb-4 lg:hidden">
        {badges.map((text, index) => (
          <div
            key={`mobile-${index}`}
            ref={el => badgeRefs.current[index] = el}
            className="bg-green-400 text-black px-2 py-1 rounded-full font-bold text-xs shadow-lg cursor-pointer hover:bg-green-300 transition-colors duration-200"
            style={{ zIndex: 5 }}
          >
            <SplitText
              text={text}
              tag="span"
              className="inline-block"
              delay={2000 + (index * 100)}
              duration={0.4}
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
        <div 
          className="profile-image w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 sm:border-3 lg:border-4 border-white shadow-2xl bg-gradient-to-br from-pink-100 to-blue-100"
          style={{
            background: 'linear-gradient(135deg, #f3e7e9 0%, #e3eeff 100%)'
          }}
        >
          <img 
            src={imageSrc}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Viñetas flotantes solo para desktop */}
        <div className="hidden lg:block">
          {badges.map((text, index) => (
            <div
              key={`desktop-${index}`}
              ref={el => {
                if (badgeRefs.current.length <= badges.length) {
                  badgeRefs.current[index + badges.length] = el;
                }
              }}
              className={`absolute bg-green-400 text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg cursor-pointer hover:bg-green-300 transition-colors duration-200 ${
                index === 0 ? 'top-2 -right-12' :
                index === 1 ? 'bottom-4 -left-16' :
                'top-20 -right-20'
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
                delay={2000 + (index * 100)}
                duration={0.4}
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

export default MyPhoto;