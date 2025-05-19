import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FloatingCTAButton } from './FloatingCTA.style';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;
      
        const nearBottomThreshold = 150; // px from bottom to start hiding
      
        const isScrolledEnough = scrollY > 100;
        const isNearBottom = scrollY + viewportHeight > fullHeight - nearBottomThreshold;
      
        setIsVisible(isScrolledEnough && !isNearBottom);    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <FloatingCTAButton
      as="a"
      href="https://wa.me/98323646"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      isVisible={isVisible}
    >
      <FaWhatsapp size={28} />
    </FloatingCTAButton>
  );
};

export default FloatingCTA;
