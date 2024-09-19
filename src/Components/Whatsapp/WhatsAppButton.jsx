import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import whatsapp from '../../Assets/Pics/whatsapp.svg';

const WhatsAppButton = () => {
  const location = useLocation();
  const buttonRef = useRef(null);

  const showButtonRoutes = ['/', '/about', '/services', '/blog', '/contact'];
  const showButton = showButtonRoutes.includes(location.pathname);

  useEffect(() => {
    if (showButton && buttonRef.current) {
      const button = buttonRef.current;
      const animation = gsap.fromTo(
        button,
        { opacity: 1, scale: 1 },
        {
          opacity: 0.7,
          scale: 1.1,
          repeat: -1,
          yoyo: true,
          duration: 1.5,
          ease: 'power1.inOut',
          onUpdate: () => {
            const scaleValue = gsap.getProperty(button, 'scale');
            const boxShadowIntensity = Math.abs(Math.sin(scaleValue * Math.PI)) * 15; // Calculate the shadow intensity
            button.style.boxShadow = `0 0 ${boxShadowIntensity}px #25D366`;
          }
        }
      );

      // Cleanup animation on component unmount
      return () => {
        animation.kill();
      };
    }
  }, [showButton]);

  if (!showButton) return null;

  return (
    <a
      href="https://wa.me/+923056871204"
      className="fixed bottom-8 right-8 rounded-full shadow-2xl z-50 flex items-center justify-center"
      target="_blank"
      rel="noopener noreferrer"
      ref={buttonRef}
    >
      <img src={whatsapp} alt="WhatsApp" className="w-10 h-10" />
    </a>
  );
};

export default WhatsAppButton;
